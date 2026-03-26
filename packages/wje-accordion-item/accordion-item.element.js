import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents an Accordion Item element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/accordion-item
 * @status stable
 * @augments WJElement
 * @attribute {string} color - Applies a contextual color variant such as `primary`, `success`, `danger`, `warning`, `info`, or `complete`.
 * @slot headline - Slot for the clickable accordion headline content.
 * @slot description - Slot for supporting text shown below the headline.
 * @slot toggle - Slot for a custom toggle icon or toggle content.
 * @slot content - Slot for the expandable panel body.
 * @csspart native - The wrapper of the whole accordion item.
 * @csspart headline - The clickable headline area.
 * @csspart description - The description slot container inside the headline.
 * @csspart toggle - The toggle slot container and fallback chevron area.
 * @csspart content - The expandable content panel.
 * @cssproperty [--wje-accordion-background=var(--wje-color-contrast-0)] - Background color of the collapsed item wrapper.
 * @cssproperty [--wje-accordion-border=var(--wje-color-contrast-0)] - Border color of the collapsed item wrapper.
 * @cssproperty [--wje-accordion-border-radius=var(--wje-border-radius-large)] - Border radius of the item wrapper.
 * @cssproperty [--wje-accordion-background-hover=var(--wje-color-contrast-1)] - Background color used when the headline is hovered.
 * @cssproperty [--wje-accordion-border-hover=var(--wje-color-contrast-2)] - Border color used when the headline is hovered.
 * @cssproperty [--wje-accordion-background-expanded=var(--wje-color-contrast-0)] - Background color of the expanded item wrapper.
 * @cssproperty [--wje-accordion-border-expanded=var(--wje-color-contrast-0)] - Border color of the expanded item wrapper.
 * @cssproperty [--wje-accordion-headline-color=var(--wje-color-contrast-11)] - Text color of the headline area.
 * @cssproperty [--wje-accordion-content-color=var(--wje-color-contrast-6)] - Text color of the expandable content area.
 * @cssproperty [--wje-accordion-marker-rotate=0deg] - Rotation applied to the toggle marker icon.
 * @fires wje-accordion-item:open - Dispatched when the item is expanded.
 * @fires wje-accordion-item:close - Dispatched when the item is collapsed.
 * @tag wje-accordion-item
 */
export default class AccordionItem extends WJElement {
    static _instanceId = 0;
    /**
     * Constructor for the AccordionItem class.
     */
    constructor() {
        super();
        this._instanceId = ++AccordionItem._instanceId;
    }

    /**
     * The class name for the Accordion Item element.
     * @type {string}
     */
    className = 'AccordionItem';

    /**
     * Getter for the CSS stylesheet.
     * @returns {object} The styles for the Accordion Item element.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {Array} An array containing the name of the observed attribute.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Method to setup attributes for the Accordion Item element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Method to draw the Accordion Item element. This method returns a document fragment containing the drawn element.
     * @returns {object} The document fragment containing the drawn element.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-accordion-item');

        let headline = document.createElement('div');
        headline.setAttribute('part', 'headline');
        headline.classList.add('headline');
        const baseId = this.id || `wje-accordion-item-${this._instanceId}`;
        headline.id = `${baseId}-header`;

        let headlineDescription = document.createElement('slot');
        headlineDescription.setAttribute('part', 'description');
        headlineDescription.setAttribute('name', 'description');

        let slotHeadline = document.createElement('slot');
        slotHeadline.setAttribute('name', 'headline');

        let toggle = document.createElement('slot');
        toggle.setAttribute('part', 'toggle');
        toggle.setAttribute('name', 'toggle');

        let mark = document.createElement('wje-icon');
        mark.setAttribute('name', 'chevron-down');

        let content = document.createElement('div');
        content.setAttribute('part', 'content');
        content.setAttribute('id', `${baseId}-panel`);
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', headline.id);

        let slot = document.createElement('slot');
        slot.setAttribute('name', 'content');

        toggle.appendChild(mark);

        headline.appendChild(slotHeadline);
        headline.appendChild(toggle);
        headline.appendChild(headlineDescription);

        content.appendChild(slot);

        native.appendChild(headline);
        native.appendChild(content);

        fragment.appendChild(native);

        this.headline = headline;
        this.toggle = toggle;
        this.content = content;

        return fragment;
    }

    /**
     * Method to execute after the Accordion Item element is drawn.
     */
    afterDraw() {
        if (!this.classList.contains('expanded')) this.classList.add('collapsed');

        this.headline.setAttribute('role', 'button');
        this.headline.setAttribute('tabindex', '0');
        this.headline.setAttribute('aria-controls', this.content.id);
        this.headline.setAttribute('aria-expanded', this.classList.contains('expanded') ? 'true' : 'false');

        this.headline.addEventListener('click', () => {
            if (this.classList.contains('collapsed')) {
                event.dispatchCustomEvent(this, 'wje-accordion-item:open');
                this.toggle.style.setProperty('--wje-accordion-marker-rotate', '180deg');
                this.expand();
            } else {
                event.dispatchCustomEvent(this, 'wje-accordion-item:close');
                this.toggle.style.setProperty('--wje-accordion-marker-rotate', '0deg');
                this.collapse();
            }
        });

        this.headline.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.headline.click();
            }
        });
    }

    /**
     * Collapses the accordion item and updates the headline ARIA state.
     */
    collapse() {
        this.classList.remove('expanded');
        this.classList.add('collapsed');
        this.headline?.setAttribute('aria-expanded', 'false');
    }

    /**
     * Expands the accordion item and updates the headline ARIA state.
     */
    expand() {
        this.classList.remove('collapsed');
        this.classList.add('expanded');
        this.headline?.setAttribute('aria-expanded', 'true');
    }
}
