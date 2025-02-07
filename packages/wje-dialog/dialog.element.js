import { default as WJElement, event } from '../wje-element/element.js';
import '../wje-button/button.element.js';
import '../wje-icon/icon.element.js';
import styles from './styles/styles.css?inline';

/**
 * `Dialog` is a custom web component that represents a dialog.
 * @summary This element represents a dialog.
 * @documentation https://elements.webjet.sk/components/dialog
 * @status stable
 * @augments {WJElement}
 * @slot header - Slot for the header content.
 * @slot body - Slot for the body content.
 * @slot footer - Slot for the footer content.
 * @csspart dialog - The dialog wrapper.
 * @csspart header - The header of the dialog.
 * @csspart body - The body of the dialog.
 * @csspart footer - The footer of the dialog.
 * @csspart close - The close button of the dialog.
 * @cssproperty [--wje-dialog-background=var(--wje-background-color)] - Specifies the background color of the dialog.
 * @cssproperty [--wje-dialog-color=var(--wje-text-color)] - Defines the text color within the dialog.
 * @cssproperty [--wje-dialog-padding=1rem] - Controls the padding inside the dialog.
 * @cssproperty [--wje-dialog-border-radius=0.5rem] - Sets the border radius for the dialog's corners.
 * @cssproperty [--wje-dialog-box-shadow=0 2px 10px rgba(0, 0, 0, 0.1)] - Applies a shadow effect to the dialog.
 * @tag wje-dialog
 */

export default class Dialog extends WJElement {
    /**
     * @class
     */
    constructor() {
        super();		
    }

    /**
     * Sets the headline of the dialog.
     * @param value
     */
    set placement(value) {
        this.setAttribute('placement', value);
    }

    /**
     * Gets the headline of the dialog.
     * @returns {string|string}
     */
    get placement() {
        return this.getAttribute('placement') || 'slide-up';
    }

    /**
     * Sets the headline of the dialog.
     * @param value
     */
    set async(value) {
        this.setAttribute('async', '');
    }

    /**
     * Gets the headline of the dialog.
     * @returns {boolean}
     */
    get async() {
        return this.hasAttribute('async');
    }

    /**
     * Sets the headline of the dialog.
     * @param value
     */
    set closeHidden(value) {
        if (value) this.setAttribute('close-hidden', '');
    }

    /**
     * Gets the headline of the dialog.
     * @returns {boolean}
     */
    get closeHidden() {
        return !!this.hasAttribute('close-hidden');
    }

    /**
     * Sets the headline of the dialog.
     * @type {string}
     */
    className = 'Dialog';

    /**
     * Returns the CSS styles for the component.
     * @returns {*}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     * @returns {*[]}
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
     * Draws the component.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add('fade', this.placement, params.size);

        let dialog = document.createElement('dialog');
        dialog.classList.add('modal-dialog');

        fragment.appendChild(dialog);

        this.dialog = dialog;
        return fragment;
    }

    /**
     * Creates the dialog body.
     * @param dialog
     */
    htmlDialogBody(dialog) {
        let icon = document.createElement('wje-icon');
        icon.setAttribute('name', 'x');
        icon.setAttribute('slot', 'icon-only');

        let close = document.createElement('wje-button');
        close.setAttribute('fill', 'link');
        close.setAttribute('size', 'small');
        close.setAttribute('part', 'close');
        close.addEventListener('click', (e) => {
            this.close(e);
        });
        close.appendChild(icon);

        let header = document.createElement('div');
        header.setAttribute('part', 'header');
        header.classList.add('dialog-header');
        if (this.hasAttribute('headline'))
            header.innerHTML = `<span part="headline">${this.getAttribute('headline')}</span>`;

        let slotHeader = document.createElement('slot');
        slotHeader.setAttribute('name', 'header');

        const headerActions = document.createElement('div');
        headerActions.classList.add('header-actions');
        headerActions.setAttribute('part', 'header-actions');
        headerActions.appendChild(slotHeader);

        header.appendChild(headerActions);
        if (!this.closeHidden) header.appendChild(close);

        let contentSlot = document.createElement('slot');

        let body = document.createElement('div');
        body.setAttribute('part', 'body');
        body.classList.add('dialog-content');
        body.appendChild(contentSlot);

        let footer = document.createElement('div');
        footer.setAttribute('part', 'footer');
        footer.classList.add('dialog-footer');
        footer.innerHTML = '';

        let slotFooter = document.createElement('slot');
        slotFooter.setAttribute('name', 'footer');

        footer.appendChild(slotFooter);

        dialog.appendChild(header);
        dialog.appendChild(body);
        dialog.appendChild(footer);
    }

