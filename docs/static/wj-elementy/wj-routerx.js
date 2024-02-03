var st = Object.defineProperty;
var ot = (r, t, e) => t in r ? st(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var A = (r, t, e) => (ot(r, typeof t != "symbol" ? t + "" : t, e), e);
import at from "./wj-element.js";
import { r as ct } from "./router-links-e0087f84.js";
import "./wj-store.js";
var z = "/";
function ut(r, t, e, n) {
  for (var i = 0, s = n; s < e.length; ) {
    if (e[s] === "\\") {
      s += 2;
      continue;
    }
    if (e[s] === t && (i--, i === 0))
      return s + 1;
    e[s] === r && i++, s++;
  }
  return -1;
}
function ht(r, t) {
  t === void 0 && (t = {});
  for (var e, n, i = [], s = (e = t.delimiter, e ?? z), c = (n = t.whitelist, n ?? void 0), o = 0, u = 0, a = "", h = !1; o < r.length; ) {
    var g = "", m = "", f = "";
    if (r[o] === "\\") {
      o++, a += r[o++], h = !0;
      continue;
    }
    if (r[o] === ":") {
      for (; ++o < r.length; ) {
        var d = r.charCodeAt(o);
        if (
          // `0-9`
          d >= 48 && d <= 57 || // `A-Z`
          d >= 65 && d <= 90 || // `a-z`
          d >= 97 && d <= 122 || // `_`
          d === 95
        ) {
          m += r[o];
          continue;
        }
        break;
      }
      m || o--;
    }
    if (r[o] === "(") {
      var w = ut("(", ")", r, o);
      if (w > -1) {
        if (f = r.slice(o + 1, w - 1), o = w, f[0] === "?")
          throw new TypeError("Path pattern must be a capturing group");
        if (/\((?=[^?])/.test(f)) {
          var p = f.replace(/\((?=[^?])/, "(?:");
          throw new TypeError("Capturing groups are not allowed in pattern, use a non-capturing group: (" + p + ")");
        }
      }
    }
    if (m === "" && f === "") {
      a += r[o++], h = !1;
      continue;
    }
    if (a.length && !h) {
      var y = a[a.length - 1], l = c ? c.indexOf(y) > -1 : !0;
      l && (g = y, a = a.slice(0, -1));
    }
    a.length && (i.push(a), a = "");
    var v = r[o] === "+" || r[o] === "*", E = r[o] === "?" || r[o] === "*", b = g || s;
    (v || E) && o++, i.push({
      name: m || u++,
      prefix: g,
      delimiter: b,
      optional: E,
      repeat: v,
      pattern: f || "[^" + R(b === s ? b : b + s) + "]+?"
    });
  }
  return a.length && i.push(a), i;
}
function R(r) {
  return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function J(r) {
  return r && r.sensitive ? "" : "i";
}
function lt(r, t) {
  if (!t)
    return r;
  var e = r.source.match(/\((?!\?)/g);
  if (e)
    for (var n = 0; n < e.length; n++)
      t.push({
        name: n,
        prefix: "",
        delimiter: "",
        optional: !1,
        repeat: !1,
        pattern: ""
      });
  return r;
}
function ft(r, t, e) {
  var n = r.map(function(i) {
    return Z(i, t, e).source;
  });
  return new RegExp("(?:" + n.join("|") + ")", J(e));
}
function pt(r, t, e) {
  return dt(ht(r, e), t, e);
}
function dt(r, t, e) {
  e === void 0 && (e = {});
  for (var n = e.strict, i = e.start, s = i === void 0 ? !0 : i, c = e.end, o = c === void 0 ? !0 : c, u = e.delimiter, a = u === void 0 ? z : u, h = e.encode, g = h === void 0 ? function(E) {
    return E;
  } : h, m = (typeof e.endsWith == "string" ? e.endsWith.split("") : e.endsWith || []).map(R).concat("$").join("|"), f = s ? "^" : "", d = 0, w = r; d < w.length; d++) {
    var p = w[d];
    if (typeof p == "string")
      f += R(g(p));
    else {
      var y = p.repeat ? "(?:" + p.pattern + ")(?:" + R(p.delimiter) + "(?:" + p.pattern + "))*" : p.pattern;
      t && t.push(p), p.optional ? p.prefix ? f += "(?:" + R(p.prefix) + "(" + y + "))?" : f += "(" + y + ")?" : f += R(p.prefix) + "(" + y + ")";
    }
  }
  if (o)
    n || (f += "(?:" + R(a) + ")?"), f += m === "$" ? "$" : "(?=" + m + ")";
  else {
    var l = r[r.length - 1], v = typeof l == "string" ? l[l.length - 1] === a : (
      // tslint:disable-next-line
      l === void 0
    );
    n || (f += "(?:" + R(a) + "(?=" + m + "))?"), v || (f += "(?=" + R(a) + "|" + m + ")");
  }
  return new RegExp(f, J(e));
}
function Z(r, t, e) {
  return r instanceof RegExp ? lt(r, t) : Array.isArray(r) ? ft(r, t, e) : pt(r, t, e);
}
const mt = (r, t, e) => (r[t] = e, r), gt = Array.isArray, O = Object.keys, L = (r) => r && (gt(r) ? r.slice(0) : C({}, r)), F = (r, t) => t.reduce((e, n) => r[n] === void 0 ? e : mt(e, n, r[n]), {}), H = (r, t) => {
  const e = O(r);
  return e.length === O(t).length && e.every((n) => t[n] === r[n]);
}, C = Object.assign;
function q(r, t, ...e) {
  if (!r) {
    let n = 0;
    throw new Error(
      "Invariant Violation: " + t.replace(/%s/g, () => e[n++])
    );
  }
}
function vt(r) {
  let t = [];
  const e = {}, n = {};
  r(function(u, a, h) {
    let g;
    if (q(!n[u], 'Route names must be unique, but route "%s" is declared multiple times', u), n[u] = !0, arguments.length === 1 && (a = {}), arguments.length === 2 && typeof a == "function" && (h = a, a = {}), typeof a.path != "string") {
      const m = u.split(".");
      a.path = m[m.length - 1];
    }
    h && (t = t.concat(u), h(), g = i(), t.splice(-1)), s({
      name: u,
      path: a.path,
      routes: g || [],
      options: a
    });
  });
  function i() {
    return e[c()] || [];
  }
  function s(o) {
    const u = c();
    e[u] = e[u] || [], e[u].push(o);
  }
  function c() {
    return t.join(".");
  }
  return i();
}
function G(r) {
  const t = [];
  return r.forEach(({ name: e, children: n, ...i }) => {
    if (typeof i.path != "string") {
      const s = e.split(".");
      i.path = s[s.length - 1];
    }
    t.push(
      {
        name: e,
        path: i.path,
        options: i,
        routes: n ? G(n) : []
      }
    );
  }), t;
}
const wt = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?+*]?)/g, yt = /[+*?]$/g, X = /\?(.+)/, D = {};
function Y(r) {
  if (!(r in D)) {
    const t = [], e = Z(r, t);
    D[r] = {
      matcher: e,
      paramNames: t.map((n) => n.name)
    };
  }
  return D[r];
}
function Et(r) {
  return Y(r).paramNames;
}
function bt(r, t) {
  const e = Y(r), n = e.matcher, i = e.paramNames, s = t.match(n);
  if (!s)
    return null;
  const c = {};
  return i.forEach(function(o, u) {
    c[o] = s[u + 1] && decodeURIComponent(s[u + 1]);
  }), c;
}
function Rt(r, t) {
  return t = t || {}, r.replace(wt, function(e, n) {
    const i = n.replace(yt, ""), s = n.slice(-1);
    if (s === "?" || s === "*") {
      if (t[i] == null)
        return "";
    } else
      q(
        t[i] != null,
        "Missing '%s' parameter for path '%s'",
        i,
        r
      );
    let c = encodeURIComponent(t[i]);
    return (s === "*" || s === "+") && (c = c.replaceAll("%2F", "/")), c;
  });
}
function Tt(r, t) {
  const e = t.match(X);
  return e && r.parse(e[1]);
}
function Lt(r, t, e) {
  const n = r.stringify(e, { indices: !1 });
  return n ? tt(t) + "?" + n : t;
}
function tt(r) {
  return r.replace(X, "");
}
function et(r, t, e) {
  return r.addEventListener(t, e), e;
}
function rt(r, t, e) {
  return r.removeEventListener(t, e), e;
}
class Ct {
  constructor() {
    this.handlers = [], this.checkUrl = this.checkUrl.bind(this), this.location = window.location, this.history = window.history;
  }
  // Set up all inheritable **Backbone.History** properties and methods.
  // Are we at the app root?
  atRoot() {
    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root;
  }
  // Gets the true hash value. Cannot use location.hash directly due to bug
  // in Firefox where location.hash will always be decoded.
  getHash() {
    const t = this.location.href.match(/#(.*)$/);
    return t ? t[1] : "";
  }
  // Get the cross-browser normalized URL fragment, either from the URL,
  // the hash, or the override.
  getFragment(t, e) {
    if (t == null)
      if (this._hasPushState || !this._wantsHashChange || e) {
        t = decodeURI(this.location.pathname + this.location.search);
        const n = this.root.replace(St, "");
        t.indexOf(n) || (t = t.slice(n.length));
      } else
        t = this.getHash();
    return t.replace(B, "");
  }
  // Start the hash change handling, returning `true` if the current URL matches
  // an existing route, and `false` otherwise.
  start(t = {}) {
    this.started = !0, this.options = C({ root: "/" }, t), this.location = this.options.location || this.location, this.history = this.options.history || this.history, this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = this._wantsPushState;
    const e = this.getFragment();
    this.root = `/${this.root}/`.replace($t, "/"), et(window, this._hasPushState ? "popstate" : "hashchange", this.checkUrl), this.fragment = e;
    const n = this.location;
    if (this._wantsHashChange && this._wantsPushState) {
      if (!this._hasPushState && !this.atRoot())
        return this.fragment = this.getFragment(null, !0), this.location.replace(`${this.root}#${this.fragment}`), !0;
      this._hasPushState && this.atRoot() && n.hash && (this.fragment = this.getHash().replace(B, ""), this.history.replaceState({}, document.title, this.root + this.fragment));
    }
    if (!this.options.silent)
      return this.loadUrl();
  }
  // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
  // but possibly useful for unit testing Routers.
  stop() {
    rt(window, this._hasPushState ? "popstate" : "hashchange", this.checkUrl), this.started = !1;
  }
  // Add a route to be tested when the fragment changes. Routes added later
  // may override previous routes.
  route(t, e) {
    this.handlers.unshift({ route: t, callback: e });
  }
  // Checks the current URL to see if it has changed, and if it has,
  // calls `loadUrl`.
  checkUrl() {
    if (this.getFragment() === this.fragment)
      return !1;
    this.loadUrl();
  }
  // Attempt to load the current URL fragment. If a route succeeds with a
  // match, returns `true`. If no defined routes matches the fragment,
  // returns `false`.
  loadUrl(t) {
    return t = this.fragment = this.getFragment(t), this.handlers.some((e) => {
      if (e.route.test(t))
        return e.callback(t), !0;
    });
  }
  // Save a fragment into the hash history, or replace the URL state if the
  // 'replace' option is passed. You are responsible for properly URL-encoding
  // the fragment in advance.
  //
  // The options object can contain `trigger: true` if you wish to have the
  // route callback be fired (not usually desirable), or `replace: true`, if
  // you wish to modify the current URL without adding an entry to the history.
  update(t, e) {
    if (!this.started)
      return !1;
    (!e || e === !0) && (e = { trigger: !!e });
    let n = this.root + (t = this.getFragment(t || ""));
    if (t = t.replace(Ut, ""), this.fragment !== t) {
      if (this.fragment = t, t === "" && n !== "/" && (n = n.slice(0, -1)), this._hasPushState)
        this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
      else if (this._wantsHashChange)
        this._updateHash(this.location, t, e.replace);
      else
        return this.location.assign(n);
      if (e.trigger)
        return this.loadUrl(t);
    }
  }
  // Update the hash location, either replacing the current entry, or adding
  // a new one to the browser history.
  _updateHash(t, e, n) {
    if (n) {
      const i = t.href.replace(/(javascript:|#).*$/, "");
      t.replace(`${i}#${e}`);
    } else
      t.hash = `#${e}`;
  }
  // add some features to History
  // a generic callback for any changes
  onChange(t) {
    this.route(/^(.*?)$/, t);
  }
  // checks if the browser has pushstate support
  hasPushState() {
    if (!this.started)
      throw new Error("only available after LocationBar.start()");
    return this._hasPushState;
  }
}
const B = /^[#\/]|\s+$/g, $t = /^\/+|\/+$/g, St = /\/$/, Ut = /#.*$/;
class xt {
  constructor(t = {}) {
    this.path = t.path || "", this.options = C({
      pushState: !1,
      root: "/"
    }, t), this.locationBar = new Ct(), this.locationBar.onChange((e) => {
      this.handleURL(`/${e || ""}`);
    }), this.locationBar.start(t);
  }
  /**
   * Get the current URL
   */
  getURL() {
    return this.path;
  }
  /**
   * Set the current URL without triggering any events
   * back to the router. Add a new entry in browser's history.
   */
  setURL(t, e = {}) {
    this.path !== t && (this.path = t, this.locationBar.update(t, C({ trigger: !0 }, e)));
  }
  /**
   * Set the current URL without triggering any events
   * back to the router. Replace the latest entry in broser's history.
   */
  replaceURL(t, e = {}) {
    this.path !== t && (this.path = t, this.locationBar.update(t, C({ trigger: !0, replace: !0 }, e)));
  }
  /**
   * Setup a URL change handler
   * @param  {Function} callback
   */
  onChange(t) {
    this.changeCallback = t;
  }
  /**
   * Given a path, generate a URL appending root
   * if pushState is used and # if hash state is used
   */
  formatURL(t) {
    if (this.locationBar.hasPushState()) {
      let e = this.options.root;
      return t !== "" && (e = e.replace(/\/$/, "")), e + t;
    } else
      return t[0] === "/" && (t = t.substr(1)), `#${t}`;
  }
  /**
   * When we use pushState with a custom root option,
   * we need to take care of removingRoot at certain points.
   * Specifically
   * - browserLocation.update() can be called with the full URL by router
   * - LocationBar expects all .update() calls to be called without root
   * - this method is public so that we could dispatch URLs without root in router
   */
  removeRoot(t) {
    return this.options.pushState && this.options.root && this.options.root !== "/" ? t.replace(this.options.root, "") : t;
  }
  /**
   * Stop listening to URL changes and link clicks
   */
  destroy() {
    this.locationBar.stop();
  }
  /**
      initially, the changeCallback won't be defined yet, but that's good
      because we dont' want to kick off routing right away, the router
      does that later by manually calling this handleURL method with the
      url it reads of the location. But it's important this is called
      first by Backbone, because we wanna set a correct this.path value
  
      @private
     */
  handleURL(t) {
    this.path = t, this.changeCallback && this.changeCallback(t);
  }
}
class Pt {
  constructor({ path: t }) {
    this.path = t || "";
  }
  getURL() {
    return this.path;
  }
  setURL(t, e) {
    this.path !== t && (this.path = t, this.handleURL(this.getURL(), e));
  }
  replaceURL(t, e) {
    this.path !== t && this.setURL(t, e);
  }
  onChange(t) {
    this.changeCallback = t;
  }
  handleURL(t, e = {}) {
    this.path = t, e = C({ trigger: !0 }, e), this.changeCallback && e.trigger && this.changeCallback(t);
  }
  removeRoot(t) {
    return t;
  }
  formatURL(t) {
    return t;
  }
}
const N = "TransitionRedirected", P = "TransitionCancelled";
function W(r, t, e) {
  r.middleware.forEach((n) => {
    n.error && n.error(t, e);
  });
}
function k(r) {
  r = r || {};
  const t = r.router, e = t.log, n = t.logError, i = r.path, s = r.match, c = s.routes, o = s.params, u = s.pathname, a = s.query, h = r.id, g = Date.now();
  e("---"), e("Transition #" + h, "to", i), e("Transition #" + h, "routes:", c.map((l) => l.name)), e("Transition #" + h, "params:", o), e("Transition #" + h, "query:", a);
  let m, f;
  const d = new Promise(function(l, v) {
    m = l, f = v;
  });
  d.then(function() {
    e("Transition #" + h, "completed in", Date.now() - g + "ms");
  }).catch(function(l) {
    l.type !== N && l.type !== P && (e("Transition #" + h, "FAILED"), n(l));
  });
  let w = !1;
  const p = {
    id: h,
    prev: {
      routes: L(t.state.routes) || [],
      path: t.state.path || "",
      pathname: t.state.pathname || "",
      params: L(t.state.params) || {},
      query: L(t.state.query) || {}
    },
    routes: L(c),
    path: i,
    pathname: u,
    params: L(o),
    query: L(a),
    redirectTo: function(...l) {
      return t.transitionTo(...l);
    },
    retry: function() {
      return t.transitionTo(i);
    },
    cancel: function(l) {
      t.state.activeTransition === p && (p.isCancelled || (t.state.activeTransition = null, p.isCancelled = !0, w = !0, l || (l = new Error(P), l.type = P), l.type === P && e("Transition #" + h, "cancelled"), l.type === N && e("Transition #" + h, "redirected"), t.middleware.forEach((v) => {
        v.cancel && v.cancel(p, l);
      }), f(l)));
    },
    followRedirects: function() {
      return d.catch(function(l) {
        return t.state.activeTransition ? t.state.activeTransition.followRedirects() : Promise.reject(l);
      });
    },
    then: d.then.bind(d),
    catch: d.catch.bind(d)
  };
  t.middleware.forEach((l) => {
    l.before && l.before(p);
  });
  function y(l, v) {
    let E, b;
    if (!w)
      if (l < t.middleware.length) {
        E = t.middleware[l], b = E.name || "anonymous", e("Transition #" + h, "resolving middleware:", b);
        let S;
        try {
          S = E.resolve ? E.resolve(p, v) : v, q(p !== S, "Middleware %s returned a transition which resulted in a deadlock", b);
        } catch (T) {
          return t.state.activeTransition = null, W(t, p, T), f(T);
        }
        Promise.resolve(S).then(function(T) {
          y(l + 1, T);
        }).catch(function(T) {
          e("Transition #" + h, "resolving middleware:", b, "FAILED"), t.state.activeTransition = null, W(t, p, T), f(T);
        });
      } else
        t.state = {
          activeTransition: null,
          routes: c,
          path: i,
          pathname: u,
          params: o,
          query: a
        }, t.middleware.forEach((S) => {
          S.done && S.done(p);
        }), m();
  }
  return r.noop ? m() : Promise.resolve().then(() => y(0)), r.noop && (p.noop = !0), p;
}
function _t(r, t) {
  const e = Ot(r, "click", function(n, i) {
    It(n, i) && t(n, i);
  });
  return function() {
    Nt(r, "click", e);
  };
}
function At(r) {
  var e;
  r = { parentNode: r };
  const t = document;
  for (; (r = r.parentNode) && r !== document; ) {
    if (((e = r.tagName) == null ? void 0 : e.toLowerCase()) === "a")
      return r;
    if (r === t)
      return;
  }
}
function Ot(r, t, e) {
  return et(r, t, function(n) {
    const i = n.target || n.srcElement, s = At(i);
    s && e(n, s);
  });
}
function Nt(r, t, e) {
  rt(r, t, e);
}
function It(r, t) {
  if (qt(r) !== 1 || r.metaKey || r.ctrlKey || r.shiftKey || r.defaultPrevented || t.target || t.getAttribute("data-bypass") !== null)
    return;
  const e = t.getAttribute("href");
  if (!(!e || e.length === 0) && e[0] !== "#" && !(e.indexOf("http://") === 0 || e.indexOf("https://") === 0) && e.indexOf("mailto:") !== 0 && e.indexOf("javascript:") !== 0)
    return !0;
}
function qt(r) {
  return r = r || window.event, r.which === null ? r.button : r.which;
}
function Q(r, t, e) {
  e !== !0 && (r[t] = typeof e == "function" ? e : () => {
  });
}
var Dt = {
  parse(r) {
    return r.split("&").reduce((t, e) => {
      const n = e.split("=");
      return t[n[0]] = decodeURIComponent(n[1]), t;
    }, {});
  },
  stringify(r) {
    return Object.keys(r).reduce((t, e) => (r[e] !== void 0 && t.push(e + "=" + encodeURIComponent(r[e])), t), []).join("&");
  }
};
class Mt {
  constructor(t = {}) {
    this.nextId = 1, this.state = {}, this.middleware = [], this.options = C({
      location: "browser",
      logError: !0,
      qs: Dt
    }, t), Q(this, "log", this.options.log), Q(this, "logError", this.options.logError), t.routes && this.map(t.routes);
  }
  /**
   * Add a middleware
   * @param  {Function} middleware
   * @return {Object}   router
   * @api public
   */
  use(t, e = {}) {
    const n = typeof t == "function" ? { resolve: t } : t;
    return typeof e.at == "number" ? this.middleware.splice(e.at, 0, n) : this.middleware.push(n), n.create && n.create(this), this;
  }
  /**
   * Add the route map
   * @param  {Function} routes
   * @return {Object}   router
   * @api public
   */
  map(t) {
    this.routes = Array.isArray(t) ? G(t) : vt(t);
    const e = this.matchers = [], n = {}, i = {};
    s({ routes: this.routes }, [], (c) => {
      let o = c.reduce((a, h) => (
        // reset if there's a leading slash, otherwise concat
        // and keep resetting the trailing slash
        (h.path[0] === "/" ? h.path : `${a}/${h.path}`).replace(/\/$/, "")
      ), "");
      o === "" && (o = "/");
      const u = c[c.length - 1];
      if (u.options.abstract) {
        i[o] = u.name;
        return;
      }
      if (u.path === "") {
        let a;
        e.some((h) => {
          if (h.path === o)
            return a = h, !0;
        }), a ? a.routes = c : i[o] && e.push({
          routes: c,
          name: i[o],
          path: o
        });
      }
      if (e.push({
        routes: c,
        name: u.name,
        path: o
      }), n[o] && u.path !== "")
        throw new Error(`Routes ${n[o]} and ${u.name} have the same url path '${o}'`);
      n[o] = u.name;
    });
    function s(c, o, u) {
      c.routes.forEach((a) => {
        u(o.concat(a)), a.routes.length && s(a, o.concat(a), u);
      });
    }
    return this;
  }
  /**
   * Starts listening to the location changes.
   * @param  {Object}  location (optional)
   * @return {Promise} initial transition
   *
   * @api public
   */
  listen(t) {
    const e = this.location = this.createLocation(t || "");
    return e.onChange((n) => {
      const i = this.state.path;
      this.dispatch(n).catch((s) => (s && s.type === P && this.location.replaceURL(i, { trigger: !1 }), s));
    }), this.dispatch(e.getURL());
  }
  /**
   * Transition to a different route. Passe in url or a route name followed by params and query
   * @param  {String} url     url or route name
   * @param  {Object} params  Optional
   * @param  {Object} query   Optional
   * @return {Object}         transition
   *
   * @api public
   */
  transitionTo(t, e, n) {
    return this.state.activeTransition ? this.replaceWith(t, e, n) : this.doTransition("setURL", t, e, n);
  }
  /**
   * Like transitionTo, but doesn't leave an entry in the browser's history,
   * so clicking back will skip this route
   * @param  {String} url     url or route name followed by params and query
   * @param  {Object} params  Optional
   * @param  {Object} query   Optional
   * @return {Object}         transition
   *
   * @api public
   */
  replaceWith(t, e, n) {
    return this.doTransition("replaceURL", t, e, n);
  }
  /**
   * Create an href
   * @param  {String} name   target route name
   * @param  {Object} params
   * @param  {Object} query
   * @return {String}        href
   *
   * @api public
   */
  generate(t, e, n) {
    q(this.location, "call .listen() before using .generate()");
    let i;
    if (n = n || {}, this.matchers.forEach((c) => {
      c.name === t && (i = c);
    }), !i)
      throw new Error(`No route is named ${t}`);
    const s = Lt(this.options.qs, Rt(i.path, e), n);
    return this.location.formatURL(s);
  }
  /**
   * Stop listening to URL changes
   * @api public
   */
  destroy() {
    this.location && this.location.destroy && this.location.destroy(), this.state.activeTransition && this.state.activeTransition.cancel(), this.state = {}, this.middleware.forEach((t) => {
      t.destroy && t.destroy(this);
    });
  }
  /**
   * Check if the given route/params/query combo is active
   * @param  {String} name   target route name
   * @param  {Object} params
   * @param  {Object} query
   * @return {Boolean}
   *
   * @api public
   */
  isActive(t, e, n, i) {
    const s = this.state.routes || [], c = this.state.params, o = this.state.query;
    let u = s.some((a) => a.name === t) && (!i || s[s.length - 1].name === t);
    return u = u && (!e || O(e).every((a) => c[a] === e[a])), u = u && (!n || O(n).every((a) => o[a] === n[a])), u;
  }
  /**
   * @api private
   */
  doTransition(t, e, n, i) {
    const s = this.location.getURL();
    let c = e;
    c[0] !== "/" && (c = this.generate(e, n, i), c = c.replace(/^#/, "/")), this.options.pushState && (c = this.location.removeRoot(c));
    const o = this.dispatch(c);
    return o.catch((u) => (u && u.type === P && this.location.replaceURL(s, { trigger: !1 }), u)), this.location[t](c, { trigger: !1 }), o;
  }
  /**
   * Match the path against the routes
   * @param  {String} path
   * @return {Object} the list of matching routes and params
   *
   * @api private
   */
  match(t) {
    t = (t || "").replace(/\/$/, "") || "/";
    let e, n = [];
    const i = tt(t), s = this.options.qs;
    return this.matchers.some((o) => {
      if (e = bt(o.path, i), e)
        return n = o.routes, !0;
    }), {
      routes: n.map(c),
      params: e || {},
      pathname: i,
      query: Tt(s, t) || {}
    };
    function c(o) {
      return {
        name: o.name,
        path: o.path,
        params: F(e, Et(o.path)),
        options: L(o.options)
      };
    }
  }
  dispatch(t) {
    const e = this.match(t), n = e.query, i = e.pathname, s = this.state.activeTransition;
    if (s && s.pathname === i && H(s.query, n))
      return s;
    if (s) {
      const o = new Error(N);
      o.type = N, o.nextPath = t, s.cancel(o);
    }
    if (!s && this.state.pathname === i && H(this.state.query, n))
      return k({
        id: this.nextId++,
        path: t,
        match: e,
        noop: !0,
        router: this
      });
    const c = k({
      id: this.nextId++,
      path: t,
      match: e,
      router: this
    });
    return this.state.activeTransition = c, c;
  }
  /**
   * Create the default location.
   * This is used when no custom location is passed to
   * the listen call.
   * @return {Object} location
   *
   * @api private
   */
  createLocation(t) {
    const e = this.options.location;
    if (typeof e != "string")
      return e;
    if (e === "browser")
      return new xt(F(this.options, ["pushState", "root"]));
    if (e === "memory")
      return new Pt({ path: t });
    throw new Error("Location can be `browser`, `memory` or a custom implementation");
  }
  log(...t) {
    console.info(...t);
  }
  logError(...t) {
    console.error(...t);
  }
}
function jt(r, t, e) {
  !t.hasAttribute("download") && !t.hasAttribute("data-phone-number") && (r.preventDefault(), e.transitionTo(e.location.removeRoot(t.getAttribute("href"))));
}
function Ft(r, t = document, e = jt) {
  return _t(t, (n, i) => e(n, i, r));
}
const Ht = Promise.resolve();
let $ = /* @__PURE__ */ Object.create(null), M = /* @__PURE__ */ Object.create(null), j, U, x;
function Bt(r) {
  const t = parseFloat(r);
  return r == t ? t : r;
}
class Wt {
  constructor(t, e) {
    this.key = t, this.format = e;
  }
  value(t) {
    let e = this.getValue(t);
    if (e !== void 0) {
      const n = this.format;
      n === "number" ? e = Bt(e) : typeof n == "function" && (e = n(e));
    }
    return e;
  }
}
function kt(r) {
  j = r, U = r.options.outlet;
}
function Qt() {
  j = null, $ = /* @__PURE__ */ Object.create(null), M = /* @__PURE__ */ Object.create(null), x = null;
}
function Vt(r, t) {
  const e = Object.keys(r);
  return e.length === Object.keys(t).length && e.every((n) => t[n] === r[n]);
}
function Kt(r) {
  return (r.shadowRoot || r).querySelector(r.constructor.outlet || "wj-router-outlet");
}
function zt() {
  if (x)
    return x;
  if (!U)
    return document.body;
  if (x = typeof U == "string" ? document.querySelector(U) : U, !x)
    throw new Error(`slick-router(wc): Invalid outlet option ${U}`);
  return x;
}
function Jt(r, t) {
  let e = r.routes[t];
  for (; e; ) {
    if (e.options.component)
      return $[e.name];
    e = r.routes[--t];
  }
}
function Zt(r, t) {
  let e, n, i;
  const s = Math.max(r.length, t.length);
  for (e = 0; e < s && (n = r[e], i = t[e], !(!(n && i) || n.name !== i.name || !Vt(n.params, i.params))); e++)
    ;
  return e;
}
async function I(r, t, e, n) {
  for (let i = 0; i < t.length; i++) {
    let s;
    const { route: c, el: o } = t[i], u = c.options[`${e}${n}`];
    if (typeof u == "function" && (s = await u(r), s === !1 && r.cancel()), r.isCancelled)
      break;
    const a = o && o[`${e}Route${n}`];
    if (typeof a == "function" && (s = await a.call(o, r), s === !1 && r.cancel()), r.isCancelled)
      break;
  }
}
function Gt(r) {
  return r && r.__esModule ? r.default : r;
}
async function Xt(r) {
  const t = [];
  for (const e of r) {
    let n = e.options.reuse ? $[e.name] : void 0, i = e.options.component;
    !n && i && (typeof i == "function" && !(i.prototype instanceof HTMLElement) && (i = M[e.name] || (M[e.name] = Gt(await i(e)))), n = typeof i == "string" ? document.createElement(i) : new i(), $[e.name] = n, n.$router = j), t.push({ el: n, route: e });
  }
  return t;
}
function V(r, t, e) {
  e && Object.keys(e).forEach((n) => {
    const i = e[n];
    t[n] = i instanceof Wt ? i.value(r) : i;
  });
}
const nt = /* @__PURE__ */ new WeakSet(), K = /* @__PURE__ */ new WeakMap();
async function Yt(r, t, e) {
  const { path: n, pathname: i, routes: s, params: c, query: o } = r, u = { path: n, pathname: i, routes: s, params: c, query: o };
  for (let a = 0; a < e; a++) {
    const h = r.routes[a], g = $[h.name];
    g && (g.$route = u, V(r, g, h.options.properties));
  }
  for (let a = 0; a < t.length; a++) {
    const { el: h, route: g } = t[a];
    if (h) {
      const m = Jt(r, e + a - 1), f = m ? Kt(m) : zt();
      if (f) {
        const d = K.get(f) || f.firstElementChild;
        d && (f.removeChild(d), nt.add(d)), h.$route = u, V(r, h, g.options.properties), f.appendChild(h), K.set(f, h), await (h.updateComplete || Ht);
      }
    }
  }
}
function te(r, t) {
  let e;
  for (let n = t.length - 1; n >= 0; n--) {
    const { route: i, el: s } = t[n];
    r.some(({ route: c }) => c.name === i.name) || (s && (!e && !nt.has(s) && s.remove(), e = !0), $[i.name] = void 0);
  }
}
async function ee(r) {
  const t = r.prev.routes, e = Zt(t, r.routes), n = [];
  for (let s = t.length - 1; s >= e; s--) {
    const c = t[s];
    n.push({ el: $[c.name], route: c });
  }
  if (await I(r, n, "before", "Leave"), r.isCancelled)
    return;
  const i = await Xt(r.routes.slice(e));
  await I(r, i, "before", "Enter"), !r.isCancelled && (await Yt(r, i, e), te(i, n), r.activated = i, r.deactivated = n);
}
function re(r) {
  I(r, r.deactivated, "after", "Leave"), I(r, r.activated, "after", "Enter");
}
const ne = {
  create: kt,
  destroy: Qt,
  resolve: ee,
  done: re
};
let it;
function _(r, t) {
  window.dispatchEvent(new CustomEvent(`${it}${r}`, { detail: t }));
}
const ie = {
  create: function(r) {
    it = r.options.eventPrefix || "router-";
  },
  before: function(r) {
    _("before:transition", { transition: r });
  },
  done: function(r) {
    _("transition", { transition: r });
  },
  cancel: function(r, t) {
    t.type !== "TransitionRedirected" && _("abort", { transition: r, error: t });
  },
  error: function(r, t) {
    _("abort", { transition: r, error: t }), _("error", { transition: r, error: t });
  }
};
class se extends at {
  constructor() {
    super();
    A(this, "className", "Routerx");
    A(this, "setBreadcrumb", (e) => {
      let n = [
        ...e.routes.filter((i) => "breadcrumb" in i.options).map((i, s) => {
          var c, o;
          return {
            name: i.options.breadcrumbPath || i.name,
            text: i.options.breadcrumb instanceof Function ? (o = (c = i.options).breadcrumb) == null ? void 0 : o.call(c, e) : i.options.breadcrumb,
            params: { ...i.params, ...e.params },
            path: this.router.generate(i.name, { ...i.params, ...e.params })
          };
        })
      ];
      e.breadcrumbs = n;
    });
    A(this, "resetScrollPosition", (e) => {
      window.scrollTo(0, 0);
    });
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  afterDraw() {
    const e = this.outerHTML, s = new DOMParser().parseFromString(e, "text/html").querySelector("wj-router"), c = this.parseElement(s).root;
    this.router = new Mt({
      outlet: this.outlet || "wj-router-outlet",
      log: !1,
      logError: !1,
      root: "/",
      pushState: !0
    }), this.router.map(c), this.router.use(this.setBreadcrumb), this.router.use(ne), this.router.use(ct), this.router.use(ie), this.router.use(this.resetScrollPosition), this.router.listen(), Ft(this.router);
  }
  parseElement(e) {
    const n = {}, i = e.attributes;
    for (let o = 0; o < i.length; o++) {
      const u = i[o].name, a = i[o].value;
      u === "component" && a.indexOf(".js") > -1 ? n.component = () => import(a) : u !== "shadow" && (n[u] = a);
    }
    const s = [];
    return Array.from(e.children).forEach((o) => {
      s.push(this.parseElement(o));
    }), s.length > 0 && e.tagName === "WJ-ROUTE" ? n.children = s : n.root = s, n;
  }
}
customElements.get("wj-router") || window.customElements.define("wj-router", se);
export {
  se as Routerx
};
