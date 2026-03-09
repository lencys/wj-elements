import { bindRouterLinks } from '../utils/router-links.js';

import { default as WJElement, event, WjElementUtils } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `MenuItem` is a custom web component that represents a menu item.
 * @summary This element represents a menu item.
 * @documentation https://elements.webjet.sk/components/menu-item
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the menu item.
 * @csspart submenu - The submenu part of the menu item.
 * @slot - The default slot for the menu item.
 * @slot start - The slot for the start of the menu item.
 * @slot end - The slot for the end of the menu item.
 * @slot submenu - The slot for the submenu of the menu item.
 * @cssproperty [--wje-menu-item-color=var(--wje-color)] - Sets the text color of a menu item. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-background=transparent] - Defines the background color of a menu item. Default is `transparent`. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-color-hover=var(--wje-color-contrast-8)] - Specifies the text color of a menu item when hovered. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-background-hover=var(--wje-border-color)] - Sets the background color of a menu item when hovered. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-color-focus=var(--wje-color-contrast-8)] - Defines the text color of a menu item when focused. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-background-focus=var(--wje-border-color)] - Specifies the background color of a menu item when focused. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-color-active=var(--wje-color-contrast-8)] - Sets the text color of a menu item when active. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-background-active=var(--wje-border-color)] - Specifies the background color of a menu item when active. Accepts any valid CSS color value.
 * @cssproperty [--wje-menu-item-padding-top=.5rem] - Specifies the top padding inside a menu item. Accepts any valid CSS length value (e.g., `px`, `rem`).
 * @cssproperty [--wje-menu-item-padding-bottom=.5rem] - Specifies the bottom padding inside a menu item. Accepts any valid CSS length value (e.g., `px`, `rem`).
 * @cssproperty [--wje-menu-item-line-height=1.8rem] - Sets the line height for the text within a menu item. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-submenu-offset=0] - Determines the horizontal offset of a submenu relative to its parent. Accepts any valid CSS length value.
 * @cssproperty [--wje-menu-item-icon-visibility=hidden] - Controls the visibility of the icon in a menu item. Accepts `visible`, `hidden`, or `collapse`.
 * @cssproperty [--wje-menu-item-safe-triangle-cursor-x] - Specifies the x-coordinate of the cursor for the safe triangle area. Used for managing hover or focus transitions between menu items and submenus.
 * @cssproperty [--wje-menu-item-safe-triangle-cursor-y] - Specifies the y-coordinate of the cursor for the safe triangle area.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-start-x] - Defines the x-coordinate where the submenu's safe triangle starts. Helps prevent accidental submenu closing when navigating.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-start-y] - Defines the y-coordinate where the submenu's safe triangle starts.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-end-x] - Specifies the x-coordinate where the submenu's safe triangle ends.
 * @cssproperty [--wje-menu-item-safe-triangle-submenu-end-y] - Specifies the y-coordinate where the submenu's safe triangle ends.
 * @tag wje-menu-item
 */
export default class MenuItem extends WJElement {
    /**
     * Constructor for MenuItem class.
     * @class
     */
    constructor() {
        super();

        this._bind = false;

    }

    /**
     * Getter for placement attribute.
     * @returns {string} The placement attribute of the menu or "right-start" if it doesn't exist.
     */
    get placement() {
        let menu = this.querySelector('wje-menu');

        if (menu?.hasAttribute('placement')) {
            return menu.getAttribute('placement');
        }
        return 'right-start';
    }

    /**
     * Getter for offset attribute.
     * @returns {string} The offset attribute of the menu or "0" if it doesn't exist.
     */
    get offset() {
        let menu = this.querySelector('wje-menu');

        if (menu?.hasAttribute('offset')) {
            return menu.getAttribute('offset');
        }
        return '0';
    }

    /**
     * Getter for variant attribute.
     * @returns {string} The variant attribute of the menu or "CONTEXT" if it doesn't exist.
     */
    get variant() {
        let menu = this.querySelector('wje-menu');

        if (menu?.hasAttribute('variant') && !this.collapse) {
            return menu.getAttribute('variant').toUpperCase();
        }

        return 'CONTEXT';
    }

