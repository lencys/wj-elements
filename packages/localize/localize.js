// export const translations = new Map();

export class LocalizerDefault {
  constructor(element) {
    this.element = element;

    this.lang = this.element.lang || document.documentElement.lang || 'en-gb';
    this.dir = this.element.dir || document.documentElement.dir || 'ltr';

    this.setLanguage();
  }

  get languages() {
    return window.translations;
  }

  // Nastavenie aktuálneho jazyka
  setLanguage() {
    if (this.languages.has(this.lang)) {
      this.currentLang = this.lang;
    } else {
      console.error(`Language "${this.lang}" not loaded.`);
    }
  }

  // Vyhľadávanie prekladu podľa kľúča
  translate(key) {
    const langMap = this.languages.get(this.currentLang);
    return langMap ? langMap[key] || key : key;
  }

  // Vyhľadávanie prekladu podľa kľúča a typu čísla
  translatePlural(key, count = 0, type = 'cardinal') {
    const plural = new Intl.PluralRules(this.lang, { type: type });

    if (count !== undefined) key += '.' + plural.select(count);

    return this.translate(key);
  }

  // Formátovanie čísla podľa aktuálneho jazyka
  formatNumber(number, options) {
    return new Intl.NumberFormat(this.currentLang, options).format(number);
  }

  // Formátovanie dátumu podľa aktuálneho jazyka
  formatDate(date) {
    return new Intl.DateTimeFormat(this.currentLang).format(new Date(date));
  }

  relativeTime(lang, value = 0, unit = 'day', options = { numeric: 'auto' }) {
    lang = lang || this.currentLang;
    return new Intl.RelativeTimeFormat(lang, options).format(value, unit);
  }
}

export function registerTranslation(...translation) {
  translation.forEach((t) => {
    if (!t.code) {
      console.error("Translation object is missing 'code' property:", t);
      return;
    }

    const code = t.code.toLowerCase();
    if (window.translations.has(code)) {
      window.translations.set(code, { ...window.translations.get(code), ...t });
    } else {
      window.translations.set(code, t);
    }
  });
}
