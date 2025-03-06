import { default as WJElement } from '../wje-element/element.js';
import { drag } from './service/service.js';
import styles from './styles/styles.css?inline';

/**
 * `SplitView` is a custom web component that represents a split view.
 * @summary This element represents a split view.
 * @documentation https://elements.webjet.sk/components/split-view
 * @status stable
 * @augments WJElement
 * @slot start - Slot for the start view.
 * @slot end - Slot for the end view.
 * @slot divider - Slot for the divider.
 * @csspart native-split-view - The native split view wrapper.
 * @csspart wje-divider - The divider of the split view.
 * @cssproperty [--wje-split-view-divider-area=12px] - Defines the interactive area (hitbox) of the divider for resizing. Accepts any valid CSS length unit (e.g., `px`, `rem`, `%`).
 * @cssproperty [--wje-split-view-divider-width=4px] - Specifies the visual width of the divider. Controls how thick the divider appears.
 * @cssproperty [--wje-split-view-min=0%] - Sets the minimum size limit for the split views. Ensures that a view cannot be resized below this value.
 * @cssproperty [--wje-split-view-max=100%] - Sets the maximum size limit for the split views. Ensures that a view cannot be resized beyond this value.
 * @cssproperty [--wje-split-view-calc-a=50%] - Represents the calculated size of the first view. This is used to dynamically set the size of the first view.
 * @cssproperty [--wje-split-view-calc-b=50%] - Represents the calculated size of the second view. This is used to dynamically set the size of the second view.
 * @cssproperty [--wje-split-view-clamp-a=clamp(var(--wje-split-view-min), var(--wje-split-view-calc-a), var(--wje-split-view-max))] - Clamps the size of the first view between minimum and maximum limits. Ensures the calculated size stays within the defined range.
 * @cssproperty [--wje-split-view-clamp-b=clamp(var(--wje-split-view-min), var(--wje-split-view-calc-b), var(--wje-split-view-max))] - Clamps the size of the second view between minimum and maximum limits. Ensures the calculated size stays within the defined range.
 * @cssproperty [--wje-split-view-divider-background=var(--wje-border-color)] - Sets the background color of the divider. Accepts any valid CSS color value (e.g., hex, RGB, or CSS variable).
 * @cssproperty [--wje-split-view-divider-size=4px] - Defines the overall size of the divider, affecting both its visual and interactive dimensions. Accepts any valid CSS length unit.
 * @tag wje-split-view
 */

export default class SplitView extends WJElement {
    /**
     * Creates an instance of SplitView.
     * @class
     */
    constructor() {
        super();
    }

    set initial(value) {
        this.setAttribute('initial', value);
    }

    get initial() {
        return +this.getAttribute('initial') || 50;
    }

    className = 'SplitView';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draws the component for the split view.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.classList.add('native-split-view');

        let start = document.createElement('slot');
        start.setAttribute('name', 'start');

        let end = document.createElement('slot');
        end.setAttribute('name', 'end');

        let divider = document.createElement('slot');
        divider.setAttribute('name', 'divider');

        let dividerElement = document.createElement('div');
        dividerElement.classList.add('wje-divider');
        dividerElement.setAttribute('part', 'divider');
        dividerElement.appendChild(divider);
        dividerElement.addEventListener('mousedown', this.handleDrag, false);

        native.appendChild(start);
        native.appendChild(dividerElement);
        native.appendChild(end);

        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Sets up the event listeners after the component is drawn.
     */
    afterDraw() {
        this.detectSize();

        if (this.min) this.style.setProperty('--wje-split-view-min', this.pixelsToPercentage(this.min) + '%');

        if (this.max) this.style.setProperty('--wje-split-view-max', 100 - this.pixelsToPercentage(this.max) + '%');

        if (this.initial) {
            this.style.setProperty('--wje-split-view-calc-a', this.pixelsToPercentage(this.initial) + '%');
            this.style.setProperty('--wje-split-view-calc-b', 100 - this.pixelsToPercentage(this.initial) + '%');
        }

        this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));
    }

    /**
     * Handles the drag event.
     * @param {Event} e The event object.
     */
    handleDrag = (e) => {
        if (this.hasAttribute('disabled')) return;

        drag(this, {
            onMove: (x, y) => {
                console.log('x', x);
                console.log('y', y);
                console.log('this.hasAttribute(vertical)', this.hasAttribute('vertical'));
                let newPositionInPixels = this.hasAttribute('vertical') ? y : x;
                console.log('newPositionInPixels', newPositionInPixels);
                let sizeA = this.pixelsToPercentage(newPositionInPixels);
                let sizeB = 100 - this.pixelsToPercentage(newPositionInPixels);
                console.log('sizeA', sizeA);
                console.log('sizeB', sizeB);
                this.style.setProperty('--wje-split-view-calc-a', sizeA + '%');
                this.style.setProperty('--wje-split-view-calc-b', sizeB + '%');
            },
            initialEvent: e,
        });
    };

    /**
     * Detects the size of the split view.
     */
    detectSize() {
        const { width, height } = this.getBoundingClientRect();
        console.log('VERTICAL:', this.hasAttribute('vertical'), this.getBoundingClientRect(), this);
        console.log('width', width);
        console.log('height', height);
        this.size = this.hasAttribute('vertical') ? height : width;
    }

    /**
     * Converts pixels to a percentage.
     * @param {number} value The pixel value.
     * @returns {number} The percentage value.
     */
    pixelsToPercentage(value) {
        console.log('pixelsToPercentage', value, (value / this.size) * 100);
        return (value / this.size) * 100;
    }
}
