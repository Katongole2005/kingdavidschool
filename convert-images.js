const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImagesToWebP(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      await convertImagesToWebP(fullPath);
    } else if (/\.(jpg|jpeg|png|gif)$/i.test(file.name)) {
      const outputPath = path.join(dir, `${path.parse(file.name).name}.webp`);
      try {
        await sharp(fullPath).webp({ quality: 80 }).toFile(outputPath);
        console.log(`✓ Converted: ${file.name} → ${path.basename(outputPath)}`);
      } catch (error) {
        console.error(`✗ Error converting ${file.name}:`, error.message);
      }
    }
  }
}

const imagesDir = path.join(__dirname, 'assets', 'images');
convertImagesToWebP(imagesDir).catch(console.error);
