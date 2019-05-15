
export default class HUD {

  constructor() {
   this.show = false;
   this.makeDOMElements();
  }

  makeDOMElements() {
    this.container = document.createElement('div');
    this.container.classList.add('hud-container', 'hidden');

    this.topContainer = document.createElement('div');
    this.topContainer.classList.add('top-container');

    this.healthUI = document.createElement('div');
    this.healthUI.classList.add('health-container');
    this.healthUI.textContent = 'Health:';
    this.amtHealth = document.createElement('div');
    this.amtHealth.textContent = (window.player && window.player.health && { ...window.player.health }) || '100';
    this.healthUI.appendChild(this.amtHealth);
    this.topContainer.appendChild(this.healthUI);

    this.currencyUI = document.createElement('div');
    this.currencyUI.classList.add('currency-container');
    this.currencyUI.textContent = 'Money:';
    this.amtCurrency = document.createElement('div');
    this.amtCurrency.textContent = (window.player && window.player.money && { ...window.player.money }) || '0';
    this.currencyUI.appendChild(this.amtCurrency);
    this.topContainer.appendChild(this.currencyUI);
    this.container.appendChild(this.topContainer);

    document.body.appendChild(this.container);
    this.makeCSS();
  }

  toggleHUD() {
    if (!this.show) {
      this.container.classList.remove('hidden');
    } else {
      this.container.classList.add('hidden');
    }
    this.show = !this.show;
  }

  makeCSS() {
    document.write(`<style>
      .hud-container {
        min-width: 100vw;
        min-height: 100vh;
        position: absolute;
        z-index: 1000;
      }

      .hidden {
        display: none;
      }

      .show {
        display: block;
      }

      .top-container {
        font-size: 24px;
        position: relative;
        margin-top: 25px;
      }

      .health-container {
        float: left;
        padding-left: 25px;
      }

      .health-container > div {
        position: relative;
        padding-left: 5px;
        display: inline-block;
      }

      .currency-container {
        float: right;
        text-align: right;
        padding-right: 25px;
      }

      .currency-container > div {
        position: relative;
        padding-left: 5px;
        display: inline-block;
      }
    </style>`)
  }
}