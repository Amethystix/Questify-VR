import registerCollectable from './collectable';
import registerCurrency from './currency';

const registerCollectables = () => {
  registerCollectable();
  registerCurrency();
};

export default registerCollectables;
