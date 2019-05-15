const registerChest = () => {
  AFRAME.registerPrimitive('a-chest', {
    defaultComponents: {
      canBeUnlocked: {},
      cursor: {},
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
