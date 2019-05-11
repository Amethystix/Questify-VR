
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
    if (this.thumbnail) {
      this.addThumbnailCSS();
    }
    this.domElement.classList.replace('empty', 'full');
    this.makeDescriptionDiv();

    this.domElement.addEventListener('mouseover', this.toggleDescriptionDiv);
    this.domElement.addEventListener('mouseout', this.toggleDescriptionDiv);
  }

  addThumbnailCSS() {
    // let thumbnailClass = this.thumbnail;
    // if (this.thumbnail.includes('/')) {
    //   thumbnailClass = thumbnailClass.split('/');
    //   thumbnailClass = thumbnailClass[thumbnailClass.length - 1];
    // }
    // thumbnailClass = thumbnailClass.split('.')[0];
    // document.write('')

    this.domElement.style.backgroundImage = `url(${this.thumbnail})`;
  }

  toggleDescriptionDiv(evt) {
    if (evt.type === 'mouseover') {
      this.querySelector('.item-description').classList.replace('hidden', 'show');
    } else {
      this.querySelector('.item-description').classList.replace('show', 'hidden');
    }
  }

  makeDescriptionDiv() {
    this.descriptionDiv = document.createElement('div');
    if (this.name) {
      const nameDiv = document.createElement('div');
      nameDiv.textContent = this.name;
      this.descriptionDiv.appendChild(nameDiv);
    }
    if (this.description) {
      const descDiv = document.createElement('div');
      descDiv.textContent = this.description;
      this.descriptionDiv.appendChild(descDiv);
    }
    this.descriptionDiv.classList.add('item-description', 'hidden');
    this.descriptionDiv.setAttribute('id', `description-${this.id}`);
    this.domElement.appendChild(this.descriptionDiv);
  }

  removeItem() {
    console.log('remove');
  }
}

export class Inventory {
  constructor() {
    this.invItems = [];
    this.invWrapper = document.createElement('div');
    this.invWrapper.classList.add('inventory-wrapper');
    this.invContainer = document.createElement('div');
    this.hide = true; 
    this.invContainer.classList.add('container', 'hidden');

    // For now, inventory size is 10
    for (let i = 0; i < 10; i++) {
      this.invItems.push(new InventoryItem(i));
    }
    this.invItems.forEach((item) => {
      this.invWrapper.appendChild(item.domElement);
    });
    this.addCSS();
    this.invContainer.appendChild(this.invWrapper);
    document.body.appendChild(this.invContainer);
  }

  toggleHidden() {
    this.hide ? this.invContainer.classList.remove('hidden') : this.invContainer.classList.add('hidden');
    this.hide = !this.hide;
  }

  addItem(item) {
    for (let i = 0; i < this.invItems.length; i++) {
      if (!this.invItems[i].hasItem) {
        this.invItems[i].addItem(item);
        return true;
      }
    }
    return false;
  }

  removeItem(index) {
    this.invItems[index].removeItem();
  }

  addCSS() {
    document.write(`<style>
      .container {
        min-width: 100vw;
        z-index: 5000;
        position: absolute;
        bottom: 25px;
      }
      .inventory-wrapper {
        display: flex;
        max-width: 1000px;
        min-width: 500px;
        width: 75%;
        padding: 20px;
        background-color: #BBBBBB;
        border-radius: 5px;
        margin: auto;
        text-align: center;
      }

      .item-description {
        position: absolute;
        padding: 10px;
        opacity: .7;
        background-color: green;
        color: black;
        top: -100px;
      }

      .hidden {
        display: none;
      }

      .show {
        display: block;
      }

      .inventory-item {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        flex: 1 1 1;
        max-width: 100px;
        min-width: 10%;
        padding-top: 10%;
        border: solid black 2px;
        box-sizing: border-box;
      }

      .inventory-item:hover {
        background-color: #444444;
      }
    </style>`);
  }
}