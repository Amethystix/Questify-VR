/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/UI/chest.js":
/*!*************************!*\
  !*** ./src/UI/chest.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChestUI; });\n/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory */ \"./src/UI/inventory.js\");\n\n\nclass ChestUI {\n  constructor(ele) {\n    this.ele = ele;\n    this.locked = this.ele.components.canBeUnlocked && this.ele.components.canBeUnlocked.data.locked;\n    this.contents = [];\n    this.writeCSS();\n    this.createDOMView();\n    console.log(this);\n  }\n\n  onClick() {\n    this.toggleChestUI();\n    window.player.toggleUI();\n  }\n\n  toggleChestUI() {\n    if (document.querySelector('chest-wrapper')) {\n      window.player.hud.container.removeChild(this.uiEle);\n    } else {\n      window.player.hud.container.appendChild(this.uiEle);\n    }\n  }\n\n  unlock() {\n    player.hud.container.removeChild(this.uiEle);\n    this.locked = false;\n    this.ele.components.canBeUnlocked.data.locked = false;\n    this.createDOMView();\n  }\n\n  createDOMView() {\n    this.uiEle = document.createElement('div');\n    this.uiEle.classList.add('chest-wrapper');\n    this.innerEle = document.createElement('div');\n    if (this.locked) {\n      this.innerEle.classList.add('locked-prompt');\n      this.innerEle.textContent = 'Select an item to unlock this chest.'\n    } else {\n      this.innerEle.classList.add('chest-inside');\n      this.invItems = [];\n      for (let i = 0; i < 5; i++) {\n        this.invItems.push(new _inventory__WEBPACK_IMPORTED_MODULE_0__[\"InventoryItem\"](`chest-${i}`));\n        this.innerEle.appendChild(this.invItems[i].domElement);\n        if (this.contents[i]) {\n          // TODO: Add that item to the inventory\n        }\n      }\n    }\n    this.uiEle.appendChild(this.innerEle);\n    player.hud.container.appendChild(this.uiEle);\n  }\n\n  writeCSS() {\n    document.write(`<style>\n      .chest-wrapper {\n        position: absolute;\n        top: 200px;\n        width: 100vw;\n      }\n      .chest-wrapper > div {\n        display: flex;\n        max-width: 1000px;\n        min-width: 500px;\n        width: 75%;\n        padding: 20px;\n        background-color: #BBBBBB;\n        border-radius: 10px;\n        margin: auto;\n        text-align: center;\n        border: 1px solid black;\n      }\n    </style>`);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/UI/chest.js?");

/***/ }),

/***/ "./src/UI/hud.js":
/*!***********************!*\
  !*** ./src/UI/hud.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HUD; });\n\nclass HUD {\n\n  constructor() {\n   this.show = false;\n   this.makeDOMElements();\n  }\n\n  makeDOMElements() {\n    this.container = document.createElement('div');\n    this.container.classList.add('hud-container', 'hidden');\n\n    this.topContainer = document.createElement('div');\n    this.topContainer.classList.add('top-container');\n\n    this.healthUI = document.createElement('div');\n    this.healthUI.classList.add('health-container');\n    this.healthUI.textContent = 'Health:';\n    this.amtHealth = document.createElement('div');\n    this.amtHealth.textContent = (window.player && window.player.health && { ...window.player.health }) || '100';\n    this.healthUI.appendChild(this.amtHealth);\n    this.topContainer.appendChild(this.healthUI);\n\n    this.currencyUI = document.createElement('div');\n    this.currencyUI.classList.add('currency-container');\n    this.currencyUI.textContent = 'Money:';\n    this.amtCurrency = document.createElement('div');\n    this.amtCurrency.textContent = (window.player && window.player.money && { ...window.player.money }) || '0';\n    this.currencyUI.appendChild(this.amtCurrency);\n    this.topContainer.appendChild(this.currencyUI);\n    this.container.appendChild(this.topContainer);\n\n    document.body.appendChild(this.container);\n    this.makeCSS();\n  }\n\n  toggleHUD() {\n    if (!this.show) {\n      this.container.classList.remove('hidden');\n    } else {\n      this.container.classList.add('hidden');\n    }\n    this.show = !this.show;\n  }\n\n  makeCSS() {\n    document.write(`<style>\n      .hud-container {\n        min-width: 100vw;\n        min-height: 100vh;\n        position: absolute;\n        z-index: 1000;\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      .show {\n        display: block;\n      }\n\n      .top-container {\n        font-size: 24px;\n        position: relative;\n        margin-top: 25px;\n      }\n\n      .health-container {\n        float: left;\n        padding-left: 25px;\n      }\n\n      .health-container > div {\n        position: relative;\n        padding-left: 5px;\n        display: inline-block;\n      }\n\n      .currency-container {\n        float: right;\n        text-align: right;\n        padding-right: 25px;\n      }\n\n      .currency-container > div {\n        position: relative;\n        padding-left: 5px;\n        display: inline-block;\n      }\n    </style>`)\n  }\n}\n\n//# sourceURL=webpack:///./src/UI/hud.js?");

/***/ }),

