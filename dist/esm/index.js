import { registerPlugin } from '@capacitor/core';
const AppIcon = registerPlugin('AppIcon', {
    web: () => import('./web').then(m => new m.AppIconWeb()),
});
export * from './definitions';
export { AppIcon };
//# sourceMappingURL=index.js.map