export class WjEvents {
    constructor() {}

    static registerEvent( originalEvent = 'click', event = 'wj:click', element = this ){
        // aplikuje sa to na "element"
        // spraviť kontrolu nad originalEvent  aby to neboli hluposti

        element.addEventListener(originalEvent, (e)=>{
            element.dispatchEvent(new CustomEvent(event, {
                    detail: {
                        originalEvent: e,
                        context: element
                    },
                    bubbles: true
                }));
            });
    }
}