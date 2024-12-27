import { WebPlugin } from '@capacitor/core';
export class AppIconWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map