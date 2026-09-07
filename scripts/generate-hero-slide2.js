const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createSlide2Collage() {
  const width = 2400;
  const height = 900;

  console.log('Generating Hero Slide 2 Collage (2400x900, zero shadow)...');

  // Strictly back-to-front layer ordering with a distinct composition
  const items = [
    // 1. Far Left Back: Red/Orange 1-Subject (tilted -4 deg)
    {
      name: "Red/Orange 10.8x8",
      file: "Spiral Notebook (10.8 x8 )IN_03.png",
      targetH: 670,
      angle: -4,
      left: 180,
      top: 110
    },
    // 2. Center-Back Left: Flagship Gold Foil Deer Mint/Navy A4 (upright)
    {
      name: "Gold Foil Deer A4",
      file: "A4 Spiral Notebook silver spring reverse book foile _01.png",
      targetH: 700,
      angle: 0,
      left: 770,
      top: 50
    },
    // 3. Center-Back Right: Sage/Mint Minimalist A4 (slight +2.5 deg tilt)
    {
      name: "Sage Green A4",
      file: "Spiral Notebook A4_03.png",
      targetH: 690,
      angle: 2.5,
      left: 1200,
      top: 45
    },
    // 4. Mid-Left: Pastel Pink/Slate A5 (upright)
    {
      name: "Pastel A5",
      file: "Spiral Notebook A5_02.png",
      targetH: 550,
      angle: 0,
      left: 490,
      top: 170
    },
    // 5. Far Right Back: Green 3-Subject (tilted -6 deg)
    {
      name: "Green 10.8x8",
      file: "Spiral Notebook (10.8 x8 )IN_02.png",
      targetH: 670,
      angle: -6,
      left: 1680,
      top: 180
    },
    // 6. Mid-Right: Neon Coral / Hot Pink 7x5 (slight -2 deg tilt)
    {
      name: "Neon Coral 7x5",
      file: "Spiral Notebook 7x5_02.png",
      targetH: 490,
      angle: -2,
      left: 1260,
      top: 270
    },
    // 7. Right Mid-Foreground: Neon Blue 7x5 (tilted +3 deg)
    {
      name: "Neon Blue 7x5",
      file: "Spiral Notebook 7x5_04.png",
      targetH: 440,
      angle: 3,
      left: 1470,
      top: 310
    },
    // 8. Foreground Left: Blue/Green Stenobook (tilted -4 deg)
    {
      name: "Stenobook 01",
      file: "Stenobook_01.png",
      targetH: 345,
      angle: -4,
      left: 330,
      top: 450
    },
    // 9. Foreground Left-Center: Pocket Umbrella 4x5.5 (upright)
    {
      name: "Pocket Umbrella 4x5.5",
      file: "Spiral Notebook 4x5.5 silver spring_02.png",
      targetH: 340,
      angle: 0,
      left: 680,
      top: 390
    },
    // 10. Foreground Center: Neon Lime Green 7x5 (upright centerpiece)
    {
      name: "Neon Lime 7x5",
      file: "Spiral Notebook 7x5_01.png",
      targetH: 430,
      angle: 0,
      left: 920,
      top: 410
    },
    // 11. Foreground Center-Right: Pocket Rainbow 4x5.5 (upright)
    {
      name: "Pocket Rainbow 4x5.5",
      file: "Spiral Notebook 4x5.5 silver spring_03.png",
      targetH: 330,
      angle: 0,
      left: 1110,
      top: 425
    },
    // 12. Foreground Right: Teal/Pinstripe Stenobook (upright)
    {
      name: "Stenobook 04",
      file: "Stenobook_04.png",
      targetH: 345,
      angle: 0,
      left: 1280,
      top: 455
    }
  ];

  const sourceDir = path.resolve('public/Sprial');
  const compositeLayers = [];

  for (const item of items) {
    const srcPath = path.join(sourceDir, item.file);
    console.log(`Processing [${item.name}]: ${item.file}`);

    // Resize maintaining aspect ratio
    const resized = await sharp(srcPath)
      .resize({ height: item.targetH, fit: 'inside' })
      .png()
      .toBuffer();

    // Rotate with transparent alpha (no shadows)
    const rotated = await sharp(resized)
      .rotate(item.angle, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    compositeLayers.push({
      input: rotated,
      left: Math.round(item.left),
      top: Math.round(item.top)
    });
  }

  // Pure transparent canvas, zero shadow
  const fullCanvas = sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }
  });

  const fullOutputBuffer = await fullCanvas
    .composite(compositeLayers)
    .png({ quality: 96, compressionLevel: 8 })
    .toBuffer();

  const outDir = path.resolve('public/images');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const slide2Path = path.join(outDir, 'hero-stationery-slide2.png');
  fs.writeFileSync(slide2Path, fullOutputBuffer);

  const artifactDir = 'C:\\Users\\shreyas\\.gemini\\antigravity-ide\\brain\\7bb98291-be9b-418e-ade7-65f69c80d301';
  fs.writeFileSync(path.join(artifactDir, 'hero-stationery-slide2.png'), fullOutputBuffer);

  console.log('Saved Hero Slide 2 Collage to:', slide2Path);
}

createSlide2Collage().catch(err => {
  console.error(err);
  process.exit(1);
});
