// Note: this file is primarily for me to not write JSON by hand
const fs = require('fs');

const scene = { 
  scenes: [
    {
      sky: {
        id: 'sky',
        color: '#6EBAA7'
      },
      isDefault: true,
      assets: [],
      entities: [
        {
          position: {
            x: 0,
            y: 0,
            z: 0,
          },
          geometry: 'primitive: sphere',
          material: 'color: #4444FF',
          physics: 'static-body',
        },
      ],
    }
  ],
}
fs.writeFile('scene.json', JSON.stringify(scene), (err) => {
  if (err) {
    console.error('There was a problem writing to the file ', err);
  } else { console.log('JSON Written!'); }
});
