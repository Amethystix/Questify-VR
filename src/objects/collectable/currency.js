const registerCurrency = () => {
  AFRAME.registerComponent('currency', {
    schema: {
      value: { type: 'number', default: 1 },
    },
  });
}