export class WjElementUtils {
    constructor() {}

    /**
     *
     * @param element : HTMLElement
     * @param object : Object
     */
    static setAttributesToElement(element, object){
        Object.entries(object).forEach(([key,value]) =>{
            element.setAttribute(key, value)
        })
    }

    /** @function getAttributes
     * @description Vráti všetky atributy elementu v poli
     * @return (array)
     */

    static getAttributes(el) {
        if (typeof el === "string")
            el = document.querySelector(el);

        return Array.from(el.attributes)
            .map(a => [a.name.split("-").map((s, i) => {
                if (i != 0) {
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
}