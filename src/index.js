
import pickFirstScene from './json-parser';
import { registerCollectable } from './objects/collectable';
import Player from './player';


function main() {
  // const scene = parseJson('scene.json');
  // makeScene(scene);
  window.player = new Player();
  registerCollectable();
  pickFirstScene();
}
main();
