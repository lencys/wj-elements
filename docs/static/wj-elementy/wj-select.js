var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
const styles = "/*\n[ WJ Select ]\n*/\n:host {\n  --wj-select-border-width: 1px;\n  --wj-select-border-style: solid;\n  --wj-select-border-color: var(--wj-border-color);\n  --wj-select-options-border-width: 1px;\n  --wj-select-options-border-style: var(--wj-border-style);\n  --wj-select-options-border-color: var(--wj-border-color);\n  --wj-select-background: var(--wj-background);\n  --wj-select-line-height: 20px;\n  --wj-select-color: var(--wj-color);\n  --wj-select-border-radius: var(--wj-border-radius-medium);\n  width: 100%;\n  display: block;\n}\n:host [slot=arrow] {\n  transform: rotate(0deg);\n  transition: all 0.2s ease-in;\n}\n\n.native-select.default .wrapper {\n  display: block;\n  border-width: var(--wj-select-border-width);\n  border-style: var(--wj-select-border-style);\n  border-color: var(--wj-select-border-color);\n  border-radius: var(--wj-select-border-radius);\n  padding-inline: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.native-select.default .input-wrapper {\n  padding: 0;\n  min-height: 25px;\n  margin-top: -4px;\n}\n.native-select.default.focused wj-label {\n  opacity: 0.67;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n.native-select.default wj-label {\n  margin: 0;\n  display: block;\n  opacity: 1;\n  cursor: text;\n  transition: opacity 0.2s ease 0s;\n  line-height: var(--wj-select-line-height);\n}\n.native-select.default wj-label.fade {\n  opacity: 0.5;\n  font-size: 12px;\n  letter-spacing: normal;\n}\n.native-select.standard .wrapper {\n  border-width: var(--wj-select-border-width);\n  border-style: var(--wj-select-border-style);\n  border-color: var(--wj-select-border-color);\n  border-radius: var(--wj-select-border-radius);\n}\n.native-select.standard .input-wrapper {\n  background: transparent;\n  width: 100%;\n}\n\n.wrapper {\n  display: flex;\n  width: 100%;\n}\n\n.input-wrapper {\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  background-color: var(--wj-select-background);\n  min-height: 28px;\n  color: var(--wj-select-color);\n  line-height: var(--wj-select-line-height);\n  appearance: none;\n  padding: 2px 0.5rem;\n  font-size: 14px;\n  font-weight: normal;\n  vertical-align: middle;\n}\n\ninput {\n  border: medium;\n  height: 25px;\n  min-height: 25px;\n  padding: 0;\n  background: none;\n  box-shadow: none;\n  width: 100%;\n  outline: 0;\n}\n\n::placeholder {\n  opacity: 1;\n}\n\n:host [active] .wrapper {\n  border-radius: var(--wj-select-border-radius) var(--wj-select-border-radius) 0 0;\n}\n:host [active] [slot=arrow] {\n  transform: rotate(180deg);\n  transition: all 0.2s ease-in;\n}\n\n.option-wrapper {\n  border-width: var(--wj-select-options-border-width);\n  border-style: var(--wj-select-options-border-style);\n  border-color: var(--wj-select-options-border-color);\n  border-radius: 0 0 var(--wj-select-border-radius) var(--wj-select-border-radius);\n  margin-top: -1px;\n  background: var(--wj-select-background);\n  overflow: auto;\n}\n\n:host([multiple]) input {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  opacity: 0;\n}\n\n:host([multiple]) .chips {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n:host([disabled]) .input-wrapper {\n  opacity: 0.5;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n.counter {\n  padding-inline: 0.5rem;\n}\n\nwj-chip {\n  --wj-chip-margin: 0 .25rem 0 0;\n}\n\nwj-button {\n  --wj-padding-top: .25rem;\n  --wj-padding-start: .25rem;\n  --wj-padding-end: .25rem;\n  --wj-padding-bottom: .25rem;\n  --wj-button-margin-inline: 0 .25rem;\n}";
class Select extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Select");
    __publicField(this, "optionChange", (e) => {
      let allOptions = this.getAllOptions();
      if (!this.hasAttribute("multiple")) {
        allOptions.forEach((option) => {
          option.selected = false;
          option.removeAttribute("selected");
        });
        this.popup.removeAttribute("active");
      }
      e.target.selected = !e.target.hasAttribute("selected");
      this.selections(e.target);
    });
    __publicField(this, "removeChip", (e) => {
      let option = e.target.option;
      option.selected = false;
      option.removeAttribute("selected");
      e.target.parentNode.removeChild(e.target);
      this.selections(null, 0);
    });
    this._selected = [];
    this.counterEl = null;
  }
  set selected(value) {
    this._selected = value;
  }
  get selected() {
    return this.getSelected();
  }
  set trigger(value) {
    this.setAttribute("trigger", value);
  }
  get trigger() {
    return this.getAttribute("trigger") || "click";
  }
  static get cssStyleSheet() {
    return styles;
  }
  static get observedAttributes() {
    return ["active", "value"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(context, store, params) {
    let fragment = document.createDocumentFragment();
    this.classList.add("wj-placement", "wj-" + this.placement || "wj-start");
    let native = document.createElement("div");
    native.setAttribute("part", "native");
    native.classList.add("native-select", this.variant || "default");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.setAttribute("slot", "anchor");
    let label = document.createElement("wj-label");
    label.innerText = this.label || "";
    let inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("part", "input");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("readonly", "");
    input.setAttribute("placeholder", this.placeholder || "");
    let arrow = document.createElement("wj-icon");
    arrow.setAttribute("name", "chevron-down");
    arrow.setAttribute("slot", "arrow");
    let chips = document.createElement("div");
    chips.classList.add("chips");
    chips.innerText = this.placeholder || "";
    let optionsWrapper = document.createElement("div");
    optionsWrapper.classList.add("option-wrapper");
    optionsWrapper.style.setProperty("height", this.maxHeight || "auto");
    let slot = document.createElement("slot");
    let clear = document.createElement("wj-button");
    clear.setAttribute("fill", "link");
    clear.setAttribute("part", "clear");
    let clearIcon = document.createElement("wj-icon");
    clearIcon.setAttribute("name", "x");
    clear.appendChild(clearIcon);
    let popup = document.createElement("wj-popup");
    popup.setAttribute("placement", "bottom-start");
    popup.setAttribute("manual", "");
    popup.setAttribute("size", "");
    if (this.hasAttribute("disabled"))
      popup.setAttribute("disabled", "");
    if (this.variant === "standard") {
      if (this.hasAttribute("label"))
        native.appendChild(label);
    } else {
      wrapper.appendChild(label);
    }
    inputWrapper.appendChild(input);
    if (this.hasAttribute("multiple"))
      inputWrapper.appendChild(chips);
    if (this.hasAttribute("clearable"))
      inputWrapper.appendChild(clear);
    inputWrapper.appendChild(arrow);
    optionsWrapper.appendChild(slot);
    wrapper.appendChild(inputWrapper);
    popup.appendChild(wrapper);
    popup.appendChild(optionsWrapper);
    if (this.trigger === "click")
      popup.setAttribute("manual", "");
    native.appendChild(popup);
    this.native = native;
    this.popup = popup;
    this.labelElement = label;
    this.input = input;
    this.optionsWrapper = optionsWrapper;
    this.chips = chips;
    this.clear = clear;
    fragment.appendChild(native);
    return fragment;
  }
  afterDraw(context, store, params) {
    this.input.addEventListener("focus", (e) => {
      this.labelElement.classList.add("fade");
      this.native.classList.add("focused");
    });
    this.input.addEventListener("blur", (e) => {
      this.native.classList.remove("focused");
      if (!e.target.value)
        this.labelElement.classList.remove("fade");
    });
    this.addEventListener("wj:option-change", this.optionChange);
    this.clear.addEventListener("wj:button-click", (e) => {
      this.getAllOptions().forEach((option) => {
        option.selected = false;
        option.removeAttribute("selected");
      });
      this.selections();
      e.stopPropagation();
    });
    this.selections();
    this.optionsWrapper.addEventListener("wj:options-load", (e) => {
      this.optionsWrapper.scrollTo(0, 0);
    });
  }
  getAllOptions() {
    return this.querySelectorAll("wj-option");
  }
  getSelectedOptions() {
    return this.querySelectorAll("wj-option[selected]");
  }
  getSelected(option) {
    let selectedOptions = this.getSelectedOptions();
    selectedOptions = Array.isArray(selectedOptions) ? selectedOptions : Array.from(selectedOptions);
    selectedOptions = selectedOptions.map((option2) => {
      return {
        value: option2.value,
        text: option2.textContent.trim()
      };
    });
    return selectedOptions;
  }
  selectionChanged(option = null, length = 0) {
    if (this.hasAttribute("multiple")) {
      this.value = this.selectedOptions.map((el) => el).reverse();
      if (this.placeholder && length === 0) {
        this.chips.innerHTML = this.placeholder;
        this.input.value = "";
      } else {
        if (this.counterEl instanceof HTMLElement || length > +this.maxOptions) {
          this.counter();
        } else {
          if (option != null)
            this.chips.appendChild(this.getChip(option));
        }
      }
    } else {
      let value = (option == null ? void 0 : option.textContent.trim()) || "";
      this.value = value;
      this.input.value = value;
    }
  }
  selections(option) {
    let options = this.getSelectedOptions();
    this.selectedOptions = Array.isArray(options) ? options : Array.from(options);
    if (this.selectedOptions.length >= +this.maxOptions) {
      this.counterEl = null;
    }
    this.chips.innerHTML = "";
    if (this.selectedOptions.length > 0) {
      this.selectedOptions.forEach((option2, index) => {
        this.selectionChanged(option2, ++index);
      });
    } else {
      this.selectionChanged();
    }
  }
  counter() {
    if (this.counterEl && this.value.length === +this.maxOptions) {
      this.counterEl.remove();
      this.counterEl = null;
      return;
    }
    if (!this.counterEl) {
      this.counterEl = document.createElement("span");
      this.counterEl.classList.add("counter");
      this.chips.appendChild(this.counterEl);
    }
    this.counterEl.innerText = `+${this.value.length - +this.maxOptions}`;
  }
  getChip(option) {
    let chip = document.createElement("wj-chip");
    chip.setAttribute("removable", "");
    chip.addEventListener("wj:chip-remove", this.removeChip);
    chip.option = option;
    let label = document.createElement("wj-label");
    label.innerText = option.textContent.trim();
    chip.appendChild(label);
    return chip;
  }
}
WJElement.define("wj-select", Select);
export {
  Select as default
};
