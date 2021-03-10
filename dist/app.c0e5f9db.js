// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../assets/img/Card-Icon/1.svg":[function(require,module,exports) {
module.exports = "/1.6fd11c61.svg";
},{}],"../assets/img/Card-Icon/2.svg":[function(require,module,exports) {
module.exports = "/2.d3a61f68.svg";
},{}],"../assets/img/Card-Icon/3.svg":[function(require,module,exports) {
module.exports = "/3.f56faa3e.svg";
},{}],"../assets/img/Card-Icon/*.svg":[function(require,module,exports) {
module.exports = {
  "1": require("./1.svg"),
  "2": require("./2.svg"),
  "3": require("./3.svg")
};
},{"./1.svg":"../assets/img/Card-Icon/1.svg","./2.svg":"../assets/img/Card-Icon/2.svg","./3.svg":"../assets/img/Card-Icon/3.svg"}],"../assets/img/Hero-img-1.jpg":[function(require,module,exports) {
module.exports = "/Hero-img-1.640195cb.jpg";
},{}],"../assets/img/Hero-img-2.jpg":[function(require,module,exports) {
module.exports = "/Hero-img-2.9832b7b8.jpg";
},{}],"../assets/img/Hero-img-3.jpg":[function(require,module,exports) {
module.exports = "/Hero-img-3.461daa8f.jpg";
},{}],"../assets/img/Mobile-Hero-img-01.jpg":[function(require,module,exports) {
module.exports = "/Mobile-Hero-img-01.452f9ad3.jpg";
},{}],"../assets/img/Mobile-Hero-img-02.jpg":[function(require,module,exports) {
module.exports = "/Mobile-Hero-img-02.8ea32ab8.jpg";
},{}],"../assets/img/Mobile-Hero-img-03.jpg":[function(require,module,exports) {
module.exports = "/Mobile-Hero-img-03.9494a2a2.jpg";
},{}],"../assets/img/*.jpg":[function(require,module,exports) {
module.exports = {
  "Hero-img-1": require("./Hero-img-1.jpg"),
  "Hero-img-2": require("./Hero-img-2.jpg"),
  "Hero-img-3": require("./Hero-img-3.jpg"),
  "Mobile-Hero-img-01": require("./Mobile-Hero-img-01.jpg"),
  "Mobile-Hero-img-02": require("./Mobile-Hero-img-02.jpg"),
  "Mobile-Hero-img-03": require("./Mobile-Hero-img-03.jpg")
};
},{"./Hero-img-1.jpg":"../assets/img/Hero-img-1.jpg","./Hero-img-2.jpg":"../assets/img/Hero-img-2.jpg","./Hero-img-3.jpg":"../assets/img/Hero-img-3.jpg","./Mobile-Hero-img-01.jpg":"../assets/img/Mobile-Hero-img-01.jpg","./Mobile-Hero-img-02.jpg":"../assets/img/Mobile-Hero-img-02.jpg","./Mobile-Hero-img-03.jpg":"../assets/img/Mobile-Hero-img-03.jpg"}],"app/index.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../../assets/img/Card-Icon/*.svg"));

