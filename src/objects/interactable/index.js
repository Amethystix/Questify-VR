import registerChest from './chest';
import registerCanBeUnlocked from './can-be-unlocked';
import registerNPC from './npc';

const registerInteractables = () => {
  registerCanBeUnlocked();
  registerChest();
  registerNPC();
}

export default registerInteractables;
