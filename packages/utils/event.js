var self; // eslint-disable-line no-var

class Event {
    constructor() {
        this.customEventWeakMap = new WeakMap();
        self = this;
    }

    /**
     * Dispatch event to the element and trigger the listener.
     * @param e
     */
    #dispatch(e) {
        let element = this;
        // let record = self.findRecordByElement(element);
        let record = self.customEventWeakMap.get(this);

        if (!record) return;

        let listeners = record[e.type];

        listeners.forEach((listener) => {
            self.dispatchCustomEvent(element, listener.event, {
                originalEvent: e?.type || null,
                context: element,
                event: self,
            });

            if (listener.options && listener.options.stopPropagation === true) {
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        });
    }

    /**
     * Dispatch custom event to the element with the specified event name and detail.
     * @param element
     * @param event
     * @param detail
     */
    dispatchCustomEvent(element, event, detail) {
        element.dispatchEvent(
            new CustomEvent(event, {
                detail: detail || {
                    context: element,
                    event: self,
                },
                bubbles: true,
                composed: true,
                cancelable: true,
            })
        );
    }

    /**
     * Find record by element in the storage.
     * @param element
     * @returns {*}
     */

    findRecordByElement(element) {
        return this.customEventWeakMap.get(element);
    }

    /**
     * Add listener to the element. If the element is an array, the listener will be added to all elements in the array.
     * @param element
     * @param originalEvent
     * @param event
     * @param listener
     * @param options
     */
    addListener(element, originalEvent, event, listener, options) {
        if (!element) return;

        if (!Array.isArray(element)) element = [element];

        element.forEach((el) => {
            this.writeRecord(el, originalEvent, event, listener, options);
        });
    }

    /**
     * Write record to the storage.
     * @param element
     * @param originalEvent
     * @param event
     * @param listener
     * @param options
     */
    writeRecord(element, originalEvent, event, listener, options) {
        let recordListeners = this.findRecordByElement(element);

        if (!recordListeners) {
            this.customEventWeakMap.set(element, {
                [originalEvent]: [],
            });

            recordListeners = this.findRecordByElement(element);
        } else {
            recordListeners[originalEvent] = recordListeners[originalEvent] || [];
        }

        listener = listener || this.#dispatch;
        let obj = {
            listener: listener,
            options: options,
            event: event,
        };

        // skontrolujeme ci uz tento listener neexistuje
        if (!this.isRecordExists(recordListeners[originalEvent], obj)) {
            if (!this.listenerExists(recordListeners[originalEvent], obj)) {
                element.addEventListener(originalEvent, listener, options);
                obj.unbind = () => {
                    element.removeEventListener(originalEvent, listener, options);
                };
            }

            recordListeners[originalEvent].push(obj);

        } else {
            // in case we want to add the same listener multiple times trigger a warning for a better debugging
            //console.info("Listener already exists", element, originalEvent);
        }
    }

    /**
     * Performs a deep equality check between two objects.
     * @param x The first object to compare.
     * @param y The second object to compare.
     * @returns - Returns `true` if the objects are deeply equal, `false` otherwise.
     */
    deepEqual(x, y) {
        return x && y && typeof x === 'object' && typeof x === typeof y
            ? Object.keys(x).length === Object.keys(y).length &&
            Object.keys(x).every((key) => this.deepEqual(x[key], y[key]))
            : x === y;
    }

    /**
     * Check if the listener already exists on the element.
     * @param records
     * @param eventObj
     * @returns
     */
    listenerExists(records, eventObj) {
        return records.some((e) => e.listener === eventObj.listener);
    }

    isRecordExists(records, eventObj) {
        return records.some((e) => this.deepEqual(e, eventObj))
    }

    /**
     * Remove listener from the element and delete the listener from the custom event storage.
     * @param element
     * @param originalEvent
     * @param event
     * @param listener
     * @param options
     */
    removeListener(element, originalEvent, event, listener, options) {
        let records = this.findRecordByElement(element);
        let listeners = records?.[originalEvent];
        listener = listener || this.#dispatch;

        if (listeners) {
            let listenerOfWeakMap = listeners.find((e) => e.listener === listener);

            if (listenerOfWeakMap) {
                listeners.splice(listeners.indexOf(listenerOfWeakMap), 1);
            }

            if (!listeners.length) {
                delete records[originalEvent];
                element?.removeEventListener(originalEvent, listener, options);
            }
        }
    }

    /**
     * Remove all event listeners from the specified element and delete the element from the custom event storage.
     * @param {HTMLElement} element The element from which all listeners will be removed.
     */
    removeElement(element) {
        // remove all listeners from the element
        let listeners = this.customEventWeakMap.get(element);
        if (listeners) {
            queueMicrotask(() => {
                for (let event in listeners) {
                    listeners[event].forEach((e) => {
                        element.removeEventListener(event, e.listener, e.options);
                        e.unbind();
                    });
                }

                this.customEventWeakMap.delete(element);
            });
        }
    }

    // TODO
    createPromiseFromEvent(element, event) {
        return new Promise((resolve) => {
            let success = () => {
                element.removeEventListener(event, success);
                resolve();
            };

            element.addEventListener(event, success);
        });
    }
}

let event = new Event();
export { event };