    /**
     * Getter for collapse attribute.
     * @returns {boolean} True if the closest parent has the collapse attribute, false otherwise.
     */
    get collapse() {
        if (this.closest('[collapse]')) return true;

        return false;
    }

    /**
     * Sets the value of the custom event attribute.
     * @param {string} value The value to be assigned to the custom event attribute.
     */
    set customEvent(value) {
        this.setAttribute('custom-event', value);
    }

    /**
     * Retrieves the value of the 'custom-event' attribute from the element.
     * @returns {string | null} The value of the 'custom-event' attribute, or null if the attribute is not set.
     */
    get customEvent() {
        return this.getAttribute('custom-event');
    }

    /**
     * Retrieves a mapped object containing custom event parameters extracted from the element's attributes.
     * Attributes considered are those that begin with 'custom-event-'.
     * The mapped object's keys are derived by removing the 'custom-event-' prefix from the attribute names,
     * and the values are the corresponding attribute values.
     * @returns {object} An object containing key-value pairs of custom event parameters.
     */
    get customEventParameters() {
        const attributes = Array.from(this.attributes).filter((attr) => attr.name.startsWith('custom-event-'));

        return attributes.reduce((acc, attr) => {
            const key = attr.name.replace('custom-event-', '');
            acc[key] = attr.value;

            return acc;
        }, {});
    }

    className = 'MenuItem';

    /**
     * Getter for cssStyleSheet.
     * @returns {string} The styles imported from styles.css.
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Getter for observedAttributes.
     * @returns {Array} An empty array as no attributes are being observed.
     */
    static get observedAttributes() {
        return [];
    }

    /**
     * Sets up the attributes for the MenuItem element.
     */
    setupAttributes() {
        super.setupAttributes();
        this.isShadowRoot = 'open';
        this.syncAria();
    }

    /**
     * Removes the active attribute from the menu before drawing the MenuItem.
     */
    beforeDraw() {
        this.querySelector('wje-menu')?.removeAttribute('active');
    }

    /**
     * Draws the MenuItem element and sets the variant and collapse attributes.
     * @returns {DocumentFragment} The fragment to be appended to the MenuItem.
     */
    draw() {
        this.hasSubmenu = WjElementUtils.hasSlot(this, 'submenu');

        let fragment = document.createDocumentFragment();

        this.setAttribute('tabindex', '0');

        this.classList.forEach((className) => {
            // Ak trieda začína na "wje-menu-variant-", odstráňte ju
            if (className.startsWith('wje-menu-variant-')) {
                this.classList.remove(className);
            }
        });

        this.classList.remove('collapse');
        this.classList.add('wje-menu-variant-' + this.variant.toLowerCase());

        if (!this.collapse) {
            this.querySelector('wje-menu')?.setAttribute('variant', this.variant.toLowerCase());
        } else if (this.parentElement?.hasAttribute('collapse')) {
            this.classList.add('collapse');
        }

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.setAttribute('id', 'anchor');
        native.classList.add('native-menu-item');

        // CHECKED - Icon
        let checkedIcon = document.createElement('span');
        checkedIcon.setAttribute('part', 'check');
        checkedIcon.classList.add('check-icon');
        checkedIcon.innerHTML = `<wje-icon name="check"></wje-icon>`;

        if (this.hasAttribute('checked')) checkedIcon.classList.add('checked');
        else checkedIcon.classList.remove('checked');

        // SLOT - Start
        let start = document.createElement('slot');
        start.name = 'start';

        // SLOT
        let slot = document.createElement('slot');
        slot.classList.add('label');

        // SLOT - End
        let end = document.createElement('slot');
        end.setAttribute('part', 'end');
        end.name = 'end';

        // SLOT - Submenu
        let submenu = document.createElement('slot');
        submenu.setAttribute('part', 'submenu');
        submenu.name = 'submenu';

        // SUBMENU - Icon
        let submenuIconClass = this.collapse ? 'collapse' : 'expand';
        let submenuIcon = document.createElement('span');
        submenuIcon.setAttribute('part', 'submenu-icon');
        submenuIcon.classList.add('submenu-icon', submenuIconClass);
        submenuIcon.innerHTML = this.collapse
            ? `<wje-icon name="chevron-down"></wje-icon>`
            : `<wje-icon name="chevron-right"></wje-icon>`;

        if (this.hasSubmenu) native.classList.add('has-submenu');
        else native.classList.remove('has-submenu');

        native.appendChild(checkedIcon);
        native.appendChild(start);
        native.appendChild(slot);
        native.appendChild(end);
        native.appendChild(submenuIcon);

        let isAppend = false;
        // ak je variant typu CONTEXT zobrazime submenu ako popup
        if (this.variant === 'CONTEXT' && this.hasSubmenu) {
            native.setAttribute('slot', 'anchor'); // pridame slot anchor pre popup

            let popup = document.createElement('wje-popup');
            popup.setAttribute('anchor', 'anchor');
            popup.setAttribute('placement', this.placement);
            popup.setAttribute('offset', this.offset);

            popup.appendChild(native);
            popup.appendChild(submenu);

            this.popup = popup;
            fragment.appendChild(popup);
            isAppend = true;
        }

        if (this.parentElement?.hasAttribute('collapse') && !this.hasSubmenu) {
            fragment.appendChild(this.collapseItem(native));
        } else if (!isAppend) {
            fragment.appendChild(native);
        }

        if ((!this.collapse && this.variant === 'NAV') || (this.variant === 'MEGAMENU' && this.hasSubmenu)) {
            fragment.appendChild(submenu);
        }

        this.native = native;
        this.submenu = submenu;

        this.syncAria();
        return fragment;
    }

