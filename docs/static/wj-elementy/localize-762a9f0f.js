const n = /* @__PURE__ */ new Map();
class s {
  constructor(t) {
    this.element = t, this.languages = n, this.lang = this.element.lang || document.documentElement.lang || "en", this.dir = this.element.dir || document.documentElement.dir || "ltr", this.setLanguage();
  }
  // Nastavenie aktuálneho jazyka
  setLanguage() {
    this.languages.has(this.lang) ? this.currentLang = this.lang : console.error(`Language "${this.lang}" not loaded.`);
  }
  // Vyhľadávanie prekladu podľa kľúča
  translate(t) {
    const e = this.languages.get(this.currentLang);
    return e && e[t] || t;
  }
  // Formátovanie čísla podľa aktuálneho jazyka
  formatNumber(t, e) {
    return new Intl.NumberFormat(this.currentLang, e).format(t);
  }
  // Formátovanie dátumu podľa aktuálneho jazyka
  formatDate(t) {
    return new Intl.DateTimeFormat(this.currentLang).format(new Date(t));
  }
  relativeTime(t = 0, e, r = { numeric: "auto" }) {
    return new Intl.RelativeTimeFormat(this.currentLang, r).format(t, e);
  }
}
function i(...a) {
  a.map((t) => {
    const e = t.code.toLowerCase();
    n.has(e) ? n.set(e, { ...n.get(e), ...t }) : n.set(e, t);
  });
}
class o extends s {
  constructor(t) {
    super(t);
  }
  static registerTranslation(...t) {
    i(...t);
  }
}
export {
  o as L
};
