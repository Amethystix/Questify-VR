import registerCollectables from './collectable';
import registerInteractables from './interactable';
import registerQualities from './qualities'

const registerAll = () => {
  registerQualities();
  registerCollectables();
  registerInteractables();
};

export default registerAll;
