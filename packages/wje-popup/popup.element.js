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
        let clickToHost = e.composedPath().some((el) => el === this);

        if (!clickToHost) {
            if (this.hasAttribute('active')) this.hide(true);
        }
    };

    /**
     * Toggles the active attribute of the popup.
     */
    showHide() {
        if (this.hasAttribute('active')) {
            this.hide();
        } else {
            event.dispatchCustomEvent(this, 'wje-popup:aftershow');
            this.show();
        }
    }

    /**
     * Repositions the popup.
     * Uses the floating-ui library to compute the position.
     */
    reposition() {
        const middleware = [];

        this.offsetCalc = +this.offset || 0;

        if (this.slotArrow instanceof HTMLSlotElement) {
            this.arrow = this.slotArrow.assignedElements({ flatten: true })[0];

            if (this.arrow) {
                middleware.push(
                    arrow({
                        element: this.arrow,
                    })
                );
                this.offsetCalc = Math.sqrt(2 * this.arrow.offsetWidth ** 2) / 2 + +this.offset;
            }
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

        computePosition(this.anchorEl, this.native, {
            placement: this.placement || 'bottom',
            strategy: 'fixed',
            middleware: middleware,
        }).then(({ x, y, middlewareData, placement, strategy }) => {
            this.native.style.setProperty('--wje-popup-left', x + 'px');
            this.native.style.setProperty('--wje-popup-top', y + 'px');

            this.native.style.position = strategy;

            if (this.arrow) {
                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[placement];

                if (middlewareData.arrow) {
                    const { width, height } = this.native.getBoundingClientRect();
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
     * Shows the popup.
     * Adds the popup-active class to the native element.
     * Sets up auto update for repositioning.
     */
    show(dispatchEvent = true) {
        if (this.loader) {
          this.native?.classList?.add('loading');
          this.loaderEl?.classList?.remove('fade-out');
          this.native.prepend(this.loaderEl);
        }

        if (dispatchEvent) {
            event.dispatchCustomEvent(this, 'wje-popup:show');
        }

        if (this.anchorEl && this.native) {
            this.native?.classList?.add('popup-active');

            this.cleanup?.();
            this.cleanup = autoUpdate(this.anchorEl, this.native, () => {
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
     * Removes the popup-active class from the native element.
     * Cleans up the auto update for repositioning.
     */
    hide(dispatchEvent = true) {
        if (dispatchEvent) {
            event.dispatchCustomEvent(this, 'wje-popup:hide');
        }

        this.native?.classList?.remove('popup-active');

        this.cleanup?.();
        this.cleanup = undefined;

        document.removeEventListener('click', this.clickHandler, { capture: true });

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
