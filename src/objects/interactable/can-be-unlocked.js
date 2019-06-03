const registerCanBeUnlocked = () => {
  AFRAME.registerComponent('canbeunlocked', {
    schema: {
      locked: { type: 'boolean', default: false },
    },
    init: function () {
    }
  });
};

export default registerCanBeUnlocked;
