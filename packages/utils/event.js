var self;

class Event {
    constructor() {
        this.customEventStorage = [];
        self = this;
    }

    #dispatch(e) {
        let element = this;
        let record = self.findRecordByElement(element);
        let listeners = record.listeners[e.type];

        listeners.forEach((listener, i) => {
            self.dispatchCustomEvent(element, listener.event, {
                originalEvent: e?.type || null,
                context: element,
                event: self
            });

            if (listener.options && listener.options.stopPropagation === true)
                e.stopPropagation();
        });
    }

    dispatchCustomEvent(element, event, detail) {
        element.dispatchEvent(
            new CustomEvent(event, {
                detail: detail || {
                    context: element,
                    event: self
                },
                bubbles: true,
                composed: true
            })
        );
    }

    findRecordByElement(element) {
        for (var index = 0, length = this.customEventStorage.length; index < length; index++) {
            var record = this.customEventStorage[index];

            if (element == record.element) {
                return record;
            }
        }

        return false;
    }

    addListener(element, originalEvent, event, listener, options) {
        if (!element)
            return;

        if (!Array.isArray(element))
            element = [element];

        element.forEach((el) => {
            this.writeRecord(el, originalEvent, event, listener, options);
        });
    }

    writeRecord(element, originalEvent, event, listener, options) {
        let record = this.findRecordByElement(element);

        if (record) {
            record.listeners[originalEvent] = record.listeners[originalEvent] || [];
        } else {
            record = {
                element: element,
                listeners: {}
            };

            // vytvorime object listeners pre kazdy original event zvlast
            record.listeners[originalEvent] = [];

            this.customEventStorage.push(record);
        }

        listener = listener || this.#dispatch;
        let obj = {
            listener: listener,
            options: options,
            event: event
        };

        // skontrolujeme ci uz tento listener neexistuje
        if (!this.listenerExists(element, originalEvent, obj)) {
            record.listeners[originalEvent].push(obj);

            element.addEventListener(originalEvent, listener, options);
        } else {
            // in case we want to add the same listener multiple times trigger a warning for a better debugging
            console.warn("Listener already exists", element, originalEvent, listener);
        }
    }

    /**
     * Performs a deep equality check between two objects.
     *
     * @param {any} x - The first object to compare.
     * @param {any} y - The second object to compare.
     * @returns {boolean} - Returns `true` if the objects are deeply equal, `false` otherwise.
     */
    deepEqual(x, y) {
        return x && y && typeof x === 'object' && typeof x === typeof y ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every(key => this.deepEqual(x[key], y[key])) : x === y;
    }

    listenerExists(element, event, listener) {
        let record = this.findRecordByElement(element);
        return record.listeners[event].some((e) => this.deepEqual(e, listener));
    }

    removeListener(element, originalEvent, event, listener, options) {
        let record = this.findRecordByElement(element);

        if (record && originalEvent in record.listeners) {
            var index = record.listeners[originalEvent].indexOf(listener);

            if (~index) {
                record.listeners[originalEvent].splice(index, 1);
            }

            if (!record.listeners[originalEvent].length) {
                delete record.listeners[originalEvent];
            }
        }

        listener = listener || this.#dispatch;

        element.removeEventListener(originalEvent, listener, options);
    }

    removeElement(element) {
        this.customEventStorage = this.customEventStorage.filter((e) => {
            if (e.element !== element)
                return e;
        });
    }

    // TODO
    createPromiseFromEvent(element, event) {
        return new Promise((resolve) => {
            let success = () => {
                element.removeEventListener(event, success);
                resolve();
            }

            element.addEventListener(event, success);
        });
    }
}

let event = new Event();
export { event };