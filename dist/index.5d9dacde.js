// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fQFrJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ee62429a5d9dacde";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1Z4Rq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gameJs = require("./modules/Game.js");
var _gameJsDefault = parcelHelpers.interopDefault(_gameJs);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 768;
const fps = 20;
const fpsDelay = 1000 / fps;
let time = 0;
let timer = 0;
let frames = 0;
const game = new (0, _gameJsDefault.default)({
    width: 2 * canvas.width,
    height: canvas.height
});
let prevTimeStamp = 0;
const update = (timeStamp)=>{
    requestAnimationFrame(update);
    if (timer / 5 >= 1) {
        timer = 0;
        frames++;
    }
    timer++;
    const timeStampDiff = timeStamp - prevTimeStamp || 0;
    prevTimeStamp = timeStamp;
    game.update(frames);
};
update();

},{"./modules/Game.js":"6GWC7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6GWC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _playerJs = require("./Player.js");
var _playerJsDefault = parcelHelpers.interopDefault(_playerJs);
var _inputJs = require("./Input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _backgroundJs = require("./Background.js");
var _backgroundJsDefault = parcelHelpers.interopDefault(_backgroundJs);
var _collisionBlockJs = require("./CollisionBlock.js");
var _collisionBlockJsDefault = parcelHelpers.interopDefault(_collisionBlockJs);
var _utilsJs = require("../utils.js");
var _collisionsJs = require("../data/collisions.js");
var _enemyJs = require("./Enemy.js");
var _enemyJsDefault = parcelHelpers.interopDefault(_enemyJs);
var _idlePng = require("/assets/knight/_Idle.png");
var _idlePngDefault = parcelHelpers.interopDefault(_idlePng);
var _slimeIdlePng = require("/assets/slime/slimeIdle.png");
var _slimeIdlePngDefault = parcelHelpers.interopDefault(_slimeIdlePng);
var _renderKeysJs = require("./RenderKeys.js");
var _renderKeysJsDefault = parcelHelpers.interopDefault(_renderKeysJs);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class Game {
    constructor({ width, height }){
        this.width = width;
        this.height = height;
        this.player = new (0, _playerJsDefault.default)({
            position: {
                x: 0,
                y: 100
            },
            velocity: {
                x: 0,
                y: 0
            },
            width: 70,
            height: 119,
            imageSrc: (0, _idlePngDefault.default),
            scale: 3,
            maxFrames: 10
        });
        this.input = new (0, _inputJsDefault.default)();
        this.background = new (0, _backgroundJsDefault.default)({
            position: {
                x: 0,
                y: 0
            }
        });
        this.collisionBlocks = [];
        this.parsedCollisions = (0, _utilsJs.arrayParse2D)((0, _collisionsJs.collisions));
        this.parsedCollisions.forEach((row, posY)=>{
            row.forEach((number, posX)=>{
                if (number === 579) this.collisionBlocks.push(new (0, _collisionBlockJsDefault.default)({
                    position: {
                        x: posX * 64,
                        y: posY * 64
                    }
                }));
            });
        });
        this.newEnemyDelay = 20;
        this.newEnemyClock = 0;
        this.enemies = [];
        this.renderKeys = new (0, _renderKeysJsDefault.default)({
            position: {
                x: 0,
                y: 576
            },
            width: 1024,
            height: 144
        });
    }
    checkPlayerCollision = ()=>{
        (0, _utilsJs.checkPlayerCollision)(this.player, this.collisionBlocks);
        this.enemies.forEach((enemy)=>{
            if ((0, _utilsJs.rectangularCollision)(this.player, enemy) && this.player.attacking && this.player.framesCurrent === 3) {
                this.player.attacking = false;
                enemy.takeDamage();
            }
        });
    };
    checkEnemyCollision = (enemy)=>{
        (0, _utilsJs.checkPlayerCollision)(enemy, this.collisionBlocks);
        (0, _utilsJs.checkPlayerEnemyPosition)(this.player, enemy);
        if ((0, _utilsJs.rectangularCollision)(enemy, this.player) && enemy.attacking && enemy.framesCurrent === 3) {
            console.log("cos");
            enemy.attacking = false;
            if (this.player.state.state !== "SLIDE") this.player.takeDamage();
        }
    };
    renderEnemies = (frames)=>{
        if (frames - this.newEnemyClock > Math.round(this.newEnemyDelay) && this.enemies.length <= 10) {
            const newEnemy = new (0, _enemyJsDefault.default)({
                position: {
                    x: 300,
                    y: 200
                },
                velocity: {
                    x: 0,
                    y: 0
                },
                width: 70,
                height: 35,
                imageSrc: (0, _slimeIdlePngDefault.default),
                scale: 3,
                columns: 8,
                maxFrames: 8
            });
            this.enemies.push(newEnemy);
            this.newEnemyClock = frames;
            this.newEnemyDelay = 2 / Math.log(frames) * 200, frames;
        }
    };
    update = (frames)=>{
        this.background.update(this.player, this.width, this.collisionBlocks);
        this.player.update({
            keys: this.input.keys,
            gameWidth: this.width,
            gameHeight: this.height,
            checkCollision: this.checkPlayerCollision,
            frames: frames
        });
        this.enemies.forEach((enemy)=>{
            enemy.update({
                keys: this.input.keys,
                player: this.player,
                checkCollision: this.checkEnemyCollision,
                frames: frames,
                enemies: this.enemies,
                playerOnEnemy: (0, _utilsJs.playerOnEnemy)
            });
            if (enemy.dead) this.renderKeys.addScore = true;
        });
        this.renderEnemies(frames);
        this.collisionBlocks.forEach((block)=>{
        // block.draw()
        });
        this.renderKeys.update(this.input.keys);
    };
}
exports.default = Game;

},{"./Player.js":"jeEdv","./Input.js":"5Wqde","./Background.js":"jTKBN","./CollisionBlock.js":"hHCv3","../utils.js":"eYK4L","../data/collisions.js":"2ScF8","./Enemy.js":"cIxND","/assets/knight/_Idle.png":"4ZX7k","/assets/slime/slimeIdle.png":"h26he","./RenderKeys.js":"8C1LK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jeEdv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _playerStateJs = require("./PlayerState.js");
var _spriteJs = require("./Sprite.js");
var _spriteJsDefault = parcelHelpers.interopDefault(_spriteJs);
var _greyHealthBarPng = require("/assets/healthBar/greyHealthBar.png");
var _greyHealthBarPngDefault = parcelHelpers.interopDefault(_greyHealthBarPng);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class Player extends (0, _spriteJsDefault.default) {
    constructor({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, maxFrames = 1, attackBox = {
        offset: {},
        width: 150,
        height: 120
    } }){
        super({
            position,
            imageSrc,
            scale,
            columns,
            maxFrames
        });
        //Player properties
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.gravity = 0.5;
        this.fictionPosition = this.position.x;
        //Player state and sprite properties
        this.state = null;
        this.states = [
            new (0, _playerStateJs.Idle)(this),
            new (0, _playerStateJs.Running)(this),
            new (0, _playerStateJs.Jump)(this),
            new (0, _playerStateJs.Fall)(this),
            new (0, _playerStateJs.Crouch)(this),
            new (0, _playerStateJs.CrouchWalk)(this),
            new (0, _playerStateJs.Slide)(this),
            new (0, _playerStateJs.Attack)(this),
            new (0, _playerStateJs.AttackWalk)(this)
        ];
        this.setState((0, _playerStateJs.STATES).IDLE);
        this.setSprite((0, _playerStateJs.SPRITES).IDLE);
        this.previousState;
        //Player parameters
        this.onGround = false;
        this.direction = 1;
        this.attacking = false;
        this.health = 100;
        this.stopped = false;
        this.frames = 0;
        this.attackRate = 2;
        this.attackClock = 0;
        //Player attackBox
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        };
        // Player health bar
        this.healthBar = new (0, _spriteJsDefault.default)({
            position: {
                x: this.position.x,
                y: this.position.y
            },
            imageSrc: (0, _greyHealthBarPngDefault.default),
            scale: 2,
            columns: 5,
            maxFrames: 1,
            width: 64
        });
    }
    update = ({ keys, gameWidth, gameHeight, checkCollision, frames })=>{
        this.frames = frames;
        this.state.input(keys);
        // this.ddraw()
        this.animateFrames();
        this.draw();
        checkCollision();
        this.moving(gameWidth);
        this.checkHealth();
        this.healthBar.draw();
        this.healthBar.animateFrames();
        this.healthBar.position.x = this.position.x;
        this.healthBar.position.y = this.position.y - 32;
        // if (this.attacking) {
        //     c.fillStyle = 'red'
        //     c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        // }
        this.direction === 1 ? this.attackBox.position.x = this.position.x + this.width / 2 : this.attackBox.position.x = this.position.x + this.width / 2 - this.attackBox.width;
        this.attackBox.position.y = this.position.y;
    };
    ddraw = ()=>{
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    setState = (state)=>{
        this.previousState = this.state;
        this.state = this.states[state];
        if (this.previousState !== this.state) this.framesCurrent = 0;
        this.state.onSetState();
    };
    setSprite = (sprite)=>{
        this.image.src = sprite.imageSrc;
        this.columns = sprite.columns;
        this.maxFrames = sprite.maxFrames;
    };
    moving = (gameWidth)=>{
        if (!this.stopped) this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
        // console.log(this.fictionPosition, this.position.x);
        //Setting positions
        if (this.fictionPosition >= gameWidth) this.fictionPosition = gameWidth;
        if (this.fictionPosition <= 0) this.fictionPosition = 0;
        if (this.position.x + this.width >= 0.8 * canvas.width && this.fictionPosition !== gameWidth) {
            this.position.x = 0.8 * canvas.width - this.width;
            !this.stopped && (this.fictionPosition += this.velocity.x);
        }
        if (this.position.x + this.width >= canvas.width) this.position.x = canvas.width - this.width;
        if (this.position.x <= 0.2 * canvas.width && this.fictionPosition !== 0) {
            this.position.x = 0.2 * canvas.width;
            !this.stopped && (this.fictionPosition += this.velocity.x);
        }
        if (this.position.x <= 0) this.position.x = 0;
        this.stopped = false;
    // this.position.x = Math.round(this.position.x)
    };
    isAbleToAttack = ()=>{
        return this.frames - this.attackClock > this.attackRate;
    };
    attack = ()=>{
        this.attacking = true;
        this.attackClock = this.frames;
    };
    takeDamage = ()=>{
        this.health -= 25;
    };
    checkHealth = ()=>{
        if (this.health < 100) this.healthBar.framesCurrent = 1;
        if (this.health < 75) this.healthBar.framesCurrent = 2;
        if (this.health < 50) this.healthBar.framesCurrent = 3;
        if (this.health < 25) this.healthBar.framesCurrent = 4;
    };
}
exports.default = Player;

},{"./PlayerState.js":"ep7HD","./Sprite.js":"9lzH1","/assets/healthBar/greyHealthBar.png":"iMqBp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ep7HD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SPRITES", ()=>SPRITES);
parcelHelpers.export(exports, "STATES", ()=>STATES);
parcelHelpers.export(exports, "Idle", ()=>Idle);
parcelHelpers.export(exports, "Running", ()=>Running);
parcelHelpers.export(exports, "Jump", ()=>Jump);
parcelHelpers.export(exports, "Fall", ()=>Fall);
parcelHelpers.export(exports, "Crouch", ()=>Crouch);
parcelHelpers.export(exports, "CrouchWalk", ()=>CrouchWalk);
parcelHelpers.export(exports, "Slide", ()=>Slide);
parcelHelpers.export(exports, "Attack", ()=>Attack);
parcelHelpers.export(exports, "AttackWalk", ()=>AttackWalk);
var _idlePng = require("/assets/knight/_Idle.png");
var _idlePngDefault = parcelHelpers.interopDefault(_idlePng);
var _runPng = require("/assets/knight/_Run.png");
var _runPngDefault = parcelHelpers.interopDefault(_runPng);
var _jumpPng = require("/assets/knight/_Jump.png");
var _jumpPngDefault = parcelHelpers.interopDefault(_jumpPng);
var _fallPng = require("/assets/knight/_Fall.png");
var _fallPngDefault = parcelHelpers.interopDefault(_fallPng);
var _crouchPng = require("/assets/knight/_Crouch.png");
var _crouchPngDefault = parcelHelpers.interopDefault(_crouchPng);
var _crouchWalkPng = require("/assets/knight/_CrouchWalk.png");
var _crouchWalkPngDefault = parcelHelpers.interopDefault(_crouchWalkPng);
var _slidePng = require("/assets/knight/_Slide.png");
var _slidePngDefault = parcelHelpers.interopDefault(_slidePng);
var _attackNoMovementPng = require("/assets/knight/_AttackNoMovement.png");
var _attackNoMovementPngDefault = parcelHelpers.interopDefault(_attackNoMovementPng);
var _attack2NoMovementPng = require("/assets/knight/_Attack2NoMovement.png");
var _attack2NoMovementPngDefault = parcelHelpers.interopDefault(_attack2NoMovementPng);
const SPRITES = {
    IDLE: {
        imageSrc: (0, _idlePngDefault.default),
        columns: 10,
        maxFrames: 10
    },
    RUNNING: {
        imageSrc: (0, _runPngDefault.default),
        columns: 10,
        maxFrames: 10
    },
    JUMP: {
        imageSrc: (0, _jumpPngDefault.default),
        columns: 3,
        maxFrames: 3
    },
    FALL: {
        imageSrc: (0, _fallPngDefault.default),
        columns: 3,
        maxFrames: 3
    },
    CROUCH: {
        imageSrc: (0, _crouchPngDefault.default),
        columns: 1,
        maxFrames: 1
    },
    CROUCHWALK: {
        imageSrc: (0, _crouchWalkPngDefault.default),
        columns: 8,
        maxFrames: 8
    },
    SLIDE: {
        imageSrc: (0, _slidePngDefault.default),
        columns: 2,
        maxFrames: 2
    },
    ATTACK: {
        imageSrc: (0, _attackNoMovementPngDefault.default),
        columns: 4,
        maxFrames: 4
    },
    ATTACKWALK: {
        imageSrc: (0, _attack2NoMovementPngDefault.default),
        columns: 6,
        maxFrames: 6
    }
};
const STATES = {
    IDLE: 0,
    RUNNING: 1,
    JUMP: 2,
    FALL: 3,
    CROUCH: 4,
    CROUCHWALK: 5,
    SLIDE: 6,
    ATTACK: 7,
    ATTACKWALK: 8
};
class State {
    constructor({ player, state }){
        this.player = player;
        this.state = state;
    }
    onSetState = ()=>{};
}
class Fly extends State {
    constructor(...args){
        super(...args);
    }
    flyInput = (keys)=>{
        if (keys.includes("ArrowRight")) {
            this.player.velocity.x = 5;
            this.player.direction = 1;
        }
        if (keys.includes("ArrowLeft")) {
            this.player.velocity.x = -5;
            this.player.direction = -1;
        }
        if (!keys.includes("ArrowRight") && !keys.includes("ArrowLeft")) this.player.velocity.x = 0;
    };
}
class Idle extends State {
    constructor(player){
        super({
            player,
            state: "IDLE"
        });
    }
    input = (keys)=>{
        if (keys.length === 0) {
            this.player.setState(STATES.IDLE);
            this.player.setSprite(SPRITES.IDLE);
            this.player.velocity.x = 0;
            this.player.crouching = false;
            this.player.onGround;
        }
        if (keys.includes("ArrowRight")) this.player.setState(STATES.RUNNING);
        if (keys.includes("ArrowLeft")) this.player.setState(STATES.RUNNING);
        if (keys.includes("ArrowUp") && this.player.onGround) this.player.setState(STATES.JUMP);
        if (keys.includes("ArrowDown")) this.player.setState(STATES.CROUCH);
        if (keys.includes("Space") && this.player.isAbleToAttack()) this.player.setState(STATES.ATTACKWALK);
        if (this.player.velocity.y > 1) this.player.setState(STATES.FALL);
    };
}
class Running extends State {
    constructor(player){
        super({
            player,
            state: "RUNNING"
        });
    }
    input = (keys)=>{
        if (keys.includes("ArrowRight")) {
            this.player.setState(STATES.RUNNING);
            this.player.setSprite(SPRITES.RUNNING);
            this.player.velocity.x = 5 * this.player.direction;
            this.player.direction = 1;
        }
        if (keys.includes("ArrowLeft")) {
            this.player.setState(STATES.RUNNING);
            this.player.setSprite(SPRITES.RUNNING);
            this.player.velocity.x = 5 * this.player.direction;
            this.player.direction = -1;
        }
        if (keys.includes("ArrowUp") && this.player.onGround) this.player.setState(STATES.JUMP);
        if (keys.includes("ArrowDown") && this.player.onGround) this.player.setState(STATES.SLIDE);
        if (keys.includes("Space") && this.player.isAbleToAttack()) this.player.setState(STATES.ATTACKWALK);
        if (keys.length === 0) this.player.setState(STATES.IDLE);
    };
}
class Jump extends Fly {
    constructor(player){
        super({
            player,
            state: "JUMP"
        });
    }
    input = (keys)=>{
        if (keys.includes("ArrowUp") && this.player.onGround) {
            this.player.setState(STATES.JUMP);
            this.player.setSprite(SPRITES.JUMP);
            this.player.velocity.y = -15;
            this.player.onGround = false;
        }
        if (this.player.velocity.y > 0) this.player.setState(STATES.FALL);
        if (keys.includes("Space") && this.player.isAbleToAttack()) this.player.setState(STATES.ATTACK);
        if (this.player.onGround) this.player.setState(STATES.IDLE);
        this.flyInput(keys);
    };
}
class Fall extends Fly {
    constructor(player){
        super({
            player,
            state: "FALL"
        });
    }
    input = (keys)=>{
        if (this.player.velocity.y > 1) {
            this.player.setState(STATES.FALL);
            this.player.setSprite(SPRITES.FALL);
            this.player.onGround = false;
        }
        if (keys.includes("Space") && this.player.isAbleToAttack()) this.player.setState(STATES.ATTACK);
        if (this.player.onGround) this.player.setState(STATES.IDLE);
        this.flyInput(keys);
    };
}
class Crouch extends State {
    constructor(player){
        super({
            player,
            state: "CROUCH"
        });
    }
    input = (keys)=>{
        if (keys.includes("ArrowDown")) {
            this.player.setState(STATES.CROUCH);
            this.player.setSprite(SPRITES.CROUCH);
            this.player.velocity.x = 0;
        }
        if (keys.includes("ArrowRight")) this.player.setState(STATES.CROUCHWALK);
        if (keys.includes("ArrowLeft")) this.player.setState(STATES.CROUCHWALK);
        if (keys.length === 0) this.player.setState(STATES.IDLE);
    };
}
class CrouchWalk extends State {
    constructor(player){
        super({
            player,
            state: "CROUCHWALK"
        });
    }
    input = (keys)=>{
        if (keys.includes("ArrowRight")) {
            this.player.setState(STATES.CROUCHWALK);
            this.player.setSprite(SPRITES.CROUCHWALK);
            this.player.direction = 1;
            this.player.velocity.x = 2.5;
        }
        if (keys.includes("ArrowLeft")) {
            this.player.setState(STATES.CROUCHWALK);
            this.player.setSprite(SPRITES.CROUCHWALK);
            this.player.direction = -1;
            this.player.velocity.x = 2.5 * this.player.direction;
        }
        if (keys.includes("ArrowDown") && !keys.includes("ArrowRight") && !keys.includes("ArrowLeft")) this.player.setState(STATES.CROUCH);
        if (!keys.includes("ArrowDown")) this.player.setState(STATES.IDLE);
    };
}
class Slide extends State {
    constructor(player){
        super({
            player,
            state: "SLIDE"
        });
    }
    input = (keys)=>{
        if (keys.includes("ArrowDown")) {
            this.player.setState(STATES.SLIDE);
            this.player.setSprite(SPRITES.SLIDE);
            this.player.velocity.x = 10 * this.player.direction;
        }
        if (keys.includes("ArrowRight") && keys.includes("ArrowDown")) this.player.setState(STATES.SLIDE);
        if (keys.includes("ArrowLeft") && keys.includes("ArrowDown")) this.player.setState(STATES.SLIDE);
        if (!keys.includes("ArrowDown")) this.player.setState(STATES.IDLE);
    };
}
class Attack extends Fly {
    constructor(player){
        super({
            player,
            state: "ATTACK"
        });
    }
    input = (keys)=>{
        this.player.setSprite(SPRITES.ATTACK);
        if (!this.player.onGround) this.player.maxFrames = 1;
        if (this.player.onGround && !this.player.attacking) this.player.attack();
        if (this.player.onGround && this.player.framesCurrent >= this.player.maxFrames - 1) {
            this.player.setState(STATES.IDLE);
            this.player.attacking = false;
        }
        this.flyInput(keys);
    };
}
class AttackWalk extends State {
    constructor(player){
        super({
            player,
            state: "ATTACKWALK"
        });
    }
    onSetState = ()=>{
        this.player.attack();
    };
    input = ()=>{
        this.player.velocity.x = 0;
        this.player.setSprite(SPRITES.ATTACKWALK);
        if (this.player.framesCurrent >= this.player.maxFrames - 1) {
            this.player.setState(STATES.IDLE);
            this.player.attacking = false;
        }
    };
}

},{"/assets/knight/_Idle.png":"4ZX7k","/assets/knight/_Run.png":"jVsQq","/assets/knight/_Jump.png":"gjPKo","/assets/knight/_Fall.png":"5BSCR","/assets/knight/_Crouch.png":"35ESi","/assets/knight/_CrouchWalk.png":"kj2F4","/assets/knight/_Slide.png":"2FXn6","/assets/knight/_AttackNoMovement.png":"1P74T","/assets/knight/_Attack2NoMovement.png":"kFXhh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ZX7k":[function(require,module,exports) {
module.exports = require("68b7f2e7e9d50903").getBundleURL("ksUvU") + "_Idle.e9e6cea5.png" + "?" + Date.now();

},{"68b7f2e7e9d50903":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jVsQq":[function(require,module,exports) {
module.exports = require("8f7409e922ef3a40").getBundleURL("ksUvU") + "_Run.5eeee929.png" + "?" + Date.now();

},{"8f7409e922ef3a40":"lgJ39"}],"gjPKo":[function(require,module,exports) {
module.exports = require("b996e69d3297a4db").getBundleURL("ksUvU") + "_Jump.33474a0d.png" + "?" + Date.now();

},{"b996e69d3297a4db":"lgJ39"}],"5BSCR":[function(require,module,exports) {
module.exports = require("d4ec492cc4e10520").getBundleURL("ksUvU") + "_Fall.60f19203.png" + "?" + Date.now();

},{"d4ec492cc4e10520":"lgJ39"}],"35ESi":[function(require,module,exports) {
module.exports = require("e44c411c5b6d1ad").getBundleURL("ksUvU") + "_Crouch.dc6ff41d.png" + "?" + Date.now();

},{"e44c411c5b6d1ad":"lgJ39"}],"kj2F4":[function(require,module,exports) {
module.exports = require("d4e58e2d89c229a1").getBundleURL("ksUvU") + "_CrouchWalk.076f587c.png" + "?" + Date.now();

},{"d4e58e2d89c229a1":"lgJ39"}],"2FXn6":[function(require,module,exports) {
module.exports = require("d46846576fba05b7").getBundleURL("ksUvU") + "_Slide.89906024.png" + "?" + Date.now();

},{"d46846576fba05b7":"lgJ39"}],"1P74T":[function(require,module,exports) {
module.exports = require("5097cddfa0d4e1c").getBundleURL("ksUvU") + "_AttackNoMovement.09a2b1aa.png" + "?" + Date.now();

},{"5097cddfa0d4e1c":"lgJ39"}],"kFXhh":[function(require,module,exports) {
module.exports = require("ac95833568402c74").getBundleURL("ksUvU") + "_Attack2NoMovement.6967f613.png" + "?" + Date.now();

},{"ac95833568402c74":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9lzH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class Sprite {
    constructor({ position, imageSrc, scale = 1, columns = 1, maxFrames = 1, framesCurrent = 0, width, height }){
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.columns = columns;
        this.maxFrames = maxFrames;
        this.framesCurrent = framesCurrent;
        this.framesElapsed = 0;
        this.framesHold = 5;
        this.width = width;
        this.height = height;
    }
    update = ()=>{
        this.draw();
        this.animateFrames();
    };
    draw = ()=>{
        let frameWidth = this.image.width / this.columns;
        let direction = this.direction || 1;
        c.save();
        c.scale(direction, 1);
        c.drawImage(this.image, this.framesCurrent * frameWidth, 0, this.image.width / this.columns, this.image.height, direction * (this.position.x + this.width / 2) - frameWidth / 2 * this.scale, this.position.y - this.image.height / 2 * this.scale, frameWidth * this.scale, this.image.height * this.scale);
        //Helping image offset
        // c.fillStyle = 'rgba(0, 0, 0, 0.5)'
        // c.fillRect((direction * (this.position.x + this.width / 2) - frameWidth / 2 * this.scale), this.position.y - this.image.height / 2 * this.scale, frameWidth * this.scale, this.image.height * this.scale)
        c.restore();
    };
    animateFrames = ()=>{
        this.framesElapsed++;
        if (this.framesCurrent < this.maxFrames - 1) {
            if (this.framesElapsed % this.framesHold === 0) this.framesCurrent++;
        } else this.framesCurrent = 0;
    };
}
exports.default = Sprite;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iMqBp":[function(require,module,exports) {
module.exports = require("7178e91d0d30b0ba").getBundleURL("ksUvU") + "greyHealthBar.e85e5f7a.png" + "?" + Date.now();

},{"7178e91d0d30b0ba":"lgJ39"}],"5Wqde":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Input {
    constructor(){
        this.keys = [];
        this.list = [
            "ArrowDown",
            "ArrowUp",
            "ArrowLeft",
            "ArrowRight",
            "Space",
            "ShiftLeft",
            "KeyQ"
        ];
        window.addEventListener("keydown", (e)=>{
            this.registerKey(e.code);
        });
        window.addEventListener("keyup", (e)=>{
            this.unregisterKey(e.code);
        });
    }
    registerKey(key) {
        if (this.list.includes(key)) {
            if (!this.keys.includes(key)) this.keys.push(key);
        }
    }
    unregisterKey(key) {
        const keyIndex = this.keys.indexOf(key);
        if (this.list.indexOf(key) > -1) {
            if (keyIndex > -1) this.keys.splice(keyIndex, 1);
        }
    }
}
exports.default = Input;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jTKBN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _backgroundLayer1Png = require("/assets/oak_woods_v1.0/background/background_layer_1.png");
var _backgroundLayer1PngDefault = parcelHelpers.interopDefault(_backgroundLayer1Png);
var _backgroundLayer2Png = require("/assets/oak_woods_v1.0/background/background_layer_2.png");
var _backgroundLayer2PngDefault = parcelHelpers.interopDefault(_backgroundLayer2Png);
var _backgroundLayer3Png = require("/assets/oak_woods_v1.0/background/background_layer_3.png");
var _backgroundLayer3PngDefault = parcelHelpers.interopDefault(_backgroundLayer3Png);
var _mapPng = require("/assets/map.png");
var _mapPngDefault = parcelHelpers.interopDefault(_mapPng);
var _backgroundPaperPng = require("/assets/backgroundPaper.png");
var _backgroundPaperPngDefault = parcelHelpers.interopDefault(_backgroundPaperPng);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class Background {
    constructor({ position }){
        this.position = position;
        this.image1 = new Image();
        this.image1.src = (0, _backgroundLayer1PngDefault.default);
        this.image2 = new Image();
        this.image2.src = (0, _backgroundLayer2PngDefault.default);
        this.image3 = new Image();
        this.image3.src = (0, _backgroundLayer3PngDefault.default);
        this.image4 = new Image();
        this.image4.src = (0, _mapPngDefault.default);
        this.image5 = new Image();
        this.image5.src = (0, _backgroundPaperPngDefault.default);
        this.positionX1 = 0;
        this.positionX2 = 0;
        this.positionX3 = 0;
        this.positionX4 = 0;
        c.msImageSmoothingEnabled = false;
        c.mozImageSmoothingEnabled = false;
        c.webkitImageSmoothingEnabled = false;
        c.imageSmoothingEnabled = false;
    }
    update = (player, gameWidth, collisionBlocks)=>{
        this.draw(player.position.x, player.state, player.fictionPosition, player.width, gameWidth, collisionBlocks, player.velocity.x, player.stopped);
    };
    draw = (pPosX, pState, pFicPosX, pWidth, gameWidth, collisionBlocks, pVelX, pStop)=>{
        // const gameImages = Math.round(gameWidth / canvas.width)
        if (pPosX >= 0.8 * canvas.width - pWidth && (pState.state !== "IDLE" || pState.state !== "CROUCH") && !pStop) {
            this.positionX1 = -pPosX + 0.8 * canvas.width - pWidth - 0.2 * pFicPosX;
            this.positionX2 = -pPosX + 0.8 * canvas.width - pWidth - 0.5 * pFicPosX;
            this.positionX3 = -pPosX + 0.8 * canvas.width - pWidth - 0.8 * pFicPosX;
            this.positionX4 = -pPosX + 0.8 * canvas.width - pWidth - pFicPosX;
            collisionBlocks.forEach((block)=>{
                block.position.x = block.position.x - pVelX;
            });
        }
        if (pPosX === 0.2 * canvas.width && (pState.state !== "IDLE" || pState.state !== "CROUCH") && !pStop) {
            this.positionX1 = -pPosX + 0.2 * canvas.width - 0.2 * pFicPosX;
            this.positionX2 = -pPosX + 0.2 * canvas.width - 0.5 * pFicPosX;
            this.positionX3 = -pPosX + 0.2 * canvas.width - 0.8 * pFicPosX;
            this.positionX4 = -pPosX + 0.2 * canvas.width - pFicPosX;
            collisionBlocks.forEach((block)=>{
                block.position.x = block.position.x - pVelX;
            });
        }
        c.drawImage(this.image5, 0, 0, canvas.width, 704);
        c.drawImage(this.image1, this.positionX1, 0, canvas.width, 576);
        c.drawImage(this.image1, this.positionX1 + canvas.width, 0, canvas.width, 576);
        c.drawImage(this.image2, this.positionX2, 0, canvas.width, 576);
        c.drawImage(this.image2, this.positionX2 + canvas.width, 0, canvas.width, 576);
        c.drawImage(this.image3, this.positionX3, 0, canvas.width, 576);
        c.drawImage(this.image3, this.positionX3 + canvas.width, 0, canvas.width, 576);
        c.drawImage(this.image3, this.positionX3 + 2 * canvas.width, 0, canvas.width, 576);
        c.drawImage(this.image4, this.positionX4, 0, 3072, 576);
    };
}
exports.default = Background;

},{"/assets/oak_woods_v1.0/background/background_layer_1.png":"3BmuG","/assets/oak_woods_v1.0/background/background_layer_2.png":"38Fl3","/assets/oak_woods_v1.0/background/background_layer_3.png":"6jIh7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/assets/map.png":"djRla","/assets/backgroundPaper.png":"f6Wch"}],"3BmuG":[function(require,module,exports) {
module.exports = require("a20d70d47135f1fe").getBundleURL("ksUvU") + "background_layer_1.ecfd8cc7.png" + "?" + Date.now();

},{"a20d70d47135f1fe":"lgJ39"}],"38Fl3":[function(require,module,exports) {
module.exports = require("9d60df3aeb5e8e6f").getBundleURL("ksUvU") + "background_layer_2.de3ab38c.png" + "?" + Date.now();

},{"9d60df3aeb5e8e6f":"lgJ39"}],"6jIh7":[function(require,module,exports) {
module.exports = require("7290886cc7596598").getBundleURL("ksUvU") + "background_layer_3.7bd6e3ce.png" + "?" + Date.now();

},{"7290886cc7596598":"lgJ39"}],"djRla":[function(require,module,exports) {
module.exports = require("244fac9549f4e7ff").getBundleURL("ksUvU") + "map.7ac7699d.png" + "?" + Date.now();

},{"244fac9549f4e7ff":"lgJ39"}],"f6Wch":[function(require,module,exports) {
module.exports = require("d26903f88051d637").getBundleURL("ksUvU") + "backgroundPaper.bf0ceec9.png" + "?" + Date.now();

},{"d26903f88051d637":"lgJ39"}],"hHCv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class CollisionBlock {
    constructor({ position }){
        this.position = position;
        this.width = 64;
        this.height = 64;
        this.collisionBlocks = [];
    }
    draw = ()=>{
        c.fillStyle = "rgb(255, 0, 0, 0.3)";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
}
exports.default = CollisionBlock;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYK4L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrayParse2D", ()=>arrayParse2D);
parcelHelpers.export(exports, "checkPlayerCollision", ()=>checkPlayerCollision);
parcelHelpers.export(exports, "checkPlayerEnemyPosition", ()=>checkPlayerEnemyPosition);
parcelHelpers.export(exports, "rectangularCollision", ()=>rectangularCollision);
parcelHelpers.export(exports, "playerOnEnemy", ()=>playerOnEnemy);
const arrayParse2D = (array)=>{
    const rows = [];
    for(let i = 0; i < array.length; i += 48)rows.push(array.slice(i, i + 48));
    return rows;
};
const checkPlayerCollision = (player, collisionBlocks)=>{
    collisionBlocks.forEach((block)=>{
        //bottom
        if (player.position.y + player.height + player.velocity.y >= block.position.y && player.position.y < block.position.y && player.position.x < block.position.x + block.width && player.position.x + player.width > block.position.x) {
            player.velocity.y = Math.max(-1 * (player.position.y + player.height - block.position.y), 0);
            player.onGround = player.velocity.y === 0;
        }
        //left && right
        if (player.position.x + player.velocity.x <= block.position.x + block.width && player.position.x + player.width + player.velocity.x >= block.position.x && player.position.y < block.position.y + block.height && player.height + player.position.y > block.position.y) {
            player.velocity.x = 0;
            player.stopped = true;
        }
        //top
        if (player.position.y + player.velocity.y < block.position.y + block.height && player.position.y + player.height > block.position.y + block.height && player.position.x < block.position.x + block.width && player.position.x + player.width > block.position.x) {
            if (-player.velocity.y * 0.2 > 1) player.velocity.y = -player.velocity.y * 0.2;
            else player.velocity.y = 1;
            player.onGround = false;
        }
    });
};
const playerOnEnemy = (player, enemy)=>{
    return player.position.x <= enemy.position.x + enemy.width && player.position.x + player.width >= enemy.position.x && player.position.y <= enemy.position.y + enemy.height && player.position.y + player.height >= enemy.position.y + enemy.height;
};
const checkPlayerEnemyPosition = (player, enemy)=>{
    if (player.position.x + player.width * 0.6 < enemy.position.x && enemy.state.state === "RUNNING") {
        if (enemy.velocity.x === 0 && enemy.state.state === "RUNNING") enemy.velocity.y = -8;
        enemy.velocity.x = -1.5;
        enemy.direction = 1;
    }
    if (player.position.x > enemy.position.x + enemy.width * 0.6 && enemy.state.state === "RUNNING") {
        if (enemy.velocity.x === 0 && enemy.state.state === "RUNNING") enemy.velocity.y = -8;
        enemy.velocity.x = 1.5;
        enemy.direction = -1;
    }
    if (player.position.y + player.height < enemy.position.y && player.position.x < enemy.position.x + enemy.width * 0.6 && player.position.x + player.width * 0.6 > enemy.position.x && enemy.onGround) {
        enemy.onGround = false;
        enemy.velocity.y = -10;
    }
    if (playerOnEnemy(player, enemy)) {
        if (player.state.state === "ATTACK" || player.state.state === "SLIDE") {
            enemy.velocity.y = -12;
            enemy.onGround = false;
            enemy.setState(0);
            if (enemy.position.x > player.position.x) enemy.velocity.x = 4;
            if (enemy.position.x + enemy.width < player.position.x + player.width) enemy.velocity.x = -4;
        }
        if (player.state.state === "ATTACKWALK") enemy.velocity.x = 0;
    }
};
const rectangularCollision = (rectangle1, rectangle2)=>{
    return rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && rectangle1.attackBox.position.y < rectangle2.position.y + rectangle2.height && rectangle1.attackBox.height + rectangle1.position.y > rectangle2.position.y;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ScF8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "collisions", ()=>collisions);
