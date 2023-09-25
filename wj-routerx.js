var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import WJElement from "./wj-element.js";
import { r as routerLinks } from "./router-links-742eebab.js";
import "./wj-store.js";
var DEFAULT_DELIMITER = "/";
function balanced(open, close, str, index) {
  var count = 0;
  var i = index;
  while (i < str.length) {
    if (str[i] === "\\") {
      i += 2;
      continue;
    }
    if (str[i] === close) {
      count--;
      if (count === 0)
        return i + 1;
    }
    if (str[i] === open) {
      count++;
    }
    i++;
  }
  return -1;
}
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var _a, _b;
  var tokens = [];
  var defaultDelimiter = (_a = options.delimiter, _a !== null && _a !== void 0 ? _a : DEFAULT_DELIMITER);
  var whitelist = (_b = options.whitelist, _b !== null && _b !== void 0 ? _b : void 0);
  var i = 0;
  var key = 0;
  var path = "";
  var isEscaped = false;
  while (i < str.length) {
    var prefix = "";
    var name = "";
    var pattern = "";
    if (str[i] === "\\") {
      i++;
      path += str[i++];
      isEscaped = true;
      continue;
    }
    if (str[i] === ":") {
      while (++i < str.length) {
        var code = str.charCodeAt(i);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[i];
          continue;
        }
        break;
      }
      if (!name)
        i--;
    }
    if (str[i] === "(") {
      var end = balanced("(", ")", str, i);
      if (end > -1) {
        pattern = str.slice(i + 1, end - 1);
        i = end;
        if (pattern[0] === "?") {
          throw new TypeError("Path pattern must be a capturing group");
        }
        if (/\((?=[^?])/.test(pattern)) {
          var validPattern = pattern.replace(/\((?=[^?])/, "(?:");
          throw new TypeError("Capturing groups are not allowed in pattern, use a non-capturing group: (" + validPattern + ")");
        }
      }
    }
    if (name === "" && pattern === "") {
      path += str[i++];
      isEscaped = false;
      continue;
    }
    if (path.length && !isEscaped) {
      var char = path[path.length - 1];
      var matches = whitelist ? whitelist.indexOf(char) > -1 : true;
      if (matches) {
        prefix = char;
        path = path.slice(0, -1);
      }
    }
    if (path.length) {
      tokens.push(path);
      path = "";
    }
    var repeat = str[i] === "+" || str[i] === "*";
    var optional = str[i] === "?" || str[i] === "*";
    var delimiter = prefix || defaultDelimiter;
    if (repeat || optional)
      i++;
    tokens.push({
      name: name || key++,
      prefix,
      delimiter,
      optional,
      repeat,
      pattern: pattern || "[^" + escapeString(delimiter === defaultDelimiter ? delimiter : delimiter + defaultDelimiter) + "]+?"
    });
  }
  if (path.length)
    tokens.push(path);
  return tokens;
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys2) {
  if (!keys2)
    return path;
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys2.push({
        name: i,
        prefix: "",
        delimiter: "",
        optional: false,
        repeat: false,
        pattern: ""
      });
    }
  }
  return path;
}
function arrayToRegexp(paths, keys2, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys2, options).source;
  });
  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
