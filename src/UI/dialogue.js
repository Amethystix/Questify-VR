export default class Dialogue {

  constructor(data, type, options) {
    this.data = data;
    this.index = 0;
    this.buildDOM();
  }

  showDialogue() {
    if (!document.querySelector('.dialogue-container')) {
      document.body.appendChild(this.ele);
    }
    this.dialogueContent.innerHTML = this.data[this.index].text;
  }

  onClick() {
    this.index++;
    if (this.index < this.data.length) {
      this.showDialogue();
    } else {
      this.hideDialogue();
    }
  }

  hideDialogue() {
    document.body.removeChild(this.ele);
  }

  buildDOM() {
    this.ele = document.createElement('div');
    this.ele.classList.add('dialogue-container');

    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('dialogue-wrapper');

    this.dialogueContent = document.createElement('div');
    this.dialogueContent.classList.add('dialogue-content');

    this.dialogueOptions = document.createElement('div');
    this.dialogueOptions.classList.add('dialogue-options');

    const btn = document.createElement('button');
    btn.textContent = 'Next';
    btn.addEventListener('click', () => this.onClick());
    this.dialogueOptions.appendChild(btn);

    this.wrapper.appendChild(this.dialogueContent);
    this.wrapper.appendChild(this.dialogueOptions);
    this.ele.appendChild(this.wrapper);
  }
  
}
