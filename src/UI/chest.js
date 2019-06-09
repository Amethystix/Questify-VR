import { InventoryItem } from "./inventory";

export default class ChestUI {
  constructor(ele, data) {
    this.ele = ele;
    this.locked = this.ele.components.canbeunlocked && this.ele.components.canbeunlocked.data.locked;
    this.contents = data.contents.map((item) => JSON.parse(item.replace(/\*/g, ',')));
    this.createDOMView();
  }

  onClick() {
    this.toggleUI();
    window.player.toggleUI();
    window.player.selectedObj = this;
  }

  toggleUI() {
    if (document.querySelector('.chest-wrapper')) {
      window.player.hud.container.removeChild(this.uiEle);
    } else {
      window.player.hud.container.appendChild(this.uiEle);
    }
  }

  unlock() {
    window.player.hud.container.removeChild(this.uiEle);
    this.locked = false;
    // this.ele.components.canbeunlocked.data.locked = false;
    this.createDOMView();
  }

  clickItem(index) {
    if (!window.player.inventory.isFull()) {
      this.invItems[index].domElement.removeEventListener('click', () => this.clickItem(index));
      window.player.inventory.addItem(this.invItems[index], this.invItems[index].componentData);
      this.invItems[index].removeItem();
    }
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
          const { description, thumbnail, name } = this.contents[i];
          this.invItems[i].addItem({ description, thumbnail, name}, this.contents[i]);
          this.invItems[i].domElement.addEventListener('click', () => this.clickItem(i));
        }
      }
      this.toggleUI();
    }
    this.uiEle.appendChild(this.innerEle);
  }

}
