import { arrow, autoUpdate, computePosition, flip, offset, size } from '@floating-ui/dom';

import { default as WJElement, event } from '../wje-element/element.js';
import styles from './styles/styles.css?inline';

/**
 * `Popup` is a custom web component that represents a popup.
 * @summary This element represents a popup.
 * @documentation https://elements.webjet.sk/components/popup
 * @status stable
 * @augments {WJElement}
 * @csspart native - The native part of the popup.
 * @slot anchor - The slot for the anchor of the popup.
 * @slot arrow - The slot for the arrow of the popup.
 * @slot - The default slot for the popup.
 * // @fires wje-popup:reposition - Event fired when the popup is repositioned.
 * // @fires wje-popup:show - Event fired when the popup is shown.
 * // @fires wje-popup:hide - Event fired when the popup is hidden.
 * @tag wje-popup
 */
export default class Popup extends WJElement {
    /**
     * Creates an instance of Popup.
     * @class
     */
    constructor() {
        super();
        this._manual = false;
    }

    set loader(value) {
        if(value) {
            this.setAttribute('loader', '');
        } else {
            this.removeAttribute('loader');
        }
    }

    get loader() {
        return this.hasAttribute('loader');
    }

    /**
     * Sets the manual property of the popup.
     * @param {boolean} value The value to set.
     */
    set manual(value) {
        if(value) {
            this.setAttribute('manual', '');
        } else {
            this.removeAttribute('manual');
        }
    }

    /**
     * Gets the manual property of the popup.
     * @returns {boolean} The value of the manual property.
     */
    get manual() {
        return this.hasAttribute('manual');
    }

    /**
     * Sets or removes the 'portal' attribute on the element based on the provided value.
     * If the value is truthy, the 'portal' attribute will be added.
     * If the value is falsy, the 'portal' attribute will be removed.
     * @param {boolean} value Determines whether the 'portal' attribute should be added or removed.
     */
    set portal(value) {
        if (value) this.setAttribute('portal', '');
        else this.removeAttribute('portal');
    }

    /**
     * Returns whether the 'portal' attribute is present on the element.
     * @returns {boolean} True if the 'portal' attribute exists, otherwise false.
     */
    get portal() {
        return this.hasAttribute('portal');
    }

    className = 'Popup';

    /**
     * Returns the CSS styles for the component.
     * @static
     * @returns {CSSStyleSheet} The CSS styles for the component.
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

    afterDisconnect() {
        event.removeListener(this.anchorEl, 'click', this.manualCallback);
        document.removeEventListener('click', this.clickHandler, { capture: true });
        this._restoreContentFromPortal();
        this.cleanup?.();
    }

    beforeDraw(context, store, params) {
        this.cleanup?.();
    }

    /**
     * Draws the component for the popup.
     * @returns {DocumentFragment}
     */
    draw() {
        let fragment = document.createDocumentFragment();

        let slotAnchor = document.createElement('slot');
        slotAnchor.setAttribute('name', 'anchor');

        let slotArrow = document.createElement('slot');
        slotArrow.setAttribute('name', 'arrow');

        let native = document.createElement('div');
        native.setAttribute('part', 'native');
        native.classList.add('native-popup');

        let slot = document.createElement('slot');

        let loader = document.createElement('div');
        loader.classList.add('popup-loader', 'overlay');
        loader.setAttribute('part', 'loader');
        loader.textContent = 'Loading...';

        if (this.loader) native.append(loader);

        native.append(slot);
        native.append(slotArrow);

        fragment.append(slotAnchor);
        fragment.append(native);

        this.slotAnchor = slotAnchor;
        this.slotArrow = slotArrow;
        this.native = native;
        this.loaderEl = loader;

        return fragment;
    }

    /**
     * After Draws the component.
     */
    afterDraw() {
        this.setAnchor();

        this.addEventListener('wje-popup:content-ready', () => {
            debugger
          this.markContentReady();
        }, { once: true });

        if (this.hasAttribute('active')) this.show(false);
        if (!this.hasAttribute('active')) this.hide(false);
    }

