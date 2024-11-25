import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This method dispatches a custom event named "wje-chip:remove".
 * It is triggered when the remove button is clicked, which happens when the chip is removed.
 * The event is dispatched on the current instance of the Chip class.
 * @documentation https://elements.webjet.sk/components/chip
 * @status stable
 * @augments WJElement
 * @slot - The chip main content.
 * @csspart native - The component's native wrapper.
 * //@fires wje-chip:remove - Dispatched when the chip is removed;
 */
export default class Chip extends WJElement {
    /**
     * Chip constructor method.
     */
    constructor() {
        super();
    }

    /**
     * Class name for the Chip element.
     * @type {string}
     */
    className = 'Chip';

    /**
     * Getter for the CSS stylesheet.
     * @returns {*}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for the observed attributes.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the Chip element.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-chip');

        let slot = document.createElement('slot');

        let remove = document.createElement('wje-button');
        remove.setAttribute('part', 'remove');
        remove.setAttribute('fill', 'link');
        remove.setAttribute('color', this.color || 'default');
        remove.innerHTML = `<wje-icon name="x"></wje-icon>`;

        let active = document.createElement('wje-icon');
        active.setAttribute('name', 'check');
        active.classList.add('check');

        // Add color
        if (this.hasAttribute('color')) native.classList.add('wje-color-' + this.color, 'wje-color');
        else native.classList.add('wje-color-default', 'wje-color');

        if (this.disabled) this.classList.add('wje-disabled');

        if (this.outline) this.classList.add('wje-outline');

        native.appendChild(slot);
        native.appendChild(active);

        if (this.hasAttribute('removable')) native.appendChild(remove);

        fragment.appendChild(native);

        this.removeElement = remove;
        return fragment;
    }

    /**
     * Getter for the observed attributes.
     */
    afterDraw() {
        event.addListener(this.removeElement, 'click', 'wje:chip-remove', null, { stopPropagation: true });
    }

    /**
     * Before disconnect event for the Chip element.
     */
    beforeDisconnect() {
        event.removeListener(this.removeElement, 'click', 'wje:chip-remove');
    }
}
