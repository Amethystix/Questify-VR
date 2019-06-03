// Note: this file is primarily for me to not write JSON by hand
const fs = require('fs');

const scene = {
  scenes: [
    {
      sky: {
        id: 'sky',
        color: '#6EBAA7',
        // CSS classes on inventory
      },
      isDefault: true,
      assets: [
        {
          src: './assets/applePie.obj',
          id: 'pie'
        },
        {
          src: './assets/applePie.mtl',
          id: 'pie-mtl'
        },
        {
          src: './assets/key.obj',
          id: 'key'
        },
        {
          src: './assets/key.mtl',
          id: 'key-mtl'
        },
        {
          src: './assets/chest.obj',
          id: 'chest'
        },
        {
          src: './assets/chest.mtl',
          id: 'chest-mtl'
        },
        {
          src: './assets/coin.obj',
          id: 'coin'
        },
        {
          src: './assets/coin.mtl',
          id: 'coin-mtl'
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
          'static-body': '',
        },
        {
          type: 'a-key',
          position: '2 1 -2',
          'obj-model': 'mtl: #key-mtl; obj: #key;',
          scale: '.025, .025, .025',
          'dynamic-body': 'mass: 1, shape: box',
        },
        {
          type: 'a-coin',
          position: '3, 1.6, -2',
          scale: '30, 30, 30'
        },
        {
          type: 'a-coin',
          position: '5, 1.6, -2',
          scale: '30, 30, 30'
        },
        {
          type: 'a-coin',
          position: '7, 1.6, -2',
          scale: '30, 30, 30'
        },
        {
          type: 'a-coin',
          position: '9, 1.6, -2',
          scale: '30, 30, 30'
        },
        {
          type: 'a-chest',
          position: '5 .5 -3',
          islocked: false
        },
        {
          type: 'a-entity',
          position: '-2 1 3',
          'dynamic-body': 'shape: box; mass: 0',
          spin: '',
          'obj-model': 'mtl: #pie-mtl; obj: #pie',
          scale: '.25, .25, .25',
          collectable: 'name: Apple Pie Slice; description: A delicious piece of freshly baked pie; thumbnail: https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/pie.png?alt=media&token=4afa56e5-ade9-4d0f-bdd3-201469b02788'
        },
        {
          type: 'a-box',
          position: {
            x: 0,
            y: 5,
            z: -2,
          },
          height: 1,
          width: 1,
          // 'obj-model': 'mtl: #key-mtl; obj: #key;',
          'dynamic-body': 'mass: 2; shape: box;',
          // scale: '.0025, .0025, .0025',
          collectable: 'name: boxy; description: a box; thumbnail: ./assets/boxy.png',
        },
        {
          type: 'a-box',
          position: {
            x: 0,
            y: 0.4,
            z: -5,
          },
          height: 1,
          width: 1,
          // 'obj-model': 'mtl: #key-mtl; obj: #key;',
          'dynamic-body': 'mass: 2; shape: box;',
          // scale: '.0025, .0025, .0025',
          collectable: 'name: another box; description: some other box',
        },
        {
          type: 'a-box',
          position: {
            x: 0,
            y: 0.4,
            z: -8,
          },
          height: 1,
          width: 1,
          // 'obj-model': 'mtl: #key-mtl; obj: #key;',
          'dynamic-body': 'mass: 2; shape: box;',
          // scale: '.0025, .0025, .0025',
          collectable: 'name: box 3; description: a third box',
        }
      ],
    },
  ],
};
fs.writeFile('./src/scene.json', JSON.stringify(scene), (err) => {
  if (err) {
    console.error('There was a problem writing to the file ', err);
  } else { console.log('JSON Written!'); }
});
