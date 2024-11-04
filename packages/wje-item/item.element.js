import { default as WJElement, WjElementUtils } from "../wje-element/element.js";

import styles from "./styles/styles.css?inline";

/**
 * `Item` is a custom web component that represents an item.
 *
 * @summary This element represents an item.
 * @documentation https://elements.webjet.sk/components/item
 * @status stable
 *
 * @extends {WJElement}
 *
 * @part native - The native part
 * @part inner - The inner part
 *
 * @slot start - The start slot
 * @slot end - The end slot
 * @slot error - The error slot
 * @slot helper - The helper slot
 *
 * @cssproperty [--wje-item-background=var(--wje-background)] - The background of the item
 * @cssproperty [--wje-item-color=var(--wje-color)] - The color of the item
 * @cssproperty [--wje-item-padding-start=var(--wje-padding)] - The padding of the item
 * @cssproperty [--wje-item-padding-end=var(--wje-padding)] - The padding of the item
 * @cssproperty [--wje-item-padding-top=var(--wje-padding)] - The padding of the item
 * @cssproperty [--wje-item-padding-bottom=var(--wje-padding)] - The padding of the item
 * @cssproperty [--wje-item-inner-padding-start=var(--wje-padding)] - The padding of the item
 * @cssproperty [--wje-item-inner-padding-end=var(--wje-padding)] - The padding of the item
 * @cssproperty [--wje-item-inner-padding-top=var(--wje-padding)] - The padding of the item
 * @cssproperty [--wje-item-inner-padding-bottom=var(--wje-padding)] - The padding of the item
 * @cssproperty [--wje-item-border-radius=var(--wje-border-radius)] - The border radius of the item
 * @cssproperty [--wje-item-border-width=var(--wje-border-width)] - The border width of the item
 * @cssproperty [--wje-item-border-style=var(--wje-border-style)] - The border style of the item
 * @cssproperty [--wje-item-border-color=var(--wje-border-color)] - The border color of the item
 * @cssproperty [--wje-item-min-height=var(--wje-min-height)] - The min height of the item
 * @cssproperty [--wje-item-transition=var(--wje-transition)] - The transition of the item
 * @cssproperty [--wje-item-inner-box-shadow=var(--wje-box-shadow)] - The box shadow of the item
 *
 * @tag wje-item
 */
export default class Item extends WJElement {
	/**
	 * @constructor
	 * @summary Item constructor
	 */
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

	/**
	 * Returns the CSS styles for the component.
	 * @returns {boolean}
	 */
	isClickable() {
		return this.hasAttribute('href') || this.button;
	}

	/**
	 * @summary Class name
	 * @type {string}
	 */
	className = "Item";

	/**
	 * @summary Get CSS stylesheet
	 * @static
	 * @returns {Object} styles
	 */
	static get cssStyleSheet() {
		return styles;
	}

	/**
	 * @summary Setup attributes
	 */
	setupAttributes() {
		this.isShadowRoot = 'open';
	}

	beforeDraw() {}

	/**
	 * Draws the component.
	 * @param {Object} context - The context for drawing.
	 * @param {Object} store - The store for drawing.
	 * @param {Object} params - The parameters for drawing.
	 * @returns {DocumentFragment}
	 */
	draw() {
		const TagType = this.isClickable() ? this.hasAttribute('href') === undefined ? 'button' : 'a' : 'div';

		if(this.hostContext('wje-list', this)) {
			this.classList.add('wje-item-list');
		}
		//  ${WjElementUtils.attributesToString(WjElementUtils.getAttributes(this))}
		return `<${TagType} class="item-native" part="native">
			<slot name="start"></slot>
			<div class="item-inner">
					<div class="input-wrapper" part="inner">
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

	/**
	 * Returns the list of attributes to observe for changes.
	 * @param selector
	 * @param el
	 * @returns {boolean}
	 */
	hostContext = (selector, el) => {
		return el.closest(selector) !== null;
	}
}