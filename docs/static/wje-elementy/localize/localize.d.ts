export function registerTranslation(...translation: any[]): void;
export class LocalizerDefault {
    constructor(element: any);
    element: any;
    lang: any;
    dir: any;
    currentLang: string;
    get languages(): any;
    setLanguage(): void;
    convertLangCode: (lang: any) => any;
    /**
     * Translates a given translation key based on the currently selected language.
     * @param {string} key The key representing the text to be translated.
     * @returns {string} The translated text if available; otherwise, returns the original key.
     */
    translate(key: string): string;
    /**
     * Translates a key into a localized string based on the provided count and pluralization type.
     * @param {string} key The base translation key to be used for fetching the localized string.
     * @param {number} [count=0] The count value used to determine the pluralization form.
     * @param {string} [type='cardinal'] The type of pluralization to use, such as 'cardinal' or 'ordinal'.
     * @returns {string} The translated string, adapted to the pluralization rules and count.
     */
    translatePlural(key: string, count?: number, type?: string): string;
    /**
     * Formats a number according to the specified locale and formatting options.
     * @param {number} number The numeric value to format.
     * @param {object} options An object containing formatting options for the number.
     * @returns {string} The formatted number as a string.
     */
    formatNumber(number: number, options: object): string;
    /**
     * Formats a given date based on the specified options and the current language setting.
     * @param {string|Date|number} date The date to format. Can be a Date object, a timestamp, or a date string.
     * @param {object} options The formatting options to customize the output, as supported by Intl.DateTimeFormat.
     * @returns {string} The formatted date string based on the specified options and current language.
     */
    formatDate(date: string | Date | number, options: object): string;
    /**
     * Formats a relative time string based on a given language, value, unit, and formatting options.
     * @param {string} lang The language to use for formatting. Defaults to `this.currentLang` if not provided.
     * @param {number} value The numerical value to format, representing the time difference.
     * @param {string} [unit] The unit of time to use (e.g., "second", "minute", "hour", "day", "week", "month", "year").
     * @param {object} [options] An object containing formatting options, such as the style for the numeric representation.
     * @returns {string} The formatted relative time string in the specified language.
     */
    relativeTime(lang: string, value?: number, unit?: string, options?: object): string;
}
