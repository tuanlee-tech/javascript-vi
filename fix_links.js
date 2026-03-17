const fs = require('fs');
const path = require('path');

const fixes = [
  { file: '1-js/03-code-quality/01-debugging-chrome.md', search: /\(\.\/debugging\/index\)/g, replace: '(#)' },
  { file: '1-js/02-first-steps/01-hello-world.md', search: /\(\/ui\)/g, replace: '(#)' },
  { file: '1-js/01-getting-started/4-devtools.md', search: /\(\.\/bug\)/g, replace: '(#)' },
  { file: '1-js/11-async/01-callbacks.md', search: /\(\/document\)/g, replace: '(#)' },
  { file: '2-ui/1-document/02-dom-nodes.md', search: /\(\.\/elk\)/g, replace: '(#)' },
  { file: '1-js/99-js-misc/04-reference-type.md', search: /\(\/bind\)/g, replace: '(#)' },
  { file: '7-animation/2-css-animations.md', search: /\(\/bezier-curve\)/g, replace: '(#)' }
];

let count = 0;

fixes.forEach(f => {
    try {
        let filePath = path.join(__dirname, f.file);
        let text = fs.readFileSync(filePath, 'utf8');
        let newText = text.replace(f.search, f.replace);
        if (text !== newText) {
            fs.writeFileSync(filePath, newText, 'utf8');
            console.log('Fixed link in ' + f.file);
            count++;
        } else {
            console.log('Could not find ' + f.search + ' in ' + f.file);
        }
    } catch(e) {
        console.error(e);
    }
});

console.log(`Finished fixing ${count} files.`);
