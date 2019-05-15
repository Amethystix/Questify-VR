import registerCollectables from './collectable';
import registerInteractables from './interactable';

const registerAll = () => {
  registerCollectables();
  registerInteractables();
};

export default registerAll;
