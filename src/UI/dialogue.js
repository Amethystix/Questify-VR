export default class Dialogue {

  constructor(html, type, options) {

  }

  showDialogue() {
    document.appendChild(this.ele);
  }

  hideDialogue() {
    document.removeChild(this.ele);
  }

  buildDOM() {
    this.ele = document.createElement('div');
    this.ele.classList.add('dialogue-container');

    this.dialogueContent = document.createElement('div');
    this.dialogueContent.innerHTML = this.html;
    this.dialogueContent.classList.add('dialogue-content');

    this.dialogueOptions = document.createElement('div');
    this.dialogueOptions.classList.add('dialogue-options');

    this.ele.appendChild(this.dialogueContent);
    this.ele.appendChild(this.dialogueOptions);
  }
  
}