    /**
     * Sets the anchor for the popup.
     * Adds a click event listener to the anchor element.
     */
    setAnchor() {
        if (this.slotAnchor && typeof this.anchor === 'string') {
            const root = this.getRootNode();
            this.anchorEl = root.querySelector('#' + this.anchor);
        } else if (this.slotAnchor instanceof HTMLSlotElement) {
            this.anchorEl = this.slotAnchor.assignedElements({ flatten: true })[0];
        }

        if (this.manual) {
            event.addListener(this.anchorEl, 'click', null, this.manualCallback, { stopPropagation: true });
        }
    }

    manualCallback = (e) => {
        if (this.hasAttribute('disabled')) return;

        this.showHide();
    };

    clickHandler = (e) => {
        const path = e.composedPath();
        const inside = path.includes(this) || (this.floatingEl && path.includes(this.floatingEl));
        if (!inside && this.hasAttribute('active')) this.hide(true);
    };
    get floatingEl() {
        return this._floatingEl || this.native;
    }

    /**
     * Toggles the active attribute of the popup.
     */
    showHide() {
        if (this.hasAttribute('active')) {
            this.hide();
        } else {
            event.dispatchCustomEvent(this, 'wje-popup:beforeshow');
            this.show();
            event.dispatchCustomEvent(this, 'wje-popup:aftershow');
        }
    }

