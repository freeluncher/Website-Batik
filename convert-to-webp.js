const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');

(async () => {
  const files = await imagemin(['public/*.jpg'], {
    destination: 'public/webp',
    plugins: [
      imageminWebp({quality: 75})
    ]
  });
  console.log('Converted files:', files.map(f => path.basename(f.destinationPath)));
})();
