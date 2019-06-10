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
    if (this.data[this.index].mc) {
      this.dialogueOptions.removeChild(document.getElementById('next-button'));
      const mcButtons = document.createElement('div');
      mcButtons.classList.add('option-buttons');

      this.data[this.index].mc.responses.forEach((res) => {
        const btn = document.createElement('button');
        btn.textContent = res;
        if (res === this.data[this.index].mc.correct) {
          btn.addEventListener('click', () => this.onClick());
        } else {
          btn.addEventListener('click', () => { this.dialogueContent.innerHTML = this.data[this.index].mc.wrongText; });
        }
        this.dialogueOptions.appendChild(btn);
      });
    } else if (this.dialogueOptions.querySelectorAll('button').length > 1) {
      this.dialogueOptions.querySelectorAll('button').forEach(button => this.dialogueOptions.removeChild(button));

      const btn = document.createElement('button');
      btn.setAttribute('id', 'next-button');
      btn.textContent = 'Next';
      btn.addEventListener('click', () => this.onClick());
      this.dialogueOptions.appendChild(btn);
    }
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
    btn.setAttribute('id', 'next-button');
    btn.textContent = 'Next';
    btn.addEventListener('click', () => this.onClick());
    this.dialogueOptions.appendChild(btn);

    this.wrapper.appendChild(this.dialogueContent);
    this.wrapper.appendChild(this.dialogueOptions);
    this.ele.appendChild(this.wrapper);
  }
  
}