    /**
     * Closes the dialog.
     * @param e
     */
    close(e) {
        this.onClose(e);
    }

    /**
     * Draws the component after it has been drawn.
     * @param {object} context The context for drawing.
     * @param {object} store The store for drawing.
     * @param {object} params The parameters for drawing.
     */
    afterDraw(context, store, params) {
        if (params.trigger) {
            event.addListener(document, params.trigger, null, this.onOpen);
        }

        this.dialog.addEventListener('close', this.onClose);
    }

    /**
     * Before the component is disconnected.
     */
    beforeDisconnect() {
        if (this.params?.trigger) {
            event.removeListener(document, this.params?.trigger, null, this.onOpen);
        }

        this.dialog.removeEventListener('close', this.onClose);
    }

    /**
     * Before the dialog opens.
     */
    beforeOpen() {
        // Hook for extending behavior before the dialog opens
    }

    /**
     * After the dialog opens.
     */
    afterOpen() {
        // Hook for extending behavior after the dialog opens
    }

    /**
     * Before the dialog closes.
     */
    beforeClose() {
        // Hook for extending behavior before the dialog closes
    }

    /**
     * After the dialog closes.
     */
    afterClose() {
        // Hook for extending behavior after the dialog closes
    }

    /**
     * Opens the dialog.
     * @param e
     */
    onOpen = (e) => {
        this.dialog.innerHTML = '';

        Promise.resolve(this.beforeOpen(this, e)).then((res) => {
            this.htmlDialogBody(this.dialog);

            this.dialog.showModal(); // Now open the dialog

            if (this.dialog.open) {
                Promise.resolve(this.afterOpen(this, e));
            }
        });
    };

    /**
     * Closes the dialog.
     * @param {object} e
     */
    onClose = (e) => {
        Promise.resolve(this.beforeClose(this, e)).then((res) => {
            this.dialog.close(); // Now close the dialog

            if (this.dialog.open) {
                Promise.resolve(this.afterClose(this, e));
            }
        });
    };

	/**
	 * Registers an event listener on the provided button that triggers a blocking UI element
	 * and executes a given promise when the button is clicked.
	 *
	 * @param {HTMLElement} button - The button element to attach the event listener to.
	 * @param {Function} promise - A function that returns a promise to be executed when the button is clicked.
	 */
	registerBlockingEvent(button, promise) {
		button.addEventListener('wje-button:click', async (e) => {
			console.log('Button clicked');
			
			let blockingElement = document.createElement('div');
			blockingElement.classList.add('blocking-element');

			let icon = document.createElement('wje-icon');
			icon.setAttribute('name', 'loader-2');
			icon.setAttribute('size', '2x-large');

			blockingElement.appendChild(icon);

			let scrollOffset = this.dialog.scrollTop;
			blockingElement.style.top = `${scrollOffset}px`;
			blockingElement.style.bottom = `-${scrollOffset}px`;

			this.dialog.appendChild(blockingElement);

			await promise().then((res) => {
				this.close();
				blockingElement.remove();
			}).catch((err) => {
				console.error(err);
				blockingElement.remove();
			});
		});
	}
}
