const registerUnlocks = () => {
  AFRAME.registerComponent('unlocks', {
    schema: {
      unlocksEntity: { type: 'string', default: '' },
    }
  });  
};

export default registerUnlocks;
