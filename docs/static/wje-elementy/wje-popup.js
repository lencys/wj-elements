var Tt = Object.defineProperty;
var Pt = (t, e, n) => e in t ? Tt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ut = (t, e, n) => (Pt(t, typeof e != "symbol" ? e + "" : e, n), n);
import St, { event as U } from "./wje-element.js";
const N = Math.min, R = Math.max, Z = Math.round, Q = Math.floor, B = (t) => ({
  x: t,
  y: t
}), Dt = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kt = {
  start: "end",
  end: "start"
};
function Wt(t, e, n) {
  return R(t, N(e, n));
}
function K(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function j(t) {
  return t.split("-")[0];
}
function I(t) {
  return t.split("-")[1];
}
function Ft(t) {
  return t === "x" ? "y" : "x";
}
function rt(t) {
  return t === "y" ? "height" : "width";
}
function nt(t) {
  return ["top", "bottom"].includes(j(t)) ? "y" : "x";
}
function lt(t) {
  return Ft(nt(t));
}
function Ht(t, e, n) {
  n === void 0 && (n = !1);
  const o = I(t), i = lt(t), s = rt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = tt(r)), [r, tt(r)];
}
function Mt(t) {
  const e = tt(t);
  return [st(t), e, st(e)];
}
function st(t) {
  return t.replace(/start|end/g, (e) => kt[e]);
}
function Nt(t, e, n) {
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
function Bt(t, e, n, o) {
  const i = I(t);
  let s = Nt(j(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(st)))), s;
}
function tt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Dt[e]);
}
function Vt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function wt(t) {
  return typeof t != "number" ? Vt(t) : {
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
  const s = nt(e), r = lt(e), c = rt(r), l = j(e), a = s === "y", h = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, p = o[c] / 2 - i[c] / 2;
  let f;
  switch (l) {
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
  switch (I(e)) {
    case "start":
      f[r] -= p * (n && a ? -1 : 1);
      break;
    case "end":
      f[r] += p * (n && a ? -1 : 1);
      break;
  }
  return f;
}
const jt = async (t, e, n) => {
  const {
    placement: o = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: r
  } = n, c = s.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: h,
    y: u
  } = ht(a, o, l), p = o, f = {}, d = 0;
  for (let m = 0; m < c.length; m++) {
    const {
      name: w,
      fn: g
    } = c[m], {
      x: v,
      y: x,
      data: b,
      reset: y
    } = await g({
      x: h,
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
    h = v ?? h, u = x ?? u, f = {
      ...f,
      [w]: {
        ...f[w],
        ...b
      }
    }, y && d <= 50 && (d++, typeof y == "object" && (y.placement && (p = y.placement), y.rects && (a = y.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : y.rects), {
      x: h,
      y: u
    } = ht(a, p, l)), m = -1);
  }
  return {
    x: h,
    y: u,
    placement: p,
    strategy: i,
    middlewareData: f
  };
};
async function vt(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: o,
    y: i,
    platform: s,
    rects: r,
    elements: c,
    strategy: l
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = K(e, t), d = wt(f), w = c[p ? u === "floating" ? "reference" : "floating" : u], g = et(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
    boundary: a,
    rootBoundary: h,
    strategy: l
  })), v = u === "floating" ? {
    ...r.floating,
    x: o,
    y: i
  } : r.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating)), b = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = et(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: v,
    offsetParent: x,
    strategy: l
  }) : v);
  return {
    top: (g.top - y.top + d.top) / b.y,
    bottom: (y.bottom - g.bottom + d.bottom) / b.y,
    left: (g.left - y.left + d.left) / b.x,
    right: (y.right - g.right + d.right) / b.x
  };
}
const zt = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: o,
      placement: i,
      rects: s,
      platform: r,
      elements: c,
      middlewareData: l
    } = e, {
      element: a,
      padding: h = 0
    } = K(t, e) || {};
    if (a == null)
      return {};
    const u = wt(h), p = {
      x: n,
      y: o
    }, f = lt(i), d = rt(f), m = await r.getDimensions(a), w = f === "y", g = w ? "top" : "left", v = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", b = s.reference[d] + s.reference[f] - p[f] - s.floating[d], y = p[f] - s.reference[f], A = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
    let E = A ? A[x] : 0;
    (!E || !await (r.isElement == null ? void 0 : r.isElement(A))) && (E = c.floating[x] || s.floating[d]);
    const P = b / 2 - y / 2, M = E / 2 - m[d] / 2 - 1, Y = N(u[g], M), X = N(u[v], M), L = Y, q = E - m[d] - X, C = E / 2 - m[d] / 2 + P, S = Wt(L, C, q), D = !l.arrow && I(i) != null && C !== S && s.reference[d] / 2 - (C < L ? Y : X) - m[d] / 2 < 0, W = D ? C < L ? C - L : C - q : 0;
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
}), $t = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, o;
      const {
        placement: i,
        middlewareData: s,
        rects: r,
        initialPlacement: c,
        platform: l,
        elements: a
      } = e, {
        mainAxis: h = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: d = "none",
        flipAlignment: m = !0,
        ...w
      } = K(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const g = j(i), v = j(c) === c, x = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)), b = p || (v || !m ? [tt(c)] : Mt(c));
      !p && d !== "none" && b.push(...Bt(c, m, d, x));
      const y = [c, ...b], A = await vt(e, w), E = [];
      let P = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (h && E.push(A[g]), u) {
        const L = Ht(i, r, x);
        E.push(A[L[0]], A[L[1]]);
      }
      if (P = [...P, {
        placement: i,
        overflows: E
      }], !E.every((L) => L <= 0)) {
        var M, Y;
        const L = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1, q = y[L];
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
              const S = (X = P.map((D) => [D.placement, D.overflows.filter((W) => W > 0).reduce((W, Lt) => W + Lt, 0)]).sort((D, W) => D[1] - W[1])[0]) == null ? void 0 : X[0];
              S && (C = S);
              break;
            }
            case "initialPlacement":
              C = c;
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
async function _t(t, e) {
  const {
    placement: n,
    platform: o,
    elements: i
  } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = j(n), c = I(n), l = nt(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, h = s && l ? -1 : 1, u = K(e, t);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: d
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
  return c && typeof d == "number" && (f = c === "end" ? d * -1 : d), l ? {
    x: f * h,
    y: p * a
  } : {
    x: p * a,
    y: f * h
  };
}
const It = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, o;
      const {
        x: i,
        y: s,
        placement: r,
        middlewareData: c
      } = e, l = await _t(e, t);
      return r === ((n = c.offset) == null ? void 0 : n.placement) && (o = c.arrow) != null && o.alignmentOffset ? {} : {
        x: i + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: r
        }
      };
    }
  };
}, Yt = function(t) {
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
        ...c
      } = K(t, e), l = await vt(e, c), a = j(n), h = I(n), u = nt(n) === "y", {
        width: p,
        height: f
      } = o.floating;
      let d, m;
      a === "top" || a === "bottom" ? (d = a, m = h === (await (i.isRTL == null ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = a, d = h === "end" ? "top" : "bottom");
      const w = f - l[d], g = p - l[m], v = !e.middlewareData.shift;
      let x = w, b = g;
      if (u) {
        const A = p - l.left - l.right;
        b = h || v ? N(g, A) : A;
      } else {
        const A = f - l.top - l.bottom;
        x = h || v ? N(w, A) : A;
      }
      if (v && !h) {
        const A = R(l.left, 0), E = R(l.right, 0), P = R(l.top, 0), M = R(l.bottom, 0);
        u ? b = p - 2 * (A !== 0 || E !== 0 ? A + E : R(l.left, l.right)) : x = f - 2 * (P !== 0 || M !== 0 ? P + M : R(l.top, l.bottom));
      }
      await r({
        ...e,
        availableWidth: b,
        availableHeight: x
      });
      const y = await i.getDimensions(s.floating);
      return p !== y.width || f !== y.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function V(t) {
  return xt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function O(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function H(t) {
  var e;
  return (e = (xt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function xt(t) {
  return t instanceof Node || t instanceof O(t).Node;
}
function F(t) {
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
function Xt(t) {
  return ["table", "td", "th"].includes(V(t));
}
function ct(t) {
  const e = at(), n = T(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function qt(t) {
  let e = _(t);
  for (; k(e) && !ot(e); ) {
    if (ct(e))
      return e;
    e = _(e);
  }
  return null;
}
function at() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ot(t) {
  return ["html", "body", "#document"].includes(V(t));
}
function T(t) {
  return O(t).getComputedStyle(t);
}
function it(t) {
  return F(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function _(t) {
  if (V(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    dt(t) && t.host || // Fallback.
    H(t)
  );
  return dt(e) ? e.host : e;
}
function yt(t) {
  const e = _(t);
  return ot(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : k(e) && G(e) ? e : yt(e);
}
function J(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = yt(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = O(i);
  return s ? e.concat(r, r.visualViewport || [], G(i) ? i : [], r.frameElement && n ? J(r.frameElement) : []) : e.concat(i, J(i, [], n));
}
function bt(t) {
  const e = T(t);
  let n = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const i = k(t), s = i ? t.offsetWidth : n, r = i ? t.offsetHeight : o, c = Z(n) !== s || Z(o) !== r;
  return c && (n = s, o = r), {
    width: n,
    height: o,
    $: c
  };
}
function ft(t) {
  return F(t) ? t : t.contextElement;
}
function $(t) {
  const e = ft(t);
  if (!k(e))
    return B(1);
  const n = e.getBoundingClientRect(), {
    width: o,
    height: i,
    $: s
  } = bt(e);
  let r = (s ? Z(n.width) : n.width) / o, c = (s ? Z(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: r,
    y: c
  };
}
const Ut = /* @__PURE__ */ B(0);
function At(t) {
  const e = O(t);
  return !at() || !e.visualViewport ? Ut : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Jt(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== O(t) ? !1 : e;
}
function z(t, e, n, o) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), s = ft(t);
  let r = B(1);
  e && (o ? F(o) && (r = $(o)) : r = $(t));
  const c = Jt(s, n, o) ? At(s) : B(0);
  let l = (i.left + c.x) / r.x, a = (i.top + c.y) / r.y, h = i.width / r.x, u = i.height / r.y;
  if (s) {
    const p = O(s), f = o && F(o) ? O(o) : o;
    let d = p, m = d.frameElement;
    for (; m && o && f !== d; ) {
      const w = $(m), g = m.getBoundingClientRect(), v = T(m), x = g.left + (m.clientLeft + parseFloat(v.paddingLeft)) * w.x, b = g.top + (m.clientTop + parseFloat(v.paddingTop)) * w.y;
      l *= w.x, a *= w.y, h *= w.x, u *= w.y, l += x, a += b, d = O(m), m = d.frameElement;
    }
  }
  return et({
    width: h,
    height: u,
    x: l,
    y: a
  });
}
const Kt = [":popover-open", ":modal"];
function Et(t) {
  return Kt.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Gt(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: o,
    strategy: i
  } = t;
  const s = i === "fixed", r = H(o), c = e ? Et(e.floating) : !1;
  if (o === r || c && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = B(1);
  const h = B(0), u = k(o);
  if ((u || !u && !s) && ((V(o) !== "body" || G(r)) && (l = it(o)), k(o))) {
    const p = z(o);
    a = $(o), h.x = p.x + o.clientLeft, h.y = p.y + o.clientTop;
  }
  return {
    width: n.width * a.x,
    height: n.height * a.y,
    x: n.x * a.x - l.scrollLeft * a.x + h.x,
    y: n.y * a.y - l.scrollTop * a.y + h.y
  };
}
function Qt(t) {
  return Array.from(t.getClientRects());
}
function Ct(t) {
  return z(H(t)).left + it(t).scrollLeft;
}
function Zt(t) {
  const e = H(t), n = it(t), o = t.ownerDocument.body, i = R(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = R(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + Ct(t);
  const c = -n.scrollTop;
  return T(o).direction === "rtl" && (r += R(e.clientWidth, o.clientWidth) - i), {
    width: i,
    height: s,
    x: r,
    y: c
  };
}
function te(t, e) {
  const n = O(t), o = H(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = at();
    (!a || a && e === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: c,
    y: l
  };
}
function ee(t, e) {
  const n = z(t, !0, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = k(t) ? $(t) : B(1), r = t.clientWidth * s.x, c = t.clientHeight * s.y, l = i * s.x, a = o * s.y;
  return {
    width: r,
    height: c,
    x: l,
    y: a
  };
}
function pt(t, e, n) {
  let o;
  if (e === "viewport")
    o = te(t, n);
  else if (e === "document")
    o = Zt(H(t));
  else if (F(e))
    o = ee(e, n);
  else {
    const i = At(t);
    o = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return et(o);
}
function Rt(t, e) {
  const n = _(t);
  return n === e || !F(n) || ot(n) ? !1 : T(n).position === "fixed" || Rt(n, e);
}
function ne(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let o = J(t, [], !1).filter((c) => F(c) && V(c) !== "body"), i = null;
  const s = T(t).position === "fixed";
  let r = s ? _(t) : t;
  for (; F(r) && !ot(r); ) {
    const c = T(r), l = ct(r);
    !l && c.position === "fixed" && (i = null), (s ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || G(r) && !l && Rt(t, r)) ? o = o.filter((h) => h !== r) : i = c, r = _(r);
  }
  return e.set(t, o), o;
}
function oe(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: o,
    strategy: i
  } = t;
  const r = [...n === "clippingAncestors" ? ne(e, this._c) : [].concat(n), o], c = r[0], l = r.reduce((a, h) => {
    const u = pt(e, h, i);
    return a.top = R(u.top, a.top), a.right = N(u.right, a.right), a.bottom = N(u.bottom, a.bottom), a.left = R(u.left, a.left), a;
  }, pt(e, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ie(t) {
  const {
    width: e,
    height: n
  } = bt(t);
  return {
    width: e,
    height: n
  };
}
function se(t, e, n) {
  const o = k(e), i = H(e), s = n === "fixed", r = z(t, !0, s, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = B(0);
  if (o || !o && !s)
    if ((V(e) !== "body" || G(i)) && (c = it(e)), o) {
      const u = z(e, !0, s, e);
      l.x = u.x + e.clientLeft, l.y = u.y + e.clientTop;
    } else
      i && (l.x = Ct(i));
  const a = r.left + c.scrollLeft - l.x, h = r.top + c.scrollTop - l.y;
  return {
    x: a,
    y: h,
    width: r.width,
    height: r.height
  };
}
function mt(t, e) {
  return !k(t) || T(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Ot(t, e) {
  const n = O(t);
  if (!k(t) || Et(t))
    return n;
  let o = mt(t, e);
  for (; o && Xt(o) && T(o).position === "static"; )
    o = mt(o, e);
  return o && (V(o) === "html" || V(o) === "body" && T(o).position === "static" && !ct(o)) ? n : o || qt(t) || n;
}
const re = async function(t) {
  const e = this.getOffsetParent || Ot, n = this.getDimensions;
  return {
    reference: se(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(t.floating)
    }
  };
};
function le(t) {
  return T(t).direction === "rtl";
}
const ce = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gt,
  getDocumentElement: H,
  getClippingRect: oe,
  getOffsetParent: Ot,
  getElementRects: re,
  getClientRects: Qt,
  getDimensions: ie,
  getScale: $,
  isElement: F,
  isRTL: le
};
function ae(t, e) {
  let n = null, o;
  const i = H(t);
  function s() {
    var c;
    clearTimeout(o), (c = n) == null || c.disconnect(), n = null;
  }
  function r(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), s();
    const {
      left: a,
      top: h,
      width: u,
      height: p
    } = t.getBoundingClientRect();
    if (c || e(), !u || !p)
      return;
    const f = Q(h), d = Q(i.clientWidth - (a + u)), m = Q(i.clientHeight - (h + p)), w = Q(a), v = {
      rootMargin: -f + "px " + -d + "px " + -m + "px " + -w + "px",
      threshold: R(0, N(1, l)) || 1
    };
    let x = !0;
    function b(y) {
      const A = y[0].intersectionRatio;
      if (A !== l) {
        if (!x)
          return r();
        A ? r(!1, A) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, v);
    }
    n.observe(t);
  }
  return r(!0), s;
}
function fe(t, e, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, a = ft(t), h = i || s ? [...a ? J(a) : [], ...J(e)] : [];
  h.forEach((g) => {
    i && g.addEventListener("scroll", n, {
      passive: !0
    }), s && g.addEventListener("resize", n);
  });
  const u = a && c ? ae(a, n) : null;
  let p = -1, f = null;
  r && (f = new ResizeObserver((g) => {
    let [v] = g;
    v && v.target === a && f && (f.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var x;
      (x = f) == null || x.observe(e);
    })), n();
  }), a && !l && f.observe(a), f.observe(e));
  let d, m = l ? z(t) : null;
  l && w();
  function w() {
    const g = z(t);
    m && (g.x !== m.x || g.y !== m.y || g.width !== m.width || g.height !== m.height) && n(), m = g, d = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    h.forEach((v) => {
      i && v.removeEventListener("scroll", n), s && v.removeEventListener("resize", n);
    }), u == null || u(), (g = f) == null || g.disconnect(), f = null, l && cancelAnimationFrame(d);
  };
}
const ue = $t, he = Yt, de = zt, pe = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = {
    platform: ce,
    ...n
  }, s = {
    ...i.platform,
    _c: o
  };
  return jt(t, e, {
    ...i,
    platform: s
  });
}, me = ":host{--wje-popup-top: auto;--wje-popup-left: auto;display:flex}.native-popup{position:absolute;isolation:isolate;z-index:999;left:var(--wje-popup-left);top:var(--wje-popup-top)}.native-popup:not(.popup-active){display:none}";
class gt extends St {
  /**
   * Creates an instance of Popup.
   *
   * @constructor
   */
  constructor() {
    super();
    ut(this, "className", "Popup");
    this._manual = !1;
  }
  /**
   * Sets the manual property of the popup.
   *
   * @param {boolean} value - The value to set.
   */
  set manual(n) {
    this._manual = n;
  }
  /**
   * Gets the manual property of the popup.
   *
   * @returns {boolean} The value of the manual property.
   */
  get manual() {
    return this.hasAttribute("manual") && (this._manual = !0), this._manual;
  }
  /**
   * Returns the CSS styles for the component.
   *
   * @static
   * @returns {CSSStyleSheet}
   */
  static get cssStyleSheet() {
    return me;
  }
  /**
   * Returns the list of attributes to observe for changes.
   *
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ["active"];
  }
  /**
   * Sets up the attributes for the component.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Called when an attribute changes.
   *
   * @param {string} name - The name of the attribute.
   * @param {string} old - The old value of the attribute.
   * @param {string} newName - The new value of the attribute.
   */
  attributeChangedCallback(n, o, i) {
    n === "active" && (this.hasAttribute(n) ? this.show() : this.hide());
  }
  /**
   * Draws the component.
   *
   * @param {Object} context - The context for drawing.
   * @param {Object} store - The store for drawing.
   * @param {Object} params - The parameters for drawing.
   * @returns {DocumentFragment}
   */
  draw(n, o, i) {
    let s = document.createDocumentFragment(), r = document.createElement("slot");
    r.setAttribute("name", "anchor");
    let c = document.createElement("slot");
    c.setAttribute("name", "arrow");
    let l = document.createElement("div");
    l.setAttribute("part", "native"), l.classList.add("native-popup");
    let a = document.createElement("slot");
    return l.appendChild(a), l.appendChild(c), s.appendChild(r), s.appendChild(l), this.slotAnchor = r, this.slotArrow = c, this.native = l, s;
  }
  afterDraw(n, o, i) {
    this.setAnchor();
  }
  /**
   * Sets the anchor for the popup.
   * Adds a click event listener to the anchor element.
   */
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
  /**
   * Toggles the active attribute of the popup.
   */
  showHide() {
    this.hasAttribute("active") ? this.removeAttribute("active") : this.setAttribute("active", "");
  }
  /**
   * Repositions the popup.
   * Uses the floating-ui library to compute the position.
   */
  reposition() {
    const n = [];
    this.offsetCalc = +this.offset || 0, this.slotArrow instanceof HTMLSlotElement && (this.arrow = this.slotArrow.assignedElements({ flatten: !0 })[0], this.arrow && (n.push(
      de({
        element: this.arrow
      })
    ), this.offsetCalc = Math.sqrt(2 * this.arrow.offsetWidth ** 2) / 2 + +this.offset)), n.push(
      It(this.offsetCalc)
    ), n.push(
      ue()
    ), this.hasAttribute("size") && n.push(
      he({
        apply({ availableWidth: o, availableHeight: i, elements: s }) {
          Object.assign(s.floating.style, {
            width: `${s.reference.offsetWidth}px`
          });
        }
      })
    ), pe(this.anchorEl, this.native, {
      placement: this.placement || "bottom",
      strategy: "fixed",
      middleware: n
    }).then(({ x: o, y: i, middlewareData: s, placement: r, strategy: c }) => {
      if (this.native.style.setProperty("--wje-popup-left", o + "px"), this.native.style.setProperty("--wje-popup-top", i + "px"), this.native.style.position = c, this.arrow) {
        const l = this.placement.split("-")[0], a = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[l];
        if (s.arrow) {
          const { x: h, y: u } = s.arrow;
          Object.assign(this.arrow.style, {
            left: h != null ? `${h}px` : "",
            top: u != null ? `${u}px` : "",
            [a]: `${-this.arrow.offsetWidth / 2}px`
          });
        }
      }
    }), U.dispatchCustomEvent(this, "wje-popup:reposition", {
      data: { top: "bottom", right: "left", bottom: "top", left: "right" },
      context: this,
      event: this
    });
  }
  /**
   * Shows the popup.
   * Adds the popup-active class to the native element.
   * Sets up auto update for repositioning.
   */
  show() {
    U.dispatchCustomEvent(this, "wje-popup:show"), this.native.classList.add("popup-active"), this.cleanup = fe(this.anchorEl, this.native, () => {
      this.reposition();
    });
  }
  /**
   * Hides the popup.
   * Removes the popup-active class from the native element.
   * Cleans up the auto update for repositioning.
   */
  hide() {
    U.dispatchCustomEvent(this, "wje-popup:hide"), this.native.classList.remove("popup-active"), this.cleanup, this.cleanup = void 0;
  }
  /**
   * Removes the active attribute when the popup is hidden.
   */
  onHide() {
    this.removeAttribute("active");
  }
  /**
   * Adds event listeners after the component is drawn.
   */
  disconnectedCallback() {
    U.removeElement(this.anchorEl);
  }
}
gt.define("wje-popup", gt);
export {
  gt as default
};
