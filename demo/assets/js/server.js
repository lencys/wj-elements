import { serverPromise } from './mirage-config.js';

if (import.meta.env.DEV) {
  serverPromise.then(() => {
    console.log('Development mode: Mirage server started.');
    import('/dist/wje-master.js').then(() => {
      console.log('Development mode: wje-master.js loaded.');
    });
  });
}
