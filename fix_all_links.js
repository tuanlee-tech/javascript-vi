const fs = require('fs');
const path = require('path');

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

function fixLinks(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Tìm và thay thế các link markdown [text](url)
    content = content.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (match, text, url) => {
        let isBad = false;
        
        if (url.startsWith('info:')) {
            isBad = true;
        } else if (url.endsWith('.html')) {
            isBad = true;
        } else if (url.startsWith('/') && !url.startsWith('//')) {
            isBad = true;
        } else if (url.startsWith('./') && !url.match(/\.(png|jpe?g|gif|svg|webp|md)$/i) && !url.includes('.md#')) {
            // Các link relative không có đuôi hợp lệ
            isBad = true;
        } else if (['debugging/index', 'bug', 'elk'].includes(url)) {
            isBad = true;
        }

        if (isBad) {
            return `[${text}](#)`;
        }
        
        return match;
    });

    // Sửa thêm các reference link dạng [](info:...)
    content = content.replace(/\[\]\(([^)]+)\)/g, (match, url) => {
        if (url.startsWith('info:')) {
            return `[#](#)`;
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

let count = 0;
walkDir('.', (file) => {
    if (file.endsWith('.md')) {
        try {
            if (fixLinks(file)) {
                count++;
                console.log(`Fixed dead links in: ${file}`);
            }
        } catch(e) {
            console.error(e);
        }
    }
});
console.log(`Hoàn thành sửa link trong ${count} file.`);
