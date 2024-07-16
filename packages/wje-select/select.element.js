import { default as WJElement, event } from "../wje-element/element.js";
import Button from "../wje-button/button.js";
import Popup from "../wje-popup/popup.js";
import Icon from "../wje-icon/icon.js";
import Label from "../wje-label/label.js";
import Chip from "../wje-chip/chip.js";
import Input from "../wje-input/input.js";
import Option from "../wje-option/option.js";
import Options from "../wje-options/options.js";

import styles from "./styles/styles.css?inline";

/**
 * `Select` is a custom web component that represents a select input.
 * @summary This element represents a select input.
 * @documentation https://elements.webjet.sk/components/select
 * @status stable
 *
 * @extends {WJElement}
 *
 * @slot - The default slot for the select.
 * @slot anchor - The slot for the anchor.
 * @slot arrow - The slot for the arrow.
 *
 * @csspart native - The native select wrapper.
 * @csspart input - The input field.
 * @csspart clear - The clear button.
 *
 * @cssprop [--wje-select-border-width=1px;] - The border width of the select component.
 * @cssprop [--wje-select-border-style=solid;] - The border style of the select component.
 * @cssprop [--wje-select-border-color=var(--wje-border-color);] - The border color of the select component.
 * @cssprop [--wje-select-options-border-width=1px;] - The border width of the select options.
 * @cssprop [--wje-select-options-border-style=var(--wje-border-style);] - The border style of the select options.
 * @cssprop [--wje-select-options-border-color=var(--wje-border-color);] - The border color of the select options.
 * @cssprop [--wje-select-background=var(--wje-background);] - The background of the select component.
 * @cssprop [--wje-select-line-height=20px;] - The line height of the select component.
 * @cssprop [--wje-select-color=var(--wje-color);] - The color of the select component.
 * @cssprop [--wje-select-border-radius=var(--wje-border-radius-medium);] - The border radius of the select component.
 *
 * @tag wje-select
 */
export default class Select extends WJElement {
    /**
     * Creates an instance of Select.
     *
     * @constructor
     */
    constructor() {
        super();

        this._selected = [];
        this.counterEl = null;
    }

    dependencies = {
        "wje-button": Button,
        "wje-popup": Popup,
        "wje-icon": Icon,
        "wje-label": Label,
        "wje-chip": Chip,
        "wje-input": Input,
        "wje-option": Option,
        "wje-options": Options
    }

    /**
     * Sets the selected value.
     *
     * @param {Array} value - The selected value.
     */
    set selected(value) {
        this._selected = value;
    }

    /**
     * Returns the selected value.
     *
     * @returns {Array} The selected value.
     */
    get selected() {
        return this.getSelected();
    }

    /**
     * Sets the trigger value.
     *
     * @param {string} value - The trigger value.
     */
    set trigger(value) {
        this.setAttribute("trigger", value);
    }

    /**
     * Returns the trigger value.
     *
     * @returns {string} The trigger value.
     */
    get trigger() {
        return this.getAttribute("trigger") || "click";
    }

    className = "Select";

    /**
     * Returns the CSS styles for the component.
     *
     * @static
     * @returns {CSSStyleSheet}
     */
    static get cssStyleSheet() {
        return styles;
    }

    /**
     * Returns the list of attributes to observe for changes.
     *
     * @static
     * @returns {Array<string>}
     */
    static get observedAttributes() {
        return ["active", "value"];
    }

    /**
     * Sets up the attributes for the component.
     */
    setupAttributes() {
        this.isShadowRoot = "open";
    }

