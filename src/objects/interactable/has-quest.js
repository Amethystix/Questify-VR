const registerHasQuest = () => {
  AFRAME.registerComponent('holdsQuest', {
    schema: {

    },
    init: function() {
      const container = document.createElement('a-entity');
      container.appendChild(this.el);
      
      document.replaceChild(this.el);
    }
  });
};

export default registerHasQuest;
