import registerChest from './chest';
import registerCanBeUnlocked from './can-be-unlocked';

const registerInteractables = () => {
  registerChest();
  registerCanBeUnlocked();
}

export default registerInteractables;
