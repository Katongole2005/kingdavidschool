const fs = require('fs');
const path = require('path');

// Simple CSS minifier
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*([{}:;,>+~])\s*/g, '$1') // Remove spaces around special chars
    .trim();
}

// Minify CSS files
function minifyCSSFiles() {
  const cssDir = path.join(__dirname, 'assets/css');
  const files = fs.readdirSync(cssDir);
  
  for (const file of files) {
    if (file.endsWith('.css')) {
      const filePath = path.join(cssDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const minified = minifyCSS(content);
      fs.writeFileSync(filePath, minified, 'utf-8');
      console.log(`✓ Minified: ${file}`);
    }
  }
}

// Add performance optimizations to HTML files
function optimizeHTML() {
  const files = fs.readdirSync(__dirname, { withFileTypes: true });
  
  for (const file of files) {
    if (!file.isFile() || !file.name.endsWith('.html')) continue;
    
    const filePath = path.join(__dirname, file.name);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Only process if not already optimized
    if (!content.includes('dns-prefetch')) {
      // Remove duplicate Font Awesome links - keep only the minified version
      content = content.replace(
        /<link rel="stylesheet" href="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/6\.5\.1\/css\/all\.min\.css">\n\s*<!-- Font Awesome – NO integrity attribute[^>]*>\n\s*<link rel="stylesheet" href="https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/6\.5\.0\/css\/all\.min\.css"[^>]*\/>/g,
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">'
      );
      
      // Add DNS prefetch and other resource hints after charset
      const dnsHints = `    <!-- Performance Optimizations -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    <link rel="dns-prefetch" href="https://pub-05955d1747df4f86b7854058d3ab270b.r2.dev">`;
      
      content = content.replace(
        /(<meta name="viewport"[^>]*>)/,
        '$1\n' + dnsHints
      );
      
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✓ Optimized: ${file.name}`);
    }
  }
}

minifyCSSFiles();
optimizeHTML();
console.log('\n✅ Site optimization complete!');
