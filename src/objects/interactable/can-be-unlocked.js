const registerCanBeUnlocked = () => {
  AFRAME.registerComponent('canBeUnlocked', {
    schema: {
      locked: { type: 'boolean', default: 'true' },
    },
    init: function () {

    }
  });
};

export default registerCanBeUnlocked;
