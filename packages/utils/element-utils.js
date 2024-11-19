export class WjElementUtils {
  /**
   * This function creates an element.
   * @param element : HTMLElement - The element value.
   * @param object : Object - The object value.
   */
  static setAttributesToElement(element, object) {
    Object.entries(object).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  /**
   * This function gets the attributes from an element.
   * @param {string|HTMLElement} el The element or selector to retrieve attributes from.
   * @returns {object} - An object containing the element's attributes as key-value pairs.
   */
  static getAttributes(el) {
    if (typeof el === 'string') el = document.querySelector(el);

    return Array.from(el.attributes)
      .filter((a) => !a.name.startsWith('@'))
      .map((a) => [
        a.name
          .split('-')
          .map((s, i) => {
            if (i !== 0) {
              return s.charAt(0).toUpperCase() + s.slice(1);
            } else {
              return s;
            }
          })
          .join(''),
        a.value,
      ])
      .reduce((acc, attr) => {
        acc[attr[0]] = attr[1];
        return acc;
      }, {});
  }

  /**
   * This function gets the events from an element.
   * @param {string|HTMLElement} el The element or selector to retrieve events from.
   * @returns {Map<any, any>} - The map value.
   */
  static getEvents(el) {
    if (typeof el === 'string') el = document.querySelector(el);

    return Array.from(el.attributes)
      .filter((a) => a.name.startsWith('@wje'))
      .map((a) => [a.name.substring(3).split('-').join(''), a.value])
      .reduce((acc, attr) => {
        acc.set(attr[0], attr[1]);
        return acc;
      }, new Map());
  }

  /**
   * This function converts an object to a string.
   * @param {object} object The object to convert.
   * @returns {string} - The string value.
   */
  static attributesToString(object) {
    return Object.entries(object)
      .map(([key, value]) => {
        return `${key}="${value}"`;
      })
      .join(' ');
  }

  /**
   * This function checks if the slot exists.
   * @param {string|HTMLElement} el The element or selector to check for slots.
   * @param slotName The slot name to check for.
   * @returns {boolean} - The boolean value.
   */
  static hasSlot(el, slotName = null) {
    let selector = slotName ? `[slot="${slotName}"]` : '[slot]';

    return el.querySelectorAll(selector).length > 0 ? true : false;
  }

  /**
   * This function checks if the slot has content.
   * @param {string|HTMLElement} el The element or selector to check for slot content
   * @param slotName The slot name to check for.
   * @returns {boolean} - The boolean value.
   */
  static hasSlotContent(el, slotName = null) {
    let slotElement = el.querySelector(`slot`);
    if (slotName) {
      slotElement = el.querySelector(`slot[name="${slotName}"]`);
    }

    if (slotElement) {
      const assignedElements = slotElement.assignedElements();
      return assignedElements.length > 0;
    }

    return false;
  }

  /**
   * This function converts a string to a boolean.
   * @param {string | object} value The value to convert to a boolean. If the value is a boolean, it will be returned as is.
   * @returns {boolean} - The boolean value.
   */
  static stringToBoolean(value) {
    if (typeof value === 'boolean') return value;

    return !['false', '0', 0].includes(value);
  }
}
