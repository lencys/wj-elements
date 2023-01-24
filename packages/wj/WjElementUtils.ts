export class WjElementUtils {
    constructor() {}

    static setAttributesToElement(element: HTMLElement, object: any){
        Object.entries(object).forEach(([key,value]: [string, any]) =>{
            element.setAttribute(key, value)
        })
    }
}