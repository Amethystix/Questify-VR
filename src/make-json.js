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
          src: './assets/carpet.png',
          id: 'carpet'
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
          src: './assets/wall.jpg',
          id: 'wall'
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
        },
        {
          src: './assets/models/person/model.obj',
          id: 'person'
        },
        {
          src: './assets/models/person/materials.mtl',
          id: 'person-mtl',
        },
        {
          src: './assets/models/plant/CoffeePlant.obj',
          id: 'plant'
        },
        {
          src: './assets/models/plant/CoffeePlant.mtl',
          id: 'plant-mtl'
        },
        {
          src: './assets/models/light/model.obj',
          id: 'light'
        },
        {
          src: './assets/models/light/materials.mtl',
          id: 'light-mtl'
        },
        {
          src: './assets/models/copier/model.obj',
          id: 'copier',
        },
        {
          src: './assets/models/copier/materials.mtl',
          id: 'copier-mtl'
        },
        {
          src: './assets/models/sofa/Sofa_01.obj',
          id: 'sofa'
        },
        {
          src: './assets/models/sofa/Sofa_01.mtl',
          id: 'sofa-mtl'
        },
        {
          src: './assets/models/cubicle/model.obj',
          id: 'cubicle'
        },
        {
          src: './assets/models/cubicle/materials.mtl',
          id: 'cubicle-mtl'
        },
        {
          src: './assets/models/chair/materials.mtl',
          id: 'chair-mtl'
        },
        {
          src: './assets/models/chair/model.obj',
          id: 'chair'
        },
        {
          src: './assets/models/pencil/pencil.obj',
          id: 'pencil'
        },
        {
          src: './assets/models/pencil/pencil.mtl',
          id: 'pencil-mtl'
        },
        {
          src: './assets/models/computer/Computer.obj',
          id: 'computer'
        },
        {
          src: './assets/models/computer/Computer.mtl',
          id: 'computer-mtl'
        },
        {
          src: './assets/models/flashdrive/model.obj',
          id: 'flashdrive'
        },
        {
          src: './assets/models/flashdrive/materials.mtl',
          id: 'flashdrive-mtl'
        }
      ],
      entities: [
        {
          primitiveType: 'a-plane',
          position: '0 0 -4',
          width: 100,
          height: 100,
          src: '#carpet',
          repeat: '15 15',
          rotation: '-90 0 0',
          'static-body': '',
        },
        {
          primitiveType: 'a-chest',
          position: '-15 2.2 -10.5',
          'obj-model': 'obj: #computer; mtl: #computer-mtl',
          islocked: true,
          contents: '{"name":"Unfinished Story"*"description":"The unfinished story that Bob was looking for!  Better get it back to him."*"thumbnail": "./assets/document.png"}',
          id: '321',
          scale: '.007, .007, .007'
        },
        {
          primitiveType: 'a-box',
          position: '25 0 0',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          height: '25',
          depth: '50'
        },
        {
          primitiveType: 'a-box',
          position: '-25 0 0',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          height: '25',
          depth: '50'
        },
        {
          primitiveType: 'a-box',
          position: '0 0 25',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          height: '25',
          width: '50'
        },
        {
          primitiveType: 'a-box',
          position: '0 10 0',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          width: '50',
          depth: '50'
        },
        {
          position: '22 0 22',
          scale: '.8, .8, .8',
          'obj-model': 'mtl: #plant-mtl; obj: #plant',
          'static-body': '',
        },
        {
          position: '-22 0 22',
          scale: '.8, .8, .8',
          'obj-model': 'mtl: #plant-mtl; obj: #plant',
          'static-body': '',
        },
        {
          position: '21 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 -11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 -21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 0',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 -11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 -11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '11 9 -11',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '21 9 -21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-11 9 -21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '-21 9 -21',
          scale: '5, 5, 5',
          'obj-model': 'mtl: #light-mtl; obj: #light',
          'static-body': '',
        },
        {
          position: '5 1.5 22',
          'obj-model': 'mtl: #copier-mtl; obj: #copier',
          'static-body': '',
          scale: '1.5, 1.5, 1.5'
        },
        {
          position: '10 1.5 -22',
          'obj-model': 'mtl: #copier-mtl; obj: #copier',
          'static-body': '',
          rotation: '0 180 0',
          scale: '1.5, 1.5, 1.5'
        },
        {
          position: '15, 2, 10',
          'obj-model': 'mtl: #cubicle-mtl; obj: #cubicle',
          'static-body': '',
          scale: '2.5, 2.5, 2.5'
        },
        {
          position: '13.5, .8, 9',
          'obj-model': 'mtl: #chair-mtl; obj: #chair',
          scale: '2.3, 2.3, 2.3'
        },
        {
          position: '0, 2, 10',
          'obj-model': 'mtl: #cubicle-mtl; obj: #cubicle',
          'static-body': '',
          scale: '2.5, 2.5, 2.5'
        },
        {
          position: '-1.5, .8, 9',
          'obj-model': 'mtl: #chair-mtl; obj: #chair',
          scale: '2.3, 2.3, 2.3'
        },
        {
          position: '-15, 2, 10',
          'obj-model': 'mtl: #cubicle-mtl; obj: #cubicle',
          'static-body': '',
          scale: '2.5, 2.5, 2.5'
        },
        {
          position: '-16.5, .8, 9',
          'obj-model': 'mtl: #chair-mtl; obj: #chair',
          scale: '2.3, 2.3, 2.3'
        },
        {
          position: '15, 2, -10',
          'obj-model': 'mtl: #cubicle-mtl; obj: #cubicle',
          'static-body': '',
          scale: '2.5, 2.5, 2.5',
          rotation: '0 180 0',
        },
        {
          position: '16.5, .8, -9',
          'obj-model': 'mtl: #chair-mtl; obj: #chair',
          scale: '2.3, 2.3, 2.3',
          rotation: '0 180 0'
        },
        {
          position: '0, 2, -10',
          'obj-model': 'mtl: #cubicle-mtl; obj: #cubicle',
          'static-body': '',
          scale: '2.5, 2.5, 2.5',
          rotation: '0 180 0',
        },
        {
          position: '1.5, .8, -9',
          'obj-model': 'mtl: #chair-mtl; obj: #chair',
          scale: '2.3, 2.3, 2.3',
          rotation: '0 180 0'
        },
        {
          position: '-15, 2, -10',
          'obj-model': 'mtl: #cubicle-mtl; obj: #cubicle',
          'static-body': '',
          rotation: '0 180 0',
          scale: '2.5, 2.5, 2.5'
        },
        {
          position: '-13.5, .8, -9',
          'obj-model': 'mtl: #chair-mtl; obj: #chair',
          scale: '2.3, 2.3, 2.3',
          rotation: '0 180 0'
        },
        {
          position: '22 0 -22',
          scale: '.8, .8, .8',
          'obj-model': 'mtl: #plant-mtl; obj: #plant',
          'static-body': '',
        },
        {
          position: '-22 0 -22',
          scale: '.8, .8, .8',
          'obj-model': 'mtl: #plant-mtl; obj: #plant',
          'static-body': '',
        },
        {
          primitiveType: 'a-box',
          position: '0 0 -25',
          src: '#wall',
          repeat: '5 5',
          'static-body': '',
          height: '25',
          width: '50'
        },

        {
          position: '10 1 21',
          'obj-model': 'mtl: #flashdrive-mtl; obj: #flashdrive;',
          scale: '.5, .5, .5',
          'dynamic-body': 'mass: 0, shape: box',
          unlocks: 'unlocksentity: 321',
          spin: '',
          collectable: 'name: Flash Drive; description: A flash drive that was laying around the office; thumbnail: ./assets/usb.png',

        },
        {
          position: '-7, 2.1, 2',
          'obj-model': 'obj: #person; mtl: #person-mtl',
          'static-body': '',
          npc: 'name: Rob; questid: 2',
          scale: '1.25, 1.25, 1.25'
        },
        {
          primitiveType: 'a-entity',
          position: '10 1 4',
          'dynamic-body': 'shape: box; mass: 0',
          spin: '',
          'obj-model': 'mtl: #pencil-mtl; obj: #pencil',
          collectable: 'name: Pencil; description: An ordinary office pencil that someone must have dropped.; thumbnail: ./assets/pencil.png',
          scale: '.15, .15, .15'
        },
      ],
    },
  ],
};
fs.writeFile('./src/scene.json', JSON.stringify(scene), (err) => {
  if (err) {
    console.error('There was a problem writing to the file ', err);
  } else { console.log('JSON Written!'); }
});
