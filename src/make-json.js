// Note: this file is primarily for me to not write JSON by hand
const fs = require('fs');

const scene = {
  sky: '',
  isDefault: true,
  assets: {},
  geometries: [
    {
      type: 'Sphere',
      position: {
        x: 0,
        y: 0,
        z: 0
      },
      scale: 1,
      color: '#4444FF',
      physics: {
        body: 'static'
      }
    }
  ]
}

const scene = JSON.stringify(scene);
fs.writeFile('scene.json', JSON.stringify(scene), (err) => {
  console.error('There was a problem writing to the file');
});
