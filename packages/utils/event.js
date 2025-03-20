var self; // eslint-disable-line no-var

class Event {
    constructor() {
        this.customEventStorage = [];
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
        return this.customEventStorage.find((e) => e.element === element);
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
        let record = this.findRecordByElement(element);
        let recordListeners = this.customEventWeakMap.get(element);

        if (!recordListeners) {
            this.customEventWeakMap.set(element, {
                [originalEvent]: [],
            });

            recordListeners = this.customEventWeakMap.get(element);

        } else {
            recordListeners[originalEvent] = recordListeners[originalEvent] || [];
        }

        if (record) {
            record.listeners[originalEvent] = record.listeners[originalEvent] || [];

        } else {
            record = {
                element: element,
                listeners: {},
            };

            // vytvorime object listeners pre kazdy original event zvlast
            record.listeners[originalEvent] = [];

            this.customEventStorage.push(record);
        }

        listener = listener || this.#dispatch;
        let obj = {
            listener: listener,
            options: options,
            event: event,
        };

        // skontrolujeme ci uz tento listener neexistuje
        if (!this.listenerExists(element, originalEvent, obj)) {
            recordListeners[originalEvent].push(obj);
            record.listeners[originalEvent].push(obj);

            element.addEventListener(originalEvent, listener, options);
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
     * @param element
     * @param event
     * @param listener
     * @returns
     */
    listenerExists(element, event, listener) {
        let record = this.findRecordByElement(element);
        return record.listeners[event].some((e) => this.deepEqual(e, listener));
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
        let record = this.findRecordByElement(element);

        if (record && originalEvent in record.listeners) {
            let listenerOfRecord = record.listeners[originalEvent].find((e) => e.listener === listener);

            if (listenerOfRecord) {
                record.listeners[originalEvent].splice(record.listeners[originalEvent].indexOf(listenerOfRecord), 1);
            }

            if (!record.listeners[originalEvent].length) {
                delete record.listeners[originalEvent];
            }
        }

        let records = this.customEventWeakMap.get(element);
        let listeners = records?.[originalEvent];

        if (listeners) {
            let listenerOfWeakMap = listeners.find((e) => e.listener === listener);

            if (listenerOfWeakMap) {
                listeners.splice(listeners.indexOf(listenerOfWeakMap), 1);
            }

            if (!listeners.length) {
                delete records[originalEvent];
            }
        }

        listener = listener || this.#dispatch;

        element?.removeEventListener(originalEvent, listener, options);
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
                    });
                }
            });
        }

        this.customEventStorage = this.customEventStorage.filter((e) => {
            return e.element !== element;
        });
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
