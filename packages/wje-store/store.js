import { defaultStoreActions } from "./default-store-actions.js?v=@@version@@";
import PubSub from "./pubsub.js?v=@@version@@";

/**
 * @summary A reactive state management system with support for reducers, events, and state immutability.
 * @description The `Store` class provides a centralized way to manage application state with actions, reducers, and event subscriptions. It supports handling both object and array state, with flexibility for custom reducers.
 * @example
 * const store = new Store({
 *   reducer: (state, action) => { ... },
 *   state: { user: { id: 1, name: 'John' } }
 * });
 * store.subscribe('user', (newState, oldState) => console.log('User changed:', newState));
 * store.dispatch({ type: 'user/UPDATE', payload: { name: 'Jane' } });
 */
class Store {
    _state;
    _reducer;
    events;
    status;

    /**
     * Initializes the store with optional reducer and state.
     * @param {object} [params] Configuration for the store.
     * @param {Function} [params.reducer] Initial reducer function for handling state updates.
     * @param {object} [params.state] Initial state of the store.
     */
    constructor(params = {}) {
        this._isPause = false;
        this._state = {};
        this._reducer = () => {
            return {}
        };


        // A status enum to set during actions and mutations
        this.status = 'resting';

        // Attach our PubSub module as an `events` element
        this.events = new PubSub();

        if (params?.hasOwnProperty('reducer')) {
            this._reducer = params.reducer;
        }

        this.refreshProxy(params?.state)
    }

    /**
     * Dispatches an action to update the state by invoking the reducer function.
     * @param {object} action The action object containing the type and any associated payload.
     * @param {string} action.type The type of the action being dispatched.
     * @returns {boolean} Returns `true` after the state has been successfully updated.
     * @example
     * const action = { type: 'INCREMENT', payload: { amount: 1 } };
     * store.dispatch(action);
     */
    dispatch(action) {
        // Create a console group which will contain the logs from our Proxy etc
        // console.groupCollapsed(`ACTION: ${action.type}`);

        // Let anything that's watching the status know that we're dispatching an action
        this.status = 'action';

        let newState = this._reducer(this._state, action);

        this.status = 'mutation';
        // Merge the old and new together to create a new state and set it
        this._state = Object.assign(this._state, newState);

        // Close our console group to keep things nice and neat
        // console.groupEnd();

        return true;
    }

    /**
     * Retrieves a deep copy of the current state to ensure immutability.
     * @returns {object} A deep copy of the current state.
     * @example
     * const currentState = store.getState();
     * console.log(currentState);
     */
    getState() {
        return JSON.parse(JSON.stringify(this._state))
    }

    /**
     * Subscribes to a specific event with a provided callback function.
     * @param {string} eventName The name of the event to subscribe to.
     * @param {Function} callbackFn The function to execute when the event is triggered.
     * @returns {Function} - A function to unsubscribe from the event.
     * @example
     * const unsubscribe = store.subscribe('stateChange', (newState) => {
     *   console.log('State changed:', newState);
     * });
     * // Later, to unsubscribe
     * unsubscribe();
     */
    subscribe(eventName, callbackFn) {
        return this.events.subscribe(eventName, callbackFn)
    }

    /**
     * Unsubscribes from a specific event by removing all associated listeners.
     * @param {string} eventName The name of the event to unsubscribe from.
     * @returns {void}
     * @example
     * store.unsubscribe('stateChange');
     */
    unsubscribe(eventName) {
        delete this.events[eventName];
    }

    /**
     * Pauses event handling or other operations.
     * @returns {this} Returns the current instance for method chaining.
     * @example
     * store.pause().doSomething();
     */
    pause() {
        this._isPause = true;
        return this;
    }

    /**
     * Resumes event handling or other operations.
     * @param {*} [val] Optional value to pass while resuming.
     * @returns {this} Returns the current instance for method chaining.
     * @example
     * store.play().doSomething();
     */
    play(val) {
        this._isPause = false;
        return this;
    }

