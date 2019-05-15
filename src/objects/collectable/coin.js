const registerCoin = () => {
  AFRAME.registerPrimitive('a-coin', {
    defaultComponents: {
      currency: {},
      'obj-model': {
        mtl: '#coin-mtl',
        obj: '#coin'
      },
      rotation: {},
      'dynamic-body': { mass: 0, shape: 'box' },
      rotation: { x: 90, y: 0, z: 0 },
      spin: {}
    },
    mappings: {
      value: 'currency.value'
    }
  });
}

export default registerCoin;
