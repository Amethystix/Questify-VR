
export default class HUD {

  constructor() {
   this.show = false;
   this.makeDOMElements();
  }

  makeDOMElements() {
    this.container = document.createElement('div');
    this.container.classList.add('hud-container', 'hidden');

    this.currencyUI = document.createElement('div');
    this.currencyUI.classList.add('currency-container');
    this.currencyUI.textContent = 'Money:';
    this.amtCurrency = document.createElement('div');
    this.amtCurrency.textContent = (window.player && window.player.money && { ...window.player.money }) || 0;
    this.currencyUI.appendChild(this.amtCurrency);
    this.container.appendChild(this.currencyUI);

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

      .currency-container {
        position: relative;
        text-align: right;
        padding-right: 25px;
        margin-top: 25px;
        font-size: 24px;
      }

      .currency-container > div {
        position: relative;
        padding-left: 5px;
        display: inline-block;
      }
    </style>`)
  }
}