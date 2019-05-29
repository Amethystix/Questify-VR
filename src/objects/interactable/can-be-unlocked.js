const registerCanBeUnlocked = () => {
  AFRAME.registerComponent('canbeunlocked', {
    schema: {
      locked: { type: 'boolean', default: true },
    },
    init: function () {

    }
  });
};

export default registerCanBeUnlocked;