    /**
     * Adds event listeners after drawing the MenuItem.
     */
    afterDraw() {
        this.bindRouterLinks();
        if (!this.unbindRouterLinks) {
            queueMicrotask(() => this.bindRouterLinks());
        }

        document.addEventListener('wje-router:rebind', this.rebindRouterLinks);

        this.addEventListener('mousemove', this.dispatchMove);
        this.addEventListener('wje-popup:reposition', this.dispatchReposition);

        // Event na zobrazenie submenu
        event.addListener(this, 'mouseenter', null, this.mouseenterHandler);
        // Event na zrusenie zobrazenia submenu ked sa klikne mimo
        event.addListener(this, 'mouseleave', null, this.shouldHideSubmenu);
        // Event na zrusenie zobrazenia submenu ked sa klikne mimo
        event.addListener(this, 'focusout', null, this.shouldHideSubmenu);
        event.addListener(this, 'click', null, this.clickHandler);

        if (this.hasAttribute('custom-event')) {
            event.addListener(this, 'click', null, this.#populateCustomEvent);
        }

        if(this.hasAttribute('active-class')) {
            this.addEventListener('click', this.handleActiveClick);
        }
    }

    /**
     * Syncs ARIA attributes based on menu item state.
     */
    syncAria() {
        const hasSubmenu = !!this.hasSubmenu;
        const expanded = this.classList.contains('expanded-submenu') || this.native?.classList?.contains('expanded-submenu');
        const disabled = this.hasAttribute('disabled');

        this.setAriaState({
            role: 'menuitem',
            disabled,
            haspopup: hasSubmenu ? 'menu' : undefined,
            expanded: hasSubmenu ? expanded : undefined,
        });
    }

    mouseenterHandler = (e) => {
        if (this.collapse || (this.variant === 'CONTEXT' && this.hasSubmenu)) {
            if (this.hasAttribute('manual') || (this.variant === 'NAV' && this.collapse)) return;

            this.activateSubmenu(e);

            e.stopPropagation();

            this.showSubmenu();
        }
    };

    rebindRouterLinks = (e) => {
        const container = e?.detail?.container;
        if (!container) return;

        this.unbindPortalRouterLinks?.();
        this.unbindPortalRouterLinks = bindRouterLinks(container, { selector: '[route]' });
    }

    bindRouterLinks() {
        const parent = this.parentElement;
        if (!parent) return;

        this.unbindRouterLinks?.();
        this.unbindRouterLinks = bindRouterLinks(parent, { selector: '[route]' });
    }

    /**
     * Handles the click event on the MenuItem.
     * @param {object} e
     */
    clickHandler = (e) => {
        if (this.hasAttribute('disabled')) return;
        switch (this.variant) {
            case 'NAV':
                if (!this.collapse && this.hasSubmenu) {
                    this.submenuToggle(e);
                    this.hideSubmenu();
                    e.stopPropagation();
                } else {
                    event.dispatchCustomEvent(this, 'wje-menu-item:click');
                    event.dispatchCustomEvent(this, this.dialog);
                }
                break;
            case 'CONTEXT':
                if (!this.collapse && this.hasSubmenu) {
                    let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
                    if (submenuElements?.hasAttribute('active')) {
                        this.shouldHideSubmenu(e);
                    } else {
                        this.activateSubmenu(e);
                        this.showSubmenu(e);
                    }
                } else {
                    event.dispatchCustomEvent(this, 'wje-menu-item:click');
                    event.dispatchCustomEvent(this, this.dialog);
                }

                break;
        }
    }

    /**
     * Checks if the submenu should be hidden based on the event.
     * @param {Event} e The event object.
     */
    shouldHideSubmenu = (e) => {
        if (this.collapse || (this.variant === 'CONTEXT' && this.hasSubmenu)) {
            if ((e.relatedTarget && this.contains(e.relatedTarget)) || (this.variant === 'NAV' && !this.collapse)) {
                return;
            }

            this.deactivateSubmenu();
            this.hideSubmenu();
        }
    };

    /**
     * Creates a tooltip for the MenuItem when it is collapsed.
     * @param {HTMLElement} native The native MenuItem element.
     * @returns {HTMLElement} The tooltip element.
     */
    collapseItem(native) {
        let tooltipStart = document.createElement('slot');
        tooltipStart.setAttribute('slot', 'start');
        tooltipStart.setAttribute('name', 'tooltip-start');

        let tooltipEnd = document.createElement('slot');
        tooltipEnd.setAttribute('slot', 'end');
        tooltipEnd.setAttribute('name', 'tooltip-end');

        let tooltip = document.createElement('wje-tooltip');
        tooltip.setAttribute('content', this.getTextFromElement(this));
        tooltip.setAttribute('placement', 'right');
        tooltip.setAttribute('offset', this.offset || '0');

        tooltip.appendChild(tooltipStart);
        tooltip.appendChild(tooltipEnd);
        tooltip.appendChild(native);

        return tooltip;
    }

    /**
     * Dispatches a mousemove event.
     */
    dispatchMove = (e) => {
        this.style.setProperty('--wje-menu-item-safe-triangle-cursor-x', `${e.clientX}px`);
        this.style.setProperty('--wje-menu-item-safe-triangle-cursor-y', `${e.clientY}px`);
    };

    /**
     * Dispatches a reposition event.
     */
    dispatchReposition = (e) => {
        // ak nemame submenu tak to ukoncime
        if (this.submenu.assignedNodes().length === 0) return;

        let submenu = this.submenu.assignedNodes()[0];
        const { left, top, width, height } = submenu.getBoundingClientRect();

        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-start-x', `${left}px`);
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-start-y', `${top}px`);
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-end-x', `${left}px`);
        this.style.setProperty('--wje-menu-item-safe-triangle-submenu-end-y', `${top + height}px`);
    };

    /**
     * Shows the submenu of the MenuItem.
     */
    showSubmenu() {
        this.tabIndex = -1;
        if (this.hasSubmenu) {
            this.popup?.show();
            this.classList.add('expanded-submenu');
            this.native.classList.add('expanded-submenu');
            this.syncAria();
        }
    }

    /**
     * Hides the submenu of the MenuItem.
     */
    hideSubmenu() {
        this.tabIndex = 0;
        if (this.hasSubmenu) {
            this.popup?.hide();
            this.classList.remove('expanded-submenu');
            this.native.classList.remove('expanded-submenu');
            this.syncAria();
        }
    }

    /**
     * Toggles the active state of the submenu element.
     * If the submenu is not active, it sets the "active" attribute.
     * If the submenu is already active, it removes the "active" attribute.
     * @param {Event} e The event object.
     */
    submenuToggle(e) {
        if (this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (!submenuElements.hasAttribute('active')) {
                submenuElements.setAttribute('active', '');
                this.syncAria();
            } else {
                if (this === e.target) submenuElements.removeAttribute('active');
                this.syncAria();
            }
        }
    }

    /**
     * Deactivates the submenu by removing the "active" attribute.
     */
    deactivateSubmenu() {
        if (this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (submenuElements?.hasAttribute('active')) {
                submenuElements?.removeAttribute('active');
                this.syncAria();
            }
        }
    }

    /**
     * Activates the submenu of the menu item.
     */
    activateSubmenu() {
        if (this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (!submenuElements?.hasAttribute('active')) {
                submenuElements?.setAttribute('active', '');
                this.syncAria();
            }
        }
    }

    /**
     * Gets the text from the element and returns it.
     */
    beforeDisconnect() {
        document.removeEventListener('wje-router:rebind', this.rebindRouterLinks);

        this.removeEventListener('mousemove', this.dispatchMove);
        this.removeEventListener('wje-popup:reposition', this.dispatchReposition);

        event.removeListener(this, 'mouseenter', null, this.mouseenterHandler);
        event.removeListener(this, 'mouseleave', null, this.shouldHideSubmenu);
        event.removeListener(this, 'focusout', null, this.shouldHideSubmenu);
        event.removeListener(this, 'click', null, this.clickHandler);

        this.unbindRouterLinks?.();
        this.unbindPortalRouterLinks?.();
    }

    /**
     * Extracts and returns the concatenated text content from all text nodes within the specified element.
     * @param {HTMLElement} element The HTML element from which to extract text content.
     * @returns {string} The concatenated and trimmed text content from the element's text nodes.
     */
    getTextFromElement(element) {
        let text = '';
        for (let node of element.childNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                text += node.textContent;
            }
        }
        return text.trim();
    }

