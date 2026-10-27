import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { ZipArchive } = require('archiver');

const zipPath = path.resolve('bamarla-village-portal.zip');
const publicZipPath = path.resolve('public/bamarla-village-portal.zip');

const output = fs.createWriteStream(zipPath);
const archive = new ZipArchive({
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`ZIP created successfully: ${archive.pointer()} total bytes at ${zipPath}`);
  fs.copyFileSync(zipPath, publicZipPath);
  console.log(`Copied ZIP to ${publicZipPath} for direct download.`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add all HTML files
const files = fs.readdirSync('.');
files.forEach(file => {
  if (file.endsWith('.html') || file === 'sitemap.xml' || file === 'robots.txt' || file === 'manifest.json' || file === 'README-HI.txt' || file === 'favicon.ico') {
    archive.file(file, { name: file });
  }
});

// Add assets folder
archive.directory('assets/', 'assets');

archive.finalize();
