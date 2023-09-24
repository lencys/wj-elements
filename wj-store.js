var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class PubSub {
  constructor() {
    this.events = {};
  }
  /**
   * Either create a new event instance for passed `event` name
   * or push a new callback into the existing collection
   *
   * @param {string} event
   * @param {function} callback
   * @returns {number} A count of callbacks for this event
   * @memberof PubSub
   */
  subscribe(event, callback) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }
    self.events[event].push(callback) - 1;
    return {
      unsubscribe() {
        self.events[event].splice(self.events[event].indexOf(callback), 1);
      }
    };
  }
  /**
   * If the passed event has callbacks attached to it, loop through each one
   * and call it
   *
   * @param {string} event
   * @param {object} [data={}]
   * @returns {array} The callbacks for this event, or an empty array if no event exits
   * @memberof PubSub
   */
  publish(event, newData = {}, oldData) {
    let self = this;
    if (!self.events.hasOwnProperty(event)) {
      return [];
    }
    return self.events[event].map((callback) => callback(newData, oldData));
  }
}
const addAction = (stateValueName) => {
  return (payload2) => {
    return {
      type: `${stateValueName}/ADD`,
      payload: payload2
    };
  };
};
const addManyAction = (stateValueName) => {
  return (payload2) => {
    return {
      type: `${stateValueName}/ADD_MANY`,
      payload: payload2
    };
  };
};
const updateAction = (stateValueName) => {
  return (payload2) => {
    return {
      type: `${stateValueName}/UPDATE`,
      payload: payload2
    };
  };
};
const deleteAction = (stateValueName) => {
  return (payload2) => {
    return {
      type: `${stateValueName}/DELETE`,
      payload: payload2
    };
  };
};
const loadAction = (stateValueName) => {
  return (payload2) => {
    return {
      type: `${stateValueName}/LOAD`,
      payload: payload2
    };
  };
};
const defaultStoreActions = {
  addAction,
  deleteAction,
  loadAction,
  updateAction,
  addManyAction
};
class Store {
  constructor(params = {}) {
    __publicField(this, "_state");
    __publicField(this, "_reducer");
    __publicField(this, "events");
    __publicField(this, "status");
    this._isPause = false;
    this._state = {};
    this._reducer = function rootReducer(state = {}, action) {
      return {};
    };
    this.status = "resting";
    this.events = new PubSub();
    if (params == null ? void 0 : params.hasOwnProperty("reducer")) {
      this._reducer = params.reducer;
    }
    this.refreshProxy(params == null ? void 0 : params.state);
  }
  /**
   * A dispatcher for actions that looks in the actions 
   * collection and runs the action if it can find it
   *
   * @param {string} actionKey
   * @param {mixed} payload
   * @returns {boolean}
   * @memberof Store
   */
  dispatch(action) {
    this.status = "action";
    let newState = this._reducer(this._state, action);
    this.status = "mutation";
    this._state = Object.assign(this._state, newState);
    return true;
  }
  getState() {
    return JSON.parse(JSON.stringify(this._state));
  }
  subscribe(eventName, callbackFn) {
    return this.events.subscribe(eventName, callbackFn);
  }
  unsubscribe(eventName) {
    delete this.events[eventName];
  }
  pause() {
    this._isPause = true;
    return this;
  }
  play(val) {
    this._isPause = false;
    return this;
  }
  mergeReducers(stateValueName, newReducer) {
    let reducerCopy = this._reducer;
    this._reducer = (state, newState) => {
      let preState = reducerCopy(state, newState);
      let result = {
        ...preState,
        [stateValueName]: newReducer(state[stateValueName], newState)
      };
      return result;
    };
  }
  makeEveryArrayEntryAsStoreState(storeKey, array = [], identificator = "id") {
    array.forEach((entry) => {
      if (this.getState().hasOwnProperty(`${storeKey}-${entry[identificator]}`)) {
        this.dispatch(defaultStoreActions.updateAction(`${storeKey}-${entry[identificator]}`)(entry));
      } else {
        this.define(`${storeKey}-${entry.id || entry.source || entry[identificator]}`, entry, null, identificator);
      }
    });
  }
  define(stateValueName, defaultValue, reducer, key = "id") {
    if (this._state.hasOwnProperty(stateValueName)) {
      console.warn(`STATE už obsahuje premennú ${stateValueName},ktorú sa pokúšate pridať`);
      return;
    }
    if (reducer instanceof Function) {
      this.mergeReducers(stateValueName, reducer);
    } else {
      if (defaultValue instanceof Array) {
        this.mergeReducers(stateValueName, this.createArrayReducer(stateValueName, key));
      } else {
        this.mergeReducers(stateValueName, this.createObjectReducer(stateValueName, key));
      }
    }
    this.refreshProxy({
      ...this._state,
      [stateValueName]: defaultValue
    });
  }
  refreshProxy(state) {
    this._state = new Proxy(state || {}, {
      set: (state2, key, value) => {
        if (JSON.stringify(state2[key]) === JSON.stringify(value)) {
          return true;
        }
        let oldState = state2[key];
        state2[key] = value;
        if (!this._isPause)
          this.events.publish(key, this._state, oldState);
        if (this.status !== "mutation") {
          console.warn(`You should use a mutation to set ${key}`);
        }
        this.status = "resting";
        return true;
      }
    });
  }
  createObjectReducer(stateValueName) {
    return (state = {}, action) => {
      switch (action.type) {
        case `${stateValueName}/ADD`:
          return {
            ...action.payload
          };
        case `${stateValueName}/UPDATE`:
          return {
            ...state,
            ...action.payload
          };
        case `${stateValueName}/DELETE`:
          return {};
        default:
          return state;
      }
    };
  }
  createArrayReducer(stateValueName, key) {
    return (state = [], action) => {
      switch (action.type) {
        case `${stateValueName}/ADD`:
          if (Array.isArray(action.payload)) {
            return [
              ...state,
              ...action.payload
            ];
          } else {
            return [
              ...state,
              action.payload
            ];
          }
        case `${stateValueName}/ADD_MANY`:
          return [
            ...state,
            ...action.payload
          ];
        case `${stateValueName}/UPDATE`:
          if (state.some((obj) => obj[key] == action.payload[key])) {
            return [
              ...state.map((obj) => {
                if (obj[key] == action.payload[key]) {
                  return action.payload;
                }
                return obj;
              })
            ];
          } else {
            return [
              ...state,
              action.payload
            ];
          }
        case `${stateValueName}/DELETE`:
          return [
            ...state.filter((obj) => obj.hasOwnProperty(key) && obj[key] != action.payload[key] || !obj.hasOwnProperty(key) && obj != action.payload)
          ];
        case `${stateValueName}/LOAD`:
          return [
            ...action.payload
          ];
        default:
          return state;
      }
    };
  }
}
let store = new Store();
export {
  defaultStoreActions,
  store
};