    /**
     * Merges a new reducer function into the existing reducer for a specific state property.
     * @param {string} stateValueName The key in the state object that the new reducer will manage.
     * @param {Function} newReducer The reducer function to handle updates for the specified state property.
     * @returns {void}
     * @example
     * const newReducer = (newState, currentState) => ({ ...currentState, ...newState });
     * store.mergeReducers('user', newReducer);
     */
    mergeReducers(stateValueName, newReducer) {
        let reducerCopy = this._reducer;
        this._reducer = (state, newState) => {
            let preState = reducerCopy(state, newState);
            return {
                ...preState,
                [stateValueName]: newReducer(newState, state[stateValueName])
            };
        }
    }

    /**
     * Synchronizes each entry in an array with the store by defining or updating state entries.
     * @param {string} storeKey The key prefix used for defining or updating store entries.
     * @param {Array<object>} [array] The array of entries to be synchronized with the store.
     * @param {string} [identificator] The property name used as a unique identifier for each entry.
     * @returns {void}
     * @example
     * const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
     * store.makeEveryArrayEntryAsStoreState('items', data, 'id');
     */
    makeEveryArrayEntryAsStoreState(storeKey, array = [], identificator = 'id') {
        array.forEach((entry) => {
            if (this.getState().hasOwnProperty(`${storeKey}-${entry[identificator]}`)) {
                this.dispatch(defaultStoreActions.updateAction(`${storeKey}-${entry[identificator]}`)(entry))
            } else {
                this.define(`${storeKey}-${entry.id || entry.source || entry[identificator]}`, entry, null, identificator);
            }
        });
    }

    /**
     * Defines a new state variable and associates it with a reducer.
     * @param {string} stateValueName The name of the state variable to define.
     * @param {*} defaultValue The initial value of the state variable.
     * @param {Function|null} [reducer] An optional reducer function to manage updates for the state variable.
     * @param {string} [key] The key used to identify individual entries if the state value is an array or object.
     * @returns {void}
     * @example
     * // Define a new state with a custom reducer
     * store.define('user', { id: 1, name: 'John Doe' }, (newState, currentState) => ({ ...currentState, ...newState }));
     * @example
     * // Define a new state with default array reducer
     * store.define('items', [], null, 'itemId');
     */
    define(stateValueName, defaultValue, reducer, key = "id") {
        if (this._state.hasOwnProperty(stateValueName)) {
            console.warn(`STATE už obsahuje premennú ${stateValueName},ktorú sa pokúšate pridať`)
            return
        }

        if (reducer instanceof Function) {
            this.mergeReducers(stateValueName, reducer)
        } else {
            if (defaultValue instanceof Array) {
                this.mergeReducers(stateValueName, this.createArrayReducer(stateValueName, key))
            } else {
                this.mergeReducers(stateValueName, this.createObjectReducer(stateValueName, key))
            }
        }

        this.refreshProxy({
            ...this._state,
            [stateValueName]: defaultValue
        })
    }

    /**
     * Refreshes the state by wrapping it in a Proxy to track changes and notify subscribers.
     * @param {object} newState The new state object to be set. Defaults to an empty object if not provided.
     * @returns {void}
     * @example
     * store.refreshProxy({ user: { id: 1, name: 'John Doe' } });
     */
    refreshProxy(newState) {
        // Set our state to be a Proxy. We are setting the default state by
        // checking the params and defaulting to an empty object if no default
        // state is passed in
        this._state = new Proxy((newState || {}), {
            set: (state, key, value) => {
                if (JSON.stringify(state[key]) === JSON.stringify(value)) {
                    return true
                }

                //Set the value as we would normally
                let oldState = state[key]
                state[key] = value;

                // Trace out to the console. This will be grouped by the related action
                // console.log(`stateChange: ${key}: `, value);

                // TODO vieme to rozšíríť a subscripe sa len na zmenu určitej časti statu
                // Publish the change event for the components that are listening
                if (!this._isPause)
                    this.events.publish(key, this._state, oldState);

                // Give the user a little telling off if they set a value directly
                if (this.status !== 'mutation') {
                    console.warn(`You should use a mutation to set ${key}`);
                }

                // Reset the status ready for the next operation
                this.status = 'resting';

                return true;
            }
        });
    }

