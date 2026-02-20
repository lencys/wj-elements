import { default as PubSub } from './pubsub.js';
export let store: Store;
import * as defaultStoreActions from './default-store-actions.js';
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
declare class Store {
    /**
     * Initializes the store with optional reducer and state.
     * @param {object} [params] Configuration for the store.
     * @param {Function} [params.reducer] Initial reducer function for handling state updates.
     * @param {object} [params.state] Initial state of the store.
     */
    constructor(params?: {
        reducer?: Function;
        state?: object;
    });
    _state: {};
    _reducer: Function;
    events: PubSub;
    status: string;
    _isPause: boolean;
    /**
     * Dispatches an action to update the state by invoking the reducer function.
     * @param {object} action The action object containing the type and any associated payload.
     * @param {string} action.type The type of the action being dispatched.
     * @returns {boolean} Returns `true` after the state has been successfully updated.
     * @example
     * const action = { type: 'INCREMENT', payload: { amount: 1 } };
     * store.dispatch(action);
     */
    dispatch(action: {
        type: string;
    }): boolean;
    /**
     * Retrieves a deep copy of the current state to ensure immutability.
     * @returns {object} A deep copy of the current state.
     * @example
     * const currentState = store.getState();
     * console.log(currentState);
     */
    getState(): object;
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
    subscribe(eventName: string, callbackFn: Function): Function;
    /**
     * Unsubscribes from a specific event by removing all associated listeners.
     * @param {string} eventName The name of the event to unsubscribe from.
     * @returns {void}
     * @example
     * store.unsubscribe('stateChange');
     */
    unsubscribe(eventName: string): void;
    /**
     * Pauses event handling or other operations.
     * @returns {this} Returns the current instance for method chaining.
     * @example
     * store.pause().doSomething();
     */
    pause(): this;
    /**
     * Resumes event handling or other operations.
     * @param {*} [val] Optional value to pass while resuming.
     * @returns {this} Returns the current instance for method chaining.
     * @example
     * store.play().doSomething();
     */
    play(val?: any): this;
    /**
     * Merges a new reducer function into the existing reducer for a specific state property.
     * @param {string} stateValueName The key in the state object that the new reducer will manage.
     * @param {Function} newReducer The reducer function to handle updates for the specified state property.
     * @returns {void}
     * @example
     * const newReducer = (newState, currentState) => ({ ...currentState, ...newState });
     * store.mergeReducers('user', newReducer);
     */
    mergeReducers(stateValueName: string, newReducer: Function): void;
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
    makeEveryArrayEntryAsStoreState(storeKey: string, array?: Array<object>, identificator?: string): void;
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
    define(stateValueName: string, defaultValue: any, reducer?: Function | null, key?: string): void;
    /**
     * Refreshes the state by wrapping it in a Proxy to track changes and notify subscribers.
     * @param {object} newState The new state object to be set. Defaults to an empty object if not provided.
     * @returns {void}
     * @example
     * store.refreshProxy({ user: { id: 1, name: 'John Doe' } });
     */
    refreshProxy(newState: object): void;
    /**
     * Creates a reducer function to manage an object state.
     * @param {string} stateValueName The name of the state property this reducer manages.
     * @returns {Function} A reducer function that handles `ADD`, `UPDATE`, and `DELETE` actions for the specified state property.
     * @throws {Error} If the payload is an array, an error is logged since the reducer is designed for object state management.
     * @example
     * const userReducer = store.createObjectReducer('user');
     * const newState = userReducer({ type: 'user/ADD', payload: { id: 1, name: 'John Doe' } });
     */
    createObjectReducer(stateValueName: string): Function;
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
    createArrayReducer(stateValueName: string, key: string): Function;
}
export { defaultStoreActions };
