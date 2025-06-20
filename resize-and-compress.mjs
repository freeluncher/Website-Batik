import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminJpegtran from 'imagemin-jpegtran';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs/promises';

const srcDir = 'public';
const outDir = 'public/webp-resize';

async function resizeAndCompressJpg(file) {
  const fileName = path.basename(file);
  const outJpg = path.join(outDir, fileName);
  const outWebp = path.join(outDir, fileName.replace(/\.jpg$/i, '.webp'));
  // Resize and compress JPG
  await sharp(file)
    .resize(400, 500, { fit: 'cover' })
    .jpeg({ quality: 75 })
    .toFile(outJpg);
  // Convert to WebP
  await sharp(file)
    .resize(400, 500, { fit: 'cover' })
    .webp({ quality: 75 })
    .toFile(outWebp);
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  const files = await fs.readdir(srcDir);
  const jpgs = files.filter(f => f.endsWith('.jpg'));
  for (const jpg of jpgs) {
    await resizeAndCompressJpg(path.join(srcDir, jpg));
    console.log('Processed', jpg);
  }
}

main();
