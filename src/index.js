
import pickFirstScene from './json-parser';
import { registerCollectable } from './objects/collectable';
import { Inventory } from './UI/inventory';


function main() {
  // const scene = parseJson('scene.json');
  // makeScene(scene);
  registerCollectable();
  pickFirstScene();
  const inv = new Inventory();
}
main();
