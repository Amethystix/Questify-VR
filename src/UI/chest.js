export default class ChestUI {
  constructor(ele) {
    this.ele = ele;
    this.uiEle = this.createDOMView();
    this.locked = this.ele.components.canBeUnlocked && this.ele.components.canBeUnlocked.data.locked;
  }

  onClick(evt) {
    this.toggleChestUI();
    window.player.toggleUI();
  }

  toggleChestUI() {
    if (this.locked) {
      this.showLockedUI();
    } else {
      // Is unlocked
      
    }
  }

  createDOMView() {

  }
}
