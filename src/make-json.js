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
      assets: [
        {
          src: './assets/key.obj',
          id: 'key'
        },
        {
          src: './assets/key.mtl',
          id: 'key-mtl'
        }
      ],
      entities: [
        // {
        //   position: {
        //     x: 0,
        //     y: 0,
        //     z: 0,
        //   },
        //   geometry: 'primitive: sphere',
        //   material: 'color: #4444FF',
        //   physics: 'static-body',
        // },
        {
          type: 'a-plane',
          position: '0 0 -4',
          width: 100,
          height: 100,
          material: 'color: #AA1188',
          rotation: '-90 0 0',
          'static-body': 'shape: box',
        },
        {
          position: {
            x: 0,
            y: .4,
            z: -.2,
          },
          height: 1,
          width: 1,
          'obj-model': 'mtl: #key-mtl; obj: #key;',
          'dynamic-body': 'mass: -1; shape: box;',
          scale: '.0025, .0025, .0025',
          attributes: [
            'collectable'
          ]
        }
      ],
    }
  ],
}
fs.writeFile('./src/scene.json', JSON.stringify(scene), (err) => {
  if (err) {
    console.error('There was a problem writing to the file ', err);
  } else { console.log('JSON Written!'); }
});
