const registerWithQuestion = () => {
  AFRAME.registerPrimitive('a-question-mark', {
    defaultComponents: {
      position: {},
      'obj-model': {
        obj: '#que',
        mtl: '#que-mtl'
      },
      spin: {}
    },
    mappings: {
      x: 'position.x',
      y: 'position.y',
      z: 'position.z'
    },
    
  });
}

export default registerWithQuestion;
