// export const translations = new Map();

export class LocalizerDefault {
    constructor(element) {
        this.element = element;

        this.lang = this.element?.lang || document.documentElement?.lang || 'en-GB';
        this.dir = this.element?.dir || document.documentElement?.dir || 'ltr';
        this.currentLang = 'en-GB';

        this.setLanguage();
    }

    get languages() {
        return window.translations;
    }

    // Nastavenie aktuálneho jazyka
    setLanguage() {
        if (this.languages?.has(this.lang)) {
            this.currentLang = this.lang;
        } else {
            console.error(`Language "${this.lang}" not loaded.`);
        }
    }

    convertLangCode = (lang) => lang.replace("-", "_").replace(/_([a-z]{2})$/, (_, code) => `_${code.toUpperCase()}`);

    /**
     * Translates a given translation key based on the currently selected language.
     * @param {string} key The key representing the text to be translated.
     * @returns {string} The translated text if available; otherwise, returns the original key.
     */
    translate(key) {
        const langMap = this.languages?.get(this.currentLang);
        if (!langMap) return key;
        return langMap ? langMap[key] || key : key;
    }

    /**
     * Translates a key and then interpolates placeholders in the format {placeholder}.
     * The method first resolves the base text through {@link translate}. If the result is not a string,
     * it is returned unchanged. For string results, every placeholder wrapped in curly braces is matched,
     * the token name is trimmed, and the value is looked up in the `params` object.
     * When a matching param exists, its value is converted to a string and inserted into the translation.
     * Missing or `null` params are left in their original `{placeholder}` form so unresolved tokens stay visible.
     * @param {string} key The translation key.
     * @param {object} [params] Key-value map used for interpolation. Defaults to an empty object.
     * @returns {string} Localized string with interpolated params.
     * @example
     * // If the translation is:
     * // "personalSettings.settings.synchronization.checkbox.exportApprovedAbsence":
     * //   "Exportuj schválené absencie do {calendar}"
     * this.localizer.translateWithParams(
     *   'personalSettings.settings.synchronization.checkbox.exportApprovedAbsence',
     *   { calendar: 'Google kalendára' },
     * );
     * // Returns: 'Exportuj schválené absencie do Google kalendára'
     */
    translateWithParams(key, params = {}) {
        const translated = this.translate(key);

        if (typeof translated !== 'string') return translated;

        return translated.replace(/\{([^{}]+)\}/g, (match, token) => {
            const value = params[token.trim()];
            return value === undefined || value === null ? match : String(value);
        });
    }

    /**
     * Translates a key into a localized string based on the provided count and pluralization type.
     * @param {string} key The base translation key to be used for fetching the localized string.
     * @param {number} [count] The count value used to determine the pluralization form. Defaults to 0.
     * @param {string} [type] The type of pluralization to use, such as 'cardinal' or 'ordinal'. Defaults to 'cardinal'.
     * @returns {string} The translated string, adapted to the pluralization rules and count.
     */
    translatePlural(key, count = 0, type = 'cardinal') {
        const plural = new Intl.PluralRules(this.currentLang, { type });
        const k = `${key}.${plural.select(count)}`;
        const t = this.translate(k);
        if (t !== k) return t;
        return this.translate(`${key}.other`);
    }

    /**
     * Formats a number according to the specified locale and formatting options.
     * @param {number} number The numeric value to format.
     * @param {object} options An object containing formatting options for the number.
     * @returns {string} The formatted number as a string.
     */
    formatNumber(number, options) {
        return new Intl.NumberFormat(this.currentLang, options).format(number);
    }

    /**
     * Formats a given date based on the specified options and the current language setting.
     * @param {string|Date|number} date The date to format. Can be a Date object, a timestamp, or a date string.
     * @param {object} options The formatting options to customize the output, as supported by Intl.DateTimeFormat.
     * @returns {string} The formatted date string based on the specified options and current language.
     */
    formatDate(date, options) {
        return new Intl.DateTimeFormat(this.currentLang, options).format(new Date(date));
    }

    /**
     * Formats a relative time string based on a given language, value, unit, and formatting options.
     * @param {string} lang The language to use for formatting. Defaults to `this.currentLang` if not provided.
     * @param {number} value The numerical value to format, representing the time difference.
     * @param {string} [unit] The unit of time to use (e.g., "second", "minute", "hour", "day", "week", "month", "year").
     * @param {object} [options] An object containing formatting options, such as the style for the numeric representation.
     * @returns {string} The formatted relative time string in the specified language.
     */
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