/***/ "./src/UI/index.js":
/*!*************************!*\
  !*** ./src/UI/index.js ***!
  \*************************/
/*! exports provided: Inventory, InventoryItem, HUD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory */ \"./src/UI/inventory.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Inventory\", function() { return _inventory__WEBPACK_IMPORTED_MODULE_0__[\"Inventory\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InventoryItem\", function() { return _inventory__WEBPACK_IMPORTED_MODULE_0__[\"InventoryItem\"]; });\n\n/* harmony import */ var _hud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hud */ \"./src/UI/hud.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HUD\", function() { return _hud__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/UI/index.js?");

/***/ }),

/***/ "./src/UI/inventory.js":
/*!*****************************!*\
  !*** ./src/UI/inventory.js ***!
  \*****************************/
/*! exports provided: InventoryItem, Inventory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InventoryItem\", function() { return InventoryItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Inventory\", function() { return Inventory; });\n\nclass InventoryItem {\n  constructor(id) {\n    this.domElement = document.createElement('div');\n    this.id = id;\n    this.domElement.setAttribute('id', this.id);\n    this.domElement.classList.add('inventory-item', 'empty');\n    this.hasItem = false;\n  }\n\n  addItem({ name, description, thumbnail }, componentData) {\n    this.hasItem = true;\n    this.name = name;\n    this.description = description;\n    this.thumbnail = thumbnail;\n    this.componentData = componentData;\n    this.addThumbnailCSS();\n    this.domElement.classList.replace('empty', 'full');\n\n    this.domElement.addEventListener('mouseover', (evt) => this.toggleDescriptionDiv(evt));\n    this.domElement.addEventListener('mouseout', (evt) => this.toggleDescriptionDiv(evt));\n    this.domElement.addEventListener('click', (evt) => player.selectedObj = this);\n  }\n\n  addThumbnailCSS() {\n    // If no thumbnail is specified, use the default thumbnail\n    if (this.thumbnail) {\n      this.domElement.style.backgroundImage = `url(${this.thumbnail})`;\n    }\n  }\n\n  useItem(evt) {\n    const { selectedObj } = window.player;\n    if (selectedObj) {\n      if (selectedObj.components.canBeUnlocked && this.componentData.unlocks) {\n        if (selectedObj.id === this.componentData.unlocksEntity) {\n          window.player.unlock();\n        }\n      }\n    }\n  }\n\n  toggleDescriptionDiv(evt) {\n    const descEle = document.querySelector('.item-description');\n    if (evt.type === 'mouseover') {\n      descEle.querySelector('.item-title').textContent = this.name;\n      descEle.querySelector('.item-info').textContent = this.description;\n      descEle.classList.replace('hidden', 'show');\n    } else {\n      descEle.classList.replace('show', 'hidden');\n    }\n  }\n\n  // TODO: Flesh out, destroy event listeners, remove description and title fields, etc\n  removeItem() {\n    console.log('remove');\n    this.domElement.classList.replace('full', 'empty');\n    this.domElement.style.backgroundImage('none');\n  }\n}\n\nclass Inventory {\n  constructor() {\n    this.invItems = [];\n    this.invWrapper = document.createElement('div');\n    this.invWrapper.classList.add('inventory-wrapper');\n    this.invContainer = document.createElement('div');\n    this.hide = true; \n    this.invContainer.classList.add('container', 'hidden');\n\n    // For now, inventory size is 10\n    for (let i = 0; i < 10; i++) {\n      this.invItems.push(new InventoryItem(i));\n    }\n    this.invItems.forEach((item) => {\n      this.invWrapper.appendChild(item.domElement);\n    });\n    this.addCSS();\n    this.makeDescriptionDiv();\n    this.invContainer.appendChild(this.invWrapper);\n    document.body.appendChild(this.invContainer);\n  }\n\n  makeDescriptionDiv() {\n    this.descriptionDiv = document.createElement('div');\n    this.descriptionDiv.classList.add('item-description', 'hidden');\n    const name = document.createElement('div');\n    name.classList.add('item-title');\n    const info = document.createElement('div');\n    info.classList.add('item-info');\n    this.descriptionDiv.appendChild(name);\n    this.descriptionDiv.appendChild(info);\n    this.invContainer.appendChild(this.descriptionDiv);\n  }\n\n  toggleHidden() {\n    this.hide ? this.invContainer.classList.remove('hidden') : this.invContainer.classList.add('hidden');\n    this.hide = !this.hide;\n  }\n\n  addItem(item) {\n    for (let i = 0; i < this.invItems.length; i++) {\n      if (!this.invItems[i].hasItem) {\n        this.invItems[i].addItem(item);\n        return true;\n      }\n    }\n    return false;\n  }\n\n  removeItem(index) {\n    this.invItems[index].removeItem();\n  }\n\n  // TODO: Port this over to a css file - going to keep it here for now for easy script injection\n  addCSS() {\n    document.write(`<style>\n      .container {\n        min-width: 100vw;\n        z-index: 5000;\n        position: absolute;\n        bottom: 25px;\n      }\n      .inventory-wrapper {\n        display: flex;\n        max-width: 1000px;\n        min-width: 500px;\n        width: 75%;\n        padding: 20px;\n        background-color: #BBBBBB;\n        border-radius: 10px;\n        margin: auto;\n        text-align: center;\n        border: 1px solid black;\n      }\n\n      .item-description {\n        width: 75%;\n        margin: 0 auto 50px;\n        padding: 15px;\n        background-color: #BBB;\n        border-radius: 10px;\n        border: 1px solid black;\n      }\n\n      .item-title {\n        font-size: 32px;\n        font-weight: bold;\n        margin-bottom: 10px;\n        text-align: center;\n      }\n\n      .item-info {\n        font-size: 16px;\n      }\n\n      .inventory-item {\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center;\n        flex: 1 1 1;\n        max-width: 100px;\n        min-width: 10%;\n        padding-top: 10%;\n        border: solid black 2px;\n        box-sizing: border-box;\n      }\n\n      .full {\n        background-image: url(https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/question.png?alt=media&token=b9de7f1a-2692-4f5c-8283-0ca37e44292b);\n      }\n\n      .inventory-item:hover {\n        background-color: #666666;\n      }\n    </style>`);\n  }\n}\n\n//# sourceURL=webpack:///./src/UI/inventory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _json_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-parser */ \"./src/json-parser.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ \"./src/objects/index.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\n\n\nfunction main() {\n  // const scene = parseJson('scene.json');\n  // makeScene(scene);\n  window.player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  Object(_objects__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_json_parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\nmain();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/json-parser.js":
/*!****************************!*\
  !*** ./src/json-parser.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = __webpack_require__(/*! ./scene.json */ \"./src/scene.json\");\n\nfunction parseAssets(assetData) {\n  const assets = document.createElement('a-assets');\n  assetData.forEach((asset) => {\n    let element;\n    if (!asset.src) {\n      element = document.createElement('a-mixin');\n    } else if (asset.src.includes('.png') || asset.src.includes('jpg')) {\n      element = document.createElement('img');\n    } else if (asset.src.includes('.mp3')) {\n      element = document.createElement('audio');\n    } else if (asset.src.includes('.mp4')) {\n      element = document.createElement('video');\n    } else {\n      element = document.createElement('a-asset-item');\n    }\n    Object.keys(asset).forEach((key) => {\n      element.setAttribute(key, asset[key]);\n    });\n    assets.appendChild(element);\n  });\n  return assets;\n}\n\nfunction parseEntities(entityData) {\n  let entity;\n  if (!entityData.type) {\n    entity = document.createElement('a-entity');\n  } else {\n    entity = document.createElement(entityData.type);\n  }\n  Object.keys(entityData).forEach((field) => {\n    if (field === 'attributes') {\n      entityData.attributes.forEach((attribute) => {\n        entity.setAttributeNode(document.createAttribute(attribute));\n      });\n    } else {\n      entity.setAttribute(field, entityData[field]);\n    }\n  });\n  return entity;\n}\n\n\nfunction loadScene(sceneData) {\n  const scene = document.createElement('a-scene');\n  scene.setAttribute('cursor', 'rayOrigin: mouse');\n  if (sceneData.assets) {\n    scene.appendChild(parseAssets(sceneData.assets));\n  }\n  if (sceneData.sky) {\n    const sky = document.createElement('a-sky');\n    Object.keys(sceneData.sky)\n      .forEach(key => sky.setAttribute(key, sceneData.sky[key]));\n    scene.appendChild(sky);\n  }\n  if (sceneData.entities) {\n    sceneData.entities.forEach((entity) => {\n      scene.appendChild(parseEntities(entity));\n    });\n  }\n  // TODO: Make player component\n  if (!sceneData.player) {\n    const player = document.createElement('a-entity');\n    const playerWrapper = document.createElement('a-entity');\n    playerWrapper.appendChild(player);\n    playerWrapper.setAttribute('id', 'rig');\n    playerWrapper.setAttributeNode(document.createAttribute('kinematic-body'));\n    playerWrapper.setAttributeNode(document.createAttribute('movement-controls'));\n\n    player.setAttribute('id', 'player');\n    player.setAttributeNode(document.createAttribute('camera'));\n    player.setAttribute('position', '0 1.6 0');\n    player.setAttribute('look-controls', 'pointerLockEnabled: false');\n    scene.appendChild(playerWrapper);\n  }\n  console.log(scene);\n  document.body.appendChild(scene);\n}\n\nfunction pickFirstScene(json, sceneName) {\n  let sceneIsLoaded = false;\n  data.scenes.forEach((scene) => {\n    if (!sceneName) {\n      if (scene.isDefault) {\n        loadScene(scene);\n        sceneIsLoaded = true;\n      }\n    } else if (sceneName === scene.name) {\n      loadScene(scene);\n      sceneIsLoaded = true;\n    }\n  });\n  if (!sceneIsLoaded) {\n    console.error(sceneName ? `The scene ${sceneName} does not exist` : 'There is no default scene provided');\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pickFirstScene);\n\n\n//# sourceURL=webpack:///./src/json-parser.js?");