var _2 = _interopRequireDefault(require("../../assets/img/*.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Data set */
var cards = [{
  id: '01',
  title: 'Misión',
  description: 'El veganismo no es ninguna dieta. Es una actitud de rebeldía, una postura ética basada en el profundo respeto por los animales y nuestro entorno. Ese respeto pasa por no comerlos ni usarlos para vestir o esclavizarlos para nuestro disfrute o enriquecimiento. Es un espacio en el que se da voz a quienes no la tienen.',
  img: _2.default['Hero-img-1'],
  img_mobile: _2.default['Mobile-Hero-img-01'],
  cardlogo: _.default[1]
}, {
  id: '02',
  title: 'Explora',
  description: 'Planeta Vegano es una tienda vegana y online fundada desde 2009. Somos una alternativa que ofrece e incentiva el uso de productos veganos libres de crueldad y de explotación animal. Todo con el ánimo de promover el veganismo y ayudar a quienes están interesados en adoptar esta alternativa de vida.',
  img: _2.default['Hero-img-2'],
  img_mobile: _2.default['Mobile-Hero-img-02'],
  cardlogo: _.default[2]
}, {
  id: '03',
  title: 'Productos',
  description: 'Somos Veggie Room, un pequeño comercio en el centro de Madrid donde podéis comprar productos veganos (cien por cien vegetales) y libres de explotación. Sensibilizados y comprometidos con la defensa de los derechos humanos y el medio ambiente, y por supuesto, de los derechos de los animales.',
  img: _2.default['Hero-img-3'],
  img_mobile: _2.default['Mobile-Hero-img-03'],
  cardlogo: _.default[3]
}];
var index = 0;
var selectedCard;
var isFirstLoad = true;
var sliderDirection = '';
var lastBgImgForBackUp = '01';
var isMobileView = false;
document.getElementById('arrow-right').addEventListener('click', function () {
  sliderDirection = 'left';
  populateTemplateWithNewCard('sum');
});
document.getElementById('arrow-left').addEventListener('click', function () {
  sliderDirection = 'right';
  populateTemplateWithNewCard('subtract');
});
window.addEventListener('resize', function () {
  checkClientScreenWidth();
}); // dynamic content

var content_id = document.getElementById('content-id');
var content_logo = document.getElementById('content-logo');
var content_title = document.getElementById('content-title');
var content_paragraph = document.getElementById('content-paragraph');
var hero_img = document.getElementById('hero-img');
var hero_img_backup = document.getElementById('hero-img-backup'); // static content - just for retriggering animations

var heading_divider = document.getElementById('heading-divider');
var regular_divider = document.getElementById('regular-divider');
var content_btn = document.getElementById('content-btn');

var populateTemplateWithNewCard = function populateTemplateWithNewCard(action) {
  if (action === 'sum') index++;
  if (action === 'subtract') index--;
  if (index > 2) index = 0;
  if (index < 0) index = 2;
  selectedCard = cards[index];
  retriggerAnimationsAndPopulateContent(content_id, "landing-description-content-heading-id", "<h1>".concat(selectedCard.id, "</h1>"));
  retriggerAnimationsAndPopulateContent(content_title, "landing-description-content-title", "<h1>".concat(selectedCard.title, "</h1>"));
  retriggerAnimationsAndPopulateContent(content_paragraph, "landing-description-content-paragraph", "<p>".concat(selectedCard.description, "</p>"));
  retriggerAnimationsAndPopulateContent(content_logo, "landing-description-content-heading-logo", "<img src=\"".concat(selectedCard.cardlogo, "\" />"));
  retriggerAnimationsAndPopulateContent(heading_divider, "landing-description-content-heading-sm-divider");
  retriggerAnimationsAndPopulateContent(regular_divider, "landing-description-content-divider");
  retriggerAnimationsAndPopulateContent(content_btn, "landing-description-content-btn");
  hero_img.style.backgroundImage = "url(".concat(isMobileView ? selectedCard.img_mobile : selectedCard.img, ")");
  hero_img_backup.classList.remove('bg-01', 'bg-02', 'bg-03', 'remove-slider-trans-right', 'remove-slider-trans-left');
  void hero_img_backup.offsetWidth;

  if (!isFirstLoad) {
    hero_img_backup.classList.add("bg-".concat(lastBgImgForBackUp), "remove-slider-trans-".concat(sliderDirection === 'left' ? 'right' : 'left'));
    hero_img.classList.remove('present-slider-trans-right', 'present-slider-trans-left');
    void hero_img.offsetWidth;
    hero_img.classList.add("present-slider-trans-".concat(sliderDirection));

    if (sliderDirection === 'right') {
      hero_img.style.marginLeft = '-15%';
    } else {
      hero_img.style.marginLeft = '14.99%';
    }
  }

  lastBgImgForBackUp = selectedCard.id;
};

var retriggerAnimationsAndPopulateContent = function retriggerAnimationsAndPopulateContent(el, className, htmlEl) {
  el.classList.remove(className);
  void content_id.offsetWidth;
  el.classList.add(className);

  if (htmlEl) {
    el.innerHTML = htmlEl;
  }
};

var initApp = function initApp() {
  var pageWrapper = document.getElementById('wrapper');
  pageWrapper.style.display = 'none';
  checkClientScreenWidth();
  setTimeout(function () {
    pageWrapper.style.display = 'flex';
    populateTemplateWithNewCard();
    isFirstLoad = false;
  }, 1600);
};

var checkClientScreenWidth = function checkClientScreenWidth() {
  if (document.documentElement.clientWidth <= 800) {
    isMobileView = true;
  } else {
    isMobileView = false;
  }
};

initApp();
},{"../../assets/img/Card-Icon/*.svg":"../assets/img/Card-Icon/*.svg","../../assets/img/*.jpg":"../assets/img/*.jpg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51000" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app/index.js"], null)
//# sourceMappingURL=/app.c0e5f9db.js.map