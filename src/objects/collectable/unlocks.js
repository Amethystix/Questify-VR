const registerUnlocks = () => {
  AFRAME.registerComponent('unlocks', {
    schema: {
      unlocksentity: { type: 'string', default: '' },
    }
  });
  
};

export default registerUnlocks;