/***/ }),

/***/ "./src/objects/collectable/coin.js":
/*!*****************************************!*\
  !*** ./src/objects/collectable/coin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst registerCoin = () => {\n  AFRAME.registerPrimitive('a-coin', {\n    defaultComponents: {\n      currency: {},\n      'obj-model': {\n        mtl: '#coin-mtl',\n        obj: '#coin'\n      },\n      rotation: {},\n      'dynamic-body': { mass: 0, shape: 'box' },\n      rotation: { x: 90, y: 0, z: 0 },\n      spin: {}\n    },\n    mappings: {\n      value: 'currency.value'\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerCoin);\n\n\n//# sourceURL=webpack:///./src/objects/collectable/coin.js?");

/***/ }),

/***/ "./src/objects/collectable/collectable.js":
/*!************************************************!*\
  !*** ./src/objects/collectable/collectable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Component to attach to all collectable entities\nconst registerCollectable = () =>  {\n  AFRAME.registerComponent('collectable', {\n    schema: {\n      name: { type: 'string', default: '' },\n      description: { type: 'string', default: '' },\n      thumbnail: { type: 'string', default: '' },\n    },\n\n    init: function() {\n      this.el.addEventListener('collide', (event) => {\n        setTimeout(() => {\n          if (event.detail.body.el.getAttribute('id') === 'rig') {\n            this.el.parentNode.removeChild(this.el);\n            window.player.addToInventory(this.data, this.el.components);\n          }\n        }, 0);\n      });\n    },\n\n    update: () => {\n\n    },\n\n    remove: function() {\n      const data = this.data;\n      const el = this.el;\n  \n      // Remove event listener.\n      if (data.event) {\n        el.removeEventListener();\n      }\n    },\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerCollectable);\n\n\n//# sourceURL=webpack:///./src/objects/collectable/collectable.js?");

/***/ }),

