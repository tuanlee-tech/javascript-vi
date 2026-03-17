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
            if (!['node_modules', '.git', '.vitepress', 'courses'].includes(f)) {
                walkDir(dirPath, callback);
            }
        } else {
            callback(dirPath);
        }
    });
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 0. Wrap bare <script> tags not in code blocks into ```html
    let codeBlocks = content.split('```');
    for (let i = 0; i < codeBlocks.length; i += 2) {
        codeBlocks[i] = codeBlocks[i].replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (match) => {
             // In javascript.info port, the bare <script> tags usually were examples running inline. 
             // Wrapping them so Vue does not parse them as Component scripts.
             return '\n```html\n' + match + '\n```\n';
        });
    }
    content = codeBlocks.join('```');

    let lines = content.split(/\r?\n/);
    let inCodeBlock = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // 1. Remove *!* and */!*
        line = line.replace(/\*!\*/g, '');
        line = line.replace(/\*\/!\*/g, '');

        if (line.match(/^```/)) {
            let match = line.match(/^```([a-zA-Z]+)(.*)$/);
            if (match) {
                inCodeBlock = true;
                let lang = match[1].toLowerCase();
                if (lang === 'quote' || lang === 'online') {
                    line = "```text";
                } else {
                    line = "```" + lang;
                }
            } else if (line.trim() === '```') {
                inCodeBlock = false;
            } else {
                inCodeBlock = !inCodeBlock;
            }
        } else {
            if (!inCodeBlock) {
                if (line.match(/^:::/)) {
                    // Remove ::: blocks entirely
                    line = "";
                } else {
                    // Escape pseudo HTML tags
                    let parts = line.split(/(`[^`]*`)/);
                    for (let j = 0; j < parts.length; j += 2) {
                        parts[j] = parts[j].replace(/<(\/?[a-zA-Z0-9_\-:]+)(?:[^>]*)?>/g, (tagMatch, tagName) => {
                            let t = tagName.replace(/^\//, '').toLowerCase();
                            if (!allowedTags.has(t) && !t.includes('!doctype')) {
                                return tagMatch.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                            }
                            return tagMatch;
                        });
                    }
                    line = parts.join('');
                }
            }
        }

        lines[i] = line;
    }

    let result = lines.join('\n');
    if (originalContent !== result) {
        fs.writeFileSync(filePath, result, 'utf8');
        return true;
    }
    return false;
}

let count = 0;
walkDir('.', function(filePath) {
    if (filePath.endsWith('.md')) {
        try {
            if (processFile(filePath)) {
                count++;
                console.log("Fixed " + filePath);
            }
        } catch(e) {
            console.error("Error processing " + filePath, e);
        }
    }
});
console.log("Done fixing. " + count + " files modified.");
