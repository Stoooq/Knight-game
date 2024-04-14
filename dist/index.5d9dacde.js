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
canvas.height = 576;
const game = new (0, _gameJsDefault.default)({
    width: 2 * canvas.width,
    height: canvas.height
});
const update = ()=>{
    requestAnimationFrame(update);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    game.update();
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
var _idlePng = require("/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png");
var _idlePngDefault = parcelHelpers.interopDefault(_idlePng);
var _slimeSheetPng = require("/assets/Slime/slime-Sheet.png");
var _slimeSheetPngDefault = parcelHelpers.interopDefault(_slimeSheetPng);
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
            width: 63,
            height: 114,
            imageSrc: (0, _idlePngDefault.default),
            scale: 3,
            maxFrames: 10,
            offset: {
                x: 132,
                y: 125
            }
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
        this.enemy = new (0, _enemyJsDefault.default)({
            position: {
                x: 300,
                y: 200
            },
            velocity: {
                x: 0,
                y: 0
            },
            width: 75,
            height: 45,
            imageSrc: (0, _slimeSheetPngDefault.default),
            scale: 3,
            columns: 8,
            rows: 3,
            maxFrames: 8,
            offset: {
                x: 10,
                y: 26
            }
        });
    }
    update = ()=>{
        (0, _utilsJs.checkPlayerCollision)(this.player, this.collisionBlocks);
        (0, _utilsJs.checkPlayerCollision)(this.enemy, this.collisionBlocks);
        (0, _utilsJs.checkPlayerEnemyPosition)(this.player, this.enemy);
        this.background.update(this.player, this.width, this.collisionBlocks);
        this.player.update({
            keys: this.input.keys,
            gameWidth: this.width,
            gameHeight: this.height
        });
        this.enemy.update();
        this.collisionBlocks.forEach((block)=>{
            block.draw();
        });
    };
}
exports.default = Game;

},{"./Player.js":"jeEdv","./Input.js":"5Wqde","./Background.js":"jTKBN","./CollisionBlock.js":"hHCv3","../utils.js":"eYK4L","../data/collisions.js":"2ScF8","./Enemy.js":"cIxND","/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png":"dccWM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/assets/Slime/slime-Sheet.png":"fCydf"}],"jeEdv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _playerStateJs = require("./PlayerState.js");
var _spriteJs = require("./Sprite.js");
var _spriteJsDefault = parcelHelpers.interopDefault(_spriteJs);
var _06Png = require("/assets/Pixel UI pack 3/06.png");
var _06PngDefault = parcelHelpers.interopDefault(_06Png);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class Player extends (0, _spriteJsDefault.default) {
    constructor({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, maxFrames = 1, offset = {
        x: 0,
        y: 0
    }, attackBox = {
        offset: {},
        width: 100,
        height: 50
    } }){
        super({
            position,
            imageSrc,
            scale,
            columns,
            maxFrames,
            offset
        });
        //Player properties
        // this.position = position
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
            new (0, _playerStateJs.Attack)(this)
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
        //Player health bar
        this.healthBar = new (0, _spriteJsDefault.default)({
            position: {
                x: this.position.x,
                y: this.position.y
            },
            imageSrc: (0, _06PngDefault.default),
            scale: 2,
            columns: 5,
            rows: 15,
            row: 3,
            maxFrames: 1,
            offset: {
                x: 10,
                y: 40
            }
        });
    }
    update = ({ keys, gameWidth, gameHeight })=>{
        this.state.input(keys);
        this.ddraw();
        this.draw();
        this.animateFrames();
        this.moving(gameWidth);
        this.healthBar.draw();
        this.healthBar.animateFrames();
        this.healthBar.position.x = this.position.x;
        this.healthBar.position.y = this.position.y;
        if (this.attacking) c.fillStyle = "red";
        this.attackBox.position.x = this.position.x;
        this.attackBox.position.y = this.position.y;
    };
    ddraw = ()=>{
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    setState = (state)=>{
        this.previousState = this.state;
        this.state = this.states[state];
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
        // if (this.position.y + this.height + this.velocity.y >= canvas.height) {
        //     this.velocity.y = 0
        //     this.onGround = true
        // } else {
        // }
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
    };
    attack = ()=>{
        this.attacking = true;
        setTimeout(()=>{
            this.attacking = false;
        }, 100);
    };
}
exports.default = Player;

},{"./PlayerState.js":"ep7HD","./Sprite.js":"9lzH1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/assets/Pixel UI pack 3/06.png":"kJwYD"}],"ep7HD":[function(require,module,exports) {
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
parcelHelpers.export(exports, "Attack", ()=>Attack);
var _idlePng = require("/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png");
var _idlePngDefault = parcelHelpers.interopDefault(_idlePng);
var _runPng = require("/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run.png");
var _runPngDefault = parcelHelpers.interopDefault(_runPng);
var _jumpPng = require("/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Jump.png");
var _jumpPngDefault = parcelHelpers.interopDefault(_jumpPng);
var _fallPng = require("/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Fall.png");
var _fallPngDefault = parcelHelpers.interopDefault(_fallPng);
var _crouchPng = require("/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Crouch.png");
var _crouchPngDefault = parcelHelpers.interopDefault(_crouchPng);
var _crouchWalkPng = require("/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_CrouchWalk.png");
var _crouchWalkPngDefault = parcelHelpers.interopDefault(_crouchWalkPng);
var _attackPng = require("/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack.png");
var _attackPngDefault = parcelHelpers.interopDefault(_attackPng);
const SPRITES = {
    IDLE: {
        imageSrc: (0, _idlePngDefault.default),
        columns: 10,
        maxFrames: 10
    },
    RUNNING: {
        left: {
            imageSrc: (0, _runPngDefault.default),
            columns: 10,
            maxFrames: 10
        },
        right: {
            imageSrc: (0, _runPngDefault.default),
            columns: 10,
            maxFrames: 10
        }
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
    ATTACK: {
        imageSrc: (0, _attackPngDefault.default),
        columns: 4,
        maxFrames: 4
    }
};
const STATES = {
    IDLE: 0,
    RUNNING: 1,
    JUMP: 2,
    FALL: 3,
    CROUCH: 4,
    CROUCHWALK: 5,
    ATTACK: 6
};
class State {
    constructor({ player, state }){
        this.player = player;
        this.state = state;
    }
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
        }
        if (keys.includes("ArrowRight")) this.player.setState(STATES.RUNNING);
        if (keys.includes("ArrowLeft")) this.player.setState(STATES.RUNNING);
        if (keys.includes("ArrowUp") && this.player.onGround) this.player.setState(STATES.JUMP);
        if (keys.includes("ArrowDown")) this.player.setState(STATES.CROUCH);
        if (keys.includes("Space")) this.player.setState(STATES.ATTACK);
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
            this.player.setSprite(SPRITES.RUNNING.right);
            this.player.direction = 1;
            this.player.velocity.x = 5 * this.player.direction;
        }
        if (keys.includes("ArrowLeft")) {
            this.player.setState(STATES.RUNNING);
            this.player.setSprite(SPRITES.RUNNING.left);
            this.player.direction = -1;
            this.player.velocity.x = 5 * this.player.direction;
        }
        if (keys.length === 0) this.player.setState(STATES.IDLE);
        if (keys.includes("ArrowUp") && this.player.onGround) this.player.setState(STATES.JUMP);
    };
}
class Jump extends State {
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
        if (keys.includes("ArrowRight")) this.player.velocity.x = 5;
        if (keys.includes("ArrowLeft")) this.player.velocity.x = -5;
        if (this.player.onGround) this.player.setState(STATES.IDLE);
    };
}
class Fall extends State {
    constructor(player){
        super({
            player,
            state: "FALL"
        });
    }
    input = (keys)=>{
        if (this.player.velocity.y > 0) {
            this.player.setState(STATES.FALL);
            this.player.setSprite(SPRITES.FALL);
        }
        if (this.player.onGround) this.player.setState(STATES.IDLE);
        if (keys.includes("ArrowRight")) this.player.velocity.x = 5;
        if (keys.includes("ArrowLeft")) this.player.velocity.x = -5;
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
class Attack extends State {
    constructor(player){
        super({
            player,
            state: "ATTACK"
        });
    }
    input = (keys)=>{
        if (keys.includes("Space")) {
            this.player.setState(STATES.ATTACK);
            this.player.setSprite(SPRITES.ATTACK);
            this.player.attack();
        }
        if (keys.length === 0 && this.player.framesCurrent >= this.player.maxFrames - 1) this.player.setState(STATES.IDLE);
    };
}

},{"/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png":"dccWM","/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run.png":"hghj5","/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Jump.png":"2ILgA","/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Fall.png":"l5Zdd","/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Crouch.png":"1Md0l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_CrouchWalk.png":"4kqym","/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack.png":"c6fYk"}],"dccWM":[function(require,module,exports) {
module.exports = require("282d3a84d149fa73").getBundleURL("ksUvU") + "_Idle.6e3920d1.png" + "?" + Date.now();

},{"282d3a84d149fa73":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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

},{}],"hghj5":[function(require,module,exports) {
module.exports = require("9af79e101605dd60").getBundleURL("ksUvU") + "_Run.e13df72f.png" + "?" + Date.now();

},{"9af79e101605dd60":"lgJ39"}],"2ILgA":[function(require,module,exports) {
module.exports = require("5204f82c2660f03e").getBundleURL("ksUvU") + "_Jump.84b817a8.png" + "?" + Date.now();

},{"5204f82c2660f03e":"lgJ39"}],"l5Zdd":[function(require,module,exports) {
module.exports = require("10e4f7c4b6b0ce64").getBundleURL("ksUvU") + "_Fall.9f6740d5.png" + "?" + Date.now();

},{"10e4f7c4b6b0ce64":"lgJ39"}],"1Md0l":[function(require,module,exports) {
module.exports = require("570894e3ac627858").getBundleURL("ksUvU") + "_Crouch.1bbe434d.png" + "?" + Date.now();

},{"570894e3ac627858":"lgJ39"}],"gkKU3":[function(require,module,exports) {
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

},{}],"4kqym":[function(require,module,exports) {
module.exports = require("c3d1f90a22c96b1e").getBundleURL("ksUvU") + "_CrouchWalk.58db080c.png" + "?" + Date.now();

},{"c3d1f90a22c96b1e":"lgJ39"}],"c6fYk":[function(require,module,exports) {
module.exports = require("5d4123f7f7e7ac43").getBundleURL("ksUvU") + "_Attack.013f1b57.png" + "?" + Date.now();

},{"5d4123f7f7e7ac43":"lgJ39"}],"9lzH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class Sprite {
    constructor({ position, imageSrc, scale = 1, columns = 1, rows = 1, row = 0, maxFrames = 1, imageWidth, offset = {
        x: 0,
        y: 0
    }, framesCurrent = 0 }){
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.columns = columns;
        this.rows = rows;
        this.row = row;
        this.maxFrames = maxFrames;
        this.imageWidth = imageWidth || this.image.width;
        this.framesCurrent = framesCurrent;
        this.framesElapsed = 0;
        this.framesHold = 5;
        this.offset = offset;
    }
    update = ()=>{
        this.draw();
        this.animateFrames();
    };
    draw = ()=>{
        c.drawImage(this.image, this.framesCurrent * (this.image.width / this.columns), this.row * (this.image.height / this.rows), this.image.width / this.columns, this.image.height / this.rows, this.position.x - this.offset.x, this.position.y - this.offset.y, this.image.width / this.columns * this.scale, this.image.height / this.rows * this.scale);
    };
    animateFrames = ()=>{
        this.framesElapsed++;
        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.maxFrames - 1) this.framesCurrent++;
            else this.framesCurrent = 0;
        }
    };
}
exports.default = Sprite;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kJwYD":[function(require,module,exports) {
module.exports = require("477a895ab0eeab94").getBundleURL("ksUvU") + "06.ccb90c00.png" + "?" + Date.now();

},{"477a895ab0eeab94":"lgJ39"}],"5Wqde":[function(require,module,exports) {
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
var _newmapPng = require("/assets/newmap.png");
var _newmapPngDefault = parcelHelpers.interopDefault(_newmapPng);
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
        this.image4.src = (0, _newmapPngDefault.default);
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
        this.draw(player.position.x, player.state, player.fictionPosition, player.width, gameWidth, collisionBlocks, player.velocity.x);
    };
    draw = (pPosX, pState, pFicPosX, pWidth, gameWidth, collisionBlocks, pVelX)=>{
        // const gameImages = Math.round(gameWidth / canvas.width)
        if (pPosX === 0.8 * canvas.width - pWidth && (pState.state !== "IDLE" || pState.state !== "CROUCH")) {
            this.positionX1 = -pPosX + 0.8 * canvas.width - pWidth - 0.2 * pFicPosX;
            this.positionX2 = -pPosX + 0.8 * canvas.width - pWidth - 0.5 * pFicPosX;
            this.positionX3 = -pPosX + 0.8 * canvas.width - pWidth - 0.8 * pFicPosX;
            this.positionX4 = -pPosX + 0.8 * canvas.width - pWidth - pFicPosX;
            collisionBlocks.forEach((block)=>{
                block.position.x = block.position.x - pVelX;
            });
        }
        if (pPosX === 0.2 * canvas.width && (pState.state !== "IDLE" || pState.state !== "CROUCH")) {
            this.positionX1 = -pPosX + 0.2 * canvas.width - 0.2 * pFicPosX;
            this.positionX2 = -pPosX + 0.2 * canvas.width - 0.5 * pFicPosX;
            this.positionX3 = -pPosX + 0.2 * canvas.width - 0.8 * pFicPosX;
            this.positionX4 = -pPosX + 0.2 * canvas.width - pFicPosX;
            collisionBlocks.forEach((block)=>{
                block.position.x = block.position.x - pVelX;
            });
        }
        // let cos = this.positionX3
        // for (let i = 1; i < gameImages; i++) {
        //     if (pFicPosX > i * canvas.width) {
        //         cos += i * canvas.width
        //     }
        // }
        c.drawImage(this.image1, this.positionX1, 0, canvas.width, canvas.height);
        c.drawImage(this.image1, this.positionX1 + canvas.width, 0, canvas.width, canvas.height);
        c.drawImage(this.image2, this.positionX2, 0, canvas.width, canvas.height);
        c.drawImage(this.image2, this.positionX2 + canvas.width, 0, canvas.width, canvas.height);
        c.drawImage(this.image3, this.positionX3, 0, canvas.width, canvas.height);
        c.drawImage(this.image3, this.positionX3 + canvas.width, 0, canvas.width, canvas.height);
        c.drawImage(this.image4, this.positionX4, 0, 3072, 576);
    };
}
exports.default = Background;

},{"/assets/oak_woods_v1.0/background/background_layer_1.png":"3BmuG","/assets/oak_woods_v1.0/background/background_layer_2.png":"38Fl3","/assets/oak_woods_v1.0/background/background_layer_3.png":"6jIh7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","/assets/newmap.png":"4PJv6"}],"3BmuG":[function(require,module,exports) {
module.exports = require("a20d70d47135f1fe").getBundleURL("ksUvU") + "background_layer_1.ecfd8cc7.png" + "?" + Date.now();

},{"a20d70d47135f1fe":"lgJ39"}],"38Fl3":[function(require,module,exports) {
module.exports = require("9d60df3aeb5e8e6f").getBundleURL("ksUvU") + "background_layer_2.de3ab38c.png" + "?" + Date.now();

},{"9d60df3aeb5e8e6f":"lgJ39"}],"6jIh7":[function(require,module,exports) {
module.exports = require("7290886cc7596598").getBundleURL("ksUvU") + "background_layer_3.7bd6e3ce.png" + "?" + Date.now();

},{"7290886cc7596598":"lgJ39"}],"4PJv6":[function(require,module,exports) {
module.exports = require("add67498e4348923").getBundleURL("ksUvU") + "newmap.7a6dc079.png" + "?" + Date.now();

},{"add67498e4348923":"lgJ39"}],"hHCv3":[function(require,module,exports) {
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
const arrayParse2D = (array)=>{
    const rows = [];
    for(let i = 0; i < array.length; i += 48)rows.push(array.slice(i, i + 48));
    return rows;
};
const checkPlayerCollision = (player, collisionBlocks)=>{
    collisionBlocks.forEach((block)=>{
        // if (player.position.x < block.position.x + block.width &&
        //     player.position.x + player.width > block.position.x &&
        //     player.position.y < block.position.y + block.height &&
        //     player.height + player.position.y > block.position.y) {
        //         console.log("cos");
        // }
        //bottom
        if (player.position.y + player.height + player.velocity.y >= block.position.y && player.position.y < block.position.y && player.position.x < block.position.x + block.width && player.position.x + player.width > block.position.x) {
            player.velocity.y = 0;
            player.onGround = true;
        }
        //left && right
        if (player.position.x + player.velocity.x < block.position.x + block.width && player.position.x + player.width + player.velocity.x > block.position.x && player.position.y < block.position.y + block.height && player.height + player.position.y > block.position.y) {
            player.velocity.x = 0;
            player.stopped = true // nie zatrzymuje sie do konca
            ;
        }
        //up
        if (player.position.y + player.velocity.y < block.position.y + block.height && player.position.y + player.height > block.position.y + block.height && player.position.x < block.position.x + block.width && player.position.x + player.width > block.position.x) {
            if (-player.velocity.y * 0.2 > 1) player.velocity.y = -player.velocity.y * 0.2;
            else player.velocity.y = 1;
            player.onGround = false;
        }
    });
};
const checkPlayerEnemyPosition = (player, enemy)=>{
    if (player.position.x + player.width * 0.6 < enemy.position.x) enemy.velocity.x = -1.5;
    if (player.position.x > enemy.position.x + enemy.width * 0.6) enemy.velocity.x = 1.5;
    if (player.position.y + player.height < enemy.position.y && player.position.x < enemy.position.x + enemy.width * 0.6 && player.position.x + player.width * 0.6 > enemy.position.x && enemy.onGround) {
        enemy.onGround = false;
        enemy.velocity.y = -10;
    }
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
    0,
    0,
    0,
    0,
    0,
    0,
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
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
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
var _spriteJs = require("./Sprite.js");
var _spriteJsDefault = parcelHelpers.interopDefault(_spriteJs);
var _06Png = require("/assets/Pixel UI pack 3/06.png");
var _06PngDefault = parcelHelpers.interopDefault(_06Png);
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
class Enemy extends (0, _spriteJsDefault.default) {
    constructor({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, rows = 1, row = 0, maxFrames = 1, offset = {
        x: 0,
        y: 0
    } }){
        super({
            position,
            imageSrc,
            scale,
            columns,
            rows,
            row,
            maxFrames,
            offset
        });
        // this.position = position
        this.velocity = velocity;
        this.width = width;
        this.height = height;
        this.gravity = 0.5;
        this.onGround = false;
        //Enemy health bar
        this.healthBar = new (0, _spriteJsDefault.default)({
            position: {
                x: this.position.x,
                y: this.position.y
            },
            imageSrc: (0, _06PngDefault.default),
            scale: 2,
            columns: 5,
            rows: 15,
            row: 1,
            maxFrames: 1,
            offset: {
                x: 10,
                y: 40
            }
        });
    }
    update = ()=>{
        this.draw();
        this.animateFrames();
        this.moving();
        this.healthBar.draw();
        this.healthBar.animateFrames();
        this.healthBar.position.x = this.position.x;
        this.healthBar.position.y = this.position.y;
    };
    // draw = () => {
    //     c.fillStyle = 'green'
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // }
    moving = ()=>{
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;
    };
}
exports.default = Enemy;

},{"./Sprite.js":"9lzH1","/assets/Pixel UI pack 3/06.png":"kJwYD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCydf":[function(require,module,exports) {
module.exports = require("d2b6e54441214b12").getBundleURL("ksUvU") + "slime-Sheet.21e39b52.png" + "?" + Date.now();

},{"d2b6e54441214b12":"lgJ39"}]},["fQFrJ","1Z4Rq"], "1Z4Rq", "parcelRequire1020")

//# sourceMappingURL=index.5d9dacde.js.map
