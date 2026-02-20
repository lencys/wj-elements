var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _init;
import WJElement from "./wje-element.js";
import { event } from "./event.js";
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
  color = color ? color : "";
  opts = opts || {};
  if (color instanceof tinycolor) {
    return color;
  }
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  },
  getLuminance: function getLuminance() {
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G, B;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) R = RsRGB / 12.92;
    else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G = GsRGB / 12.92;
    else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B = BsRGB / 12.92;
    else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn, args) {
    var color = fn.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn, args) {
    return fn.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(color, opts) {
  if (_typeof(color) == "object") {
    var newColor = {};
    for (var i in color) {
      if (color.hasOwnProperty(i)) {
        if (i === "a") {
          newColor[i] = color[i];
        } else {
          newColor[i] = convertToPercentage(color[i]);
        }
      }
    }
    color = newColor;
  }
  return tinycolor(color, opts);
};
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color == "string") {
    color = stringInputToObject(color);
  }
  if (_typeof(color) == "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    l
  };
}
function hslToRgb(h, s, l) {
  var r, g, b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  function hue2rgb(p2, q2, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
    if (t < 1 / 2) return q2;
    if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
    return p2;
  }
  if (s === 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;
  var d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max == min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    v
  };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function rgbaToArgbHex(r, g, b, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join("");
}
tinycolor.equals = function(color1, color2) {
  if (!color1 || !color2) return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color) {
  return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _spin(color, amount) {
  var hsl = tinycolor(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}
function _complement(color) {
  var hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color).toHsl();
  var result = [tinycolor(color)];
  var step = 360 / number;
  for (var i = 1; i < number; i++) {
    result.push(tinycolor({
      h: (hsl.h + i * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color) {
  var hsl = tinycolor(color).toHsl();
  var h = hsl.h;
  return [tinycolor(color), tinycolor({
    h: (h + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = tinycolor(color).toHsv();
  var h = hsv.h, s = hsv.s, v = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h,
      s,
      v
    }));
    v = (v + modification) % 1;
  }
  return ret;
}
tinycolor.mix = function(color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
    a: (rgb2.a - rgb1.a) * p + rgb1.a
  };
  return tinycolor(rgba);
};
tinycolor.readability = function(color1, color2) {
  var c1 = tinycolor(color1);
  var c2 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i = 0; i < colorList.length; i++) {
    readability = tinycolor.readability(baseColor, colorList[i]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level,
    size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};
var names = tinycolor.names = {
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
};
var hexNames = tinycolor.hexNames = flip(names);
function flip(o) {
  var flipped = {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      flipped[o[i]] = i;
    }
  }
  return flipped;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function bound01(n, max) {
  if (isOnePointZero(n)) n = "100%";
  var processPercent = isPercentage(n);
  n = Math.min(max, Math.max(0, parseFloat(n)));
  if (processPercent) {
    n = parseInt(n * max, 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  return n % max / parseFloat(max);
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function isOnePointZero(n) {
  return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") != -1;
}
function pad2(c) {
  return c.length == 1 ? "0" + c : "" + c;
}
function convertToPercentage(n) {
  if (n <= 1) {
    n = n * 100 + "%";
  }
  return n;
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
var matchers = function() {
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function isValidCSSUnit(color) {
  return !!matchers.CSS_UNIT.exec(color);
}
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level,
    size
  };
}
const styles = "/*\n[ Wj Color Picker ]\n*/\n\n.anchor {\n    width: var(--wje-color-picker-size);\n    height: var(--wje-color-picker-size);\n    background: var(--wje-color-picker-value);\n}\n\n.picker {\n    width: 200px;\n    /*min-height: 90px;*/\n    box-shadow:\n        0 0 5px rgba(0, 0, 0, 0.05),\n        0 5px 20px rgba(0, 0, 0, 0.1);\n    border-radius: var(--wje-color-picker-radius);\n    border-width: 1px;\n    border-style: var(--wje-border-style);\n    border-color: var(--wje-border-color);\n    background: var(--wje-background);\n}\n\n.color-area {\n    display: block;\n    position: relative;\n    height: 100px;\n    color: var(--wje-color-picker-area);\n    background-image: linear-gradient(rgba(0, 0, 0, 0), #000), linear-gradient(90deg, #fff, currentColor);\n    cursor: crosshair;\n    border-radius: var(--wje-color-picker-radius) var(--wje-color-picker-radius) 0 0;\n    border-bottom: 1px solid var(--wje-border-color);\n}\n\n.wrapper {\n    display: inline-table;\n    width: calc(100% - 2rem);\n    margin: 1rem;\n}\n\n.hue {\n    border-radius: 0.25rem;\n    background-image: linear-gradient(\n        to right,\n        rgb(255, 0, 0) 0%,\n        rgb(255, 255, 0) 17%,\n        rgb(0, 255, 0) 33%,\n        rgb(0, 255, 255) 50%,\n        rgb(0, 0, 255) 67%,\n        rgb(255, 0, 255) 83%,\n        rgb(255, 0, 0) 100%\n    );\n    width: 100%;\n    height: 8px;\n    margin: 0.75rem 0 1rem;\n}\n\n.hue::part(slider) {\n    --wje-slider-color: transparent;\n    --wje-slider-thumb-color: white;\n    --wje-slider-thumb-shadow: 0 0 0 1px var(--wje-border-color);\n    --wje-slider-thumb-shadow-active: var(--wje-slider-thumb-shadow);\n    --wje-slider-track-color: transparent;\n}\n\n.alpha-wrapper {\n    border-radius: 0.25rem;\n    width: 100%;\n    height: 8px;\n    margin: 0.75rem 0 1rem;\n    background-image:\n        repeating-linear-gradient(45deg, #aaa 25%, transparent 25%, transparent 75%, #aaa 75%, #aaa),\n        repeating-linear-gradient(45deg, #aaa 25%, #fff 25%, #fff 75%, #aaa 75%, #aaa);\n    background-position:\n        0 0,\n        4px 4px;\n    background-size: 8px 8px;\n}\n\n.alpha {\n    color: var(--wje-color-picker-value);\n    display: block;\n    height: 100%;\n    width: 100%;\n    border-radius: inherit;\n    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), currentColor);\n}\n\n.alpha::part(slider) {\n    --wje-slider-color: transparent;\n    --wje-slider-thumb-color: white;\n    --wje-slider-thumb-shadow: 0 0 0 1px var(--wje-border-color);\n    --wje-slider-thumb-shadow-active: var(--wje-slider-thumb-shadow);\n    --wje-slider-track-color: transparent;\n    --wje-slider-track-height: 8px;\n}\n\n.input-wrapper {\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr auto;\n}\n\n.color-preview {\n    width: 30px !important;\n    height: 30px !important;\n    border-radius: 50%;\n    position: relative;\n    margin-right: 1rem;\n    &:before,\n    &:after {\n        content: '';\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        left: 0;\n        top: 0;\n        border: 1px solid #fff;\n        border-radius: 50%;\n    }\n    &:before {\n        background-image:\n            repeating-linear-gradient(45deg, #aaa 25%, transparent 25%, transparent 75%, #aaa 75%, #aaa),\n            repeating-linear-gradient(45deg, #aaa 25%, #fff 25%, #fff 75%, #aaa 75%, #aaa);\n        background-position:\n            0 0,\n            4px 4px;\n        background-size: 8px 8px;\n    }\n    &:after {\n        background: var(--wje-color-picker-value, transparent);\n    }\n}\n\nwje-input {\n    --wje-input-border-radius: 1rem;\n    --wje-input-margin-bottom: 0;\n}\n\nwje-input::part(input) {\n    text-align: center;\n}\n\n.swatches {\n    margin-top: 1rem;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.swatch {\n    background: var(--wje-color-picker-swatch, transparent);\n    position: relative;\n    width: 20px;\n    height: 20px;\n    margin: 0 4px 6px 4px;\n    padding: 0;\n    border: 0;\n    border-radius: 50%;\n    color: inherit;\n    white-space: nowrap;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.marker {\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    margin: -6px 0 0 -6px;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    background-color: var(--wje-color-picker-value, transparent);\n    cursor: pointer;\n}\n";
class ColorPicker extends WJElement {
  /**
   * ColorPicker constructor method.
   */
  constructor() {
    super();
    __privateAdd(this, _init, false);
    __publicField(this, "className", "ColorPicker");
    /**
     * Updates the position of the marker based on the pointer event.
     * This function calculates the position of the marker relative to the color area
     * dimensions based on the given event. It adjusts the marker position and updates
     * the color associated with the new position. It is intended to handle pointer movement
     * events such as mouse or touch interactions.
     * @param {Event} e The event triggering the marker movement, typically a mouse or touch event.
     */
    __publicField(this, "moveMarker", (e) => {
      var _a;
      this.colorAreaDimension = this.dimension();
      const pointer = this.getPointerPosition(e);
      const x = pointer.x - this.colorAreaDimension.x;
      const y = pointer.y - this.colorAreaDimension.y;
      const markerPosition = this.clampMarkerPosition(x, y);
      const alpha = Number(((_a = this.alphaSlider) == null ? void 0 : _a.value) || 100);
      this.setColor(this.setColorAtPosition(markerPosition.x, markerPosition.y, alpha), "marker");
      this.setMarkerPosition(markerPosition.x, markerPosition.y);
    });
    /**
     * Sets the marker position by color.
     * @param color
     * @returns {{x: number, y: number}}
     */
    __publicField(this, "setMarkerPositionByColor", (color = "red") => {
      var _a, _b;
      let hsva = tinycolor(color).toHsv();
      const width = ((_a = this.colorAreaDimension) == null ? void 0 : _a.width) || 0;
      const height = ((_b = this.colorAreaDimension) == null ? void 0 : _b.height) || 0;
      const safeS = Number.isFinite(hsva.s) ? hsva.s : 0;
      const safeV = Number.isFinite(hsva.v) ? hsva.v : 0;
      return {
        x: width * safeS,
        y: height - height * safeV
      };
    });
    /**
     * Updates the color picker's current color and its associated UI elements.
     * @param {tinycolor.Instance|null} [color] The color value to set. If null, the current value from the input field is used.
     * @param {string} [type] The type of action determining which UI element to update. Possible values: "marker", "hue", "alpha", "swatch", "input".
     */
    __publicField(this, "setColor", (color = null, type = "") => {
      let currentColor = color;
      if (currentColor === null && type === "") {
        currentColor = tinycolor(this.input.value);
        this.colorArea.style.setProperty("--wje-color-picker-area", currentColor.toHexString());
      }
      if (type === "marker") {
        this.alphaSlider.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
        this.colorPreview.style.setProperty("--wje-color-picker-value", currentColor.toHex8String());
        this.picker.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
        this.marker.style.setProperty("--wje-color-picker-value", currentColor.toHex8String());
      }
      if (type === "hue") {
        let markerColorByPosition = this.setColorAtPosition(
          this.markerPosition.x,
          this.markerPosition.y,
          this.alphaSlider.value
        );
        const hueColor = this.getHueAreaColor(this.getHSVA(this.hueSlider.value, 100));
        this.colorPreview.style.setProperty("--wje-color-picker-value", markerColorByPosition.toHex8String());
        this.marker.style.setProperty("--wje-color-picker-value", markerColorByPosition.toHexString());
        this.alphaSlider.style.setProperty("--wje-color-picker-value", markerColorByPosition.toHexString());
        this.colorArea.style.setProperty("--wje-color-picker-area", hueColor);
        this.input.value = markerColorByPosition.toHex8String();
        currentColor = markerColorByPosition;
      }
      if (type === "alpha") {
        currentColor = tinycolor(this.input.value);
        let hsv = currentColor.toHsv();
        hsv.a = this.alphaSlider.value / 100;
        currentColor = tinycolor(hsv);
        this.colorPreview.style.setProperty("--wje-color-picker-value", currentColor.toHex8String());
      }
      if (type === "swatch" || type === "init" || type === "input") {
        this.colorPreview.style.setProperty("--wje-color-picker-value", currentColor.toHex8String());
        this.marker.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
        this.alphaSlider.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
        this.colorArea.style.setProperty("--wje-color-picker-area", this.getHueAreaColor(currentColor.toHex8String()));
        this.markerPosition = this.setMarkerPositionByColor(currentColor.toHex8String());
        this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y);
      }
      if (!(currentColor == null ? void 0 : currentColor.isValid())) return;
      if (!this.noColorArea || !this.noControls || !this.noSwatches) {
        if (type === "input" && this.inputEditable && typeof this._manualInputValue === "string") {
          this.input.value = this._manualInputValue;
        } else {
          this.input.value = currentColor.toHex8String();
        }
      }
      this.anchor.style.setProperty("--wje-color-picker-value", currentColor.toHexString());
      this.value = {
        hex8: currentColor.toHex8String(),
        hex: currentColor.toHexString(),
        rgb: currentColor.toRgbString(),
        rgba: currentColor.toRgbString(),
        hsl: currentColor.toHslString(),
        hsla: currentColor.toHslString(),
        hsv: currentColor.toHsvString(),
        hsva: currentColor.toHsvString(),
        name: currentColor.toName(),
        format: currentColor.getFormat()
      };
      this.color = currentColor.toHex8String();
      event.dispatchCustomEvent(this, "wje-color-picker:select", {
        value: this.value
      });
    });
    /**
     * Sets the hue.
     * @param {object} e The event object.
     */
    __publicField(this, "setHue", (e) => {
      this.hueSlider.value = e.detail.value;
      this.setColor(null, "hue");
    });
    /**
     * Sets the alpha.
     * @param {object} e The event object.
     */
    __publicField(this, "setAlpha", (e) => {
      this.alphaSlider.value = e.detail.value;
      this.setColor(null, "alpha");
    });
    /**
     * Converts hue and alpha values into an HSVA color string.
     * @param {number} hue The hue value, typically between 0 and 360.
     * @param {number} alpha The alpha value, typically between 0 and 100, representing the opacity percentage.
     * @returns {string} - The HSVA color string in the format `hsva(h, 100%, 100%, a)`.
     */
    __publicField(this, "getHSVA", (hue, alpha) => {
      return `hsva(${hue}, 100%, 100%, ${alpha / 100})`;
    });
    this._markerPosition = {
      markerX: "0",
      markerY: "0"
    };
    this._swatches = [
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
    this._manualInputValue = null;
  }
  /**
   * Sets the color attribute of the element.
   * @param {string} value The color value to be set. It should be a valid color string such as a named color, HEX, RGB, or HSL format.
   */
  set color(value) {
    this.setAttribute("color", value);
  }
  /**
   * Retrieves the color attribute of the element.
   * @returns {string | null} The current value of the 'color' attribute, or null if the attribute is not set.
   */
  get color() {
    return this.getAttribute("color") || "#000000";
  }
  /**
   * Setter for the marker position.
   * @param {object} value The new marker position.
   */
  set markerPosition(value) {
    this._markerPosition = value;
  }
  /**
   * Getter for the marker position.
   * @returns {object} The current marker position.
   */
  get markerPosition() {
    return this._markerPosition;
  }
  /**
   * Setter for the color swatches.
   * @param {string} value The new color swatches.
   */
  set swatches(value) {
    if (Array.isArray(value)) {
      this.setAttribute("swatches", value.join(","));
      return;
    }
    this.setAttribute("swatches", this.parseSwatches(value).join(","));
  }
  /**
   * Getter for the color swatches.
   * @returns {Array} The current color swatches.
   */
  get swatches() {
    this._swatches = this.getAttribute("swatches") ? this.parseSwatches(this.getAttribute("swatches")) : this._swatches;
    return this._swatches;
  }
  /**
   * Normalizes swatch colors from a string to an array.
   * Supports comma and semicolon separators.
   * @param {string} value
   * @returns {string[]}
   */
  parseSwatches(value = "") {
    if (typeof value !== "string") return [];
    return value.split(/[;,]/).map((item) => item.trim()).filter(Boolean);
  }
  /**
   * Sets or removes the 'no-color-area' attribute based on the provided value.
   * @param {boolean} value A boolean value indicating whether to set or remove the 'no-color-area' attribute. If true, the attribute is added; if false, the attribute is removed.
   */
  set noColorArea(value) {
    if (value) {
      this.setAttribute("no-color-area", "");
    } else {
      this.removeAttribute("no-color-area");
    }
  }
  /**
   * Getter method to check if the 'no-color-area' attribute is applied.
   * @returns {boolean} Returns true if the 'no-color-area' attribute is present; otherwise, false.
   */
  get noColorArea() {
    return this.hasAttribute("no-color-area");
  }
  /**
   * Sets or removes the "no-controls" attribute.
   * @param {boolean} value If true, sets the "no-controls" attribute. If false, removes the "no-controls" attribute.
   */
  set noControls(value) {
    if (value) {
      this.setAttribute("no-controls", "");
    } else {
      this.removeAttribute("no-controls");
    }
  }
  /**
   * Checks if the 'no-controls' attribute is present on the element.
   * @returns {boolean} Returns true if the 'no-controls' attribute is present; otherwise, false.
   */
  get noControls() {
    return this.hasAttribute("no-controls");
  }
  /**
   * Sets or removes the 'no-swatches' attribute on the element.
   * If the value is truthy, the 'no-swatches' attribute is added.
   * If the value is falsy, the 'no-swatches' attribute is removed.
   * @param {boolean} value Determines whether the 'no-swatches' attribute is set (true) or removed (false).
   */
  set noSwatches(value) {
    if (value) {
      this.setAttribute("no-swatches", "");
    } else {
      this.removeAttribute("no-swatches");
    }
  }
  /**
   * Checks if the 'no-swatches' attribute is present on the element.
   * @returns {boolean} Returns true if the 'no-swatches' attribute is present; otherwise, false.
   */
  get noSwatches() {
    return this.hasAttribute("no-swatches");
  }
  /**
   * Enables/disables manual typing in the input.
   * @param {boolean} value
   */
  set inputEditable(value) {
    if (value) {
      this.setAttribute("input-editable", "");
    } else {
      this.removeAttribute("input-editable");
    }
  }
  /**
   * Returns true when manual input typing is enabled.
   * @returns {boolean}
   */
  get inputEditable() {
    return this.hasAttribute("input-editable");
  }
  /**
   * Getter for the CSS stylesheet.
   * @returns {object} The styles object.
   * @static
   */
  static get cssStyleSheet() {
    return styles;
  }
  /**
   * Getter for the observed attributes.
   * @returns {Array} An empty array.
   * @static
   */
  static get observedAttributes() {
    return [];
  }
  /**
   * Sets up the attributes for the ColorPicker.
   */
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  /**
   * Creates and returns a document fragment containing the structure and components of a custom color picker.
   * The method initializes DOM elements such as divs, sliders, and inputs, with specific classes and attributes,
   * and attaches various event listeners to handle user interactions.
   * @returns {DocumentFragment} A DocumentFragment containing the constructed and fully initialized DOM elements for the color picker.
   */
  draw() {
    let fragment = document.createDocumentFragment();
    let native = document.createElement("div");
    native.classList.add("native-color-picker");
    let anchor = document.createElement("div");
    anchor.setAttribute("slot", "anchor");
    anchor.setAttribute("part", "anchor");
    anchor.classList.add("anchor");
    let picker = document.createElement("div");
    picker.classList.add("picker");
    let marker = document.createElement("div");
    marker.classList.add("marker");
    let colorArea = document.createElement("div");
    colorArea.classList.add("color-area");
    colorArea.addEventListener("click", this.moveMarker);
    colorArea.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const stopMoving = () => {
        window.removeEventListener("mousemove", this.moveMarker);
        window.removeEventListener("mouseup", stopMoving);
      };
      window.addEventListener("mousemove", this.moveMarker);
      window.addEventListener("mouseup", stopMoving);
      this.moveMarker(e);
    });
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    let hueSlider = document.createElement("wje-slider");
    hueSlider.setAttribute("min", "0");
    hueSlider.setAttribute("max", "360");
    hueSlider.classList.add("hue");
    hueSlider.addEventListener("wje-slider:move", this.setHue);
    let alphaWrapper = document.createElement("div");
    alphaWrapper.classList.add("alpha-wrapper");
    let alphaSlider = document.createElement("wje-slider");
    alphaSlider.setAttribute("min", "0");
    alphaSlider.setAttribute("max", "100");
    alphaSlider.setAttribute("value", "50");
    alphaSlider.classList.add("alpha");
    alphaSlider.addEventListener("wje-slider:move", this.setAlpha);
    let inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");
    let colorPreview = document.createElement("div");
    colorPreview.classList.add("color-preview");
    let input = document.createElement("wje-input");
    input.setAttribute("variant", "standard");
    input.setAttribute("maxlength", "9");
    if ((!this.noColorArea || !this.noControls || !this.noSwatches) && !this.inputEditable)
      input.setAttribute("readonly", "");
    input.classList.add("input");
    input.addEventListener("wje-input:input", () => {
      let rawValue = (input.value || "").trim();
      const hasHashPrefix = rawValue.startsWith("#");
      const maxLength = hasHashPrefix ? 9 : 8;
      if (rawValue.length > maxLength) {
        rawValue = rawValue.slice(0, maxLength);
        input.value = rawValue;
      }
      const hexCandidate = hasHashPrefix ? rawValue.slice(1) : rawValue;
      const isHex = /^[0-9a-fA-F]+$/.test(hexCandidate);
      if (isHex) {
        if (hexCandidate.length < 6) return;
        if (![6, 8].includes(hexCandidate.length)) return;
      }
      const parsedColor = tinycolor(isHex ? `#${hexCandidate}` : rawValue);
      if (!parsedColor.isValid()) return;
      this._manualInputValue = rawValue;
      this.setSliders(parsedColor.toHex8String());
      this.setColor(parsedColor, "input");
      this._manualInputValue = null;
    });
    colorArea.append(marker);
    alphaWrapper.append(alphaSlider);
    inputWrapper.append(colorPreview, input);
    if (!this.noControls)
      wrapper.append(hueSlider, alphaWrapper);
    wrapper.append(inputWrapper);
    if (!this.noColorArea)
      picker.append(colorArea);
    picker.append(wrapper);
    if (!this.noSwatches)
      this.createSwatches(wrapper);
    native.append(picker);
    fragment.append(native);
    this.anchor = anchor;
    this.picker = picker;
    this.marker = marker;
    this.colorArea = colorArea;
    this.hueSlider = hueSlider;
    this.alphaSlider = alphaSlider;
    this.colorPreview = colorPreview;
    this.input = input;
    return fragment;
  }
  /**
   * Executes after the component is drawn. Initializes some configurations if not already initialized,
   * including updating slider values, setting marker positions, and applying initial color settings.
   * This method ensures that all necessary visual elements and configurations are properly set up.
   * @returns {void} Does not return a value.
   */
  afterDraw() {
    __privateSet(this, _init, false);
    if (!__privateGet(this, _init)) {
      window.setTimeout(() => {
        if (this.color !== "") this.alphaSlider.value = 100;
        this.colorAreaDimension = this.dimension();
        this.markerPosition = this.setMarkerPositionByColor(this.color);
        this.setMarkerPosition(this.markerPosition.x, this.markerPosition.y);
        this.setSliders(this.color);
        this.setColor(tinycolor(this.color), "init");
      }, 0);
      __privateSet(this, _init, true);
    }
  }
  /**
   * Sets the hue.
   * @param node
   */
  createSwatches(node) {
    if (this.swatches.length === 0) return;
    let swatches = document.createElement("div");
    swatches.classList.add("swatches");
    this.swatches.forEach((swatch) => {
      if (!tinycolor(swatch).isValid()) return;
      let button = document.createElement("button");
      button.setAttribute("type", "button");
      button.classList.add("swatch");
      button.style.setProperty("--wje-color-picker-swatch", swatch);
      button.addEventListener("click", () => {
        this.setSliders(swatch);
        this.setColor(tinycolor(swatch), "swatch");
      });
      swatches.appendChild(button);
    });
    node.appendChild(swatches);
  }
  /**
   * Sets the sliders to the given color.
   * @param color
   */
  setSliders(color) {
    let hsva = tinycolor(color).toHsv();
    this.hueSlider.value = hsva.h;
    this.alphaSlider.value = hsva.a * 100;
  }
  /**
   * Retrieves the dimensions and position of the color area element relative to the viewport.
   * @returns {object} An object containing the following properties:
   * width: The width of the element in pixels.
   * height: The height of the element in pixels.
   * x: The x-coordinate of the element's left edge relative to the viewport.
   * y: The y-coordinate of the element's top edge relative to the viewport.
   */
  dimension() {
    const rect = this.colorArea.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      x: rect.left,
      // viewport-relative
      y: rect.top
      // viewport-relative
    };
  }
  /**
   * Method executed before disconnecting. Resets the initialization state to false.
   * @returns {void} Does not return a value.
   */
  beforeDisconnect() {
    __privateSet(this, _init, true);
  }
  /**
   * Gets the pointer position in client coordinates (viewport-relative).
   * @param e
   * @returns {{x: number, y: number}}
   */
  getPointerPosition(e) {
    const p = e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;
    return {
      x: p.clientX,
      y: p.clientY
    };
  }
  /**
   * Sets the position of the marker.
   * @param x
   * @param y
   */
  setMarkerPosition(x, y) {
    const markerPosition = this.clampMarkerPosition(x, y);
    this.markerPosition = {
      x: markerPosition.x,
      y: markerPosition.y
    };
    this.marker.style.left = `${markerPosition.x}px`;
    this.marker.style.top = `${markerPosition.y}px`;
  }
  /**
   * Clamps marker coordinates to the color area boundaries.
   * @param {number} x
   * @param {number} y
   * @returns {{x: number, y: number}}
   */
  clampMarkerPosition(x, y) {
    var _a, _b;
    const width = ((_a = this.colorAreaDimension) == null ? void 0 : _a.width) || 0;
    const height = ((_b = this.colorAreaDimension) == null ? void 0 : _b.height) || 0;
    const safeX = Number.isFinite(x) ? x : 0;
    const safeY = Number.isFinite(y) ? y : 0;
    return {
      x: Math.min(Math.max(safeX, 0), width),
      y: Math.min(Math.max(safeY, 0), height)
    };
  }
  /**
   * Sets the color at the given position.
   * @param x
   * @param y
   * @param alpha
   * @returns {*|tinycolor}
   */
  setColorAtPosition(x, y, alpha = 100) {
    var _a, _b, _c;
    const markerPosition = this.clampMarkerPosition(x, y);
    const width = ((_a = this.colorAreaDimension) == null ? void 0 : _a.width) || 0;
    const height = ((_b = this.colorAreaDimension) == null ? void 0 : _b.height) || 0;
    const safeAlpha = Number.isFinite(Number(alpha)) ? Number(alpha) : 100;
    if (width <= 0 || height <= 0) {
      const fallbackHsv = tinycolor(((_c = this.input) == null ? void 0 : _c.value) || this.color).toHsv();
      return tinycolor({
        h: this.hueSlider.value * 1,
        s: fallbackHsv.s,
        v: fallbackHsv.v,
        a: Math.max(0, Math.min(100, safeAlpha)) / 100
      });
    }
    const hsva = {
      h: this.hueSlider.value * 1,
      s: markerPosition.x / width * 100,
      v: 100 - markerPosition.y / height * 100,
      a: Math.max(0, Math.min(100, safeAlpha)) / 100
    };
    return tinycolor(hsva);
  }
  /**
   * Returns fully saturated and bright color for the current hue.
   * Used as base color for the SV area so neutral grays do not black out the palette.
   * @param {string} color
   * @returns {string}
   */
  getHueAreaColor(color = "#ff0000") {
    var _a;
    const hsv = tinycolor(color).toHsv();
    const hue = Number.isFinite(hsv.h) ? hsv.h : Number(((_a = this.hueSlider) == null ? void 0 : _a.value) || 0);
    return tinycolor({
      h: hue,
      s: 100,
      v: 100,
      a: 1
    }).toHexString();
  }
}
_init = new WeakMap();
WJElement.define("wje-color-picker", ColorPicker);
export {
  ColorPicker as default
};
//# sourceMappingURL=wje-color-picker.js.map