    /**
     * Draws the component.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     * @returns {DocumentFragment}
     */
    draw(context, store, params) {
        let fragment = document.createDocumentFragment();

        this.classList.add("wje-placement", "wje-" + this.placement || "wje-start");

        // zakladny obalovac
        let native = document.createElement("div");
        native.setAttribute("part", "native");
        native.classList.add("native-select", this.variant || "default");

        // wrapper pre label a inputWrapper
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.setAttribute("slot", "anchor");

        // label
        let label = document.createElement("wje-label");
        label.innerText = this.label || "";

        // obalovac pre input
        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("input-wrapper");

        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("part", "input");
        input.setAttribute("autocomplete", "off");
        input.setAttribute("readonly", "");
        input.setAttribute("placeholder", this.placeholder || "");

        let arrow = document.createElement("wje-icon");
        arrow.setAttribute("name", "chevron-down");
        arrow.setAttribute("slot", "arrow");

        let chips = document.createElement("div");
        chips.classList.add("chips");
        chips.innerText = this.placeholder || "";

        // obalovac pre option a find
        let optionsWrapper = document.createElement("div");
        optionsWrapper.classList.add("options-wrapper");
        optionsWrapper.style.setProperty("height", this.maxHeight || "auto");

        let list = document.createElement("div");
        list.classList.add("list");

        let slot = document.createElement("slot");

        let clear = document.createElement("wje-button");
        clear.setAttribute("fill", "link")
        clear.setAttribute("part", "clear");

        let clearIcon = document.createElement("wje-icon");
        clearIcon.setAttribute("name", "x");

        clear.appendChild(clearIcon);

        // vytvorime popup
        let popup = document.createElement("wje-popup");
        popup.setAttribute("placement", "bottom-start");
        popup.setAttribute("manual", "");
        popup.setAttribute("size", "");

        if(this.hasAttribute("disabled"))
            popup.setAttribute("disabled", "");

        if(this.variant === "standard") {
            if(this.hasAttribute("label"))
                native.appendChild(label);
        } else {
            wrapper.appendChild(label);
        }

        inputWrapper.appendChild(input);
        if(this.hasAttribute("multiple"))
            inputWrapper.appendChild(chips);

        if(this.hasAttribute("clearable"))
            inputWrapper.appendChild(clear);

        inputWrapper.appendChild(arrow);

        list.appendChild(slot);

        if(this.hasAttribute("find")) {
            let find = document.createElement("wje-input");
            find.setAttribute("variant", "standard");
            find.setAttribute("placeholder", "Hľadať");
            find.classList.add("find");

            optionsWrapper.appendChild(find);

            this.findEl = find;
        }

        optionsWrapper.appendChild(list);

        wrapper.appendChild(inputWrapper);

        popup.appendChild(wrapper);
        popup.appendChild(optionsWrapper);

        if(this.trigger === "click")
            popup.setAttribute("manual", "");

        native.appendChild(popup);

        this.native = native;
        this.popup = popup;
        this.labelElement = label;
        this.input = input;
        this.optionsWrapper = optionsWrapper;
        this.chips = chips;
        this.clear = clear;
        this.list = list;

        fragment.appendChild(native);

        return fragment;
    }

    /**
     * Sets up the event listeners after the component is drawn.
     *
     * @param {Object} context - The context for drawing.
     * @param {Object} store - The store for drawing.
     * @param {Object} params - The parameters for drawing.
     */
    afterDraw(context, store, params) {
        this.input.addEventListener("focus", (e) => {
            this.labelElement.classList.add("fade");
            this.native.classList.add("focused");
        });

        this.input.addEventListener("blur", (e) => {
            this.native.classList.remove("focused");
            if(!e.target.value)
                this.labelElement.classList.remove("fade")
        });

        this.addEventListener("wje:option-change", this.optionChange);
        this.clear.addEventListener("wje-button:click", (e) => {
            this.getAllOptions().forEach((option) => {
                option.selected = false;
                option.removeAttribute("selected");
            });
            this.selections();
            e.stopPropagation();
        });

        this.selections();

        this.list.addEventListener("wje-options:load", (e) => {
            this.list.scrollTo(0, 0);
        });

        // skontrolujeme ci ma select atribut find
        if(this.hasAttribute("find") && this.findEl instanceof HTMLElement) {
            event.addListener(this.findEl, "keyup", "",(e) => {
                let value = e.target.value.trim().toLowerCase();

                this.getAllOptions().forEach((option) => {
                    if(option.textContent.trim().toLowerCase().includes(value))
                        option.style.display = "block";
                    else
                        option.style.display = "none";
                });
            });
        }
    }

