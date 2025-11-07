import { default as WJElement } from '../wje-element/element.js';

import styles from './styles/styles.css?inline';

/**
 * `List` is a custom web component that represents a list.
 * It extends from `WJElement`.
 * @summary This element represents a list.
 * @documentation https://elements.webjet.sk/components/list
 * @status stable
 * @augments {WJElement}
 * @slot - The default slot for the list.
 * @cssproperty [--wje-list-inset-padding=1rem] - The padding of the list when it is inset.
 * @cssproperty [--wje-list-border-radius=8px] - The border radius of the list. Accepts any valid CSS length.
 * @cssproperty [--wje-list-background=var(--wje-background)] - The background of the list. Accepts any valid CSS color value.
 * @tag wje-list
 */
export default class List extends WJElement {
    /**
     * Creates an instance of List.
     * @class
     */
    constructor() {
        super();
    }

    className = 'List';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let element = document.createElement('slot');
        fragment.appendChild(element);

        return fragment;
    }

    /**
     * Called after the component has been drawn.
     */
    afterDraw() {
        this.classList.toggle('wje-lines-' + this.lines, this.hasAttribute('lines'));
        this.classList.toggle('wje-inset', this.hasAttribute('inset'));
    }
}
