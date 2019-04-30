
export class InventoryItem {
  constructor(id) {
    this.domElement = document.createElement('div');
    this.id = id;
    this.domElement.setAttribute('id', this.id);
    this.domElement.classList.add('inventory-item', 'empty');
    this.hasItem = false;
  }

  addItem({ name, description, thumbnail }) {
    this.hasItem = true;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
  }

  removeItem() {
    console.log('remove');
  }
}

export class Inventory {
  constructor() {
    console.log('making inv');
    this.invItems = [];
    this.invContainer = document.createElement('div');
    this.invContainer.classList.add('inventory-wrapper');

    for (let i = 0; i < 10; i++) {
      this.invItems.push(new InventoryItem(i));
    }
    this.invItems.forEach((item) => {
      this.invContainer.appendChild(item.domElement);
    });
    this.addCSS();
    console.log(this.invItems);
    console.log(this.invContainer);
    document.body.appendChild(this.invContainer);
  }

  addItem(item) {
    for (let i = 0; i < this.invItems.length; i++) {
      if (!this.invItems[i].hasItem) {
        this.invItems[i].addItem(item);
        break;
      }
    }
  }

  removeItem(index) {
    this.invItems[index].removeItem();
  }

  addCSS() {
    document.write(`<style>
      .inventory-wrapper {
        display: flex;
        max-width: 1000px;
        min-width: 500px;
        width: 75%;
        z-index: 5000;
        margin: auto;
        text-align: center;
        position: absolute;
        bottom: 0;
      }

      .inventory-item {
        flex: 1 1 1;
        max-width: 100px;
        min-width: 10%;
        padding-top: 10%;
        background-color: red;
        border: solid black 2px;
        box-sizing: border-box;
      }

      .empty {
        background-color: red;
      }

      .inventory-item:hover {
        background-color: pink;
      }
    </style>`);
  }
}
