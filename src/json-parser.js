const data = require('./scene.json');

function pickFirstScene(json, sceneName) {
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

function loadScene(sceneData) {
  const scene = document.createElement('a-scene');
  if (sceneData.assets) {
    scene.appendChild(parseAssets(sceneData.assets));
  }
  if (sceneData.sky) {
    const sky = document.createElement('a-sky');
    Object.keys(sceneData.sky)
      .forEach(key => sky.setAttribute(key, sceneData.sky[key]));
    scene.appendChild(sky);
  }
  document.body.appendChild(scene);
}

function parseAssets(assetData) {
  const assets = document.createElement('a-assets');
  assetData.forEach(asset => {
    let element;
    if (asset.src.includes('.png') || asset.src.includes('jpg')) {
      element = document.createElement('img');
    } else if (asset.src.includes('.mp3')) {
      element = document.createElement('audio');
    } else if (asset.src.includes('.mp4')) {
      element = document.createElement('video');
    } else if (!asset.src) {
      element = document.createElement('a-mixin');
    } else {
      element = document.createElement('a-asset-item');
    }
    Object.keys(asset).forEach(key => {
      element.setAttribute(key, asset[key]);
    });
    assets.appendChild(element);
  });
  return assets;
}

export default pickFirstScene;