    /**
     * Handles the option change event.
     *
     * @param {Event} e - The event.
     */
    optionChange = (e) => {
        let allOptions = this.getAllOptions();

        if(!this.hasAttribute("multiple")) {
            allOptions.forEach((option) => {
                option.selected = false;
                option.removeAttribute("selected");
            });
            this.popup.removeAttribute("active");
        }

        e.target.selected = !e.target.hasAttribute("selected");

        this.selections(e.target);
    }

    /**
     * Returns all the options as HTML.
     *
     * @returns {NodeList} The options.
     */
    getAllOptions() {
        return this.querySelectorAll("wje-option");
    }

    /**
     * Returns the selected options as HTML.
     *
     * @returns {NodeList} The selected options.
     */
    getSelectedOptions() {
        return this.querySelectorAll("wje-option[selected]");
    }

    /**
     * Returns the selected options.
     *
     * @param {Element} option - The option to get.
     * @returns {Array} The selected options.
     */
    getSelected(option) {
        let selectedOptions = this.getSelectedOptions();

        selectedOptions = Array.isArray(selectedOptions) ? selectedOptions : Array.from(selectedOptions);

        selectedOptions = selectedOptions.map((option) => {
            return {
                value: option.value,
                text: option.textContent.trim()
            };
        });

        return selectedOptions;
    }

    /**
     * Handles the selection change.
     *
     * @param {Element} option - The option that changed.
     * @param {number} length - The length of the selected options.
     */
    selectionChanged(option = null, length = 0) {
        if (this.hasAttribute("multiple")) {
            this.value = this.selectedOptions.map(el => el).reverse();

            if (this.placeholder && length === 0) {
                this.chips.innerHTML = this.placeholder;
                this.input.value = '';
            } else {
                if(this.counterEl instanceof HTMLElement || length > +this.maxOptions) {
                    this.counter();
                } else {
                    if(option != null)
                        this.chips.appendChild(this.getChip(option));
                }
            }
        } else {
            let value = option?.textContent.trim() || "";
            this.value = value;
            this.input.value = value;
        }
    }

    /**
     * Handles the selections.
     *
     * @param {Element} option - The option to select.
     */
    selections(option) {
        let options = this.getSelectedOptions();

        this.selectedOptions = Array.isArray(options) ? options : Array.from(options);

        if(this.selectedOptions.length >= +this.maxOptions) {
            this.counterEl = null;
        }

        this.chips.innerHTML = "";
        if(this.selectedOptions.length > 0) {
            this.selectedOptions.forEach((option, index) => {
                this.selectionChanged(option, ++index);
            });
        } else {
            this.selectionChanged();
        }
    }

    /**
     * Handles the counter.
     */
    counter() {
        // zmazanie counter (span)
        if (this.counterEl && this.value.length === +this.maxOptions) {
            this.counterEl.remove();
            this.counterEl = null;
            return;
        }

        // ak counter nie je, tak ho vytvorime
        if(!this.counterEl) {
            this.counterEl = document.createElement("span");
            this.counterEl.classList.add("counter");

            this.chips.appendChild(this.counterEl);
        }

        // nastavime hodnotu counter
        this.counterEl.innerText = `+${this.value.length - +this.maxOptions}`;
    }

    /**
     * Returns a chip element.
     *
     * @param {Element} option - The option to get the chip for.
     * @returns {Element} The chip element.
     */
    getChip(option) {
        let chip = document.createElement("wje-chip");
        chip.setAttribute("removable", "");
        chip.addEventListener("wje:chip-remove", this.removeChip);
        chip.option = option;

        let label = document.createElement("wje-label");
        label.innerText = option.textContent.trim();

        chip.appendChild(label);

        return chip;
    }

    /**
     * Handles the chip remove event.
     *
     * @param {Event} e - The event.
     */
    removeChip = (e) => {
        let option = e.target.option;
        option.selected = false;
        option.removeAttribute("selected");
        e.target.parentNode.removeChild(e.target);

        this.selections(null, 0);
    }
}