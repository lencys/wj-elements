import { default as WJElement } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `TabGroup` is a custom web component that represents a group of tabs.
 * @summary This element represents a group of tabs.
 * @documentation https://elements.webjet.sk/components/tab-group
 * @status stable
 * @augments WJElement
 * @param {string} type The type of the tab group. Can be either 'panel' or 'route'.
 * @slot - The default slot for the tab group.
 * @slot nav - Slot for the navigation of the tab group.
 * @cssproperty [--wje-tab-group-padding=1rem] - Specifies the padding inside the tab group. This property defines the space between the content of the tab group and its outer boundary. Accepts any valid CSS length unit (e.g., `px`, `rem`, `em`, `%`).
 * @tag wje-tab-group
 */

export default class TabGroup extends WJElement {
    /**
     * Creates an instance of TabGroup.
     * @class
     */
    constructor() {
        super();
    }

    /**
     * Sets the value for the 'variant' attribute of the element.
     * @param {string} value The value to set for the 'variant' attribute.
     */
    set variant(value) {
        this.setAttribute('variant', value);
    }

    /**
     * Gets the value of the 'variant' attribute.
     * If the attribute is not set, it defaults to 'top'.
     * @returns {string} The value of the 'variant' attribute or the default value 'top' if not set.
     */
    get variant() {
        return this.getAttribute('variant') || 'top';
    }

    /**
     * Sets the 'type' attribute of the element to the specified value.
     * @param {string} value The value to set for the 'type' attribute.
     */
    set type(value) {
        this.setAttribute('type', value);
    }

    /**
     * Retrieves the `type` attribute of the element.
     * If the `type` attribute is not set, it defaults to `'panel'`.
     * @returns {string} The value of the `type` attribute or the default value `'panel'`.
     */
    get type() {
        return this.getAttribute('type') || 'panel';
    }

    className = 'TabGroup';

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
     * Sets up the event listeners before the component is drawn.
     * This method is called before the component is drawn.
     * It is used to set up event listeners.
     */
    beforeDraw() {
        let activeTabName = location.hash.replace('#', '');

        // skontrolujeme ci sa nachadza v paneloch
        if (this.getPanelAllName().includes(activeTabName)) {
            window.addEventListener('load', (e) => {
                this.setActiveTab(activeTabName);
            });
        }
    }

    /**
     * Creates and returns a document fragment containing a structured layout for a tab group.
     * The tab group layout includes a `header` section with navigational elements,
     * a `section` element for tab panels, and slots for customization such as additional navigation items,
     * dropdowns, and more.
     * The structure comprises:
     * - A `div` container with relevant styling and part attributes.
     * - A `header` for tabs, including a slot for navigation (`nav`) and additional tabs in a dropdown (`moreDropdown`).
     * - A `section` for tab panels with a customizable `slot`.
     * This function also initializes the `nav` and `moreDropdown` properties for external use.
     * @returns {DocumentFragment} The completed document fragment containing the tab group layout.
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-tab-group');

        let header = document.createElement('header');
        header.setAttribute('part', 'tabs');
        header.classList.add('scroll-snap-x');

        let nav = document.createElement('nav');
        nav.setAttribute('part', 'nav');

        let section = document.createElement('section');
        section.setAttribute('part', 'panels');

        let slot = document.createElement('slot');

        let slotNav = document.createElement('slot');
        slotNav.setAttribute('name', 'nav');

        // More dropdown
        let icon = document.createElement('wje-icon');
        icon.setAttribute('name', 'dots');

        let button = document.createElement('wje-button');
        button.setAttribute('slot', 'trigger');
        button.setAttribute('fill', 'link');

        let menu = document.createElement('wje-menu');
        menu.setAttribute('variant', 'context');

        let slotMore = document.createElement('slot');
        slotMore.setAttribute('name', 'more');

        let moreDropdown = document.createElement('wje-dropdown');
        moreDropdown.setAttribute('placement', 'bottom-end');
        moreDropdown.setAttribute('collapsible', '');
        moreDropdown.classList.add('more-tabs');

        // APPEND
        button.append(icon);

        menu.append(slotMore);

        moreDropdown.append(button);
        moreDropdown.append(menu);

        header.append(nav);

        nav.append(slotNav);

        if(this.variant === 'top' || this.variant === 'bottom') {
            nav.append(moreDropdown);
        }

        section.append(slot);

        native.append(header);
        native.append(section);

        fragment.append(native);

        this.nav = nav;
        this.moreDropdown = moreDropdown;

        return fragment;
    }

    /**
     * Executes necessary initializations and attaches event listeners after a drawing operation.
     * Handles active tab selection, 'wje-tab:change' event binding, and window resize event for overflow checking.
     * @returns {void} Does not return a value.
     */
    afterDraw() {
        let activeTab = this.getActiveTab();
        let activeTabName = activeTab ? activeTab[0][this.type] : this.getTabAll()[0][this.type];

        this.setActiveTab(activeTabName);

        this.addEventListener('wje-tab:change', (e) => {
            if (e.detail.context.hasAttribute('disabled')) return;
            this.setActiveTab(e.detail.context.panel);
        });

        if(this.variant === 'top' || this.variant === 'bottom') {
            this.checkOverflow = this.checkOverflow.bind(this);

            window.addEventListener('resize', this.checkOverflow);

            requestAnimationFrame(() => this.checkOverflow());
        }
    }

