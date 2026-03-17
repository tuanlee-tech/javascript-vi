const fs = require('fs');
const path = require('path');

const VN_CHARS = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;

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

const stats = {
    translated: [],
    untranslated: [],
    partial: []
};

walkDir('.', (file) => {
    if (file.endsWith('.md') && file !== 'index.md' && file !== 'README.md') {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        // Lấy tiêu đề H1
        const h1Line = lines.find(l => l.trim().startsWith('# '));
        const title = h1Line ? h1Line.replace('# ', '').trim() : '';
        
        const hasVnTitle = VN_CHARS.test(title);
        
        // Kiểm tra mật độ tiếng Việt trong nội dung (bỏ qua code blocks)
        const textOnly = content.replace(/```[\s\S]*?```/g, '');
        const vnCharCount = (textOnly.match(/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/gi) || []).length;
        
        const result = {
            file,
            title,
            vnCharCount
        };

        if (vnCharCount > 100 && hasVnTitle) {
            stats.translated.push(result);
        } else if (vnCharCount < 20 && !hasVnTitle) {
            stats.untranslated.push(result);
        } else {
            stats.partial.push(result);
        }
    }
});

console.log('--- THỐNG KÊ DỊCH THUẬT ---');
console.log(`Tổng số bài: ${stats.translated.length + stats.untranslated.length + stats.partial.length}`);
console.log(`Đã dịch: ${stats.translated.length}`);
console.log(`Chưa dịch: ${stats.untranslated.length}`);
console.log(`Đang dịch dở (Partial): ${stats.partial.length}`);

if (stats.untranslated.length > 0) {
    console.log('\n--- DANH SÁCH BÀI CHƯA DỊCH ---');
    stats.untranslated.slice(0, 50).forEach(s => console.log(`- [ ] ${s.file}: ${s.title}`));
    if (stats.untranslated.length > 50) console.log('... và thêm ' + (stats.untranslated.length - 50) + ' bài khác.');
}

if (stats.partial.length > 0) {
    console.log('\n--- DANH SÁCH BÀI DỊCH DỞ ---');
    stats.partial.slice(0, 20).forEach(s => console.log(`- [/] ${s.file}: ${s.title} (Số chữ VN: ${s.vnCharCount})`));
}
