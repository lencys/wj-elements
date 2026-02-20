import { default as WJElement } from '../wje-element/element.js';
import { default as Icon } from '../wje-icon/icon.js';
import { default as Checkbox } from '../wje-checkbox/checkbox.js';
/**
 * `Option` is a custom web component that represents an option.
 * @summary This element represents an option.
 * @documentation https://elements.webjet.sk/components/option
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the option.
 * @slot start - The slot for the start of the option.
 * @slot - The default slot for the option.
 * @slot end - The slot for the end of the option.
 * // @fires wje-option:change - Event fired when the option is clicked.
 * @tag wje-option
 */
export default class Option extends WJElement {
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    /**
     * Dependencies of the Option component.
     */
    dependencies: {
        'wje-icon': typeof Icon;
        'wje-checkbox': typeof Checkbox;
    };
    /**
     * Sets the selected attribute of the option.
     * @param {boolean} value The value to set.
     */
    set selected(value: boolean);
    /**
     * Retrieves the 'selected' attribute status of the element.
     * @returns {boolean} Returns true if the 'selected' attribute is set on the element; otherwise, false.
     */
    get selected(): boolean;
    /**
     * Retrieves the value indicating whether the closest 'wje-select' element has a 'checkbox' attribute.
     * @returns {boolean} True if the closest 'wje-select' element has a 'checkbox' attribute; otherwise, false.
     */
    get checkbox(): boolean;
    /**
     * Determines whether the closest 'wje-select' element has the 'multiple' attribute.
     * @returns {boolean} Returns true if the 'wje-select' element has the 'multiple' attribute, otherwise false.
     */
    get multiple(): boolean;
    /**
     * Sets the value attribute of the option.
     * @param {string} value The value to set.
     */
    set value(value: string);
    get value(): string;
    /**
     * Sets the text content of the option.
     * @param {string} value The text to set.
     */
    set text(value: string);
    /**
     * This method is called whenever an observed attribute is added, removed, or changed.
     * @param {string} name The name of the attribute that was changed.
     * @param {*} old The previous value of the attribute before the change.
     * @param {*} newName The new value of the attribute after the change.
     * @returns {void} This method does not return a value.
     */
    attributeChangedCallback(name: string, old: any, newName: any): void;
    /**
     * Draws the component for the option.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    check: HTMLSlotElement;
    /**
     * Method executed after the drawing process is completed.
     * Sets up an event listener for 'click' events, linking them to the specified callback function.
     * @returns {void} Does not return a value.
     */
    afterDraw(): void;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Handles the click event on an option element and dispatches a custom event when triggered.
     * @param {Event} e The click event object that triggered the callback.
     * @returns {void} No return value.
     */
    optionClickCallback(e: Event): void;
    #private;
}