    /**
     * Creates a reducer function to manage an object state.
     * @param {string} stateValueName The name of the state property this reducer manages.
     * @returns {Function} A reducer function that handles `ADD`, `UPDATE`, and `DELETE` actions for the specified state property.
     * @throws {Error} If the payload is an array, an error is logged since the reducer is designed for object state management.
     * @example
     * const userReducer = store.createObjectReducer('user');
     * const newState = userReducer({ type: 'user/ADD', payload: { id: 1, name: 'John Doe' } });
     */
    createObjectReducer(stateValueName) {
        return (action, state = {}) => {
            if (Array.isArray(action.payload)) {
                console.error(`Nemôžete pridať do objektu hodnotu, ktorá je pole. Skontrolujte si či definovanie stavu vyzerá takto: "store.define(${stateValueName}, {})"`);
            }

            const actionType = action.type.split('/')[1];

            if (['ADD', 'UPDATE', 'DELETE'].includes(actionType)) {
                console.error(`Nemôžete použiť akciu ${actionType} na objekt. Správne akcie pre objekt sú: ADD, UPDATE, DELETE`);
            }

            switch (action.type) {
                case `${stateValueName}/ADD`:
                    return {
                        ...action.payload
                    }
                case `${stateValueName}/UPDATE`:
                    return {
                        ...state,
                        ...action.payload
                    }
                case `${stateValueName}/DELETE`:
                    return {}
                default:
                    return state
            }
        }
    }

    /**
     * Creates a reducer function to manage an array state.
     * @param {string} stateValueName The name of the state property this reducer manages.
     * @param {string} key The unique key used to identify items in the array for updates and deletions.
     * @returns {Function} A reducer function that handles `ADD`, `ADD_MANY`, `UPDATE`, `DELETE`, and `LOAD` actions for the specified state property.
     * @throws {Error} If `action.payload` is not an array when required.
     * @example
     * const itemsReducer = store.createArrayReducer('items', 'id');
     * const newState = itemsReducer({ type: 'items/ADD', payload: { id: 1, name: 'Item 1' } });
     */
    createArrayReducer(stateValueName, key) {
        return (action, state = []) => {
            if (Array.isArray(action.payload) && action.payload.length === 0) {
                console.warn(`Nemá zmysel pridávať prázdne pole do pola`)
            }

            if (!Array.isArray(action.payload) && action.type !== defaultStoreActions.updateAction(stateValueName).type && action.type !== defaultStoreActions.deleteAction(stateValueName).type && action.type !== defaultStoreActions.updateAction(stateValueName).type) {
                console.error(`Nemôžete pridať do poľa hodnotu, ktorá nie je pole. Skontrolujte si či definovanie stavu vyzerá takto: "store.define(${stateValueName}, [])"`)
            }

            switch (action.type) {
                case `${stateValueName}/ADD`:
                    if (Array.isArray(action.payload)) {
                        return [
                            ...state,
                            ...action.payload
                        ]
                    } else {
                        return [
                            ...state,
                            action.payload
                        ]
                    }
                case `${stateValueName}/ADD_MANY`:
                    return [
                        ...state,
                        ...action.payload
                    ]
                case `${stateValueName}/UPDATE`:

                    if (state.some(obj => obj[key] === action.payload[key])) {
                        return [
                            ...state.map(obj => {
                                if (obj[key] === action.payload[key]) {
                                    return action.payload
                                }
                                return obj
                            })];
                    } else {
                        return [...state,
                        action.payload
                        ];
                    }
                case `${stateValueName}/DELETE`:
                    return [
                        ...state.filter(obj => (obj.hasOwnProperty(key) && (obj[key] !== action.payload[key])) || (!obj.hasOwnProperty(key) && obj !== action.payload))
                    ]

                case `${stateValueName}/LOAD`:
                    return [
                        ...action.payload
                    ]
                default:
                    return state
            }
        }
    }
}

let store = new Store();
export { store, defaultStoreActions };