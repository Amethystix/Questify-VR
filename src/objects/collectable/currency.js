const registerCurrency = () => {
  AFRAME.registerComponent('currency', {
    schema: {
      value: { type: 'number', default: 1 },
    },
    init: function() {
      this.el.addEventListener('collide', (event) => {
        setTimeout(() => {
          if (event.detail.body.el.getAttribute('id') === 'rig') {
            this.el.parentNode.removeChild(this.el);
            window.player.addMoney(this.data.value);
          }
        }, 0);
      });
    },
  });
}

export default registerCurrency;
