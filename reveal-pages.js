const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const appDir = path.join(__dirname, 'src', 'app');

walkDir(appDir, (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('import UnderConstruction')) {
      console.log(`Revealing: ${filePath}`);
      
      // Match the pattern:
      // import UnderConstruction...
      // export default function Page() { ... }
      // /* 
      // (Actual content)
      // */
      
      // We will look for the first /* and remove everything before it.
      const startCommentIndex = content.indexOf('/*');
      if (startCommentIndex !== -1) {
        // Find the last */
        const endCommentIndex = content.lastIndexOf('*/');
        if (endCommentIndex !== -1) {
          // Extract the content between /* and */
          let realContent = content.substring(startCommentIndex + 2, endCommentIndex).trim();
          
          fs.writeFileSync(filePath, realContent, 'utf8');
          console.log(`-> Successfully revealed content in ${path.basename(filePath)}`);
        }
      }
    }
  }
});
