import ChestUI from "../../UI/chest";

const registerChest = () => {
  AFRAME.registerComponent('chest', {
    schema: {
      
    },
    init: function() {
      this.chest = new ChestUI(this.el);
      this.el.addEventListener('click', (evt) => {
        console.log(this.chest);
      });
    }
  });
  
  AFRAME.registerPrimitive('a-chest', {
    defaultComponents: {
      canBeUnlocked: {},
      chest: {},
      'obj-model': {
        mtl: '#chest-mtl',
        obj: '#chest'
      }
    },
    mappings: {
      
    }
  });
};

export default registerChest;
