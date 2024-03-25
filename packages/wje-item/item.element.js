import { default as WJElement, WjElementUtils } from "../wje-element/element.js";

import styles from "./scss/styles.scss?inline";

export default class Item extends WJElement {
	constructor() {
		super();

		this.labelColorStyles = {};
		this.itemStyles = new Map();
		this.inheritedAriaAttributes = {};
		this.multipleInputs = false;
		this.focusable = true;
		this.button = false;
		this.detailIcon = ``; // TODO icon
		this.disabled = false;
		this.counter = false;
		this.routerDirection = 'forward';
		this.type = 'button';
	}

	isClickable() {
		return this.hasAttribute('href') || this.button;
	}

	className = "Item";

	static get cssStyleSheet() {
		return styles;
	}

	setupAttributes() {
		this.isShadowRoot = 'open';
	}

	beforeDraw( context, store, params ) {}

	draw( context, store, params ) {
		const TagType = this.isClickable() ? this.hasAttribute('href') === undefined ? 'button' : 'a' : 'div';

		if(this.hostContext('wje-list', this)) {
			this.classList.add('wje-item-list');
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