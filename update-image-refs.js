const fs = require('fs');
const path = require('path');

function updateImageReferences(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      updateImageReferences(fullPath);
    } else if (file.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      const originalContent = content;

      // Replace image file extensions with webp
      content = content.replace(/src="([^"]*)\.(jpg|jpeg|png|gif)"/gi, (match, path, ext) => {
        return `src="${path}.webp"`;
      });

      // Also replace in meta tags (Open Graph, Twitter)
      content = content.replace(/content="([^"]*)\.(jpg|jpeg|png|gif)"/gi, (match, imgPath, ext) => {
        return `content="${imgPath}.webp"`;
      });

      // Replace in href attributes for favicons
      content = content.replace(/href="([^"]*)\.(jpg|jpeg|png|gif)"/gi, (match, imgPath, ext) => {
        return `href="${imgPath}.webp"`;
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`✓ Updated: ${file.name}`);
      }
    }
  }
}

const projectRoot = __dirname;
updateImageReferences(projectRoot);
console.log('\n✓ All image references updated to WebP format');
