export class WjElementUtils {
    /**
     * This function creates an element
     * @param element : HTMLElement
     * @param object : Object
     */
    static setAttributesToElement(element, object){
        Object.entries(object).forEach(([key,value]) =>{
            element.setAttribute(key, value)
        })
    }

    /**
     * This function gets the attributes from an element
     * @param el (string | HTMLElement)
     * @return (array)
     */
    static getAttributes(el) {
        if (typeof el === "string")
            el = document.querySelector(el);

        return Array.from(el.attributes)
            .filter(a => !a.name.startsWith("@"))
            .map(a => [a.name.split("-").map((s, i) => {
                if (i !== 0) {
                    return s.charAt(0).toUpperCase() + s.slice(1);
                } else {
                    return s;
                }
            }).join(""), a.value])
            .reduce((acc, attr) => {
                acc[attr[0]] = attr[1]
                return acc
            }, {})
    }

    /**
     * This function gets the events from an element
     * @param el
     * @returns {Map<any, any>}
     */
    static getEvents(el) {
        if (typeof el === "string")
            el = document.querySelector(el);

        return Array.from(el.attributes)
            .filter(a => a.name.startsWith("@wje"))
            .map(a => [a.name.substring(3).split("-").join(""), a.value])
            .reduce((acc, attr) => {
                acc.set(attr[0], attr[1])
                return acc
            },new Map());
    }

    /**
     * This function converts an object to a string
     * @param object
     * @returns {string}
     */
    static attributesToString( object){
        return Object.entries(object).map(([key,value]) =>{
            return `${key}="${value}"`
        }).join(' ')
    }

    /**
     * This function checks if the slot exists
     * @param el
     * @param slotName
     * @returns {boolean}
     */
    static hasSlot(el, slotName = null) {
        let selector = slotName ? `[slot="${slotName}"]` : "[slot]";

        return el.querySelectorAll(selector).length > 0 ? true : false;
    }

    /**
     * This function checks if the slot has content
     * @param el
     * @param slotName
     * @returns {boolean}
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
     * This function converts a string to a boolean
     * @param value
     * @returns {boolean}
     */
    static stringToBoolean(value) {
        if(typeof value === 'boolean')
            return value;

        return !["false", "0", 0].includes(value)
    }
}