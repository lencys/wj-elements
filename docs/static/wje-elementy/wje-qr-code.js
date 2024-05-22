var oe = Object.defineProperty;
var ce = (o, b, l) => b in o ? oe(o, b, { enumerable: !0, configurable: !0, writable: !0, value: l }) : o[b] = l;
var j = (o, b, l) => (ce(o, typeof b != "symbol" ? b + "" : b, l), l);
import le from "./wje-element.js";
const de = ".container{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;gap:.5rem;padding:.5rem}";
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function he(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var q = { exports: {} };
(function(o, b) {
  (function(l, O) {
    o.exports = O();
  })(ue, function() {
    var l = (
      /* istanbul ignore next */
      function() {
      }
    ), O = Object.prototype.hasOwnProperty, E = Array.prototype.slice;
    function B(t, e) {
      var i;
      return typeof Object.create == "function" ? i = Object.create(t) : (l.prototype = t, i = new l(), l.prototype = null), e && k(!0, i, e), i;
    }
    function d(t, e, i, r) {
      var a = this;
      return typeof t != "string" && (r = i, i = e, e = t, t = null), typeof e != "function" && (r = i, i = e, e = function() {
        return a.apply(this, arguments);
      }), k(!1, e, a, r), e.prototype = B(a.prototype, i), e.prototype.constructor = e, e.class_ = t || a.class_, e.super_ = a, e;
    }
    function k(t, e, i) {
      i = E.call(arguments, 2);
      for (var r, a, x = 0, n = i.length; x < n; x++) {
        a = i[x];
        for (r in a)
          (!t || O.call(a, r)) && (e[r] = a[r]);
      }
    }
    var w = d;
    function h() {
    }
    h.class_ = "Nevis", h.super_ = Object, h.extend = w;
    var z = h, u = z, P = u.extend(function(t, e, i) {
      this.qrious = t, this.element = e, this.element.qrious = t, this.enabled = !!i;
    }, {
      /**
       * Draws the specified QR code <code>frame</code> on the underlying element.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @param {Frame} frame - the {@link Frame} to be drawn
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      draw: function(t) {
      },
      /**
       * Returns the element onto which this {@link Renderer} is rendering the QR code.
       *
       * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
       * before the element is returned.
       *
       * @return {*} The element.
       * @public
       * @memberof Renderer#
       */
      getElement: function() {
        return this.enabled || (this.enabled = !0, this.render()), this.element;
      },
      /**
       * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
       * <code>frame</code> provided.
       *
       * Any configured padding will be excluded from the returned size.
       *
       * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
       * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
       * displayed instead of just a blank space filled by the background color.
       *
       * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
       * @return {number} The pixel size for each module in the QR code which will be no less than one.
       * @protected
       * @memberof Renderer#
       */
      getModuleSize: function(t) {
        var e = this.qrious, i = e.padding || 0, r = Math.floor((e.size - i * 2) / t.width);
        return Math.max(1, r);
      },
      /**
       * Calculates the offset/padding (in pixel units) to be inserted before the QR code based on the <code>frame</code>
       * provided.
       *
       * The returned value will be zero if there is no available offset or if the size of the QR code does not fit its
       * contents. It will never be a negative value. This is done so that the inevitable clipping appears more naturally
       * and it is not clipped from all directions.
       *
       * @param {Frame} frame - the {@link Frame} from which the offset is to be derived
       * @return {number} The pixel offset for the QR code which will be no less than zero.
       * @protected
       * @memberof Renderer#
       */
      getOffset: function(t) {
        var e = this.qrious, i = e.padding;
        if (i != null)
          return i;
        var r = this.getModuleSize(t), a = Math.floor((e.size - r * t.width) / 2);
        return Math.max(0, a);
      },
      /**
       * Renders a QR code on the underlying element based on the <code>frame</code> provided.
       *
       * @param {Frame} frame - the {@link Frame} to be rendered
       * @return {void}
       * @public
       * @memberof Renderer#
       */
      render: function(t) {
        this.enabled && (this.resize(), this.reset(), this.draw(t));
      },
      /**
       * Resets the underlying element, effectively clearing any previously rendered QR code.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      reset: function() {
      },
      /**
       * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
       *
       * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
       *
       * @return {void}
       * @protected
       * @abstract
       * @memberof Renderer#
       */
      resize: function() {
      }
    }), C = P, I = C.extend({
      /**
       * @override
       */
      draw: function(t) {
        var e, i, r = this.qrious, a = this.getModuleSize(t), x = this.getOffset(t), n = this.element.getContext("2d");
        for (n.fillStyle = r.foreground, n.globalAlpha = r.foregroundAlpha, e = 0; e < t.width; e++)
          for (i = 0; i < t.width; i++)
            t.buffer[i * t.width + e] && n.fillRect(a * e + x, a * i + x, a, a);
      },
      /**
       * @override
       */
      reset: function() {
        var t = this.qrious, e = this.element.getContext("2d"), i = t.size;
        e.lineWidth = 1, e.clearRect(0, 0, i, i), e.fillStyle = t.background, e.globalAlpha = t.backgroundAlpha, e.fillRect(0, 0, i, i);
      },
      /**
       * @override
       */
      resize: function() {
        var t = this.element;
        t.width = t.height = this.qrious.size;
      }
    }), D = I, V = u.extend(null, {
      /**
       * The alignment pattern block.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Alignment
       */
      BLOCK: [
        0,
        11,
        15,
        19,
        23,
        27,
        31,
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        20,
        22,
        24,
        24,
        26,
        28,
        28,
        22,
        24,
        24,
        26,
        26,
        28,
        28,
        24,
        24,
        26,
        26,
        26,
        28,
        28,
        24,
        26,
        26,
        26,
        28,
        28
      ]
    }), F = V, G = u.extend(null, {
      /**
       * The error correction blocks.
       *
       * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
       * the ECC width.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof ErrorCorrection
       */
      BLOCKS: [
        1,
        0,
        19,
        7,
        1,
        0,
        16,
        10,
        1,
        0,
        13,
        13,
        1,
        0,
        9,
        17,
        1,
        0,
        34,
        10,
        1,
        0,
        28,
        16,
        1,
        0,
        22,
        22,
        1,
        0,
        16,
        28,
        1,
        0,
        55,
        15,
        1,
        0,
        44,
        26,
        2,
        0,
        17,
        18,
        2,
        0,
        13,
        22,
        1,
        0,
        80,
        20,
        2,
        0,
        32,
        18,
        2,
        0,
        24,
        26,
        4,
        0,
        9,
        16,
        1,
        0,
        108,
        26,
        2,
        0,
        43,
        24,
        2,
        2,
        15,
        18,
        2,
        2,
        11,
        22,
        2,
        0,
        68,
        18,
        4,
        0,
        27,
        16,
        4,
        0,
        19,
        24,
        4,
        0,
        15,
        28,
        2,
        0,
        78,
        20,
        4,
        0,
        31,
        18,
        2,
        4,
        14,
        18,
        4,
        1,
        13,
        26,
        2,
        0,
        97,
        24,
        2,
        2,
        38,
        22,
        4,
        2,
        18,
        22,
        4,
        2,
        14,
        26,
        2,
        0,
        116,
        30,
        3,
        2,
        36,
        22,
        4,
        4,
        16,
        20,
        4,
        4,
        12,
        24,
        2,
        2,
        68,
        18,
        4,
        1,
        43,
        26,
        6,
        2,
        19,
        24,
        6,
        2,
        15,
        28,
        4,
        0,
        81,
        20,
        1,
        4,
        50,
        30,
        4,
        4,
        22,
        28,
        3,
        8,
        12,
        24,
        2,
        2,
        92,
        24,
        6,
        2,
        36,
        22,
        4,
        6,
        20,
        26,
        7,
        4,
        14,
        28,
        4,
        0,
        107,
        26,
        8,
        1,
        37,
        22,
        8,
        4,
        20,
        24,
        12,
        4,
        11,
        22,
        3,
        1,
        115,
        30,
        4,
        5,
        40,
        24,
        11,
        5,
        16,
        20,
        11,
        5,
        12,
        24,
        5,
        1,
        87,
        22,
        5,
        5,
        41,
        24,
        5,
        7,
        24,
        30,
        11,
        7,
        12,
        24,
        5,
        1,
        98,
        24,
        7,
        3,
        45,
        28,
        15,
        2,
        19,
        24,
        3,
        13,
        15,
        30,
        1,
        5,
        107,
        28,
        10,
        1,
        46,
        28,
        1,
        15,
        22,
        28,
        2,
        17,
        14,
        28,
        5,
        1,
        120,
        30,
        9,
        4,
        43,
        26,
        17,
        1,
        22,
        28,
        2,
        19,
        14,
        28,
        3,
        4,
        113,
        28,
        3,
        11,
        44,
        26,
        17,
        4,
        21,
        26,
        9,
        16,
        13,
        26,
        3,
        5,
        107,
        28,
        3,
        13,
        41,
        26,
        15,
        5,
        24,
        30,
        15,
        10,
        15,
        28,
        4,
        4,
        116,
        28,
        17,
        0,
        42,
        26,
        17,
        6,
        22,
        28,
        19,
        6,
        16,
        30,
        2,
        7,
        111,
        28,
        17,
        0,
        46,
        28,
        7,
        16,
        24,
        30,
        34,
        0,
        13,
        24,
        4,
        5,
        121,
        30,
        4,
        14,
        47,
        28,
        11,
        14,
        24,
        30,
        16,
        14,
        15,
        30,
        6,
        4,
        117,
        30,
        6,
        14,
        45,
        28,
        11,
        16,
        24,
        30,
        30,
        2,
        16,
        30,
        8,
        4,
        106,
        26,
        8,
        13,
        47,
        28,
        7,
        22,
        24,
        30,
        22,
        13,
        15,
        30,
        10,
        2,
        114,
        28,
        19,
        4,
        46,
        28,
        28,
        6,
        22,
        28,
        33,
        4,
        16,
        30,
        8,
        4,
        122,
        30,
        22,
        3,
        45,
        28,
        8,
        26,
        23,
        30,
        12,
        28,
        15,
        30,
        3,
        10,
        117,
        30,
        3,
        23,
        45,
        28,
        4,
        31,
        24,
        30,
        11,
        31,
        15,
        30,
        7,
        7,
        116,
        30,
        21,
        7,
        45,
        28,
        1,
        37,
        23,
        30,
        19,
        26,
        15,
        30,
        5,
        10,
        115,
        30,
        19,
        10,
        47,
        28,
        15,
        25,
        24,
        30,
        23,
        25,
        15,
        30,
        13,
        3,
        115,
        30,
        2,
        29,
        46,
        28,
        42,
        1,
        24,
        30,
        23,
        28,
        15,
        30,
        17,
        0,
        115,
        30,
        10,
        23,
        46,
        28,
        10,
        35,
        24,
        30,
        19,
        35,
        15,
        30,
        17,
        1,
        115,
        30,
        14,
        21,
        46,
        28,
        29,
        19,
        24,
        30,
        11,
        46,
        15,
        30,
        13,
        6,
        115,
        30,
        14,
        23,
        46,
        28,
        44,
        7,
        24,
        30,
        59,
        1,
        16,
        30,
        12,
        7,
        121,
        30,
        12,
        26,
        47,
        28,
        39,
        14,
        24,
        30,
        22,
        41,
        15,
        30,
        6,
        14,
        121,
        30,
        6,
        34,
        47,
        28,
        46,
        10,
        24,
        30,
        2,
        64,
        15,
        30,
        17,
        4,
        122,
        30,
        29,
        14,
        46,
        28,
        49,
        10,
        24,
        30,
        24,
        46,
        15,
        30,
        4,
        18,
        122,
        30,
        13,
        32,
        46,
        28,
        48,
        14,
        24,
        30,
        42,
        32,
        15,
        30,
        20,
        4,
        117,
        30,
        40,
        7,
        47,
        28,
        43,
        22,
        24,
        30,
        10,
        67,
        15,
        30,
        19,
        6,
        118,
        30,
        18,
        31,
        47,
        28,
        34,
        34,
        24,
        30,
        20,
        61,
        15,
        30
      ],
      /**
       * The final format bits with mask (level << 3 | mask).
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof ErrorCorrection
       */
      FINAL_FORMAT: [
        // L
        30660,
        29427,
        32170,
        30877,
        26159,
        25368,
        27713,
        26998,
        // M
        21522,
        20773,
        24188,
        23371,
        17913,
        16590,
        20375,
        19104,
        // Q
        13663,
        12392,
        16177,
        14854,
        9396,
        8579,
        11994,
        11245,
        // H
        5769,
        5054,
        7399,
        6608,
        1890,
        597,
        3340,
        2107
      ],
      /**
       * A map of human-readable ECC levels.
       *
       * @public
       * @static
       * @type {Object.<string, number>}
       * @memberof ErrorCorrection
       */
      LEVELS: {
        L: 1,
        M: 2,
        Q: 3,
        H: 4
      }
    }), M = G, K = u.extend(null, {
      /**
       * The Galois field exponent table.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Galois
       */
      EXPONENT: [
        1,
        2,
        4,
        8,
        16,
        32,
        64,
        128,
        29,
        58,
        116,
        232,
        205,
        135,
        19,
        38,
        76,
        152,
        45,
        90,
        180,
        117,
        234,
        201,
        143,
        3,
        6,
        12,
        24,
        48,
        96,
        192,
        157,
        39,
        78,
        156,
        37,
        74,
        148,
        53,
        106,
        212,
        181,
        119,
        238,
        193,
        159,
        35,
        70,
        140,
        5,
        10,
        20,
        40,
        80,
        160,
        93,
        186,
        105,
        210,
        185,
        111,
        222,
        161,
        95,
        190,
        97,
        194,
        153,
        47,
        94,
        188,
        101,
        202,
        137,
        15,
        30,
        60,
        120,
        240,
        253,
        231,
        211,
        187,
        107,
        214,
        177,
        127,
        254,
        225,
        223,
        163,
        91,
        182,
        113,
        226,
        217,
        175,
        67,
        134,
        17,
        34,
        68,
        136,
        13,
        26,
        52,
        104,
        208,
        189,
        103,
        206,
        129,
        31,
        62,
        124,
        248,
        237,
        199,
        147,
        59,
        118,
        236,
        197,
        151,
        51,
        102,
        204,
        133,
        23,
        46,
        92,
        184,
        109,
        218,
        169,
        79,
        158,
        33,
        66,
        132,
        21,
        42,
        84,
        168,
        77,
        154,
        41,
        82,
        164,
        85,
        170,
        73,
        146,
        57,
        114,
        228,
        213,
        183,
        115,
        230,
        209,
        191,
        99,
        198,
        145,
        63,
        126,
        252,
        229,
        215,
        179,
        123,
        246,
        241,
        255,
        227,
        219,
        171,
        75,
        150,
        49,
        98,
        196,
        149,
        55,
        110,
        220,
        165,
        87,
        174,
        65,
        130,
        25,
        50,
        100,
        200,
        141,
        7,
        14,
        28,
        56,
        112,
        224,
        221,
        167,
        83,
        166,
        81,
        162,
        89,
        178,
        121,
        242,
        249,
        239,
        195,
        155,
        43,
        86,
        172,
        69,
        138,
        9,
        18,
        36,
        72,
        144,
        61,
        122,
        244,
        245,
        247,
        243,
        251,
        235,
        203,
        139,
        11,
        22,
        44,
        88,
        176,
        125,
        250,
        233,
        207,
        131,
        27,
        54,
        108,
        216,
        173,
        71,
        142,
        0
      ],
      /**
       * The Galois field log table.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Galois
       */
      LOG: [
        255,
        0,
        1,
        25,
        2,
        50,
        26,
        198,
        3,
        223,
        51,
        238,
        27,
        104,
        199,
        75,
        4,
        100,
        224,
        14,
        52,
        141,
        239,
        129,
        28,
        193,
        105,
        248,
        200,
        8,
        76,
        113,
        5,
        138,
        101,
        47,
        225,
        36,
        15,
        33,
        53,
        147,
        142,
        218,
        240,
        18,
        130,
        69,
        29,
        181,
        194,
        125,
        106,
        39,
        249,
        185,
        201,
        154,
        9,
        120,
        77,
        228,
        114,
        166,
        6,
        191,
        139,
        98,
        102,
        221,
        48,
        253,
        226,
        152,
        37,
        179,
        16,
        145,
        34,
        136,
        54,
        208,
        148,
        206,
        143,
        150,
        219,
        189,
        241,
        210,
        19,
        92,
        131,
        56,
        70,
        64,
        30,
        66,
        182,
        163,
        195,
        72,
        126,
        110,
        107,
        58,
        40,
        84,
        250,
        133,
        186,
        61,
        202,
        94,
        155,
        159,
        10,
        21,
        121,
        43,
        78,
        212,
        229,
        172,
        115,
        243,
        167,
        87,
        7,
        112,
        192,
        247,
        140,
        128,
        99,
        13,
        103,
        74,
        222,
        237,
        49,
        197,
        254,
        24,
        227,
        165,
        153,
        119,
        38,
        184,
        180,
        124,
        17,
        68,
        146,
        217,
        35,
        32,
        137,
        46,
        55,
        63,
        209,
        91,
        149,
        188,
        207,
        205,
        144,
        135,
        151,
        178,
        220,
        252,
        190,
        97,
        242,
        86,
        211,
        171,
        20,
        42,
        93,
        158,
        132,
        60,
        57,
        83,
        71,
        109,
        65,
        162,
        31,
        45,
        67,
        216,
        183,
        123,
        164,
        118,
        196,
        23,
        73,
        236,
        127,
        12,
        111,
        246,
        108,
        161,
        59,
        82,
        41,
        157,
        85,
        170,
        251,
        96,
        134,
        177,
        187,
        204,
        62,
        90,
        203,
        89,
        95,
        176,
        156,
        169,
        160,
        81,
        11,
        245,
        22,
        235,
        122,
        117,
        44,
        215,
        79,
        174,
        213,
        233,
        230,
        231,
        173,
        232,
        116,
        214,
        244,
        234,
        168,
        80,
        88,
        175
      ]
    }), p = K, U = u.extend(null, {
      /**
       * The version pattern block.
       *
       * @public
       * @static
       * @type {number[]}
       * @memberof Version
       */
      BLOCK: [
        3220,
        1468,
        2713,
        1235,
        3062,
        1890,
        2119,
        1549,
        2344,
        2936,
        1117,
        2583,
        1330,
        2470,
        1667,
        2249,
        2028,
        3780,
        481,
        4011,
        142,
        3098,
        831,
        3445,
        592,
        2517,
        1776,
        2234,
        1951,
        2827,
        1070,
        2660,
        1345,
        3177
      ]
    }), Q = U, c = u.extend(function(t) {
      var e, i, r, a, x, n = t.value.length;
      for (this._badness = [], this._level = M.LEVELS[t.level], this._polynomial = [], this._value = t.value, this._version = 0, this._stringBuffer = []; this._version < 40 && (this._version++, r = (this._level - 1) * 4 + (this._version - 1) * 16, a = M.BLOCKS[r++], x = M.BLOCKS[r++], e = M.BLOCKS[r++], i = M.BLOCKS[r], r = e * (a + x) + x - 3 + (this._version <= 9), !(n <= r)); )
        ;
      this._dataBlock = e, this._eccBlock = i, this._neccBlock1 = a, this._neccBlock2 = x;
      var s = this.width = 17 + 4 * this._version;
      this.buffer = c._createArray(s * s), this._ecc = c._createArray(e + (e + i) * (a + x) + x), this._mask = c._createArray((s * (s + 1) + 1) / 2), this._insertFinders(), this._insertAlignments(), this.buffer[8 + s * (s - 8)] = 1, this._insertTimingGap(), this._reverseMask(), this._insertTimingRowAndColumn(), this._insertVersion(), this._syncMask(), this._convertBitStream(n), this._calculatePolynomial(), this._appendEccToData(), this._interleaveBlocks(), this._pack(), this._finish();
    }, {
      _addAlignment: function(t, e) {
        var i, r = this.buffer, a = this.width;
        for (r[t + a * e] = 1, i = -2; i < 2; i++)
          r[t + i + a * (e - 2)] = 1, r[t - 2 + a * (e + i + 1)] = 1, r[t + 2 + a * (e + i)] = 1, r[t + i + 1 + a * (e + 2)] = 1;
        for (i = 0; i < 2; i++)
          this._setMask(t - 1, e + i), this._setMask(t + 1, e - i), this._setMask(t - i, e - 1), this._setMask(t + i, e + 1);
      },
      _appendData: function(t, e, i, r) {
        var a, x, n, s = this._polynomial, f = this._stringBuffer;
        for (x = 0; x < r; x++)
          f[i + x] = 0;
        for (x = 0; x < e; x++) {
          if (a = p.LOG[f[t + x] ^ f[i]], a !== 255)
            for (n = 1; n < r; n++)
              f[i + n - 1] = f[i + n] ^ p.EXPONENT[c._modN(a + s[r - n])];
          else
            for (n = i; n < i + r; n++)
              f[n] = f[n + 1];
          f[i + r - 1] = a === 255 ? 0 : p.EXPONENT[c._modN(a + s[0])];
        }
      },
      _appendEccToData: function() {
        var t, e = 0, i = this._dataBlock, r = this._calculateMaxLength(), a = this._eccBlock;
        for (t = 0; t < this._neccBlock1; t++)
          this._appendData(e, i, r, a), e += i, r += a;
        for (t = 0; t < this._neccBlock2; t++)
          this._appendData(e, i + 1, r, a), e += i + 1, r += a;
      },
      _applyMask: function(t) {
        var e, i, r, a, x = this.buffer, n = this.width;
        switch (t) {
          case 0:
            for (a = 0; a < n; a++)
              for (r = 0; r < n; r++)
                !(r + a & 1) && !this._isMasked(r, a) && (x[r + a * n] ^= 1);
            break;
          case 1:
            for (a = 0; a < n; a++)
              for (r = 0; r < n; r++)
                !(a & 1) && !this._isMasked(r, a) && (x[r + a * n] ^= 1);
            break;
          case 2:
            for (a = 0; a < n; a++)
              for (e = 0, r = 0; r < n; r++, e++)
                e === 3 && (e = 0), !e && !this._isMasked(r, a) && (x[r + a * n] ^= 1);
            break;
          case 3:
            for (i = 0, a = 0; a < n; a++, i++)
              for (i === 3 && (i = 0), e = i, r = 0; r < n; r++, e++)
                e === 3 && (e = 0), !e && !this._isMasked(r, a) && (x[r + a * n] ^= 1);
            break;
          case 4:
            for (a = 0; a < n; a++)
              for (e = 0, i = a >> 1 & 1, r = 0; r < n; r++, e++)
                e === 3 && (e = 0, i = !i), !i && !this._isMasked(r, a) && (x[r + a * n] ^= 1);
            break;
          case 5:
            for (i = 0, a = 0; a < n; a++, i++)
              for (i === 3 && (i = 0), e = 0, r = 0; r < n; r++, e++)
                e === 3 && (e = 0), !((r & a & 1) + !(!e | !i)) && !this._isMasked(r, a) && (x[r + a * n] ^= 1);
            break;
          case 6:
            for (i = 0, a = 0; a < n; a++, i++)
              for (i === 3 && (i = 0), e = 0, r = 0; r < n; r++, e++)
                e === 3 && (e = 0), !((r & a & 1) + (e && e === i) & 1) && !this._isMasked(r, a) && (x[r + a * n] ^= 1);
            break;
          case 7:
            for (i = 0, a = 0; a < n; a++, i++)
              for (i === 3 && (i = 0), e = 0, r = 0; r < n; r++, e++)
                e === 3 && (e = 0), !((e && e === i) + (r + a & 1) & 1) && !this._isMasked(r, a) && (x[r + a * n] ^= 1);
            break;
        }
      },
      _calculateMaxLength: function() {
        return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
      },
      _calculatePolynomial: function() {
        var t, e, i = this._eccBlock, r = this._polynomial;
        for (r[0] = 1, t = 0; t < i; t++) {
          for (r[t + 1] = 1, e = t; e > 0; e--)
            r[e] = r[e] ? r[e - 1] ^ p.EXPONENT[c._modN(p.LOG[r[e]] + t)] : r[e - 1];
          r[0] = p.EXPONENT[c._modN(p.LOG[r[0]] + t)];
        }
        for (t = 0; t <= i; t++)
          r[t] = p.LOG[r[t]];
      },
      _checkBadness: function() {
        var t, e, i, r, a, x = 0, n = this._badness, s = this.buffer, f = this.width;
        for (a = 0; a < f - 1; a++)
          for (r = 0; r < f - 1; r++)
            (s[r + f * a] && s[r + 1 + f * a] && s[r + f * (a + 1)] && s[r + 1 + f * (a + 1)] || // All background colour.
            !(s[r + f * a] || s[r + 1 + f * a] || s[r + f * (a + 1)] || s[r + 1 + f * (a + 1)])) && (x += c.N2);
        var _ = 0;
        for (a = 0; a < f; a++) {
          for (i = 0, n[0] = 0, t = 0, r = 0; r < f; r++)
            e = s[r + f * a], t === e ? n[i]++ : n[++i] = 1, t = e, _ += t ? 1 : -1;
          x += this._getBadness(i);
        }
        _ < 0 && (_ = -_);
        var R = 0, y = _;
        for (y += y << 2, y <<= 1; y > f * f; )
          y -= f * f, R++;
        for (x += R * c.N4, r = 0; r < f; r++) {
          for (i = 0, n[0] = 0, t = 0, a = 0; a < f; a++)
            e = s[r + f * a], t === e ? n[i]++ : n[++i] = 1, t = e;
          x += this._getBadness(i);
        }
        return x;
      },
      _convertBitStream: function(t) {
        var e, i, r = this._ecc, a = this._version;
        for (i = 0; i < t; i++)
          r[i] = this._value.charCodeAt(i);
        var x = this._stringBuffer = r.slice(), n = this._calculateMaxLength();
        t >= n - 2 && (t = n - 2, a > 9 && t--);
        var s = t;
        if (a > 9) {
          for (x[s + 2] = 0, x[s + 3] = 0; s--; )
            e = x[s], x[s + 3] |= 255 & e << 4, x[s + 2] = e >> 4;
          x[2] |= 255 & t << 4, x[1] = t >> 4, x[0] = 64 | t >> 12;
        } else {
          for (x[s + 1] = 0, x[s + 2] = 0; s--; )
            e = x[s], x[s + 2] |= 255 & e << 4, x[s + 1] = e >> 4;
          x[1] |= 255 & t << 4, x[0] = 64 | t >> 4;
        }
        for (s = t + 3 - (a < 10); s < n; )
          x[s++] = 236, x[s++] = 17;
      },
      _getBadness: function(t) {
        var e, i = 0, r = this._badness;
        for (e = 0; e <= t; e++)
          r[e] >= 5 && (i += c.N1 + r[e] - 5);
        for (e = 3; e < t - 1; e += 2)
          r[e - 2] === r[e + 2] && r[e + 2] === r[e - 1] && r[e - 1] === r[e + 1] && r[e - 1] * 3 === r[e] && // Background around the foreground pattern? Not part of the specs.
          (r[e - 3] === 0 || e + 3 > t || r[e - 3] * 3 >= r[e] * 4 || r[e + 3] * 3 >= r[e] * 4) && (i += c.N3);
        return i;
      },
      _finish: function() {
        this._stringBuffer = this.buffer.slice();
        var t, e, i = 0, r = 3e4;
        for (e = 0; e < 8 && (this._applyMask(e), t = this._checkBadness(), t < r && (r = t, i = e), i !== 7); e++)
          this.buffer = this._stringBuffer.slice();
        i !== e && this._applyMask(i), r = M.FINAL_FORMAT[i + (this._level - 1 << 3)];
        var a = this.buffer, x = this.width;
        for (e = 0; e < 8; e++, r >>= 1)
          r & 1 && (a[x - 1 - e + x * 8] = 1, e < 6 ? a[8 + x * e] = 1 : a[8 + x * (e + 1)] = 1);
        for (e = 0; e < 7; e++, r >>= 1)
          r & 1 && (a[8 + x * (x - 7 + e)] = 1, e ? a[6 - e + x * 8] = 1 : a[7 + x * 8] = 1);
      },
      _interleaveBlocks: function() {
        var t, e, i = this._dataBlock, r = this._ecc, a = this._eccBlock, x = 0, n = this._calculateMaxLength(), s = this._neccBlock1, f = this._neccBlock2, _ = this._stringBuffer;
        for (t = 0; t < i; t++) {
          for (e = 0; e < s; e++)
            r[x++] = _[t + e * i];
          for (e = 0; e < f; e++)
            r[x++] = _[s * i + t + e * (i + 1)];
        }
        for (e = 0; e < f; e++)
          r[x++] = _[s * i + t + e * (i + 1)];
        for (t = 0; t < a; t++)
          for (e = 0; e < s + f; e++)
            r[x++] = _[n + t + e * a];
        this._stringBuffer = r;
      },
      _insertAlignments: function() {
        var t, e, i, r = this._version, a = this.width;
        if (r > 1)
          for (t = F.BLOCK[r], i = a - 7; ; ) {
            for (e = a - 7; e > t - 3 && (this._addAlignment(e, i), !(e < t)); )
              e -= t;
            if (i <= t + 9)
              break;
            i -= t, this._addAlignment(6, i), this._addAlignment(i, 6);
          }
      },
      _insertFinders: function() {
        var t, e, i, r, a = this.buffer, x = this.width;
        for (t = 0; t < 3; t++) {
          for (e = 0, r = 0, t === 1 && (e = x - 7), t === 2 && (r = x - 7), a[r + 3 + x * (e + 3)] = 1, i = 0; i < 6; i++)
            a[r + i + x * e] = 1, a[r + x * (e + i + 1)] = 1, a[r + 6 + x * (e + i)] = 1, a[r + i + 1 + x * (e + 6)] = 1;
          for (i = 1; i < 5; i++)
            this._setMask(r + i, e + 1), this._setMask(r + 1, e + i + 1), this._setMask(r + 5, e + i), this._setMask(r + i + 1, e + 5);
          for (i = 2; i < 4; i++)
            a[r + i + x * (e + 2)] = 1, a[r + 2 + x * (e + i + 1)] = 1, a[r + 4 + x * (e + i)] = 1, a[r + i + 1 + x * (e + 4)] = 1;
        }
      },
      _insertTimingGap: function() {
        var t, e, i = this.width;
        for (e = 0; e < 7; e++)
          this._setMask(7, e), this._setMask(i - 8, e), this._setMask(7, e + i - 7);
        for (t = 0; t < 8; t++)
          this._setMask(t, 7), this._setMask(t + i - 8, 7), this._setMask(t, i - 8);
      },
      _insertTimingRowAndColumn: function() {
        var t, e = this.buffer, i = this.width;
        for (t = 0; t < i - 14; t++)
          t & 1 ? (this._setMask(8 + t, 6), this._setMask(6, 8 + t)) : (e[8 + t + i * 6] = 1, e[6 + i * (8 + t)] = 1);
      },
      _insertVersion: function() {
        var t, e, i, r, a = this.buffer, x = this._version, n = this.width;
        if (x > 6)
          for (t = Q.BLOCK[x - 7], e = 17, i = 0; i < 6; i++)
            for (r = 0; r < 3; r++, e--)
              1 & (e > 11 ? x >> e - 12 : t >> e) ? (a[5 - i + n * (2 - r + n - 11)] = 1, a[2 - r + n - 11 + n * (5 - i)] = 1) : (this._setMask(5 - i, 2 - r + n - 11), this._setMask(2 - r + n - 11, 5 - i));
      },
      _isMasked: function(t, e) {
        var i = c._getMaskBit(t, e);
        return this._mask[i] === 1;
      },
      _pack: function() {
        var t, e, i, r = 1, a = 1, x = this.width, n = x - 1, s = x - 1, f = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
        for (e = 0; e < f; e++)
          for (t = this._stringBuffer[e], i = 0; i < 8; i++, t <<= 1) {
            128 & t && (this.buffer[n + x * s] = 1);
            do
              a ? n-- : (n++, r ? s !== 0 ? s-- : (n -= 2, r = !r, n === 6 && (n--, s = 9)) : s !== x - 1 ? s++ : (n -= 2, r = !r, n === 6 && (n--, s -= 8))), a = !a;
            while (this._isMasked(n, s));
          }
      },
      _reverseMask: function() {
        var t, e, i = this.width;
        for (t = 0; t < 9; t++)
          this._setMask(t, 8);
        for (t = 0; t < 8; t++)
          this._setMask(t + i - 8, 8), this._setMask(8, t);
        for (e = 0; e < 7; e++)
          this._setMask(8, e + i - 7);
      },
      _setMask: function(t, e) {
        var i = c._getMaskBit(t, e);
        this._mask[i] = 1;
      },
      _syncMask: function() {
        var t, e, i = this.width;
        for (e = 0; e < i; e++)
          for (t = 0; t <= e; t++)
            this.buffer[t + i * e] && this._setMask(t, e);
      }
    }, {
      _createArray: function(t) {
        var e, i = [];
        for (e = 0; e < t; e++)
          i[e] = 0;
        return i;
      },
      _getMaskBit: function(t, e) {
        var i;
        return t > e && (i = t, t = e, e = i), i = e, i += e * e, i >>= 1, i += t, i;
      },
      _modN: function(t) {
        for (; t >= 255; )
          t -= 255, t = (t >> 8) + (t & 255);
        return t;
      },
      // *Badness* coefficients.
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    }), X = c, W = C.extend({
      /**
       * @override
       */
      draw: function() {
        this.element.src = this.qrious.toDataURL();
      },
      /**
       * @override
       */
      reset: function() {
        this.element.src = "";
      },
      /**
       * @override
       */
      resize: function() {
        var t = this.element;
        t.width = t.height = this.qrious.size;
      }
    }), H = W, J = u.extend(function(t, e, i, r) {
      this.name = t, this.modifiable = !!e, this.defaultValue = i, this._valueTransformer = r;
    }, {
      /**
       * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
       *
       * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
       * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
       *
       * @param {*} value - the value to be transformed
       * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
       * @public
       * @memberof Option#
       */
      transform: function(t) {
        var e = this._valueTransformer;
        return typeof e == "function" ? e(t, this) : t;
      }
    }), v = J, $ = u.extend(null, {
      /**
       * Returns the absolute value of a given number.
       *
       * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
       * <code>null</code> instead of zero.
       *
       * @param {number} value - the number whose absolute value is to be returned
       * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
       * <code>null</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      abs: function(t) {
        return t != null ? Math.abs(t) : null;
      },
      /**
       * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
       * (not inherited) property.
       *
       * @param {Object} object - the object on which the property is to be checked
       * @param {string} name - the name of the property to be checked
       * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      hasOwn: function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      },
      /**
       * A non-operation method that does absolutely nothing.
       *
       * @return {void}
       * @public
       * @static
       * @memberof Utilities
       */
      noop: function() {
      },
      /**
       * Transforms the specified <code>string</code> to upper case while remaining null-safe.
       *
       * @param {string} string - the string to be transformed to upper case
       * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
       * @public
       * @static
       * @memberof Utilities
       */
      toUpperCase: function(t) {
        return t != null ? t.toUpperCase() : null;
      }
    }), m = $, g = u.extend(function(t) {
      this.options = {}, t.forEach(function(e) {
        this.options[e.name] = e;
      }, this);
    }, {
      /**
       * Returns whether an option with the specified <code>name</code> is available.
       *
       * @param {string} name - the name of the {@link Option} whose existence is to be checked
       * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
       * <code>false</code>.
       * @public
       * @memberof OptionManager#
       */
      exists: function(t) {
        return this.options[t] != null;
      },
      /**
       * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
       *
       * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
       * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
       * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
       * @public
       * @memberof OptionManager#
       */
      get: function(t, e) {
        return g._get(this.options[t], e);
      },
      /**
       * Returns a copy of all of the available options on the <code>target</code> object provided.
       *
       * @param {Object} target - the object from which the option name/value pairs are to be returned
       * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
       * @public
       * @memberof OptionManager#
       */
      getAll: function(t) {
        var e, i = this.options, r = {};
        for (e in i)
          m.hasOwn(i, e) && (r[e] = g._get(i[e], t));
        return r;
      },
      /**
       * Initializes the available options for the <code>target</code> object provided and then applies the initial values
       * within the speciifed <code>options</code>.
       *
       * This method will throw an error if any of the names within <code>options</code> does not match an available option.
       *
       * This involves setting the default values and defining properties for all of the available options on
       * <code>target</code> before finally calling {@link OptionMananger#setAll} with <code>options</code> and
       * <code>target</code>. Any options that are configured to be modifiable will have a setter included in their defined
       * property that will allow its corresponding value to be modified.
       *
       * If a change handler is specified, it will be called whenever the value changes on <code>target</code> for a
       * modifiable option, but only when done so via the defined property's setter.
       *
       * @param {Object.<string, *>} options - the name/value pairs of the initial options to be set
       * @param {Object} target - the object on which the options are to be initialized
       * @param {Function} [changeHandler] - the function to be called whenever the value of an modifiable option changes on
       * <code>target</code>
       * @return {void}
       * @throws {Error} If <code>options</code> contains an invalid option name.
       * @public
       * @memberof OptionManager#
       */
      init: function(t, e, i) {
        typeof i != "function" && (i = m.noop);
        var r, a;
        for (r in this.options)
          m.hasOwn(this.options, r) && (a = this.options[r], g._set(a, a.defaultValue, e), g._createAccessor(a, e, i));
        this._setAll(t, e, !0);
      },
      /**
       * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
       * <code>value</code>.
       *
       * This method will throw an error if <code>name</code> does not match an available option or matches an option that
       * cannot be modified.
       *
       * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
       * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
       * transform whichever value was determined to be used.
       *
       * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
       *
       * @param {string} name - the name of the {@link Option} whose value is to be set
       * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
       * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
       * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
       * <code>false</code>.
       * @throws {Error} If <code>name</code> is invalid or is for an option that cannot be modified.
       * @public
       * @memberof OptionManager#
       */
      set: function(t, e, i) {
        return this._set(t, e, i);
      },
      /**
       * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
       * values.
       *
       * This method will throw an error if any of the names within <code>options</code> does not match an available option
       * or matches an option that cannot be modified.
       *
       * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
       * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
       * configured, it will be used to transform whichever value was determined to be used.
       *
       * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
       * result.
       *
       * @param {Object.<string, *>} options - the name/value pairs of options to be set
       * @param {Object} target - the object on which the options are to be set
       * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
       * <code>false</code>.
       * @throws {Error} If <code>options</code> contains an invalid option name or an option that cannot be modiifed.
       * @public
       * @memberof OptionManager#
       */
      setAll: function(t, e) {
        return this._setAll(t, e);
      },
      _set: function(t, e, i, r) {
        var a = this.options[t];
        if (!a)
          throw new Error("Invalid option: " + t);
        if (!a.modifiable && !r)
          throw new Error("Option cannot be modified: " + t);
        return g._set(a, e, i);
      },
      _setAll: function(t, e, i) {
        if (!t)
          return !1;
        var r, a = !1;
        for (r in t)
          m.hasOwn(t, r) && this._set(r, t[r], e, i) && (a = !0);
        return a;
      }
    }, {
      _createAccessor: function(t, e, i) {
        var r = {
          get: function() {
            return g._get(t, e);
          }
        };
        t.modifiable && (r.set = function(a) {
          g._set(t, a, e) && i(a, t);
        }), Object.defineProperty(e, t.name, r);
      },
      _get: function(t, e) {
        return e["_" + t.name];
      },
      _set: function(t, e, i) {
        var r = "_" + t.name, a = i[r], x = t.transform(e ?? t.defaultValue);
        return i[r] = x, x !== a;
      }
    }), Y = g, Z = u.extend(function() {
      this._services = {};
    }, {
      /**
       * Returns the {@link Service} being managed with the specified <code>name</code>.
       *
       * @param {string} name - the name of the {@link Service} to be returned
       * @return {Service} The {@link Service} is being managed with <code>name</code>.
       * @throws {Error} If no {@link Service} is being managed with <code>name</code>.
       * @public
       * @memberof ServiceManager#
       */
      getService: function(t) {
        var e = this._services[t];
        if (!e)
          throw new Error("Service is not being managed with name: " + t);
        return e;
      },
      /**
       * Sets the {@link Service} implementation to be managed for the specified <code>name</code> to the
       * <code>service</code> provided.
       *
       * @param {string} name - the name of the {@link Service} to be managed with <code>name</code>
       * @param {Service} service - the {@link Service} implementation to be managed
       * @return {void}
       * @throws {Error} If a {@link Service} is already being managed with the same <code>name</code>.
       * @public
       * @memberof ServiceManager#
       */
      setService: function(t, e) {
        if (this._services[t])
          throw new Error("Service is already managed with name: " + t);
        e && (this._services[t] = e);
      }
    }), ee = Z, A = new Y([
      new v("background", !0, "white"),
      new v("backgroundAlpha", !0, 1, m.abs),
      new v("element"),
      new v("foreground", !0, "black"),
      new v("foregroundAlpha", !0, 1, m.abs),
      new v("level", !0, "L", m.toUpperCase),
      new v("mime", !0, "image/png"),
      new v("padding", !0, null, m.abs),
      new v("size", !0, 100, m.abs),
      new v("value", !0, "")
    ]), S = new ee(), L = u.extend(function(t) {
      A.init(t, this, this.update.bind(this));
      var e = A.get("element", this), i = S.getService("element"), r = e && i.isCanvas(e) ? e : i.createCanvas(), a = e && i.isImage(e) ? e : i.createImage();
      this._canvasRenderer = new D(this, r, !0), this._imageRenderer = new H(this, a, a === e), this.update();
    }, {
      /**
       * Returns all of the options configured for this {@link QRious}.
       *
       * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
       * underlying fields.
       *
       * @return {Object.<string, *>} A copy of the applied options.
       * @public
       * @memberof QRious#
       */
      get: function() {
        return A.getAll(this);
      },
      /**
       * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
       * underlying fields are changed as a result.
       *
       * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
       * changes.
       *
       * @param {QRious~Options} options - the options to be set
       * @return {void}
       * @throws {Error} If any <code>options</code> are invalid or cannot be modified.
       * @public
       * @memberof QRious#
       */
      set: function(t) {
        A.setAll(t, this) && this.update();
      },
      /**
       * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
       *
       * @param {string} [mime] - the MIME type for the image
       * @return {string} The image data URI for the QR code.
       * @public
       * @memberof QRious#
       */
      toDataURL: function(t) {
        return this.canvas.toDataURL(t || this.mime);
      },
      /**
       * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
       *
       * @return {void}
       * @protected
       * @memberof QRious#
       */
      update: function() {
        var t = new X({
          level: this.level,
          value: this.value
        });
        this._canvasRenderer.render(t), this._imageRenderer.render(t);
      }
    }, {
      /**
       * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
       *
       * @param {Service} service - the {@link Service} to be configured
       * @return {void}
       * @throws {Error} If a {@link Service} has already been configured with the same name.
       * @public
       * @static
       * @memberof QRious
       */
      use: function(t) {
        S.setService(t.getName(), t);
      }
    });
    Object.defineProperties(L.prototype, {
      canvas: {
        /**
         * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
         *
         * @return {*} The <code>canvas</code> element.
         * @public
         * @memberof QRious#
         * @alias canvas
         */
        get: function() {
          return this._canvasRenderer.getElement();
        }
      },
      image: {
        /**
         * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
         *
         * @return {*} The <code>img</code> element.
         * @public
         * @memberof QRious#
         * @alias image
         */
        get: function() {
          return this._imageRenderer.getElement();
        }
      }
    });
    var te = L, N = te, ie = u.extend({
      /**
       * Returns the name of this {@link Service}.
       *
       * @return {string} The service name.
       * @public
       * @abstract
       * @memberof Service#
       */
      getName: function() {
      }
    }), re = ie, ae = re.extend({
      /**
       * Creates an instance of a canvas element.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @return {*} The newly created canvas element.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      createCanvas: function() {
      },
      /**
       * Creates an instance of a image element.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @return {*} The newly created image element.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      createImage: function() {
      },
      /**
       * @override
       */
      getName: function() {
        return "element";
      },
      /**
       * Returns whether the specified <code>element</code> is a canvas.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @param {*} element - the element to be checked
       * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      isCanvas: function(t) {
      },
      /**
       * Returns whether the specified <code>element</code> is an image.
       *
       * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
       *
       * @param {*} element - the element to be checked
       * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
       * @public
       * @abstract
       * @memberof ElementService#
       */
      isImage: function(t) {
      }
    }), xe = ae, ne = xe.extend({
      /**
       * @override
       */
      createCanvas: function() {
        return document.createElement("canvas");
      },
      /**
       * @override
       */
      createImage: function() {
        return document.createElement("img");
      },
      /**
       * @override
       */
      isCanvas: function(t) {
        return t instanceof HTMLCanvasElement;
      },
      /**
       * @override
       */
      isImage: function(t) {
        return t instanceof HTMLImageElement;
      }
    }), se = ne;
    N.use(new se());
    var fe = N;
    return fe;
  });
})(q);
var ve = q.exports;
const _e = /* @__PURE__ */ he(ve);
class T extends le {
  constructor() {
    super();
    j(this, "className", "QrCode");
  }
  static get cssStyleSheet() {
    return de;
  }
  setupAttributes() {
    this.isShadowRoot = "open";
  }
  static get observedAttributes() {
    return [
      "value",
      "background",
      "backgroundAlpha",
      "foreground",
      "foregroundAlpha",
      "level",
      "padding",
      "size"
    ];
  }
  draw(l, O, E) {
    let B = document.createDocumentFragment(), d = document.createElement("div");
    d.classList.add("container");
    let k = document.createElement("canvas");
    k.classList.add("qr"), k.setAttribute("part", "native");
    let w = document.createElement("slot");
    w.setAttribute("name", "top");
    let h = document.createElement("slot");
    return h.setAttribute("name", "bottom"), d.appendChild(w), d.appendChild(k), d.appendChild(h), B.appendChild(d), B;
  }
  afterDraw(l, O, E) {
    const B = this.shadowRoot.querySelector("canvas"), d = {};
    [
      "value",
      "background",
      "backgroundAlpha",
      "foreground",
      "foregroundAlpha",
      "level",
      "padding",
      "size"
    ].forEach((w) => {
      const h = this.getAttribute(w);
      h !== null && (d[w] = h);
    }), d.hasOwnProperty("value") || (d.value = "empty value"), new _e({
      element: B,
      ...d
    });
  }
}
T.define("wje-qr-code", T);
export {
  T as default
};
