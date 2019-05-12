import registerCollectable from './collectable';
import registerCurrency from './currency';
import registerKey from './key';
import registerUnlocks from './unlocks';

const registerCollectables = () => {
  registerCollectable();
  registerCurrency();
  registerUnlocks();
  registerKey();
};

export default registerCollectables;
