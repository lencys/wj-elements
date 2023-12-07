var N = Object.defineProperty;
var z = (t, r, e) => r in t ? N(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var v = (t, r, e) => (z(t, typeof r != "symbol" ? r + "" : r, e), e);
import B, { event as G } from "./wj-element.js";
import "./wj-store.js";
function S(t) {
  "@babel/helpers - typeof";
  return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, S(t);
}
var O = /^\s+/, $ = /\s+$/;
function s(t, r) {
  if (t = t || "", r = r || {}, t instanceof s)
    return t;
  if (!(this instanceof s))
    return new s(t, r);
  var e = V(t);
  this._originalInput = t, this._r = e.r, this._g = e.g, this._b = e.b, this._a = e.a, this._roundA = Math.round(100 * this._a) / 100, this._format = r.format || e.format, this._gradientType = r.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = e.ok;
}
s.prototype = {
  isDark: function() {
    return this.getBrightness() < 128;
  },
  isLight: function() {
    return !this.isDark();
  },
  isValid: function() {
    return this._ok;
  },
  getOriginalInput: function() {
    return this._originalInput;
  },
  getFormat: function() {
    return this._format;
  },
  getAlpha: function() {
    return this._a;
  },
  getBrightness: function() {
    var r = this.toRgb();
    return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3;
  },
  getLuminance: function() {
    var r = this.toRgb(), e, i, a, n, o, h;
    return e = r.r / 255, i = r.g / 255, a = r.b / 255, e <= 0.03928 ? n = e / 12.92 : n = Math.pow((e + 0.055) / 1.055, 2.4), i <= 0.03928 ? o = i / 12.92 : o = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? h = a / 12.92 : h = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * o + 0.0722 * h;
  },
  setAlpha: function(r) {
    return this._a = D(r), this._roundA = Math.round(100 * this._a) / 100, this;
  },
  toHsv: function() {
    var r = R(this._r, this._g, this._b);
    return {
      h: r.h * 360,
      s: r.s,
      v: r.v,
      a: this._a
    };
  },
  toHsvString: function() {
    var r = R(this._r, this._g, this._b), e = Math.round(r.h * 360), i = Math.round(r.s * 100), a = Math.round(r.v * 100);
    return this._a == 1 ? "hsv(" + e + ", " + i + "%, " + a + "%)" : "hsva(" + e + ", " + i + "%, " + a + "%, " + this._roundA + ")";
  },
  toHsl: function() {
    var r = C(this._r, this._g, this._b);
    return {
      h: r.h * 360,
      s: r.s,
      l: r.l,
      a: this._a
    };
  },
  toHslString: function() {
    var r = C(this._r, this._g, this._b), e = Math.round(r.h * 360), i = Math.round(r.s * 100), a = Math.round(r.l * 100);
    return this._a == 1 ? "hsl(" + e + ", " + i + "%, " + a + "%)" : "hsla(" + e + ", " + i + "%, " + a + "%, " + this._roundA + ")";
  },
  toHex: function(r) {
    return E(this._r, this._g, this._b, r);
  },
  toHexString: function(r) {
    return "#" + this.toHex(r);
  },
  toHex8: function(r) {
    return W(this._r, this._g, this._b, this._a, r);
  },
  toHex8String: function(r) {
    return "#" + this.toHex8(r);
  },
  toRgb: function() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function() {
    return {
      r: Math.round(u(this._r, 255) * 100) + "%",
      g: Math.round(u(this._g, 255) * 100) + "%",
      b: Math.round(u(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function() {
    return this._a == 1 ? "rgb(" + Math.round(u(this._r, 255) * 100) + "%, " + Math.round(u(this._g, 255) * 100) + "%, " + Math.round(u(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(u(this._r, 255) * 100) + "%, " + Math.round(u(this._g, 255) * 100) + "%, " + Math.round(u(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function() {
    return this._a === 0 ? "transparent" : this._a < 1 ? !1 : se[E(this._r, this._g, this._b, !0)] || !1;
  },
  toFilter: function(r) {
    var e = "#" + T(this._r, this._g, this._b, this._a), i = e, a = this._gradientType ? "GradientType = 1, " : "";
    if (r) {
      var n = s(r);
      i = "#" + T(n._r, n._g, n._b, n._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + a + "startColorstr=" + e + ",endColorstr=" + i + ")";
  },
  toString: function(r) {
    var e = !!r;
    r = r || this._format;
    var i = !1, a = this._a < 1 && this._a >= 0, n = !e && a && (r === "hex" || r === "hex6" || r === "hex3" || r === "hex4" || r === "hex8" || r === "name");
    return n ? r === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (r === "rgb" && (i = this.toRgbString()), r === "prgb" && (i = this.toPercentageRgbString()), (r === "hex" || r === "hex6") && (i = this.toHexString()), r === "hex3" && (i = this.toHexString(!0)), r === "hex4" && (i = this.toHex8String(!0)), r === "hex8" && (i = this.toHex8String()), r === "name" && (i = this.toName()), r === "hsl" && (i = this.toHslString()), r === "hsv" && (i = this.toHsvString()), i || this.toHexString());
  },
  clone: function() {
    return s(this.toString());
  },
  _applyModification: function(r, e) {
    var i = r.apply(null, [this].concat([].slice.call(e)));
    return this._r = i._r, this._g = i._g, this._b = i._b, this.setAlpha(i._a), this;
  },
  lighten: function() {
    return this._applyModification(K, arguments);
  },
  brighten: function() {
    return this._applyModification(Q, arguments);
  },
  darken: function() {
    return this._applyModification(ee, arguments);
  },
  desaturate: function() {
    return this._applyModification(Y, arguments);
  },
  saturate: function() {
    return this._applyModification(J, arguments);
  },
  greyscale: function() {
    return this._applyModification(Z, arguments);
  },
  spin: function() {
    return this._applyModification(te, arguments);
  },
  _applyCombination: function(r, e) {
    return r.apply(null, [this].concat([].slice.call(e)));
  },
  analogous: function() {
    return this._applyCombination(ae, arguments);
  },
  complement: function() {
    return this._applyCombination(re, arguments);
  },
  monochromatic: function() {
    return this._applyCombination(ne, arguments);
  },
  splitcomplement: function() {
    return this._applyCombination(ie, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function() {
    return this._applyCombination(F, [3]);
  },
  tetrad: function() {
    return this._applyCombination(F, [4]);
  }
};
s.fromRatio = function(t, r) {
  if (S(t) == "object") {
    var e = {};
    for (var i in t)
      t.hasOwnProperty(i) && (i === "a" ? e[i] = t[i] : e[i] = y(t[i]));
    t = e;
  }
  return s(t, r);
};
function V(t) {
  var r = {
    r: 0,
    g: 0,
    b: 0
  }, e = 1, i = null, a = null, n = null, o = !1, h = !1;
  return typeof t == "string" && (t = ue(t)), S(t) == "object" && (m(t.r) && m(t.g) && m(t.b) ? (r = q(t.r, t.g, t.b), o = !0, h = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : m(t.h) && m(t.s) && m(t.v) ? (i = y(t.s), a = y(t.v), r = X(t.h, i, a), o = !0, h = "hsv") : m(t.h) && m(t.s) && m(t.l) && (i = y(t.s), n = y(t.l), r = U(t.h, i, n), o = !0, h = "hsl"), t.hasOwnProperty("a") && (e = t.a)), e = D(e), {
    ok: o,
    format: t.format || h,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: e
  };
}
function q(t, r, e) {
  return {
    r: u(t, 255) * 255,
    g: u(r, 255) * 255,
    b: u(e, 255) * 255
  };
}
function C(t, r, e) {
  t = u(t, 255), r = u(r, 255), e = u(e, 255);
  var i = Math.max(t, r, e), a = Math.min(t, r, e), n, o, h = (i + a) / 2;
  if (i == a)
    n = o = 0;
  else {
    var l = i - a;
    switch (o = h > 0.5 ? l / (2 - i - a) : l / (i + a), i) {
      case t:
        n = (r - e) / l + (r < e ? 6 : 0);
        break;
      case r:
        n = (e - t) / l + 2;
        break;
      case e:
        n = (t - r) / l + 4;
        break;
    }
    n /= 6;
  }
  return {
    h: n,
    s: o,
    l: h
  };
}
function U(t, r, e) {
  var i, a, n;
  t = u(t, 360), r = u(r, 100), e = u(e, 100);
  function o(d, g, c) {
    return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? d + (g - d) * 6 * c : c < 1 / 2 ? g : c < 2 / 3 ? d + (g - d) * (2 / 3 - c) * 6 : d;
  }
  if (r === 0)
    i = a = n = e;
  else {
    var h = e < 0.5 ? e * (1 + r) : e + r - e * r, l = 2 * e - h;
    i = o(l, h, t + 1 / 3), a = o(l, h, t), n = o(l, h, t - 1 / 3);
  }
  return {
    r: i * 255,
    g: a * 255,
    b: n * 255
  };
}
function R(t, r, e) {
  t = u(t, 255), r = u(r, 255), e = u(e, 255);
  var i = Math.max(t, r, e), a = Math.min(t, r, e), n, o, h = i, l = i - a;
  if (o = i === 0 ? 0 : l / i, i == a)
    n = 0;
  else {
    switch (i) {
      case t:
        n = (r - e) / l + (r < e ? 6 : 0);
        break;
      case r:
        n = (e - t) / l + 2;
        break;
      case e:
        n = (t - r) / l + 4;
        break;
    }
    n /= 6;
  }
  return {
    h: n,
    s: o,
    v: h
  };
}
function X(t, r, e) {
  t = u(t, 360) * 6, r = u(r, 100), e = u(e, 100);
  var i = Math.floor(t), a = t - i, n = e * (1 - r), o = e * (1 - a * r), h = e * (1 - (1 - a) * r), l = i % 6, d = [e, o, n, n, h, e][l], g = [h, e, e, o, n, n][l], c = [n, n, h, e, e, o][l];
  return {
    r: d * 255,
    g: g * 255,
    b: c * 255
  };
}
function E(t, r, e, i) {
  var a = [b(Math.round(t).toString(16)), b(Math.round(r).toString(16)), b(Math.round(e).toString(16))];
  return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function W(t, r, e, i, a) {
  var n = [b(Math.round(t).toString(16)), b(Math.round(r).toString(16)), b(Math.round(e).toString(16)), b(I(i))];
  return a && n[0].charAt(0) == n[0].charAt(1) && n[1].charAt(0) == n[1].charAt(1) && n[2].charAt(0) == n[2].charAt(1) && n[3].charAt(0) == n[3].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) + n[3].charAt(0) : n.join("");
}
function T(t, r, e, i) {
  var a = [b(I(i)), b(Math.round(t).toString(16)), b(Math.round(r).toString(16)), b(Math.round(e).toString(16))];
  return a.join("");
}
s.equals = function(t, r) {
  return !t || !r ? !1 : s(t).toRgbString() == s(r).toRgbString();
};
s.random = function() {
  return s.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function Y(t, r) {
  r = r === 0 ? 0 : r || 10;
  var e = s(t).toHsl();
  return e.s -= r / 100, e.s = M(e.s), s(e);
}
function J(t, r) {
  r = r === 0 ? 0 : r || 10;
  var e = s(t).toHsl();
  return e.s += r / 100, e.s = M(e.s), s(e);
}
function Z(t) {
  return s(t).desaturate(100);
}
function K(t, r) {
  r = r === 0 ? 0 : r || 10;
  var e = s(t).toHsl();
  return e.l += r / 100, e.l = M(e.l), s(e);
}
function Q(t, r) {
  r = r === 0 ? 0 : r || 10;
  var e = s(t).toRgb();
  return e.r = Math.max(0, Math.min(255, e.r - Math.round(255 * -(r / 100)))), e.g = Math.max(0, Math.min(255, e.g - Math.round(255 * -(r / 100)))), e.b = Math.max(0, Math.min(255, e.b - Math.round(255 * -(r / 100)))), s(e);
}
function ee(t, r) {
  r = r === 0 ? 0 : r || 10;
  var e = s(t).toHsl();
  return e.l -= r / 100, e.l = M(e.l), s(e);
}
function te(t, r) {
  var e = s(t).toHsl(), i = (e.h + r) % 360;
  return e.h = i < 0 ? 360 + i : i, s(e);
}
function re(t) {
  var r = s(t).toHsl();
  return r.h = (r.h + 180) % 360, s(r);
}
function F(t, r) {
  if (isNaN(r) || r <= 0)
    throw new Error("Argument to polyad must be a positive number");
  for (var e = s(t).toHsl(), i = [s(t)], a = 360 / r, n = 1; n < r; n++)
    i.push(s({
      h: (e.h + n * a) % 360,
      s: e.s,
      l: e.l
    }));
  return i;
}
function ie(t) {
  var r = s(t).toHsl(), e = r.h;
  return [s(t), s({
    h: (e + 72) % 360,
    s: r.s,
    l: r.l
  }), s({
    h: (e + 216) % 360,
    s: r.s,
    l: r.l
  })];
}
function ae(t, r, e) {
  r = r || 6, e = e || 30;
  var i = s(t).toHsl(), a = 360 / e, n = [s(t)];
  for (i.h = (i.h - (a * r >> 1) + 720) % 360; --r; )
    i.h = (i.h + a) % 360, n.push(s(i));
  return n;
}
function ne(t, r) {
  r = r || 6;
  for (var e = s(t).toHsv(), i = e.h, a = e.s, n = e.v, o = [], h = 1 / r; r--; )
    o.push(s({
      h: i,
      s: a,
      v: n
    })), n = (n + h) % 1;
  return o;
}
s.mix = function(t, r, e) {
  e = e === 0 ? 0 : e || 50;
  var i = s(t).toRgb(), a = s(r).toRgb(), n = e / 100, o = {
    r: (a.r - i.r) * n + i.r,
    g: (a.g - i.g) * n + i.g,
    b: (a.b - i.b) * n + i.b,
    a: (a.a - i.a) * n + i.a
  };
  return s(o);
};
s.readability = function(t, r) {
  var e = s(t), i = s(r);
  return (Math.max(e.getLuminance(), i.getLuminance()) + 0.05) / (Math.min(e.getLuminance(), i.getLuminance()) + 0.05);
};
s.isReadable = function(t, r, e) {
  var i = s.readability(t, r), a, n;
  switch (n = !1, a = ce(e), a.level + a.size) {
    case "AAsmall":
    case "AAAlarge":
      n = i >= 4.5;
      break;
    case "AAlarge":
      n = i >= 3;
      break;
    case "AAAsmall":
      n = i >= 7;
      break;
  }
  return n;
};
s.mostReadable = function(t, r, e) {
  var i = null, a = 0, n, o, h, l;
  e = e || {}, o = e.includeFallbackColors, h = e.level, l = e.size;
  for (var d = 0; d < r.length; d++)
    n = s.readability(t, r[d]), n > a && (a = n, i = s(r[d]));
  return s.isReadable(t, i, {
    level: h,
    size: l
  }) || !o ? i : (e.includeFallbackColors = !1, s.mostReadable(t, ["#fff", "#000"], e));
};
var j = s.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
}, se = s.hexNames = oe(j);
function oe(t) {
  var r = {};
  for (var e in t)
    t.hasOwnProperty(e) && (r[t[e]] = e);
  return r;
}
function D(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function u(t, r) {
  he(t) && (t = "100%");
  var e = le(t);
  return t = Math.min(r, Math.max(0, parseFloat(t))), e && (t = parseInt(t * r, 10) / 100), Math.abs(t - r) < 1e-6 ? 1 : t % r / parseFloat(r);
}
function M(t) {
  return Math.min(1, Math.max(0, t));
}
function f(t) {
  return parseInt(t, 16);
}
function he(t) {
  return typeof t == "string" && t.indexOf(".") != -1 && parseFloat(t) === 1;
}
function le(t) {
  return typeof t == "string" && t.indexOf("%") != -1;
}
function b(t) {
  return t.length == 1 ? "0" + t : "" + t;
}
function y(t) {
  return t <= 1 && (t = t * 100 + "%"), t;
}
function I(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function L(t) {
  return f(t) / 255;
}
var p = function() {
  var t = "[-\\+]?\\d+%?", r = "[-\\+]?\\d*\\.\\d+%?", e = "(?:" + r + ")|(?:" + t + ")", i = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?", a = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(e),
    rgb: new RegExp("rgb" + i),
    rgba: new RegExp("rgba" + a),
    hsl: new RegExp("hsl" + i),
    hsla: new RegExp("hsla" + a),
    hsv: new RegExp("hsv" + i),
    hsva: new RegExp("hsva" + a),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function m(t) {
  return !!p.CSS_UNIT.exec(t);
}
function ue(t) {
  t = t.replace(O, "").replace($, "").toLowerCase();
  var r = !1;
  if (j[t])
    t = j[t], r = !0;
  else if (t == "transparent")
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  var e;
  return (e = p.rgb.exec(t)) ? {
    r: e[1],
    g: e[2],
    b: e[3]
  } : (e = p.rgba.exec(t)) ? {
    r: e[1],
    g: e[2],
    b: e[3],
    a: e[4]
  } : (e = p.hsl.exec(t)) ? {
    h: e[1],
    s: e[2],
    l: e[3]
  } : (e = p.hsla.exec(t)) ? {
    h: e[1],
    s: e[2],
    l: e[3],
    a: e[4]
  } : (e = p.hsv.exec(t)) ? {
    h: e[1],
    s: e[2],
    v: e[3]
  } : (e = p.hsva.exec(t)) ? {
    h: e[1],
    s: e[2],
    v: e[3],
    a: e[4]
  } : (e = p.hex8.exec(t)) ? {
    r: f(e[1]),
    g: f(e[2]),
    b: f(e[3]),
    a: L(e[4]),
    format: r ? "name" : "hex8"
  } : (e = p.hex6.exec(t)) ? {
    r: f(e[1]),
    g: f(e[2]),
    b: f(e[3]),
    format: r ? "name" : "hex"
  } : (e = p.hex4.exec(t)) ? {
    r: f(e[1] + "" + e[1]),
    g: f(e[2] + "" + e[2]),
    b: f(e[3] + "" + e[3]),
    a: L(e[4] + "" + e[4]),
    format: r ? "name" : "hex8"
  } : (e = p.hex3.exec(t)) ? {
    r: f(e[1] + "" + e[1]),
    g: f(e[2] + "" + e[2]),
    b: f(e[3] + "" + e[3]),
    format: r ? "name" : "hex"
  } : !1;
}
function ce(t) {
  var r, e;
  return t = t || {
    level: "AA",
    size: "small"
  }, r = (t.level || "AA").toUpperCase(), e = (t.size || "small").toLowerCase(), r !== "AA" && r !== "AAA" && (r = "AA"), e !== "small" && e !== "large" && (e = "small"), {
    level: r,
    size: e
  };
}
const de = `/*!
* direction.scss
*/:host{--wj-color-picker-value: #ff0000;--wj-color-picker-size: 1rem;--wj-color-picker-radius: 4px}.anchor{width:var(--wj-color-picker-size);height:var(--wj-color-picker-size);background:var(--wj-color-picker-value)}.picker{width:200px;min-height:90px;box-shadow:0 0 5px #0000000d,0 5px 20px #0000001a;border-radius:var(--wj-color-picker-radius);background:#fff}.color-area{display:block;position:relative;height:100px;color:var(--wj-color-picker-area);background-image:linear-gradient(rgba(0,0,0,0),#000),linear-gradient(90deg,#fff,currentColor);cursor:crosshair;border-radius:var(--wj-color-picker-radius) var(--wj-color-picker-radius) 0 0}.wrapper{display:inline-table;width:calc(100% - 2rem);margin:1rem}.hue{border-radius:.25rem;background-image:linear-gradient(to right,rgb(255,0,0) 0%,rgb(255,255,0) 17%,rgb(0,255,0) 33%,rgb(0,255,255) 50%,rgb(0,0,255) 67%,rgb(255,0,255) 83%,rgb(255,0,0) 100%);width:100%;height:8px;margin:.75rem 0 1rem}.hue::part(slider){--wj-slider-color: transparent;--wj-slider-thumb-color: white;--wj-slider-thumb-shadow: 0 0 0 1px rgba(33, 33, 33, .14);--wj-slider-thumb-shadow-active: var(--wj-slider-thumb-shadow);--wj-slider-track-color: transparent}.alpha-wrapper{border-radius:.25rem;width:100%;height:8px;margin:.75rem 0 1rem;background-image:repeating-linear-gradient(45deg,#aaa 25%,transparent 25%,transparent 75%,#aaa 75%,#aaa),repeating-linear-gradient(45deg,#aaa 25%,#fff 25%,#fff 75%,#aaa 75%,#aaa);background-position:0 0,4px 4px;background-size:8px 8px}.alpha{color:var(--wj-color-picker-value);display:block;height:100%;width:100%;border-radius:inherit;background-image:linear-gradient(90deg,rgba(0,0,0,0),currentColor)}.alpha::part(slider){--wj-slider-color: transparent;--wj-slider-thumb-color: white;--wj-slider-thumb-shadow: 0 0 0 1px rgba(33, 33, 33, .14);--wj-slider-thumb-shadow-active: var(--wj-slider-thumb-shadow);--wj-slider-track-color: transparent;--wj-slider-track-height: 8px}.input-wrapper{display:grid;align-items:center;grid-template-columns:1fr auto}.color-preview{width:30px!important;height:30px!important;border-radius:50%;position:relative;margin-right:1rem}.color-preview:before,.color-preview:after{content:"";position:absolute;height:100%;width:100%;left:0;top:0;border:1px solid #fff;border-radius:50%}.color-preview:before{background-image:repeating-linear-gradient(45deg,#aaa 25%,transparent 25%,transparent 75%,#aaa 75%,#aaa),repeating-linear-gradient(45deg,#aaa 25%,#fff 25%,#fff 75%,#aaa 75%,#aaa);background-position:0 0,4px 4px;background-size:8px 8px}.color-preview:after{background:var(--wj-color-picker-value)}wj-input{--wj-input-border-radius: 1rem;--wj-input-margin-bottom: 0}wj-input::part(input){text-align:center}.swatches{margin-top:1rem;display:flex;justify-content:center;flex-wrap:wrap}.swatch{background:var(--wj-color-picker-swatch);position:relative;width:20px;height:20px;margin:0 4px 6px;padding:0;border:0;border-radius:50%;color:inherit;white-space:nowrap;overflow:hidden;cursor:pointer}.marker{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border:1px solid #fff;border-radius:50%;background-color:var(--wj-color-picker-value);cursor:pointer}
`;
class fe extends B {
  constructor() {
    super();
    v(this, "className", "ColorPicker");
    v(this, "moveMarker", (e) => {
      this.colorAreaDimension = this.dimension();
      const i = this.getPointerPosition(e);
      let a = i.pageX - this.colorAreaDimension.x, n = i.pageY - this.colorAreaDimension.y;
      this.setColor(this.setColorAtPosition(a, n), "marker"), this.setMarkerPosition(a, n);
    });
    /*
    * @desc nanstavenie pozicie markera podla farby
    * @param color
    * @returns {{x: number, y: number}}
    */
    v(this, "setMarkerPositionByColor", (e = "red") => {
      let i = s(e).toHsv();
      return {
        x: this.colorAreaDimension.width * i.s,
        y: this.colorAreaDimension.height - this.colorAreaDimension.height * i.v
      };
    });
    /*
    * Set css variable color value
    */
    v(this, "setColor", (e = null, i = "") => {
      let a = e;
      if (a === null && i === "" && (a = s(this.input.value), this.colorArea.style.setProperty("--wj-color-picker-area", a.toHexString())), i === "marker" && (this.alphaSlider.value = 100, this.alphaSlider.style.setProperty("--wj-color-picker-value", a.toHexString()), this.colorPreview.style.setProperty("--wj-color-picker-value", a.toHex8String()), this.picker.style.setProperty("--wj-color-picker-value", a.toHexString()), this.marker.style.setProperty("--wj-color-picker-value", a.toHex8String())), i === "hue") {
        let n = this.setColorAtPosition(this.markerPosition.x, this.markerPosition.y, this.alphaSlider.value);
        a = s(this.getHSVA(this.hueSlider.value, this.alphaSlider.value)), this.colorPreview.style.setProperty("--wj-color-picker-value", n.toHex8String()), this.marker.style.setProperty("--wj-color-picker-value", n.toHexString()), this.alphaSlider.style.setProperty("--wj-color-picker-value", a.toHexString()), this.colorArea.style.setProperty("--wj-color-picker-area", a.toHexString()), this.input.value = n.toHex8String();
      }
      if (i === "alpha") {
        a = s(this.input.value);
        let n = a.toHsv();
        n.a = this.alphaSlider.value / 100, a = s(n), this.colorPreview.style.setProperty("--wj-color-picker-value", a.toHex8String());
      }
      i === "swatch" && (this.colorPreview.style.setProperty("--wj-color-picker-value", a.toHex8String()), this.marker.style.setProperty("--wj-color-picker-value", a.toHexString()), this.alphaSlider.style.setProperty("--wj-color-picker-value", a.toHexString()), this.colorArea.style.setProperty("--wj-color-picker-area", a.toHex8String()), this.markerPosition = this.setMarkerPositionByColor(a.toHex8String()), this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y)), this.input.value = a.toHex8String(), this.anchor.style.setProperty("--wj-color-picker-value", a.toHexString()), this.value = {
        hex8: a.toHex8String(),
        hex: a.toHexString(),
        rgb: a.toRgbString(),
        rgba: a.toRgbString(),
        hsl: a.toHslString(),
        hsla: a.toHslString(),
        hsv: a.toHsvString(),
        hsva: a.toHsvString(),
        name: a.toName(),
        format: a.getFormat()
      }, G.dispatchCustomEvent(this, "wj-color-picker:select", this.value);
    });
    /*
    * Set hue sliders
     */
    v(this, "setHue", (e) => {
      this.hueSlider.value = e.detail.value, this.setColor(null, "hue");
    });
    /*
    * Set alpha sliders
     */
    v(this, "setAlpha", (e) => {
      this.alphaSlider.value = e.detail.value, this.setColor(null, "alpha");
    });
    /*
    * Get HSVA color order by hue and alpha
     */
    v(this, "getHSVA", (e, i) => `hsva(${e}, 100%, 100%, ${i / 100})`);
    this._markerPosition = {
      markerX: "0",
      markerY: "0"
    }, this._swatches = [
      "#264653",
      "#2a9d8f",
      "#e9c46a",
      "rgb(244,162,97)",
      "#e76f51",
      "#d62828",
      "navy",
      "#07b",
      "#0096c7",
      "#00b4d880",
      "rgba(0,119,182,0.8)"
    ];
  }
  set markerPosition(e) {
    this._markerPosition = e;
  }
  get markerPosition() {
    return this._markerPosition;
  }
  set swatches(e) {
    this.setAttribute("swatches", e.split(","));
  }
  get swatches() {
    return this._swatches;
  }
  static get cssStyleSheet() {
    return de;
  }
  static get observedAttributes() {
    return [];
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  draw(e, i, a) {
    let n = document.createDocumentFragment(), o = document.createElement("div");
    o.classList.add("native-color-picker");
    let h = document.createElement("div");
    h.setAttribute("slot", "anchor"), h.setAttribute("part", "anchor"), h.classList.add("anchor");
    let l = document.createElement("div");
    l.classList.add("picker");
    let d = document.createElement("div");
    d.classList.add("marker");
    let g = document.createElement("div");
    g.classList.add("color-area"), g.addEventListener("click", this.moveMarker);
    let c = document.createElement("div");
    c.classList.add("wrapper");
    let x = document.createElement("wj-slider");
    x.setAttribute("min", "0"), x.setAttribute("max", "360"), x.classList.add("hue"), x.addEventListener("wj:slider-move", this.setHue);
    let H = document.createElement("div");
    H.classList.add("alpha-wrapper");
    let w = document.createElement("wj-slider");
    w.setAttribute("min", "0"), w.setAttribute("max", "100"), w.setAttribute("value", "50"), w.classList.add("alpha"), w.addEventListener("wj:slider-move", this.setAlpha);
    let A = document.createElement("div");
    A.classList.add("input-wrapper");
    let P = document.createElement("div");
    P.classList.add("color-preview");
    let _ = document.createElement("wj-input");
    _.classList.add("input"), _.setAttribute("variant", "standard"), _.value = "#ff0000", g.appendChild(d), H.appendChild(w), A.appendChild(P), A.appendChild(_), c.appendChild(x), c.appendChild(H), c.appendChild(A), l.appendChild(g), l.appendChild(c), this.createSwatches(c);
    let k = document.createElement("wj-popup");
    return k.setAttribute("placement", this.placement || "bottom-start"), k.setAttribute("offset", this.offset), k.setAttribute("manual", ""), k.appendChild(h), k.appendChild(l), o.appendChild(k), n.appendChild(o), this.popup = k, this.anchor = h, this.picker = l, this.marker = d, this.colorArea = g, this.hueSlider = x, this.alphaSlider = w, this.colorPreview = P, this.input = _, n;
  }
  createSwatches(e) {
    if (this.swatches.length === 0)
      return;
    let i = document.createElement("div");
    i.classList.add("swatches"), this.swatches.forEach((a) => {
      let n = document.createElement("button");
      n.classList.add("swatch"), n.style.setProperty("--wj-color-picker-swatch", a), n.addEventListener("click", (o) => {
        this.setSliders(a), this.setColor(s(a), "swatch");
      }), i.appendChild(n);
    }), e.appendChild(i);
  }
  setSliders(e) {
    let i = s(e).toHsv();
    this.hueSlider.value = i.h, this.alphaSlider.value = i.a * 100;
  }
  afterDraw() {
    this.init = !1, this.addEventListener("wj-popup:show", (e) => {
      this.init || (window.setTimeout(() => {
        this.colorAreaDimension = this.dimension(), this.markerPosition = this.setMarkerPositionByColor(this.input.value), this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y), this.input.value != "" && (this.alphaSlider.value = 100), this.setColor();
      }, 0), this.init = !0);
    });
  }
  dimension() {
    return {
      width: this.colorArea.offsetWidth,
      height: this.colorArea.offsetHeight,
      x: this.colorArea.offsetLeft,
      y: this.colorArea.offsetTop
    };
  }
  disconnectedCallback() {
    this.init = !1;
  }
  getPointerPosition(e) {
    return {
      pageX: e.changedTouches ? e.changedTouches[0].pageX : e.clientX,
      pageY: e.changedTouches ? e.changedTouches[0].pageY : e.clientY
    };
  }
  /*
  * Nastavi poziu markera
  * @param x
  * @param y
  */
  setMarkerPosition(e, i) {
    e = e < 0 ? 0 : e > this.colorAreaDimension.width ? this.colorAreaDimension.width : e, i = i < 0 ? 0 : i > this.colorAreaDimension.height ? this.colorAreaDimension.height : i, this.markerPosition = {
      x: e,
      y: i
    }, this.marker.style.left = `${e}px`, this.marker.style.top = `${i}px`;
  }
  /*
  * nastavenie farby podla pozicie markera
  * @param x
  * @param y
  * @returns {tinycolor}
  */
  setColorAtPosition(e, i, a = 100) {
    const n = {
      h: this.hueSlider.value * 1,
      s: e / this.colorAreaDimension.width * 100,
      v: 100 - i / this.colorAreaDimension.height * 100,
      a: a / 100
    };
    return s(n);
  }
}
customElements.get("wj-color-picker") || window.customElements.define("wj-color-picker", fe);
export {
  fe as ColorPicker
};
