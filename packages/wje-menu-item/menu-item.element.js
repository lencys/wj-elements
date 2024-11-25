import { bindRouterLinks } from 'slick-router/middlewares/router-links.js';

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

        this._collapsible = false;
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
        this.setAttribute('active-class', 'open');
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
        if (
            /*(this.collapse && this.variant === "NAV" && this.hasSubmenu) || */ this.variant === 'CONTEXT' &&
            this.hasSubmenu
        ) {
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

        return fragment;
    }

    /**
     * Adds event listeners after drawing the MenuItem.
     */
    afterDraw() {
        this.unbindRouterLinks = bindRouterLinks(this.parentElement, { selector: false });

        this.addEventListener('mousemove', this.dispatchMove);
        this.addEventListener('wje-popup:reposition', this.dispatchReposition);

        // Event na zobrazenie submenu
        event.addListener(this, 'mouseenter', null, this.mouseenterHandler);
        // Event na zrusenie zobrazenia submenu ked sa klikne mimo
        event.addListener(this, 'mouseleave', null, this.shouldHideSubmenu);
        // Event na zrusenie zobrazenia submenu ked sa klikne mimo
        event.addListener(this, 'focusout', null, this.shouldHideSubmenu);
        event.addListener(this, 'click', null, this.clickHandler);
    }

    mouseenterHandler = (e) => {
        if (this.collapse || (this.variant === 'CONTEXT' && this.hasSubmenu)) {
            if (this.hasAttribute('manual') || (this.variant === 'NAV' && this.collapse)) return;

            this.activateSubmenu(e);

            e.stopPropagation();

            this.showSubmenu();
            // this.focus();
        }
    };

    /**
     * Handles the click event on the MenuItem.
     * @param {object} e
     */
    clickHandler = (e) => {
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
    };

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
            this.popup?.setAttribute('active', '');
            this.classList.add('expanded-submenu');
            this.native.classList.add('expanded-submenu');
        }
    }

    /**
     * Hides the submenu of the MenuItem.
     */
    hideSubmenu() {
        this.tabIndex = 0;
        if (this.hasSubmenu) {
            this.popup?.removeAttribute('active');
            this.classList.remove('expanded-submenu');
            this.native.classList.remove('expanded-submenu');
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
            } else {
                if (this === e.target) submenuElements.removeAttribute('active');
            }
        }
    }

    /**
     * Deactivates the submenu by removing the "active" attribute.
     */
    deactivateSubmenu() {
        if (this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (submenuElements.hasAttribute('active')) {
                submenuElements.removeAttribute('active');
            }
        }
    }

    /**
     * Activates the submenu of the menu item.
     */
    activateSubmenu() {
        if (this.hasSubmenu) {
            let submenuElements = this.submenu.assignedElements({ flatten: true })[0];
            if (!submenuElements.hasAttribute('active')) {
                submenuElements.setAttribute('active', '');
            }
        }
    }

    /**
     * Gets the text from the element and returns it.
     */
    beforeDisconnect() {
        event.removeListener(this, 'mousemove', null, this.dispatchMove);
        event.removeListener(this, 'wje-popup:reposition', null, this.dispatchReposition);
        event.removeListener(this, 'mouseenter', null, this.mouseenterHandler);
        event.removeListener(this, 'mouseleave', null, this.shouldHideSubmenu);
        event.removeListener(this, 'focusout', null, this.shouldHideSubmenu);
        event.removeListener(this, 'click', null, this.clickHandler);

        this.context.innerHTML = '';
        this.unbindRouterLinks?.();
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
}
