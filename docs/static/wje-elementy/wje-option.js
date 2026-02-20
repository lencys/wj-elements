var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Option_instances, isCheckbox_fn, setCheckbox_fn;
import WJElement from "./wje-element.js";
import { I as Icon } from "./icon-DVyMc4Wv.js";
import Checkbox from "./wje-checkbox.js";
import { event } from "./event.js";
const styles = `/*
[ WJ Option ]
*/

:host {
    display: block;

    .end-slot {
        position: absolute;
        inset-inline-end: 0.5rem;
        inset-block-start: 50%;
        transform: translateY(-50%);
        display: inline-flex;
        align-items: center;
        pointer-events: auto;
        z-index: 1;
    }
}

::slotted(wje-icon[slot="check"]) {
    visibility: hidden;
    margin-inline: 0.5rem;
}

::slotted(wje-checkbox[slot="check"]) {
    margin-inline: 0.5rem 0;
    margin-block: 0;
}

:host([selected]) {
    ::slotted([slot='check']) {
        visibility: visible;
    }
    wje-checkbox {
        visibility: visible;
    }
}

:host([disabled]) {
    background-color: lightgray;
    opacity: 0.3;
    pointer-events: none;
    cursor: not-allowed;
}

.native-option {
    display: flex;
    align-items: center;
    padding-top: var(--wje-option-padding-top);
    padding-bottom: var(--wje-option-padding-bottom);
    position: relative;
}

.native-option:hover {
    background-color: var(--wje-option-highlighted);
}

::slotted([slot='start']) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-inline-end: 0.5rem;
}

::slotted([slot='end']) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    margin-inline: auto 0.5rem;
}
`;
class Option extends WJElement {
  /**
   * Creates an instance of Option.
   * @class
   */
  constructor() {
    super();
    __privateAdd(this, _Option_instances);
    /**
     * Dependencies of the Option component.
     */
    __publicField(this, "dependencies", {
      "wje-icon": Icon,
      "wje-checkbox": Checkbox
    });
    __publicField(this, "className", "Option");
  }
  /**
   * Sets the selected attribute of the option.
   * @param {boolean} value The value to set.
   */
  set selected(value) {
    if (value) {
      this.setAttribute("selected", "");
    } else {
      this.removeAttribute("selected");
    }
  }
  /**
   * Retrieves the 'selected' attribute status of the element.
   * @returns {boolean} Returns true if the 'selected' attribute is set on the element; otherwise, false.
   */
  get selected() {
    return this.hasAttribute("selected");
  }
  /**
   * Retrieves the value indicating whether the closest 'wje-select' element has a 'checkbox' attribute.
   * @returns {boolean} True if the closest 'wje-select' element has a 'checkbox' attribute; otherwise, false.
   */
  get checkbox() {
    var _a;
    return (_a = this.closest("wje-select")) == null ? void 0 : _a.hasAttribute("checkbox");
  }
  /**
   * Determines whether the closest 'wje-select' element has the 'multiple' attribute.
   * @returns {boolean} Returns true if the 'wje-select' element has the 'multiple' attribute, otherwise false.
   */
  get multiple() {
    var _a;
    return ((_a = this.closest("wje-select")) == null ? void 0 : _a.hasAttribute("multiple")) || false;
  }
  /**
   * Sets the value attribute of the option.
   * @param {string} value The value to set.
   */
  set value(value) {
    this.setAttribute("value", value);
  }
  get value() {
    return this.getAttribute("value");
  }
  /**
   * Sets the text content of the option.
   * @param {string} value The text to set.
   */
  set text(value) {
    this.innerText = value;
  }
  /**
   * Returns the CSS styles for the component.
   * @static
   * @returns {CSSStyleSheet}
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
    return ["selected"];
  }
  /**
   * This method is called whenever an observed attribute is added, removed, or changed.
   * @param {string} name The name of the attribute that was changed.
   * @param {*} old The previous value of the attribute before the change.
   * @param {*} newName The new value of the attribute after the change.
   * @returns {void} This method does not return a value.
   */
  attributeChangedCallback(name, old, newName) {
    if (this.checkbox) {
      if (name === "selected" && newName !== null) {
        __privateMethod(this, _Option_instances, setCheckbox_fn).call(this, true);
      } else {
        __privateMethod(this, _Option_instances, setCheckbox_fn).call(this, false);
      }
    }
    this.syncAria();
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
    this.syncAria();
  }
  /**
   * Draws the component for the option.
   * @returns {DocumentFragment}
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-option");
    native.setAttribute("part", "native");
    let icon = document.createElement("wje-icon");
    icon.setAttribute("name", "check");
    icon.setAttribute("slot", "check");
    let checkboxEl = document.createElement("wje-checkbox");
    checkboxEl.setAttribute("slot", "check");
    let check = document.createElement("slot");
    check.setAttribute("name", "check");
    check.setAttribute("part", "check");
    let start = document.createElement("slot");
    start.setAttribute("name", "start");
    let slot = document.createElement("slot");
    let endWrapper = document.createElement("span");
    endWrapper.classList.add("end-slot");
    let end = document.createElement("slot");
    end.setAttribute("name", "end");
    endWrapper.append(end);
    const hasCheckSlot = this.querySelector('[slot="check"]') !== null;
    if (!hasCheckSlot) {
      if (this.checkbox && this.multiple) {
        this.append(checkboxEl);
      } else {
        this.append(icon);
      }
    }
    native.append(check);
    native.append(start);
    native.append(slot);
    native.append(endWrapper);
    fragment.append(native);
    this.check = check;
    return fragment;
  }
  /**
   * Method executed after the drawing process is completed.
   * Sets up an event listener for 'click' events, linking them to the specified callback function.
   * @returns {void} Does not return a value.
   */
  afterDraw() {
    event.addListener(this, "click", null, this.optionClickCallback);
    if (this.checkbox && this.multiple) {
      __privateMethod(this, _Option_instances, setCheckbox_fn).call(this, this.selected);
    }
    this.syncAria();
  }
  /**
   * Syncs ARIA attributes on the host element.
   */
  syncAria() {
    this.setAriaState({
      role: "option",
      selected: this.selected,
      disabled: this.hasAttribute("disabled")
    });
  }
  /**
   * Handles operations or cleanup tasks that need to occur before disconnecting.
   * Removes an event listener associated with the 'click' event and a specified callback function.
   * @returns {void} This method does not return a value.
   */
  beforeDisconnect() {
    event.removeListener(this, "click", null, this.optionClickCallback);
  }
  /**
   * Handles the click event on an option element and dispatches a custom event when triggered.
   * @param {Event} e The click event object that triggered the callback.
   * @returns {void} No return value.
   */
  optionClickCallback(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (this.hasAttribute("disabled")) return;
    event.dispatchCustomEvent(this, "wje-option:change", {
      value: this.value,
      text: this.textContent,
      option: this
    });
  }
}
_Option_instances = new WeakSet();
/**
 * Checks if the given DOM node represents a checkbox element.
 * @param {Node} node The DOM node to be checked.
 * @returns {boolean} Returns true if the node is an element with a class name of 'Checkbox', otherwise false.
 */
isCheckbox_fn = function(node) {
  return node instanceof Element && node.className === "Checkbox";
};
/**
 * Updates the checked status of the first checkbox element found within the assigned elements of the specified container.
 * @param {boolean} checked The desired checked state to be applied to the checkbox.
 * @returns {void}
 */
setCheckbox_fn = function(checked) {
  var _a;
  const assigned = ((_a = this.check) == null ? void 0 : _a.assignedElements({ flatten: true })) ?? [];
  const arr = assigned.filter((item) => __privateMethod(this, _Option_instances, isCheckbox_fn).call(this, item));
  if (arr.length > 0) arr[0].checked = checked;
};
Option.define("wje-option", Option);
export {
  Option as default
};
//# sourceMappingURL=wje-option.js.map
