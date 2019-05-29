export default class Quest {
  
  constructor(title, description, instructions, onComplete) {
    this.title = title;
    this.description = description;
    this.instructions = instructions;
    this.onComplete = onComplete;
  }

  finishStep() {
    this.instructions.shift();
    if (this.instructions.length === 0) {
      this.complete();
    }
  }

  complete() {
    this.onComplete();
    window.player.completeQuest(this);
  }

  addToPlayerQuests() {
    window.player.beginQuest(this);
  }
}