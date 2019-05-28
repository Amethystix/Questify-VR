export default class Quest {
  
  constructor(title, description, instructions) {
    this.title = title;
    this.description = description;
    this.instructions = instructions;
  }

  complete() {
    window.player.completeQuest(this);
  }

  addToPlayerQuests() {
    window.player.beginQuest(this);
  }
}