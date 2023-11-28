const h = Symbol("routerLinksData"), l = Symbol("unbindRouterLinks"), p = Promise.resolve(), f = /* @__PURE__ */ new Set();
let u;
const y = function(t, r, e, n, s) {
  const a = function(c) {
    for (var o = c.target; o; o = o.parentNode)
      o.matches && o.matches(e) && (c.selectorTarget = o, n.call(s, c));
  };
  return a.eventName = r, t.addEventListener(r, a, !1), a;
};
function v(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
const A = function(t, r) {
  const e = r.eventName;
  t.removeEventListener(e, r, !1);
}, q = (t) => {
  if (t.indexOf("-") === -1)
    return t;
  const r = t.split("-");
  let e = "";
  for (let n = 0; n < r.length; n++) {
    const s = r[n];
    e += n ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  }
  return e;
};
function L(t, r) {
  t.forEach(function(e) {
    if (e.type === "attributes") {
      const n = e.attributeName;
      (n.indexOf("param-") === 0 || n.indexOf("query-") === 0) && d(e.target, r.ownerEl);
    } else
      e.addedNodes.forEach((n) => {
        n.nodeType === 1 && (n.getAttribute("route") && d(n, r.ownerEl), k(r.ownerEl, n));
      });
  });
}
const C = { childList: !0, subtree: !0, attributes: !0 };
function b(t, r, e) {
  const n = t.attributes;
  for (let s = 0; s < n.length; s++) {
    const a = n[s];
    if (a.name.indexOf(r) === 0) {
      const c = q(a.name.slice(r.length));
      e[c] = a.value;
    }
  }
  return e;
}
function N(t, r, e, n, s) {
  let a = s[e];
  return typeof a == "function" && (a = a.call(t, r, n)), a || {};
}
function i(t, r, e, n, s) {
  const a = t[h].options, c = N(t, r, n, e, a), o = e.closest(a.selector || "[routerlinks]");
  return o && b(o, s, c), b(e, s, c);
}
function g(t, r, e, n) {
  const s = t.hasAttribute("active-class") ? t.getAttribute("active-class") : "active";
  if (s) {
    const a = u.isActive(r, e, n, t.hasAttribute("exact"));
    t.classList.toggle(s, a);
  }
}
function d(t, r) {
  const e = t.getAttribute("route");
  if (!e)
    return;
  const n = i(r, e, t, "params", "param-"), s = i(r, e, t, "query", "query-");
  try {
    const a = u.generate(e, n, s), c = t.tagName === "A" ? t : t.querySelector("a");
    c && c.setAttribute("href", a), u.state.activeTransition || g(t, e, n, s);
  } catch (a) {
    console.warn(`Error generating link for "${e}": ${a}`);
  }
}
function k(t, r) {
  r.querySelectorAll("[route]").forEach((n) => {
    d(n, t);
  });
}
function E(t) {
  if (t.button !== 0 || v(t))
    return;
  t.preventDefault();
  const r = t.selectorTarget, e = r.getAttribute("route");
  if (!e)
    return;
  const n = i(this, e, r, "params", "param-"), s = i(this, e, r, "query", "query-"), a = r.hasAttribute("replace") ? "replaceWith" : "transitionTo";
  u[a](e, n, s);
}
function S(t, r = {}) {
  const { selector: e = "[routerlinks]" } = r, n = e ? t.querySelectorAll(e) : [t], s = new MutationObserver(L), a = [];
  return s.ownerEl = t, t[h] = { options: r, rootEls: n, observer: s }, n.forEach((c) => {
    a.push(y(c, "click", "[route]", E, t)), k(t, c), s.observe(c, C);
  }), f.add(t), function() {
    f.delete(t), a.forEach((c, o) => A(n[o], c));
  };
}
const m = (t, r = {}) => class extends t {
  connectedCallback() {
    super.connectedCallback && super.connectedCallback(), (this.updateComplete || p).then(() => {
      this[l] = S(this, r);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback && super.disconnectedCallback(), this[l] && this[l]();
  }
}, x = (t, r) => {
  if (typeof t == "function")
    return m(t, r);
  if (t.kind === "class") {
    const { kind: e, elements: n } = t;
    return {
      kind: e,
      elements: n,
      finisher(s) {
        return m(s, r);
      }
    };
  }
  return (e) => x(e, t);
};
function R(t) {
  u = t;
}
function T() {
  f.forEach((t) => {
    t[h].rootEls.forEach((e) => {
      const n = e.getAttribute("route");
      if (!n)
        return;
      const s = i(t, n, e, "params", "param-"), a = i(t, n, e, "query", "query-");
      g(e, n, s, a);
    });
  });
}
const K = {
  create: R,
  done: T
};
export {
  S as b,
  K as r,
  x as w
};