/***/ "./src/objects/collectable/currency.js":
/*!*********************************************!*\
  !*** ./src/objects/collectable/currency.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst registerCurrency = () => {\n  AFRAME.registerComponent('currency', {\n    schema: {\n      value: { type: 'number', default: 1 },\n    },\n    init: function() {\n      this.el.addEventListener('collide', (event) => {\n        setTimeout(() => {\n          if (event.detail.body.el.getAttribute('id') === 'rig') {\n            this.el.parentNode.removeChild(this.el);\n            window.player.addMoney(this.data.value);\n          }\n        }, 0);\n      });\n    },\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerCurrency);\n\n\n//# sourceURL=webpack:///./src/objects/collectable/currency.js?");

/***/ }),

/***/ "./src/objects/collectable/index.js":
/*!******************************************!*\
  !*** ./src/objects/collectable/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectable */ \"./src/objects/collectable/collectable.js\");\n/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ \"./src/objects/collectable/currency.js\");\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key */ \"./src/objects/collectable/key.js\");\n/* harmony import */ var _unlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unlocks */ \"./src/objects/collectable/unlocks.js\");\n/* harmony import */ var _coin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coin */ \"./src/objects/collectable/coin.js\");\n\n\n\n\n\n\nconst registerCollectables = () => {\n  Object(_collectable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_currency__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_unlocks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  Object(_key__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_coin__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerCollectables);\n\n\n//# sourceURL=webpack:///./src/objects/collectable/index.js?");

