import "./wj-element.js";
import "./wj-store.js";
class E {
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
var v = window.requestAnimationFrame, m = "transition", T = "animation", p = "transition", C = "transitionend", d = "animation", b = "animationend";
function $(i) {
  window.scrollTo(0, 0), v(function() {
    window.scrollTo(0, 0), v(i);
  });
}
function L(i, t) {
  var n = D(i), e = n.type, r = n.timeout, l = n.propCount;
  if (!e)
    return t();
  var s = e === m ? C : b, u = 0, o = function() {
    i.removeEventListener(s, a), t();
  }, a = function(h) {
    h.target === i && ++u >= l && o();
  };
  setTimeout(function() {
    u < l && o();
  }, r + 1), i.addEventListener(s, a);
}
function D(i) {
  var t = window.getComputedStyle(i), n = (t[p + "Delay"] || "").split(", "), e = (t[p + "Duration"] || "").split(", "), r = c(n, e), l = (t[d + "Delay"] || "").split(", "), s = (t[d + "Duration"] || "").split(", "), u = c(l, s), o, a = 0, h = 0;
  return a = Math.max(r, u), o = a > 0 ? r > u ? m : T : null, h = o ? o === m ? e.length : s.length : 0, {
    type: o,
    timeout: a,
    propCount: h
  };
}
function c(i, t) {
  for (; i.length < t.length; )
    i = i.concat(i);
  return Math.max.apply(null, t.map(function(n, e) {
    return f(n) + f(i[e]);
  }));
}
function f(i) {
  return Number(i.slice(0, -1).replace(",", ".")) * 1e3;
}
function g(i, t, n, e) {
  i.classList.add(`${t}-${n}-active`), $(function() {
    window.scrollTo(0, 0), i.classList.remove(`${t}-${n}`), i.classList.add(`${t}-${n}-to`), L(i, function() {
      i.classList.remove(`${t}-${n}-active`, `${t}-${n}-to`), e && e();
    });
  });
}
class N extends E {
  beforeEnter(t, n) {
    const e = t.getAttribute("animation") || "outlet";
    n.classList.add(`${e}-enter`);
  }
  enter(t, n) {
    const e = t.getAttribute("animation") || "outlet";
    g(n, e, "enter");
  }
  leave(t, n, e) {
    const r = t.getAttribute("animation") || "outlet";
    n.classList.add(`${r}-leave`), n.style.display = "none", g(n, r, "leave", e);
  }
}
const O = {};
let w;
function A(i) {
  return O[i] || w || (w = new N());
}
class k extends HTMLElement {
  appendChild(t) {
    if (!this.hasAttribute("animation")) {
      super.appendChild(t);
      return;
    }
    const n = A(this.getAttribute("animation")), e = n.runParallel(this);
    n.beforeEnter(this, t), super.appendChild(t), !e && this.removing ? this.appending = t : n.enter(this, t);
  }
  removeChild(t) {
    if (!this.hasAttribute("animation")) {
      super.removeChild(t);
      return;
    }
    const n = A(this.getAttribute("animation"));
    if (this.removing && this.removing.parentNode === this && super.removeChild(this.removing), t === this.appending) {
      t.parentNode === this && super.removeChild(t), this.removing = null;
      return;
    }
    this.removing = t, n.leave(this, t, () => {
      this.removing && this.removing.parentNode === this && super.removeChild(this.removing), this.appending && n.enter(this, this.appending), this.appending = null, this.removing = null;
    });
  }
}
customElements.get("wj-router-outlet") || window.customElements.define("wj-router-outlet", k);
