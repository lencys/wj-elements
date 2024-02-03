var Ot = Object.defineProperty;
var Lt = (t, e, n) => e in t ? Ot(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ut = (t, e, n) => (Lt(t, typeof e != "symbol" ? e + "" : e, n), n);
import Tt, { event as U } from "./wj-element.js";
import "./wj-store.js";
const N = Math.min, R = Math.max, Z = Math.round, Q = Math.floor, B = (t) => ({
  x: t,
  y: t
}), Pt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, St = {
  start: "end",
  end: "start"
};
function Dt(t, e, n) {
  return R(t, N(e, n));
}
function K(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function V(t) {
  return t.split("-")[0];
}
function _(t) {
  return t.split("-")[1];
}
function kt(t) {
  return t === "x" ? "y" : "x";
}
function rt(t) {
  return t === "y" ? "height" : "width";
}
function nt(t) {
  return ["top", "bottom"].includes(V(t)) ? "y" : "x";
}
function ct(t) {
  return kt(nt(t));
}
function Wt(t, e, n) {
  n === void 0 && (n = !1);
  const o = _(t), i = ct(t), s = rt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = tt(r)), [r, tt(r)];
}
function Ht(t) {
  const e = tt(t);
  return [st(t), e, st(e)];
}
function st(t) {
  return t.replace(/start|end/g, (e) => St[e]);
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
  let s = Mt(V(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(st)))), s;
}
function tt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Pt[e]);
}
function Nt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function gt(t) {
  return typeof t != "number" ? Nt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function et(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function ht(t, e, n) {
  let {
    reference: o,
    floating: i
  } = t;
  const s = nt(e), r = ct(e), l = rt(r), c = V(e), a = s === "y", d = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, p = o[l] / 2 - i[l] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: d,
        y: o.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: d,
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
      f[r] -= p * (n && a ? -1 : 1);
      break;
    case "end":
      f[r] += p * (n && a ? -1 : 1);
      break;
  }
  return f;
}
const Bt = async (t, e, n) => {
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
    x: d,
    y: u
  } = ht(a, o, c), p = o, f = {}, h = 0;
  for (let m = 0; m < l.length; m++) {
    const {
      name: w,
      fn: g
    } = l[m], {
      x: v,
      y,
      data: A,
      reset: x
    } = await g({
      x: d,
      y: u,
      initialPlacement: o,
      placement: p,
      strategy: i,
      middlewareData: f,
      rects: a,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (d = v ?? d, u = y ?? u, f = {
      ...f,
      [w]: {
        ...f[w],
        ...A
      }
    }, x && h <= 50) {
      h++, typeof x == "object" && (x.placement && (p = x.placement), x.rects && (a = x.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : x.rects), {
        x: d,
        y: u
      } = ht(a, p, c)), m = -1;
      continue;
    }
  }
  return {
    x: d,
    y: u,
    placement: p,
    strategy: i,
    middlewareData: f
  };
};
async function wt(t, e) {
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
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = K(e, t), h = gt(f), w = l[p ? u === "floating" ? "reference" : "floating" : u], g = et(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: a,
    rootBoundary: d,
    strategy: c
  })), v = u === "floating" ? {
    ...r.floating,
    x: o,
    y: i
  } : r.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), A = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = et(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: y,
    strategy: c
  }) : v);
  return {
    top: (g.top - x.top + h.top) / A.y,
    bottom: (x.bottom - g.bottom + h.bottom) / A.y,
    left: (g.left - x.left + h.left) / A.x,
    right: (x.right - g.right + h.right) / A.x
  };
}
const jt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: s,
      platform: r,
      elements: l,
      middlewareData: c
    } = e, {
      element: a,
      padding: d = 0
    } = K(t, e) || {};
    if (a == null)
      return {};
    const u = gt(d), p = {
      x: n,
      y: o
    }, f = ct(i), h = rt(f), m = await r.getDimensions(a), w = f === "y", g = w ? "top" : "left", v = w ? "bottom" : "right", y = w ? "clientHeight" : "clientWidth", A = s.reference[h] + s.reference[f] - p[f] - s.floating[h], x = p[f] - s.reference[f], b = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
    let E = b ? b[y] : 0;
    (!E || !await (r.isElement == null ? void 0 : r.isElement(b))) && (E = l.floating[y] || s.floating[h]);
    const P = A / 2 - x / 2, F = E / 2 - m[h] / 2 - 1, Y = N(u[g], F), X = N(u[v], F), L = Y, q = E - m[h] - X, C = E / 2 - m[h] / 2 + P, S = Dt(L, C, q), D = !c.arrow && _(i) != null && C != S && s.reference[h] / 2 - (C < L ? Y : X) - m[h] / 2 < 0, W = D ? C < L ? C - L : C - q : 0;
    return {
      [f]: p[f] + W,
      data: {
        [f]: S,
        centerOffset: C - S - W,
        ...D && {
          alignmentOffset: W
        }
      },
      reset: D
    };
  }
}), Vt = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: c,
        elements: a
      } = e, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...w
      } = K(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const g = V(i), v = V(l) === l, y = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), A = p || (v || !m ? [tt(l)] : Ht(l));
      !p && h !== "none" && A.push(...Ft(l, m, h, y));
      const x = [l, ...A], b = await wt(e, w), E = [];
      let P = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (d && E.push(b[g]), u) {
        const L = Wt(i, r, y);
        E.push(b[L[0]], b[L[1]]);
      }
      if (P = [...P, {
        placement: i,
        overflows: E
      }], !E.every((L) => L <= 0)) {
        var F, Y;
        const L = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1, q = x[L];
        if (q)
          return {
            data: {
              index: L,
              overflows: P
            },
            reset: {
              placement: q
            }
          };
        let C = (Y = P.filter((S) => S.overflows[0] <= 0).sort((S, D) => S.overflows[1] - D.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!C)
          switch (f) {
            case "bestFit": {
              var X;
              const S = (X = P.map((D) => [D.placement, D.overflows.filter((W) => W > 0).reduce((W, Rt) => W + Rt, 0)]).sort((D, W) => D[1] - W[1])[0]) == null ? void 0 : X[0];
              S && (C = S);
              break;
            }
            case "initialPlacement":
              C = l;
              break;
          }
        if (i !== C)
          return {
            reset: {
              placement: C
            }
          };
      }
      return {};
    }
  };
};
async function zt(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = V(n), l = _(n), c = nt(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, d = s && c ? -1 : 1, u = K(e, t);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: h
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
  return l && typeof h == "number" && (f = l === "end" ? h * -1 : h), c ? {
    x: f * d,
    y: p * a
  } : {
    x: p * a,
    y: f * d
  };
}
const $t = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: o
      } = e, i = await zt(e, t);
      return {
        x: n + i.x,
        y: o + i.y,
        data: i
      };
    }
  };
}, It = function(t) {
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
      } = K(t, e), c = await wt(e, l), a = V(n), d = _(n), u = nt(n) === "y", {
        width: p,
        height: f
      } = o.floating;
      let h, m;
      a === "top" || a === "bottom" ? (h = a, m = d === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = a, h = d === "end" ? "top" : "bottom");
      const w = f - c[h], g = p - c[m], v = !e.middlewareData.shift;
      let y = w, A = g;
      if (u) {
        const b = p - c.left - c.right;
        A = d || v ? N(g, b) : b;
      } else {
        const b = f - c.top - c.bottom;
        y = d || v ? N(w, b) : b;
      }
      if (v && !d) {
        const b = R(c.left, 0), E = R(c.right, 0), P = R(c.top, 0), F = R(c.bottom, 0);
        u ? A = p - 2 * (b !== 0 || E !== 0 ? b + E : R(c.left, c.right)) : y = f - 2 * (P !== 0 || F !== 0 ? P + F : R(c.top, c.bottom));
      }
      await r({
        ...e,
        availableWidth: A,
        availableHeight: y
      });
      const x = await i.getDimensions(s.floating);
      return p !== x.width || f !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function j(t) {
  return xt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function O(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function M(t) {
  var e;
  return (e = (xt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function xt(t) {
  return t instanceof Node || t instanceof O(t).Node;
}
function H(t) {
  return t instanceof Element || t instanceof O(t).Element;
}
function k(t) {
  return t instanceof HTMLElement || t instanceof O(t).HTMLElement;
}
function dt(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof O(t).ShadowRoot;
}
function G(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: i
  } = T(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !["inline", "contents"].includes(i);
}
function _t(t) {
  return ["table", "td", "th"].includes(j(t));
}
function lt(t) {
  const e = at(), n = T(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Yt(t) {
  let e = I(t);
  for (; k(e) && !ot(e); ) {
    if (lt(e))
      return e;
    e = I(e);
  }
  return null;
}
function at() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ot(t) {
  return ["html", "body", "#document"].includes(j(t));
}
function T(t) {
  return O(t).getComputedStyle(t);
}
function it(t) {
  return H(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function I(t) {
  if (j(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    dt(t) && t.host || // Fallback.
    M(t)
  );
  return dt(e) ? e.host : e;
}
function vt(t) {
  const e = I(t);
  return ot(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : k(e) && G(e) ? e : vt(e);
}
function J(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = vt(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = O(i);
  return s ? e.concat(r, r.visualViewport || [], G(i) ? i : [], r.frameElement && n ? J(r.frameElement) : []) : e.concat(i, J(i, [], n));
}
function yt(t) {
  const e = T(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = k(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, l = Z(n) !== s || Z(o) !== r;
  return l && (n = s, o = r), {
    width: n,
    height: o,
    $: l
  };
}
function ft(t) {
  return H(t) ? t : t.contextElement;
}
function $(t) {
  const e = ft(t);
  if (!k(e))
    return B(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = yt(e);
  let r = (s ? Z(n.width) : n.width) / o, l = (s ? Z(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const Xt = /* @__PURE__ */ B(0);
function bt(t) {
  const e = O(t);
  return !at() || !e.visualViewport ? Xt : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function qt(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== O(t) ? !1 : e;
}
function z(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = ft(t);
  let r = B(1);
  e && (o ? H(o) && (r = $(o)) : r = $(t));
  const l = qt(s, n, o) ? bt(s) : B(0);
  let c = (i.left + l.x) / r.x, a = (i.top + l.y) / r.y, d = i.width / r.x, u = i.height / r.y;
  if (s) {
    const p = O(s), f = o && H(o) ? O(o) : o;
    let h = p.frameElement;
    for (; h && o && f !== p; ) {
      const m = $(h), w = h.getBoundingClientRect(), g = T(h), v = w.left + (h.clientLeft + parseFloat(g.paddingLeft)) * m.x, y = w.top + (h.clientTop + parseFloat(g.paddingTop)) * m.y;
      c *= m.x, a *= m.y, d *= m.x, u *= m.y, c += v, a += y, h = O(h).frameElement;
    }
  }
  return et({
    width: d,
    height: u,
    x: c,
    y: a
  });
}
function Ut(t) {
  let {
    rect: e,
    offsetParent: n,
    strategy: o
  } = t;
  const i = k(n), s = M(n);
  if (n === s)
    return e;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = B(1);
  const c = B(0);
  if ((i || !i && o !== "fixed") && ((j(n) !== "body" || G(s)) && (r = it(n)), k(n))) {
    const a = z(n);
    l = $(n), c.x = a.x + n.clientLeft, c.y = a.y + n.clientTop;
  }
  return {
    width: e.width * l.x,
    height: e.height * l.y,
    x: e.x * l.x - r.scrollLeft * l.x + c.x,
    y: e.y * l.y - r.scrollTop * l.y + c.y
  };
}
function Jt(t) {
  return Array.from(t.getClientRects());
}
function At(t) {
  return z(M(t)).left + it(t).scrollLeft;
}
function Kt(t) {
  const e = M(t), n = it(t), o = t.ownerDocument.body, i = R(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = R(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + At(t);
  const l = -n.scrollTop;
  return T(o).direction === "rtl" && (r += R(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: l
  };
}
function Gt(t, e) {
  const n = O(t), o = M(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = at();
    (!a || a && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: l,
    y: c
  };
}
function Qt(t, e) {
  const n = z(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = k(t) ? $(t) : B(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, c = i * s.x, a = o * s.y;
  return {
    width: r,
    height: l,
    x: c,
    y: a
  };
}
function pt(t, e, n) {
  let o;
  if (e === "viewport")
    o = Gt(t, n);
  else if (e === "document")
    o = Kt(M(t));
  else if (H(e))
    o = Qt(e, n);
  else {
    const i = bt(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return et(o);
}
function Et(t, e) {
  const n = I(t);
  return n === e || !H(n) || ot(n) ? !1 : T(n).position === "fixed" || Et(n, e);
}
function Zt(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = J(t, [], !1).filter((l) => H(l) && j(l) !== "body"), i = null;
  const s = T(t).position === "fixed";
  let r = s ? I(t) : t;
  for (; H(r) && !ot(r); ) {
    const l = T(r), c = lt(r);
    !c && l.position === "fixed" && (i = null), (s ? !c && !i : !c && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || G(r) && !c && Et(t, r)) ? o = o.filter((d) => d !== r) : i = l, r = I(r);
  }
  return e.set(t, o), o;
}
function te(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? Zt(e, this._c) : [].concat(n), o], l = r[0], c = r.reduce((a, d) => {
    const u = pt(e, d, i);
    return a.top = R(u.top, a.top), a.right = N(u.right, a.right), a.bottom = N(u.bottom, a.bottom), a.left = R(u.left, a.left), a;
  }, pt(e, l, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ee(t) {
  return yt(t);
}
function ne(t, e, n) {
  const o = k(e), i = M(e), s = n === "fixed", r = z(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = B(0);
  if (o || !o && !s)
    if ((j(e) !== "body" || G(i)) && (l = it(e)), o) {
      const a = z(e, !0, s, e);
      c.x = a.x + e.clientLeft, c.y = a.y + e.clientTop;
    } else
      i && (c.x = At(i));
  return {
    x: r.left + l.scrollLeft - c.x,
    y: r.top + l.scrollTop - c.y,
    width: r.width,
    height: r.height
  };
}
function mt(t, e) {
  return !k(t) || T(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Ct(t, e) {
  const n = O(t);
  if (!k(t))
    return n;
  let o = mt(t, e);
  for (; o && _t(o) && T(o).position === "static"; )
    o = mt(o, e);
  return o && (j(o) === "html" || j(o) === "body" && T(o).position === "static" && !lt(o)) ? n : o || Yt(t) || n;
}
const oe = async function(t) {
  let {
    reference: e,
    floating: n,
    strategy: o
  } = t;
  const i = this.getOffsetParent || Ct, s = this.getDimensions;
  return {
    reference: ne(e, await i(n), o),
    floating: {
      x: 0,
      y: 0,
      ...await s(n)
    }
  };
};
function ie(t) {
  return T(t).direction === "rtl";
}
const se = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ut,
  getDocumentElement: M,
  getClippingRect: te,
  getOffsetParent: Ct,
  getElementRects: oe,
  getClientRects: Jt,
  getDimensions: ee,
  getScale: $,
  isElement: H,
  isRTL: ie
};
function re(t, e) {
  let n = null, o;
  const i = M(t);
  function s() {
    clearTimeout(o), n && n.disconnect(), n = null;
  }
  function r(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), s();
    const {
      left: a,
      top: d,
      width: u,
      height: p
    } = t.getBoundingClientRect();
    if (l || e(), !u || !p)
      return;
    const f = Q(d), h = Q(i.clientWidth - (a + u)), m = Q(i.clientHeight - (d + p)), w = Q(a), v = {
      rootMargin: -f + "px " + -h + "px " + -m + "px " + -w + "px",
      threshold: R(0, N(1, c)) || 1
    };
    let y = !0;
    function A(x) {
      const b = x[0].intersectionRatio;
      if (b !== c) {
        if (!y)
          return r();
        b ? r(!1, b) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 100);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, v);
    }
    n.observe(t);
  }
  return r(!0), s;
}
function ce(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, a = ft(t), d = i || s ? [...a ? J(a) : [], ...J(e)] : [];
  d.forEach((g) => {
    i && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const u = a && l ? re(a, n) : null;
  let p = -1, f = null;
  r && (f = new ResizeObserver((g) => {
    let [v] = g;
    v && v.target === a && f && (f.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      f && f.observe(e);
    })), n();
  }), a && !c && f.observe(a), f.observe(e));
  let h, m = c ? z(t) : null;
  c && w();
  function w() {
    const g = z(t);
    m && (g.x !== m.x || g.y !== m.y || g.width !== m.width || g.height !== m.height) && n(), m = g, h = requestAnimationFrame(w);
  }
  return n(), () => {
    d.forEach((g) => {
      i && g.removeEventListener("scroll", n), s && g.removeEventListener("resize", n);
    }), u && u(), f && f.disconnect(), f = null, c && cancelAnimationFrame(h);
  };
}
const le = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: se,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return Bt(t, e, {
    ...i,
    platform: s
  });
}, ae = `:host{--wj-popup-top: auto;--wj-popup-left: auto;display:flex}.native-popup{position:absolute;isolation:isolate;z-index:999;left:var(--wj-popup-left);top:var(--wj-popup-top)}.native-popup:not(.popup-active){display:none}
`;
class fe extends Tt {
  constructor() {
    super();
    ut(this, "className", "Popup");
    this._manual = !1;
  }
  set manual(n) {
    this._manual = n;
  }
  get manual() {
    return this.hasAttribute("manual") && (this._manual = !0), this._manual;
  }
  static get cssStyleSheet() {
    return ae;
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
    U.addListener(this.anchorEl, "click", null, (n) => {
      this.hasAttribute("disabled") || this.showHide();
    }, { stopPropagation: !0 }), document.addEventListener("click", (n) => {
      n.composedPath().some((i) => i === this) || this.hasAttribute("active") && this.removeAttribute("active");
    });
  }
  showHide() {
    this.hasAttribute("active") ? this.removeAttribute("active") : this.setAttribute("active", "");
  }
  reposition() {
    const n = [];
    this.offsetCalc = +this.offset || 0, this.slotArrow instanceof HTMLSlotElement && (this.arrow = this.slotArrow.assignedElements({ flatten: !0 })[0], this.arrow && (n.push(
      jt({
        element: this.arrow
      })
    ), this.offsetCalc = Math.sqrt(2 * this.arrow.offsetWidth ** 2) / 2 + +this.offset)), n.push(
      $t(this.offsetCalc)
    ), n.push(
      Vt()
    ), this.hasAttribute("size") && n.push(
      It({
        apply({ availableWidth: o, availableHeight: i, elements: s }) {
          Object.assign(s.floating.style, {
            width: `${s.reference.offsetWidth}px`
          });
        }
      })
    ), le(this.anchorEl, this.native, {
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
          const { x: d, y: u } = s.arrow;
          Object.assign(this.arrow.style, {
            left: d != null ? `${d}px` : "",
            top: u != null ? `${u}px` : "",
            [a]: `${-this.arrow.offsetWidth / 2}px`
          });
        }
      }
    }), U.dispatchCustomEvent(this, "wj-popup:reposition", {
      data: { top: "bottom", right: "left", bottom: "top", left: "right" },
      context: this,
      event: this
    });
  }
  show() {
    U.dispatchCustomEvent(this, "wj-popup:show"), this.native.classList.add("popup-active"), this.cleanup = ce(this.anchorEl, this.native, () => {
      this.reposition();
    });
  }
  hide() {
    U.dispatchCustomEvent(this, "wj-popup:hide"), this.native.classList.remove("popup-active"), this.cleanup(), this.cleanup = void 0;
  }
  onHide() {
    this.removeAttribute("active");
  }
  disconnectedCallback() {
    U.removeElement(this.anchorEl);
  }
}
customElements.get("wj-popup") || window.customElements.define("wj-popup", fe);
export {
  fe as Popup
};
