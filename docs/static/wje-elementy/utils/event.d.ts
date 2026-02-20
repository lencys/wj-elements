export let event: Event;
declare class Event {
    customEventWeakMap: WeakMap<WeakKey, any>;
    /**
     * Dispatch custom event to the element with the specified event name and detail.
     * @param element
     * @param event
     * @param detail
     */
    dispatchCustomEvent(element: any, event: any, detail: any): void;
    /**
     * Find record by element in the storage.
     * @param element
     * @returns {*}
     */
    findRecordByElement(element: any): any;
    /**
     * Add listener to the element. If the element is an array, the listener will be added to all elements in the array.
     * @param element
     * @param originalEvent
     * @param event
     * @param listener
     * @param options
     */
    addListener(element: any, originalEvent: any, event: any, listener: any, options: any): void;
    /**
     * Write record to the storage.
     * @param element
     * @param originalEvent
     * @param event
     * @param listener
     * @param options
     */
    writeRecord(element: any, originalEvent: any, event: any, listener: any, options: any): void;
    /**
     * Performs a deep equality check between two objects.
     * @param x The first object to compare.
     * @param y The second object to compare.
     * @returns - Returns `true` if the objects are deeply equal, `false` otherwise.
     */
    deepEqual(x: any, y: any): any;
    /**
     * Check if the listener already exists on the element.
     * @param records
     * @param eventObj
     * @returns
     */
    listenerExists(records: any, eventObj: any): any;
    isRecordExists(records: any, eventObj: any): any;
    /**
     * Remove listener from the element and delete the listener from the custom event storage.
     * @param element
     * @param originalEvent
     * @param event
     * @param listener
     * @param options
     */
    removeListener(element: any, originalEvent: any, event: any, listener: any, options: any): void;
    /**
     * Remove all event listeners from the specified element and delete the element from the custom event storage.
     * @param {HTMLElement} element The element from which all listeners will be removed.
     */
    removeElement(element: HTMLElement): void;
    createPromiseFromEvent(element: any, event: any): Promise<any>;
    #private;
}
export {};
