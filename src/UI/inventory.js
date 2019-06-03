
export class InventoryItem {
  constructor(id) {
    this.domElement = document.createElement('div');
    this.id = id;
    this.domElement.setAttribute('id', this.id);
    this.domElement.classList.add('inventory-item', 'empty');
    this.hasItem = false;
  }

  addItem({ name, description, thumbnail }, componentData) {
    this.hasItem = true;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.componentData = componentData;
    this.addThumbnailCSS();
    this.domElement.classList.replace('empty', 'full');

    this.domElement.addEventListener('mouseover', (evt) => this.toggleDescriptionDiv(evt));
    this.domElement.addEventListener('mouseout', (evt) => this.toggleDescriptionDiv(evt));
    this.domElement.addEventListener('click', (evt) => player.selectedObj = this);
  }

  addThumbnailCSS() {
    // If no thumbnail is specified, use the default thumbnail
    if (this.thumbnail) {
      this.domElement.style.backgroundImage = `url(${this.thumbnail})`;
    }
  }

  useItem(evt) {
    const { selectedObj } = window.player;
    if (selectedObj) {
      if (selectedObj.components.canbeunlocked && this.componentData.unlocks) {
        if (selectedObj.id === this.componentData.unlocksEntity) {
          window.player.unlock();
        }
      }
    }
  }

  toggleDescriptionDiv(evt) {
    const descEle = document.querySelector('.item-description');
    if (evt.type === 'mouseover') {
      descEle.querySelector('.item-title').textContent = this.name;
      descEle.querySelector('.item-info').textContent = this.description;
      descEle.classList.replace('hidden', 'show');
    } else {
      descEle.classList.replace('show', 'hidden');
    }
  }

  // TODO: Flesh out, destroy event listeners, remove description and title fields, etc
  removeItem() {
    this.domElement.classList.replace('full', 'empty');
    this.domElement.style.backgroundImage('none');
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
    this.makeDescriptionDiv();
    this.invContainer.appendChild(this.invWrapper);
    document.body.appendChild(this.invContainer);
  }

  makeDescriptionDiv() {
    this.descriptionDiv = document.createElement('div');
    this.descriptionDiv.classList.add('item-description', 'hidden');
    const name = document.createElement('div');
    name.classList.add('item-title');
    const info = document.createElement('div');
    info.classList.add('item-info');
    this.descriptionDiv.appendChild(name);
    this.descriptionDiv.appendChild(info);
    this.invContainer.appendChild(this.descriptionDiv);
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

  // TODO: Port this over to a css file - going to keep it here for now for easy script injection
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
        border-radius: 10px;
        margin: auto;
        text-align: center;
        border: 1px solid black;
      }

      .item-description {
        width: 75%;
        margin: 0 auto 50px;
        padding: 15px;
        background-color: #BBB;
        border-radius: 10px;
        border: 1px solid black;
      }

      .item-title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
      }

      .item-info {
        font-size: 16px;
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

      .full {
        background-image: url(https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/question.png?alt=media&token=b9de7f1a-2692-4f5c-8283-0ca37e44292b);
      }

      .inventory-item:hover {
        background-color: #666666;
      }
    </style>`);
  }
}