/***/ }),

/***/ "./src/objects/collectable/key.js":
/*!****************************************!*\
  !*** ./src/objects/collectable/key.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst registerKey = () => {\n  AFRAME.registerPrimitive('a-key', {\n    defaultComponents: {\n      // Link to a key image\n      collectable: { thumbnail: 'https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/key.png?alt=media&token=87a35d51-fec4-43fb-b723-1aca3f388fdd', name: 'A key', description: 'This must unlock something...' },\n      unlocks: {},\n    },\n    \n    mappings: {\n      thumbnail: 'collectable.thumbnail',\n      unlocks: 'unlocks.unlocksEntity',\n      name: 'collectable.name',\n      description: 'collectable.description'\n    },\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerKey);\n\n\n//# sourceURL=webpack:///./src/objects/collectable/key.js?");

/***/ }),

/***/ "./src/objects/collectable/unlocks.js":
/*!********************************************!*\
  !*** ./src/objects/collectable/unlocks.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst registerUnlocks = () => {\n  AFRAME.registerComponent('unlocks', {\n    schema: {\n      unlocksEntity: { type: 'string', default: '' },\n    }\n  });  \n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerUnlocks);\n\n\n//# sourceURL=webpack:///./src/objects/collectable/unlocks.js?");

/***/ }),

/***/ "./src/objects/index.js":
/*!******************************!*\
  !*** ./src/objects/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collectable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collectable */ \"./src/objects/collectable/index.js\");\n/* harmony import */ var _interactable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactable */ \"./src/objects/interactable/index.js\");\n/* harmony import */ var _qualities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qualities */ \"./src/objects/qualities/index.js\");\n\n\n\n\nconst registerAll = () => {\n  Object(_qualities__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_collectable__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_interactable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerAll);\n\n\n//# sourceURL=webpack:///./src/objects/index.js?");