    /**
     * Removes the 'active' class from all panel and tab elements.
     * @returns {void} This method does not return a value.
     */
    removeActiveTab() {
        this.getPanelAll().forEach((el) => {
            el.classList.remove('active');
        });

        this.getTabAll().forEach((el) => {
            el.classList.remove('active');
        });
    }

    /**
     * Sets the active tab and panel.
     * @param {string} tab The name of the tab to set as active.
     */
    setActiveTab(tab) {
        this.removeActiveTab();

        const el = this.querySelector(`[${this.type}="${tab}"]`)
        el?.classList.add('active');

        if(this.type === 'panel')
            this.querySelector(`[name="${tab}"]`)?.classList.add('active');

        if(el)
            this.dropdownActive(el);
    }

    /**
     * Returns the currently active tab.
     * @returns {Element|null} The active tab, or null if no tab is active.
     */
    getActiveTab() {
        let activeTabs = Array.from(this.querySelectorAll('wje-tab.active'));
        return activeTabs.length > 0 ? activeTabs : null;
    }

    /**
     * Returns all tabs.
     * @returns {Array<Element>} An array of all tabs.
     */
    getTabAll() {
        return this.context.querySelector('[name="nav"]').assignedElements();
    }

    /**
     * Returns all panels.
     * @returns {Array<Element>} An array of all panels.
     */
    getPanelAll() {
        return Array.from(this.querySelectorAll('wje-tab-panel'));
    }

    /**
     * Returns the names of all tabs.
     * @returns {Array<string>} An array of all tab names.
     */
    getPanelAllName() {
        return this.getPanelAll().map((el) => el.getAttribute('name'));
    }

    /**
     * Toggles the visibility of the "more" dropdown based on the presence of tabs in the "more" slot.
     * @returns {void} Does not return a value.
     */
    toggleMoreVisibility() {
        const hasTabsInMore = this.querySelector('wje-tab[slot="more"]');
        this.moreDropdown.hidden = !hasTabsInMore;
    }

    /**
     * Checks if the tabs within a navigation bar overflow the available space.
     * Moves overflowing tabs into a dropdown menu and updates their state accordingly.
     * @returns {void} This method does not return a value.
     */
    checkOverflow() {
        const nav = this.nav;
        const moreBtn = this.moreDropdown;
        const moreWidth = moreBtn.offsetWidth || 48; // fallback ak ešte nie je vykreslený

        const tabs = Array.from(this.querySelectorAll('wje-tab'));

        // Reset: presunieme všetky taby naspäť do nav slotu
        tabs.forEach(tab => tab.setAttribute('slot', 'nav'));

        // Vykreslíme nanovo, aby sa more button správne umiestnil
        requestAnimationFrame(() => {
            const navRight = nav.getBoundingClientRect().right;
            let overflowStarted = false;

            for (const tab of tabs) {
                const tabRect = tab.getBoundingClientRect();

                // Ak by pretekal vrátane rezervy na more, presunieme ho
                const fits = tabRect.right + moreWidth <= navRight;

                if (!fits || overflowStarted) {
                    tab.setAttribute('slot', 'more');
                    this.dropdownActive(tab);
                    overflowStarted = true;
                }
            }

            this.toggleMoreVisibility();
        });
    }

    /**
     * Toggles the "dropdown-active" class on the element based on its "active" status
     * and the value of its "slot" attribute.
     * @param {HTMLElement} el The HTML element to evaluate and apply the toggle logic.
     * @returns {void} This method does not return any value.
     */
    dropdownActive(el) {
        if(el.classList.contains('active')) {
            if(el.getAttribute('slot') === 'more')
                this.moreDropdown.classList.add('dropdown-active');
            else
                this.moreDropdown.classList.remove('dropdown-active');
        }
    }
}
