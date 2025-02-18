import { default as WJElement, WjElementUtils, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';


/**
 * `Tree` is a custom web component that represents a toast notification.
 * @summary This element represents a toast notification.
 * @documentation https://elements.webjet.sk/components/toast
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part
 * @cssproperty {string} headline - Specifies the headline text of the toast. Represents the main title or heading displayed in the toast.
 * @cssproperty {boolean} open - Indicates whether the toast is currently open (visible). A value of `true` shows the toast, while `false` hides it.
 * @cssproperty {number} duration - Determines the duration (in milliseconds) for which the toast is displayed. After this time, the toast will automatically close unless it is manually closed.
 * @cssproperty {boolean} closable - Specifies whether the toast can be manually closed by the user. If `true`, the toast will include a close button or mechanism.
 * @cssproperty {string} color - Defines the color of the toast. Accepts any valid CSS color value such as `hex`, `RGB`, or named colors.
 * @cssproperty {boolean} countdown - Indicates whether a countdown is displayed in the toast. When `true`, a visual countdown timer is shown to indicate the remaining time before the toast closes.
 * @slot - The content of the toast.
 * @slot media - The media of the toast.
 * // @fires wje-toast:after-show - Fired after the toast is shown.
 * // @fires wje-toast:after-hide - Fired after the toast is hidden.
 */

export default class Tree extends WJElement {
    /**
     * Creates an instance of Toast.
     */
    constructor() {
        super();
    }

    set selection(value) {
        this.setAttribute('selection', value || 'single');
    }

    get selection() {
        return this.getAttribute('selection');
    }

    /**
     * The class name for the component.
     * @type {string}
     */
    className = 'Tree';

    /**
     * Returns the CSS stylesheet for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS stylesheet
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Setup attributes for the Button element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    beforeDraw(context, appStoreObj, params) {
        const items = this.querySelectorAll('wje-tree-item');
        items?.forEach(item => {
            item.selection = this.selection;

            this.getExpandCollapseIcon(item,'expand');
            this.getExpandCollapseIcon(item,'collapse');

        });
    }

    /**
     * Draw method for the toast notification.
     * @returns {object} Document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-tree');

        let slot = document.createElement('slot');

        native.appendChild(slot);

        fragment.appendChild(native);

        return fragment;
    }

    getExpandCollapseIcon(item, status) {
        let icon = this.querySelector(`[slot="${status}"]`);
        if (!icon) {
            console.warn(`Icon with slot "${status}" was not found.`);
            return;
        }

        let iconClone = icon.cloneNode(true);
        console.log("CLONE:", iconClone);
        item.appendChild(iconClone);
        // return this.querySelector('.expand-collapse-icon');
    }



    /**
     * After draw method for the toast notification.
     */
    afterDraw() {

    }
}