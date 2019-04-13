const data = require('./scene.json');

// TODO: Figure out the best way to parse the json into a scene
function parseJSON(json, sceneName) {
  let sceneIsLoaded = false;
  data.scenes.forEach(scene => {
    if (!sceneName) {
      if (scene.isDefault) {
        loadScene(scene);
        sceneIsLoaded = true;
      } 
    } else if (sceneName === scene.name) {
      loadScene(scene);
      sceneIsLoaded = true;
    }
  });
  if (!sceneIsLoaded) {
    console.error(sceneName ? `The scene ${sceneName} does not exist` : 'There is no default scene provided');
  }
}

function loadScene(scene) {
  
}