import { InventoryItem } from "./inventory";

export default class ChestUI {
  constructor(ele) {
    this.ele = ele;
    this.locked = this.ele.components.canbeunlocked && this.ele.components.canbeunlocked.data.locked;
    this.contents = [];
    this.createDOMView();
  }

  onClick() {
    this.toggleChestUI();
    window.player.toggleUI();
  }

  toggleChestUI() {
    if (document.querySelector('chest-wrapper')) {
      window.player.hud.container.removeChild(this.uiEle);
    } else {
      window.player.hud.container.appendChild(this.uiEle);
    }
  }

  unlock() {
    player.hud.container.removeChild(this.uiEle);
    this.locked = false;
    this.ele.components.canbeunlocked.data.locked = false;
    this.createDOMView();
  }

  createDOMView() {
    this.uiEle = document.createElement('div');
    this.uiEle.classList.add('chest-wrapper');
    this.innerEle = document.createElement('div');
    if (this.locked) {
      this.innerEle.classList.add('locked-prompt');
      this.innerEle.textContent = 'Select an item to unlock this chest.'
    } else {
      this.innerEle.classList.add('chest-inside');
      this.invItems = [];
      for (let i = 0; i < 5; i++) {
        this.invItems.push(new InventoryItem(`chest-${i}`));
        this.innerEle.appendChild(this.invItems[i].domElement);
        if (this.contents[i]) {
          // TODO: Add that item to the inventory
        }
      }
    }
    this.uiEle.appendChild(this.innerEle);
    player.hud.container.appendChild(this.uiEle);
  }

}
