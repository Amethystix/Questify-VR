import registerChest from './chest';
import registerCanBeUnlocked from './can-be-unlocked';

const registerInteractables = () => {
  registerCanBeUnlocked();
  registerChest();
}

export default registerInteractables;
