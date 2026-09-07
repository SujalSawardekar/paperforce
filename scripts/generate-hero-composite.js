const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function createFullHeroCollage() {
  // Canvas width & height matching the exact 2.67:1 aspect ratio of reference card
  const width = 2400;
  const height = 900;

  console.log('Generating Full Width Hero Collage matching reference image (2400x900)...');

  // Layer order: strictly back-to-front matching the reference layout
  const items = [
    // 1. Far Left Back: Coffee Graphic A4 (tilted ~3.5 deg)
    {
      name: "Coffee A4",
      file: "Spiral Notebook A4_01.png",
      targetH: 700,
      angle: 3.5,
      left: 200,
      top: 100,
      shadowBlur: 20,
      shadowOffset: 18,
      shadowOpacity: 0.18
    },
    // 2. Center-Left Back: Strawberry Graphic A4 (upright)
    {
      name: "Strawberry A4",
      file: "Spiral Notebook A4_02.png",
      targetH: 680,
      angle: 0,
      left: 885,
      top: 50,
      shadowBlur: 20,
      shadowOffset: 18,
      shadowOpacity: 0.18
    },
    // 3. Center-Right Back: Peach Minimalist A4 (slight -2 deg tilt)
    {
      name: "Peach A4",
      file: "Spiral Notebook A4_04.png",
      targetH: 690,
      angle: -2,
      left: 1350,
      top: 45,
      shadowBlur: 20,
      shadowOffset: 18,
      shadowOpacity: 0.18
    },
    // 4. Right Mid-Back: Silver Foil Elephant Dusty Rose A4 (slight -3.5 deg tilt)
    {
      name: "Silver Foil Elephant A4",
      file: "A4 Spiral Notebook silver spring reverse book foile _02.png",
      targetH: 645,
      angle: -3.5,
      left: 1510,
      top: 145,
      shadowBlur: 22,
      shadowOffset: 20,
      shadowOpacity: 0.20
    },
    // 5. Left-Mid: Geometric 10.8 x 8" (slight -1.5 deg tilt)
    {
      name: "Geometric 10.8x8",
      file: "Spiral Notebook (10.8 x8 )IN_04.png",
      targetH: 645,
      angle: -1.5,
      left: 510,
      top: 130,
      shadowBlur: 22,
      shadowOffset: 20,
      shadowOpacity: 0.20
    },
    // 6. Center-Right Mid: Khaki Minimalist A5 (upright)
    {
      name: "Khaki A5",
      file: "Spiral Notebook A5_01.png",
      targetH: 510,
      angle: 0,
      left: 1250,
      top: 250,
      shadowBlur: 22,
      shadowOffset: 20,
      shadowOpacity: 0.20
    },
    // 7. Far Right: Yellow 1-Subject 10.8 x 8" (tilted -8 deg)
    {
      name: "Yellow 10.8x8",
      file: "Spiral Notebook (10.8 x8 )IN_01.png",
      targetH: 625,
      angle: -8,
      left: 1720,
      top: 215,
      shadowBlur: 24,
      shadowOffset: 22,
      shadowOpacity: 0.22
    },
    // 8. Foreground Left: Red Stenobook 6 x 9" (tilted -6 deg)
    {
      name: "Red Stenobook",
      file: "Stenobook_02.png",
      targetH: 340,
      angle: -6,
      left: 375,
      top: 450,
      shadowBlur: 18,
      shadowOffset: 16,
      shadowOpacity: 0.22
    },
    // 9. Foreground Left-Center: Purple Fast Food Pocket 4 x 5.5" (upright)
    {
      name: "Purple Fast Food 4x5.5",
      file: "Spiral Notebook 4x5.5 silver spring_01.png",
      targetH: 325,
      angle: 0,
      left: 790,
      top: 385,
      shadowBlur: 18,
      shadowOffset: 16,
      shadowOpacity: 0.22
    },
    // 10. Foreground Center: Neon Yellow 7 x 5" (upright)
    {
      name: "Neon Yellow 7x5",
      file: "Spiral Notebook 7x5_03.png",
      targetH: 415,
      angle: 0,
      left: 1030,
      top: 400,
      shadowBlur: 20,
      shadowOffset: 18,
      shadowOpacity: 0.22
    },
    // 11. Foreground Center-Right: Navy Stenobook 6 x 9" (upright)
    {
      name: "Navy Stenobook",
      file: "Stenobook_03.png",
      targetH: 340,
      angle: 0,
      left: 1490,
      top: 450,
      shadowBlur: 18,
      shadowOffset: 16,
      shadowOpacity: 0.22
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

    // Rotate with transparent alpha
    const rotated = await sharp(resized)
      .rotate(item.angle, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    // Crisp authentic product image (no shadows)
    compositeLayers.push({
      input: rotated,
      left: Math.round(item.left),
      top: Math.round(item.top)
    });
  }

  // 1. Full Canvas Render with transparent background
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

  const fullOutPath = path.join(outDir, 'hero-stationery-collage.png');
  fs.writeFileSync(fullOutPath, fullOutputBuffer);
  fs.writeFileSync(path.join(outDir, 'hero-stationery-clean.png'), fullOutputBuffer);

  const artifactDir = 'C:\\Users\\shreyas\\.gemini\\antigravity-ide\\brain\\7bb98291-be9b-418e-ade7-65f69c80d301';
  fs.writeFileSync(path.join(artifactDir, 'hero-stationery-collage.png'), fullOutputBuffer);

  console.log('Saved Full Width Hero Collage:', fullOutPath);
  console.log('Artifact saved successfully!');
}

createFullHeroCollage().catch(err => {
  console.error(err);
  process.exit(1);
});
