
import pickFirstScene from './json-parser';
import { registerCollectable } from './objects/collectable';


function main() {
  // const scene = parseJson('scene.json');
  // makeScene(scene);
  registerCollectable();
  pickFirstScene();
}
main();
