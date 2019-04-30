import { Inventory } from './UI';

export default class Player {
  constructor() {
    this.inventory = new Inventory();
  }

  addToInventory(item) {
    this.inventory.addItem(item);
  }
}