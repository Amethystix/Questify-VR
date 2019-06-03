import { Inventory, HUD } from './UI';

export default class Player {
  constructor() {
    this.money = 0;
    this.health = 100;
    this.hud = new HUD();
    this.inventory = new Inventory();
    this.selectedObj = null;

    setTimeout(() => this.el = document.getElementById('player'), 0);

    document.addEventListener('keypress', (evt) => {
      if (evt.key === 'i') {
        this.toggleUI();
      }
    });
  }

  toggleUI() {
    this.inventory.toggleHidden();
    this.hud.toggleHUD();
  }

  addToInventory(item) {
    this.inventory.addItem(item);
  }

  changeMoneyUI() {
    this.hud.amtCurrency.textContent = this.money;
  }

  changeHealthUI() {
    this.hud.amtHealth.textContent = this.health;
  }

  addMoney(amt) {
    this.money = amt + this.money;
    this.changeMoneyUI();
  }

  withdrawMoney(amt) {
    if (amt <= this.money) {
      this.money = this.money - amt;
      this.changeMoneyUI();
      return true;
    }
    return false;
  }

  // Unlocks the selected object
  unlock() {
    this.selectedObj.componentsbcanbeunlocked.locked = false;
  }
}