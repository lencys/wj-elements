import { default as WJElement, WjElementUtils } from "../wj-element/wj-element.js";

import styles from "./scss/styles.scss?inline";
export class Item extends WJElement {
	constructor() {
		super();

		this.labelColorStyles = {};
		this.itemStyles = new Map();
		this.inheritedAriaAttributes = {};
		this.multipleInputs = false;
		this.focusable = true;
		/**
		 * If `true`, a button tag will be rendered and the item will be tappable.
		 */
		this.button = false;
		/**
		 * The icon to use when `detail` is set to `true`.
		 */
		this.detailIcon = ``; // TODO icon
		/**
		 * If `true`, the user cannot interact with the item.
		 */
		this.disabled = false;
		/**
		 * If `true`, a character counter will display the ratio of characters used and the total character limit. Only applies when the `maxlength` property is set on the inner `ion-input` or `ion-textarea`.
		 * @deprecated Use the `counter` property on `ion-input` or `ion-textarea` instead.
		 */
		this.counter = false;
		/**
		 * When using a router, it specifies the transition direction when navigating to
		 * another page using `href`.
		 */
		this.routerDirection = 'forward';
		/**
		 * The type of the button. Only used when an `onclick` or `button` property is present.
		 */
		this.type = 'button';
	}

	isClickable() {
		return this.hasAttribute('href') || this.button;
	}

	static get cssStyleSheet() {
		return styles;
	}

	setupAttributes() {
		this.isShadowRoot = 'open';
	}

	beforeDraw( context, store, params ) {}

	draw( context, store, params ) {
		const TagType = this.isClickable() ? this.hasAttribute('href') === undefined ? 'button' : 'a' : 'div';

		if(this.hostContext('wj-list', this)) {
			this.classList.add('wj-item-list');
		}
		//  ${WjElementUtils.attributesToString(WjElementUtils.getAttributes(this))}
		return `<${TagType} class="item-native" part="native">
			<slot name="start"></slot>
			<div class="item-inner">
					<div class="input-wrapper">
							<slot></slot>
					</div>
					<slot name="end"></slot>
			</div>
			<div class="item-highlight"></div>
    </${TagType}>
		<div class="item-bottom">
				<slot name="error"></slot>
				<slot name="helper"></slot>
		</div>`;
	}

	hostContext = (selector, el) => {
		return el.closest(selector) !== null;
	}
}

customElements.get("wj-item") ||  window.customElements.define('wj-item', Item);