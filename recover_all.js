const fs = require('fs');
const path = require('path');
const readline = require('readline');

const transcriptPath = `C:\\Users\\shreyas\\.gemini\\antigravity-ide\\brain\\afafe6b6-22ad-4330-ae4f-495014e2e6a7\\.system_generated\\logs\\transcript_full.jsonl`;
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
        const match = obj.content.match(/File Path: `file:\/\/\/[^`]+(src\/[^`]+)`/i);
        if (match) {
          const relativePath = match[1];
          // ONLY take the first valid content if not already populated
          if (!fileContents[relativePath]) {
            const actualLines = obj.content.split('\n');
            let contentStr = '';
            for (const l of actualLines) {
              if (l.match(/^\d+: /)) {
                contentStr += l.replace(/^\d+: /, '') + '\n';
              }
            }
            if (contentStr.length > 10) { // arbitrary length to ensure it's not the 1 byte file
              fileContents[relativePath] = contentStr;
            }
          }
        }
      }
    } catch (e) {}
  }

  for (const [relPath, content] of Object.entries(fileContents)) {
    const outPath = path.join('e:\\codes\\paperforce', relPath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, content);
    console.log(`Recovered ${relPath} (${content.length} bytes)`);
  }
}

recover();
