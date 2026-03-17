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

function cleanMarkdown(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Loại bỏ các khối chứa mặt nạ đặc biệt: *!* và */!*
    content = content.replace(/\*!\*/g, '');
    content = content.replace(/\*\/!\*/g, '');
    
    // 2. Thay thế ::: thành blockquote (tạm thời để không bị vỡ bố cục) hhoặc xoá dòng nếu nó chống lại Vitepress.
    // Thường :::warning ... :::, nếu không dùng plugin Vitepress sẽ lỗi. Vitepress hỗ trợ Custom Containers ::: info, tip, warning, danger, details.
    // Tuy nhiên nó yêu cầu có khoảng trắng hoặc viết liền đúng. 
    // Chúng ta giữ lại `::: info / warning / tip / danger / details` và thay các thẻ lạ thành text thường, 
    // Hoặc tạm thời loại bỏ hoàn toàn các dòng chứa `:::` đóng/mở vì markdown tiêu chuẩn không hỗ trợ nếu Vitepress không báo nhận.
    // Đoạn check_md cho thấy có ::: đang làm lỗi, do config thiếu. Tạm thời ta comment out thẻ rác hoặc đơn giản regex xoá bỏ toàn bộ dòng chứa `:::` 
    content = content.replace(/^:::.*$/gm, '');

    // 3. Xoá modifiers sau ngôn ngữ của code blocks: ```js run -> ```js
    content = content.replace(/^```([a-zA-Z]+[^\n]*)$/gm, (match, modifier) => {
        let firstWord = modifier.trim().split(' ')[0].toLowerCase();
        // Đặc biệt: quote -> text cho an toàn
        if(firstWord === "quote" || firstWord === "online") return "```text";
        return "```" + firstWord;
    });

    // 4. Các pseudo tags: <info:xxx>, <property name>... 
    // Ta tách bằng ```, và chỉ xử lý nội dung không thuộc code blocks
    let parts = content.split('```');
    for (let i = 0; i < parts.length; i += 2) { // Các index chẵn là ngoài code block
        parts[i] = parts[i].replace(/<(\/?[a-zA-Z0-9_\-:]+)(?:\s+[^>]+)?>/g, (fullMatch, tagNameUnparsed) => {
            let tagName = tagNameUnparsed.replace(/^\//, '').toLowerCase();
            
            // Xử lý một số tag đặc biệt không được parse
            if (tagName.includes('!doctype')) return fullMatch;
            
            // Nếu không nằm trong allowedTags (ví dụ info:xxx, property, value, f...), ta biến chúng thành inline code `...`
            if (!allowedTags.has(tagName)) {
                return `\`${fullMatch}\``;
            }
            return fullMatch;
        });
    }
    content = parts.join('```');

    if (originalContent !== content) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

let modifiedCount = 0;
walkDir('.', function(filePath) {
    if (filePath.endsWith('.md')) {
        try {
           if (cleanMarkdown(filePath)) modifiedCount++;
        } catch(e) {
            console.error("Lỗi khi xử lý file " + filePath, e);
        }
    }
});

console.log(`Hoàn thành. Đã thay đổi ${modifiedCount} file.`);
