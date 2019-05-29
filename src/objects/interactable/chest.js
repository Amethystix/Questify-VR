import ChestUI from "../../UI/chest";

const registerChest = () => {
  AFRAME.registerComponent('chest', {
    schema: {
      
    },
    init: function() {
      this.chest = new ChestUI(this.el);
      this.el.addEventListener('click', (evt) => {
        this.chest.onClick(evt);
      });
    }
  });
  
  AFRAME.registerPrimitive('a-chest', {
    defaultComponents: {
      canbeunlocked: {},
      chest: {},
      'obj-model': {
        mtl: '#chest-mtl',
        obj: '#chest'
      }
    },
    mappings: {
      islocked: 'canbeunlocked.locked'
    }
  });
};

export default registerChest;
