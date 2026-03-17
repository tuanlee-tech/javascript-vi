const fs = require('fs');
const path = require('path');

const allowedTags = new Set([
  'html', 'head', 'body', 'div', 'span', 'p', 'a', 'b', 'i', 'strong', 'em', 
  'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'tfoot', 'caption',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'hr', 'img', 'script', 'style', 
  'iframe', 'template', 'nav', 'header', 'footer', 'main', 'section', 'article',
  'aside', 'figure', 'figcaption', 'dl', 'dt', 'dd', 'kbd', 'code', 'pre', 'q',
  'blockquote', 'button', 'input', 'form', 'textarea', 'select', 'option', 
  'label', 'fieldset', 'legend', 'del', 'ins', 'sup', 'sub', 'mark', 'ruby',
  'rt', 'rp', 'bdo', 'bdi', 'wbr', 'time', 'progress', 'meter', 'details', 'summary',
  'svg', 'path', 'g', 'circle', 'rect', 'line', 'polygon', 'polyline', 'text', 'defs', 'use',
  'picture', 'source', 'video', 'audio', 'track', 'map', 'area', 'object', 'param',
  'embed', 'canvas', 'math', 'mi', 'mn', 'mo', 'ms', 'mspace', 'mtext', 'merror',
  'title', 'link', 'meta', 'base'
]);

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            if (!['node_modules', '.git', '.vitepress'].includes(f)) {
                walkDir(dirPath, callback);
            }
        } else {
            callback(dirPath);
        }
    });
}

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Fix broken backticks like `on``<event>``` or `mouse``<event>``` or `Reflect.``<method>```
    content = content.replace(/(`[a-zA-Z0-9_.]+)``(<[^>]+>)```/g, '$1$2`');
    content = content.replace(/`([a-zA-Z0-9_.]+)``(<[^>]+>)```/g, '`$1$2`');

    // 2. Convert custom blocks (```warn, ```smart, etc.) correctly
    const replacements = {
        'warn': 'warning',
        'smart': 'tip',
        'online': 'info',
        'quote': 'info'
    };

    for (let [tag, container] of Object.entries(replacements)) {
        const regex = new RegExp(`^(\`{3,4})${tag}[^\\n]*\\r?\\n([\\s\\S]*?)\\n\\1\\s*$`, 'gm');
        content = content.replace(regex, (match, backticks, inner) => {
            return `::: ${container}\n${inner.trim()}\n:::\n`;
        });
    }

    // 3. Fix unclosed ::: blocks
    const containers = ['warning', 'info', 'tip', 'danger', 'note'];
    containers.forEach(type => {
        const startRegex = new RegExp(`^::: ${type}[^\\n]*\\r?\\n`, 'gm');
        let match;
        while ((match = startRegex.exec(content)) !== null) {
            const startIdx = match.index;
            const contentStartIdx = startIdx + match[0].length;
            const endRegex = new RegExp(`^(\\s*)(:::|\\s*\`{3,4})\\s*$`, 'gm');
            endRegex.lastIndex = contentStartIdx;
            const endMatch = endRegex.exec(content);
            
            if (endMatch && endMatch[2].trim().startsWith('`')) {
                const innerContent = content.substring(contentStartIdx, endMatch.index);
                const innerBackticks = (innerContent.match(/^`{3,4}/gm) || []).length;
                if (innerBackticks % 2 === 0) {
                     const replacement = `::: ${type}\n${innerContent.trim()}\n:::\n`;
                     content = content.substring(0, startIdx) + replacement + content.substring(endMatch.index + endMatch[0].length);
                     startRegex.lastIndex = 0;
                }
            }
        }
    });

    // 4. Escape pseudo-tags like <event> or <input>
    let lines = content.split(/\r?\n/);
    let inCodeBlock = false;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.match(/^`{3,4}/)) {
            inCodeBlock = !inCodeBlock;
            continue;
        }
        if (!inCodeBlock) {
            line = line.replace(/<(\/?[a-zA-Z0-9_\-:]+)(?:[^>]*)?>/g, (tagMatch, tagName) => {
                let t = tagName.replace(/^\//, '').toLowerCase();
                if (!allowedTags.has(t) && !t.includes('!doctype') && !t.includes('!--')) {
                    return tagMatch.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                }
                return tagMatch;
            });
            lines[i] = line;
        }
    }
    content = lines.join('\n');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
        return true;
    }
    return false;
}

const targetDir = process.argv[2] || '.';
console.log(`Scanning ${targetDir}...`);
let count = 0;
walkDir(path.resolve(targetDir), (filePath) => {
    if (filePath.endsWith('.md')) {
        if (fixFile(filePath)) count++;
    }
});
console.log(`Done. Fixed ${count} files.`);
