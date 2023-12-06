var Rt = Object.defineProperty;
var Ot = (t, e, n) => e in t ? Rt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ft = (t, e, n) => (Ot(t, typeof e != "symbol" ? e + "" : e, n), n);
import Lt, { event as J } from "./wj-element.js";
import "./wj-store.js";
const H = Math.min, C = Math.max, Q = Math.round, G = Math.floor, N = (t) => ({
  x: t,
  y: t
}), Tt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pt = {
  start: "end",
  end: "start"
};
function St(t, e, n) {
  return C(t, H(e, n));
}
function K(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function j(t) {
  return t.split("-")[0];
}
function _(t) {
  return t.split("-")[1];
}
function kt(t) {
  return t === "x" ? "y" : "x";
}
function st(t) {
  return t === "y" ? "height" : "width";
}
function et(t) {
  return ["top", "bottom"].includes(j(t)) ? "y" : "x";
}
function rt(t) {
  return kt(et(t));
}
function Dt(t, e, n) {
  n === void 0 && (n = !1);
  const o = _(t), i = rt(t), s = st(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = Z(r)), [r, Z(r)];
}
function Wt(t) {
  const e = Z(t);
  return [it(t), e, it(e)];
}
function it(t) {
  return t.replace(/start|end/g, (e) => Pt[e]);
}
function Mt(t, e, n) {
  const o = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : o : e ? o : i;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function Ft(t, e, n, o) {
  const i = _(t);
  let s = Mt(j(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(it)))), s;
}
function Z(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Tt[e]);
}
function Ht(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function mt(t) {
  return typeof t != "number" ? Ht(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function tt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function ut(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = et(e), r = rt(e), l = st(r), c = j(e), a = s === "y", h = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, d = o[l] / 2 - i[l] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: h,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: h,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      f = {
        x: o.x - i.width,
        y: u
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (_(e)) {
    case "start":
      f[r] -= d * (n && a ? -1 : 1);
      break;
    case "end":
      f[r] += d * (n && a ? -1 : 1);
      break;
  }
  return f;
}
const Nt = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = n, l = s.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: h,
    y: u
  } = ut(a, o, c), d = o, f = {}, p = 0;
  for (let m = 0; m < l.length; m++) {
    const {
      name: y,
      fn: g
    } = l[m], {
      x,
      y: b,
      data: A,
      reset: w
    } = await g({
      x: h,
      y: u,
      initialPlacement: o,
      placement: d,
      strategy: i,
      middlewareData: f,
      rects: a,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (h = x ?? h, u = b ?? u, f = {
      ...f,
      [y]: {
        ...f[y],
        ...A
      }
    }, w && p <= 50) {
      p++, typeof w == "object" && (w.placement && (d = w.placement), w.rects && (a = w.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : w.rects), {
        x: h,
        y: u
      } = ut(a, d, c)), m = -1;
      continue;
    }
  }
  return {
    x: h,
    y: u,
    placement: d,
    strategy: i,
    middlewareData: f
  };
};
async function gt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: s,
    rects: r,
    elements: l,
    strategy: c
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: u = "floating",
    altBoundary: d = !1,
    padding: f = 0
  } = K(e, t), p = mt(f), y = l[d ? u === "floating" ? "reference" : "floating" : u], g = tt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: h,
    strategy: c
  })), x = u === "floating" ? {
    ...r.floating,
    x: o,
    y: i
  } : r.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), A = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = tt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: b,
    strategy: c
  }) : x);
  return {
    top: (g.top - w.top + p.top) / A.y,
    bottom: (w.bottom - g.bottom + p.bottom) / A.y,
    left: (g.left - w.left + p.left) / A.x,
    right: (w.right - g.right + p.right) / A.x
  };
}
const Bt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: s,
      platform: r,
      elements: l
    } = e, {
      element: c,
      padding: a = 0
    } = K(t, e) || {};
    if (c == null)
      return {};
    const h = mt(a), u = {
      x: n,
      y: o
    }, d = rt(i), f = st(d), p = await r.getDimensions(c), m = d === "y", y = m ? "top" : "left", g = m ? "bottom" : "right", x = m ? "clientHeight" : "clientWidth", b = s.reference[f] + s.reference[d] - u[d] - s.floating[f], A = u[d] - s.reference[d], w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let v = w ? w[x] : 0;
    (!v || !await (r.isElement == null ? void 0 : r.isElement(w))) && (v = l.floating[x] || s.floating[f]);
    const T = b / 2 - A / 2, W = v / 2 - p[f] / 2 - 1, M = H(h[y], W), Y = H(h[g], W), O = M, X = v - p[f] - Y, E = v / 2 - p[f] / 2 + T, P = St(O, E, X), F = _(i) != null && E != P && s.reference[f] / 2 - (E < O ? M : Y) - p[f] / 2 < 0 ? E < O ? O - E : X - E : 0;
    return {
      [d]: u[d] - F,
      data: {
        [d]: P,
        centerOffset: E - P + F
      }
    };
  }
}), Vt = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: r,
        platform: l,
        elements: c
      } = e, {
        mainAxis: a = !0,
        crossAxis: h = !0,
        fallbackPlacements: u,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: f = "none",
        flipAlignment: p = !0,
        ...m
      } = K(t, e), y = j(o), g = j(r) === r, x = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), b = u || (g || !p ? [Z(r)] : Wt(r));
      !u && f !== "none" && b.push(...Ft(r, p, f, x));
      const A = [r, ...b], w = await gt(e, m), v = [];
      let T = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (a && v.push(w[y]), h) {
        const O = Dt(o, s, x);
        v.push(w[O[0]], w[O[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: v
      }], !v.every((O) => O <= 0)) {
        var W, M;
        const O = (((W = i.flip) == null ? void 0 : W.index) || 0) + 1, X = A[O];
        if (X)
          return {
            data: {
              index: O,
              overflows: T
            },
            reset: {
              placement: X
            }
          };
        let E = (M = T.filter((P) => P.overflows[0] <= 0).sort((P, V) => P.overflows[1] - V.overflows[1])[0]) == null ? void 0 : M.placement;
        if (!E)
          switch (d) {
            case "bestFit": {
              var Y;
              const P = (Y = T.map((V) => [V.placement, V.overflows.filter((F) => F > 0).reduce((F, Ct) => F + Ct, 0)]).sort((V, F) => V[1] - F[1])[0]) == null ? void 0 : Y[0];
              P && (E = P);
              break;
            }
            case "initialPlacement":
              E = r;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
async function jt(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = j(n), l = _(n), c = et(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, h = s && c ? -1 : 1, u = K(e, t);
  let {
    mainAxis: d,
    crossAxis: f,
    alignmentAxis: p
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return l && typeof p == "number" && (f = l === "end" ? p * -1 : p), c ? {
    x: f * h,
    y: d * a
  } : {
    x: d * a,
    y: f * h
  };
}
const It = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await jt(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
}, zt = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: o,
        platform: i,
        elements: s
      } = e, {
        apply: r = () => {
        },
        ...l
      } = K(t, e), c = await gt(e, l), a = j(n), h = _(n), u = et(n) === "y", {
        width: d,
        height: f
      } = o.floating;
      let p, m;
      a === "top" || a === "bottom" ? (p = a, m = h === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = a, p = h === "end" ? "top" : "bottom");
      const y = f - c[p], g = d - c[m], x = !e.middlewareData.shift;
      let b = y, A = g;
      if (u) {
        const v = d - c.left - c.right;
        A = h || x ? H(g, v) : v;
      } else {
        const v = f - c.top - c.bottom;
        b = h || x ? H(y, v) : v;
      }
      if (x && !h) {
        const v = C(c.left, 0), T = C(c.right, 0), W = C(c.top, 0), M = C(c.bottom, 0);
        u ? A = d - 2 * (v !== 0 || T !== 0 ? v + T : C(c.left, c.right)) : b = f - 2 * (W !== 0 || M !== 0 ? W + M : C(c.top, c.bottom));
      }
      await r({
        ...e,
        availableWidth: A,
        availableHeight: b
      });
      const w = await i.getDimensions(s.floating);
      return d !== w.width || f !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function B(t) {
  return wt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function R(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function D(t) {
  var e;
  return (e = (wt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function wt(t) {
  return t instanceof Node || t instanceof R(t).Node;
}
function k(t) {
  return t instanceof Element || t instanceof R(t).Element;
}
function S(t) {
  return t instanceof HTMLElement || t instanceof R(t).HTMLElement;
}
function ht(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof R(t).ShadowRoot;
}
function U(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = L(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function $t(t) {
  return ["table", "td", "th"].includes(B(t));
}
function ct(t) {
  const e = lt(), n = L(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function _t(t) {
  let e = $(t);
  for (; S(e) && !nt(e); ) {
    if (ct(e))
      return e;
    e = $(e);
  }
  return null;
}
function lt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function nt(t) {
  return ["html", "body", "#document"].includes(B(t));
}
function L(t) {
  return R(t).getComputedStyle(t);
}
function ot(t) {
  return k(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function $(t) {
  if (B(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    ht(t) && t.host || // Fallback.
    D(t)
  );
  return ht(e) ? e.host : e;
}
function xt(t) {
  const e = $(t);
  return nt(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : S(e) && U(e) ? e : xt(e);
}
function q(t, e) {
  var n;
  e === void 0 && (e = []);
  const o = xt(t), i = o === ((n = t.ownerDocument) == null ? void 0 : n.body), s = R(o);
  return i ? e.concat(s, s.visualViewport || [], U(o) ? o : [], s.frameElement ? q(s.frameElement) : []) : e.concat(o, q(o));
}
function vt(t) {
  const e = L(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = S(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, l = Q(n) !== s || Q(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    $: l
  };
}
function at(t) {
  return k(t) ? t : t.contextElement;
}
function z(t) {
  const e = at(t);
  if (!S(e))
    return N(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = vt(e);
  let r = (s ? Q(n.width) : n.width) / o, l = (s ? Q(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const Yt = /* @__PURE__ */ N(0);
function yt(t) {
  const e = R(t);
  return !lt() || !e.visualViewport ? Yt : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Xt(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== R(t) ? !1 : e;
}
function I(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = at(t);
  let r = N(1);
  e && (o ? k(o) && (r = z(o)) : r = z(t));
  const l = Xt(s, n, o) ? yt(s) : N(0);
  let c = (i.left + l.x) / r.x, a = (i.top + l.y) / r.y, h = i.width / r.x, u = i.height / r.y;
  if (s) {
    const d = R(s), f = o && k(o) ? R(o) : o;
    let p = d.frameElement;
    for (; p && o && f !== d; ) {
      const m = z(p), y = p.getBoundingClientRect(), g = L(p), x = y.left + (p.clientLeft + parseFloat(g.paddingLeft)) * m.x, b = y.top + (p.clientTop + parseFloat(g.paddingTop)) * m.y;
      c *= m.x, a *= m.y, h *= m.x, u *= m.y, c += x, a += b, p = R(p).frameElement;
    }
  }
  return tt({
    width: h,
    height: u,
    x: c,
    y: a
  });
}
function qt(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = S(n), s = D(n);
  if (n === s)
    return e;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = N(1);
  const c = N(0);
  if ((i || !i && o !== "fixed") && ((B(n) !== "body" || U(s)) && (r = ot(n)), S(n))) {
    const a = I(n);
    l = z(n), c.x = a.x + n.clientLeft, c.y = a.y + n.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - r.scrollLeft * l.x + c.x,
    y: e.y * l.y - r.scrollTop * l.y + c.y
  };
}
function Kt(t) {
  return Array.from(t.getClientRects());
}
function bt(t) {
  return I(D(t)).left + ot(t).scrollLeft;
}
function Ut(t) {
  const e = D(t), n = ot(t), o = t.ownerDocument.body, i = C(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = C(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + bt(t);
  const l = -n.scrollTop;
  return L(o).direction === "rtl" && (r += C(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: l
  };
}
function Jt(t, e) {
  const n = R(t), o = D(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = lt();
    (!a || a && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: l,
    y: c
  };
}
function Gt(t, e) {
  const n = I(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = S(t) ? z(t) : N(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, c = i * s.x, a = o * s.y;
  return {
    width: r,
    height: l,
    x: c,
    y: a
  };
}
function dt(t, e, n) {
  let o;
  if (e === "viewport")
    o = Jt(t, n);
  else if (e === "document")
    o = Ut(D(t));
  else if (k(e))
    o = Gt(e, n);
  else {
    const i = yt(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return tt(o);
}
function At(t, e) {
  const n = $(t);
  return n === e || !k(n) || nt(n) ? !1 : L(n).position === "fixed" || At(n, e);
}
function Qt(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = q(t).filter((l) => k(l) && B(l) !== "body"), i = null;
  const s = L(t).position === "fixed";
  let r = s ? $(t) : t;
  for (; k(r) && !nt(r); ) {
    const l = L(r), c = ct(r);
    !c && l.position === "fixed" && (i = null), (s ? !c && !i : !c && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || U(r) && !c && At(t, r)) ? o = o.filter((h) => h !== r) : i = l, r = $(r);
  }
  return e.set(t, o), o;
}
function Zt(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? Qt(e, this._c) : [].concat(n), o], l = r[0], c = r.reduce((a, h) => {
    const u = dt(e, h, i);
    return a.top = C(u.top, a.top), a.right = H(u.right, a.right), a.bottom = H(u.bottom, a.bottom), a.left = C(u.left, a.left), a;
  }, dt(e, l, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function te(t) {
  return vt(t);
}
function ee(t, e, n) {
  const o = S(e), i = D(e), s = n === "fixed", r = I(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = N(0);
  if (o || !o && !s)
    if ((B(e) !== "body" || U(i)) && (l = ot(e)), o) {
      const a = I(e, !0, s, e);
      c.x = a.x + e.clientLeft, c.y = a.y + e.clientTop;
    } else
      i && (c.x = bt(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function pt(t, e) {
  return !S(t) || L(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Et(t, e) {
  const n = R(t);
  if (!S(t))
    return n;
  let o = pt(t, e);
  for (; o && $t(o) && L(o).position === "static"; )
    o = pt(o, e);
  return o && (B(o) === "html" || B(o) === "body" && L(o).position === "static" && !ct(o)) ? n : o || _t(t) || n;
}
const ne = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: o
  } = t;
  const i = this.getOffsetParent || Et, s = this.getDimensions;
  return {
    reference: ee(e, await i(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function oe(t) {
  return L(t).direction === "rtl";
}
const ie = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qt,
  getDocumentElement: D,
  getClippingRect: Zt,
  getOffsetParent: Et,
  getElementRects: ne,
  getClientRects: Kt,
  getDimensions: te,
  getScale: z,
  isElement: k,
  isRTL: oe
};
function se(t, e) {
  let n = null, o;
  const i = D(t);
  function s() {
    clearTimeout(o), n && n.disconnect(), n = null;
  }
  function r(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), s();
    const {
      left: a,
      top: h,
      width: u,
      height: d
    } = t.getBoundingClientRect();
    if (l || e(), !u || !d)
      return;
    const f = G(h), p = G(i.clientWidth - (a + u)), m = G(i.clientHeight - (h + d)), y = G(a), x = {
      rootMargin: -f + "px " + -p + "px " + -m + "px " + -y + "px",
      threshold: C(0, H(1, c)) || 1
    };
    let b = !0;
    function A(w) {
      const v = w[0].intersectionRatio;
      if (v !== c) {
        if (!b)
          return r();
        v ? r(!1, v) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...x,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, x);
    }
    n.observe(t);
  }
  return r(!0), s;
}
function re(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, a = at(t), h = i || s ? [...a ? q(a) : [], ...q(e)] : [];
  h.forEach((g) => {
    i && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const u = a && l ? se(a, n) : null;
  let d = -1, f = null;
  r && (f = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === a && f && (f.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      f && f.observe(e);
    })), n();
  }), a && !c && f.observe(a), f.observe(e));
  let p, m = c ? I(t) : null;
  c && y();
  function y() {
    const g = I(t);
    m && (g.x !== m.x || g.y !== m.y || g.width !== m.width || g.height !== m.height) && n(), m = g, p = requestAnimationFrame(y);
  }
  return n(), () => {
    h.forEach((g) => {
      i && g.removeEventListener("scroll", n), s && g.removeEventListener("resize", n);
    }), u && u(), f && f.disconnect(), f = null, c && cancelAnimationFrame(p);
  };
}
const ce = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: ie,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return Nt(t, e, {
    ...i,
    platform: s
  });
}, le = `/*!
* direction.scss
*/:host{--wj-popup-top: auto;--wj-popup-left: auto;display:flex}.native-popup{position:absolute;isolation:isolate;z-index:999;left:var(--wj-popup-left);top:var(--wj-popup-top)}.native-popup:not(.popup-active){display:none}
`;
class ae extends Lt {
  constructor() {
    super();
    ft(this, "className", "Popup");
    this._manual = !1;
  }
  set manual(n) {
    this._manual = n;
  }
  get manual() {
    return this.hasAttribute("manual") && (this._manual = !0), this._manual;
  }
  static get cssStyleSheet() {
    return le;
  }
  static get observedAttributes() {
    return ["active"];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  attributeChangedCallback(n, o, i) {
    n === "active" && (this.hasAttribute(n) ? this.show() : this.hide());
  }
  draw(n, o, i) {
    let s = document.createDocumentFragment(), r = document.createElement("slot");
    r.setAttribute("name", "anchor");
    let l = document.createElement("slot");
    l.setAttribute("name", "arrow");
    let c = document.createElement("div");
    c.setAttribute("part", "native"), c.classList.add("native-popup");
    let a = document.createElement("slot");
    return c.appendChild(a), c.appendChild(l), s.appendChild(r), s.appendChild(c), this.slotAnchor = r, this.slotArrow = l, this.native = c, s;
  }
  afterDraw(n, o, i) {
    this.setAnchor();
  }
  setAnchor() {
    if (this.slotAnchor && typeof this.anchor == "string") {
      const n = this.getRootNode();
      this.anchorEl = n.getElementById(this.anchor);
    } else
      this.slotAnchor instanceof HTMLSlotElement && (this.anchorEl = this.slotAnchor.assignedElements({ flatten: !0 })[0]);
    J.addListener(this.anchorEl, "click", null, (n) => {
      console.log("som CLICK"), !this.hasAttribute("disabled") && this.showHide();
    }, { stopPropagation: !0 }), document.addEventListener("click", (n) => {
      n.composedPath().some((i) => i === this) || this.hasAttribute("active") && this.removeAttribute("active");
    });
  }
  showHide() {
    this.hasAttribute("active") ? this.removeAttribute("active") : (this.setAttribute("active", ""), J.addListener(this, "click", "wj:popup-show"));
  }
  reposition() {
    const n = [];
    this.offsetCalc = +this.offset || 0, this.slotArrow instanceof HTMLSlotElement && (this.arrow = this.slotArrow.assignedElements({ flatten: !0 })[0], this.arrow && (n.push(
      Bt({
        element: this.arrow
      })
    ), this.offsetCalc = Math.sqrt(2 * this.arrow.offsetWidth ** 2) / 2 + +this.offset)), n.push(
      It(this.offsetCalc)
    ), n.push(
      Vt()
    ), this.hasAttribute("size") && n.push(
      zt({
        apply({ availableWidth: o, availableHeight: i, elements: s }) {
          Object.assign(s.floating.style, {
            width: `${s.reference.offsetWidth}px`
          });
        }
      })
    ), ce(this.anchorEl, this.native, {
      placement: this.placement || "bottom",
      strategy: "fixed",
      middleware: n
    }).then(({ x: o, y: i, middlewareData: s, placement: r, strategy: l }) => {
      if (this.native.style.setProperty("--wj-popup-left", o + "px"), this.native.style.setProperty("--wj-popup-top", i + "px"), this.native.style.position = l, this.arrow) {
        const c = this.placement.split("-")[0], a = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[c];
        if (s.arrow) {
          const { x: h, y: u } = s.arrow;
          Object.assign(this.arrow.style, {
            left: h != null ? `${h}px` : "",
            top: u != null ? `${u}px` : "",
            [a]: `${-this.arrow.offsetWidth / 2}px`
          });
        }
      }
    }), J.dispatchCustomEvent(this, "wj-popup:reposition", {
      data: { top: "bottom", right: "left", bottom: "top", left: "right" },
      context: this,
      event: this
    });
  }
  show() {
    this.native.classList.add("popup-active"), this.cleanup = re(this.anchorEl, this.native, () => {
      this.reposition();
    });
  }
  hide() {
    this.native.classList.remove("popup-active"), this.cleanup(), this.cleanup = void 0;
  }
  disconnectedCallback() {
    J.removeElement(this.anchorEl);
  }
}
customElements.get("wj-popup") || window.customElements.define("wj-popup", ae);
export {
  ae as Popup
};
