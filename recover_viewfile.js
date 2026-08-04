const fs = require('fs');
const path = require('path');
const readline = require('readline');

const transcriptPath = `C:\\Users\\shreyas\\.gemini\\antigravity-ide\\brain\\afafe6b6-22ad-4330-ae4f-495014e2e6a7\\.system_generated\\logs\\transcript_full.jsonl`;
const filesToRecover = [
  'blog-preview-section.tsx',
  'certifications-section.tsx',
  'faq-section.tsx',
  'global-reach-section.tsx',
  'hero-mockup.tsx',
  'industries-section.tsx',
  'manufacturing-section.tsx',
  'product-section.tsx',
  'sourcing-advantages-section.tsx',
  'why-choose-section.tsx'
];

const fileContents = {};

async function recover() {
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'VIEW_FILE' && obj.status === 'DONE' && obj.content) {
        // extract file path
        const match = obj.content.match(/File Path: `file:\/\/\/[^`]+(\/[^`\/]+\.tsx)`/);
        if (match) {
          const basename = path.basename(match[1]);
          if (filesToRecover.includes(basename)) {
            // parse the lines
            const lines = obj.content.split('\\n'); // it might be literal '\n' if parsed, wait, it's already parsed so it's actual newlines
            const actualLines = obj.content.split('\n');
            let contentStr = '';
            let parsing = false;
            for (const l of actualLines) {
              if (l.match(/^\d+: /)) {
                contentStr += l.replace(/^\d+: /, '') + '\n';
              }
            }
            if (contentStr.length > 0) {
              fileContents[basename] = contentStr;
            }
          }
        }
      }
    } catch (e) {
      // ignore
    }
  }

  for (const [basename, content] of Object.entries(fileContents)) {
    const outPath = path.join('e:\\codes\\paperforce\\src\\components\\home', basename);
    fs.writeFileSync(outPath, content);
    console.log(`Recovered ${basename} from VIEW_FILE (${content.length} bytes)`);
  }
}

recover();
