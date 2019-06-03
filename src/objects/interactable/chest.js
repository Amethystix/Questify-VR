import ChestUI from "../../UI/chest";

const registerChest = () => {
  AFRAME.registerComponent('chest', {
    schema: {
      contents: { type: 'array', default: [] }
    },
    init: function() {
      this.chest = new ChestUI(this.el, this.data);
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
      },
      'static-body': { shape: 'box' },
    },
    mappings: {
      islocked: 'canbeunlocked.locked',
      contents: 'chest.contents',
    }
  });
};

export default registerChest;
