import registerCollectable from './collectable';
import registerCurrency from './currency';
import registerKey from './key';
import registerUnlocks from './unlocks';
import registerCoin from './coin';

const registerCollectables = () => {
  registerCollectable();
  registerCurrency();
  registerUnlocks();
  registerKey();
  registerCoin();
};

export default registerCollectables;
