// Component to attach to all collectable entities
const registerCollectable = () =>  {
  AFRAME.registerComponent('collectable', {
    schema: {
      name: { type: 'string', default: '' },
      description: { type: 'string', default: '' },
      thumbnail: { type: 'string', default: '' },
    },

    init: function() {
      const components = { ...this.el.components };
      this.el.addEventListener('collide', (event) => {
        setTimeout(() => {
          if (event.detail.body.el.getAttribute('id') === 'rig') {
            window.player.addToInventory(this.data, components);
            this.el.parentNode.removeChild(this.el);
          }
        }, 0);
      });
    },

    update: () => {

    },

    remove: function() {
      const data = this.data;
      const el = this.el;
  
      // Remove event listener.
      if (data.event) {
        el.removeEventListener();
      }
    },
  });
};

export default registerCollectable;
