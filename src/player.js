import { Inventory } from './UI';

export default class Player {
  constructor() {
    this.inventory = new Inventory();
    this.money = 0;
  }

  addToInventory(item) {
    this.inventory.addItem(item);
  }

  addMoney(amt) {
    this.money = amt + this.money;
  }

  withdrawMoney(amt) {
    if (amt <= this.money) {
      this.money = this.money - amt;
      return true;
    }
    return false;
  }
}