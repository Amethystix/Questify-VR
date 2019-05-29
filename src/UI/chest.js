import { InventoryItem } from "./inventory";

export default class ChestUI {
  constructor(ele) {
    this.ele = ele;
    this.locked = this.ele.components.canBeUnlocked && this.ele.components.canBeUnlocked.data.locked;
    this.contents = [];
    this.writeCSS();
    this.createDOMView();
    console.log(this);
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
    this.ele.components.canBeUnlocked.data.locked = false;
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

  writeCSS() {
    document.write(`<style>
      .chest-wrapper {
        position: absolute;
        top: 200px;
        width: 100vw;
      }
      .chest-wrapper > div {
        display: flex;
        max-width: 1000px;
        min-width: 500px;
        width: 75%;
        padding: 20px;
        background-color: #BBBBBB;
        border-radius: 10px;
        margin: auto;
        text-align: center;
        border: 1px solid black;
      }
    </style>`);
  }
}
