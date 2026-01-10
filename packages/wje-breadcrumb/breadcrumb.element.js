import { default as WJElement, event, WjElementUtils } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * @summary This class represents a Breadcrumb element, extending the WJElement class. It provides a navigational aid in user interfaces, displaying the current location within a hierarchy.
 * @documentation https://elements.webjet.sk/components/breadcrumb
 * @status stable
 * @augments WJElement
 * @slot - The main content of the breadcrumb.
 * @slot start - Slot for content at the start of the breadcrumb.
 * @slot end - Slot for content at the end of the breadcrumb.
 * @slot separator - Slot for a custom separator between breadcrumb items.
 * @csspart native - The native wrapper of the breadcrumb component.
 * @csspart separator - The separator between breadcrumb items.
 * @cssproperty [--wje-breadcrumb-a=var(--wje-color-contrast-8)] - The color of the breadcrumb text.
 * @cssproperty [--wje-breadcrumb-a-hover=var(--wje-color-contrast-6)] - The color of the breadcrumb separator line.
 * @tag wje-breadcrumb
 */
export default class Breadcrumb extends WJElement {
    /**
     * Breadcrumb constructor method.
     */
    constructor() {
        super();

        this._showSeparator = true;
        this._showCollapsedIndicator = false;
    }

    /**
     * Get show separator flag.
     * @returns {boolean} showSeparator - The show separator flag
     */
    get showSeparator() {
        return this._showSeparator;
    }

    /**
     * Set show separator flag.
     * @param {boolean} value The value to set
     */
    set showSeparator(value) {
        this._showSeparator = value;
    }

    /**
     * Set collapsed variant.
     * @param {string} value The value to set
     */
    set collapsedVariant(value) {
        this._collapsedVariant = value;
    }

    /**
     * Get collapsed variant.
     * @returns {string} The collapsed variant value in uppercase.
     */
    get collapsedVariant() {
        let variant = this.parentElement?.variant || this._collapsedVariant;
        return variant.toUpperCase();
    }

    /**
     * Class name for the Breadcrumb element.
     * @type {string}
     */
    className = 'Breadcrumb';

    /**
     * Get CSS stylesheet for the Breadcrumb element.
     * @static
     * @returns {object} styles - The CSS styles
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Get observed attributes for the Breadcrumb element.
     * @static
     * @returns {Array<string>} - The observed attributes array for the Breadcrumb element.
     */
    static get observedAttributes() {
        return ['show-collapsed-indicator', 'collapsed', 'last'];
    }

    /**
     * Handles attribute changes for the custom element and updates its behavior or appearance accordingly.
     * @param {string} name The name of the attribute that was changed.
     * @param {string|null} oldValue The previous value of the attribute before it was changed. Null if the attribute was not previously set.
     * @param {string|null} newValue The new value of the attribute after it was changed. Null if the attribute was removed.
     * @returns {boolean} Returns false to signal no default behavior is implemented.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback?.(name, oldValue, newValue);

        if (name === 'collapsed') {
            const isCollapsed = WjElementUtils.stringToBoolean(newValue);

            // toggle class podľa stavu
            this.classList.toggle('collapsed', isCollapsed && !this.hasAttribute('show-collapsed-indicator'));

        } else if (name === 'show-collapsed-indicator') {
            const isOn = WjElementUtils.stringToBoolean(newValue);
            this._showCollapsedIndicator = isOn;
            this.refresh();

        } else if (name === 'last') {
            const isLast = WjElementUtils.stringToBoolean(newValue);
            this.active = isLast;
            this.showSeparator = !isLast;
            this.refresh();
        }
    }

    /**
     * Setup attributes for the Breadcrumb element.
     */
    setupAttributes() {
        this.isShadowRoot = 'open';
    }

