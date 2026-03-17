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

const issues = {
    unsupportedHtmlTags: new Set(),
    hasWarnings: false,
    hasStars: false,
    codeblocks: new Set()
};

walkDir('.', function(filePath) {
    if (filePath.endsWith('.md')) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Check for :::
        if (/^:::.*$/m.test(content)) {
            issues.hasWarnings = true;
        }

        // Check for *!*
        if (/\*!\*/.test(content) || /\*\/!\*/.test(content)) {
            issues.hasStars = true;
        }
        
        // Find weird codeblocks
        let matches = content.match(/^```([a-zA-Z]+[^\n]*)$/gm);
        if (matches) {
            for (let match of matches) {
                // Ignore plain js, html, etc. Capture the ones with modifiers.
                let modifier = match.replace(/^```/, '').trim();
                // A valid language is usually one word without spaces, or we know it's valid.
                if (modifier.includes(' ')) {
                     issues.codeblocks.add(modifier);
                }
            }
        }

        // Find fake HTML tags
        let parts = content.split('```');
        for (let i = 0; i < parts.length; i += 2) {
            let tags = parts[i].match(/<(\/?[a-zA-Z0-9_\-:]+)(?:\s+[^>]+)?>/g);
            if (tags) {
                for(let tag of tags) {
                    let tagName = tag.match(/<(\/?)([a-zA-Z0-9_\-:]+)/)[2].toLowerCase();
                    if (!allowedTags.has(tagName) && !tagName.includes('!doctype')) {
                        issues.unsupportedHtmlTags.add(tag);
                    }
                }
            }
        }
    }
});

console.log("=== BÁO CÁO CÁC LỖI MARKDOWN CÓ THỂ LÀM CRASH VUE/VITEPRESS ===");
console.log("\n1. Các thẻ HTML không hợp lệ (Pseudo-HTML):");
for (let tag of issues.unsupportedHtmlTags) {
    console.log("  - " + tag);
}

console.log("\n2. Có sử dụng khối ::: (chưa được cài đặt plugin tương ứng trong vitepress) ?", issues.hasWarnings ? "CÓ" : "KHÔNG");

console.log("\n3. Có sử dụng highlight *!* và */!* ?", issues.hasStars ? "CÓ" : "KHÔNG");

console.log("\n4. Các Code Block Modifiers không chuẩn (Gây lỗi Vitepress):");
for (let block of issues.codeblocks) {
    console.log("  - " + block);
}
