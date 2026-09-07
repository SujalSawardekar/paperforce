const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceDir = path.resolve('public/Center Pinned');
const outDir = path.resolve('public/images');
const artifactDir = 'C:\\Users\\shreyas\\.gemini\\antigravity-ide\\brain\\7bb98291-be9b-418e-ade7-65f69c80d301';

async function getCroppedBuffer(filename) {
  const filePath = path.join(sourceDir, filename);
  const image = sharp(filePath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const a = data[(y * info.width + x) * info.channels + 3];
      if (a > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Safety fallback
  if (minX >= maxX || minY >= maxY) {
    return image.png().toBuffer();
  }

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  return sharp(filePath)
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .png()
    .toBuffer();
}

async function buildCollage(slideName, items, outputFilename) {
  const width = 2400;
  const height = 900;

  console.log(`\nGenerating ${slideName} (${outputFilename}) - 2400x900, zero shadow...`);
  const compositeLayers = [];

  for (const item of items) {
    console.log(`Processing [${item.name}]: ${item.file}`);
    const cropped = await getCroppedBuffer(item.file);

    const resized = await sharp(cropped)
      .resize({ height: item.targetH, fit: 'inside' })
      .png()
      .toBuffer();

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

  const outPath = path.join(outDir, outputFilename);
  fs.writeFileSync(outPath, fullOutputBuffer);
  fs.writeFileSync(path.join(artifactDir, outputFilename), fullOutputBuffer);

  console.log(`Successfully saved ${slideName} to: ${outPath}`);
}

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // ----------------------------------------------------
  // SLIDE 1: Global Education, Sports & Travel Collection
  // ----------------------------------------------------
  const slide1Items = [
    {
      name: "Soccer Kick 22x17",
      file: "02_22x17.png",
      targetH: 660,
      angle: -5,
      left: 170,
      top: 110
    },
    {
      name: "Island Karst Travel A4",
      file: "Venter book Notebook_01.png",
      targetH: 710,
      angle: 0,
      left: 810,
      top: 40
    },
    {
      name: "Yellow Poly A4",
      file: "1-A4 Poly Center Pinned NB 01.png",
      targetH: 700,
      angle: 2.5,
      left: 1220,
      top: 45
    },
    {
      name: "Red Gambia Map 22x17",
      file: "centered pin 22x17 cm _01.png",
      targetH: 560,
      angle: 0,
      left: 480,
      top: 170
    },
    {
      name: "Tiger Amber A4",
      file: "Venter book Notebook_02.png",
      targetH: 670,
      angle: 6,
      left: 1700,
      top: 160
    },
    {
      name: "Magenta Poly A4",
      file: "1-A4 Poly Center Pinned NB 02.png",
      targetH: 580,
      angle: -3,
      left: 1450,
      top: 190
    },
    {
      name: "Soccer Ball Pocket",
      file: "01_14x8.png",
      targetH: 360,
      angle: -4,
      left: 330,
      top: 440
    },
    {
      name: "Airplane Tropical 200x155",
      file: "01_200x155.png",
      targetH: 420,
      angle: 0,
      left: 670,
      top: 390
    },
    {
      name: "Kraft Lion College Book",
      file: "Craft cover Center pinned book.png",
      targetH: 460,
      angle: 0,
      left: 950,
      top: 400
    },
    {
      name: "Fantasy Pink Blossom 200x155",
      file: "02_200x155.png",
      targetH: 420,
      angle: 0,
      left: 1220,
      top: 410
    },
    {
      name: "Green Gambia Map 22x17",
      file: "centered pin 22x17 cm _02.png",
      targetH: 450,
      angle: 2,
      left: 1460,
      top: 350
    },
    {
      name: "Soccer Match Pocket",
      file: "02_14x8.png",
      targetH: 360,
      angle: 4,
      left: 1490,
      top: 460
    }
  ];

  await buildCollage("Center Pinned Slide 1", slide1Items, "hero-center-pinned-slide1.png");

  // ----------------------------------------------------
  // SLIDE 2: Commercial & Regional Export Range (Alternate Layout)
  // ----------------------------------------------------
  const slide2Items = [
    {
      name: "Stadium Portrait 21x16",
      file: "02_21x16.png",
      targetH: 660,
      angle: -5,
      left: 180,
      top: 110
    },
    {
      name: "Kraft Lion College Book",
      file: "Craft cover Center pinned book.png",
      targetH: 710,
      angle: -2,
      left: 770,
      top: 40
    },
    {
      name: "Chicago Canal Aerial A4",
      file: "Venter book Notebook_03.png",
      targetH: 700,
      angle: 2,
      left: 1200,
      top: 45
    },
    {
      name: "Magenta Poly A4",
      file: "1-A4 Poly Center Pinned NB 02.png",
      targetH: 560,
      angle: 0,
      left: 490,
      top: 170
    },
    {
      name: "Young Player Turf 22x17",
      file: "01_22x17.png",
      targetH: 660,
      angle: 6,
      left: 1690,
      top: 170
    },
    {
      name: "Soccer in Sand 21x16",
      file: "01_21x16.png",
      targetH: 560,
      angle: -3,
      left: 1440,
      top: 210
    },
    {
      name: "Soccer Match Pocket",
      file: "02_14x8.png",
      targetH: 360,
      angle: -4,
      left: 330,
      top: 440
    },
    {
      name: "Green Gambia Map 22x17",
      file: "centered pin 22x17 cm _02.png",
      targetH: 420,
      angle: 0,
      left: 680,
      top: 400
    },
    {
      name: "Classic Ornamental Arabic/English",
      file: "20x15.5 cm notebook.png",
      targetH: 450,
      angle: 0,
      left: 950,
      top: 410
    },
    {
      name: "Red Gambia Map 22x17",
      file: "centered pin 22x17 cm _01.png",
      targetH: 420,
      angle: 0,
      left: 1210,
      top: 410
    },
    {
      name: "Yellow Poly A4",
      file: "1-A4 Poly Center Pinned NB 01.png",
      targetH: 470,
      angle: 3,
      left: 1460,
      top: 320
    },
    {
      name: "Soccer Ball Pocket",
      file: "01_14x8.png",
      targetH: 360,
      angle: 4,
      left: 1490,
      top: 460
    }
  ];

  await buildCollage("Center Pinned Slide 2", slide2Items, "hero-center-pinned-slide2.png");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
