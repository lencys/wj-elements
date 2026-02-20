export class WjElementUtils {
    /**
     * This function creates an element.
     * @param element : HTMLElement - The element value.
     * @param object : Object - The object value.
     */
    static setAttributesToElement(element: any, object: any): void;
    /**
     * This function gets the attributes from an element.
     * @param {string|HTMLElement} el The element or selector to retrieve attributes from.
     * @returns {object} - An object containing the element's attributes as key-value pairs.
     */
    static getAttributes(el: string | HTMLElement): object;
    /**
     * This function gets the events from an element.
     * @param {string|HTMLElement} el The element or selector to retrieve events from.
     * @returns {Map<any, any>} - The map value.
     */
    static getEvents(el: string | HTMLElement): Map<any, any>;
    /**
     * This function converts an object to a string.
     * @param {object} object The object to convert.
     * @returns {string} - The string value.
     */
    static attributesToString(object: object): string;
    /**
     * This function checks if the slot exists.
     * @param {string|HTMLElement} el The element or selector to check for slots.
     * @param slotName The slot name to check for.
     * @returns {boolean} - The boolean value.
     */
    static hasSlot(el: string | HTMLElement, slotName?: any): boolean;
    /**
     * This function checks if the slot has content.
     * @param {string|HTMLElement} el The element or selector to check for slot content
     * @param slotName The slot name to check for.
     * @returns {boolean} - The boolean value.
     */
    static hasSlotContent(el: string | HTMLElement, slotName?: any): boolean;
    /**
     * This function converts a string to a boolean.
     * @param {string | object} value The value to convert to a boolean. If the value is a boolean, it will be returned as is.
     * @returns {boolean} - The boolean value.
     */
    static stringToBoolean(value: string | object): boolean;
}