const collisions = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    579,
    579,
    579,
    579,
    579,
    579,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    579,
    579,
    579,
    579,
    579,
    579,
    0,
    0,
    579,
    579,
    579,
    579,
    579,
    579,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    579,
    579,
    579,
    579,
    579,
    579,
    0,
    0,
    579,
    579,
    579,
    579,
    579,
    579,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    579,
    579,
    579,
    579,
    579,
    579,
    0,
    0,
    0,
    0,
    0,
    0,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579,
    579
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIxND":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enemyStateJs = require("./EnemyState.js");
var _spriteJs = require("./Sprite.js");
var _spriteJsDefault = parcelHelpers.interopDefault(_spriteJs);
var _blueHealthBarPng = require("/assets/healthBar/blueHealthBar.png");
var _blueHealthBarPngDefault = parcelHelpers.interopDefault(_blueHealthBarPng);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class Enemy extends (0, _spriteJsDefault.default) {
    constructor({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, maxFrames = 1, attackBox = {
        offset: {},
        width: 35,
        height: 35
    } }){
        super({
            position,
            imageSrc,
            scale,
            columns,
            maxFrames
        });
        // this.position = position
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.gravity = 0.5;
        this.onGround = false;
        this.stopped = false;
        this.direction = 1;
        this.health = 100;
        this.attacking = false;
        this.dead = false;
        this.frames = 0;
        this.attackRate = 20;
        this.attackClock = 0;
        this.playerOnEnemyCollision = false;
        this.state = null;
        this.states = [
            new (0, _enemyStateJs.Idle)(this),
            new (0, _enemyStateJs.Running)(this),
            new (0, _enemyStateJs.Attack)(this),
            new (0, _enemyStateJs.Death)(this)
        ];
        this.setState((0, _enemyStateJs.STATES).IDLE);
        this.setSprite((0, _enemyStateJs.SPRITES).IDLE);
        this.previousState = this.state;
        //Enemy attackBox
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        };
        // Enemy health bar
        this.healthBar = new (0, _spriteJsDefault.default)({
            position: {
                x: this.position.x,
                y: this.position.y
            },
            imageSrc: (0, _blueHealthBarPngDefault.default),
            scale: 2,
            columns: 5,
            maxFrames: 1,
            width: 64
        });
    }
    update = ({ keys, player, checkCollision, frames, enemies, playerOnEnemy })=>{
        this.playerOnEnemyCollision = playerOnEnemy(player, this);
        this.frames = frames;
        this.state.input(this, enemies);
        // this.ddraw()
        this.draw();
        if (!this.dead) this.animateFrames();
        checkCollision(this);
        this.moving(player.position.x, player.state, player.width, player.velocity.x, player.stopped);
        this.checkHealth();
        // if (this.attacking) {
        //     c.fillStyle = 'blue'
        //     c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        // }
        this.direction === -1 ? this.attackBox.position.x = this.position.x + this.width / 2 : this.attackBox.position.x = this.position.x + this.width / 2 - this.attackBox.width;
        this.attackBox.position.y = this.position.y;
        this.healthBar.draw();
        this.healthBar.animateFrames();
        this.healthBar.position.x = this.position.x;
        this.healthBar.position.y = this.position.y - 32;
    };
    ddraw = ()=>{
        c.fillStyle = "green";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    setState = (state)=>{
        this.previousState = this.state;
        // if (this.previousState !== this.state) {
        this.state = this.states[state];
        this.state.onSetState();
    // }
    };
    setSprite = (sprite)=>{
        this.image.src = sprite.imageSrc;
        this.columns = sprite.columns;
        this.maxFrames = sprite.maxFrames;
    };
    moving = (pPosX, pState, pWidth, pVelX, pStop)=>{
        if (pPosX === 0.8 * canvas.width - pWidth && (pState.state !== "IDLE" || pState.state !== "CROUCH") && !pStop) this.position.x = this.position.x - pVelX;
        if (pPosX === 0.2 * canvas.width && (pState.state !== "IDLE" || pState.state !== "CROUCH") && !pStop) this.position.x = this.position.x - pVelX;
        if (!this.stopped) this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
        this.stopped = false;
    };
    isAbleToAttack = ()=>{
        return this.frames - this.attackClock > this.attackRate;
    };
    attack = ()=>{
        this.attacking = true;
        this.attackClock = this.frames;
    };
    takeDamage = ()=>{
        this.health -= 25;
    };
    checkHealth = ()=>{
        if (this.health < 100) this.healthBar.framesCurrent = 1;
        if (this.health < 75) this.healthBar.framesCurrent = 2;
        if (this.health < 50) this.healthBar.framesCurrent = 3;
        if (this.health < 25) this.healthBar.framesCurrent = 4;
    };
}
exports.default = Enemy;

},{"./Sprite.js":"9lzH1","/assets/healthBar/blueHealthBar.png":"lCoHq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./EnemyState.js":"7QYH7"}],"lCoHq":[function(require,module,exports) {
module.exports = require("fc30d919ad8593c3").getBundleURL("ksUvU") + "blueHealthBar.50d99c2e.png" + "?" + Date.now();

},{"fc30d919ad8593c3":"lgJ39"}],"7QYH7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SPRITES", ()=>SPRITES);
parcelHelpers.export(exports, "STATES", ()=>STATES);
parcelHelpers.export(exports, "Idle", ()=>Idle);
parcelHelpers.export(exports, "Running", ()=>Running);
parcelHelpers.export(exports, "Attack", ()=>Attack);
parcelHelpers.export(exports, "Death", ()=>Death);
var _slimeIdlePng = require("/assets/slime/slimeIdle.png");
var _slimeIdlePngDefault = parcelHelpers.interopDefault(_slimeIdlePng);
var _slimeAttackPng = require("/assets/slime/slimeAttack.png");
var _slimeAttackPngDefault = parcelHelpers.interopDefault(_slimeAttackPng);
var _slimeDeathPng = require("/assets/slime/slimeDeath.png");
var _slimeDeathPngDefault = parcelHelpers.interopDefault(_slimeDeathPng);
const SPRITES = {
    IDLE: {
        imageSrc: (0, _slimeIdlePngDefault.default),
        columns: 8,
        maxFrames: 8
    },
    ATTACK: {
        imageSrc: (0, _slimeAttackPngDefault.default),
        columns: 8,
        maxFrames: 8
    },
    DEATH: {
        imageSrc: (0, _slimeDeathPngDefault.default),
        columns: 8,
        maxFrames: 8
    }
};
const STATES = {
    IDLE: 0,
    RUNNING: 1,
    ATTACK: 2,
    DEATH: 3
};
class State {
    constructor({ enemy, state }){
        this.enemy = enemy;
        this.state = state;
    }
    checkDeath = ()=>{
        if (this.enemy.health <= 0) this.enemy.setState(STATES.DEATH);
    };
    onSetState = ()=>{};
}
class Idle extends State {
    constructor(enemy){
        super({
            enemy,
            state: "IDLE"
        });
    }
    input = ()=>{
        this.enemy.setState(STATES.IDLE);
        this.enemy.setSprite(SPRITES.IDLE);
        if (this.enemy.onGround) this.enemy.setState(STATES.RUNNING);
        this.checkDeath();
    };
}
class Running extends State {
    constructor(enemy){
        super({
            enemy,
            state: "RUNNING"
        });
    }
    input = ()=>{
        this.enemy.setState(STATES.RUNNING);
        this.enemy.setSprite(SPRITES.IDLE);
        console.log(this.enemy.isAbleToAttack());
        if (this.enemy.playerOnEnemyCollision && this.enemy.isAbleToAttack()) this.enemy.setState(STATES.ATTACK);
        this.checkDeath();
    };
}
class Attack extends State {
    constructor(enemy){
        super({
            enemy,
            state: "ATTACK"
        });
    }
    onSetState = ()=>{
        this.enemy.attack();
    };
    input = ()=>{
        this.enemy.velocity.x = 0;
        this.enemy.setState(STATES.ATTACK);
        this.enemy.setSprite(SPRITES.ATTACK);
        if (this.enemy.framesCurrent >= this.enemy.maxFrames - 1) {
            this.enemy.setState(STATES.IDLE);
            this.enemy.attacking = false;
        }
    };
}
class Death extends State {
    constructor(enemy){
        super({
            enemy,
            state: "DEATH"
        });
    }
    onSetState = ()=>{
        this.enemy.attack();
    };
    input = (enemy, enemies)=>{
        this.enemy.setState(STATES.DEATH);
        this.enemy.setSprite(SPRITES.DEATH);
        if (this.enemy.framesCurrent >= this.enemy.maxFrames - 1) {
            this.enemy.dead = true;
            enemies.splice(enemies.indexOf(enemy), 1);
        }
    };
}

},{"/assets/slime/slimeIdle.png":"h26he","/assets/slime/slimeAttack.png":"4j9By","/assets/slime/slimeDeath.png":"6DKO8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h26he":[function(require,module,exports) {
module.exports = require("2832f1231a4e616c").getBundleURL("ksUvU") + "slimeIdle.ff039d19.png" + "?" + Date.now();

},{"2832f1231a4e616c":"lgJ39"}],"4j9By":[function(require,module,exports) {
module.exports = require("1bc258141d67d127").getBundleURL("ksUvU") + "slimeAttack.22821181.png" + "?" + Date.now();

},{"1bc258141d67d127":"lgJ39"}],"6DKO8":[function(require,module,exports) {
module.exports = require("1eac83beac788e23").getBundleURL("ksUvU") + "slimeDeath.bf963798.png" + "?" + Date.now();

},{"1eac83beac788e23":"lgJ39"}],"8C1LK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sprite = require("./Sprite");
var _spriteDefault = parcelHelpers.interopDefault(_sprite);
var _arrowUpPng = require("/assets/keys/arrowUp.png");
var _arrowUpPngDefault = parcelHelpers.interopDefault(_arrowUpPng);
var _arrowUpPressedPng = require("/assets/keys/arrowUpPressed.png");
var _arrowUpPressedPngDefault = parcelHelpers.interopDefault(_arrowUpPressedPng);
var _arrowLeftPng = require("/assets/keys/arrowLeft.png");
var _arrowLeftPngDefault = parcelHelpers.interopDefault(_arrowLeftPng);
var _arrowLeftPressedPng = require("/assets/keys/arrowLeftPressed.png");
var _arrowLeftPressedPngDefault = parcelHelpers.interopDefault(_arrowLeftPressedPng);
var _arrowDownPng = require("/assets/keys/arrowDown.png");
var _arrowDownPngDefault = parcelHelpers.interopDefault(_arrowDownPng);
var _arrowDownPressedPng = require("/assets/keys/arrowDownPressed.png");
var _arrowDownPressedPngDefault = parcelHelpers.interopDefault(_arrowDownPressedPng);
var _arrowRightPng = require("/assets/keys/arrowRight.png");
var _arrowRightPngDefault = parcelHelpers.interopDefault(_arrowRightPng);
var _arrowRightPressedPng = require("/assets/keys/arrowRightPressed.png");
var _arrowRightPressedPngDefault = parcelHelpers.interopDefault(_arrowRightPressedPng);
var _spacePng = require("/assets/keys/space.png");
var _spacePngDefault = parcelHelpers.interopDefault(_spacePng);
var _spacePressedPng = require("/assets/keys/spacePressed.png");
var _spacePressedPngDefault = parcelHelpers.interopDefault(_spacePressedPng);
var _skillBoxPng = require("/assets/keys/skillBox.png");
var _skillBoxPngDefault = parcelHelpers.interopDefault(_skillBoxPng);
var _bronzeCoinPng = require("/assets/coins/bronzeCoin.png");
var _bronzeCoinPngDefault = parcelHelpers.interopDefault(_bronzeCoinPng);
var _ironCoinPng = require("/assets/coins/ironCoin.png");
var _ironCoinPngDefault = parcelHelpers.interopDefault(_ironCoinPng);
var _silverCoinPng = require("/assets/coins/silverCoin.png");
var _silverCoinPngDefault = parcelHelpers.interopDefault(_silverCoinPng);
var _goldCoinPng = require("/assets/coins/goldCoin.png");
var _goldCoinPngDefault = parcelHelpers.interopDefault(_goldCoinPng);
const coins = [
    {
        name: "bronze",
        img: (0, _bronzeCoinPngDefault.default)
    },
    {
        name: "iron",
        img: (0, _ironCoinPngDefault.default)
    },
    {
        name: "silver",
        img: (0, _silverCoinPngDefault.default)
    },
    {
        name: "gold",
        img: (0, _goldCoinPngDefault.default)
    }
];
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const margin = 64;
let score = 1;
class RenderKeys {
    constructor({ position, width, height }){
        this.position = position;
        this.width = width;
        this.height = height;
        this.addScore = false;
        this.arrowLeft = new (0, _spriteDefault.default)({
            position: {
                x: this.position.x + margin * 3,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: (0, _arrowLeftPngDefault.default),
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        });
        this.arrowUp = new (0, _spriteDefault.default)({
            position: {
                x: this.position.x + margin * 4,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: (0, _arrowUpPngDefault.default),
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        });
        this.arrowDown = new (0, _spriteDefault.default)({
            position: {
                x: this.position.x + margin * 5,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: (0, _arrowDownPngDefault.default),
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        });
        this.arrowRight = new (0, _spriteDefault.default)({
            position: {
                x: this.position.x + margin * 6,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: (0, _arrowRightPngDefault.default),
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        });
        this.space = new (0, _spriteDefault.default)({
            position: {
                x: this.position.x + margin * 7,
                y: this.position.y + margin
            },
            width: 128,
            height: 64,
            imageSrc: (0, _spacePngDefault.default),
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        });
        this.skillBoxAttack = new (0, _spriteDefault.default)({
            position: {
                x: this.position.x + margin * 9,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: (0, _skillBoxPngDefault.default),
            scale: 2,
            offset: {
                x: 0,
                y: 0
            }
        });
        this.scoreArray = [];
        this.score1 = new (0, _spriteDefault.default)({
            position: {
                x: this.position.x + margin * 10,
                y: this.position.y + margin - 16
            },
            width: 32,
            height: 32,
            imageSrc: (0, _bronzeCoinPngDefault.default),
            scale: 2,
            columns: 6,
            maxFrames: 6,
            offset: {
                x: 0,
                y: 0
            }
        });
        this.score2 = new (0, _spriteDefault.default)({
            position: {
                x: this.position.x + margin * 10,
                y: this.position.y + margin + 16
            },
            width: 32,
            height: 32,
            imageSrc: (0, _bronzeCoinPngDefault.default),
            scale: 2,
            columns: 6,
            maxFrames: 6,
            offset: {
                x: 0,
                y: 0
            }
        });
    }
    update = (keys)=>{
        this.checkPressedKey(keys);
        // this.ddraw()
        this.arrowUp.draw();
        this.arrowUp.animateFrames();
        this.arrowLeft.draw();
        this.arrowLeft.animateFrames();
        this.arrowDown.draw();
        this.arrowDown.animateFrames();
        this.arrowRight.draw();
        this.arrowRight.animateFrames();
        this.space.draw();
        this.space.animateFrames();
        // this.skillBoxAttack.draw()
        // this.skillBoxAttack.animateFrames()
        this.scoreArray.forEach((score)=>{
            score.draw();
            score.animateFrames();
        });
        if (this.addScore) {
            const newCoin = this.createNewCoin(coins[0].name, coins[0].img);
            this.scoreArray.push(newCoin);
            this.updateCoinPosition();
        }
        for(let coin in coins){
            if (this.scoreArray.filter((x)=>x.name === "gold").length === 3) return;
            if (this.scoreArray.filter((x)=>x.name === coins[coin].name).length === 3) {
                let firstCoin = this.scoreArray.find((el)=>el.name === coins[coin].name);
                this.scoreArray.splice(this.scoreArray.indexOf(firstCoin), 3);
                const newCoin = this.createNewCoin(coins[Number(coin) + 1].name, coins[Number(coin) + 1].img);
                this.scoreArray.push(newCoin);
                this.updateCoinPosition();
            }
        }
    };
    checkPressedKey = (keys)=>{
        if (keys.includes("ArrowUp")) this.arrowUp.image.src = (0, _arrowUpPressedPngDefault.default);
        else this.arrowUp.image.src = (0, _arrowUpPngDefault.default);
        if (keys.includes("ArrowLeft")) this.arrowLeft.image.src = (0, _arrowLeftPressedPngDefault.default);
        else this.arrowLeft.image.src = (0, _arrowLeftPngDefault.default);
        if (keys.includes("ArrowDown")) this.arrowDown.image.src = (0, _arrowDownPressedPngDefault.default);
        else this.arrowDown.image.src = (0, _arrowDownPngDefault.default);
        if (keys.includes("ArrowRight")) this.arrowRight.image.src = (0, _arrowRightPressedPngDefault.default);
        else this.arrowRight.image.src = (0, _arrowRightPngDefault.default);
        if (keys.includes("Space")) this.space.image.src = (0, _spacePressedPngDefault.default);
        else this.space.image.src = (0, _spacePngDefault.default);
    };
    updateCoinPosition = ()=>{
        this.scoreArray.forEach((coin)=>{
            let newPosition = {
                x: 0,
                y: 0
            };
            switch(this.scoreArray.indexOf(coin)){
                case 0:
                    coin.position.x = this.position.x + margin * 10;
                    coin.position.y = this.position.y + margin - 16;
                    this.addScore = false;
                    break;
                case 1:
                    coin.position.x = this.position.x + margin * 10.5;
                    coin.position.y = this.position.y + margin - 16;
                    this.addScore = false;
                    break;
                case 2:
                    coin.position.x = this.position.x + margin * 11;
                    coin.position.y = this.position.y + margin - 16;
                    this.addScore = false;
                    break;
                case 3:
                    coin.position.x = this.position.x + margin * 11.5;
                    coin.position.y = this.position.y + margin - 16;
                    this.addScore = false;
                    break;
                case 4:
                    coin.position.x = this.position.x + margin * 12;
                    coin.position.y = this.position.y + margin - 16;
                    this.addScore = false;
                    break;
                case 5:
                    coin.position.x = this.position.x + margin * 10;
                    coin.position.y = this.position.y + margin + 16;
                    this.addScore = false;
                    break;
                case 6:
                    coin.position.x = this.position.x + margin * 10.5;
                    coin.position.y = this.position.y + margin + 16;
                    this.addScore = false;
                    break;
                case 7:
                    coin.position.x = this.position.x + margin * 11;
                    coin.position.y = this.position.y + margin + 16;
                    break;
                case 8:
                    coin.position.x = this.position.x + margin * 11.5;
                    coin.position.y = this.position.y + margin + 16;
                    break;
                case 9:
                    coin.position.x = this.position.x + margin * 12;
                    coin.position.y = this.position.y + margin + 16;
                    this.addScore = false;
                    break;
            }
        });
    };
    createNewCoin = (name, img)=>{
        const newScore = new (0, _spriteDefault.default)({
            position: {
                x: 0,
                y: 0
            },
            width: 32,
            height: 32,
            imageSrc: img,
            scale: 2,
            columns: 6,
            maxFrames: 6,
            offset: {
                x: 0,
                y: 0
            }
        });
        newScore.name = name;
        return newScore;
    };
}
exports.default = RenderKeys;

},{"./Sprite":"9lzH1","/assets/keys/arrowUp.png":"5ZcCS","/assets/keys/arrowUpPressed.png":"ewwrp","/assets/keys/arrowLeft.png":"gnVQP","/assets/keys/arrowLeftPressed.png":"9VKJr","/assets/keys/arrowDown.png":"e5tQE","/assets/keys/arrowDownPressed.png":"39CkS","/assets/keys/arrowRight.png":"ar8Q2","/assets/keys/arrowRightPressed.png":"5WqrE","/assets/keys/space.png":"bg7FV","/assets/keys/spacePressed.png":"7wUJ3","/assets/keys/skillBox.png":"lYe7Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/assets/coins/bronzeCoin.png":"fBYIe","/assets/coins/ironCoin.png":"7dGd6","/assets/coins/silverCoin.png":"jM3Ph","/assets/coins/goldCoin.png":"gkuLV"}],"5ZcCS":[function(require,module,exports) {
module.exports = require("e46a8565b83fbbde").getBundleURL("ksUvU") + "arrowUp.2db42674.png" + "?" + Date.now();

},{"e46a8565b83fbbde":"lgJ39"}],"ewwrp":[function(require,module,exports) {
module.exports = require("7271a65bf25df227").getBundleURL("ksUvU") + "arrowUpPressed.ab0b10f1.png" + "?" + Date.now();

},{"7271a65bf25df227":"lgJ39"}],"gnVQP":[function(require,module,exports) {
module.exports = require("113674650dc0277b").getBundleURL("ksUvU") + "arrowLeft.62e41a95.png" + "?" + Date.now();

},{"113674650dc0277b":"lgJ39"}],"9VKJr":[function(require,module,exports) {
module.exports = require("82d7c095ed5c783").getBundleURL("ksUvU") + "arrowLeftPressed.2ecd801d.png" + "?" + Date.now();

},{"82d7c095ed5c783":"lgJ39"}],"e5tQE":[function(require,module,exports) {
module.exports = require("d45cc9443abe269d").getBundleURL("ksUvU") + "arrowDown.a49341b2.png" + "?" + Date.now();

},{"d45cc9443abe269d":"lgJ39"}],"39CkS":[function(require,module,exports) {
module.exports = require("c6bde797ff6e20e5").getBundleURL("ksUvU") + "arrowDownPressed.e771f913.png" + "?" + Date.now();

},{"c6bde797ff6e20e5":"lgJ39"}],"ar8Q2":[function(require,module,exports) {
module.exports = require("39bcd54dc0a97ec7").getBundleURL("ksUvU") + "arrowRight.7517521a.png" + "?" + Date.now();

},{"39bcd54dc0a97ec7":"lgJ39"}],"5WqrE":[function(require,module,exports) {
module.exports = require("1317a5136b109d93").getBundleURL("ksUvU") + "arrowRightPressed.b3e0bc05.png" + "?" + Date.now();

},{"1317a5136b109d93":"lgJ39"}],"bg7FV":[function(require,module,exports) {
module.exports = require("e2a9a8d96c81c55f").getBundleURL("ksUvU") + "space.0a01e446.png" + "?" + Date.now();

},{"e2a9a8d96c81c55f":"lgJ39"}],"7wUJ3":[function(require,module,exports) {
module.exports = require("7cdbec49a81f4f86").getBundleURL("ksUvU") + "spacePressed.bec887cc.png" + "?" + Date.now();

},{"7cdbec49a81f4f86":"lgJ39"}],"lYe7Q":[function(require,module,exports) {
module.exports = require("4020917efff96794").getBundleURL("ksUvU") + "skillBox.1759bb35.png" + "?" + Date.now();

},{"4020917efff96794":"lgJ39"}],"fBYIe":[function(require,module,exports) {
module.exports = require("9c6fd0e9ea882b0b").getBundleURL("ksUvU") + "bronzeCoin.cf5ee227.png" + "?" + Date.now();

},{"9c6fd0e9ea882b0b":"lgJ39"}],"7dGd6":[function(require,module,exports) {
module.exports = require("8c370aab1cec85e5").getBundleURL("ksUvU") + "ironCoin.59405fbc.png" + "?" + Date.now();

},{"8c370aab1cec85e5":"lgJ39"}],"jM3Ph":[function(require,module,exports) {
module.exports = require("445418974f497506").getBundleURL("ksUvU") + "silverCoin.0455fb05.png" + "?" + Date.now();

},{"445418974f497506":"lgJ39"}],"gkuLV":[function(require,module,exports) {
module.exports = require("ac262221ef7f7f72").getBundleURL("ksUvU") + "goldCoin.bcb08b46.png" + "?" + Date.now();

},{"ac262221ef7f7f72":"lgJ39"}]},["fQFrJ","1Z4Rq"], "1Z4Rq", "parcelRequire1020")

//# sourceMappingURL=index.5d9dacde.js.map
