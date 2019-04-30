
import pickFirstScene from './json-parser';
import registerAll from './objects';
import Player from './player';


function main() {
  // const scene = parseJson('scene.json');
  // makeScene(scene);
  window.player = new Player();
  registerAll();
  pickFirstScene();
}
main();
