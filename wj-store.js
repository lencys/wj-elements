var h = Object.defineProperty;
var o = (u, r, e) => r in u ? h(u, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[r] = e;
var n = (u, r, e) => (o(u, typeof r != "symbol" ? r + "" : r, e), e);
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
  subscribe(r, e) {
    let t = this;
    return t.events.hasOwnProperty(r) || (t.events[r] = []), t.events[r].push(e) - 1, {
      unsubscribe() {
        t.events[r].splice(t.events[r].indexOf(e), 1);
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
  publish(r, e = {}, t) {
    let s = this;
    return s.events.hasOwnProperty(r) ? s.events[r].map((i) => i(e, t)) : [];
  }
}
const c = (u) => (r) => ({
  type: `${u}/ADD`,
  payload: r
}), p = (u) => (r) => ({
  type: `${u}/ADD_MANY`,
  payload: r
}), l = (u) => (r) => ({
  type: `${u}/UPDATE`,
  payload: r
}), a = (u) => (r) => ({
  type: `${u}/DELETE`,
  payload: r
}), f = (u) => (r) => ({
  type: `${u}/LOAD`,
  payload: r
}), y = {
  addAction: c,
  deleteAction: a,
  loadAction: f,
  updateAction: l,
  addManyAction: p
};
class A {
  constructor(r = {}) {
    n(this, "_state");
    n(this, "_reducer");
    n(this, "events");
    n(this, "status");
    this._isPause = !1, this._state = {}, this._reducer = function(t = {}, s) {
      return {};
    }, this.status = "resting", this.events = new d(), r != null && r.hasOwnProperty("reducer") && (this._reducer = r.reducer), this.refreshProxy(r == null ? void 0 : r.state);
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
  dispatch(r) {
    this.status = "action";
    let e = this._reducer(this._state, r);
    return this.status = "mutation", this._state = Object.assign(this._state, e), !0;
  }
  getState() {
    return JSON.parse(JSON.stringify(this._state));
  }
  subscribe(r, e) {
    return this.events.subscribe(r, e);
  }
  unsubscribe(r) {
    delete this.events[r];
  }
  pause() {
    return this._isPause = !0, this;
  }
  play(r) {
    return this._isPause = !1, this;
  }
  mergeReducers(r, e) {
    let t = this._reducer;
    this._reducer = (s, i) => ({
      ...t(s, i),
      [r]: e(s[r], i)
    });
  }
  makeEveryArrayEntryAsStoreState(r, e = [], t = "id") {
    e.forEach((s) => {
      this.getState().hasOwnProperty(`${r}-${s[t]}`) ? this.dispatch(y.updateAction(`${r}-${s[t]}`)(s)) : this.define(`${r}-${s.id || s.source || s[t]}`, s, null, t);
    });
  }
  define(r, e, t, s = "id") {
    if (this._state.hasOwnProperty(r)) {
      console.warn(`STATE už obsahuje premennú ${r},ktorú sa pokúšate pridať`);
      return;
    }
    t instanceof Function ? this.mergeReducers(r, t) : e instanceof Array ? this.mergeReducers(r, this.createArrayReducer(r, s)) : this.mergeReducers(r, this.createObjectReducer(r, s)), this.refreshProxy({
      ...this._state,
      [r]: e
    });
  }
  refreshProxy(r) {
    this._state = new Proxy(r || {}, {
      set: (e, t, s) => {
        if (JSON.stringify(e[t]) === JSON.stringify(s))
          return !0;
        let i = e[t];
        return e[t] = s, this._isPause || this.events.publish(t, this._state, i), this.status !== "mutation" && console.warn(`You should use a mutation to set ${t}`), this.status = "resting", !0;
      }
    });
  }
  createObjectReducer(r) {
    return (e = {}, t) => {
      switch (t.type) {
        case `${r}/ADD`:
          return {
            ...t.payload
          };
        case `${r}/UPDATE`:
          return {
            ...e,
            ...t.payload
          };
        case `${r}/DELETE`:
          return {};
        default:
          return e;
      }
    };
  }
  createArrayReducer(r, e) {
    return (t = [], s) => {
      switch (s.type) {
        case `${r}/ADD`:
          return Array.isArray(s.payload) ? [
            ...t,
            ...s.payload
          ] : [
            ...t,
            s.payload
          ];
        case `${r}/ADD_MANY`:
          return [
            ...t,
            ...s.payload
          ];
        case `${r}/UPDATE`:
          return t.some((i) => i[e] == s.payload[e]) ? [
            ...t.map((i) => i[e] == s.payload[e] ? s.payload : i)
          ] : [
            ...t,
            s.payload
          ];
        case `${r}/DELETE`:
          return [
            ...t.filter((i) => i.hasOwnProperty(e) && i[e] != s.payload[e] || !i.hasOwnProperty(e) && i != s.payload)
          ];
        case `${r}/LOAD`:
          return [
            ...s.payload
          ];
        default:
          return t;
      }
    };
  }
}
let D = new A();
export {
  y as defaultStoreActions,
  D as store
};
