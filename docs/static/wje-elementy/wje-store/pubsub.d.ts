export default class PubSub {
    events: {};
    /**
     * Either create a new event instance for passed `event` name.
     * or push a new callback into the existing collection.
     * @param {string} event The event name to subscribe to
     * @param {Function} callback The callback function to subscribe to the event
     * @returns {number} A count of callbacks for this event
     * @memberof PubSub
     */
    subscribe(event: string, callback: Function): number;
    /**
     * If the passed event has callbacks attached to it, loop through each one and call it.
     * @param {string} event The name of the event to publish
     * @param {any} state The current state to pass to the callbacks
     * @param {object} [newData] The new data to pass to the callbacks
     * @param {object} [oldData] The old data to pass to the callbacks
     * @returns {Array} The results of the callbacks for this event, or an empty array if no event exists
     * @memberof PubSub
     */
    publish(event: string, state: any, newData?: object, oldData?: object): any[];
}