    /**
     * Repositions the popup.
     * Uses the floating-ui library to compute the position.
     */
    reposition() {
        const middleware = [];

        this.offsetCalc = +this.offset || 0;

        if (this.portal && this._portaled && this.floatingEl) {
            this.arrow = this.floatingEl.querySelector('[slot="arrow"]');
        } else if (this.slotArrow instanceof HTMLSlotElement) {
            this.arrow = this.slotArrow.assignedElements({ flatten: true })[0];
        }

        if (this.arrow) {
            middleware.push(
                arrow({
                    element: this.arrow,
                })
            );
            this.offsetCalc = Math.sqrt(2 * this.arrow.offsetWidth ** 2) / 2 + +this.offset;
        }

        middleware.push(offset(this.offsetCalc));

        middleware.push(flip());

        if (this.hasAttribute('size')) {
            middleware.push(
                size({
                    apply({ availableWidth, availableHeight, elements }) {
                        Object.assign(elements.floating.style, {
                            width: `${elements.reference.offsetWidth}px`,
                        });
                    },
                })
            );
        }

        computePosition(this.anchorEl, this.floatingEl, {
            placement: this.placement || 'bottom',
            strategy: 'fixed',
            middleware: middleware,
        }).then(({ x, y, middlewareData, placement, strategy }) => {
            this.floatingEl.style.setProperty('--wje-popup-left', x + 'px');
            this.floatingEl.style.setProperty('--wje-popup-top', y + 'px');

            this.floatingEl.style.position = strategy;

            if (this.arrow) {
                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[placement];

                if (middlewareData.arrow) {
                    const { width, height } = this.floatingEl.getBoundingClientRect();
                    let osX = middlewareData.arrow.x;
                    let osY = middlewareData.arrow.y;

                    Object.assign(this.arrow.style, {
                        left: osX !== null && osX !== undefined ? `${width / 2 - this.arrow.offsetWidth / 2}px` : '',
                        top: osY !== null && osY !== undefined ? `${height / 2 - this.arrow.offsetHeight / 2}px` : '',
                        [staticSide]: `${-this.arrow.offsetHeight / 2}px`,
                    });
                }
            }
        });

        event.dispatchCustomEvent(this, 'wje-popup:reposition', {
            data: { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
            context: this,
            event: this,
        });
    }

    /**
     * Mounts content to a portal container by creating or ensuring a portal root and mirroring
     * the host's classes, attributes, and slot contents onto the portal. This method manages the
     * movement of default and arrow slot content into the portal shadow DOM, while also setting
     * up necessary mutation observers to keep attributes in sync.
     * @returns {void} Does not return a value.
     */
    _mountContentToPortal() {
        if (this._portaled) return;
        this._ensurePortalRoot();

        // Create/ensure a panel in the portal shadow that mirrors the native container
        if (!this._portalNative) {
            this._portalNative = document.createElement('div');
            this._portalNative.setAttribute('part', 'native');
            this._portalNative.classList.add('native-popup');
        }
        this._portalShadow.append(this._portalNative);

        // Mirror host classes/attributes onto the portal host so :host(...) CSS works
        const mirrorAll = () => {
            for (const { name } of Array.from(this._portalContainer.attributes)) {
                this._portalContainer.removeAttribute(name);
            }
            for (const attr of Array.from(this.attributes)) {
                this._portalContainer.setAttribute(attr.name, attr.value ?? '');
            }
            this._portalContainer.setAttribute('class', this.getAttribute('class') || '');
        };
        mirrorAll();
        this._portalAttrObserver = new MutationObserver((records) => {
            for (const r of records) {
                if (r.type === 'attributes') {
                    const name = r.attributeName;
                    const val = this.getAttribute(name);
                    if (val === null) this._portalContainer.removeAttribute(name);
                    else this._portalContainer.setAttribute(name, val);
                }
            }
        });
        this._portalAttrObserver.observe(this, { attributes: true });

        // Move default slot content
        const defaultSlot = this.shadowRoot.querySelector('slot:not([name])');
        const defNodes = (defaultSlot ? defaultSlot.assignedNodes({ flatten: true }) : [])
            .filter(n => n && n.nodeType === Node.ELEMENT_NODE || n && n.nodeType === Node.TEXT_NODE);
        this._defPlaceholders = [];
        for (const n of defNodes) {
            const ph = document.createComment('wje-portal-default');
            this._defPlaceholders.push({ node: n, ph });
            n.parentNode && n.parentNode.insertBefore(ph, n.nextSibling);
            this._portalNative.append(n);
        }

        // Move arrow slot content if any
        const arrowNodes = (this.slotArrow instanceof HTMLSlotElement ? this.slotArrow.assignedNodes({ flatten: true }) : [])
            .filter(n => n && n.nodeType === Node.ELEMENT_NODE || n && n.nodeType === Node.TEXT_NODE);
        this._arrowPlaceholders = [];
        for (const n of arrowNodes) {
            const ph = document.createComment('wje-portal-arrow');
            this._arrowPlaceholders.push({ node: n, ph });
            n.parentNode && n.parentNode.insertBefore(ph, n.nextSibling);
            this._portalNative.append(n);
        }

        this._floatingEl = this._portalNative;
        this._portaled = true;
    }

    /**
     * Restores the content previously moved to a portal back to its original location.
     * This method handles restoring default slot content, arrow placeholders, disconnecting
     * attribute mirroring observers, and cleaning up elements and containers related to the portal.
     * Ensures all placeholders and native portal elements are properly removed from the DOM.
     * @returns {void} Does not return a value.
     */
    _restoreContentFromPortal() {
        if (!this._portaled) return;

        // Restore default slot content
        if (Array.isArray(this._defPlaceholders)) {
            for (const { node, ph } of this._defPlaceholders) {
                if (ph && ph.parentNode) {
                    ph.parentNode.insertBefore(node, ph);
                    ph.remove();
                }
            }
        }
        this._defPlaceholders = undefined;

        // Restore arrow content
        if (Array.isArray(this._arrowPlaceholders)) {
            for (const { node, ph } of this._arrowPlaceholders) {
                if (ph && ph.parentNode) {
                    ph.parentNode.insertBefore(node, ph);
                    ph.remove();
                }
            }
        }
        this._arrowPlaceholders = undefined;

        // Disconnect attribute mirroring
        if (this._portalAttrObserver) {
            this._portalAttrObserver.disconnect();
            this._portalAttrObserver = null;
        }

        // Remove portal native from DOM
        if (this._portalNative && this._portalNative.parentNode) {
            this._portalNative.remove();
        }

        this._floatingEl = undefined;
        this._portaled = false;

        // Optionally remove the portal container completely
        if (this._portalContainer) {
            this._portalContainer.remove();
            this._portalContainer = null;
            this._portalShadow = null;
        }
    }

    /**
     * Ensures that a portal root is created and initialized properly with a shadow DOM and attached styles.
     * If the portal root already exists, the method exits early.
     * The method creates a `div` element in the document body and attaches a shadow DOM to it.
     * It also applies the required styles to the shadow DOM, either using constructable stylesheets
     * or by appending a `<style>` element. Additionally, it copies CSS custom properties from the
     * component's computed styles to the portal host to ensure proper style resolution.
     * @returns {void} This method does not return a value.
     */
    _ensurePortalRoot() {
        if (this._portalContainer && this._portalShadow) return;

        const host = document.createElement('div');
        host.setAttribute('data-wje-popup-portal', '');
        const shadow = host.attachShadow({ mode: 'open' });

        // Attach styles in the portal shadow
        const sheetCandidate = this.constructor.cssStyleSheet;
        try {
            if (sheetCandidate instanceof CSSStyleSheet) {
                shadow.adoptedStyleSheets = [sheetCandidate];
            } else if (typeof sheetCandidate === 'string' && 'adoptedStyleSheets' in Document.prototype) {
                const sheet = new CSSStyleSheet();
                sheet.replaceSync(sheetCandidate);
                shadow.adoptedStyleSheets = [sheet];
            } else {
                const style = document.createElement('style');
                style.textContent = typeof sheetCandidate === 'string' ? sheetCandidate : (sheetCandidate?.toString?.() || '');
                shadow.append(style);
            }
        } catch (e) {
            // Fallback if constructable stylesheets are not supported
            const style = document.createElement('style');
            style.textContent = typeof sheetCandidate === 'string' ? sheetCandidate : (sheetCandidate?.toString?.() || '');
            shadow.append(style);
        }

        // Copy CSS custom properties from the component to the portal host so variables resolve
        const comp = getComputedStyle(this);
        for (let i = 0; i < comp.length; i++) {
            const prop = comp[i];
            if (prop.startsWith('--')) {
                host.style.setProperty(prop, comp.getPropertyValue(prop));
            }
        }

        document.body.appendChild(host);
        this._portalContainer = host;
        this._portalShadow = shadow;
    }

    /**
     * Displays the popup by portaling the content, managing the loader state, and attaching event handlers.
     * Optionally dispatches a custom event when the popup is shown.
     * @param {boolean} [dispatchEvent] Indicates whether to dispatch a custom event ('wje-popup:show') when the popup is shown.
     * @returns {void} Does not return any value.
     */
    show(dispatchEvent = true) {
        debugger
        // Portal the slotted content to body via a shadow portal (keeps styles intact)
        if (this.portal) {
            this._mountContentToPortal();
        }

        if (this.loader) {
            this.floatingEl?.classList?.add('loading');
            this.loaderEl?.classList?.remove('fade-out');
            this.floatingEl?.prepend(this.loaderEl);
        }

        if (dispatchEvent) {
            event.dispatchCustomEvent(this, 'wje-popup:show');
        }

        if (this.anchorEl && this.floatingEl) {
            this.floatingEl?.classList?.add('popup-active');

            this.cleanup?.();
            this.cleanup = autoUpdate(this.anchorEl, this.floatingEl, () => {
                this.reposition();
            });

            document.addEventListener('click', this.clickHandler, { capture: true });
        }

        if (!this.hasAttribute('active')) {
            this.setAttribute('active', '');
        }
    }

    /**
     * Hides the popup.
     * Removes the popup-active class from the floating element.
     * Cleans up the auto update for repositioning.
     */
    hide(dispatchEvent = true) {
        if (dispatchEvent) {
            event.dispatchCustomEvent(this, 'wje-popup:hide');
        }

        this.floatingEl?.classList?.remove('popup-active');

        this.cleanup?.();
        this.cleanup = undefined;

        document.removeEventListener('click', this.clickHandler, { capture: true });

        // If we portaled the content, return it now
        this._restoreContentFromPortal();

        if (this.hasAttribute('active')) {
            this.removeAttribute('active');
        }
    }

    /**
     * Removes the active attribute when the popup is hidden.
     */
    handleHide = () => {
        this.removeAttribute('active');
    };

    markContentReady() {
      this.native.classList.remove('loading');
      if (this.loader) {
        this.loaderEl.classList.add('fade-out');
        setTimeout(() => {
          this.loaderEl?.remove();
          this.loader = false;
        }, 300);
      }
    }
}