/***/ }),

/***/ "./src/objects/interactable/can-be-unlocked.js":
/*!*****************************************************!*\
  !*** ./src/objects/interactable/can-be-unlocked.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst registerCanBeUnlocked = () => {\n  AFRAME.registerComponent('canbeunlocked', {\n    schema: {\n      locked: { type: 'boolean', default: true },\n    },\n    init: function () {\n\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerCanBeUnlocked);\n\n\n//# sourceURL=webpack:///./src/objects/interactable/can-be-unlocked.js?");

/***/ }),

/***/ "./src/objects/interactable/chest.js":
/*!*******************************************!*\
  !*** ./src/objects/interactable/chest.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_chest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UI/chest */ \"./src/UI/chest.js\");\n\n\nconst registerChest = () => {\n  AFRAME.registerComponent('chest', {\n    schema: {\n      \n    },\n    init: function() {\n      this.chest = new _UI_chest__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.el);\n      this.el.addEventListener('click', (evt) => {\n        this.chest.onClick(evt);\n      });\n    }\n  });\n  \n  AFRAME.registerPrimitive('a-chest', {\n    defaultComponents: {\n      canbeunlocked: {},\n      chest: {},\n      'obj-model': {\n        mtl: '#chest-mtl',\n        obj: '#chest'\n      }\n    },\n    mappings: {\n      islocked: 'canbeunlocked.locked'\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerChest);\n\n\n//# sourceURL=webpack:///./src/objects/interactable/chest.js?");

/***/ }),

/***/ "./src/objects/interactable/index.js":
/*!*******************************************!*\
  !*** ./src/objects/interactable/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chest */ \"./src/objects/interactable/chest.js\");\n/* harmony import */ var _can_be_unlocked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./can-be-unlocked */ \"./src/objects/interactable/can-be-unlocked.js\");\n\n\n\nconst registerInteractables = () => {\n  Object(_can_be_unlocked__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_chest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerInteractables);\n\n\n//# sourceURL=webpack:///./src/objects/interactable/index.js?");

/***/ }),

/***/ "./src/objects/qualities/index.js":
/*!****************************************!*\
  !*** ./src/objects/qualities/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spin */ \"./src/objects/qualities/spin.js\");\n\n\nconst registerQualities = () => {\n  Object(_spin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerQualities);\n\n//# sourceURL=webpack:///./src/objects/qualities/index.js?");

/***/ }),

/***/ "./src/objects/qualities/spin.js":
/*!***************************************!*\
  !*** ./src/objects/qualities/spin.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst registerSpin = () => {\n  AFRAME.registerComponent('spin', {\n    schema: {\n      speed: {type: 'number', default: 3 }\n    },\n    init: function() {\n      setInterval(() => { this.el.object3D.rotation.y += THREE.Math.degToRad(this.data.speed) }, 50);\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerSpin);\n\n\n//# sourceURL=webpack:///./src/objects/qualities/spin.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI/index.js\");\n\n\nclass Player {\n  constructor() {\n    this.money = 0;\n    this.health = 100;\n    this.hud = new _UI__WEBPACK_IMPORTED_MODULE_0__[\"HUD\"]();\n    this.inventory = new _UI__WEBPACK_IMPORTED_MODULE_0__[\"Inventory\"]();\n    this.selectedObj = null;\n\n    setTimeout(() => this.el = document.getElementById('player'), 0);\n\n    document.addEventListener('keypress', (evt) => {\n      if (evt.key === 'i') {\n        this.toggleUI();\n      }\n    });\n  }\n\n  toggleUI() {\n    this.inventory.toggleHidden();\n    this.hud.toggleHUD();\n  }\n\n  addToInventory(item) {\n    this.inventory.addItem(item);\n  }\n\n  changeMoneyUI() {\n    this.hud.amtCurrency.textContent = this.money;\n  }\n\n  changeHealthUI() {\n    this.hud.amtHealth.textContent = this.health;\n  }\n\n  addMoney(amt) {\n    this.money = amt + this.money;\n    this.changeMoneyUI();\n  }\n\n  withdrawMoney(amt) {\n    if (amt <= this.money) {\n      this.money = this.money - amt;\n      this.changeMoneyUI();\n      return true;\n    }\n    return false;\n  }\n\n  // Unlocks the selected object\n  unlock() {\n    this.selectedObj.components.canBeUnlocked.locked = false;\n  }\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/scene.json":
/*!************************!*\
  !*** ./src/scene.json ***!
  \************************/