    /**
     * Dispatches a custom event with specified parameters.
     * This method uses the `customEvent` and `customEventParameters` properties
     * to create and dispatch a `CustomEvent`. The event is configured to be
     * composed and bubbles up through the DOM.
     * @returns {void} This method does not return a value.
     */
    #populateCustomEvent() {
        this.dispatchEvent(
          new CustomEvent(this.customEvent, { detail: this.customEventParameters, composed: true, bubbles: true })
        );
    }

    handleActiveClick = (e) => {
        const target = e.target.closest('wje-menu-item');
        if (!target) return;

        let rootMenu = target.closest('wje-menu');
        let currentMenu = rootMenu;

        // Nájdite najvyšší rodičovský wje-menu, ktorý obsahuje tento menu-item
        while (currentMenu?.parentElement) {
            const parent = currentMenu.parentElement.closest?.('wje-menu');
            if (!parent) break;
            rootMenu = parent;
            currentMenu = parent;
        }

        // Ak je item v portálovanom submenu, pôvodný closest nemusí nájsť root menu.
        // Skúsime ho získať z composedPath a vystúpiť na najvyšší <wje-menu>.
        if (!rootMenu) {
            const path = typeof e.composedPath === 'function' ? e.composedPath() : [];
            let firstMenuInPath = path.find(n => n && n.tagName === 'WJE-MENU');
            if (firstMenuInPath) {
                let top = firstMenuInPath;
                while (top && top.parentElement) {
                    const parent = top.parentElement.closest?.('wje-menu');
                    if (!parent) break;
                    top = parent;
                }
                rootMenu = top;
            }
        }

        // Ak stále nemáme rootMenu, nevieme kde aplikovať active-class
        if (!rootMenu) return;

        // Odstráň všetky existujúce triedy z predchádzajúcich kliknutí
        rootMenu.querySelectorAll('wje-menu-item').forEach(item => {
            const activeClass = item.getAttribute('active-class');
            if (activeClass) item.classList.remove(activeClass);
        });

        // Pridaj active-class všetkým nadradeným menu-itemom vrátane targetu
        let current = target;
        while (current && current.tagName === 'WJE-MENU-ITEM') {
            const activeClass = current.getAttribute('active-class');
            if (activeClass) current.classList.add(activeClass);

            // nájdi najbližší parent wje-menu
            const parentMenu = current.closest('wje-menu');
            if (!parentMenu) break;

            // pokračuj na menu-item, ktorý má ako submenu tento parentMenu
            const candidate = parentMenu.closest('wje-menu-item');
            if (!candidate) break;

            current = candidate;
        }
    }
}
