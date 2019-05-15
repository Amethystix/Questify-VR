const registerSpin = () => {
  AFRAME.registerComponent('spin', {
    schema: {
      speed: {type: 'number', default: 3 }
    },
    init: function() {
      setInterval(() => { this.el.object3D.rotation.y += THREE.Math.degToRad(this.data.speed) }, 50);
    }
  });
}

export default registerSpin;
