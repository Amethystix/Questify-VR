export default class Quest {
  
  constructor(title, description, instructions, onComplete) {
    this.title = title;
    this.description = description;
    this.instructions = instructions;
    this.onComplete = onComplete;
  }

  finishStep() {
    this.lastFinished = this.instructions.shift();

    if (this.instructions.length === 0) {
      this.complete();
    } else {
      this.instructions[0].begin();
    }
  }

  play() {
    if (window.player.activeQuests.includes(this.title)) {
      this.instructions[0].checkForCompleted();
      if (this.instructions[0].completed) {
        this.instructions[0].finishStep();
      }
    } else {
      window.player.addToQuests(this.title);
      this.instructions[0].begin();
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