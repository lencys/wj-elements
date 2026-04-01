import { default as WJElement, event } from '../wje-element/element.js';

import styles from './styles/styles.css?inline';

/**
 * @summary This class represents CarouselItem element, extending the WJElement class.
 * @documentation https://elements.webjet.sk/components/carousel-item
 * @status stable
 * @augments WJElement
 * @slot - The carousel item main content.
 * @csspart native - The component's native wrapper.
 * @cssproperty [--wje-carousel-item-background-color=transparent] - Background color of the component;
 * @cssproperty [--wje-carousel-item-border-color=--wje-color-contrast-4] - Border color of the component;
 * @cssproperty [--wje-carousel-item-color=--wje-color-contrast-11] - Color of the component;
 * @cssproperty [--wje-carousel-item-border-radius=--wje-border-radius-medium] - Border radius of the component;
 * @cssproperty [--wje-carousel-item-border-width=1px] - Border width of the component;
 * @cssproperty [--wje-carousel-item-border-style=solid] - Border style of the component;
 * @cssproperty [--wje-carousel-item-border-color=--wje-color-contrast-1] - Border color of the component;
 * @cssproperty [--wje-carousel-item-margin-inline=0] - Margin inline of the component;
 */
export default class CarouselItem extends WJElement {
    /**
     * CarouselItem constructor method.
     */
    constructor() {
        super();
    }

    /**
     * Class name for the CarouselItem element.
     * @type {string}
     */
    className = 'CarouselItem';

    /**
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     * @returns {*[]}
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the CarouselItem.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the CarouselItem element.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-carousel-item');
        native.setAttribute('part', 'native');

        let slot = document.createElement('slot');
        this.defaultSlot = slot;

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }

    /**
     * After draw event for the CarouselItem element.
     */
    afterDraw() {
        event.addListener(this, 'click', 'wje-carousel-item:click');
        this.syncContentLayoutMode();

        if (this.defaultSlot && !this.defaultSlot.dataset.wjeCarouselItemBound) {
            this.defaultSlot.addEventListener('slotchange', () => this.syncContentLayoutMode());
            this.defaultSlot.dataset.wjeCarouselItemBound = 'true';
        }
    }

    /**
     * Keeps a simple layout hint for single-wrapper content.
     */
    syncContentLayoutMode() {
        const assignedElements = this.defaultSlot?.assignedElements({ flatten: true }) || [];

        if (assignedElements.length === 1) {
            this.setAttribute('single-content', '');
            return;
        }

        this.removeAttribute('single-content');
    }
}
