'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const AppIcon = core.registerPlugin('AppIcon', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.AppIconWeb()),
});

class AppIconWeb extends core.WebPlugin {
    isSupported() {
        throw this.unimplemented('isSupported not available on web');
    }
    getName() {
        throw this.unimplemented('getName not available on web');
    }
    change() {
        throw this.unimplemented('change not available on web');
    }
    reset() {
        throw this.unimplemented('reset not available on web');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AppIconWeb: AppIconWeb
});

exports.AppIcon = AppIcon;
//# sourceMappingURL=plugin.cjs.js.map