function stringToRegexp(path, keys2, options) {
  return tokensToRegexp(parse(path, options), keys2, options);
}
function tokensToRegexp(tokens, keys2, options) {
  if (options === void 0) {
    options = {};
  }
  var strict = options.strict, _a = options.start, start = _a === void 0 ? true : _a, _b = options.end, end = _b === void 0 ? true : _b, _c = options.delimiter, delimiter = _c === void 0 ? DEFAULT_DELIMITER : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d;
  var endsWith = (typeof options.endsWith === "string" ? options.endsWith.split("") : options.endsWith || []).map(escapeString).concat("$").join("|");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var capture = token.repeat ? "(?:" + token.pattern + ")(?:" + escapeString(token.delimiter) + "(?:" + token.pattern + "))*" : token.pattern;
      if (keys2)
        keys2.push(token);
      if (token.optional) {
        if (!token.prefix) {
          route += "(" + capture + ")?";
        } else {
          route += "(?:" + escapeString(token.prefix) + "(" + capture + "))?";
        }
      } else {
        route += escapeString(token.prefix) + "(" + capture + ")";
      }
    }
  }
  if (end) {
    if (!strict)
      route += "(?:" + escapeString(delimiter) + ")?";
    route += endsWith === "$" ? "$" : "(?=" + endsWith + ")";
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? endToken[endToken.length - 1] === delimiter : (
      // tslint:disable-next-line
      endToken === void 0
    );
    if (!strict) {
      route += "(?:" + escapeString(delimiter) + "(?=" + endsWith + "))?";
    }
    if (!isEndDelimited) {
      route += "(?=" + escapeString(delimiter) + "|" + endsWith + ")";
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys2, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys2);
  }
  if (Array.isArray(path)) {
    return arrayToRegexp(path, keys2, options);
  }
  return stringToRegexp(path, keys2, options);
}
const assoc = (obj, attr, val) => {
  obj[attr] = val;
  return obj;
};
const isArray = Array.isArray;
const keys = Object.keys;
const clone = (obj) => obj ? isArray(obj) ? obj.slice(0) : extend({}, obj) : obj;
const pick = (obj, attrs) => attrs.reduce((acc, attr) => obj[attr] === void 0 ? acc : assoc(acc, attr, obj[attr]), {});
const isEqual$1 = (obj1, obj2) => {
  const keys1 = keys(obj1);
  return keys1.length === keys(obj2).length && keys1.every((key) => obj2[key] === obj1[key]);
};
const extend = Object.assign;
function invariant(condition, format, ...args) {
  if (!condition) {
    let argIndex = 0;
    throw new Error(
      "Invariant Violation: " + format.replace(/%s/g, () => args[argIndex++])
    );
  }
}
function functionDsl(callback) {
  let ancestors = [];
  const matches = {};
  const names = {};
  callback(function route(name, options, childrenCallback) {
    let routes;
    invariant(!names[name], 'Route names must be unique, but route "%s" is declared multiple times', name);
    names[name] = true;
    if (arguments.length === 1) {
      options = {};
    }
    if (arguments.length === 2 && typeof options === "function") {
      childrenCallback = options;
      options = {};
    }
    if (typeof options.path !== "string") {
      const parts = name.split(".");
      options.path = parts[parts.length - 1];
    }
    if (childrenCallback) {
      ancestors = ancestors.concat(name);
      childrenCallback();
      routes = pop();
      ancestors.splice(-1);
    }
    push({
      name,
      path: options.path,
      routes: routes || [],
      options
    });
  });
  function pop() {
    return matches[currentLevel()] || [];
  }
  function push(route) {
    const level = currentLevel();
    matches[level] = matches[level] || [];
    matches[level].push(route);
  }
  function currentLevel() {
    return ancestors.join(".");
  }
  return pop();
}
function arrayDsl(routes) {
  const result = [];
  routes.forEach(({ name, children, ...options }) => {
    if (typeof options.path !== "string") {
      const parts = name.split(".");
      options.path = parts[parts.length - 1];
    }
    result.push(
      {
        name,
        path: options.path,
        options,
        routes: children ? arrayDsl(children) : []
      }
    );
  });
  return result;
}
const paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?+*]?)/g;
const specialParamChars = /[+*?]$/g;
const queryMatcher = /\?(.+)/;
const _compiledPatterns = {};
function compilePattern(pattern) {
  if (!(pattern in _compiledPatterns)) {
    const paramNames = [];
    const re = pathToRegexp(pattern, paramNames);
    _compiledPatterns[pattern] = {
      matcher: re,
      paramNames: paramNames.map((p) => p.name)
    };
  }
  return _compiledPatterns[pattern];
}
function extractParamNames(pattern) {
  return compilePattern(pattern).paramNames;
}
function extractParams(pattern, path) {
  const cp = compilePattern(pattern);
  const matcher = cp.matcher;
  const paramNames = cp.paramNames;
  const match = path.match(matcher);
  if (!match) {
    return null;
  }
  const params = {};
  paramNames.forEach(function(paramName, index) {
    params[paramName] = match[index + 1] && decodeURIComponent(match[index + 1]);
  });
  return params;
}
function injectParams(pattern, params) {
  params = params || {};
  return pattern.replace(paramInjectMatcher, function(match, param) {
    const paramName = param.replace(specialParamChars, "");
    const lastChar = param.slice(-1);
    if (lastChar === "?" || lastChar === "*") {
      if (params[paramName] == null) {
        return "";
      }
    } else {
      invariant(
        params[paramName] != null,
        "Missing '%s' parameter for path '%s'",
        paramName,
        pattern
      );
    }
    let paramValue = encodeURIComponent(params[paramName]);
    if (lastChar === "*" || lastChar === "+") {
      paramValue = paramValue.replaceAll("%2F", "/");
    }
    return paramValue;
  });
}
function extractQuery(qs2, path) {
  const match = path.match(queryMatcher);
  return match && qs2.parse(match[1]);
}
function withQuery(qs2, path, query) {
  const queryString = qs2.stringify(query, { indices: false });
  if (queryString) {
    return withoutQuery(path) + "?" + queryString;
  }
  return path;
}
function withoutQuery(path) {
  return path.replace(queryMatcher, "");
}
function bindEvent(el, type, fn) {
  el.addEventListener(type, fn);
  return fn;
}
function unbindEvent(el, type, fn) {
  el.removeEventListener(type, fn);
  return fn;
}
class History {
  constructor() {
    this.handlers = [];
    this.checkUrl = this.checkUrl.bind(this);
    this.location = window.location;
    this.history = window.history;
  }
  // Set up all inheritable **Backbone.History** properties and methods.
  // Are we at the app root?
  atRoot() {
    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root;
  }
  // Gets the true hash value. Cannot use location.hash directly due to bug
  // in Firefox where location.hash will always be decoded.
  getHash() {
    const match = this.location.href.match(/#(.*)$/);
    return match ? match[1] : "";
  }
  // Get the cross-browser normalized URL fragment, either from the URL,
  // the hash, or the override.
  getFragment(fragment, forcePushState) {
    if (fragment == null) {
      if (this._hasPushState || !this._wantsHashChange || forcePushState) {
        fragment = decodeURI(this.location.pathname + this.location.search);
        const root = this.root.replace(trailingSlash, "");
        if (!fragment.indexOf(root))
          fragment = fragment.slice(root.length);
      } else {
        fragment = this.getHash();
      }
    }
    return fragment.replace(routeStripper, "");
  }
  // Start the hash change handling, returning `true` if the current URL matches
  // an existing route, and `false` otherwise.
  start(options = {}) {
    this.started = true;
    this.options = extend({ root: "/" }, options);
    this.location = this.options.location || this.location;
    this.history = this.options.history || this.history;
    this.root = this.options.root;
    this._wantsHashChange = this.options.hashChange !== false;
    this._wantsPushState = !!this.options.pushState;
    this._hasPushState = this._wantsPushState;
    const fragment = this.getFragment();
    this.root = `/${this.root}/`.replace(rootStripper, "/");
    bindEvent(window, this._hasPushState ? "popstate" : "hashchange", this.checkUrl);
    this.fragment = fragment;
    const loc = this.location;
    if (this._wantsHashChange && this._wantsPushState) {
      if (!this._hasPushState && !this.atRoot()) {
        this.fragment = this.getFragment(null, true);
        this.location.replace(`${this.root}#${this.fragment}`);
        return true;
      } else if (this._hasPushState && this.atRoot() && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, "");
        this.history.replaceState({}, document.title, this.root + this.fragment);
      }
    }
    if (!this.options.silent)
      return this.loadUrl();
  }
  // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
  // but possibly useful for unit testing Routers.
  stop() {
    unbindEvent(window, this._hasPushState ? "popstate" : "hashchange", this.checkUrl);
    this.started = false;
  }
  // Add a route to be tested when the fragment changes. Routes added later
  // may override previous routes.
  route(route, callback) {
    this.handlers.unshift({ route, callback });
  }
  // Checks the current URL to see if it has changed, and if it has,
  // calls `loadUrl`.
  checkUrl() {
    const current = this.getFragment();
    if (current === this.fragment)
      return false;
    this.loadUrl();
  }
  // Attempt to load the current URL fragment. If a route succeeds with a
  // match, returns `true`. If no defined routes matches the fragment,
  // returns `false`.
  loadUrl(fragment) {
    fragment = this.fragment = this.getFragment(fragment);
    return this.handlers.some((handler) => {
      if (handler.route.test(fragment)) {
        handler.callback(fragment);
        return true;
      }
    });
  }
  // Save a fragment into the hash history, or replace the URL state if the
  // 'replace' option is passed. You are responsible for properly URL-encoding
  // the fragment in advance.
  //
  // The options object can contain `trigger: true` if you wish to have the
  // route callback be fired (not usually desirable), or `replace: true`, if
  // you wish to modify the current URL without adding an entry to the history.
  update(fragment, options) {
    if (!this.started)
      return false;
    if (!options || options === true)
      options = { trigger: !!options };
    let url = this.root + (fragment = this.getFragment(fragment || ""));
    fragment = fragment.replace(pathStripper, "");
    if (this.fragment === fragment)
      return;
    this.fragment = fragment;
    if (fragment === "" && url !== "/")
      url = url.slice(0, -1);
    if (this._hasPushState) {
      this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
    } else if (this._wantsHashChange) {
      this._updateHash(this.location, fragment, options.replace);
    } else {
      return this.location.assign(url);
    }
    if (options.trigger)
      return this.loadUrl(fragment);
  }
  // Update the hash location, either replacing the current entry, or adding
  // a new one to the browser history.
  _updateHash(location, fragment, replace) {
    if (replace) {
      const href = location.href.replace(/(javascript:|#).*$/, "");
      location.replace(`${href}#${fragment}`);
    } else {
      location.hash = `#${fragment}`;
    }
  }
  // add some features to History
  // a generic callback for any changes
  onChange(callback) {
    this.route(/^(.*?)$/, callback);
  }
  // checks if the browser has pushstate support
  hasPushState() {
    if (!this.started) {
      throw new Error("only available after LocationBar.start()");
    }
    return this._hasPushState;
  }
}
const routeStripper = /^[#\/]|\s+$/g;
const rootStripper = /^\/+|\/+$/g;
const trailingSlash = /\/$/;
const pathStripper = /#.*$/;
class BrowserLocation {
  constructor(options = {}) {
    this.path = options.path || "";
    this.options = extend({
      pushState: false,
      root: "/"
    }, options);
    this.locationBar = new History();
    this.locationBar.onChange((path) => {
      this.handleURL(`/${path || ""}`);
    });
    this.locationBar.start(options);
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
  setURL(path, options = {}) {
    if (this.path !== path) {
      this.path = path;
      this.locationBar.update(path, extend({ trigger: true }, options));
    }
  }
  /**
   * Set the current URL without triggering any events
   * back to the router. Replace the latest entry in broser's history.
   */
  replaceURL(path, options = {}) {
    if (this.path !== path) {
      this.path = path;
      this.locationBar.update(path, extend({ trigger: true, replace: true }, options));
    }
  }
  /**
   * Setup a URL change handler
   * @param  {Function} callback
   */
  onChange(callback) {
    this.changeCallback = callback;
  }
  /**
   * Given a path, generate a URL appending root
   * if pushState is used and # if hash state is used
   */
  formatURL(path) {
    if (this.locationBar.hasPushState()) {
      let rootURL = this.options.root;
      if (path !== "") {
        rootURL = rootURL.replace(/\/$/, "");
      }
      return rootURL + path;
    } else {
      if (path[0] === "/") {
        path = path.substr(1);
      }
      return `#${path}`;
    }
  }
  /**
   * When we use pushState with a custom root option,
   * we need to take care of removingRoot at certain points.
   * Specifically
   * - browserLocation.update() can be called with the full URL by router
   * - LocationBar expects all .update() calls to be called without root
   * - this method is public so that we could dispatch URLs without root in router
   */
  removeRoot(url) {
    if (this.options.pushState && this.options.root && this.options.root !== "/") {
      return url.replace(this.options.root, "");
    } else {
      return url;
    }
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
  handleURL(url) {
    this.path = url;
    if (this.changeCallback) {
      this.changeCallback(url);
    }
  }
}
class MemoryLocation {
  constructor({ path }) {
    this.path = path || "";
  }
  getURL() {
    return this.path;
  }
  setURL(path, options) {
    if (this.path !== path) {
      this.path = path;
      this.handleURL(this.getURL(), options);
    }
  }
  replaceURL(path, options) {
    if (this.path !== path) {
      this.setURL(path, options);
    }
  }
  onChange(callback) {
    this.changeCallback = callback;
  }
  handleURL(url, options = {}) {
    this.path = url;
    options = extend({ trigger: true }, options);
    if (this.changeCallback && options.trigger) {
      this.changeCallback(url);
    }
  }
  removeRoot(url) {
    return url;
  }
  formatURL(url) {
    return url;
  }
}
const TRANSITION_REDIRECTED = "TransitionRedirected";
const TRANSITION_CANCELLED = "TransitionCancelled";
function runError(router2, transition2, err) {
  router2.middleware.forEach((m) => {
    m.error && m.error(transition2, err);
  });
}
function transition(options) {
  options = options || {};
  const router2 = options.router;
  const log = router2.log;
  const logError = router2.logError;
  const path = options.path;
  const match = options.match;
  const routes = match.routes;
  const params = match.params;
  const pathname = match.pathname;
  const query = match.query;
  const id = options.id;
  const startTime = Date.now();
  log("---");
  log("Transition #" + id, "to", path);
  log("Transition #" + id, "routes:", routes.map((r) => r.name));
  log("Transition #" + id, "params:", params);
  log("Transition #" + id, "query:", query);
  let resolve2, reject;
  const promise = new Promise(function(res, rej) {
    resolve2 = res;
    reject = rej;
  });
  promise.then(function() {
    log("Transition #" + id, "completed in", Date.now() - startTime + "ms");
  }).catch(function(err) {
    if (err.type !== TRANSITION_REDIRECTED && err.type !== TRANSITION_CANCELLED) {
      log("Transition #" + id, "FAILED");
      logError(err);
    }
  });
  let cancelled = false;
  const transition2 = {
    id,
    prev: {
      routes: clone(router2.state.routes) || [],
      path: router2.state.path || "",
      pathname: router2.state.pathname || "",
      params: clone(router2.state.params) || {},
      query: clone(router2.state.query) || {}
    },
    routes: clone(routes),
    path,
    pathname,
    params: clone(params),
    query: clone(query),
    redirectTo: function(...args) {
      return router2.transitionTo(...args);
    },
    retry: function() {
      return router2.transitionTo(path);
    },
    cancel: function(err) {
      if (router2.state.activeTransition !== transition2) {
        return;
      }
      if (transition2.isCancelled) {
        return;
      }
      router2.state.activeTransition = null;
      transition2.isCancelled = true;
      cancelled = true;
      if (!err) {
        err = new Error(TRANSITION_CANCELLED);
        err.type = TRANSITION_CANCELLED;
      }
      if (err.type === TRANSITION_CANCELLED) {
        log("Transition #" + id, "cancelled");
      }
      if (err.type === TRANSITION_REDIRECTED) {
        log("Transition #" + id, "redirected");
      }
      router2.middleware.forEach((m) => {
        m.cancel && m.cancel(transition2, err);
      });
      reject(err);
    },
    followRedirects: function() {
      return promise.catch(function(reason) {
        if (router2.state.activeTransition) {
          return router2.state.activeTransition.followRedirects();
        }
        return Promise.reject(reason);
      });
    },
    then: promise.then.bind(promise),
    catch: promise.catch.bind(promise)
  };
  router2.middleware.forEach((m) => {
    m.before && m.before(transition2);
  });
  function callNext(i, prevResult) {
    let middleware;
    let middlewareName;
    if (cancelled) {
      return;
    }
    if (i < router2.middleware.length) {
      middleware = router2.middleware[i];
      middlewareName = middleware.name || "anonymous";
      log("Transition #" + id, "resolving middleware:", middlewareName);
      let middlewarePromise;
      try {
        middlewarePromise = middleware.resolve ? middleware.resolve(transition2, prevResult) : prevResult;
        invariant(transition2 !== middlewarePromise, "Middleware %s returned a transition which resulted in a deadlock", middlewareName);
      } catch (err) {
        router2.state.activeTransition = null;
        runError(router2, transition2, err);
        return reject(err);
      }
      Promise.resolve(middlewarePromise).then(function(result) {
        callNext(i + 1, result);
      }).catch(function(err) {
        log("Transition #" + id, "resolving middleware:", middlewareName, "FAILED");
        router2.state.activeTransition = null;
        runError(router2, transition2, err);
        reject(err);
      });
    } else {
      router2.state = {
        activeTransition: null,
        routes,
        path,
        pathname,
        params,
        query
      };
      router2.middleware.forEach((m) => {
        m.done && m.done(transition2);
      });
      resolve2();
    }
  }
  if (!options.noop) {
    Promise.resolve().then(() => callNext(0));
  } else {
    resolve2();
  }
  if (options.noop) {
    transition2.noop = true;
  }
  return transition2;
}
function intercept(el, fn) {
  const cb = delegate(el, "click", function(e, el2) {
    if (clickable(e, el2))
      fn(e, el2);
  });
  return function dispose() {
    undelegate(el, "click", cb);
  };
}
function link(element) {
  var _a;
  element = { parentNode: element };
  const root = document;
  while ((element = element.parentNode) && element !== document) {
    if (((_a = element.tagName) == null ? void 0 : _a.toLowerCase()) === "a") {
      return element;
    }
    if (element === root) {
      return;
    }
  }
}
function delegate(el, type, fn) {
  return bindEvent(el, type, function(e) {
    const target = e.target || e.srcElement;
    const el2 = link(target);
    if (el2) {
      fn(e, el2);
    }
  });
}
function undelegate(el, type, fn) {
  unbindEvent(el, type, fn);
}
function clickable(e, el) {
  if (which(e) !== 1)
    return;
  if (e.metaKey || e.ctrlKey || e.shiftKey)
    return;
  if (e.defaultPrevented)
    return;
  if (el.target)
    return;
  if (el.getAttribute("data-bypass") !== null)
    return;
  const href = el.getAttribute("href");
  if (!href || href.length === 0)
    return;
  if (href[0] === "#")
    return;
  if (href.indexOf("http://") === 0 || href.indexOf("https://") === 0)
    return;
  if (href.indexOf("mailto:") === 0)
    return;
  if (href.indexOf("javascript:") === 0)
    return;
  return true;
}
function which(e) {
  e = e || window.event;
  return e.which === null ? e.button : e.which;
}
function defineLogger(router2, method, fn) {
  if (fn === true)
    return;
  router2[method] = typeof fn === "function" ? fn : () => {
  };
}
var qs = {
  parse(querystring) {
    return querystring.split("&").reduce((acc, pair) => {
      const parts = pair.split("=");
      acc[parts[0]] = decodeURIComponent(parts[1]);
      return acc;
    }, {});
  },
  stringify(params) {
    return Object.keys(params).reduce((acc, key) => {
      if (params[key] !== void 0) {
        acc.push(key + "=" + encodeURIComponent(params[key]));
      }
      return acc;
    }, []).join("&");
  }
};
class Router {
  constructor(options = {}) {
    this.nextId = 1;
    this.state = {};
    this.middleware = [];
    this.options = extend({
      location: "browser",
      logError: true,
      qs
    }, options);
    defineLogger(this, "log", this.options.log);
    defineLogger(this, "logError", this.options.logError);
    if (options.routes) {
      this.map(options.routes);
    }
  }
  /**
   * Add a middleware
   * @param  {Function} middleware
   * @return {Object}   router
   * @api public
   */
  use(middleware, options = {}) {
    const m = typeof middleware === "function" ? { resolve: middleware } : middleware;
    typeof options.at === "number" ? this.middleware.splice(options.at, 0, m) : this.middleware.push(m);
    m.create && m.create(this);
    return this;
  }
  /**
   * Add the route map
   * @param  {Function} routes
   * @return {Object}   router
   * @api public
   */
  map(routes) {
    this.routes = Array.isArray(routes) ? arrayDsl(routes) : functionDsl(routes);
    const matchers = this.matchers = [];
    const dupes = {};
    const abstracts = {};
    eachBranch({ routes: this.routes }, [], (routes2) => {
      let path = routes2.reduce((memo, r) => (
        // reset if there's a leading slash, otherwise concat
        // and keep resetting the trailing slash
        (r.path[0] === "/" ? r.path : `${memo}/${r.path}`).replace(/\/$/, "")
      ), "");
      if (path === "") {
        path = "/";
      }
      const lastRoute = routes2[routes2.length - 1];
      if (lastRoute.options.abstract) {
        abstracts[path] = lastRoute.name;
        return;
      }
      if (lastRoute.path === "") {
        let matcher;
        matchers.some((m) => {
          if (m.path === path) {
            matcher = m;
            return true;
          }
        });
        if (matcher) {
          matcher.routes = routes2;
        } else if (abstracts[path]) {
          matchers.push({
            routes: routes2,
            name: abstracts[path],
            path
          });
        }
      }
      matchers.push({
        routes: routes2,
        name: lastRoute.name,
        path
      });
      if (dupes[path] && lastRoute.path !== "") {
        throw new Error(`Routes ${dupes[path]} and ${lastRoute.name} have the same url path '${path}'`);
      }
      dupes[path] = lastRoute.name;
    });
    function eachBranch(node, memo, fn) {
      node.routes.forEach((route) => {
        fn(memo.concat(route));
        if (route.routes.length) {
          eachBranch(route, memo.concat(route), fn);
        }
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
  listen(path) {
    const location = this.location = this.createLocation(path || "");
    location.onChange((url) => {
      const previousUrl = this.state.path;
      this.dispatch(url).catch((err) => {
        if (err && err.type === TRANSITION_CANCELLED) {
          this.location.replaceURL(previousUrl, { trigger: false });
        }
        return err;
      });
    });
    return this.dispatch(location.getURL());
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
  transitionTo(name, params, query) {
    if (this.state.activeTransition) {
      return this.replaceWith(name, params, query);
    }
    return this.doTransition("setURL", name, params, query);
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
  replaceWith(name, params, query) {
    return this.doTransition("replaceURL", name, params, query);
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
  generate(name, params, query) {
    invariant(this.location, "call .listen() before using .generate()");
    let matcher;
    query = query || {};
    this.matchers.forEach((m) => {
      if (m.name === name) {
        matcher = m;
      }
    });
    if (!matcher) {
      throw new Error(`No route is named ${name}`);
    }
    const url = withQuery(this.options.qs, injectParams(matcher.path, params), query);
    return this.location.formatURL(url);
  }
  /**
   * Stop listening to URL changes
   * @api public
   */
  destroy() {
    if (this.location && this.location.destroy) {
      this.location.destroy();
    }
    if (this.state.activeTransition) {
      this.state.activeTransition.cancel();
    }
    this.state = {};
    this.middleware.forEach((m) => {
      m.destroy && m.destroy(this);
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
  isActive(name, params, query, exact) {
    const activeRoutes = this.state.routes || [];
    const activeParams = this.state.params;
    const activeQuery = this.state.query;
    let isActive = activeRoutes.some((route) => route.name === name) && (!exact || activeRoutes[activeRoutes.length - 1].name === name);
    isActive = isActive && (!params || keys(params).every((key) => activeParams[key] === params[key]));
    isActive = isActive && (!query || keys(query).every((key) => activeQuery[key] === query[key]));
    return isActive;
  }
  /**
   * @api private
   */
  doTransition(method, name, params, query) {
    const previousUrl = this.location.getURL();
    let url = name;
    if (url[0] !== "/") {
      url = this.generate(name, params, query);
      url = url.replace(/^#/, "/");
    }
    if (this.options.pushState) {
      url = this.location.removeRoot(url);
    }
    const transition2 = this.dispatch(url);
    transition2.catch((err) => {
      if (err && err.type === TRANSITION_CANCELLED) {
        this.location.replaceURL(previousUrl, { trigger: false });
      }
      return err;
    });
    this.location[method](url, { trigger: false });
    return transition2;
  }
  /**
   * Match the path against the routes
   * @param  {String} path
   * @return {Object} the list of matching routes and params
   *
   * @api private
   */
  match(path) {
    path = (path || "").replace(/\/$/, "") || "/";
    let params;
    let routes = [];
    const pathWithoutQuery = withoutQuery(path);
    const qs2 = this.options.qs;
    this.matchers.some((matcher) => {
      params = extractParams(matcher.path, pathWithoutQuery);
      if (params) {
        routes = matcher.routes;
        return true;
      }
    });
    return {
      routes: routes.map(descriptor),
      params: params || {},
      pathname: pathWithoutQuery,
      query: extractQuery(qs2, path) || {}
    };
    function descriptor(route) {
      return {
        name: route.name,
        path: route.path,
        params: pick(params, extractParamNames(route.path)),
        options: clone(route.options)
      };
    }
  }
  dispatch(path) {
    const match = this.match(path);
    const query = match.query;
    const pathname = match.pathname;
    const activeTransition = this.state.activeTransition;
    if (activeTransition && activeTransition.pathname === pathname && isEqual$1(activeTransition.query, query)) {
      return activeTransition;
    }
    if (activeTransition) {
      const err = new Error(TRANSITION_REDIRECTED);
      err.type = TRANSITION_REDIRECTED;
      err.nextPath = path;
      activeTransition.cancel(err);
    }
    if (!activeTransition) {
      if (this.state.pathname === pathname && isEqual$1(this.state.query, query)) {
        return transition({
          id: this.nextId++,
          path,
          match,
          noop: true,
          router: this
        });
      }
    }
    const t = transition({
      id: this.nextId++,
      path,
      match,
      router: this
    });
    this.state.activeTransition = t;
    return t;
  }
  /**
   * Create the default location.
   * This is used when no custom location is passed to
   * the listen call.
   * @return {Object} location
   *
   * @api private
   */
  createLocation(path) {
    const location = this.options.location;
    if (typeof location !== "string") {
      return location;
    }
    if (location === "browser") {
      return new BrowserLocation(pick(this.options, ["pushState", "root"]));
    } else if (location === "memory") {
      return new MemoryLocation({ path });
    } else {
      throw new Error("Location can be `browser`, `memory` or a custom implementation");
    }
  }
  log(...args) {
    console.info(...args);
  }
  logError(...args) {
    console.error(...args);
  }
}
function defaultClickHandler(event, link2, router2) {
  if (!link2.hasAttribute("download") && !link2.hasAttribute("data-phone-number")) {
    event.preventDefault();
    router2.transitionTo(router2.location.removeRoot(link2.getAttribute("href")));
  }
}
function interceptLinks(router2, el = document, clickHandler = defaultClickHandler) {
  return intercept(el, (event, link2) => clickHandler(event, link2, router2));
}
const resolved = Promise.resolve();
let routeElMap = /* @__PURE__ */ Object.create(null);
let routeComponentMap = /* @__PURE__ */ Object.create(null);
let router, rootOutlet, rootOutletEl;
function parseNumber(value) {
  const n = parseFloat(value);
  const isNumeric = value == n;
  return isNumeric ? n : value;
}
class TransitionValue {
  constructor(key, format) {
    this.key = key;
    this.format = format;
  }
  value(transition2) {
    let result = this.getValue(transition2);
    if (result !== void 0) {
      const format = this.format;
      if (format === "number") {
        result = parseNumber(result);
      } else if (typeof format === "function") {
        result = format(result);
      }
    }
    return result;
  }
}
function create(instance) {
  router = instance;
  rootOutlet = instance.options.outlet;
}
function destroy() {
  router = null;
  routeElMap = /* @__PURE__ */ Object.create(null);
  routeComponentMap = /* @__PURE__ */ Object.create(null);
  rootOutletEl = null;
}
function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  return keys1.length === Object.keys(obj2).length && keys1.every((key) => obj2[key] === obj1[key]);
}
function getOutlet(el) {
  const renderRoot = el.shadowRoot || el;
  return renderRoot.querySelector(el.constructor.outlet || "wj-router-outlet");
}
function resolveRootOutlet() {
  if (rootOutletEl)
    return rootOutletEl;
  if (!rootOutlet)
    return document.body;
  rootOutletEl = typeof rootOutlet === "string" ? document.querySelector(rootOutlet) : rootOutlet;
  if (!rootOutletEl) {
    throw new Error(`slick-router(wc): Invalid outlet option ${rootOutlet}`);
  }
  return rootOutletEl;
}
function getParentEl(transition2, parentIndex) {
  let parent = transition2.routes[parentIndex];
  while (parent) {
    if (parent.options.component) {
      return routeElMap[parent.name];
    }
    parent = transition2.routes[--parentIndex];
  }
}
function getChangingIndex(prevRoutes, currentRoutes) {
  let index, prev, current;
  const count = Math.max(prevRoutes.length, currentRoutes.length);
  for (index = 0; index < count; index++) {
    prev = prevRoutes[index];
    current = currentRoutes[index];
    if (!(prev && current) || prev.name !== current.name || !isEqual(prev.params, current.params)) {
      break;
    }
  }
  return index;
}
async function runLifeCycle(transition2, routes, prefix, suffix) {
  for (let i = 0; i < routes.length; i++) {
    let result;
    const { route, el } = routes[i];
    const routeMethod = route.options[`${prefix}${suffix}`];
    if (typeof routeMethod === "function") {
      result = await routeMethod(transition2);
      if (result === false) {
        transition2.cancel();
      }
    }
    if (transition2.isCancelled)
      break;
    const elMethod = el && el[`${prefix}Route${suffix}`];
    if (typeof elMethod === "function") {
      result = await elMethod.call(el, transition2);
      if (result === false) {
        transition2.cancel();
      }
    }
    if (transition2.isCancelled)
      break;
  }
}
function resolveModule(value) {
  return value && value.__esModule ? value.default : value;
}
async function resolveComponents(routes) {
  const result = [];
  for (const route of routes) {
    let el = route.options.reuse ? routeElMap[route.name] : void 0;
    let Component = route.options.component;
    if (!el && Component) {
      if (typeof Component === "function" && !(Component.prototype instanceof HTMLElement)) {
        Component = routeComponentMap[route.name] || (routeComponentMap[route.name] = resolveModule(await Component(route)));
      }
      el = typeof Component === "string" ? document.createElement(Component) : new Component();
      routeElMap[route.name] = el;
      el.$router = router;
    }
    result.push({ el, route });
  }
  return result;
}
function applyProperties(transition2, el, properties) {
  if (properties) {
    Object.keys(properties).forEach((key) => {
      const value = properties[key];
      el[key] = value instanceof TransitionValue ? value.value(transition2) : value;
    });
  }
}
const removedEls = /* @__PURE__ */ new WeakSet();
const outletCurrentEl = /* @__PURE__ */ new WeakMap();
async function renderElements(transition2, activated, changingIndex) {
  const { path, pathname, routes, params, query } = transition2;
  const routeState = { path, pathname, routes, params, query };
  for (let k = 0; k < changingIndex; k++) {
    const route = transition2.routes[k];
    const el = routeElMap[route.name];
    if (el) {
      el.$route = routeState;
      applyProperties(transition2, el, route.options.properties);
    }
  }
  for (let i = 0; i < activated.length; i++) {
    const { el, route } = activated[i];
    if (el) {
      const parentEl = getParentEl(transition2, changingIndex + i - 1);
      const outletEl = parentEl ? getOutlet(parentEl) : resolveRootOutlet();
      if (outletEl) {
        const currentEl = outletCurrentEl.get(outletEl) || outletEl.firstElementChild;
        if (currentEl) {
          outletEl.removeChild(currentEl);
          removedEls.add(currentEl);
        }
        el.$route = routeState;
        applyProperties(transition2, el, route.options.properties);
        outletEl.appendChild(el);
        outletCurrentEl.set(outletEl, el);
        await (el.updateComplete || resolved);
      }
    }
  }
}
function updateDOMTree(activated, deactivated) {
  let parentElRemoved;
  for (let routeIndex = deactivated.length - 1; routeIndex >= 0; routeIndex--) {
    const { route, el } = deactivated[routeIndex];
    if (!activated.some(({ route: activeRoute }) => activeRoute.name === route.name)) {
      if (el) {
        if (!parentElRemoved && !removedEls.has(el))
          el.remove();
        parentElRemoved = true;
      }
      routeElMap[route.name] = void 0;
    }
  }
}
async function resolve(transition2) {
  const prevRoutes = transition2.prev.routes;
  const changingIndex = getChangingIndex(prevRoutes, transition2.routes);
  const deactivated = [];
  for (let routeIndex = prevRoutes.length - 1; routeIndex >= changingIndex; routeIndex--) {
    const route = prevRoutes[routeIndex];
    deactivated.push({ el: routeElMap[route.name], route });
  }
  await runLifeCycle(transition2, deactivated, "before", "Leave");
  if (transition2.isCancelled)
    return;
  const activated = await resolveComponents(transition2.routes.slice(changingIndex));
  await runLifeCycle(transition2, activated, "before", "Enter");
  if (transition2.isCancelled)
    return;
  await renderElements(transition2, activated, changingIndex);
  updateDOMTree(activated, deactivated);
  transition2.activated = activated;
  transition2.deactivated = deactivated;
}
function done(transition2) {
  runLifeCycle(transition2, transition2.deactivated, "after", "Leave");
  runLifeCycle(transition2, transition2.activated, "after", "Enter");
}
const wc = {
  create,
  destroy,
  resolve,
  done
};
let eventPrefix;
function trigger(name, detail) {
  window.dispatchEvent(new CustomEvent(`${eventPrefix}${name}`, { detail }));
}
const events = {
  create: function(router2) {
    eventPrefix = router2.options.eventPrefix || "router-";
  },
  before: function(transition2) {
    trigger("before:transition", { transition: transition2 });
  },
  done: function(transition2) {
    trigger("transition", { transition: transition2 });
  },
  cancel: function(transition2, error) {
    if (error.type !== "TransitionRedirected") {
      trigger("abort", { transition: transition2, error });
    }
  },
  error: function(transition2, error) {
    trigger("abort", { transition: transition2, error });
    trigger("error", { transition: transition2, error });
  }
};
class Routerx extends WJElement {
  constructor() {
    super();
    __publicField(this, "className", "Routerx");
    __publicField(this, "setBreadcrumb", (transition2) => {
      let breadcrumb = [
        ...transition2.routes.filter((obj) => "breadcrumb" in obj.options).map((b, i) => {
          var _a, _b;
          return {
            name: b.options.breadcrumbPath || b.name,
            text: b.options.breadcrumb instanceof Function ? (_b = (_a = b.options).breadcrumb) == null ? void 0 : _b.call(_a, transition2) : b.options.breadcrumb,
            params: { ...b.params, ...transition2.params },
            path: this.router.generate(b.name, { ...b.params, ...transition2.params })
          };
        })
      ];
      transition2.breadcrumbs = breadcrumb;
    });
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  afterDraw() {
    const htmlString = this.outerHTML;
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlString, "text/html");
    const rootElement = htmlDocument.querySelector("wj-router");
    const routes = this.parseElement(rootElement).root;
    this.router = new Router({
      outlet: this.outlet || "wj-router-outlet",
      log: false,
      logError: false,
      root: "/",
      pushState: true
    });
    this.router.map(routes);
    this.router.use(this.setBreadcrumb);
    this.router.use(wc);
    this.router.use(routerLinks);
    this.router.use(events);
    this.router.listen();
    interceptLinks(this.router);
  }
  parseElement(element) {
    const obj = {};
    const attributes = element.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const attributeName = attributes[i].name;
      const attributeValue = attributes[i].value;
      if (attributeName === "component" && attributeValue.indexOf(".js") > -1) {
        obj.component = () => import(attributeValue);
      } else {
        if (attributeName !== "shadow") {
          obj[attributeName] = attributeValue;
        }
      }
    }
    const children = [];
    const childElements = Array.from(element.children);
    childElements.forEach((childElement) => {
      children.push(this.parseElement(childElement));
    });
    if (children.length > 0 && element.tagName === "WJ-ROUTE") {
      obj.children = children;
    } else {
      obj.root = children;
    }
    return obj;
  }
}
customElements.get("wj-router") || window.customElements.define("wj-router", Routerx);
export {
  Routerx
};
