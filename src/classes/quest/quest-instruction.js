import QuestTypes from './quest-types';

/** Instructions to be used in a greater questing object
 *
 * Type is a pseudo-enum field, which must be a number 1-6 as defined in the quest-types file
 * Details must contain certain fields depending on what kind of quest it is
 * Description is a text description of the step to be displayed on the UI
 * Invalid instructions will be thrown out.  In a later version, may throw out the
 * whole quest object.
 * */

export default class QuestInstruction {
  // TODO: Come up with a uniform way of detailing quests
  constructor(type, description, details) {
    // If the type is not a corresponding number of defined types...
    if (isNaN(type) || type < 1 || type > 6) {
      throw new Error('Invalid instruction type');
    } else {
      this.type = type;
    }

    this.defineQuest();
    this.description = description;
    this.details = details;
  }

  defineQuest() {
    switch (this.type) {
      case QuestTypes.Collect: {
        // TODO: define collecting quests
        break;
      }
      case QuestTypes.Explore: {
        // TODO: define exploration quests
        break;
      }
      case QuestTypes.Fetch: {
        // TODO: define fetch quests
        break;
      }
      case QuestTypes.Other: {
        // TODO: define other quests
        break;
      }
      case QuestTypes.Kill: {
        // TODO: define killing quests
        break;
      }
      case QuestTypes.Talk: {
        // TODO: define speaking quests
        break;
      }
      default: {
        break;
      }
    }
  }
}
