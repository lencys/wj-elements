var C = Object.defineProperty;
var E = (i, t, n) => t in i ? C(i, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[t] = n;
var m = (i, t, n) => (E(i, typeof t != "symbol" ? t + "" : t, n), n);
import b from "./wje-element.js";
class $ {
  constructor(t = {}) {
    this.options = t;
  }
  getOption(t, n) {
    return t.hasAttribute(n) ? t.getAttribute(n) : this.options[n];
  }
  hasOption(t, n) {
    return t.hasAttribute(n) || this.options[n];
  }
  runParallel(t) {
    return this.hasOption(t, "parallel");
  }
  beforeEnter(t, n) {
  }
  enter(t, n) {
  }
  leave(t, n, e) {
    e();
  }
}
var p = window.requestAnimationFrame, v = "transition", L = "animation", d = "transition", N = "transitionend", c = "animation", D = "animationend";
function O(i) {
  window.scrollTo(0, 0), p(function() {
    window.scrollTo(0, 0), p(i);
  });
}
function x(i, t) {
  var n = k(i), e = n.type, r = n.timeout, l = n.propCount;
  if (!e)
    return t();
  var s = e === v ? N : D, u = 0, o = function() {
    i.removeEventListener(s, a), t();
  }, a = function(h) {
    h.target === i && ++u >= l && o();
  };
  setTimeout(function() {
    u < l && o();
  }, r + 1), i.addEventListener(s, a);
}
function k(i) {
  var t = window.getComputedStyle(i), n = (t[d + "Delay"] || "").split(", "), e = (t[d + "Duration"] || "").split(", "), r = f(n, e), l = (t[c + "Delay"] || "").split(", "), s = (t[c + "Duration"] || "").split(", "), u = f(l, s), o, a = 0, h = 0;
  return a = Math.max(r, u), o = a > 0 ? r > u ? v : L : null, h = o ? o === v ? e.length : s.length : 0, {
    type: o,
    timeout: a,
    propCount: h
  };
}
function f(i, t) {
  for (; i.length < t.length; )
    i = i.concat(i);
  return Math.max.apply(null, t.map(function(n, e) {
    return g(n) + g(i[e]);
  }));
}
function g(i) {
  return Number(i.slice(0, -1).replace(",", ".")) * 1e3;
}
function A(i, t, n, e) {
  i.classList.add(`${t}-${n}-active`), O(function() {
    window.scrollTo(0, 0), i.classList.remove(`${t}-${n}`), i.classList.add(`${t}-${n}-to`), x(i, function() {
      i.classList.remove(`${t}-${n}-active`, `${t}-${n}-to`), e && e();
    });
  });
}
class y extends $ {
  beforeEnter(t, n) {
    const e = t.getAttribute("animation") || "outlet";
    n.classList.add(`${e}-enter`);
  }
  enter(t, n) {
    const e = t.getAttribute("animation") || "outlet";
    A(n, e, "enter");
  }
  leave(t, n, e) {
    const r = t.getAttribute("animation") || "outlet";
    n.classList.add(`${r}-leave`), n.style.display = "none", A(n, r, "leave", e);
  }
}
const I = {};
let w;
function T(i) {
  return I[i] || w || (w = new y());
}
class M extends HTMLElement {
  appendChild(t) {
    if (!this.hasAttribute("animation")) {
      super.appendChild(t);
      return;
    }
    const n = T(this.getAttribute("animation")), e = n.runParallel(this);
    n.beforeEnter(this, t), super.appendChild(t), !e && this.removing ? this.appending = t : n.enter(this, t);
  }
  removeChild(t) {
    if (!this.hasAttribute("animation")) {
      super.removeChild(t);
      return;
    }
    const n = T(this.getAttribute("animation"));
    if (this.removing && this.removing.parentNode === this && super.removeChild(this.removing), t === this.appending) {
      t.parentNode === this && super.removeChild(t), this.removing = null;
      return;
    }
    this.removing = t, n.leave(this, t, () => {
      this.removing && this.removing.parentNode === this && super.removeChild(this.removing), this.appending && n.enter(this, this.appending), this.appending = null, this.removing = null;
    });
  }
}
class P extends M {
  /**
   * Creates an instance of Route.
   *
   * @constructor
   */
  constructor() {
    super();
    m(this, "className", "RouterOutlet");
  }
}
b.define("wje-router-outlet", P);
export {
  P as default
};