/*! exports provided: scenes, default */
/***/ (function(module) {

eval("module.exports = {\"scenes\":[{\"sky\":{\"id\":\"sky\",\"color\":\"#6EBAA7\"},\"isDefault\":true,\"assets\":[{\"src\":\"./assets/applePie.obj\",\"id\":\"pie\"},{\"src\":\"./assets/applePie.mtl\",\"id\":\"pie-mtl\"},{\"src\":\"./assets/key.obj\",\"id\":\"key\"},{\"src\":\"./assets/key.mtl\",\"id\":\"key-mtl\"},{\"src\":\"./assets/chest.obj\",\"id\":\"chest\"},{\"src\":\"./assets/chest.mtl\",\"id\":\"chest-mtl\"},{\"src\":\"./assets/coin.obj\",\"id\":\"coin\"},{\"src\":\"./assets/coin.mtl\",\"id\":\"coin-mtl\"}],\"entities\":[{\"type\":\"a-plane\",\"position\":\"0 0 -4\",\"width\":100,\"height\":100,\"material\":\"color: #AA1188\",\"rotation\":\"-90 0 0\",\"static-body\":\"\"},{\"type\":\"a-key\",\"position\":\"2 1 -2\",\"obj-model\":\"mtl: #key-mtl; obj: #key;\",\"scale\":\".025, .025, .025\",\"dynamic-body\":\"mass: 1, shape: box\"},{\"type\":\"a-coin\",\"position\":\"3, 1.6, -2\",\"scale\":\"30, 30, 30\"},{\"type\":\"a-coin\",\"position\":\"5, 1.6, -2\",\"scale\":\"30, 30, 30\"},{\"type\":\"a-coin\",\"position\":\"7, 1.6, -2\",\"scale\":\"30, 30, 30\"},{\"type\":\"a-coin\",\"position\":\"9, 1.6, -2\",\"scale\":\"30, 30, 30\"},{\"type\":\"a-chest\",\"position\":\"5 .5 -3\",\"static-body\":\"shape: box\",\"islocked\":false},{\"type\":\"a-entity\",\"position\":\"-2 1 3\",\"dynamic-body\":\"shape: box; mass: 0\",\"spin\":\"\",\"obj-model\":\"mtl: #pie-mtl; obj: #pie\",\"scale\":\".25, .25, .25\",\"collectable\":\"name: Apple Pie Slice; description: A delicious piece of freshly baked pie; thumbnail: https://firebasestorage.googleapis.com/v0/b/questify-d4c5a.appspot.com/o/pie.png?alt=media&token=4afa56e5-ade9-4d0f-bdd3-201469b02788\"},{\"type\":\"a-box\",\"position\":{\"x\":0,\"y\":5,\"z\":-2},\"height\":1,\"width\":1,\"dynamic-body\":\"mass: 2; shape: box;\",\"collectable\":\"name: boxy; description: a box; thumbnail: ./assets/boxy.png\"},{\"type\":\"a-box\",\"position\":{\"x\":0,\"y\":0.4,\"z\":-5},\"height\":1,\"width\":1,\"dynamic-body\":\"mass: 2; shape: box;\",\"collectable\":\"name: another box; description: some other box\"},{\"type\":\"a-box\",\"position\":{\"x\":0,\"y\":0.4,\"z\":-8},\"height\":1,\"width\":1,\"dynamic-body\":\"mass: 2; shape: box;\",\"collectable\":\"name: box 3; description: a third box\"}]}]};\n\n//# sourceURL=webpack:///./src/scene.json?");

/***/ })

/******/ });