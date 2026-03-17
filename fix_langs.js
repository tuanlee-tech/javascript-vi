const fs = require('fs');
const path = require('path');

const validLangs = new Set([
  'js', 'javascript', 'html', 'css', 'json', 'text', 'txt', 'bash', 'sh', 'shell', 'md', 'markdown', 'typescript', 'ts', 'sql', 'xml', 'yaml', 'yml'
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

function fixLangsExtreme(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Xử lý cả ``` và ````
    content = content.replace(/^[ \t]*(`{3,4})([a-zA-Z0-9_\-]+).*$/gm, (match, ticks, lang) => {
        let l = lang.toLowerCase();
        if (!validLangs.has(l)) {
            return ticks + 'text';
        }
        return ticks + l;
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

let count = 0;
walkDir('.', (file) => {
    if (file.endsWith('.md')) {
        try {
            if (fixLangsExtreme(file)) {
                count++;
                console.log(`Đã gỡ lỗi ngôn ngữ (3-4 ticks) trong: ${file}`);
            }
        } catch(e) {
            console.error(e);
        }
    }
});
console.log(`Hoàn thành. Đã xử lý ${count} file.`);
