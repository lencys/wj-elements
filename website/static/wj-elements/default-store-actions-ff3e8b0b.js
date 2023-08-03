class d {
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
  subscribe(t, n) {
    let r = this;
    return r.events.hasOwnProperty(t) || (r.events[t] = []), r.events[t].push(n) - 1, {
      unsubscribe() {
        r.events[t].splice(r.events[t].indexOf(n), 1);
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
  publish(t, n = {}, r) {
    let s = this;
    return s.events.hasOwnProperty(t) ? s.events[t].map((o) => o(n, r)) : [];
  }
}
const u = (e) => (t) => ({
  type: `${e}/ADD`,
  payload: t
}), a = (e) => (t) => ({
  type: `${e}/ADD_MANY`,
  payload: t
}), p = (e) => (t) => ({
  type: `${e}/UPDATE`,
  payload: t
}), c = (e) => (t) => ({
  type: `${e}/DELETE`,
  payload: t
}), i = (e) => (t) => ({
  type: `${e}/LOAD`,
  payload: t
}), l = {
  addAction: u,
  deleteAction: c,
  loadAction: i,
  updateAction: p,
  addManyAction: a
};
export {
  d as P,
  l as d
};
