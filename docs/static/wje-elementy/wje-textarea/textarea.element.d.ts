import { FormAssociatedElement } from '../internals/form-associated-element.js';
/**
 * `Textarea` is a custom web component that represents a textarea input.
 * @summary This element represents a textarea input.
 * @documentation https://elements.webjet.sk/components/textarea
 * @status stable
 * @augments {FormAssociatedElement}
 * @csspart native - The native textarea wrapper.
 * @csspart input - The textarea input.
 * @csspart wrapper - The textarea wrapper.
 * @cssproperty [--wje-textarea-font-family=var(--wje-font-family)] - Specifies the font family used for the textarea. Accepts any valid CSS font-family value.
 * @cssproperty [--wje-textarea-background-color=var(--wje-background)] - Sets the background color of the textarea. Accepts any valid CSS color value.
 * @cssproperty [--wje-textarea-color=var(--wje-color)] - Defines the text color within the textarea. Accepts any valid CSS color value.
 * @cssproperty [--wje-textarea-color-invalid=var(--wje-color-danger)] - Changes the text color of the textarea when it is invalid. Useful for highlighting validation errors.
 * @cssproperty [--wje-textarea-border-width=1px] - Specifies the width of the textarea's border. Accepts any valid CSS length unit.
 * @cssproperty [--wje-textarea-border-style=solid] - Sets the style of the textarea's border. Accepts standard CSS border styles such as `solid`, `dashed`, or `dotted`.
 * @cssproperty [--wje-textarea-border-color=var(--wje-border-color)] - Defines the border color of the textarea. Accepts any valid CSS color value.
 * @cssproperty [--wje-textarea-border-color-focus=var(--wje-color-primary)] - Specifies the border color of the textarea when it is focused. Enhances the user experience by providing visual feedback.
 * @cssproperty [--wje-textarea-border-radius=4px] - Determines the border radius of the textarea, defining how rounded its corners are. Accepts any valid CSS length unit.
 * @cssproperty [--wje-textarea-margin-bottom=.5rem] - Sets the bottom margin of the textarea. Ensures spacing between the textarea and other elements.
 * @cssproperty [--wje-textarea-line-height=20px] - Specifies the line height of the text within the textarea. Helps control the vertical spacing of the text.
 * @cssproperty [--wje-textarea-padding=0.5rem] - Defines the padding inside the textarea. Controls the spacing between the content and the border.
 * @tag wje-textarea
 */
export default class Textarea extends FormAssociatedElement {
    static _instanceId: number;
    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet(): CSSStyleSheet;
    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes(): Array<string>;
    pristine: boolean;
    _instanceId: number;
    /**
     * Setter for the value attribute.
     * @param {string} value The value to set.
     */
    set value(value: string);
    /**
     * Getter for the value attribute.
     * @returns {string} The value of the attribute.
     */
    get value(): string;
    _value: any;
    /**
     * Sets the label attribute of the element.
     * @param {string} value The value to set as the label attribute.
     */
    set label(value: string);
    /**
     * Retrieves the value of the 'label' attribute if it exists.
     * If the 'label' attribute is not set, it returns false.
     * @returns {string|boolean} The value of the 'label' attribute as a string, or false if the attribute is not set.
     */
    get label(): string | boolean;
    /**
     * Sets the `validateOnChange` property. If set to a truthy value, it adds the
     * `validate-on-change` attribute to the element. If set to a falsy value, it
     * removes the `validate-on-change` attribute from the element.
     * @param {boolean} value Determines whether to add or remove the
     * `validate-on-change` attribute. A truthy value adds the attribute, whereas a
     * falsy value removes it.
     */
    set validateOnChange(value: boolean);
    /**
     * Getter for the validateOnChange attribute.
     * @returns {boolean} Whether the attribute is present.
     */
    get validateOnChange(): boolean;
    set placeholder(value: string);
    get placeholder(): string;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    /**
     * Draws the component for the textarea.
     * @returns {DocumentFragment}
     */
    draw(): DocumentFragment;
    _ariaErrorId: string;
    counterElement: HTMLDivElement;
    native: HTMLDivElement;
    labelElement: HTMLLabelElement;
    input: HTMLTextAreaElement;
    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw(): void;
    resizeObserver: ResizeObserver;
    /**
     * Syncs ARIA attributes on the host element.
     */
    syncAria(): void;
    /**
     * Sets the height of the textarea.
     */
    setTextareaHeight: () => void;
    /**
     * Updates the counter for the textarea.
     * @param {Event} e The event object.
     */
    counterFn: (e: Event) => void;
}
