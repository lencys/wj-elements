var n = Object.defineProperty;
var d = (u, r, e) => r in u ? n(u, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[r] = e;
var h = (u, r, e) => (d(u, typeof r != "symbol" ? r + "" : r, e), e);
import { P as c, d as o } from "./default-store-actions-ff3e8b0b.js";
class f {
  constructor(r = {}) {
    h(this, "_state");
    h(this, "_reducer");
    h(this, "events");
    h(this, "status");
    this._isPause = !1, this._state = {}, this._reducer = function(s = {}, t) {
      return {};
    }, this.status = "resting", this.events = new c(), r != null && r.hasOwnProperty("reducer") && (this._reducer = r.reducer), this.refreshProxy(r == null ? void 0 : r.state);
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
    let s = this._reducer;
    this._reducer = (t, i) => ({
      ...s(t, i),
      [r]: e(t[r], i)
    });
  }
  makeEveryArrayEntryAsStoreState(r, e = [], s = "id") {
    e.forEach((t) => {
      this.getState().hasOwnProperty(`${r}-${t[s]}`) ? this.dispatch(o.updateAction(`${r}-${t[s]}`)(t)) : this.define(`${r}-${t.id || t.source || t[s]}`, t, null, s);
    });
  }
  define(r, e, s, t = "id") {
    if (this._state.hasOwnProperty(r)) {
      console.warn(`STATE už obsahuje premennú ${r},ktorú sa pokúšate pridať`);
      return;
    }
    s instanceof Function ? this.mergeReducers(r, s) : e instanceof Array ? this.mergeReducers(r, this.createArrayReducer(r, t)) : this.mergeReducers(r, this.createObjectReducer(r, t)), this.refreshProxy({
      ...this._state,
      [r]: e
    });
  }
  refreshProxy(r) {
    this._state = new Proxy(r || {}, {
      set: (e, s, t) => {
        if (JSON.stringify(e[s]) === JSON.stringify(t))
          return !0;
        let i = e[s];
        return e[s] = t, this._isPause || this.events.publish(s, this._state, i), this.status !== "mutation" && console.warn(`You should use a mutation to set ${s}`), this.status = "resting", !0;
      }
    });
  }
  createObjectReducer(r) {
    return (e = {}, s) => {
      switch (s.type) {
        case `${r}/ADD`:
          return {
            ...s.payload
          };
        case `${r}/UPDATE`:
          return {
            ...e,
            ...s.payload
          };
        case `${r}/DELETE`:
          return {};
        default:
          return e;
      }
    };
  }
  createArrayReducer(r, e) {
    return (s = [], t) => {
      switch (t.type) {
        case `${r}/ADD`:
          return Array.isArray(t.payload) ? [
            ...s,
            ...t.payload
          ] : [
            ...s,
            t.payload
          ];
        case `${r}/ADD_MANY`:
          return [
            ...s,
            ...t.payload
          ];
        case `${r}/UPDATE`:
          return s.some((i) => i[e] == t.payload[e]) ? [
            ...s.map((i) => i[e] == t.payload[e] ? t.payload : i)
          ] : [
            ...s,
            t.payload
          ];
        case `${r}/DELETE`:
          return [
            ...s.filter((i) => i.hasOwnProperty(e) && i[e] != t.payload[e] || !i.hasOwnProperty(e) && i != t.payload)
          ];
        case `${r}/LOAD`:
          return [
            ...t.payload
          ];
        default:
          return s;
      }
    };
  }
}
let y = new f();
export {
  o as defaultStoreActions,
  y as store
};
