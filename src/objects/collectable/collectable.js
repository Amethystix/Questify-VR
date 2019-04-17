// Component to attach to all collectable entities
const registerCollectable = () =>  {
    AFRAME.registerComponent('collectable', {
    schema: {},
    init: () => {
      const playerElement = document.getElementById('player');
      playerElement.addEventListener('collide', () => {
        console.log('hey');
      });
    },
    update: () => {
    },
    remove: () => {}
  });
};

export default registerCollectable;