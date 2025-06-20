import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const files = await imagemin([path.join(__dirname, 'public/*.jpg')], {
    destination: path.join(__dirname, 'public/webp'),
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  });
  console.log('Converted files:', files.map(f => path.basename(f.destinationPath)));
})();
