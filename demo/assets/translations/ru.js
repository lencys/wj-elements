import { serverPromise } from '../js/mirage-config.js';

serverPromise.then((master) => {
  const ru = {
    code: 'ru',
    name: 'Russian',
    dir: 'ltr',

    welcome: 'Dobro pozhalovat',
    'wj.file.upload.button': 'TRALALA',
  };

  import('/dist/wje-master.js').then((master) => {
    master.Localizer.registerTranslation(ru);
  });
});
