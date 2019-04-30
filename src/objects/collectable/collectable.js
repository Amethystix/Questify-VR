// Component to attach to all collectable entities
const registerCollectable = () =>  {
    AFRAME.registerComponent('collectable', {
    schema: {},
    init: function() {
      this.el.addEventListener('collide', (event, hi) => {
        console.log(event);
        console.log(hi);
      });

      document.getElementById('rig').addEventListener('collide', (evt) => console.log(evt));
    },
    update: () => {
    },
    remove: () => {},
  });
};

export default registerCollectable;
