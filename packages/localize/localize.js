// export const translations = new Map();

export class LocalizerDefault {
  constructor(element) {
    this.element = element;

    this.lang = this.element.lang || document.documentElement.lang || 'sk';
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

  translatePlural(key, count = 0, type = "cardinal") {
    const plural = new Intl.PluralRules(this.lang, { type: type });

    if(count != undefined)
      key += "." + plural.select(count);

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

  relativeTime(value = 0, unit, options = { numeric: "auto" }) {
    return new Intl.RelativeTimeFormat(this.currentLang, options).format(value, unit);
  }
}

export function registerTranslation(...translation) {
  translation.map(t => {
    const code = t.code.toLowerCase();
    if (translations.has(code)) {
      translations.set(code, { ...translations.get(code), ...t });
    } else {
      translations.set(code, t);
    }
  });
}