    /**
     * Draw method for the Breadcrumb element.
     * @returns {object} fragment - The document fragment
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('a');
        native.classList.add('native-breadcrumb');
        native.setAttribute('part', 'native');

        if (this.active) native.classList.add('active');

        let slot = document.createElement('slot');

        let start = document.createElement('slot');
        start.setAttribute('name', 'start');

        let end = document.createElement('slot');
        end.setAttribute('name', 'end');

        native.append(start, slot, end);

        // APPEND
        fragment.append(native);

        if (WjElementUtils.stringToBoolean(this._showCollapsedIndicator)) {
            // pridame button za native element
            fragment.append(this.drawCollapsedIndicator());

            // skryjeme native element
            native.classList.add('hidden');
        }

        if (this.showSeparator) {
            let separator = document.createElement('span');
            separator.classList.add('separator');
            separator.setAttribute('part', 'separator');

            if (WjElementUtils.hasSlot(this, 'separator')) {
                let slotSeparator = document.createElement('slot');
                slotSeparator.setAttribute('name', 'separator');

                separator.append(slotSeparator);
            } else {
                separator.innerHTML = `<wje-icon name=${this.separator || 'chevron-right'}></wje-icon>`;
            }

            fragment.append(separator);
        }

        this.native = native;

        return fragment;
    }

    /**
     * Renders the collapsed indicator based on the current collapsed variant.
     * If the collapsed variant is 'DROPDOWN', it invokes the collapseDropdown method.
     * Otherwise, it invokes the collapseButton method.
     * @returns {any} The rendered collapsed indicator, either as a dropdown or a button.
     */
    drawCollapsedIndicator() {
        let collapsedIndicator = null;

        if (this.collapsedVariant === 'DROPDOWN') {
            collapsedIndicator = this.collapseDropdown();
        } else {
            collapsedIndicator = this.collapseButton();
        }

        return collapsedIndicator;
    }

    /**
     * Creates and returns a dropdown UI component for collapsed breadcrumbs.
     * This method generates a dropdown element with a button trigger and a menu populated with items corresponding
     * to the collapsed breadcrumbs. The dropdown is configured to handle specific interactions and ensure that
     * events are appropriately managed to avoid propagation issues. Menu items are linked to their corresponding
     * breadcrumbs, enabling the same functionality as clicking on the original breadcrumb.
     * @returns {HTMLElement} A configured dropdown element containing a button as trigger and a menu with breadcrumb items.
     */
    collapseDropdown() {
        let dropdown = document.createElement('wje-dropdown');
        dropdown.setAttribute('placement', 'bottom');
        dropdown.setAttribute('offset', '10');

        let button = document.createElement('wje-button');
        button.setAttribute('slot', 'trigger');
        button.setAttribute('fill', 'link');
        button.innerHTML = `<wje-icon name="dots"></wje-icon>`;

        let menu = document.createElement('wje-menu');
        menu.setAttribute('variant', 'context');

        menu.addEventListener('click', (e) => {
            e.stopPropagation();
            e.stopImmediatePropagation?.();
        });

        this.getBreadcrumbs().getBreadcrumbsCollapsed().forEach((b) => {
            let menuItem = document.createElement('wje-menu-item');
            menuItem.innerHTML = b.innerHTML;

            menuItem.__breadcrumb = b;

            menuItem.addEventListener('wje-menu-item:click', (e) => {
                e.preventDefault?.();
                e.stopPropagation();
                e.stopImmediatePropagation?.();

                const breadcrumb = e.currentTarget.__breadcrumb;
                if (!breadcrumb) return;

                // Prefer clicking the internal anchor (same behavior as real user click), fallback to host click.
                const native = breadcrumb.native || breadcrumb.shadowRoot?.querySelector('a.native-breadcrumb');
                if (native && typeof native.click === 'function') {
                    native.click();
                } else if (typeof breadcrumb.click === 'function') {
                    breadcrumb.click();
                } else {
                    breadcrumb.dispatchEvent(
                        new MouseEvent('click', {
                            bubbles: true,
                            composed: true,
                            cancelable: true
                        })
                    );
                }
            });

            menu.append(menuItem);
        });

        dropdown.append(button, menu);

        return dropdown;
    }

    /**
     * Creates a button element that expands hidden breadcrumbs when clicked.
     * The button is set with appropriate attributes and event listeners to handle
     * the expanding of hidden breadcrumb elements. Clicking the button will remove
     * the button itself, reveal hidden breadcrumbs, and stop the current event
     * propagation.
     * @returns {HTMLButtonElement} The created button configured to expand breadcrumbs.
     */
    collapseButton() {
        let button = document.createElement('button');
        button.setAttribute('aria-label', 'Show more breadcrumbs');
        button.setAttribute('part', 'collapsed-indicator');
        button.innerHTML = `<wje-icon name="dots"></wje-icon>`;

        event.addListener(button, 'click', null, (e) => {
            this.native.classList.remove('hidden');
            button.remove();
            this.getBreadcrumbs().getBreadcrumbsCollapsed().forEach((el) => {
                el.classList.remove('collapsed');
            });
            e.stopPropagation();
        });

        return button;
    }

    /**
     * Retrieves the breadcrumb trail for the current element by returning its parent element.
     * @returns {Element} The parent element representing the breadcrumb trail.
     */
    getBreadcrumbs() {
        return this.parentElement;
    }
}
