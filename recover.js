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
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.name === 'write_to_file') {
            const target = tc.args.TargetFile;
            if (target) {
              const basename = path.basename(target);
              if (filesToRecover.includes(basename)) {
                fileContents[basename] = tc.args.CodeContent;
              }
            }
          }
        }
      }
    } catch (e) {
      // ignore JSON parse error
    }
  }

  for (const [basename, content] of Object.entries(fileContents)) {
    const outPath = path.join('e:\\codes\\paperforce\\src\\components\\home', basename);
    fs.writeFileSync(outPath, content);
    console.log(`Recovered ${basename}`);
  }
}

recover();
