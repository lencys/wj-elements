var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Event_instances, dispatch_fn;
var self;
class Event {
  constructor() {
    __privateAdd(this, _Event_instances);
    this.customEventWeakMap = /* @__PURE__ */ new WeakMap();
    self = this;
  }
  /**
   * Dispatch custom event to the element with the specified event name and detail.
   * @param element
   * @param event
   * @param detail
   */
  dispatchCustomEvent(element, event2, detail) {
    element.dispatchEvent(
      new CustomEvent(event2, {
        detail: detail || {
          context: element,
          event: self
        },
        bubbles: true,
        composed: true,
        cancelable: true
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
  addListener(element, originalEvent, event2, listener, options) {
    if (!element) return;
    if (!Array.isArray(element)) element = [element];
    element.forEach((el) => {
      this.writeRecord(el, originalEvent, event2, listener, options);
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
  writeRecord(element, originalEvent, event2, listener, options) {
    let recordListeners = this.findRecordByElement(element);
    if (!recordListeners) {
      this.customEventWeakMap.set(element, {
        [originalEvent]: []
      });
      recordListeners = this.findRecordByElement(element);
    } else {
      recordListeners[originalEvent] = recordListeners[originalEvent] || [];
    }
    listener = listener || __privateMethod(this, _Event_instances, dispatch_fn);
    let obj = {
      listener,
      options,
      event: event2
    };
    if (!this.isRecordExists(recordListeners[originalEvent], obj)) {
      if (!this.listenerExists(recordListeners[originalEvent], obj)) {
        element.addEventListener(originalEvent, listener, options);
        obj.unbind = () => {
          element.removeEventListener(originalEvent, listener, options);
        };
      }
      recordListeners[originalEvent].push(obj);
    }
  }
  /**
   * Performs a deep equality check between two objects.
   * @param x The first object to compare.
   * @param y The second object to compare.
   * @returns - Returns `true` if the objects are deeply equal, `false` otherwise.
   */
  deepEqual(x, y) {
    return x && y && typeof x === "object" && typeof x === typeof y ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).every((key) => this.deepEqual(x[key], y[key])) : x === y;
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
    return records.some((e) => this.deepEqual(e, eventObj));
  }
  /**
   * Remove listener from the element and delete the listener from the custom event storage.
   * @param element
   * @param originalEvent
   * @param event
   * @param listener
   * @param options
   */
  removeListener(element, originalEvent, event2, listener, options) {
    let records = this.findRecordByElement(element);
    let listeners = records == null ? void 0 : records[originalEvent];
    listener = listener || __privateMethod(this, _Event_instances, dispatch_fn);
    if (listeners) {
      let listenerOfWeakMap = listeners.find((e) => e.listener === listener);
      if (listenerOfWeakMap) {
        listeners.splice(listeners.indexOf(listenerOfWeakMap), 1);
      }
      if (!listeners.length) {
        delete records[originalEvent];
        element == null ? void 0 : element.removeEventListener(originalEvent, listener, options);
      }
    }
  }
  /**
   * Remove all event listeners from the specified element and delete the element from the custom event storage.
   * @param {HTMLElement} element The element from which all listeners will be removed.
   */
  removeElement(element) {
    let listeners = this.customEventWeakMap.get(element);
    if (listeners) {
      queueMicrotask(() => {
        for (let event2 in listeners) {
          listeners[event2].forEach((e) => {
            element.removeEventListener(event2, e.listener, e.options);
            e.unbind();
          });
        }
        this.customEventWeakMap.delete(element);
      });
    }
  }
  // TODO
  createPromiseFromEvent(element, event2) {
    return new Promise((resolve) => {
      let success = () => {
        element.removeEventListener(event2, success);
        resolve();
      };
      element.addEventListener(event2, success);
    });
  }
}
_Event_instances = new WeakSet();
/**
 * Dispatch event to the element and trigger the listener.
 * @param e
 */
dispatch_fn = function(e) {
  let element = this;
  let record = self.customEventWeakMap.get(this);
  if (!record) return;
  let listeners = record[e.type];
  listeners.forEach((listener) => {
    self.dispatchCustomEvent(element, listener.event, {
      originalEvent: (e == null ? void 0 : e.type) || null,
      context: element,
      event: self
    });
    if (listener.options && listener.options.stopPropagation === true) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  });
};
let event = new Event();
export {
  event
};
//# sourceMappingURL=event.js.map
