function Rw(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function xh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function ww(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var u1 = { exports: {} },
  ac = {},
  c1 = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja = Symbol.for("react.element"),
  Ew = Symbol.for("react.portal"),
  _w = Symbol.for("react.fragment"),
  kw = Symbol.for("react.strict_mode"),
  Tw = Symbol.for("react.profiler"),
  Aw = Symbol.for("react.provider"),
  Pw = Symbol.for("react.context"),
  $w = Symbol.for("react.forward_ref"),
  Nw = Symbol.for("react.suspense"),
  Iw = Symbol.for("react.memo"),
  Ow = Symbol.for("react.lazy"),
  Fv = Symbol.iterator;
function Lw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fv && e[Fv]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var d1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  f1 = Object.assign,
  p1 = {};
function ts(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = p1),
    (this.updater = n || d1);
}
ts.prototype.isReactComponent = {};
ts.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ts.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function h1() {}
h1.prototype = ts.prototype;
function Sh(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = p1),
    (this.updater = n || d1);
}
var Ch = (Sh.prototype = new h1());
Ch.constructor = Sh;
f1(Ch, ts.prototype);
Ch.isPureReactComponent = !0;
var Dv = Array.isArray,
  m1 = Object.prototype.hasOwnProperty,
  Rh = { current: null },
  v1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function g1(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      m1.call(t, r) && !v1.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ja,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Rh.current,
  };
}
function Mw(e, t) {
  return {
    $$typeof: ja,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ja;
}
function Fw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jv = /\/+/g;
function qd(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Fw("" + e.key)
    : t.toString(36);
}
function zl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ja:
          case Ew:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + qd(s, 0) : r),
      Dv(o)
        ? ((n = ""),
          e != null && (n = e.replace(jv, "$&/") + "/"),
          zl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (wh(o) &&
            (o = Mw(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(jv, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Dv(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + qd(i, a);
      s += zl(i, t, n, l, o);
    }
  else if (((l = Lw(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + qd(i, a++)), (s += zl(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ll(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    zl(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Dw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Yt = { current: null },
  Ul = { transition: null },
  jw = {
    ReactCurrentDispatcher: Yt,
    ReactCurrentBatchConfig: Ul,
    ReactCurrentOwner: Rh,
  };
Le.Children = {
  map: ll,
  forEach: function (e, t, n) {
    ll(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ll(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ll(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Le.Component = ts;
Le.Fragment = _w;
Le.Profiler = Tw;
Le.PureComponent = Sh;
Le.StrictMode = kw;
Le.Suspense = Nw;
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jw;
Le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = f1({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Rh.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      m1.call(t, l) &&
        !v1.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ja, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Le.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Aw, _context: e }),
    (e.Consumer = e)
  );
};
Le.createElement = g1;
Le.createFactory = function (e) {
  var t = g1.bind(null, e);
  return (t.type = e), t;
};
Le.createRef = function () {
  return { current: null };
};
Le.forwardRef = function (e) {
  return { $$typeof: $w, render: e };
};
Le.isValidElement = wh;
Le.lazy = function (e) {
  return { $$typeof: Ow, _payload: { _status: -1, _result: e }, _init: Dw };
};
Le.memo = function (e, t) {
  return { $$typeof: Iw, type: e, compare: t === void 0 ? null : t };
};
Le.startTransition = function (e) {
  var t = Ul.transition;
  Ul.transition = {};
  try {
    e();
  } finally {
    Ul.transition = t;
  }
};
Le.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Le.useCallback = function (e, t) {
  return Yt.current.useCallback(e, t);
};
Le.useContext = function (e) {
  return Yt.current.useContext(e);
};
Le.useDebugValue = function () {};
Le.useDeferredValue = function (e) {
  return Yt.current.useDeferredValue(e);
};
Le.useEffect = function (e, t) {
  return Yt.current.useEffect(e, t);
};
Le.useId = function () {
  return Yt.current.useId();
};
Le.useImperativeHandle = function (e, t, n) {
  return Yt.current.useImperativeHandle(e, t, n);
};
Le.useInsertionEffect = function (e, t) {
  return Yt.current.useInsertionEffect(e, t);
};
Le.useLayoutEffect = function (e, t) {
  return Yt.current.useLayoutEffect(e, t);
};
Le.useMemo = function (e, t) {
  return Yt.current.useMemo(e, t);
};
Le.useReducer = function (e, t, n) {
  return Yt.current.useReducer(e, t, n);
};
Le.useRef = function (e) {
  return Yt.current.useRef(e);
};
Le.useState = function (e) {
  return Yt.current.useState(e);
};
Le.useSyncExternalStore = function (e, t, n) {
  return Yt.current.useSyncExternalStore(e, t, n);
};
Le.useTransition = function () {
  return Yt.current.useTransition();
};
Le.version = "18.2.0";
c1.exports = Le;
var x = c1.exports;
const he = xh(x),
  fu = Rw({ __proto__: null, default: he }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bw = x,
  zw = Symbol.for("react.element"),
  Uw = Symbol.for("react.fragment"),
  Vw = Object.prototype.hasOwnProperty,
  Ww = Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hw = { key: !0, ref: !0, __self: !0, __source: !0 };
function y1(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Vw.call(t, r) && !Hw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: zw,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Ww.current,
  };
}
ac.Fragment = Uw;
ac.jsx = y1;
ac.jsxs = y1;
u1.exports = ac;
var f = u1.exports;
const qw = { black: "#000", white: "#fff" },
  fa = qw,
  Kw = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Yo = Kw,
  Gw = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Jo = Gw,
  Qw = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Zo = Qw,
  Xw = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  ei = Xw,
  Yw = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  ti = Yw,
  Jw = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  ms = Jw,
  Zw = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  eE = Zw;
function oo(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Oo = "$$material";
function R() {
  return (
    (R = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    R.apply(this, arguments)
  );
}
function le(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function b1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var tE =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  nE = b1(function (e) {
    return (
      tE.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function rE(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function oE(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var iE = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(oE(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = rE(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  zt = "-ms-",
  pu = "-moz-",
  Ue = "-webkit-",
  x1 = "comm",
  Eh = "rule",
  _h = "decl",
  sE = "@import",
  S1 = "@keyframes",
  aE = "@layer",
  lE = Math.abs,
  lc = String.fromCharCode,
  uE = Object.assign;
function cE(e, t) {
  return Lt(e, 0) ^ 45
    ? (((((((t << 2) ^ Lt(e, 0)) << 2) ^ Lt(e, 1)) << 2) ^ Lt(e, 2)) << 2) ^
        Lt(e, 3)
    : 0;
}
function C1(e) {
  return e.trim();
}
function dE(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ve(e, t, n) {
  return e.replace(t, n);
}
function Gf(e, t) {
  return e.indexOf(t);
}
function Lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function pa(e, t, n) {
  return e.slice(t, n);
}
function ir(e) {
  return e.length;
}
function kh(e) {
  return e.length;
}
function ul(e, t) {
  return t.push(e), e;
}
function fE(e, t) {
  return e.map(t).join("");
}
var uc = 1,
  Li = 1,
  R1 = 0,
  cn = 0,
  bt = 0,
  ns = "";
function cc(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: uc,
    column: Li,
    length: s,
    return: "",
  };
}
function vs(e, t) {
  return uE(cc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function pE() {
  return bt;
}
function hE() {
  return (
    (bt = cn > 0 ? Lt(ns, --cn) : 0), Li--, bt === 10 && ((Li = 1), uc--), bt
  );
}
function vn() {
  return (
    (bt = cn < R1 ? Lt(ns, cn++) : 0), Li++, bt === 10 && ((Li = 1), uc++), bt
  );
}
function dr() {
  return Lt(ns, cn);
}
function Vl() {
  return cn;
}
function Ba(e, t) {
  return pa(ns, e, t);
}
function ha(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function w1(e) {
  return (uc = Li = 1), (R1 = ir((ns = e))), (cn = 0), [];
}
function E1(e) {
  return (ns = ""), e;
}
function Wl(e) {
  return C1(Ba(cn - 1, Qf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mE(e) {
  for (; (bt = dr()) && bt < 33; ) vn();
  return ha(e) > 2 || ha(bt) > 3 ? "" : " ";
}
function vE(e, t) {
  for (
    ;
    --t &&
    vn() &&
    !(bt < 48 || bt > 102 || (bt > 57 && bt < 65) || (bt > 70 && bt < 97));

  );
  return Ba(e, Vl() + (t < 6 && dr() == 32 && vn() == 32));
}
function Qf(e) {
  for (; vn(); )
    switch (bt) {
      case e:
        return cn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Qf(bt);
        break;
      case 40:
        e === 41 && Qf(e);
        break;
      case 92:
        vn();
        break;
    }
  return cn;
}
function gE(e, t) {
  for (; vn() && e + bt !== 57; ) if (e + bt === 84 && dr() === 47) break;
  return "/*" + Ba(t, cn - 1) + "*" + lc(e === 47 ? e : vn());
}
function yE(e) {
  for (; !ha(dr()); ) vn();
  return Ba(e, cn);
}
function bE(e) {
  return E1(Hl("", null, null, null, [""], (e = w1(e)), 0, [0], e));
}
function Hl(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      p = 0,
      b = 0,
      m = 0,
      v = 1,
      C = 1,
      g = 1,
      h = 0,
      y = "",
      S = o,
      E = i,
      _ = r,
      w = y;
    C;

  )
    switch (((m = h), (h = vn()))) {
      case 40:
        if (m != 108 && Lt(w, d - 1) == 58) {
          Gf((w += Ve(Wl(h), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Wl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += mE(m);
        break;
      case 92:
        w += vE(Vl() - 1, 7);
        continue;
      case 47:
        switch (dr()) {
          case 42:
          case 47:
            ul(xE(gE(vn(), Vl()), t, n), l);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * v:
        a[u++] = ir(w) * g;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + c:
            g == -1 && (w = Ve(w, /\f/g, "")),
              b > 0 &&
                ir(w) - d &&
                ul(
                  b > 32
                    ? zv(w + ";", r, n, d - 1)
                    : zv(Ve(w, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            w += ";";
          default:
            if (
              (ul((_ = Bv(w, t, n, u, c, o, a, y, (S = []), (E = []), d)), i),
              h === 123)
            )
              if (c === 0) Hl(w, t, _, _, S, i, d, a, E);
              else
                switch (p === 99 && Lt(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Hl(
                      e,
                      _,
                      _,
                      r && ul(Bv(e, _, _, 0, 0, o, a, y, o, (S = []), d), E),
                      o,
                      E,
                      d,
                      a,
                      r ? S : E
                    );
                    break;
                  default:
                    Hl(w, _, _, _, [""], E, 0, a, E);
                }
        }
        (u = c = b = 0), (v = g = 1), (y = w = ""), (d = s);
        break;
      case 58:
        (d = 1 + ir(w)), (b = m);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && hE() == 125) continue;
        }
        switch (((w += lc(h)), h * v)) {
          case 38:
            g = c > 0 ? 1 : ((w += "\f"), -1);
            break;
          case 44:
            (a[u++] = (ir(w) - 1) * g), (g = 1);
            break;
          case 64:
            dr() === 45 && (w += Wl(vn())),
              (p = dr()),
              (c = d = ir((y = w += yE(Vl())))),
              h++;
            break;
          case 45:
            m === 45 && ir(w) == 2 && (v = 0);
        }
    }
  return i;
}
function Bv(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, p = o === 0 ? i : [""], b = kh(p), m = 0, v = 0, C = 0;
    m < r;
    ++m
  )
    for (var g = 0, h = pa(e, d + 1, (d = lE((v = s[m])))), y = e; g < b; ++g)
      (y = C1(v > 0 ? p[g] + " " + h : Ve(h, /&\f/g, p[g]))) && (l[C++] = y);
  return cc(e, t, n, o === 0 ? Eh : a, l, u, c);
}
function xE(e, t, n) {
  return cc(e, t, n, x1, lc(pE()), pa(e, 2, -2), 0);
}
function zv(e, t, n, r) {
  return cc(e, t, n, _h, pa(e, 0, r), pa(e, r + 1, -1), r);
}
function Ei(e, t) {
  for (var n = "", r = kh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function SE(e, t, n, r) {
  switch (e.type) {
    case aE:
      if (e.children.length) break;
    case sE:
    case _h:
      return (e.return = e.return || e.value);
    case x1:
      return "";
    case S1:
      return (e.return = e.value + "{" + Ei(e.children, r) + "}");
    case Eh:
      e.value = e.props.join(",");
  }
  return ir((n = Ei(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function CE(e) {
  var t = kh(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function RE(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var wE = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = dr()), o === 38 && i === 12 && (n[r] = 1), !ha(i);

    )
      vn();
    return Ba(t, cn);
  },
  EE = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (ha(o)) {
        case 0:
          o === 38 && dr() === 12 && (n[r] = 1), (t[r] += wE(cn - 1, n, r));
          break;
        case 2:
          t[r] += Wl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = dr() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += lc(o);
      }
    while ((o = vn()));
    return t;
  },
  _E = function (t, n) {
    return E1(EE(w1(t), n));
  },
  Uv = new WeakMap(),
  kE = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Uv.get(r)) &&
        !o
      ) {
        Uv.set(t, !0);
        for (
          var i = [], s = _E(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  TE = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function _1(e, t) {
  switch (cE(e, t)) {
    case 5103:
      return Ue + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ue + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ue + e + pu + e + zt + e + e;
    case 6828:
    case 4268:
      return Ue + e + zt + e + e;
    case 6165:
      return Ue + e + zt + "flex-" + e + e;
    case 5187:
      return (
        Ue + e + Ve(e, /(\w+).+(:[^]+)/, Ue + "box-$1$2" + zt + "flex-$1$2") + e
      );
    case 5443:
      return Ue + e + zt + "flex-item-" + Ve(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Ue +
        e +
        zt +
        "flex-line-pack" +
        Ve(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Ue + e + zt + Ve(e, "shrink", "negative") + e;
    case 5292:
      return Ue + e + zt + Ve(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Ue +
        "box-" +
        Ve(e, "-grow", "") +
        Ue +
        e +
        zt +
        Ve(e, "grow", "positive") +
        e
      );
    case 4554:
      return Ue + Ve(e, /([^-])(transform)/g, "$1" + Ue + "$2") + e;
    case 6187:
      return (
        Ve(
          Ve(Ve(e, /(zoom-|grab)/, Ue + "$1"), /(image-set)/, Ue + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Ve(e, /(image-set\([^]*)/, Ue + "$1$`$1");
    case 4968:
      return (
        Ve(
          Ve(e, /(.+:)(flex-)?(.*)/, Ue + "box-pack:$3" + zt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Ue +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ve(e, /(.+)-inline(.+)/, Ue + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ir(e) - 1 - t > 6)
        switch (Lt(e, t + 1)) {
          case 109:
            if (Lt(e, t + 4) !== 45) break;
          case 102:
            return (
              Ve(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Ue +
                  "$2-$3$1" +
                  pu +
                  (Lt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Gf(e, "stretch")
              ? _1(Ve(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Lt(e, t + 1) !== 115) break;
    case 6444:
      switch (Lt(e, ir(e) - 3 - (~Gf(e, "!important") && 10))) {
        case 107:
          return Ve(e, ":", ":" + Ue) + e;
        case 101:
          return (
            Ve(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Ue +
                (Lt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Ue +
                "$2$3$1" +
                zt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Lt(e, t + 11)) {
        case 114:
          return Ue + e + zt + Ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ue + e + zt + Ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ue + e + zt + Ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ue + e + zt + e + e;
  }
  return e;
}
var AE = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case _h:
          t.return = _1(t.value, t.length);
          break;
        case S1:
          return Ei([vs(t, { value: Ve(t.value, "@", "@" + Ue) })], o);
        case Eh:
          if (t.length)
            return fE(t.props, function (i) {
              switch (dE(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ei(
                    [vs(t, { props: [Ve(i, /:(read-\w+)/, ":" + pu + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Ei(
                    [
                      vs(t, {
                        props: [Ve(i, /:(plac\w+)/, ":" + Ue + "input-$1")],
                      }),
                      vs(t, { props: [Ve(i, /:(plac\w+)/, ":" + pu + "$1")] }),
                      vs(t, { props: [Ve(i, /:(plac\w+)/, zt + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  PE = [AE],
  $E = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var C = v.getAttribute("data-emotion");
        C.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || PE,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var C = v.getAttribute("data-emotion").split(" "), g = 1;
            g < C.length;
            g++
          )
            i[C[g]] = !0;
          a.push(v);
        }
      );
    var l,
      u = [kE, TE];
    {
      var c,
        d = [
          SE,
          RE(function (v) {
            c.insert(v);
          }),
        ],
        p = CE(u.concat(o, d)),
        b = function (C) {
          return Ei(bE(C), p);
        };
      l = function (C, g, h, y) {
        (c = h),
          b(C ? C + "{" + g.styles + "}" : g.styles),
          y && (m.inserted[g.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new iE({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return m.sheet.hydrate(a), m;
  },
  k1 = { exports: {} },
  Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var It = typeof Symbol == "function" && Symbol.for,
  Th = It ? Symbol.for("react.element") : 60103,
  Ah = It ? Symbol.for("react.portal") : 60106,
  dc = It ? Symbol.for("react.fragment") : 60107,
  fc = It ? Symbol.for("react.strict_mode") : 60108,
  pc = It ? Symbol.for("react.profiler") : 60114,
  hc = It ? Symbol.for("react.provider") : 60109,
  mc = It ? Symbol.for("react.context") : 60110,
  Ph = It ? Symbol.for("react.async_mode") : 60111,
  vc = It ? Symbol.for("react.concurrent_mode") : 60111,
  gc = It ? Symbol.for("react.forward_ref") : 60112,
  yc = It ? Symbol.for("react.suspense") : 60113,
  NE = It ? Symbol.for("react.suspense_list") : 60120,
  bc = It ? Symbol.for("react.memo") : 60115,
  xc = It ? Symbol.for("react.lazy") : 60116,
  IE = It ? Symbol.for("react.block") : 60121,
  OE = It ? Symbol.for("react.fundamental") : 60117,
  LE = It ? Symbol.for("react.responder") : 60118,
  ME = It ? Symbol.for("react.scope") : 60119;
function xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Th:
        switch (((e = e.type), e)) {
          case Ph:
          case vc:
          case dc:
          case pc:
          case fc:
          case yc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case mc:
              case gc:
              case xc:
              case bc:
              case hc:
                return e;
              default:
                return t;
            }
        }
      case Ah:
        return t;
    }
  }
}
function T1(e) {
  return xn(e) === vc;
}
Ke.AsyncMode = Ph;
Ke.ConcurrentMode = vc;
Ke.ContextConsumer = mc;
Ke.ContextProvider = hc;
Ke.Element = Th;
Ke.ForwardRef = gc;
Ke.Fragment = dc;
Ke.Lazy = xc;
Ke.Memo = bc;
Ke.Portal = Ah;
Ke.Profiler = pc;
Ke.StrictMode = fc;
Ke.Suspense = yc;
Ke.isAsyncMode = function (e) {
  return T1(e) || xn(e) === Ph;
};
Ke.isConcurrentMode = T1;
Ke.isContextConsumer = function (e) {
  return xn(e) === mc;
};
Ke.isContextProvider = function (e) {
  return xn(e) === hc;
};
Ke.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Th;
};
Ke.isForwardRef = function (e) {
  return xn(e) === gc;
};
Ke.isFragment = function (e) {
  return xn(e) === dc;
};
Ke.isLazy = function (e) {
  return xn(e) === xc;
};
Ke.isMemo = function (e) {
  return xn(e) === bc;
};
Ke.isPortal = function (e) {
  return xn(e) === Ah;
};
Ke.isProfiler = function (e) {
  return xn(e) === pc;
};
Ke.isStrictMode = function (e) {
  return xn(e) === fc;
};
Ke.isSuspense = function (e) {
  return xn(e) === yc;
};
Ke.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === dc ||
    e === vc ||
    e === pc ||
    e === fc ||
    e === yc ||
    e === NE ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === xc ||
        e.$$typeof === bc ||
        e.$$typeof === hc ||
        e.$$typeof === mc ||
        e.$$typeof === gc ||
        e.$$typeof === OE ||
        e.$$typeof === LE ||
        e.$$typeof === ME ||
        e.$$typeof === IE))
  );
};
Ke.typeOf = xn;
k1.exports = Ke;
var FE = k1.exports,
  A1 = FE,
  DE = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  jE = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  P1 = {};
P1[A1.ForwardRef] = DE;
P1[A1.Memo] = jE;
var BE = !0;
function zE(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var $1 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || BE === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  N1 = function (t, n, r) {
    $1(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function UE(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var VE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  WE = /[A-Z]|^ms/g,
  HE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  I1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Vv = function (t) {
    return t != null && typeof t != "boolean";
  },
  Kd = b1(function (e) {
    return I1(e) ? e : e.replace(WE, "-$&").toLowerCase();
  }),
  Wv = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(HE, function (r, o, i) {
            return (sr = { name: o, styles: i, next: sr }), o;
          });
    }
    return VE[t] !== 1 && !I1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function ma(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (sr = { name: n.name, styles: n.styles, next: sr }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (sr = { name: r.name, styles: r.styles, next: sr }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return qE(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = sr,
          s = n(e);
        return (sr = i), ma(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function qE(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ma(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : Vv(s) && (r += Kd(i) + ":" + Wv(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          Vv(s[a]) && (r += Kd(i) + ":" + Wv(i, s[a]) + ";");
      else {
        var l = ma(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Kd(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Hv = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  sr,
  $h = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    sr = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += ma(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += ma(r, n, t[a])), o && (i += s[a]);
    Hv.lastIndex = 0;
    for (var l = "", u; (u = Hv.exec(i)) !== null; ) l += "-" + u[1];
    var c = UE(i) + l;
    return { name: c, styles: i, next: sr };
  },
  KE = function (t) {
    return t();
  },
  O1 = fu.useInsertionEffect ? fu.useInsertionEffect : !1,
  GE = O1 || KE,
  qv = O1 || x.useLayoutEffect,
  L1 = x.createContext(typeof HTMLElement < "u" ? $E({ key: "css" }) : null);
L1.Provider;
var M1 = function (t) {
    return x.forwardRef(function (n, r) {
      var o = x.useContext(L1);
      return t(n, o, r);
    });
  },
  Sc = x.createContext({}),
  QE = M1(function (e, t) {
    var n = e.styles,
      r = $h([n], void 0, x.useContext(Sc)),
      o = x.useRef();
    return (
      qv(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      qv(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && N1(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function XE() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return $h(t);
}
var Nh = function () {
    var t = XE.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  YE = nE,
  JE = function (t) {
    return t !== "theme";
  },
  Kv = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? YE : JE;
  },
  Gv = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  ZE = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      $1(n, r, o),
      GE(function () {
        return N1(n, r, o);
      }),
      null
    );
  },
  e_ = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Gv(t, n, r),
      l = a || Kv(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var p = c.length, b = 1; b < p; b++) d.push(c[b], c[0][b]);
      }
      var m = M1(function (v, C, g) {
        var h = (u && v.as) || o,
          y = "",
          S = [],
          E = v;
        if (v.theme == null) {
          E = {};
          for (var _ in v) E[_] = v[_];
          E.theme = x.useContext(Sc);
        }
        typeof v.className == "string"
          ? (y = zE(C.registered, S, v.className))
          : v.className != null && (y = v.className + " ");
        var w = $h(d.concat(S), C.registered, E);
        (y += C.key + "-" + w.name), s !== void 0 && (y += " " + s);
        var k = u && a === void 0 ? Kv(h) : l,
          L = {};
        for (var P in v) (u && P === "as") || (k(P) && (L[P] = v[P]));
        return (
          (L.className = y),
          (L.ref = g),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(ZE, {
              cache: C,
              serialized: w,
              isStringTag: typeof h == "string",
            }),
            x.createElement(h, L)
          )
        );
      });
      return (
        (m.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = d),
        (m.__emotion_forwardProp = a),
        Object.defineProperty(m, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (m.withComponent = function (v, C) {
          return e(v, R({}, n, C, { shouldForwardProp: Gv(m, C, !0) })).apply(
            void 0,
            d
          );
        }),
        m
      );
    };
  },
  t_ = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Xf = e_.bind();
t_.forEach(function (e) {
  Xf[e] = Xf(e);
});
function n_(e) {
  return e == null || Object.keys(e).length === 0;
}
function r_(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(n_(o) ? n : o) : t;
  return f.jsx(QE, { styles: r });
}
function F1(e, t) {
  return Xf(e, t);
}
const o_ = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function Vr(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function D1(e) {
  if (!Vr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = D1(e[n]);
    }),
    t
  );
}
function rn(e, t, n = { clone: !0 }) {
  const r = n.clone ? R({}, e) : e;
  return (
    Vr(e) &&
      Vr(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Vr(t[o]) && o in e && Vr(e[o])
            ? (r[o] = rn(e[o], t[o], n))
            : n.clone
            ? (r[o] = Vr(t[o]) ? D1(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function ee(e) {
  if (typeof e != "string") throw new Error(oo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function hu(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function Cc(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function i_(e, t) {
  return () => null;
}
function Ks(e, t) {
  var n, r;
  return (
    x.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function on(e) {
  return (e && e.ownerDocument) || document;
}
function hr(e) {
  return on(e).defaultView || window;
}
function s_(e, t) {
  return () => null;
}
function mu(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const On = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
let Qv = 0;
function a_(e) {
  const [t, n] = x.useState(e),
    r = e || t;
  return (
    x.useEffect(() => {
      t == null && ((Qv += 1), n(`mui-${Qv}`));
    }, [t]),
    r
  );
}
const Xv = fu.useId;
function za(e) {
  if (Xv !== void 0) {
    const t = Xv();
    return e ?? t;
  }
  return a_(e);
}
function l_(e, t, n, r, o) {
  return null;
}
function va({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = x.useRef(e !== void 0),
    [i, s] = x.useState(t),
    a = o ? e : i,
    l = x.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function Co(e) {
  const t = x.useRef(e);
  return (
    On(() => {
      t.current = e;
    }),
    x.useRef((...n) => (0, t.current)(...n)).current
  );
}
function gt(...e) {
  return x.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              mu(n, t);
            });
          },
    e
  );
}
const Yv = {};
function u_(e, t) {
  const n = x.useRef(Yv);
  return n.current === Yv && (n.current = e(t)), n;
}
const c_ = [];
function d_(e) {
  x.useEffect(e, c_);
}
class Rc {
  constructor() {
    (this.currentId = 0),
      (this.clear = () => {
        this.currentId !== 0 &&
          (clearTimeout(this.currentId), (this.currentId = 0));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new Rc();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = 0), n();
      }, t));
  }
}
function j1() {
  const e = u_(Rc.create).current;
  return d_(e.disposeEffect), e;
}
let wc = !0,
  Yf = !1;
const f_ = new Rc(),
  p_ = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function h_(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && p_[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function m_(e) {
  e.metaKey || e.altKey || e.ctrlKey || (wc = !0);
}
function Gd() {
  wc = !1;
}
function v_() {
  this.visibilityState === "hidden" && Yf && (wc = !0);
}
function g_(e) {
  e.addEventListener("keydown", m_, !0),
    e.addEventListener("mousedown", Gd, !0),
    e.addEventListener("pointerdown", Gd, !0),
    e.addEventListener("touchstart", Gd, !0),
    e.addEventListener("visibilitychange", v_, !0);
}
function y_(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return wc || h_(t);
}
function B1() {
  const e = x.useCallback((o) => {
      o != null && g_(o.ownerDocument);
    }, []),
    t = x.useRef(!1);
  function n() {
    return t.current
      ? ((Yf = !0),
        f_.start(100, () => {
          Yf = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return y_(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function z1(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Ih(e, t) {
  const n = R({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = R({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = R({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = Ih(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function ke(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const Jv = (e) => e,
  b_ = () => {
    let e = Jv;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Jv;
      },
    };
  },
  x_ = b_(),
  Oh = x_,
  S_ = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function Ee(e, t, n = "Mui") {
  const r = S_[t];
  return r ? `${n}-${r}` : `${Oh.generate(e)}-${t}`;
}
function _e(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Ee(e, o, n);
    }),
    r
  );
}
function C_(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const R_ = ["values", "unit", "step"],
  w_ = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => R({}, n, { [r.key]: r.val }), {})
    );
  };
function E_(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = le(e, R_),
    i = w_(t),
    s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function l(p) {
    return `@media (max-width:${
      (typeof t[p] == "number" ? t[p] : p) - r / 100
    }${n})`;
  }
  function u(p, b) {
    const m = s.indexOf(b);
    return `@media (min-width:${
      typeof t[p] == "number" ? t[p] : p
    }${n}) and (max-width:${
      (m !== -1 && typeof t[s[m]] == "number" ? t[s[m]] : b) - r / 100
    }${n})`;
  }
  function c(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function d(p) {
    const b = s.indexOf(p);
    return b === 0
      ? a(s[1])
      : b === s.length - 1
      ? l(s[b])
      : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return R(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const __ = { borderRadius: 4 },
  k_ = __;
function Gs(e, t) {
  return t ? rn(e, t, { clone: !1 }) : e;
}
const Lh = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Zv = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Lh[e]}px)`,
  };
function dn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Zv;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Zv;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Lh).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function U1(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function V1(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function T_(e, ...t) {
  const n = U1(e),
    r = [n, ...t].reduce((o, i) => rn(o, i), {});
  return V1(Object.keys(n), r);
}
function A_(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function Po({ values: e, breakpoints: t, base: n }) {
  const r = n || A_(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
        ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
        : (s[a] = e),
      s
    ),
    {}
  );
}
function Ec(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function vu(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Ec(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function yt(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Ec(l, r) || {};
      return dn(s, a, (d) => {
        let p = vu(u, o, d);
        return (
          d === p &&
            typeof d == "string" &&
            (p = vu(u, o, `${t}${d === "default" ? "" : ee(d)}`, d)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function P_(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const $_ = { m: "margin", p: "padding" },
  N_ = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  eg = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  I_ = P_((e) => {
    if (e.length > 2)
      if (eg[e]) e = eg[e];
      else return [e];
    const [t, n] = e.split(""),
      r = $_[t],
      o = N_[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Mh = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Fh = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Mh, ...Fh];
function Ua(e, t, n, r) {
  var o;
  const i = (o = Ec(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function Dh(e) {
  return Ua(e, "spacing", 8);
}
function Lo(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function O_(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Lo(t, n)), r), {});
}
function L_(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = I_(n),
    i = O_(o, r),
    s = e[n];
  return dn(e, s, i);
}
function W1(e, t) {
  const n = Dh(e.theme);
  return Object.keys(e)
    .map((r) => L_(e, t, r, n))
    .reduce(Gs, {});
}
function dt(e) {
  return W1(e, Mh);
}
dt.propTypes = {};
dt.filterProps = Mh;
function ft(e) {
  return W1(e, Fh);
}
ft.propTypes = {};
ft.filterProps = Fh;
function M_(e = 8) {
  if (e.mui) return e;
  const t = Dh({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function _c(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Gs(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function kn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Fn(e, t) {
  return yt({ prop: e, themeKey: "borders", transform: t });
}
const F_ = Fn("border", kn),
  D_ = Fn("borderTop", kn),
  j_ = Fn("borderRight", kn),
  B_ = Fn("borderBottom", kn),
  z_ = Fn("borderLeft", kn),
  U_ = Fn("borderColor"),
  V_ = Fn("borderTopColor"),
  W_ = Fn("borderRightColor"),
  H_ = Fn("borderBottomColor"),
  q_ = Fn("borderLeftColor"),
  K_ = Fn("outline", kn),
  G_ = Fn("outlineColor"),
  kc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Ua(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Lo(t, r) });
      return dn(e, e.borderRadius, n);
    }
    return null;
  };
kc.propTypes = {};
kc.filterProps = ["borderRadius"];
_c(F_, D_, j_, B_, z_, U_, V_, W_, H_, q_, kc, K_, G_);
const Tc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ua(e.theme, "spacing", 8),
      n = (r) => ({ gap: Lo(t, r) });
    return dn(e, e.gap, n);
  }
  return null;
};
Tc.propTypes = {};
Tc.filterProps = ["gap"];
const Ac = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ua(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Lo(t, r) });
    return dn(e, e.columnGap, n);
  }
  return null;
};
Ac.propTypes = {};
Ac.filterProps = ["columnGap"];
const Pc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ua(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Lo(t, r) });
    return dn(e, e.rowGap, n);
  }
  return null;
};
Pc.propTypes = {};
Pc.filterProps = ["rowGap"];
const Q_ = yt({ prop: "gridColumn" }),
  X_ = yt({ prop: "gridRow" }),
  Y_ = yt({ prop: "gridAutoFlow" }),
  J_ = yt({ prop: "gridAutoColumns" }),
  Z_ = yt({ prop: "gridAutoRows" }),
  ek = yt({ prop: "gridTemplateColumns" }),
  tk = yt({ prop: "gridTemplateRows" }),
  nk = yt({ prop: "gridTemplateAreas" }),
  rk = yt({ prop: "gridArea" });
_c(Tc, Ac, Pc, Q_, X_, Y_, J_, Z_, ek, tk, nk, rk);
function _i(e, t) {
  return t === "grey" ? t : e;
}
const ok = yt({ prop: "color", themeKey: "palette", transform: _i }),
  ik = yt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: _i,
  }),
  sk = yt({ prop: "backgroundColor", themeKey: "palette", transform: _i });
_c(ok, ik, sk);
function hn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ak = yt({ prop: "width", transform: hn }),
  jh = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Lh[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: hn(n) };
      };
      return dn(e, e.maxWidth, t);
    }
    return null;
  };
jh.filterProps = ["maxWidth"];
const lk = yt({ prop: "minWidth", transform: hn }),
  uk = yt({ prop: "height", transform: hn }),
  ck = yt({ prop: "maxHeight", transform: hn }),
  dk = yt({ prop: "minHeight", transform: hn });
yt({ prop: "size", cssProperty: "width", transform: hn });
yt({ prop: "size", cssProperty: "height", transform: hn });
const fk = yt({ prop: "boxSizing" });
_c(ak, jh, lk, uk, ck, dk, fk);
const pk = {
    border: { themeKey: "borders", transform: kn },
    borderTop: { themeKey: "borders", transform: kn },
    borderRight: { themeKey: "borders", transform: kn },
    borderBottom: { themeKey: "borders", transform: kn },
    borderLeft: { themeKey: "borders", transform: kn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: kn },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: kc },
    color: { themeKey: "palette", transform: _i },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: _i,
    },
    backgroundColor: { themeKey: "palette", transform: _i },
    p: { style: ft },
    pt: { style: ft },
    pr: { style: ft },
    pb: { style: ft },
    pl: { style: ft },
    px: { style: ft },
    py: { style: ft },
    padding: { style: ft },
    paddingTop: { style: ft },
    paddingRight: { style: ft },
    paddingBottom: { style: ft },
    paddingLeft: { style: ft },
    paddingX: { style: ft },
    paddingY: { style: ft },
    paddingInline: { style: ft },
    paddingInlineStart: { style: ft },
    paddingInlineEnd: { style: ft },
    paddingBlock: { style: ft },
    paddingBlockStart: { style: ft },
    paddingBlockEnd: { style: ft },
    m: { style: dt },
    mt: { style: dt },
    mr: { style: dt },
    mb: { style: dt },
    ml: { style: dt },
    mx: { style: dt },
    my: { style: dt },
    margin: { style: dt },
    marginTop: { style: dt },
    marginRight: { style: dt },
    marginBottom: { style: dt },
    marginLeft: { style: dt },
    marginX: { style: dt },
    marginY: { style: dt },
    marginInline: { style: dt },
    marginInlineStart: { style: dt },
    marginInlineEnd: { style: dt },
    marginBlock: { style: dt },
    marginBlockStart: { style: dt },
    marginBlockEnd: { style: dt },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Tc },
    rowGap: { style: Pc },
    columnGap: { style: Ac },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: hn },
    maxWidth: { style: jh },
    minWidth: { transform: hn },
    height: { transform: hn },
    maxHeight: { transform: hn },
    minHeight: { transform: hn },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  $c = pk;
function hk(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function mk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vk() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const p = Ec(o, u) || {};
    return d
      ? d(s)
      : dn(s, r, (m) => {
          let v = vu(p, c, m);
          return (
            m === v &&
              typeof m == "string" &&
              (v = vu(p, c, `${n}${m === "default" ? "" : ee(m)}`, m)),
            l === !1 ? v : { [l]: v }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : $c;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = U1(i.breakpoints),
        d = Object.keys(c);
      let p = c;
      return (
        Object.keys(u).forEach((b) => {
          const m = mk(u[b], i);
          if (m != null)
            if (typeof m == "object")
              if (s[b]) p = Gs(p, e(b, m, i, s));
              else {
                const v = dn({ theme: i }, m, (C) => ({ [b]: C }));
                hk(v, m) ? (p[b] = t({ sx: m, theme: i })) : (p = Gs(p, v));
              }
            else p = Gs(p, e(b, m, i, s));
        }),
        V1(d, p)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Va = vk();
Va.filterProps = ["sx"];
function gk(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const yk = ["breakpoints", "palette", "spacing", "shape"];
function Nc(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = le(e, yk),
    a = E_(n),
    l = M_(o);
  let u = rn(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: R({ mode: "light" }, r),
      spacing: l,
      shape: R({}, k_, i),
    },
    s
  );
  return (
    (u.applyStyles = gk),
    (u = t.reduce((c, d) => rn(c, d), u)),
    (u.unstable_sxConfig = R({}, $c, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Va({ sx: d, theme: this });
    }),
    u
  );
}
function bk(e) {
  return Object.keys(e).length === 0;
}
function Bh(e = null) {
  const t = x.useContext(Sc);
  return !t || bk(t) ? e : t;
}
const xk = Nc();
function Ic(e = xk) {
  return Bh(e);
}
function Sk({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Ic(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return f.jsx(r_, { styles: o });
}
const Ck = ["sx"],
  Rk = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : $c;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Oc(e) {
  const { sx: t } = e,
    n = le(e, Ck),
    { systemProps: r, otherProps: o } = Rk(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const a = t(...s);
          return Vr(a) ? R({}, r, a) : r;
        })
      : (i = R({}, r, t)),
    R({}, o, { sx: i })
  );
}
function H1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = H1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ue() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = H1(e)) && (r && (r += " "), (r += t));
  return r;
}
const wk = ["className", "component"];
function Ek(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = F1("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(Va);
  return x.forwardRef(function (l, u) {
    const c = Ic(n),
      d = Oc(l),
      { className: p, component: b = "div" } = d,
      m = le(d, wk);
    return f.jsx(
      i,
      R(
        {
          as: b,
          ref: u,
          className: ue(p, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        m
      )
    );
  });
}
const _k = ["ownerState"],
  kk = ["variants"],
  Tk = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ak(e) {
  return Object.keys(e).length === 0;
}
function Pk(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Qs(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const $k = Nc(),
  Nk = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function cl({ defaultTheme: e, theme: t, themeId: n }) {
  return Ak(t) ? e : t[n] || t;
}
function Ik(e) {
  return e ? (t, n) => n[e] : null;
}
function ql(e, t) {
  let { ownerState: n } = t,
    r = le(t, _k);
  const o = typeof e == "function" ? e(R({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => ql(i, R({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = le(o, kk);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props(R({ ownerState: n }, r)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style(R({ ownerState: n }, r))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function q1(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = $k,
      rootShouldForwardProp: r = Qs,
      slotShouldForwardProp: o = Qs,
    } = e,
    i = (s) =>
      Va(R({}, s, { theme: cl(R({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      o_(s, (E) => E.filter((_) => !(_ != null && _.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: p = Ik(Nk(u)),
        } = a,
        b = le(a, Tk),
        m = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        v = d || !1;
      let C,
        g = Qs;
      u === "Root" || u === "root"
        ? (g = r)
        : u
        ? (g = o)
        : Pk(s) && (g = void 0);
      const h = F1(s, R({ shouldForwardProp: g, label: C }, b)),
        y = (E) =>
          (typeof E == "function" && E.__emotion_real !== E) || Vr(E)
            ? (_) =>
                ql(
                  E,
                  R({}, _, {
                    theme: cl({ theme: _.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : E,
        S = (E, ..._) => {
          let w = y(E);
          const k = _ ? _.map(y) : [];
          l &&
            p &&
            k.push((U) => {
              const B = cl(R({}, U, { defaultTheme: n, themeId: t }));
              if (
                !B.components ||
                !B.components[l] ||
                !B.components[l].styleOverrides
              )
                return null;
              const F = B.components[l].styleOverrides,
                z = {};
              return (
                Object.entries(F).forEach(([V, K]) => {
                  z[V] = ql(K, R({}, U, { theme: B }));
                }),
                p(U, z)
              );
            }),
            l &&
              !m &&
              k.push((U) => {
                var B;
                const F = cl(R({}, U, { defaultTheme: n, themeId: t })),
                  z =
                    F == null ||
                    (B = F.components) == null ||
                    (B = B[l]) == null
                      ? void 0
                      : B.variants;
                return ql({ variants: z }, R({}, U, { theme: F }));
              }),
            v || k.push(i);
          const L = k.length - _.length;
          if (Array.isArray(E) && L > 0) {
            const U = new Array(L).fill("");
            (w = [...E, ...U]), (w.raw = [...E.raw, ...U]);
          }
          const P = h(w, ...k);
          return s.muiName && (P.muiName = s.muiName), P;
        };
      return h.withConfig && (S.withConfig = h.withConfig), S;
    }
  );
}
const Ok = q1();
function K1(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Ih(t.components[n].defaultProps, r);
}
function G1({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Ic(n);
  return r && (o = o[r] || o), K1({ theme: o, name: t, props: e });
}
function zh(e, t = 0, n = 1) {
  return C_(e, t, n);
}
function Lk(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Mo(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Mo(Lk(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(oo(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(oo(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Lc(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function Mk(e) {
  e = Mo(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), Lc({ type: a, values: l })
  );
}
function tg(e) {
  e = Mo(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Mo(Mk(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function Fk(e, t) {
  const n = tg(e),
    r = tg(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Fe(e, t) {
  return (
    (e = Mo(e)),
    (t = zh(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Lc(e)
  );
}
function gu(e, t) {
  if (((e = Mo(e)), (t = zh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Lc(e);
}
function yu(e, t) {
  if (((e = Mo(e)), (t = zh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Lc(e);
}
const Dk = x.createContext(null),
  Q1 = Dk;
function X1() {
  return x.useContext(Q1);
}
const jk = typeof Symbol == "function" && Symbol.for,
  Bk = jk ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function zk(e, t) {
  return typeof t == "function" ? t(e) : R({}, e, t);
}
function Uk(e) {
  const { children: t, theme: n } = e,
    r = X1(),
    o = x.useMemo(() => {
      const i = r === null ? n : zk(r, n);
      return i != null && (i[Bk] = r !== null), i;
    }, [n, r]);
  return f.jsx(Q1.Provider, { value: o, children: t });
}
const ng = {};
function rg(e, t, n, r = !1) {
  return x.useMemo(() => {
    const o = (e && t[e]) || t;
    if (typeof n == "function") {
      const i = n(o),
        s = e ? R({}, t, { [e]: i }) : i;
      return r ? () => s : s;
    }
    return e ? R({}, t, { [e]: n }) : R({}, t, n);
  }, [e, t, n, r]);
}
function Vk(e) {
  const { children: t, theme: n, themeId: r } = e,
    o = Bh(ng),
    i = X1() || ng,
    s = rg(r, o, n),
    a = rg(r, i, n, !0);
  return f.jsx(Uk, {
    theme: a,
    children: f.jsx(Sc.Provider, { value: s, children: t }),
  });
}
const Wk = [
    "component",
    "direction",
    "spacing",
    "divider",
    "children",
    "className",
    "useFlexGap",
  ],
  Hk = Nc(),
  qk = Ok("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function Kk(e) {
  return G1({ props: e, name: "MuiStack", defaultTheme: Hk });
}
function Gk(e, t) {
  const n = x.Children.toArray(e).filter(Boolean);
  return n.reduce(
    (r, o, i) => (
      r.push(o),
      i < n.length - 1 && r.push(x.cloneElement(t, { key: `separator-${i}` })),
      r
    ),
    []
  );
}
const Qk = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    }[e]),
  Xk = ({ ownerState: e, theme: t }) => {
    let n = R(
      { display: "flex", flexDirection: "column" },
      dn(
        { theme: t },
        Po({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r })
      )
    );
    if (e.spacing) {
      const r = Dh(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (l, u) => (
            ((typeof e.spacing == "object" && e.spacing[u] != null) ||
              (typeof e.direction == "object" && e.direction[u] != null)) &&
              (l[u] = !0),
            l
          ),
          {}
        ),
        i = Po({ values: e.direction, base: o }),
        s = Po({ values: e.spacing, base: o });
      typeof i == "object" &&
        Object.keys(i).forEach((l, u, c) => {
          if (!i[l]) {
            const p = u > 0 ? i[c[u - 1]] : "column";
            i[l] = p;
          }
        }),
        (n = rn(
          n,
          dn({ theme: t }, s, (l, u) =>
            e.useFlexGap
              ? { gap: Lo(r, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${Qk(u ? i[u] : e.direction)}`]: Lo(r, l),
                  },
                }
          )
        ));
    }
    return (n = T_(t.breakpoints, n)), n;
  };
function Yk(e = {}) {
  const {
      createStyledComponent: t = qk,
      useThemeProps: n = Kk,
      componentName: r = "MuiStack",
    } = e,
    o = () => ke({ root: ["root"] }, (l) => Ee(r, l), {}),
    i = t(Xk);
  return x.forwardRef(function (l, u) {
    const c = n(l),
      d = Oc(c),
      {
        component: p = "div",
        direction: b = "column",
        spacing: m = 0,
        divider: v,
        children: C,
        className: g,
        useFlexGap: h = !1,
      } = d,
      y = le(d, Wk),
      S = { direction: b, spacing: m, useFlexGap: h },
      E = o();
    return f.jsx(
      i,
      R({ as: p, ownerState: S, ref: u, className: ue(E.root, g) }, y, {
        children: v ? Gk(C, v) : C,
      })
    );
  });
}
function Jk(e, t) {
  return R(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const Zk = ["mode", "contrastThreshold", "tonalOffset"],
  og = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: fa.white, default: fa.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Qd = {
    text: {
      primary: fa.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: fa.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function ig(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = yu(e.main, o))
      : t === "dark" && (e.dark = gu(e.main, i)));
}
function eT(e = "light") {
  return e === "dark"
    ? { main: Zo[200], light: Zo[50], dark: Zo[400] }
    : { main: Zo[700], light: Zo[400], dark: Zo[800] };
}
function tT(e = "light") {
  return e === "dark"
    ? { main: Jo[200], light: Jo[50], dark: Jo[400] }
    : { main: Jo[500], light: Jo[300], dark: Jo[700] };
}
function nT(e = "light") {
  return e === "dark"
    ? { main: Yo[500], light: Yo[300], dark: Yo[700] }
    : { main: Yo[700], light: Yo[400], dark: Yo[800] };
}
function rT(e = "light") {
  return e === "dark"
    ? { main: ei[400], light: ei[300], dark: ei[700] }
    : { main: ei[700], light: ei[500], dark: ei[900] };
}
function oT(e = "light") {
  return e === "dark"
    ? { main: ti[400], light: ti[300], dark: ti[700] }
    : { main: ti[800], light: ti[500], dark: ti[900] };
}
function iT(e = "light") {
  return e === "dark"
    ? { main: ms[400], light: ms[300], dark: ms[700] }
    : { main: "#ed6c02", light: ms[500], dark: ms[900] };
}
function sT(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = le(e, Zk),
    i = e.primary || eT(t),
    s = e.secondary || tT(t),
    a = e.error || nT(t),
    l = e.info || rT(t),
    u = e.success || oT(t),
    c = e.warning || iT(t);
  function d(v) {
    return Fk(v, Qd.text.primary) >= n ? Qd.text.primary : og.text.primary;
  }
  const p = ({
      color: v,
      name: C,
      mainShade: g = 500,
      lightShade: h = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((v = R({}, v)),
        !v.main && v[g] && (v.main = v[g]),
        !v.hasOwnProperty("main"))
      )
        throw new Error(oo(11, C ? ` (${C})` : "", g));
      if (typeof v.main != "string")
        throw new Error(oo(12, C ? ` (${C})` : "", JSON.stringify(v.main)));
      return (
        ig(v, "light", h, r),
        ig(v, "dark", y, r),
        v.contrastText || (v.contrastText = d(v.main)),
        v
      );
    },
    b = { dark: Qd, light: og };
  return rn(
    R(
      {
        common: R({}, fa),
        mode: t,
        primary: p({ color: i, name: "primary" }),
        secondary: p({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: p({ color: a, name: "error" }),
        warning: p({ color: c, name: "warning" }),
        info: p({ color: l, name: "info" }),
        success: p({ color: u, name: "success" }),
        grey: eE,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: p,
        tonalOffset: r,
      },
      b[t]
    ),
    o
  );
}
const aT = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function lT(e) {
  return Math.round(e * 1e5) / 1e5;
}
const sg = { textTransform: "uppercase" },
  ag = '"Roboto", "Helvetica", "Arial", sans-serif';
function uT(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = ag,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    p = le(n, aT),
    b = o / 14,
    m = d || ((g) => `${(g / u) * b}rem`),
    v = (g, h, y, S, E) =>
      R(
        { fontFamily: r, fontWeight: g, fontSize: m(h), lineHeight: y },
        r === ag ? { letterSpacing: `${lT(S / h)}em` } : {},
        E,
        c
      ),
    C = {
      h1: v(i, 96, 1.167, -1.5),
      h2: v(i, 60, 1.2, -0.5),
      h3: v(s, 48, 1.167, 0),
      h4: v(s, 34, 1.235, 0.25),
      h5: v(s, 24, 1.334, 0),
      h6: v(a, 20, 1.6, 0.15),
      subtitle1: v(s, 16, 1.75, 0.15),
      subtitle2: v(a, 14, 1.57, 0.1),
      body1: v(s, 16, 1.5, 0.15),
      body2: v(s, 14, 1.43, 0.15),
      button: v(a, 14, 1.75, 0.4, sg),
      caption: v(s, 12, 1.66, 0.4),
      overline: v(s, 12, 2.66, 1, sg),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return rn(
    R(
      {
        htmlFontSize: u,
        pxToRem: m,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      C
    ),
    p,
    { clone: !1 }
  );
}
const cT = 0.2,
  dT = 0.14,
  fT = 0.12;
function ot(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${cT})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${dT})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${fT})`,
  ].join(",");
}
const pT = [
    "none",
    ot(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    ot(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    ot(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    ot(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    ot(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    ot(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    ot(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    ot(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    ot(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    ot(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    ot(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    ot(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    ot(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    ot(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    ot(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    ot(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    ot(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    ot(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    ot(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    ot(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    ot(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    ot(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    ot(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    ot(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  hT = ["duration", "easing", "delay"],
  mT = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  vT = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function lg(e) {
  return `${Math.round(e)}ms`;
}
function gT(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function yT(e) {
  const t = R({}, mT, e.easing),
    n = R({}, vT, e.duration);
  return R(
    {
      getAutoHeightDuration: gT,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          le(i, hT),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : lg(s)} ${a} ${
                  typeof l == "string" ? l : lg(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const bT = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  xT = bT,
  ST = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Mc(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = le(e, ST);
  if (e.vars) throw new Error(oo(18));
  const a = sT(r),
    l = Nc(e);
  let u = rn(l, {
    mixins: Jk(l.breakpoints, n),
    palette: a,
    shadows: pT.slice(),
    typography: uT(a, i),
    transitions: yT(o),
    zIndex: R({}, xT),
  });
  return (
    (u = rn(u, s)),
    (u = t.reduce((c, d) => rn(c, d), u)),
    (u.unstable_sxConfig = R({}, $c, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return Va({ sx: d, theme: this });
    }),
    u
  );
}
const CT = Mc(),
  Fc = CT;
function lo() {
  const e = Ic(Fc);
  return e[Oo] || e;
}
function Te({ props: e, name: t }) {
  return G1({ props: e, name: t, defaultTheme: Fc, themeId: Oo });
}
const Dt = (e) => Qs(e) && e !== "classes",
  RT = Qs,
  ne = q1({ themeId: Oo, defaultTheme: Fc, rootShouldForwardProp: Dt }),
  wT = ["theme"];
function ET(e) {
  let { theme: t } = e,
    n = le(e, wT);
  const r = t[Oo];
  return f.jsx(Vk, R({}, n, { themeId: r ? Oo : void 0, theme: r || t }));
}
const ug = (e) => {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    (t / 100).toFixed(2)
  );
};
function _T(e) {
  return Ee("MuiSvgIcon", e);
}
_e("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const kT = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  TT = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(n)}`],
      };
    return ke(o, _T, r);
  },
  AT = ne("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${ee(n.color)}`],
        t[`fontSize${ee(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, c, d, p, b, m;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (d =
          (p = (e.vars || e).palette) == null || (p = p[t.color]) == null
            ? void 0
            : p.main) != null
          ? d
          : {
              action:
                (b = (e.vars || e).palette) == null || (b = b.action) == null
                  ? void 0
                  : b.active,
              disabled:
                (m = (e.vars || e).palette) == null || (m = m.action) == null
                  ? void 0
                  : m.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Jf = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: p = "0 0 24 24",
      } = r,
      b = le(r, kT),
      m = x.isValidElement(o) && o.type === "svg",
      v = R({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: p,
        hasSvgAsChild: m,
      }),
      C = {};
    c || (C.viewBox = p);
    const g = TT(v);
    return f.jsxs(
      AT,
      R(
        {
          as: a,
          className: ue(g.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        C,
        b,
        m && o.props,
        {
          ownerState: v,
          children: [
            m ? o.props.children : o,
            d ? f.jsx("title", { children: d }) : null,
          ],
        }
      )
    );
  });
Jf.muiName = "SvgIcon";
function mr(e, t) {
  function n(r, o) {
    return f.jsx(
      Jf,
      R({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = Jf.muiName), x.memo(x.forwardRef(n));
}
const PT = {
    configure: (e) => {
      Oh.configure(e);
    },
  },
  $T = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: ee,
        createChainedFunction: hu,
        createSvgIcon: mr,
        debounce: Cc,
        deprecatedPropType: i_,
        isMuiElement: Ks,
        ownerDocument: on,
        ownerWindow: hr,
        requirePropFactory: s_,
        setRef: mu,
        unstable_ClassNameGenerator: PT,
        unstable_useEnhancedEffect: On,
        unstable_useId: za,
        unsupportedProp: l_,
        useControlled: va,
        useEventCallback: Co,
        useForkRef: gt,
        useIsFocusVisible: B1,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var Ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uh = Symbol.for("react.element"),
  Vh = Symbol.for("react.portal"),
  Dc = Symbol.for("react.fragment"),
  jc = Symbol.for("react.strict_mode"),
  Bc = Symbol.for("react.profiler"),
  zc = Symbol.for("react.provider"),
  Uc = Symbol.for("react.context"),
  NT = Symbol.for("react.server_context"),
  Vc = Symbol.for("react.forward_ref"),
  Wc = Symbol.for("react.suspense"),
  Hc = Symbol.for("react.suspense_list"),
  qc = Symbol.for("react.memo"),
  Kc = Symbol.for("react.lazy"),
  IT = Symbol.for("react.offscreen"),
  Y1;
Y1 = Symbol.for("react.module.reference");
function Dn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Uh:
        switch (((e = e.type), e)) {
          case Dc:
          case Bc:
          case jc:
          case Wc:
          case Hc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case NT:
              case Uc:
              case Vc:
              case Kc:
              case qc:
              case zc:
                return e;
              default:
                return t;
            }
        }
      case Vh:
        return t;
    }
  }
}
Ge.ContextConsumer = Uc;
Ge.ContextProvider = zc;
Ge.Element = Uh;
Ge.ForwardRef = Vc;
Ge.Fragment = Dc;
Ge.Lazy = Kc;
Ge.Memo = qc;
Ge.Portal = Vh;
Ge.Profiler = Bc;
Ge.StrictMode = jc;
Ge.Suspense = Wc;
Ge.SuspenseList = Hc;
Ge.isAsyncMode = function () {
  return !1;
};
Ge.isConcurrentMode = function () {
  return !1;
};
Ge.isContextConsumer = function (e) {
  return Dn(e) === Uc;
};
Ge.isContextProvider = function (e) {
  return Dn(e) === zc;
};
Ge.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Uh;
};
Ge.isForwardRef = function (e) {
  return Dn(e) === Vc;
};
Ge.isFragment = function (e) {
  return Dn(e) === Dc;
};
Ge.isLazy = function (e) {
  return Dn(e) === Kc;
};
Ge.isMemo = function (e) {
  return Dn(e) === qc;
};
Ge.isPortal = function (e) {
  return Dn(e) === Vh;
};
Ge.isProfiler = function (e) {
  return Dn(e) === Bc;
};
Ge.isStrictMode = function (e) {
  return Dn(e) === jc;
};
Ge.isSuspense = function (e) {
  return Dn(e) === Wc;
};
Ge.isSuspenseList = function (e) {
  return Dn(e) === Hc;
};
Ge.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Dc ||
    e === Bc ||
    e === jc ||
    e === Wc ||
    e === Hc ||
    e === IT ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Kc ||
        e.$$typeof === qc ||
        e.$$typeof === zc ||
        e.$$typeof === Uc ||
        e.$$typeof === Vc ||
        e.$$typeof === Y1 ||
        e.getModuleId !== void 0))
  );
};
Ge.typeOf = Dn;
function Zf(e, t) {
  return (
    (Zf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Zf(e, t)
  );
}
function J1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Zf(e, t);
}
var Z1 = { exports: {} },
  Sn = {},
  eb = { exports: {} },
  tb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, O) {
    var D = N.length;
    N.push(O);
    e: for (; 0 < D; ) {
      var X = (D - 1) >>> 1,
        A = N[X];
      if (0 < o(A, O)) (N[X] = O), (N[D] = A), (D = X);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      D = N.pop();
    if (D !== O) {
      N[0] = D;
      e: for (var X = 0, A = N.length, H = A >>> 1; X < H; ) {
        var W = 2 * (X + 1) - 1,
          se = N[W],
          Y = W + 1,
          ve = N[Y];
        if (0 > o(se, D))
          Y < A && 0 > o(ve, se)
            ? ((N[X] = ve), (N[Y] = D), (X = Y))
            : ((N[X] = se), (N[W] = D), (X = W));
        else if (Y < A && 0 > o(ve, D)) (N[X] = ve), (N[Y] = D), (X = Y);
        else break e;
      }
    }
    return O;
  }
  function o(N, O) {
    var D = N.sortIndex - O.sortIndex;
    return D !== 0 ? D : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    p = 3,
    b = !1,
    m = !1,
    v = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(N) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= N)
        r(u), (O.sortIndex = O.expirationTime), t(l, O);
      else break;
      O = n(u);
    }
  }
  function S(N) {
    if (((v = !1), y(N), !m))
      if (n(l) !== null) (m = !0), K(E);
      else {
        var O = n(u);
        O !== null && G(S, O.startTime - N);
      }
  }
  function E(N, O) {
    (m = !1), v && ((v = !1), g(k), (k = -1)), (b = !0);
    var D = p;
    try {
      for (
        y(O), d = n(l);
        d !== null && (!(d.expirationTime > O) || (N && !U()));

      ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var A = X(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof A == "function" ? (d.callback = A) : d === n(l) && r(l),
            y(O);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var H = !0;
      else {
        var W = n(u);
        W !== null && G(S, W.startTime - O), (H = !1);
      }
      return H;
    } finally {
      (d = null), (p = D), (b = !1);
    }
  }
  var _ = !1,
    w = null,
    k = -1,
    L = 5,
    P = -1;
  function U() {
    return !(e.unstable_now() - P < L);
  }
  function B() {
    if (w !== null) {
      var N = e.unstable_now();
      P = N;
      var O = !0;
      try {
        O = w(!0, N);
      } finally {
        O ? F() : ((_ = !1), (w = null));
      }
    } else _ = !1;
  }
  var F;
  if (typeof h == "function")
    F = function () {
      h(B);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      V = z.port2;
    (z.port1.onmessage = B),
      (F = function () {
        V.postMessage(null);
      });
  } else
    F = function () {
      C(B, 0);
    };
  function K(N) {
    (w = N), _ || ((_ = !0), F());
  }
  function G(N, O) {
    k = C(function () {
      N(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || b || ((m = !0), K(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = p;
      }
      var D = p;
      p = O;
      try {
        return N();
      } finally {
        p = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = p;
      p = N;
      try {
        return O();
      } finally {
        p = D;
      }
    }),
    (e.unstable_scheduleCallback = function (N, O, D) {
      var X = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? X + D : X))
          : (D = X),
        N)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = D + A),
        (N = {
          id: c++,
          callback: O,
          priorityLevel: N,
          startTime: D,
          expirationTime: A,
          sortIndex: -1,
        }),
        D > X
          ? ((N.sortIndex = D),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (v ? (g(k), (k = -1)) : (v = !0), G(S, D - X)))
          : ((N.sortIndex = A), t(l, N), m || b || ((m = !0), K(E))),
        N
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (N) {
      var O = p;
      return function () {
        var D = p;
        p = O;
        try {
          return N.apply(this, arguments);
        } finally {
          p = D;
        }
      };
    });
})(tb);
eb.exports = tb;
var OT = eb.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nb = x,
  bn = OT;
function te(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var rb = new Set(),
  ga = {};
function Wo(e, t) {
  Mi(e, t), Mi(e + "Capture", t);
}
function Mi(e, t) {
  for (ga[e] = t, e = 0; e < t.length; e++) rb.add(t[e]);
}
var Tr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ep = Object.prototype.hasOwnProperty,
  LT =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  cg = {},
  dg = {};
function MT(e) {
  return ep.call(dg, e)
    ? !0
    : ep.call(cg, e)
    ? !1
    : LT.test(e)
    ? (dg[e] = !0)
    : ((cg[e] = !0), !1);
}
function FT(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function DT(e, t, n, r) {
  if (t === null || typeof t > "u" || FT(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Jt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ft[e] = new Jt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ft[t] = new Jt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ft[e] = new Jt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ft[e] = new Jt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ft[e] = new Jt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ft[e] = new Jt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ft[e] = new Jt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ft[e] = new Jt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ft[e] = new Jt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wh = /[\-:]([a-z])/g;
function Hh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wh, Hh);
    Ft[t] = new Jt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wh, Hh);
    Ft[t] = new Jt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wh, Hh);
  Ft[t] = new Jt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ft[e] = new Jt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ft.xlinkHref = new Jt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ft[e] = new Jt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qh(e, t, n, r) {
  var o = Ft.hasOwnProperty(t) ? Ft[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (DT(t, n, o, r) && (n = null),
    r || o === null
      ? MT(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nr = nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dl = Symbol.for("react.element"),
  fi = Symbol.for("react.portal"),
  pi = Symbol.for("react.fragment"),
  Kh = Symbol.for("react.strict_mode"),
  tp = Symbol.for("react.profiler"),
  ob = Symbol.for("react.provider"),
  ib = Symbol.for("react.context"),
  Gh = Symbol.for("react.forward_ref"),
  np = Symbol.for("react.suspense"),
  rp = Symbol.for("react.suspense_list"),
  Qh = Symbol.for("react.memo"),
  jr = Symbol.for("react.lazy"),
  sb = Symbol.for("react.offscreen"),
  fg = Symbol.iterator;
function gs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fg && e[fg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ut = Object.assign,
  Xd;
function Ds(e) {
  if (Xd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xd = (t && t[1]) || "";
    }
  return (
    `
` +
    Xd +
    e
  );
}
var Yd = !1;
function Jd(e, t) {
  if (!e || Yd) return "";
  Yd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Yd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ds(e) : "";
}
function jT(e) {
  switch (e.tag) {
    case 5:
      return Ds(e.type);
    case 16:
      return Ds("Lazy");
    case 13:
      return Ds("Suspense");
    case 19:
      return Ds("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jd(e.type, !1)), e;
    case 11:
      return (e = Jd(e.type.render, !1)), e;
    case 1:
      return (e = Jd(e.type, !0)), e;
    default:
      return "";
  }
}
function op(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pi:
      return "Fragment";
    case fi:
      return "Portal";
    case tp:
      return "Profiler";
    case Kh:
      return "StrictMode";
    case np:
      return "Suspense";
    case rp:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ib:
        return (e.displayName || "Context") + ".Consumer";
      case ob:
        return (e._context.displayName || "Context") + ".Provider";
      case Gh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qh:
        return (
          (t = e.displayName || null), t !== null ? t : op(e.type) || "Memo"
        );
      case jr:
        (t = e._payload), (e = e._init);
        try {
          return op(e(t));
        } catch {}
    }
  return null;
}
function BT(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return op(t);
    case 8:
      return t === Kh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function io(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ab(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zT(e) {
  var t = ab(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fl(e) {
  e._valueTracker || (e._valueTracker = zT(e));
}
function lb(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ab(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ip(e, t) {
  var n = t.checked;
  return ut({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function pg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = io(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ub(e, t) {
  (t = t.checked), t != null && qh(e, "checked", t, !1);
}
function sp(e, t) {
  ub(e, t);
  var n = io(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ap(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ap(e, t.type, io(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function hg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ap(e, t, n) {
  (t !== "number" || bu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var js = Array.isArray;
function ki(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + io(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function lp(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(te(91));
  return ut({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function mg(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(te(92));
      if (js(n)) {
        if (1 < n.length) throw Error(te(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: io(n) };
}
function cb(e, t) {
  var n = io(t.value),
    r = io(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function db(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function up(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? db(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var pl,
  fb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        pl = pl || document.createElement("div"),
          pl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = pl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ya(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  UT = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xs).forEach(function (e) {
  UT.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xs[t] = Xs[e]);
  });
});
function pb(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xs.hasOwnProperty(e) && Xs[e])
    ? ("" + t).trim()
    : t + "px";
}
function hb(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = pb(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var VT = ut(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function cp(e, t) {
  if (t) {
    if (VT[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(te(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(te(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(te(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(te(62));
  }
}
function dp(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fp = null;
function Xh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pp = null,
  Ti = null,
  Ai = null;
function gg(e) {
  if ((e = qa(e))) {
    if (typeof pp != "function") throw Error(te(280));
    var t = e.stateNode;
    t && ((t = Jc(t)), pp(e.stateNode, e.type, t));
  }
}
function mb(e) {
  Ti ? (Ai ? Ai.push(e) : (Ai = [e])) : (Ti = e);
}
function vb() {
  if (Ti) {
    var e = Ti,
      t = Ai;
    if (((Ai = Ti = null), gg(e), t)) for (e = 0; e < t.length; e++) gg(t[e]);
  }
}
function gb(e, t) {
  return e(t);
}
function yb() {}
var Zd = !1;
function bb(e, t, n) {
  if (Zd) return e(t, n);
  Zd = !0;
  try {
    return gb(e, t, n);
  } finally {
    (Zd = !1), (Ti !== null || Ai !== null) && (yb(), vb());
  }
}
function ba(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Jc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(te(231, t, typeof n));
  return n;
}
var hp = !1;
if (Tr)
  try {
    var ys = {};
    Object.defineProperty(ys, "passive", {
      get: function () {
        hp = !0;
      },
    }),
      window.addEventListener("test", ys, ys),
      window.removeEventListener("test", ys, ys);
  } catch {
    hp = !1;
  }
function WT(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ys = !1,
  xu = null,
  Su = !1,
  mp = null,
  HT = {
    onError: function (e) {
      (Ys = !0), (xu = e);
    },
  };
function qT(e, t, n, r, o, i, s, a, l) {
  (Ys = !1), (xu = null), WT.apply(HT, arguments);
}
function KT(e, t, n, r, o, i, s, a, l) {
  if ((qT.apply(this, arguments), Ys)) {
    if (Ys) {
      var u = xu;
      (Ys = !1), (xu = null);
    } else throw Error(te(198));
    Su || ((Su = !0), (mp = u));
  }
}
function Ho(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yg(e) {
  if (Ho(e) !== e) throw Error(te(188));
}
function GT(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ho(e)), t === null)) throw Error(te(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return yg(o), e;
        if (i === r) return yg(o), t;
        i = i.sibling;
      }
      throw Error(te(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(te(189));
      }
    }
    if (n.alternate !== r) throw Error(te(190));
  }
  if (n.tag !== 3) throw Error(te(188));
  return n.stateNode.current === n ? e : t;
}
function Sb(e) {
  return (e = GT(e)), e !== null ? Cb(e) : null;
}
function Cb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rb = bn.unstable_scheduleCallback,
  bg = bn.unstable_cancelCallback,
  QT = bn.unstable_shouldYield,
  XT = bn.unstable_requestPaint,
  vt = bn.unstable_now,
  YT = bn.unstable_getCurrentPriorityLevel,
  Yh = bn.unstable_ImmediatePriority,
  wb = bn.unstable_UserBlockingPriority,
  Cu = bn.unstable_NormalPriority,
  JT = bn.unstable_LowPriority,
  Eb = bn.unstable_IdlePriority,
  Gc = null,
  fr = null;
function ZT(e) {
  if (fr && typeof fr.onCommitFiberRoot == "function")
    try {
      fr.onCommitFiberRoot(Gc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xn = Math.clz32 ? Math.clz32 : n2,
  e2 = Math.log,
  t2 = Math.LN2;
function n2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((e2(e) / t2) | 0)) | 0;
}
var hl = 64,
  ml = 4194304;
function Bs(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ru(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Bs(a)) : ((i &= s), i !== 0 && (r = Bs(i)));
  } else (s = n & ~o), s !== 0 ? (r = Bs(s)) : i !== 0 && (r = Bs(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function r2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function o2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Xn(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = r2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function vp(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _b() {
  var e = hl;
  return (hl <<= 1), !(hl & 4194240) && (hl = 64), e;
}
function ef(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xn(t)),
    (e[t] = n);
}
function i2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Xn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Jh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var qe = 0;
function kb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Tb,
  Zh,
  Ab,
  Pb,
  $b,
  gp = !1,
  vl = [],
  Xr = null,
  Yr = null,
  Jr = null,
  xa = new Map(),
  Sa = new Map(),
  Wr = [],
  s2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Xr = null;
      break;
    case "dragenter":
    case "dragleave":
      Yr = null;
      break;
    case "mouseover":
    case "mouseout":
      Jr = null;
      break;
    case "pointerover":
    case "pointerout":
      xa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Sa.delete(t.pointerId);
  }
}
function bs(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = qa(t)), t !== null && Zh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function a2(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Xr = bs(Xr, e, t, n, r, o)), !0;
    case "dragenter":
      return (Yr = bs(Yr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Jr = bs(Jr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return xa.set(i, bs(xa.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Sa.set(i, bs(Sa.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Nb(e) {
  var t = Ro(e.target);
  if (t !== null) {
    var n = Ho(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xb(n)), t !== null)) {
          (e.blockedOn = t),
            $b(e.priority, function () {
              Ab(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Kl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fp = r), n.target.dispatchEvent(r), (fp = null);
    } else return (t = qa(n)), t !== null && Zh(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Sg(e, t, n) {
  Kl(e) && n.delete(t);
}
function l2() {
  (gp = !1),
    Xr !== null && Kl(Xr) && (Xr = null),
    Yr !== null && Kl(Yr) && (Yr = null),
    Jr !== null && Kl(Jr) && (Jr = null),
    xa.forEach(Sg),
    Sa.forEach(Sg);
}
function xs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gp ||
      ((gp = !0),
      bn.unstable_scheduleCallback(bn.unstable_NormalPriority, l2)));
}
function Ca(e) {
  function t(o) {
    return xs(o, e);
  }
  if (0 < vl.length) {
    xs(vl[0], e);
    for (var n = 1; n < vl.length; n++) {
      var r = vl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Xr !== null && xs(Xr, e),
      Yr !== null && xs(Yr, e),
      Jr !== null && xs(Jr, e),
      xa.forEach(t),
      Sa.forEach(t),
      n = 0;
    n < Wr.length;
    n++
  )
    (r = Wr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wr.length && ((n = Wr[0]), n.blockedOn === null); )
    Nb(n), n.blockedOn === null && Wr.shift();
}
var Pi = Nr.ReactCurrentBatchConfig,
  wu = !0;
function u2(e, t, n, r) {
  var o = qe,
    i = Pi.transition;
  Pi.transition = null;
  try {
    (qe = 1), em(e, t, n, r);
  } finally {
    (qe = o), (Pi.transition = i);
  }
}
function c2(e, t, n, r) {
  var o = qe,
    i = Pi.transition;
  Pi.transition = null;
  try {
    (qe = 4), em(e, t, n, r);
  } finally {
    (qe = o), (Pi.transition = i);
  }
}
function em(e, t, n, r) {
  if (wu) {
    var o = yp(e, t, n, r);
    if (o === null) df(e, t, r, Eu, n), xg(e, r);
    else if (a2(o, e, t, n, r)) r.stopPropagation();
    else if ((xg(e, r), t & 4 && -1 < s2.indexOf(e))) {
      for (; o !== null; ) {
        var i = qa(o);
        if (
          (i !== null && Tb(i),
          (i = yp(e, t, n, r)),
          i === null && df(e, t, r, Eu, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else df(e, t, r, null, n);
  }
}
var Eu = null;
function yp(e, t, n, r) {
  if (((Eu = null), (e = Xh(r)), (e = Ro(e)), e !== null))
    if (((t = Ho(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Eu = e), null;
}
function Ib(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (YT()) {
        case Yh:
          return 1;
        case wb:
          return 4;
        case Cu:
        case JT:
          return 16;
        case Eb:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qr = null,
  tm = null,
  Gl = null;
function Ob() {
  if (Gl) return Gl;
  var e,
    t = tm,
    n = t.length,
    r,
    o = "value" in qr ? qr.value : qr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Gl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ql(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function gl() {
  return !0;
}
function Cg() {
  return !1;
}
function Cn(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? gl
        : Cg),
      (this.isPropagationStopped = Cg),
      this
    );
  }
  return (
    ut(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = gl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = gl));
      },
      persist: function () {},
      isPersistent: gl,
    }),
    t
  );
}
var rs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nm = Cn(rs),
  Ha = ut({}, rs, { view: 0, detail: 0 }),
  d2 = Cn(Ha),
  tf,
  nf,
  Ss,
  Qc = ut({}, Ha, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rm,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ss &&
            (Ss && e.type === "mousemove"
              ? ((tf = e.screenX - Ss.screenX), (nf = e.screenY - Ss.screenY))
              : (nf = tf = 0),
            (Ss = e)),
          tf);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : nf;
    },
  }),
  Rg = Cn(Qc),
  f2 = ut({}, Qc, { dataTransfer: 0 }),
  p2 = Cn(f2),
  h2 = ut({}, Ha, { relatedTarget: 0 }),
  rf = Cn(h2),
  m2 = ut({}, rs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  v2 = Cn(m2),
  g2 = ut({}, rs, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  y2 = Cn(g2),
  b2 = ut({}, rs, { data: 0 }),
  wg = Cn(b2),
  x2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  S2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  C2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function R2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = C2[e]) ? !!t[e] : !1;
}
function rm() {
  return R2;
}
var w2 = ut({}, Ha, {
    key: function (e) {
      if (e.key) {
        var t = x2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ql(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? S2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rm,
    charCode: function (e) {
      return e.type === "keypress" ? Ql(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ql(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  E2 = Cn(w2),
  _2 = ut({}, Qc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Eg = Cn(_2),
  k2 = ut({}, Ha, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rm,
  }),
  T2 = Cn(k2),
  A2 = ut({}, rs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  P2 = Cn(A2),
  $2 = ut({}, Qc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  N2 = Cn($2),
  I2 = [9, 13, 27, 32],
  om = Tr && "CompositionEvent" in window,
  Js = null;
Tr && "documentMode" in document && (Js = document.documentMode);
var O2 = Tr && "TextEvent" in window && !Js,
  Lb = Tr && (!om || (Js && 8 < Js && 11 >= Js)),
  _g = " ",
  kg = !1;
function Mb(e, t) {
  switch (e) {
    case "keyup":
      return I2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Fb(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var hi = !1;
function L2(e, t) {
  switch (e) {
    case "compositionend":
      return Fb(t);
    case "keypress":
      return t.which !== 32 ? null : ((kg = !0), _g);
    case "textInput":
      return (e = t.data), e === _g && kg ? null : e;
    default:
      return null;
  }
}
function M2(e, t) {
  if (hi)
    return e === "compositionend" || (!om && Mb(e, t))
      ? ((e = Ob()), (Gl = tm = qr = null), (hi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var F2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Tg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!F2[e.type] : t === "textarea";
}
function Db(e, t, n, r) {
  mb(r),
    (t = _u(t, "onChange")),
    0 < t.length &&
      ((n = new nm("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Zs = null,
  Ra = null;
function D2(e) {
  Qb(e, 0);
}
function Xc(e) {
  var t = gi(e);
  if (lb(t)) return e;
}
function j2(e, t) {
  if (e === "change") return t;
}
var jb = !1;
if (Tr) {
  var of;
  if (Tr) {
    var sf = "oninput" in document;
    if (!sf) {
      var Ag = document.createElement("div");
      Ag.setAttribute("oninput", "return;"),
        (sf = typeof Ag.oninput == "function");
    }
    of = sf;
  } else of = !1;
  jb = of && (!document.documentMode || 9 < document.documentMode);
}
function Pg() {
  Zs && (Zs.detachEvent("onpropertychange", Bb), (Ra = Zs = null));
}
function Bb(e) {
  if (e.propertyName === "value" && Xc(Ra)) {
    var t = [];
    Db(t, Ra, e, Xh(e)), bb(D2, t);
  }
}
function B2(e, t, n) {
  e === "focusin"
    ? (Pg(), (Zs = t), (Ra = n), Zs.attachEvent("onpropertychange", Bb))
    : e === "focusout" && Pg();
}
function z2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xc(Ra);
}
function U2(e, t) {
  if (e === "click") return Xc(t);
}
function V2(e, t) {
  if (e === "input" || e === "change") return Xc(t);
}
function W2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Zn = typeof Object.is == "function" ? Object.is : W2;
function wa(e, t) {
  if (Zn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ep.call(t, o) || !Zn(e[o], t[o])) return !1;
  }
  return !0;
}
function $g(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ng(e, t) {
  var n = $g(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $g(n);
  }
}
function zb(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zb(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ub() {
  for (var e = window, t = bu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bu(e.document);
  }
  return t;
}
function im(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function H2(e) {
  var t = Ub(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zb(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && im(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ng(n, i));
        var s = Ng(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var q2 = Tr && "documentMode" in document && 11 >= document.documentMode,
  mi = null,
  bp = null,
  ea = null,
  xp = !1;
function Ig(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xp ||
    mi == null ||
    mi !== bu(r) ||
    ((r = mi),
    "selectionStart" in r && im(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ea && wa(ea, r)) ||
      ((ea = r),
      (r = _u(bp, "onSelect")),
      0 < r.length &&
        ((t = new nm("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mi))));
}
function yl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vi = {
    animationend: yl("Animation", "AnimationEnd"),
    animationiteration: yl("Animation", "AnimationIteration"),
    animationstart: yl("Animation", "AnimationStart"),
    transitionend: yl("Transition", "TransitionEnd"),
  },
  af = {},
  Vb = {};
Tr &&
  ((Vb = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vi.animationend.animation,
    delete vi.animationiteration.animation,
    delete vi.animationstart.animation),
  "TransitionEvent" in window || delete vi.transitionend.transition);
function Yc(e) {
  if (af[e]) return af[e];
  if (!vi[e]) return e;
  var t = vi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vb) return (af[e] = t[n]);
  return e;
}
var Wb = Yc("animationend"),
  Hb = Yc("animationiteration"),
  qb = Yc("animationstart"),
  Kb = Yc("transitionend"),
  Gb = new Map(),
  Og =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function uo(e, t) {
  Gb.set(e, t), Wo(t, [e]);
}
for (var lf = 0; lf < Og.length; lf++) {
  var uf = Og[lf],
    K2 = uf.toLowerCase(),
    G2 = uf[0].toUpperCase() + uf.slice(1);
  uo(K2, "on" + G2);
}
uo(Wb, "onAnimationEnd");
uo(Hb, "onAnimationIteration");
uo(qb, "onAnimationStart");
uo("dblclick", "onDoubleClick");
uo("focusin", "onFocus");
uo("focusout", "onBlur");
uo(Kb, "onTransitionEnd");
Mi("onMouseEnter", ["mouseout", "mouseover"]);
Mi("onMouseLeave", ["mouseout", "mouseover"]);
Mi("onPointerEnter", ["pointerout", "pointerover"]);
Mi("onPointerLeave", ["pointerout", "pointerover"]);
Wo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Q2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));
function Lg(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), KT(r, t, void 0, e), (e.currentTarget = null);
}
function Qb(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Lg(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Lg(o, a, u), (i = l);
        }
    }
  }
  if (Su) throw ((e = mp), (Su = !1), (mp = null), e);
}
function et(e, t) {
  var n = t[Ep];
  n === void 0 && (n = t[Ep] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xb(t, e, 2, !1), n.add(r));
}
function cf(e, t, n) {
  var r = 0;
  t && (r |= 4), Xb(n, e, r, t);
}
var bl = "_reactListening" + Math.random().toString(36).slice(2);
function Ea(e) {
  if (!e[bl]) {
    (e[bl] = !0),
      rb.forEach(function (n) {
        n !== "selectionchange" && (Q2.has(n) || cf(n, !1, e), cf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[bl] || ((t[bl] = !0), cf("selectionchange", !1, t));
  }
}
function Xb(e, t, n, r) {
  switch (Ib(t)) {
    case 1:
      var o = u2;
      break;
    case 4:
      o = c2;
      break;
    default:
      o = em;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !hp ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function df(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Ro(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  bb(function () {
    var u = i,
      c = Xh(n),
      d = [];
    e: {
      var p = Gb.get(e);
      if (p !== void 0) {
        var b = nm,
          m = e;
        switch (e) {
          case "keypress":
            if (Ql(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = E2;
            break;
          case "focusin":
            (m = "focus"), (b = rf);
            break;
          case "focusout":
            (m = "blur"), (b = rf);
            break;
          case "beforeblur":
          case "afterblur":
            b = rf;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Rg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = p2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = T2;
            break;
          case Wb:
          case Hb:
          case qb:
            b = v2;
            break;
          case Kb:
            b = P2;
            break;
          case "scroll":
            b = d2;
            break;
          case "wheel":
            b = N2;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = y2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Eg;
        }
        var v = (t & 4) !== 0,
          C = !v && e === "scroll",
          g = v ? (p !== null ? p + "Capture" : null) : p;
        v = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              g !== null && ((S = ba(h, g)), S != null && v.push(_a(h, S, y)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((p = new b(p, m, null, n, c)), d.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          p &&
            n !== fp &&
            (m = n.relatedTarget || n.fromElement) &&
            (Ro(m) || m[Ar]))
        )
          break e;
        if (
          (b || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          b
            ? ((m = n.relatedTarget || n.toElement),
              (b = u),
              (m = m ? Ro(m) : null),
              m !== null &&
                ((C = Ho(m)), m !== C || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((b = null), (m = u)),
          b !== m)
        ) {
          if (
            ((v = Rg),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Eg),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (C = b == null ? p : gi(b)),
            (y = m == null ? p : gi(m)),
            (p = new v(S, h + "leave", b, n, c)),
            (p.target = C),
            (p.relatedTarget = y),
            (S = null),
            Ro(c) === u &&
              ((v = new v(g, h + "enter", m, n, c)),
              (v.target = y),
              (v.relatedTarget = C),
              (S = v)),
            (C = S),
            b && m)
          )
            t: {
              for (v = b, g = m, h = 0, y = v; y; y = ni(y)) h++;
              for (y = 0, S = g; S; S = ni(S)) y++;
              for (; 0 < h - y; ) (v = ni(v)), h--;
              for (; 0 < y - h; ) (g = ni(g)), y--;
              for (; h--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = ni(v)), (g = ni(g));
              }
              v = null;
            }
          else v = null;
          b !== null && Mg(d, p, b, v, !1),
            m !== null && C !== null && Mg(d, C, m, v, !0);
        }
      }
      e: {
        if (
          ((p = u ? gi(u) : window),
          (b = p.nodeName && p.nodeName.toLowerCase()),
          b === "select" || (b === "input" && p.type === "file"))
        )
          var E = j2;
        else if (Tg(p))
          if (jb) E = V2;
          else {
            E = z2;
            var _ = B2;
          }
        else
          (b = p.nodeName) &&
            b.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = U2);
        if (E && (E = E(e, u))) {
          Db(d, E, n, c);
          break e;
        }
        _ && _(e, p, u),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            ap(p, "number", p.value);
      }
      switch (((_ = u ? gi(u) : window), e)) {
        case "focusin":
          (Tg(_) || _.contentEditable === "true") &&
            ((mi = _), (bp = u), (ea = null));
          break;
        case "focusout":
          ea = bp = mi = null;
          break;
        case "mousedown":
          xp = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xp = !1), Ig(d, n, c);
          break;
        case "selectionchange":
          if (q2) break;
        case "keydown":
        case "keyup":
          Ig(d, n, c);
      }
      var w;
      if (om)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        hi
          ? Mb(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Lb &&
          n.locale !== "ko" &&
          (hi || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && hi && (w = Ob())
            : ((qr = c),
              (tm = "value" in qr ? qr.value : qr.textContent),
              (hi = !0))),
        (_ = _u(u, k)),
        0 < _.length &&
          ((k = new wg(k, e, null, n, c)),
          d.push({ event: k, listeners: _ }),
          w ? (k.data = w) : ((w = Fb(n)), w !== null && (k.data = w)))),
        (w = O2 ? L2(e, n) : M2(e, n)) &&
          ((u = _u(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new wg("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = w)));
    }
    Qb(d, t);
  });
}
function _a(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _u(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ba(e, n)),
      i != null && r.unshift(_a(e, i, o)),
      (i = ba(e, t)),
      i != null && r.push(_a(e, i, o))),
      (e = e.return);
  }
  return r;
}
function ni(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mg(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = ba(n, i)), l != null && s.unshift(_a(n, l, a)))
        : o || ((l = ba(n, i)), l != null && s.push(_a(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var X2 = /\r\n?/g,
  Y2 = /\u0000|\uFFFD/g;
function Fg(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      X2,
      `
`
    )
    .replace(Y2, "");
}
function xl(e, t, n) {
  if (((t = Fg(t)), Fg(e) !== t && n)) throw Error(te(425));
}
function ku() {}
var Sp = null,
  Cp = null;
function Rp(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wp = typeof setTimeout == "function" ? setTimeout : void 0,
  J2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Dg = typeof Promise == "function" ? Promise : void 0,
  Z2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Dg < "u"
      ? function (e) {
          return Dg.resolve(null).then(e).catch(eA);
        }
      : wp;
function eA(e) {
  setTimeout(function () {
    throw e;
  });
}
function ff(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ca(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ca(t);
}
function Zr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function jg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var os = Math.random().toString(36).slice(2),
  lr = "__reactFiber$" + os,
  ka = "__reactProps$" + os,
  Ar = "__reactContainer$" + os,
  Ep = "__reactEvents$" + os,
  tA = "__reactListeners$" + os,
  nA = "__reactHandles$" + os;
function Ro(e) {
  var t = e[lr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ar] || n[lr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = jg(e); e !== null; ) {
          if ((n = e[lr])) return n;
          e = jg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qa(e) {
  return (
    (e = e[lr] || e[Ar]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(te(33));
}
function Jc(e) {
  return e[ka] || null;
}
var _p = [],
  yi = -1;
function co(e) {
  return { current: e };
}
function nt(e) {
  0 > yi || ((e.current = _p[yi]), (_p[yi] = null), yi--);
}
function Je(e, t) {
  yi++, (_p[yi] = e.current), (e.current = t);
}
var so = {},
  Wt = co(so),
  sn = co(!1),
  Fo = so;
function Fi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return so;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function an(e) {
  return (e = e.childContextTypes), e != null;
}
function Tu() {
  nt(sn), nt(Wt);
}
function Bg(e, t, n) {
  if (Wt.current !== so) throw Error(te(168));
  Je(Wt, t), Je(sn, n);
}
function Yb(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(te(108, BT(e) || "Unknown", o));
  return ut({}, n, r);
}
function Au(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || so),
    (Fo = Wt.current),
    Je(Wt, e),
    Je(sn, sn.current),
    !0
  );
}
function zg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(te(169));
  n
    ? ((e = Yb(e, t, Fo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      nt(sn),
      nt(Wt),
      Je(Wt, e))
    : nt(sn),
    Je(sn, n);
}
var Cr = null,
  Zc = !1,
  pf = !1;
function Jb(e) {
  Cr === null ? (Cr = [e]) : Cr.push(e);
}
function rA(e) {
  (Zc = !0), Jb(e);
}
function fo() {
  if (!pf && Cr !== null) {
    pf = !0;
    var e = 0,
      t = qe;
    try {
      var n = Cr;
      for (qe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Cr = null), (Zc = !1);
    } catch (o) {
      throw (Cr !== null && (Cr = Cr.slice(e + 1)), Rb(Yh, fo), o);
    } finally {
      (qe = t), (pf = !1);
    }
  }
  return null;
}
var bi = [],
  xi = 0,
  Pu = null,
  $u = 0,
  Tn = [],
  An = 0,
  Do = null,
  Rr = 1,
  wr = "";
function go(e, t) {
  (bi[xi++] = $u), (bi[xi++] = Pu), (Pu = e), ($u = t);
}
function Zb(e, t, n) {
  (Tn[An++] = Rr), (Tn[An++] = wr), (Tn[An++] = Do), (Do = e);
  var r = Rr;
  e = wr;
  var o = 32 - Xn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Xn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Rr = (1 << (32 - Xn(t) + o)) | (n << o) | r),
      (wr = i + e);
  } else (Rr = (1 << i) | (n << o) | r), (wr = e);
}
function sm(e) {
  e.return !== null && (go(e, 1), Zb(e, 1, 0));
}
function am(e) {
  for (; e === Pu; )
    (Pu = bi[--xi]), (bi[xi] = null), ($u = bi[--xi]), (bi[xi] = null);
  for (; e === Do; )
    (Do = Tn[--An]),
      (Tn[An] = null),
      (wr = Tn[--An]),
      (Tn[An] = null),
      (Rr = Tn[--An]),
      (Tn[An] = null);
}
var gn = null,
  mn = null,
  it = !1,
  Kn = null;
function ex(e, t) {
  var n = $n(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ug(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gn = e), (mn = Zr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gn = e), (mn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Do !== null ? { id: Rr, overflow: wr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $n(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (gn = e),
            (mn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function kp(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tp(e) {
  if (it) {
    var t = mn;
    if (t) {
      var n = t;
      if (!Ug(e, t)) {
        if (kp(e)) throw Error(te(418));
        t = Zr(n.nextSibling);
        var r = gn;
        t && Ug(e, t)
          ? ex(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (it = !1), (gn = e));
      }
    } else {
      if (kp(e)) throw Error(te(418));
      (e.flags = (e.flags & -4097) | 2), (it = !1), (gn = e);
    }
  }
}
function Vg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gn = e;
}
function Sl(e) {
  if (e !== gn) return !1;
  if (!it) return Vg(e), (it = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Rp(e.type, e.memoizedProps))),
    t && (t = mn))
  ) {
    if (kp(e)) throw (tx(), Error(te(418)));
    for (; t; ) ex(e, t), (t = Zr(t.nextSibling));
  }
  if ((Vg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(te(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              mn = Zr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      mn = null;
    }
  } else mn = gn ? Zr(e.stateNode.nextSibling) : null;
  return !0;
}
function tx() {
  for (var e = mn; e; ) e = Zr(e.nextSibling);
}
function Di() {
  (mn = gn = null), (it = !1);
}
function lm(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e);
}
var oA = Nr.ReactCurrentBatchConfig;
function Hn(e, t) {
  if (e && e.defaultProps) {
    (t = ut({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Nu = co(null),
  Iu = null,
  Si = null,
  um = null;
function cm() {
  um = Si = Iu = null;
}
function dm(e) {
  var t = Nu.current;
  nt(Nu), (e._currentValue = t);
}
function Ap(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $i(e, t) {
  (Iu = e),
    (um = Si = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (nn = !0), (e.firstContext = null));
}
function Ln(e) {
  var t = e._currentValue;
  if (um !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Si === null)) {
      if (Iu === null) throw Error(te(308));
      (Si = e), (Iu.dependencies = { lanes: 0, firstContext: e });
    } else Si = Si.next = e;
  return t;
}
var wo = null;
function fm(e) {
  wo === null ? (wo = [e]) : wo.push(e);
}
function nx(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), fm(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Pr(e, r)
  );
}
function Pr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Br = !1;
function pm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function _r(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function eo(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Be & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Pr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), fm(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Pr(e, n)
  );
}
function Xl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jh(e, n);
  }
}
function Wg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ou(e, t, n, r) {
  var o = e.updateQueue;
  Br = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var p = a.lane,
        b = a.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: b,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            v = a;
          switch (((p = t), (b = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                d = m.call(b, d, p);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = v.payload),
                (p = typeof m == "function" ? m.call(b, d, p) : m),
                p == null)
              )
                break e;
              d = ut({}, d, p);
              break e;
            case 2:
              Br = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [a]) : p.push(a));
      } else
        (b = {
          eventTime: b,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = b), (l = d)) : (c = c.next = b),
          (s |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Bo |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Hg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(te(191, o));
        o.call(r);
      }
    }
}
var ox = new nb.Component().refs;
function Pp(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ut({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ed = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ho(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xt(),
      o = no(e),
      i = _r(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = eo(e, i, o)),
      t !== null && (Yn(t, e, o, r), Xl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xt(),
      o = no(e),
      i = _r(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = eo(e, i, o)),
      t !== null && (Yn(t, e, o, r), Xl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Xt(),
      r = no(e),
      o = _r(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = eo(e, o, r)),
      t !== null && (Yn(t, e, r, n), Xl(t, e, r));
  },
};
function qg(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !wa(n, r) || !wa(o, i)
      : !0
  );
}
function ix(e, t, n) {
  var r = !1,
    o = so,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ln(i))
      : ((o = an(t) ? Fo : Wt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Fi(e, o) : so)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ed),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Kg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ed.enqueueReplaceState(t, t.state, null);
}
function $p(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = ox), pm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ln(i))
    : ((i = an(t) ? Fo : Wt.current), (o.context = Fi(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Pp(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ed.enqueueReplaceState(o, o.state, null),
      Ou(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(te(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(te(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === ox && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(te(284));
    if (!n._owner) throw Error(te(290, e));
  }
  return e;
}
function Cl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      te(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Gg(e) {
  var t = e._init;
  return t(e._payload);
}
function sx(e) {
  function t(g, h) {
    if (e) {
      var y = g.deletions;
      y === null ? ((g.deletions = [h]), (g.flags |= 16)) : y.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = ro(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, y) {
    return (
      (g.index = y),
      e
        ? ((y = g.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((g.flags |= 2), h) : y)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, h, y, S) {
    return h === null || h.tag !== 6
      ? ((h = xf(y, g.mode, S)), (h.return = g), h)
      : ((h = o(h, y)), (h.return = g), h);
  }
  function l(g, h, y, S) {
    var E = y.type;
    return E === pi
      ? c(g, h, y.props.children, S, y.key)
      : h !== null &&
        (h.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === jr &&
            Gg(E) === h.type))
      ? ((S = o(h, y.props)), (S.ref = Cs(g, h, y)), (S.return = g), S)
      : ((S = nu(y.type, y.key, y.props, null, g.mode, S)),
        (S.ref = Cs(g, h, y)),
        (S.return = g),
        S);
  }
  function u(g, h, y, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = Sf(y, g.mode, S)), (h.return = g), h)
      : ((h = o(h, y.children || [])), (h.return = g), h);
  }
  function c(g, h, y, S, E) {
    return h === null || h.tag !== 7
      ? ((h = No(y, g.mode, S, E)), (h.return = g), h)
      : ((h = o(h, y)), (h.return = g), h);
  }
  function d(g, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = xf("" + h, g.mode, y)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case dl:
          return (
            (y = nu(h.type, h.key, h.props, null, g.mode, y)),
            (y.ref = Cs(g, null, h)),
            (y.return = g),
            y
          );
        case fi:
          return (h = Sf(h, g.mode, y)), (h.return = g), h;
        case jr:
          var S = h._init;
          return d(g, S(h._payload), y);
      }
      if (js(h) || gs(h))
        return (h = No(h, g.mode, y, null)), (h.return = g), h;
      Cl(g, h);
    }
    return null;
  }
  function p(g, h, y, S) {
    var E = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return E !== null ? null : a(g, h, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case dl:
          return y.key === E ? l(g, h, y, S) : null;
        case fi:
          return y.key === E ? u(g, h, y, S) : null;
        case jr:
          return (E = y._init), p(g, h, E(y._payload), S);
      }
      if (js(y) || gs(y)) return E !== null ? null : c(g, h, y, S, null);
      Cl(g, y);
    }
    return null;
  }
  function b(g, h, y, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (g = g.get(y) || null), a(h, g, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case dl:
          return (g = g.get(S.key === null ? y : S.key) || null), l(h, g, S, E);
        case fi:
          return (g = g.get(S.key === null ? y : S.key) || null), u(h, g, S, E);
        case jr:
          var _ = S._init;
          return b(g, h, y, _(S._payload), E);
      }
      if (js(S) || gs(S)) return (g = g.get(y) || null), c(h, g, S, E, null);
      Cl(h, S);
    }
    return null;
  }
  function m(g, h, y, S) {
    for (
      var E = null, _ = null, w = h, k = (h = 0), L = null;
      w !== null && k < y.length;
      k++
    ) {
      w.index > k ? ((L = w), (w = null)) : (L = w.sibling);
      var P = p(g, w, y[k], S);
      if (P === null) {
        w === null && (w = L);
        break;
      }
      e && w && P.alternate === null && t(g, w),
        (h = i(P, h, k)),
        _ === null ? (E = P) : (_.sibling = P),
        (_ = P),
        (w = L);
    }
    if (k === y.length) return n(g, w), it && go(g, k), E;
    if (w === null) {
      for (; k < y.length; k++)
        (w = d(g, y[k], S)),
          w !== null &&
            ((h = i(w, h, k)), _ === null ? (E = w) : (_.sibling = w), (_ = w));
      return it && go(g, k), E;
    }
    for (w = r(g, w); k < y.length; k++)
      (L = b(w, g, k, y[k], S)),
        L !== null &&
          (e && L.alternate !== null && w.delete(L.key === null ? k : L.key),
          (h = i(L, h, k)),
          _ === null ? (E = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        w.forEach(function (U) {
          return t(g, U);
        }),
      it && go(g, k),
      E
    );
  }
  function v(g, h, y, S) {
    var E = gs(y);
    if (typeof E != "function") throw Error(te(150));
    if (((y = E.call(y)), y == null)) throw Error(te(151));
    for (
      var _ = (E = null), w = h, k = (h = 0), L = null, P = y.next();
      w !== null && !P.done;
      k++, P = y.next()
    ) {
      w.index > k ? ((L = w), (w = null)) : (L = w.sibling);
      var U = p(g, w, P.value, S);
      if (U === null) {
        w === null && (w = L);
        break;
      }
      e && w && U.alternate === null && t(g, w),
        (h = i(U, h, k)),
        _ === null ? (E = U) : (_.sibling = U),
        (_ = U),
        (w = L);
    }
    if (P.done) return n(g, w), it && go(g, k), E;
    if (w === null) {
      for (; !P.done; k++, P = y.next())
        (P = d(g, P.value, S)),
          P !== null &&
            ((h = i(P, h, k)), _ === null ? (E = P) : (_.sibling = P), (_ = P));
      return it && go(g, k), E;
    }
    for (w = r(g, w); !P.done; k++, P = y.next())
      (P = b(w, g, k, P.value, S)),
        P !== null &&
          (e && P.alternate !== null && w.delete(P.key === null ? k : P.key),
          (h = i(P, h, k)),
          _ === null ? (E = P) : (_.sibling = P),
          (_ = P));
    return (
      e &&
        w.forEach(function (B) {
          return t(g, B);
        }),
      it && go(g, k),
      E
    );
  }
  function C(g, h, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === pi &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case dl:
          e: {
            for (var E = y.key, _ = h; _ !== null; ) {
              if (_.key === E) {
                if (((E = y.type), E === pi)) {
                  if (_.tag === 7) {
                    n(g, _.sibling),
                      (h = o(_, y.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === jr &&
                    Gg(E) === _.type)
                ) {
                  n(g, _.sibling),
                    (h = o(_, y.props)),
                    (h.ref = Cs(g, _, y)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, _);
                break;
              } else t(g, _);
              _ = _.sibling;
            }
            y.type === pi
              ? ((h = No(y.props.children, g.mode, S, y.key)),
                (h.return = g),
                (g = h))
              : ((S = nu(y.type, y.key, y.props, null, g.mode, S)),
                (S.ref = Cs(g, h, y)),
                (S.return = g),
                (g = S));
          }
          return s(g);
        case fi:
          e: {
            for (_ = y.key; h !== null; ) {
              if (h.key === _)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(g, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = Sf(y, g.mode, S)), (h.return = g), (g = h);
          }
          return s(g);
        case jr:
          return (_ = y._init), C(g, h, _(y._payload), S);
      }
      if (js(y)) return m(g, h, y, S);
      if (gs(y)) return v(g, h, y, S);
      Cl(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, y)), (h.return = g), (g = h))
          : (n(g, h), (h = xf(y, g.mode, S)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return C;
}
var ji = sx(!0),
  ax = sx(!1),
  Ka = {},
  pr = co(Ka),
  Ta = co(Ka),
  Aa = co(Ka);
function Eo(e) {
  if (e === Ka) throw Error(te(174));
  return e;
}
function hm(e, t) {
  switch ((Je(Aa, t), Je(Ta, e), Je(pr, Ka), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : up(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = up(t, e));
  }
  nt(pr), Je(pr, t);
}
function Bi() {
  nt(pr), nt(Ta), nt(Aa);
}
function lx(e) {
  Eo(Aa.current);
  var t = Eo(pr.current),
    n = up(t, e.type);
  t !== n && (Je(Ta, e), Je(pr, n));
}
function mm(e) {
  Ta.current === e && (nt(pr), nt(Ta));
}
var at = co(0);
function Lu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var hf = [];
function vm() {
  for (var e = 0; e < hf.length; e++)
    hf[e]._workInProgressVersionPrimary = null;
  hf.length = 0;
}
var Yl = Nr.ReactCurrentDispatcher,
  mf = Nr.ReactCurrentBatchConfig,
  jo = 0,
  lt = null,
  Rt = null,
  $t = null,
  Mu = !1,
  ta = !1,
  Pa = 0,
  iA = 0;
function jt() {
  throw Error(te(321));
}
function gm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Zn(e[n], t[n])) return !1;
  return !0;
}
function ym(e, t, n, r, o, i) {
  if (
    ((jo = i),
    (lt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yl.current = e === null || e.memoizedState === null ? uA : cA),
    (e = n(r, o)),
    ta)
  ) {
    i = 0;
    do {
      if (((ta = !1), (Pa = 0), 25 <= i)) throw Error(te(301));
      (i += 1),
        ($t = Rt = null),
        (t.updateQueue = null),
        (Yl.current = dA),
        (e = n(r, o));
    } while (ta);
  }
  if (
    ((Yl.current = Fu),
    (t = Rt !== null && Rt.next !== null),
    (jo = 0),
    ($t = Rt = lt = null),
    (Mu = !1),
    t)
  )
    throw Error(te(300));
  return e;
}
function bm() {
  var e = Pa !== 0;
  return (Pa = 0), e;
}
function or() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return $t === null ? (lt.memoizedState = $t = e) : ($t = $t.next = e), $t;
}
function Mn() {
  if (Rt === null) {
    var e = lt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Rt.next;
  var t = $t === null ? lt.memoizedState : $t.next;
  if (t !== null) ($t = t), (Rt = e);
  else {
    if (e === null) throw Error(te(310));
    (Rt = e),
      (e = {
        memoizedState: Rt.memoizedState,
        baseState: Rt.baseState,
        baseQueue: Rt.baseQueue,
        queue: Rt.queue,
        next: null,
      }),
      $t === null ? (lt.memoizedState = $t = e) : ($t = $t.next = e);
  }
  return $t;
}
function $a(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vf(e) {
  var t = Mn(),
    n = t.queue;
  if (n === null) throw Error(te(311));
  n.lastRenderedReducer = e;
  var r = Rt,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((jo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (lt.lanes |= c),
          (Bo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Zn(r, t.memoizedState) || (nn = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (lt.lanes |= i), (Bo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gf(e) {
  var t = Mn(),
    n = t.queue;
  if (n === null) throw Error(te(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Zn(i, t.memoizedState) || (nn = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ux() {}
function cx(e, t) {
  var n = lt,
    r = Mn(),
    o = t(),
    i = !Zn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (nn = !0)),
    (r = r.queue),
    xm(px.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ($t !== null && $t.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Na(9, fx.bind(null, n, r, o, t), void 0, null),
      Nt === null)
    )
      throw Error(te(349));
    jo & 30 || dx(n, t, o);
  }
  return o;
}
function dx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = lt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (lt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), hx(t) && mx(e);
}
function px(e, t, n) {
  return n(function () {
    hx(t) && mx(e);
  });
}
function hx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zn(e, n);
  } catch {
    return !0;
  }
}
function mx(e) {
  var t = Pr(e, 1);
  t !== null && Yn(t, e, 1, -1);
}
function Qg(e) {
  var t = or();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $a,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = lA.bind(null, lt, e)),
    [t.memoizedState, e]
  );
}
function Na(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = lt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (lt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vx() {
  return Mn().memoizedState;
}
function Jl(e, t, n, r) {
  var o = or();
  (lt.flags |= e),
    (o.memoizedState = Na(1 | t, n, void 0, r === void 0 ? null : r));
}
function td(e, t, n, r) {
  var o = Mn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Rt !== null) {
    var s = Rt.memoizedState;
    if (((i = s.destroy), r !== null && gm(r, s.deps))) {
      o.memoizedState = Na(t, n, i, r);
      return;
    }
  }
  (lt.flags |= e), (o.memoizedState = Na(1 | t, n, i, r));
}
function Xg(e, t) {
  return Jl(8390656, 8, e, t);
}
function xm(e, t) {
  return td(2048, 8, e, t);
}
function gx(e, t) {
  return td(4, 2, e, t);
}
function yx(e, t) {
  return td(4, 4, e, t);
}
function bx(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), td(4, 4, bx.bind(null, t, e), n)
  );
}
function Sm() {}
function Sx(e, t) {
  var n = Mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gm(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Cx(e, t) {
  var n = Mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gm(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Rx(e, t, n) {
  return jo & 21
    ? (Zn(n, t) || ((n = _b()), (lt.lanes |= n), (Bo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (nn = !0)), (e.memoizedState = n));
}
function sA(e, t) {
  var n = qe;
  (qe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = mf.transition;
  mf.transition = {};
  try {
    e(!1), t();
  } finally {
    (qe = n), (mf.transition = r);
  }
}
function wx() {
  return Mn().memoizedState;
}
function aA(e, t, n) {
  var r = no(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ex(e))
  )
    _x(t, n);
  else if (((n = nx(e, t, n, r)), n !== null)) {
    var o = Xt();
    Yn(n, e, r, o), kx(n, t, r);
  }
}
function lA(e, t, n) {
  var r = no(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ex(e)) _x(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Zn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), fm(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = nx(e, t, o, r)),
      n !== null && ((o = Xt()), Yn(n, e, r, o), kx(n, t, r));
  }
}
function Ex(e) {
  var t = e.alternate;
  return e === lt || (t !== null && t === lt);
}
function _x(e, t) {
  ta = Mu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function kx(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jh(e, n);
  }
}
var Fu = {
    readContext: Ln,
    useCallback: jt,
    useContext: jt,
    useEffect: jt,
    useImperativeHandle: jt,
    useInsertionEffect: jt,
    useLayoutEffect: jt,
    useMemo: jt,
    useReducer: jt,
    useRef: jt,
    useState: jt,
    useDebugValue: jt,
    useDeferredValue: jt,
    useTransition: jt,
    useMutableSource: jt,
    useSyncExternalStore: jt,
    useId: jt,
    unstable_isNewReconciler: !1,
  },
  uA = {
    readContext: Ln,
    useCallback: function (e, t) {
      return (or().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ln,
    useEffect: Xg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Jl(4194308, 4, bx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Jl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Jl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = or();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = or();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = aA.bind(null, lt, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = or();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qg,
    useDebugValue: Sm,
    useDeferredValue: function (e) {
      return (or().memoizedState = e);
    },
    useTransition: function () {
      var e = Qg(!1),
        t = e[0];
      return (e = sA.bind(null, e[1])), (or().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = lt,
        o = or();
      if (it) {
        if (n === void 0) throw Error(te(407));
        n = n();
      } else {
        if (((n = t()), Nt === null)) throw Error(te(349));
        jo & 30 || dx(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Xg(px.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Na(9, fx.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = or(),
        t = Nt.identifierPrefix;
      if (it) {
        var n = wr,
          r = Rr;
        (n = (r & ~(1 << (32 - Xn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Pa++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = iA++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cA = {
    readContext: Ln,
    useCallback: Sx,
    useContext: Ln,
    useEffect: xm,
    useImperativeHandle: xx,
    useInsertionEffect: gx,
    useLayoutEffect: yx,
    useMemo: Cx,
    useReducer: vf,
    useRef: vx,
    useState: function () {
      return vf($a);
    },
    useDebugValue: Sm,
    useDeferredValue: function (e) {
      var t = Mn();
      return Rx(t, Rt.memoizedState, e);
    },
    useTransition: function () {
      var e = vf($a)[0],
        t = Mn().memoizedState;
      return [e, t];
    },
    useMutableSource: ux,
    useSyncExternalStore: cx,
    useId: wx,
    unstable_isNewReconciler: !1,
  },
  dA = {
    readContext: Ln,
    useCallback: Sx,
    useContext: Ln,
    useEffect: xm,
    useImperativeHandle: xx,
    useInsertionEffect: gx,
    useLayoutEffect: yx,
    useMemo: Cx,
    useReducer: gf,
    useRef: vx,
    useState: function () {
      return gf($a);
    },
    useDebugValue: Sm,
    useDeferredValue: function (e) {
      var t = Mn();
      return Rt === null ? (t.memoizedState = e) : Rx(t, Rt.memoizedState, e);
    },
    useTransition: function () {
      var e = gf($a)[0],
        t = Mn().memoizedState;
      return [e, t];
    },
    useMutableSource: ux,
    useSyncExternalStore: cx,
    useId: wx,
    unstable_isNewReconciler: !1,
  };
function zi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jT(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function yf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Np(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fA = typeof WeakMap == "function" ? WeakMap : Map;
function Tx(e, t, n) {
  (n = _r(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ju || ((ju = !0), (Up = r)), Np(e, t);
    }),
    n
  );
}
function Ax(e, t, n) {
  (n = _r(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Np(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Np(e, t),
          typeof r != "function" &&
            (to === null ? (to = new Set([this])) : to.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Yg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fA();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = _A.bind(null, e, t, n)), t.then(e, e));
}
function Jg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zg(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _r(-1, 1)), (t.tag = 2), eo(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pA = Nr.ReactCurrentOwner,
  nn = !1;
function Kt(e, t, n, r) {
  t.child = e === null ? ax(t, null, n, r) : ji(t, e.child, n, r);
}
function ey(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    $i(t, o),
    (r = ym(e, t, n, r, i, o)),
    (n = bm()),
    e !== null && !nn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        $r(e, t, o))
      : (it && n && sm(t), (t.flags |= 1), Kt(e, t, r, o), t.child)
  );
}
function ty(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Am(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Px(e, t, i, r, o))
      : ((e = nu(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : wa), n(s, r) && e.ref === t.ref)
    )
      return $r(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ro(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Px(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (wa(i, r) && e.ref === t.ref)
      if (((nn = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (nn = !0);
      else return (t.lanes = e.lanes), $r(e, t, o);
  }
  return Ip(e, t, n, r, o);
}
function $x(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Je(Ri, pn),
        (pn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Je(Ri, pn),
          (pn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Je(Ri, pn),
        (pn |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Je(Ri, pn),
      (pn |= r);
  return Kt(e, t, o, n), t.child;
}
function Nx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ip(e, t, n, r, o) {
  var i = an(n) ? Fo : Wt.current;
  return (
    (i = Fi(t, i)),
    $i(t, o),
    (n = ym(e, t, n, r, i, o)),
    (r = bm()),
    e !== null && !nn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        $r(e, t, o))
      : (it && r && sm(t), (t.flags |= 1), Kt(e, t, n, o), t.child)
  );
}
function ny(e, t, n, r, o) {
  if (an(n)) {
    var i = !0;
    Au(t);
  } else i = !1;
  if (($i(t, o), t.stateNode === null))
    Zl(e, t), ix(t, n, r), $p(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ln(u))
      : ((u = an(n) ? Fo : Wt.current), (u = Fi(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Kg(t, s, r, u)),
      (Br = !1);
    var p = t.memoizedState;
    (s.state = p),
      Ou(t, r, s, o),
      (l = t.memoizedState),
      a !== r || p !== l || sn.current || Br
        ? (typeof c == "function" && (Pp(t, n, c, r), (l = t.memoizedState)),
          (a = Br || qg(t, n, a, r, p, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      rx(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Hn(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (p = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ln(l))
        : ((l = an(n) ? Fo : Wt.current), (l = Fi(t, l)));
    var b = n.getDerivedStateFromProps;
    (c =
      typeof b == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || p !== l) && Kg(t, s, r, l)),
      (Br = !1),
      (p = t.memoizedState),
      (s.state = p),
      Ou(t, r, s, o);
    var m = t.memoizedState;
    a !== d || p !== m || sn.current || Br
      ? (typeof b == "function" && (Pp(t, n, b, r), (m = t.memoizedState)),
        (u = Br || qg(t, n, u, r, p, m, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, m, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, m, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (s.props = r),
        (s.state = m),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Op(e, t, n, r, i, o);
}
function Op(e, t, n, r, o, i) {
  Nx(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && zg(t, n, !1), $r(e, t, i);
  (r = t.stateNode), (pA.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ji(t, e.child, null, i)), (t.child = ji(t, null, a, i)))
      : Kt(e, t, a, i),
    (t.memoizedState = r.state),
    o && zg(t, n, !0),
    t.child
  );
}
function Ix(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Bg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bg(e, t.context, !1),
    hm(e, t.containerInfo);
}
function ry(e, t, n, r, o) {
  return Di(), lm(o), (t.flags |= 256), Kt(e, t, n, r), t.child;
}
var Lp = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ox(e, t, n) {
  var r = t.pendingProps,
    o = at.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Je(at, o & 1),
    e === null)
  )
    return (
      Tp(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = od(s, r, 0, null)),
              (e = No(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Mp(n)),
              (t.memoizedState = Lp),
              e)
            : Cm(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return hA(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = ro(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = ro(a, i)) : ((i = No(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Mp(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Lp),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ro(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cm(e, t) {
  return (
    (t = od({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rl(e, t, n, r) {
  return (
    r !== null && lm(r),
    ji(t, e.child, null, n),
    (e = Cm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hA(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = yf(Error(te(422)))), Rl(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = od({ mode: "visible", children: r.children }, o, 0, null)),
        (i = No(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ji(t, e.child, null, s),
        (t.child.memoizedState = Mp(s)),
        (t.memoizedState = Lp),
        i);
  if (!(t.mode & 1)) return Rl(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a), (i = Error(te(419))), (r = yf(i, r, void 0)), Rl(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), nn || a)) {
    if (((r = Nt), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Pr(e, o), Yn(r, e, o, -1));
    }
    return Tm(), (r = yf(Error(te(421)))), Rl(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kA.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (mn = Zr(o.nextSibling)),
      (gn = t),
      (it = !0),
      (Kn = null),
      e !== null &&
        ((Tn[An++] = Rr),
        (Tn[An++] = wr),
        (Tn[An++] = Do),
        (Rr = e.id),
        (wr = e.overflow),
        (Do = t)),
      (t = Cm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function oy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ap(e.return, t, n);
}
function bf(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Lx(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Kt(e, t, r.children, n), (r = at.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && oy(e, n, t);
        else if (e.tag === 19) oy(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Je(at, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Lu(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          bf(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Lu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        bf(t, !0, n, null, i);
        break;
      case "together":
        bf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $r(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(te(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ro(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ro(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mA(e, t, n) {
  switch (t.tag) {
    case 3:
      Ix(t), Di();
      break;
    case 5:
      lx(t);
      break;
    case 1:
      an(t.type) && Au(t);
      break;
    case 4:
      hm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Je(Nu, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Je(at, at.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ox(e, t, n)
          : (Je(at, at.current & 1),
            (e = $r(e, t, n)),
            e !== null ? e.sibling : null);
      Je(at, at.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Lx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Je(at, at.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $x(e, t, n);
  }
  return $r(e, t, n);
}
var Mx, Fp, Fx, Dx;
Mx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fp = function () {};
Fx = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Eo(pr.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ip(e, o)), (r = ip(e, r)), (i = []);
        break;
      case "select":
        (o = ut({}, o, { value: void 0 })),
          (r = ut({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = lp(e, o)), (r = lp(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ku);
    }
    cp(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ga.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ga.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && et("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Dx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rs(e, t) {
  if (!it)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Bt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function vA(e, t, n) {
  var r = t.pendingProps;
  switch ((am(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Bt(t), null;
    case 1:
      return an(t.type) && Tu(), Bt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Bi(),
        nt(sn),
        nt(Wt),
        vm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Sl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Kn !== null && (Hp(Kn), (Kn = null)))),
        Fp(e, t),
        Bt(t),
        null
      );
    case 5:
      mm(t);
      var o = Eo(Aa.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fx(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(te(166));
          return Bt(t), null;
        }
        if (((e = Eo(pr.current)), Sl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[lr] = t), (r[ka] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              et("cancel", r), et("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              et("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < zs.length; o++) et(zs[o], r);
              break;
            case "source":
              et("error", r);
              break;
            case "img":
            case "image":
            case "link":
              et("error", r), et("load", r);
              break;
            case "details":
              et("toggle", r);
              break;
            case "input":
              pg(r, i), et("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                et("invalid", r);
              break;
            case "textarea":
              mg(r, i), et("invalid", r);
          }
          cp(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      xl(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      xl(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : ga.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  et("scroll", r);
            }
          switch (n) {
            case "input":
              fl(r), hg(r, i, !0);
              break;
            case "textarea":
              fl(r), vg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ku);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = db(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[lr] = t),
            (e[ka] = r),
            Mx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = dp(n, r)), n)) {
              case "dialog":
                et("cancel", e), et("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                et("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < zs.length; o++) et(zs[o], e);
                o = r;
                break;
              case "source":
                et("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                et("error", e), et("load", e), (o = r);
                break;
              case "details":
                et("toggle", e), (o = r);
                break;
              case "input":
                pg(e, r), (o = ip(e, r)), et("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ut({}, r, { value: void 0 })),
                  et("invalid", e);
                break;
              case "textarea":
                mg(e, r), (o = lp(e, r)), et("invalid", e);
                break;
              default:
                o = r;
            }
            cp(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? hb(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && fb(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ya(e, l)
                    : typeof l == "number" && ya(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ga.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && et("scroll", e)
                      : l != null && qh(e, i, l, s));
              }
            switch (n) {
              case "input":
                fl(e), hg(e, r, !1);
                break;
              case "textarea":
                fl(e), vg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + io(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ki(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ki(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ku);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Bt(t), null;
    case 6:
      if (e && t.stateNode != null) Dx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(te(166));
        if (((n = Eo(Aa.current)), Eo(pr.current), Sl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[lr] = t),
            (i = r.nodeValue !== n) && ((e = gn), e !== null))
          )
            switch (e.tag) {
              case 3:
                xl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[lr] = t),
            (t.stateNode = r);
      }
      return Bt(t), null;
    case 13:
      if (
        (nt(at),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (it && mn !== null && t.mode & 1 && !(t.flags & 128))
          tx(), Di(), (t.flags |= 98560), (i = !1);
        else if (((i = Sl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(te(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(te(317));
            i[lr] = t;
          } else
            Di(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Bt(t), (i = !1);
        } else Kn !== null && (Hp(Kn), (Kn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || at.current & 1 ? Et === 0 && (Et = 3) : Tm())),
          t.updateQueue !== null && (t.flags |= 4),
          Bt(t),
          null);
    case 4:
      return (
        Bi(), Fp(e, t), e === null && Ea(t.stateNode.containerInfo), Bt(t), null
      );
    case 10:
      return dm(t.type._context), Bt(t), null;
    case 17:
      return an(t.type) && Tu(), Bt(t), null;
    case 19:
      if ((nt(at), (i = t.memoizedState), i === null)) return Bt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Rs(i, !1);
        else {
          if (Et !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Lu(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Rs(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Je(at, (at.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            vt() > Ui &&
            ((t.flags |= 128), (r = !0), Rs(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Lu(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rs(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !it)
            )
              return Bt(t), null;
          } else
            2 * vt() - i.renderingStartTime > Ui &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rs(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = vt()),
          (t.sibling = null),
          (n = at.current),
          Je(at, r ? (n & 1) | 2 : n & 1),
          t)
        : (Bt(t), null);
    case 22:
    case 23:
      return (
        km(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? pn & 1073741824 && (Bt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Bt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(te(156, t.tag));
}
function gA(e, t) {
  switch ((am(t), t.tag)) {
    case 1:
      return (
        an(t.type) && Tu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Bi(),
        nt(sn),
        nt(Wt),
        vm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mm(t), null;
    case 13:
      if (
        (nt(at), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(te(340));
        Di();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return nt(at), null;
    case 4:
      return Bi(), null;
    case 10:
      return dm(t.type._context), null;
    case 22:
    case 23:
      return km(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wl = !1,
  Ut = !1,
  yA = typeof WeakSet == "function" ? WeakSet : Set,
  fe = null;
function Ci(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pt(e, t, r);
      }
    else n.current = null;
}
function Dp(e, t, n) {
  try {
    n();
  } catch (r) {
    pt(e, t, r);
  }
}
var iy = !1;
function bA(e, t) {
  if (((Sp = wu), (e = Ub()), im(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var b;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (b = d.firstChild) !== null;

            )
              (p = d), (d = b);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++u === o && (a = s),
                p === i && ++c === r && (l = s),
                (b = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = b;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Cp = { focusedElem: e, selectionRange: n }, wu = !1, fe = t;
    fe !== null;

  )
    if (((t = fe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (fe = e);
    else
      for (; fe !== null; ) {
        t = fe;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    C = m.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Hn(t.type, v),
                      C
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(te(163));
            }
        } catch (S) {
          pt(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (fe = e);
          break;
        }
        fe = t.return;
      }
  return (m = iy), (iy = !1), m;
}
function na(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Dp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function nd(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jp(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[lr], delete t[ka], delete t[Ep], delete t[tA], delete t[nA])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ku));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bp(e, t, n), e = e.sibling; e !== null; ) Bp(e, t, n), (e = e.sibling);
}
function zp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zp(e, t, n), e = e.sibling; e !== null; ) zp(e, t, n), (e = e.sibling);
}
var Ot = null,
  qn = !1;
function Mr(e, t, n) {
  for (n = n.child; n !== null; ) zx(e, t, n), (n = n.sibling);
}
function zx(e, t, n) {
  if (fr && typeof fr.onCommitFiberUnmount == "function")
    try {
      fr.onCommitFiberUnmount(Gc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ut || Ci(n, t);
    case 6:
      var r = Ot,
        o = qn;
      (Ot = null),
        Mr(e, t, n),
        (Ot = r),
        (qn = o),
        Ot !== null &&
          (qn
            ? ((e = Ot),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ot.removeChild(n.stateNode));
      break;
    case 18:
      Ot !== null &&
        (qn
          ? ((e = Ot),
            (n = n.stateNode),
            e.nodeType === 8
              ? ff(e.parentNode, n)
              : e.nodeType === 1 && ff(e, n),
            Ca(e))
          : ff(Ot, n.stateNode));
      break;
    case 4:
      (r = Ot),
        (o = qn),
        (Ot = n.stateNode.containerInfo),
        (qn = !0),
        Mr(e, t, n),
        (Ot = r),
        (qn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ut &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Dp(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Mr(e, t, n);
      break;
    case 1:
      if (
        !Ut &&
        (Ci(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          pt(n, t, a);
        }
      Mr(e, t, n);
      break;
    case 21:
      Mr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ut = (r = Ut) || n.memoizedState !== null), Mr(e, t, n), (Ut = r))
        : Mr(e, t, n);
      break;
    default:
      Mr(e, t, n);
  }
}
function ay(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yA()),
      t.forEach(function (r) {
        var o = TA.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Vn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ot = a.stateNode), (qn = !1);
              break e;
            case 3:
              (Ot = a.stateNode.containerInfo), (qn = !0);
              break e;
            case 4:
              (Ot = a.stateNode.containerInfo), (qn = !0);
              break e;
          }
          a = a.return;
        }
        if (Ot === null) throw Error(te(160));
        zx(i, s, o), (Ot = null), (qn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        pt(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ux(t, e), (t = t.sibling);
}
function Ux(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Vn(t, e), tr(e), r & 4)) {
        try {
          na(3, e, e.return), nd(3, e);
        } catch (v) {
          pt(e, e.return, v);
        }
        try {
          na(5, e, e.return);
        } catch (v) {
          pt(e, e.return, v);
        }
      }
      break;
    case 1:
      Vn(t, e), tr(e), r & 512 && n !== null && Ci(n, n.return);
      break;
    case 5:
      if (
        (Vn(t, e),
        tr(e),
        r & 512 && n !== null && Ci(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ya(o, "");
        } catch (v) {
          pt(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && ub(o, i),
              dp(a, s);
            var u = dp(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? hb(o, d)
                : c === "dangerouslySetInnerHTML"
                ? fb(o, d)
                : c === "children"
                ? ya(o, d)
                : qh(o, c, d, u);
            }
            switch (a) {
              case "input":
                sp(o, i);
                break;
              case "textarea":
                cb(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var b = i.value;
                b != null
                  ? ki(o, !!i.multiple, b, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ki(o, !!i.multiple, i.defaultValue, !0)
                      : ki(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ka] = i;
          } catch (v) {
            pt(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Vn(t, e), tr(e), r & 4)) {
        if (e.stateNode === null) throw Error(te(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          pt(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Vn(t, e), tr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ca(t.containerInfo);
        } catch (v) {
          pt(e, e.return, v);
        }
      break;
    case 4:
      Vn(t, e), tr(e);
      break;
    case 13:
      Vn(t, e),
        tr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Em = vt())),
        r & 4 && ay(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ut = (u = Ut) || c), Vn(t, e), (Ut = u)) : Vn(t, e),
        tr(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (fe = e, c = e.child; c !== null; ) {
            for (d = fe = c; fe !== null; ) {
              switch (((p = fe), (b = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  na(4, p, p.return);
                  break;
                case 1:
                  Ci(p, p.return);
                  var m = p.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      pt(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Ci(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    uy(d);
                    continue;
                  }
              }
              b !== null ? ((b.return = p), (fe = b)) : uy(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = pb("display", s)));
              } catch (v) {
                pt(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                pt(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Vn(t, e), tr(e), r & 4 && ay(e);
      break;
    case 21:
      break;
    default:
      Vn(t, e), tr(e);
  }
}
function tr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Bx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(te(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ya(o, ""), (r.flags &= -33));
          var i = sy(e);
          zp(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = sy(e);
          Bp(e, a, s);
          break;
        default:
          throw Error(te(161));
      }
    } catch (l) {
      pt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xA(e, t, n) {
  (fe = e), Vx(e);
}
function Vx(e, t, n) {
  for (var r = (e.mode & 1) !== 0; fe !== null; ) {
    var o = fe,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || wl;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ut;
        a = wl;
        var u = Ut;
        if (((wl = s), (Ut = l) && !u))
          for (fe = o; fe !== null; )
            (s = fe),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? cy(o)
                : l !== null
                ? ((l.return = s), (fe = l))
                : cy(o);
        for (; i !== null; ) (fe = i), Vx(i), (i = i.sibling);
        (fe = o), (wl = a), (Ut = u);
      }
      ly(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (fe = i)) : ly(e);
  }
}
function ly(e) {
  for (; fe !== null; ) {
    var t = fe;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ut || nd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ut)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Hn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Hg(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Hg(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ca(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(te(163));
          }
        Ut || (t.flags & 512 && jp(t));
      } catch (p) {
        pt(t, t.return, p);
      }
    }
    if (t === e) {
      fe = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (fe = n);
      break;
    }
    fe = t.return;
  }
}
function uy(e) {
  for (; fe !== null; ) {
    var t = fe;
    if (t === e) {
      fe = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (fe = n);
      break;
    }
    fe = t.return;
  }
}
function cy(e) {
  for (; fe !== null; ) {
    var t = fe;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            nd(4, t);
          } catch (l) {
            pt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              pt(t, o, l);
            }
          }
          var i = t.return;
          try {
            jp(t);
          } catch (l) {
            pt(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            jp(t);
          } catch (l) {
            pt(t, s, l);
          }
      }
    } catch (l) {
      pt(t, t.return, l);
    }
    if (t === e) {
      fe = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (fe = a);
      break;
    }
    fe = t.return;
  }
}
var SA = Math.ceil,
  Du = Nr.ReactCurrentDispatcher,
  Rm = Nr.ReactCurrentOwner,
  Nn = Nr.ReactCurrentBatchConfig,
  Be = 0,
  Nt = null,
  xt = null,
  Mt = 0,
  pn = 0,
  Ri = co(0),
  Et = 0,
  Ia = null,
  Bo = 0,
  rd = 0,
  wm = 0,
  ra = null,
  tn = null,
  Em = 0,
  Ui = 1 / 0,
  Sr = null,
  ju = !1,
  Up = null,
  to = null,
  El = !1,
  Kr = null,
  Bu = 0,
  oa = 0,
  Vp = null,
  eu = -1,
  tu = 0;
function Xt() {
  return Be & 6 ? vt() : eu !== -1 ? eu : (eu = vt());
}
function no(e) {
  return e.mode & 1
    ? Be & 2 && Mt !== 0
      ? Mt & -Mt
      : oA.transition !== null
      ? (tu === 0 && (tu = _b()), tu)
      : ((e = qe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ib(e.type))),
        e)
    : 1;
}
function Yn(e, t, n, r) {
  if (50 < oa) throw ((oa = 0), (Vp = null), Error(te(185)));
  Wa(e, n, r),
    (!(Be & 2) || e !== Nt) &&
      (e === Nt && (!(Be & 2) && (rd |= n), Et === 4 && Hr(e, Mt)),
      ln(e, r),
      n === 1 && Be === 0 && !(t.mode & 1) && ((Ui = vt() + 500), Zc && fo()));
}
function ln(e, t) {
  var n = e.callbackNode;
  o2(e, t);
  var r = Ru(e, e === Nt ? Mt : 0);
  if (r === 0)
    n !== null && bg(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bg(n), t === 1))
      e.tag === 0 ? rA(dy.bind(null, e)) : Jb(dy.bind(null, e)),
        Z2(function () {
          !(Be & 6) && fo();
        }),
        (n = null);
    else {
      switch (kb(r)) {
        case 1:
          n = Yh;
          break;
        case 4:
          n = wb;
          break;
        case 16:
          n = Cu;
          break;
        case 536870912:
          n = Eb;
          break;
        default:
          n = Cu;
      }
      n = Yx(n, Wx.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wx(e, t) {
  if (((eu = -1), (tu = 0), Be & 6)) throw Error(te(327));
  var n = e.callbackNode;
  if (Ni() && e.callbackNode !== n) return null;
  var r = Ru(e, e === Nt ? Mt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zu(e, r);
  else {
    t = r;
    var o = Be;
    Be |= 2;
    var i = qx();
    (Nt !== e || Mt !== t) && ((Sr = null), (Ui = vt() + 500), $o(e, t));
    do
      try {
        wA();
        break;
      } catch (a) {
        Hx(e, a);
      }
    while (!0);
    cm(),
      (Du.current = i),
      (Be = o),
      xt !== null ? (t = 0) : ((Nt = null), (Mt = 0), (t = Et));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = vp(e)), o !== 0 && ((r = o), (t = Wp(e, o)))), t === 1)
    )
      throw ((n = Ia), $o(e, 0), Hr(e, r), ln(e, vt()), n);
    if (t === 6) Hr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !CA(o) &&
          ((t = zu(e, r)),
          t === 2 && ((i = vp(e)), i !== 0 && ((r = i), (t = Wp(e, i)))),
          t === 1))
      )
        throw ((n = Ia), $o(e, 0), Hr(e, r), ln(e, vt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(te(345));
        case 2:
          yo(e, tn, Sr);
          break;
        case 3:
          if (
            (Hr(e, r), (r & 130023424) === r && ((t = Em + 500 - vt()), 10 < t))
          ) {
            if (Ru(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Xt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = wp(yo.bind(null, e, tn, Sr), t);
            break;
          }
          yo(e, tn, Sr);
          break;
        case 4:
          if ((Hr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Xn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = vt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * SA(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wp(yo.bind(null, e, tn, Sr), r);
            break;
          }
          yo(e, tn, Sr);
          break;
        case 5:
          yo(e, tn, Sr);
          break;
        default:
          throw Error(te(329));
      }
    }
  }
  return ln(e, vt()), e.callbackNode === n ? Wx.bind(null, e) : null;
}
function Wp(e, t) {
  var n = ra;
  return (
    e.current.memoizedState.isDehydrated && ($o(e, t).flags |= 256),
    (e = zu(e, t)),
    e !== 2 && ((t = tn), (tn = n), t !== null && Hp(t)),
    e
  );
}
function Hp(e) {
  tn === null ? (tn = e) : tn.push.apply(tn, e);
}
function CA(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Zn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Hr(e, t) {
  for (
    t &= ~wm,
      t &= ~rd,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function dy(e) {
  if (Be & 6) throw Error(te(327));
  Ni();
  var t = Ru(e, 0);
  if (!(t & 1)) return ln(e, vt()), null;
  var n = zu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vp(e);
    r !== 0 && ((t = r), (n = Wp(e, r)));
  }
  if (n === 1) throw ((n = Ia), $o(e, 0), Hr(e, t), ln(e, vt()), n);
  if (n === 6) throw Error(te(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yo(e, tn, Sr),
    ln(e, vt()),
    null
  );
}
function _m(e, t) {
  var n = Be;
  Be |= 1;
  try {
    return e(t);
  } finally {
    (Be = n), Be === 0 && ((Ui = vt() + 500), Zc && fo());
  }
}
function zo(e) {
  Kr !== null && Kr.tag === 0 && !(Be & 6) && Ni();
  var t = Be;
  Be |= 1;
  var n = Nn.transition,
    r = qe;
  try {
    if (((Nn.transition = null), (qe = 1), e)) return e();
  } finally {
    (qe = r), (Nn.transition = n), (Be = t), !(Be & 6) && fo();
  }
}
function km() {
  (pn = Ri.current), nt(Ri);
}
function $o(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), J2(n)), xt !== null))
    for (n = xt.return; n !== null; ) {
      var r = n;
      switch ((am(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Tu();
          break;
        case 3:
          Bi(), nt(sn), nt(Wt), vm();
          break;
        case 5:
          mm(r);
          break;
        case 4:
          Bi();
          break;
        case 13:
          nt(at);
          break;
        case 19:
          nt(at);
          break;
        case 10:
          dm(r.type._context);
          break;
        case 22:
        case 23:
          km();
      }
      n = n.return;
    }
  if (
    ((Nt = e),
    (xt = e = ro(e.current, null)),
    (Mt = pn = t),
    (Et = 0),
    (Ia = null),
    (wm = rd = Bo = 0),
    (tn = ra = null),
    wo !== null)
  ) {
    for (t = 0; t < wo.length; t++)
      if (((n = wo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    wo = null;
  }
  return e;
}
function Hx(e, t) {
  do {
    var n = xt;
    try {
      if ((cm(), (Yl.current = Fu), Mu)) {
        for (var r = lt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Mu = !1;
      }
      if (
        ((jo = 0),
        ($t = Rt = lt = null),
        (ta = !1),
        (Pa = 0),
        (Rm.current = null),
        n === null || n.return === null)
      ) {
        (Et = 1), (Ia = t), (xt = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Mt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var b = Jg(s);
          if (b !== null) {
            (b.flags &= -257),
              Zg(b, s, a, i, t),
              b.mode & 1 && Yg(i, u, t),
              (t = b),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Yg(i, u, t), Tm();
              break e;
            }
            l = Error(te(426));
          }
        } else if (it && a.mode & 1) {
          var C = Jg(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Zg(C, s, a, i, t),
              lm(zi(l, a));
            break e;
          }
        }
        (i = l = zi(l, a)),
          Et !== 4 && (Et = 2),
          ra === null ? (ra = [i]) : ra.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = Tx(i, l, t);
              Wg(i, g);
              break e;
            case 1:
              a = l;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (to === null || !to.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Ax(i, a, t);
                Wg(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gx(n);
    } catch (E) {
      (t = E), xt === n && n !== null && (xt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qx() {
  var e = Du.current;
  return (Du.current = Fu), e === null ? Fu : e;
}
function Tm() {
  (Et === 0 || Et === 3 || Et === 2) && (Et = 4),
    Nt === null || (!(Bo & 268435455) && !(rd & 268435455)) || Hr(Nt, Mt);
}
function zu(e, t) {
  var n = Be;
  Be |= 2;
  var r = qx();
  (Nt !== e || Mt !== t) && ((Sr = null), $o(e, t));
  do
    try {
      RA();
      break;
    } catch (o) {
      Hx(e, o);
    }
  while (!0);
  if ((cm(), (Be = n), (Du.current = r), xt !== null)) throw Error(te(261));
  return (Nt = null), (Mt = 0), Et;
}
function RA() {
  for (; xt !== null; ) Kx(xt);
}
function wA() {
  for (; xt !== null && !QT(); ) Kx(xt);
}
function Kx(e) {
  var t = Xx(e.alternate, e, pn);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gx(e) : (xt = t),
    (Rm.current = null);
}
function Gx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = gA(n, t)), n !== null)) {
        (n.flags &= 32767), (xt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Et = 6), (xt = null);
        return;
      }
    } else if (((n = vA(n, t, pn)), n !== null)) {
      xt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xt = t;
      return;
    }
    xt = t = e;
  } while (t !== null);
  Et === 0 && (Et = 5);
}
function yo(e, t, n) {
  var r = qe,
    o = Nn.transition;
  try {
    (Nn.transition = null), (qe = 1), EA(e, t, n, r);
  } finally {
    (Nn.transition = o), (qe = r);
  }
  return null;
}
function EA(e, t, n, r) {
  do Ni();
  while (Kr !== null);
  if (Be & 6) throw Error(te(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(te(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (i2(e, i),
    e === Nt && ((xt = Nt = null), (Mt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      El ||
      ((El = !0),
      Yx(Cu, function () {
        return Ni(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Nn.transition), (Nn.transition = null);
    var s = qe;
    qe = 1;
    var a = Be;
    (Be |= 4),
      (Rm.current = null),
      bA(e, n),
      Ux(n, e),
      H2(Cp),
      (wu = !!Sp),
      (Cp = Sp = null),
      (e.current = n),
      xA(n),
      XT(),
      (Be = a),
      (qe = s),
      (Nn.transition = i);
  } else e.current = n;
  if (
    (El && ((El = !1), (Kr = e), (Bu = o)),
    (i = e.pendingLanes),
    i === 0 && (to = null),
    ZT(n.stateNode),
    ln(e, vt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ju) throw ((ju = !1), (e = Up), (Up = null), e);
  return (
    Bu & 1 && e.tag !== 0 && Ni(),
    (i = e.pendingLanes),
    i & 1 ? (e === Vp ? oa++ : ((oa = 0), (Vp = e))) : (oa = 0),
    fo(),
    null
  );
}
function Ni() {
  if (Kr !== null) {
    var e = kb(Bu),
      t = Nn.transition,
      n = qe;
    try {
      if (((Nn.transition = null), (qe = 16 > e ? 16 : e), Kr === null))
        var r = !1;
      else {
        if (((e = Kr), (Kr = null), (Bu = 0), Be & 6)) throw Error(te(331));
        var o = Be;
        for (Be |= 4, fe = e.current; fe !== null; ) {
          var i = fe,
            s = i.child;
          if (fe.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (fe = u; fe !== null; ) {
                  var c = fe;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      na(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (fe = d);
                  else
                    for (; fe !== null; ) {
                      c = fe;
                      var p = c.sibling,
                        b = c.return;
                      if ((jx(c), c === u)) {
                        fe = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = b), (fe = p);
                        break;
                      }
                      fe = b;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var C = v.sibling;
                    (v.sibling = null), (v = C);
                  } while (v !== null);
                }
              }
              fe = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (fe = s);
          else
            e: for (; fe !== null; ) {
              if (((i = fe), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    na(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (fe = g);
                break e;
              }
              fe = i.return;
            }
        }
        var h = e.current;
        for (fe = h; fe !== null; ) {
          s = fe;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (fe = y);
          else
            e: for (s = h; fe !== null; ) {
              if (((a = fe), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nd(9, a);
                  }
                } catch (E) {
                  pt(a, a.return, E);
                }
              if (a === s) {
                fe = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (fe = S);
                break e;
              }
              fe = a.return;
            }
        }
        if (
          ((Be = o), fo(), fr && typeof fr.onPostCommitFiberRoot == "function")
        )
          try {
            fr.onPostCommitFiberRoot(Gc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (qe = n), (Nn.transition = t);
    }
  }
  return !1;
}
function fy(e, t, n) {
  (t = zi(n, t)),
    (t = Tx(e, t, 1)),
    (e = eo(e, t, 1)),
    (t = Xt()),
    e !== null && (Wa(e, 1, t), ln(e, t));
}
function pt(e, t, n) {
  if (e.tag === 3) fy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (to === null || !to.has(r)))
        ) {
          (e = zi(n, e)),
            (e = Ax(t, e, 1)),
            (t = eo(t, e, 1)),
            (e = Xt()),
            t !== null && (Wa(t, 1, e), ln(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _A(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Xt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Nt === e &&
      (Mt & n) === n &&
      (Et === 4 || (Et === 3 && (Mt & 130023424) === Mt && 500 > vt() - Em)
        ? $o(e, 0)
        : (wm |= n)),
    ln(e, t);
}
function Qx(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ml), (ml <<= 1), !(ml & 130023424) && (ml = 4194304))
      : (t = 1));
  var n = Xt();
  (e = Pr(e, t)), e !== null && (Wa(e, t, n), ln(e, n));
}
function kA(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qx(e, n);
}
function TA(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(te(314));
  }
  r !== null && r.delete(t), Qx(e, n);
}
var Xx;
Xx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || sn.current) nn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (nn = !1), mA(e, t, n);
      nn = !!(e.flags & 131072);
    }
  else (nn = !1), it && t.flags & 1048576 && Zb(t, $u, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zl(e, t), (e = t.pendingProps);
      var o = Fi(t, Wt.current);
      $i(t, n), (o = ym(null, t, r, e, o, n));
      var i = bm();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            an(r) ? ((i = !0), Au(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            pm(t),
            (o.updater = ed),
            (t.stateNode = o),
            (o._reactInternals = t),
            $p(t, r, e, n),
            (t = Op(null, t, r, !0, i, n)))
          : ((t.tag = 0), it && i && sm(t), Kt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = PA(r)),
          (e = Hn(r, e)),
          o)
        ) {
          case 0:
            t = Ip(null, t, r, e, n);
            break e;
          case 1:
            t = ny(null, t, r, e, n);
            break e;
          case 11:
            t = ey(null, t, r, e, n);
            break e;
          case 14:
            t = ty(null, t, r, Hn(r.type, e), n);
            break e;
        }
        throw Error(te(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Hn(r, o)),
        Ip(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Hn(r, o)),
        ny(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ix(t), e === null)) throw Error(te(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          rx(e, t),
          Ou(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = zi(Error(te(423)), t)), (t = ry(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = zi(Error(te(424)), t)), (t = ry(e, t, r, n, o));
            break e;
          } else
            for (
              mn = Zr(t.stateNode.containerInfo.firstChild),
                gn = t,
                it = !0,
                Kn = null,
                n = ax(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Di(), r === o)) {
            t = $r(e, t, n);
            break e;
          }
          Kt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        lx(t),
        e === null && Tp(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Rp(r, o) ? (s = null) : i !== null && Rp(r, i) && (t.flags |= 32),
        Nx(e, t),
        Kt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Tp(t), null;
    case 13:
      return Ox(e, t, n);
    case 4:
      return (
        hm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ji(t, null, r, n)) : Kt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Hn(r, o)),
        ey(e, t, r, o, n)
      );
    case 7:
      return Kt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Kt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Kt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Je(Nu, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Zn(i.value, s)) {
            if (i.children === o.children && !sn.current) {
              t = $r(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = _r(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Ap(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(te(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ap(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Kt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $i(t, n),
        (o = Ln(o)),
        (r = r(o)),
        (t.flags |= 1),
        Kt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Hn(r, t.pendingProps)),
        (o = Hn(r.type, o)),
        ty(e, t, r, o, n)
      );
    case 15:
      return Px(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Hn(r, o)),
        Zl(e, t),
        (t.tag = 1),
        an(r) ? ((e = !0), Au(t)) : (e = !1),
        $i(t, n),
        ix(t, r, o),
        $p(t, r, o, n),
        Op(null, t, r, !0, e, n)
      );
    case 19:
      return Lx(e, t, n);
    case 22:
      return $x(e, t, n);
  }
  throw Error(te(156, t.tag));
};
function Yx(e, t) {
  return Rb(e, t);
}
function AA(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $n(e, t, n, r) {
  return new AA(e, t, n, r);
}
function Am(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function PA(e) {
  if (typeof e == "function") return Am(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gh)) return 11;
    if (e === Qh) return 14;
  }
  return 2;
}
function ro(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $n(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function nu(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Am(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case pi:
        return No(n.children, o, i, t);
      case Kh:
        (s = 8), (o |= 8);
        break;
      case tp:
        return (
          (e = $n(12, n, t, o | 2)), (e.elementType = tp), (e.lanes = i), e
        );
      case np:
        return (e = $n(13, n, t, o)), (e.elementType = np), (e.lanes = i), e;
      case rp:
        return (e = $n(19, n, t, o)), (e.elementType = rp), (e.lanes = i), e;
      case sb:
        return od(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ob:
              s = 10;
              break e;
            case ib:
              s = 9;
              break e;
            case Gh:
              s = 11;
              break e;
            case Qh:
              s = 14;
              break e;
            case jr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(te(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = $n(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function No(e, t, n, r) {
  return (e = $n(7, e, r, t)), (e.lanes = n), e;
}
function od(e, t, n, r) {
  return (
    (e = $n(22, e, r, t)),
    (e.elementType = sb),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function xf(e, t, n) {
  return (e = $n(6, e, null, t)), (e.lanes = n), e;
}
function Sf(e, t, n) {
  return (
    (t = $n(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $A(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ef(0)),
    (this.expirationTimes = ef(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ef(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Pm(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new $A(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = $n(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pm(i),
    e
  );
}
function NA(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: fi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jx(e) {
  if (!e) return so;
  e = e._reactInternals;
  e: {
    if (Ho(e) !== e || e.tag !== 1) throw Error(te(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (an(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(te(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (an(n)) return Yb(e, n, t);
  }
  return t;
}
function Zx(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Pm(n, r, !0, e, o, i, s, a, l)),
    (e.context = Jx(null)),
    (n = e.current),
    (r = Xt()),
    (o = no(n)),
    (i = _r(r, o)),
    (i.callback = t ?? null),
    eo(n, i, o),
    (e.current.lanes = o),
    Wa(e, o, r),
    ln(e, r),
    e
  );
}
function id(e, t, n, r) {
  var o = t.current,
    i = Xt(),
    s = no(o);
  return (
    (n = Jx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _r(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = eo(o, t, s)),
    e !== null && (Yn(e, o, s, i), Xl(e, o, s)),
    s
  );
}
function Uu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function py(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $m(e, t) {
  py(e, t), (e = e.alternate) && py(e, t);
}
function IA() {
  return null;
}
var eS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Nm(e) {
  this._internalRoot = e;
}
sd.prototype.render = Nm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(te(409));
  id(e, t, null, null);
};
sd.prototype.unmount = Nm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zo(function () {
      id(null, e, null, null);
    }),
      (t[Ar] = null);
  }
};
function sd(e) {
  this._internalRoot = e;
}
sd.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wr.length && t !== 0 && t < Wr[n].priority; n++);
    Wr.splice(n, 0, e), n === 0 && Nb(e);
  }
};
function Im(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ad(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function hy() {}
function OA(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Uu(s);
        i.call(u);
      };
    }
    var s = Zx(t, r, e, 0, null, !1, !1, "", hy);
    return (
      (e._reactRootContainer = s),
      (e[Ar] = s.current),
      Ea(e.nodeType === 8 ? e.parentNode : e),
      zo(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Uu(l);
      a.call(u);
    };
  }
  var l = Pm(e, 0, !1, null, null, !1, !1, "", hy);
  return (
    (e._reactRootContainer = l),
    (e[Ar] = l.current),
    Ea(e.nodeType === 8 ? e.parentNode : e),
    zo(function () {
      id(t, l, n, r);
    }),
    l
  );
}
function ld(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Uu(s);
        a.call(l);
      };
    }
    id(t, s, e, o);
  } else s = OA(n, t, e, o, r);
  return Uu(s);
}
Tb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bs(t.pendingLanes);
        n !== 0 &&
          (Jh(t, n | 1), ln(t, vt()), !(Be & 6) && ((Ui = vt() + 500), fo()));
      }
      break;
    case 13:
      zo(function () {
        var r = Pr(e, 1);
        if (r !== null) {
          var o = Xt();
          Yn(r, e, 1, o);
        }
      }),
        $m(e, 1);
  }
};
Zh = function (e) {
  if (e.tag === 13) {
    var t = Pr(e, 134217728);
    if (t !== null) {
      var n = Xt();
      Yn(t, e, 134217728, n);
    }
    $m(e, 134217728);
  }
};
Ab = function (e) {
  if (e.tag === 13) {
    var t = no(e),
      n = Pr(e, t);
    if (n !== null) {
      var r = Xt();
      Yn(n, e, t, r);
    }
    $m(e, t);
  }
};
Pb = function () {
  return qe;
};
$b = function (e, t) {
  var n = qe;
  try {
    return (qe = e), t();
  } finally {
    qe = n;
  }
};
pp = function (e, t, n) {
  switch (t) {
    case "input":
      if ((sp(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Jc(r);
            if (!o) throw Error(te(90));
            lb(r), sp(r, o);
          }
        }
      }
      break;
    case "textarea":
      cb(e, n);
      break;
    case "select":
      (t = n.value), t != null && ki(e, !!n.multiple, t, !1);
  }
};
gb = _m;
yb = zo;
var LA = { usingClientEntryPoint: !1, Events: [qa, gi, Jc, mb, vb, _m] },
  ws = {
    findFiberByHostInstance: Ro,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  MA = {
    bundleType: ws.bundleType,
    version: ws.version,
    rendererPackageName: ws.rendererPackageName,
    rendererConfig: ws.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Sb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ws.findFiberByHostInstance || IA,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_l.isDisabled && _l.supportsFiber)
    try {
      (Gc = _l.inject(MA)), (fr = _l);
    } catch {}
}
Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = LA;
Sn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Im(t)) throw Error(te(200));
  return NA(e, t, null, n);
};
Sn.createRoot = function (e, t) {
  if (!Im(e)) throw Error(te(299));
  var n = !1,
    r = "",
    o = eS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Pm(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ar] = t.current),
    Ea(e.nodeType === 8 ? e.parentNode : e),
    new Nm(t)
  );
};
Sn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(te(188))
      : ((e = Object.keys(e).join(",")), Error(te(268, e)));
  return (e = Sb(t)), (e = e === null ? null : e.stateNode), e;
};
Sn.flushSync = function (e) {
  return zo(e);
};
Sn.hydrate = function (e, t, n) {
  if (!ad(t)) throw Error(te(200));
  return ld(null, e, t, !0, n);
};
Sn.hydrateRoot = function (e, t, n) {
  if (!Im(e)) throw Error(te(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = eS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Zx(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Ar] = t.current),
    Ea(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new sd(t);
};
Sn.render = function (e, t, n) {
  if (!ad(t)) throw Error(te(200));
  return ld(null, e, t, !1, n);
};
Sn.unmountComponentAtNode = function (e) {
  if (!ad(e)) throw Error(te(40));
  return e._reactRootContainer
    ? (zo(function () {
        ld(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ar] = null);
        });
      }),
      !0)
    : !1;
};
Sn.unstable_batchedUpdates = _m;
Sn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ad(n)) throw Error(te(200));
  if (e == null || e._reactInternals === void 0) throw Error(te(38));
  return ld(e, t, n, !1, r);
};
Sn.version = "18.2.0-next-9e3b772b8-20220608";
function tS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tS);
    } catch (e) {
      console.error(e);
    }
}
tS(), (Z1.exports = Sn);
var ud = Z1.exports;
const Us = xh(ud),
  my = { disabled: !1 },
  Vu = he.createContext(null);
var FA = function (t) {
    return t.scrollTop;
  },
  Vs = "unmounted",
  bo = "exited",
  xo = "entering",
  ai = "entered",
  qp = "exiting",
  Ir = (function (e) {
    J1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = bo), (i.appearStatus = xo))
            : (l = ai)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = Vs)
          : (l = bo),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === Vs ? { status: bo } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== xo && s !== ai && (i = xo)
            : (s === xo || s === ai) && (i = qp);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === xo)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Us.findDOMNode(this);
              s && FA(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === bo &&
            this.setState({ status: Vs });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [Us.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          p = a ? d.appear : d.enter;
        if ((!o && !s) || my.disabled) {
          this.safeSetState({ status: ai }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: xo }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(p, function () {
                i.safeSetState({ status: ai }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Us.findDOMNode(this);
        if (!i || my.disabled) {
          this.safeSetState({ status: bo }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: qp }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: bo }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Us.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Vs) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = le(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return he.createElement(
          Vu.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : he.cloneElement(he.Children.only(s), a)
        );
      }),
      t
    );
  })(he.Component);
Ir.contextType = Vu;
Ir.propTypes = {};
function ri() {}
Ir.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ri,
  onEntering: ri,
  onEntered: ri,
  onExit: ri,
  onExiting: ri,
  onExited: ri,
};
Ir.UNMOUNTED = Vs;
Ir.EXITED = bo;
Ir.ENTERING = xo;
Ir.ENTERED = ai;
Ir.EXITING = qp;
const Om = Ir;
function DA(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Lm(e, t) {
  var n = function (i) {
      return t && x.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      x.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function jA(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function _o(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function BA(e, t) {
  return Lm(e.children, function (n) {
    return x.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: _o(n, "appear", e),
      enter: _o(n, "enter", e),
      exit: _o(n, "exit", e),
    });
  });
}
function zA(e, t, n) {
  var r = Lm(e.children),
    o = jA(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (x.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = x.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = x.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: _o(s, "exit", e),
              enter: _o(s, "enter", e),
            }))
          : !l && a && !c
          ? (o[i] = x.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            x.isValidElement(u) &&
            (o[i] = x.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: _o(s, "exit", e),
              enter: _o(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var UA =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  VA = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Mm = (function (e) {
    J1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(DA(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? BA(o, a) : zA(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = Lm(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = R({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = le(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = UA(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? he.createElement(Vu.Provider, { value: l }, u)
            : he.createElement(
                Vu.Provider,
                { value: l },
                he.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(he.Component);
Mm.propTypes = {};
Mm.defaultProps = VA;
const WA = Mm,
  Fm = (e) => e.scrollTop;
function Vi(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  };
}
function HA(e) {
  return Ee("MuiPaper", e);
}
_e("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const qA = ["className", "component", "elevation", "square", "variant"],
  KA = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return ke(i, HA, o);
  },
  GA = ne("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return R(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        R(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${Fe(
                "#fff",
                ug(t.elevation)
              )}, ${Fe("#fff", ug(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  QA = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: a = !1,
        variant: l = "elevation",
      } = r,
      u = le(r, qA),
      c = R({}, r, { component: i, elevation: s, square: a, variant: l }),
      d = KA(c);
    return f.jsx(
      GA,
      R({ as: i, ownerState: c, className: ue(d.root, o), ref: n }, u)
    );
  }),
  qo = QA;
function Wi(e) {
  return typeof e == "string";
}
function XA(e, t, n) {
  return e === void 0 || Wi(e)
    ? t
    : R({}, t, { ownerState: R({}, t.ownerState, n) });
}
function nS(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function YA(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function vy(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function JA(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const b = ue(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      m = R(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      v = R({}, n, o, r);
    return (
      b.length > 0 && (v.className = b),
      Object.keys(m).length > 0 && (v.style = m),
      { props: v, internalRef: void 0 }
    );
  }
  const s = nS(R({}, o, r)),
    a = vy(r),
    l = vy(o),
    u = t(s),
    c = ue(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = R(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    p = R({}, u, n, l, a);
  return (
    c.length > 0 && (p.className = c),
    Object.keys(d).length > 0 && (p.style = d),
    { props: p, internalRef: u.ref }
  );
}
const ZA = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function Hi(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = le(e, ZA),
    a = i ? {} : YA(r, o),
    { props: l, internalRef: u } = JA(R({}, s, { externalSlotProps: a })),
    c = gt(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return XA(n, R({}, l, { ref: c }), o);
}
function eP(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [c, d] = x.useState(!1),
    p = ue(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    b = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    m = ue(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && d(!0),
    x.useEffect(() => {
      if (!a && l != null) {
        const v = setTimeout(l, u);
        return () => {
          clearTimeout(v);
        };
      }
    }, [l, a, u]),
    f.jsx("span", {
      className: p,
      style: b,
      children: f.jsx("span", { className: m }),
    })
  );
}
const _n = _e("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  tP = ["center", "classes", "className"];
let cd = (e) => e,
  gy,
  yy,
  by,
  xy;
const Kp = 550,
  nP = 80,
  rP = Nh(
    gy ||
      (gy = cd`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  oP = Nh(
    yy ||
      (yy = cd`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  iP = Nh(
    by ||
      (by = cd`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  sP = ne("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  aP = ne(eP, { name: "MuiTouchRipple", slot: "Ripple" })(
    xy ||
      (xy = cd`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    _n.rippleVisible,
    rP,
    Kp,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    _n.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    _n.child,
    _n.childLeaving,
    oP,
    Kp,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    _n.childPulsate,
    iP,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  lP = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = le(r, tP),
      [l, u] = x.useState([]),
      c = x.useRef(0),
      d = x.useRef(null);
    x.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const p = x.useRef(!1),
      b = j1(),
      m = x.useRef(null),
      v = x.useRef(null),
      C = x.useCallback(
        (S) => {
          const {
            pulsate: E,
            rippleX: _,
            rippleY: w,
            rippleSize: k,
            cb: L,
          } = S;
          u((P) => [
            ...P,
            f.jsx(
              aP,
              {
                classes: {
                  ripple: ue(i.ripple, _n.ripple),
                  rippleVisible: ue(i.rippleVisible, _n.rippleVisible),
                  ripplePulsate: ue(i.ripplePulsate, _n.ripplePulsate),
                  child: ue(i.child, _n.child),
                  childLeaving: ue(i.childLeaving, _n.childLeaving),
                  childPulsate: ue(i.childPulsate, _n.childPulsate),
                },
                timeout: Kp,
                pulsate: E,
                rippleX: _,
                rippleY: w,
                rippleSize: k,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = L);
        },
        [i]
      ),
      g = x.useCallback(
        (S = {}, E = {}, _ = () => {}) => {
          const {
            pulsate: w = !1,
            center: k = o || E.pulsate,
            fakeElement: L = !1,
          } = E;
          if ((S == null ? void 0 : S.type) === "mousedown" && p.current) {
            p.current = !1;
            return;
          }
          (S == null ? void 0 : S.type) === "touchstart" && (p.current = !0);
          const P = L ? null : v.current,
            U = P
              ? P.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let B, F, z;
          if (
            k ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (B = Math.round(U.width / 2)), (F = Math.round(U.height / 2));
          else {
            const { clientX: V, clientY: K } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S;
            (B = Math.round(V - U.left)), (F = Math.round(K - U.top));
          }
          if (k)
            (z = Math.sqrt((2 * U.width ** 2 + U.height ** 2) / 3)),
              z % 2 === 0 && (z += 1);
          else {
            const V =
                Math.max(Math.abs((P ? P.clientWidth : 0) - B), B) * 2 + 2,
              K = Math.max(Math.abs((P ? P.clientHeight : 0) - F), F) * 2 + 2;
            z = Math.sqrt(V ** 2 + K ** 2);
          }
          S != null && S.touches
            ? m.current === null &&
              ((m.current = () => {
                C({ pulsate: w, rippleX: B, rippleY: F, rippleSize: z, cb: _ });
              }),
              b.start(nP, () => {
                m.current && (m.current(), (m.current = null));
              }))
            : C({ pulsate: w, rippleX: B, rippleY: F, rippleSize: z, cb: _ });
        },
        [o, C, b]
      ),
      h = x.useCallback(() => {
        g({}, { pulsate: !0 });
      }, [g]),
      y = x.useCallback(
        (S, E) => {
          if (
            (b.clear(),
            (S == null ? void 0 : S.type) === "touchend" && m.current)
          ) {
            m.current(),
              (m.current = null),
              b.start(0, () => {
                y(S, E);
              });
            return;
          }
          (m.current = null),
            u((_) => (_.length > 0 ? _.slice(1) : _)),
            (d.current = E);
        },
        [b]
      );
    return (
      x.useImperativeHandle(n, () => ({ pulsate: h, start: g, stop: y }), [
        h,
        g,
        y,
      ]),
      f.jsx(
        sP,
        R({ className: ue(_n.root, i.root, s), ref: v }, a, {
          children: f.jsx(WA, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  uP = lP;
function cP(e) {
  return Ee("MuiButtonBase", e);
}
const dP = _e("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  fP = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  pP = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = ke({ root: ["root", t && "disabled", n && "focusVisible"] }, cP, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  hP = ne("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${dP.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  mP = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: p = !1,
        LinkComponent: b = "a",
        onBlur: m,
        onClick: v,
        onContextMenu: C,
        onDragLeave: g,
        onFocus: h,
        onFocusVisible: y,
        onKeyDown: S,
        onKeyUp: E,
        onMouseDown: _,
        onMouseLeave: w,
        onMouseUp: k,
        onTouchEnd: L,
        onTouchMove: P,
        onTouchStart: U,
        tabIndex: B = 0,
        TouchRippleProps: F,
        touchRippleRef: z,
        type: V,
      } = r,
      K = le(r, fP),
      G = x.useRef(null),
      N = x.useRef(null),
      O = gt(N, z),
      { isFocusVisibleRef: D, onFocus: X, onBlur: A, ref: H } = B1(),
      [W, se] = x.useState(!1);
    u && W && se(!1),
      x.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            se(!0), G.current.focus();
          },
        }),
        []
      );
    const [Y, ve] = x.useState(!1);
    x.useEffect(() => {
      ve(!0);
    }, []);
    const ge = Y && !c && !u;
    x.useEffect(() => {
      W && p && !c && Y && N.current.pulsate();
    }, [c, p, W, Y]);
    function oe(Se, Ht, zn = d) {
      return Co(
        (er) => (Ht && Ht(er), !zn && N.current && N.current[Se](er), !0)
      );
    }
    const Ae = oe("start", _),
      ye = oe("stop", C),
      be = oe("stop", g),
      me = oe("stop", k),
      $e = oe("stop", (Se) => {
        W && Se.preventDefault(), w && w(Se);
      }),
      je = oe("start", U),
      ct = oe("stop", L),
      Qe = oe("stop", P),
      T = oe(
        "stop",
        (Se) => {
          A(Se), D.current === !1 && se(!1), m && m(Se);
        },
        !1
      ),
      M = Co((Se) => {
        G.current || (G.current = Se.currentTarget),
          X(Se),
          D.current === !0 && (se(!0), y && y(Se)),
          h && h(Se);
      }),
      j = () => {
        const Se = G.current;
        return l && l !== "button" && !(Se.tagName === "A" && Se.href);
      },
      Z = x.useRef(!1),
      re = Co((Se) => {
        p &&
          !Z.current &&
          W &&
          N.current &&
          Se.key === " " &&
          ((Z.current = !0),
          N.current.stop(Se, () => {
            N.current.start(Se);
          })),
          Se.target === Se.currentTarget &&
            j() &&
            Se.key === " " &&
            Se.preventDefault(),
          S && S(Se),
          Se.target === Se.currentTarget &&
            j() &&
            Se.key === "Enter" &&
            !u &&
            (Se.preventDefault(), v && v(Se));
      }),
      Q = Co((Se) => {
        p &&
          Se.key === " " &&
          N.current &&
          W &&
          !Se.defaultPrevented &&
          ((Z.current = !1),
          N.current.stop(Se, () => {
            N.current.pulsate(Se);
          })),
          E && E(Se),
          v &&
            Se.target === Se.currentTarget &&
            j() &&
            Se.key === " " &&
            !Se.defaultPrevented &&
            v(Se);
      });
    let ie = l;
    ie === "button" && (K.href || K.to) && (ie = b);
    const Pe = {};
    ie === "button"
      ? ((Pe.type = V === void 0 ? "button" : V), (Pe.disabled = u))
      : (!K.href && !K.to && (Pe.role = "button"),
        u && (Pe["aria-disabled"] = u));
    const We = gt(n, H, G),
      Ze = R({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: p,
        tabIndex: B,
        focusVisible: W,
      }),
      Me = pP(Ze);
    return f.jsxs(
      hP,
      R(
        {
          as: ie,
          className: ue(Me.root, a),
          ownerState: Ze,
          onBlur: T,
          onClick: v,
          onContextMenu: ye,
          onFocus: M,
          onKeyDown: re,
          onKeyUp: Q,
          onMouseDown: Ae,
          onMouseLeave: $e,
          onMouseUp: me,
          onDragLeave: be,
          onTouchEnd: ct,
          onTouchMove: Qe,
          onTouchStart: je,
          ref: We,
          tabIndex: u ? -1 : B,
          type: V,
        },
        Pe,
        K,
        { children: [s, ge ? f.jsx(uP, R({ ref: O, center: i }, F)) : null] }
      )
    );
  }),
  ao = mP;
function vP(e) {
  return Ee("MuiAlert", e);
}
const gP = _e("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError",
  ]),
  Sy = gP;
function yP(e) {
  return Ee("MuiIconButton", e);
}
const bP = _e("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  xP = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  SP = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${ee(r)}`,
          o && `edge${ee(o)}`,
          `size${ee(i)}`,
        ],
      };
    return ke(s, yP, t);
  },
  CP = ne(ao, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${ee(n.color)}`],
        n.edge && t[`edge${ee(n.edge)}`],
        t[`size${ee(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      R(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Fe(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return R(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          R(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": R(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Fe(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${bP.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  RP = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: s,
        color: a = "default",
        disabled: l = !1,
        disableFocusRipple: u = !1,
        size: c = "medium",
      } = r,
      d = le(r, xP),
      p = R({}, r, {
        edge: o,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        size: c,
      }),
      b = SP(p);
    return f.jsx(
      CP,
      R(
        {
          className: ue(b.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: l,
          ref: n,
          ownerState: p,
        },
        d,
        { children: i }
      )
    );
  }),
  rS = RP,
  wP = mr(
    f.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
    "SuccessOutlined"
  ),
  EP = mr(
    f.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
    "ReportProblemOutlined"
  ),
  _P = mr(
    f.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "ErrorOutline"
  ),
  kP = mr(
    f.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
    "InfoOutlined"
  ),
  TP = mr(
    f.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  AP = [
    "action",
    "children",
    "className",
    "closeText",
    "color",
    "components",
    "componentsProps",
    "icon",
    "iconMapping",
    "onClose",
    "role",
    "severity",
    "slotProps",
    "slots",
    "variant",
  ],
  PP = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e,
      i = {
        root: ["root", `${t}${ee(n || r)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return ke(i, vP, o);
  },
  $P = ne(qo, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${ee(n.color || n.severity)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light" ? gu : yu,
      r = e.palette.mode === "light" ? yu : gu,
      o = t.color || t.severity;
    return R(
      {},
      e.typography.body2,
      { backgroundColor: "transparent", display: "flex", padding: "6px 16px" },
      o &&
        t.variant === "standard" && {
          color: e.vars
            ? e.vars.palette.Alert[`${o}Color`]
            : n(e.palette[o].light, 0.6),
          backgroundColor: e.vars
            ? e.vars.palette.Alert[`${o}StandardBg`]
            : r(e.palette[o].light, 0.9),
          [`& .${Sy.icon}`]: e.vars
            ? { color: e.vars.palette.Alert[`${o}IconColor`] }
            : { color: e.palette[o].main },
        },
      o &&
        t.variant === "outlined" && {
          color: e.vars
            ? e.vars.palette.Alert[`${o}Color`]
            : n(e.palette[o].light, 0.6),
          border: `1px solid ${(e.vars || e).palette[o].light}`,
          [`& .${Sy.icon}`]: e.vars
            ? { color: e.vars.palette.Alert[`${o}IconColor`] }
            : { color: e.palette[o].main },
        },
      o &&
        t.variant === "filled" &&
        R(
          { fontWeight: e.typography.fontWeightMedium },
          e.vars
            ? {
                color: e.vars.palette.Alert[`${o}FilledColor`],
                backgroundColor: e.vars.palette.Alert[`${o}FilledBg`],
              }
            : {
                backgroundColor:
                  e.palette.mode === "dark"
                    ? e.palette[o].dark
                    : e.palette[o].main,
                color: e.palette.getContrastText(e.palette[o].main),
              }
        )
    );
  }),
  NP = ne("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  IP = ne("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message,
  })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
  Cy = ne("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  Ry = {
    success: f.jsx(wP, { fontSize: "inherit" }),
    warning: f.jsx(EP, { fontSize: "inherit" }),
    error: f.jsx(_P, { fontSize: "inherit" }),
    info: f.jsx(kP, { fontSize: "inherit" }),
  },
  OP = x.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = Te({ props: t, name: "MuiAlert" }),
      {
        action: c,
        children: d,
        className: p,
        closeText: b = "Close",
        color: m,
        components: v = {},
        componentsProps: C = {},
        icon: g,
        iconMapping: h = Ry,
        onClose: y,
        role: S = "alert",
        severity: E = "success",
        slotProps: _ = {},
        slots: w = {},
        variant: k = "standard",
      } = u,
      L = le(u, AP),
      P = R({}, u, { color: m, severity: E, variant: k }),
      U = PP(P),
      B =
        (r = (o = w.closeButton) != null ? o : v.CloseButton) != null ? r : rS,
      F = (i = (s = w.closeIcon) != null ? s : v.CloseIcon) != null ? i : TP,
      z = (a = _.closeButton) != null ? a : C.closeButton,
      V = (l = _.closeIcon) != null ? l : C.closeIcon;
    return f.jsxs(
      $P,
      R(
        {
          role: S,
          elevation: 0,
          ownerState: P,
          className: ue(U.root, p),
          ref: n,
        },
        L,
        {
          children: [
            g !== !1
              ? f.jsx(NP, {
                  ownerState: P,
                  className: U.icon,
                  children: g || h[E] || Ry[E],
                })
              : null,
            f.jsx(IP, { ownerState: P, className: U.message, children: d }),
            c != null
              ? f.jsx(Cy, { ownerState: P, className: U.action, children: c })
              : null,
            c == null && y
              ? f.jsx(Cy, {
                  ownerState: P,
                  className: U.action,
                  children: f.jsx(
                    B,
                    R(
                      {
                        size: "small",
                        "aria-label": b,
                        title: b,
                        color: "inherit",
                        onClick: y,
                      },
                      z,
                      { children: f.jsx(F, R({ fontSize: "small" }, V)) }
                    )
                  ),
                })
              : null,
          ],
        }
      )
    );
  }),
  LP = OP;
function MP(e) {
  return Ee("MuiTypography", e);
}
_e("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const FP = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  DP = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${ee(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return ke(a, MP, s);
  },
  jP = ne("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${ee(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  wy = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  BP = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  zP = (e) => BP[e] || e,
  UP = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiTypography" }),
      o = zP(r.color),
      i = Oc(R({}, r, { color: o })),
      {
        align: s = "inherit",
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: p = "body1",
        variantMapping: b = wy,
      } = i,
      m = le(i, FP),
      v = R({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: p,
        variantMapping: b,
      }),
      C = l || (d ? "p" : b[p] || wy[p]) || "span",
      g = DP(v);
    return f.jsx(
      jP,
      R({ as: C, ref: n, ownerState: v, className: ue(g.root, a) }, m)
    );
  }),
  ko = UP;
function VP(e) {
  return Ee("MuiAppBar", e);
}
_e("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const WP = ["className", "color", "enableColorOnDark", "position"],
  HP = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${ee(t)}`, `position${ee(n)}`] };
    return ke(o, VP, r);
  },
  kl = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  qP = ne(qo, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${ee(n.position)}`], t[`color${ee(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return R(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        R(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            R(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      e.vars &&
        R(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : kl(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : kl(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : kl(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : kl(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          {
            backgroundColor: "var(--AppBar-background)",
            color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)",
          },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    );
  }),
  KP = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: a = "fixed",
      } = r,
      l = le(r, WP),
      u = R({}, r, { color: i, position: a, enableColorOnDark: s }),
      c = HP(u);
    return f.jsx(
      qP,
      R(
        {
          square: !0,
          component: "header",
          ownerState: u,
          elevation: 4,
          className: ue(c.root, o, a === "fixed" && "mui-fixed"),
          ref: n,
        },
        l
      )
    );
  }),
  GP = KP,
  QP = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
  ].join(",");
function XP(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function YP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function JP(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    YP(e)
  );
}
function ZP(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(QP)).forEach((r, o) => {
      const i = XP(r);
      i === -1 ||
        !JP(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function e$() {
  return !0;
}
function t$(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = ZP,
      isEnabled: s = e$,
      open: a,
    } = e,
    l = x.useRef(!1),
    u = x.useRef(null),
    c = x.useRef(null),
    d = x.useRef(null),
    p = x.useRef(null),
    b = x.useRef(!1),
    m = x.useRef(null),
    v = gt(t.ref, m),
    C = x.useRef(null);
  x.useEffect(() => {
    !a || !m.current || (b.current = !n);
  }, [n, a]),
    x.useEffect(() => {
      if (!a || !m.current) return;
      const y = on(m.current);
      return (
        m.current.contains(y.activeElement) ||
          (m.current.hasAttribute("tabIndex") ||
            m.current.setAttribute("tabIndex", "-1"),
          b.current && m.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [a]),
    x.useEffect(() => {
      if (!a || !m.current) return;
      const y = on(m.current),
        S = (w) => {
          (C.current = w),
            !(r || !s() || w.key !== "Tab") &&
              y.activeElement === m.current &&
              w.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        E = () => {
          const w = m.current;
          if (w === null) return;
          if (!y.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            w.contains(y.activeElement) ||
            (r &&
              y.activeElement !== u.current &&
              y.activeElement !== c.current)
          )
            return;
          if (y.activeElement !== p.current) p.current = null;
          else if (p.current !== null) return;
          if (!b.current) return;
          let k = [];
          if (
            ((y.activeElement === u.current || y.activeElement === c.current) &&
              (k = i(m.current)),
            k.length > 0)
          ) {
            var L, P;
            const U = !!(
                (L = C.current) != null &&
                L.shiftKey &&
                ((P = C.current) == null ? void 0 : P.key) === "Tab"
              ),
              B = k[0],
              F = k[k.length - 1];
            typeof B != "string" &&
              typeof F != "string" &&
              (U ? F.focus() : B.focus());
          } else w.focus();
        };
      y.addEventListener("focusin", E), y.addEventListener("keydown", S, !0);
      const _ = setInterval(() => {
        y.activeElement && y.activeElement.tagName === "BODY" && E();
      }, 50);
      return () => {
        clearInterval(_),
          y.removeEventListener("focusin", E),
          y.removeEventListener("keydown", S, !0);
      };
    }, [n, r, o, s, a, i]);
  const g = (y) => {
      d.current === null && (d.current = y.relatedTarget),
        (b.current = !0),
        (p.current = y.target);
      const S = t.props.onFocus;
      S && S(y);
    },
    h = (y) => {
      d.current === null && (d.current = y.relatedTarget), (b.current = !0);
    };
  return f.jsxs(x.Fragment, {
    children: [
      f.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: h,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      x.cloneElement(t, { ref: v, onFocus: g }),
      f.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: h,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function n$(e) {
  return typeof e == "function" ? e() : e;
}
const r$ = x.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [s, a] = x.useState(null),
    l = gt(x.isValidElement(r) ? r.ref : null, n);
  if (
    (On(() => {
      i || a(n$(o) || document.body);
    }, [o, i]),
    On(() => {
      if (s && !i)
        return (
          mu(n, s),
          () => {
            mu(n, null);
          }
        );
    }, [n, s, i]),
    i)
  ) {
    if (x.isValidElement(r)) {
      const u = { ref: l };
      return x.cloneElement(r, u);
    }
    return f.jsx(x.Fragment, { children: r });
  }
  return f.jsx(x.Fragment, { children: s && ud.createPortal(r, s) });
});
function o$(e) {
  const t = on(e);
  return t.body === e
    ? hr(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function ia(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ey(e) {
  return parseInt(hr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function i$(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function _y(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !i$(s);
    a && l && ia(s, o);
  });
}
function Cf(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function s$(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (o$(r)) {
      const s = z1(on(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Ey(r) + s}px`);
      const a = on(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${Ey(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = on(r).body;
    else {
      const s = r.parentElement,
        a = hr(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function a$(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class l$ {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && ia(t.modalRef, !1);
    const o = a$(n);
    _y(n, t.mount, t.modalRef, o, !0);
    const i = Cf(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = Cf(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = s$(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Cf(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && ia(t.modalRef, n),
        _y(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ia(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function u$(e) {
  return typeof e == "function" ? e() : e;
}
function c$(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const d$ = new l$();
function f$(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = d$,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: c,
      rootRef: d,
    } = e,
    p = x.useRef({}),
    b = x.useRef(null),
    m = x.useRef(null),
    v = gt(m, d),
    [C, g] = x.useState(!c),
    h = c$(l);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const S = () => on(b.current),
    E = () => (
      (p.current.modalRef = m.current), (p.current.mount = b.current), p.current
    ),
    _ = () => {
      o.mount(E(), { disableScrollLock: r }),
        m.current && (m.current.scrollTop = 0);
    },
    w = Co(() => {
      const K = u$(t) || S().body;
      o.add(E(), K), m.current && _();
    }),
    k = x.useCallback(() => o.isTopModal(E()), [o]),
    L = Co((K) => {
      (b.current = K), K && (c && k() ? _() : m.current && ia(m.current, y));
    }),
    P = x.useCallback(() => {
      o.remove(E(), y);
    }, [y, o]);
  x.useEffect(
    () => () => {
      P();
    },
    [P]
  ),
    x.useEffect(() => {
      c ? w() : (!h || !i) && P();
    }, [c, P, h, i, w]);
  const U = (K) => (G) => {
      var N;
      (N = K.onKeyDown) == null || N.call(K, G),
        !(G.key !== "Escape" || G.which === 229 || !k()) &&
          (n || (G.stopPropagation(), u && u(G, "escapeKeyDown")));
    },
    B = (K) => (G) => {
      var N;
      (N = K.onClick) == null || N.call(K, G),
        G.target === G.currentTarget && u && u(G, "backdropClick");
    };
  return {
    getRootProps: (K = {}) => {
      const G = nS(e);
      delete G.onTransitionEnter, delete G.onTransitionExited;
      const N = R({}, G, K);
      return R({ role: "presentation" }, N, { onKeyDown: U(N), ref: v });
    },
    getBackdropProps: (K = {}) => {
      const G = K;
      return R({ "aria-hidden": !0 }, G, { onClick: B(G), open: c });
    },
    getTransitionProps: () => {
      const K = () => {
          g(!1), s && s();
        },
        G = () => {
          g(!0), a && a(), i && P();
        };
      return {
        onEnter: hu(K, l == null ? void 0 : l.props.onEnter),
        onExited: hu(G, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: v,
    portalRef: L,
    isTopModal: k,
    exited: C,
    hasTransition: h,
  };
}
const p$ = ["onChange", "maxRows", "minRows", "style", "value"];
function Tl(e) {
  return parseInt(e, 10) || 0;
}
const h$ = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function ky(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflow)
  );
}
const m$ = x.forwardRef(function (t, n) {
    const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: a } = t,
      l = le(t, p$),
      { current: u } = x.useRef(a != null),
      c = x.useRef(null),
      d = gt(n, c),
      p = x.useRef(null),
      b = x.useRef(0),
      [m, v] = x.useState({ outerHeightStyle: 0 }),
      C = x.useCallback(() => {
        const S = c.current,
          _ = hr(S).getComputedStyle(S);
        if (_.width === "0px") return { outerHeightStyle: 0 };
        const w = p.current;
        (w.style.width = _.width),
          (w.value = S.value || t.placeholder || "x"),
          w.value.slice(-1) ===
            `
` && (w.value += " ");
        const k = _.boxSizing,
          L = Tl(_.paddingBottom) + Tl(_.paddingTop),
          P = Tl(_.borderBottomWidth) + Tl(_.borderTopWidth),
          U = w.scrollHeight;
        w.value = "x";
        const B = w.scrollHeight;
        let F = U;
        i && (F = Math.max(Number(i) * B, F)),
          o && (F = Math.min(Number(o) * B, F)),
          (F = Math.max(F, B));
        const z = F + (k === "border-box" ? L + P : 0),
          V = Math.abs(F - U) <= 1;
        return { outerHeightStyle: z, overflow: V };
      }, [o, i, t.placeholder]),
      g = (S, E) => {
        const { outerHeightStyle: _, overflow: w } = E;
        return b.current < 20 &&
          ((_ > 0 && Math.abs((S.outerHeightStyle || 0) - _) > 1) ||
            S.overflow !== w)
          ? ((b.current += 1), { overflow: w, outerHeightStyle: _ })
          : S;
      },
      h = x.useCallback(() => {
        const S = C();
        ky(S) || v((E) => g(E, S));
      }, [C]);
    On(() => {
      const S = () => {
          const U = C();
          ky(U) ||
            ud.flushSync(() => {
              v((B) => g(B, U));
            });
        },
        E = () => {
          (b.current = 0), S();
        };
      let _;
      const w = Cc(E),
        k = c.current,
        L = hr(k);
      L.addEventListener("resize", w);
      let P;
      return (
        typeof ResizeObserver < "u" &&
          ((P = new ResizeObserver(E)), P.observe(k)),
        () => {
          w.clear(),
            cancelAnimationFrame(_),
            L.removeEventListener("resize", w),
            P && P.disconnect();
        }
      );
    }, [C]),
      On(() => {
        h();
      }),
      x.useEffect(() => {
        b.current = 0;
      }, [a]);
    const y = (S) => {
      (b.current = 0), u || h(), r && r(S);
    };
    return f.jsxs(x.Fragment, {
      children: [
        f.jsx(
          "textarea",
          R(
            {
              value: a,
              onChange: y,
              ref: d,
              rows: i,
              style: R(
                {
                  height: m.outerHeightStyle,
                  overflow: m.overflow ? "hidden" : void 0,
                },
                s
              ),
            },
            l
          )
        ),
        f.jsx("textarea", {
          "aria-hidden": !0,
          className: t.className,
          readOnly: !0,
          ref: p,
          tabIndex: -1,
          style: R({}, h$.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
        }),
      ],
    });
  }),
  v$ = mr(
    f.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
    "Cancel"
  );
function g$(e) {
  return Ee("MuiChip", e);
}
const y$ = _e("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  ze = y$,
  b$ = [
    "avatar",
    "className",
    "clickable",
    "color",
    "component",
    "deleteIcon",
    "disabled",
    "icon",
    "label",
    "onClick",
    "onDelete",
    "onKeyDown",
    "onKeyUp",
    "size",
    "variant",
    "tabIndex",
    "skipFocusWhenDisabled",
  ],
  x$ = (e) => {
    const {
        classes: t,
        disabled: n,
        size: r,
        color: o,
        iconColor: i,
        onDelete: s,
        clickable: a,
        variant: l,
      } = e,
      u = {
        root: [
          "root",
          l,
          n && "disabled",
          `size${ee(r)}`,
          `color${ee(o)}`,
          a && "clickable",
          a && `clickableColor${ee(o)}`,
          s && "deletable",
          s && `deletableColor${ee(o)}`,
          `${l}${ee(o)}`,
        ],
        label: ["label", `label${ee(r)}`],
        avatar: ["avatar", `avatar${ee(r)}`, `avatarColor${ee(o)}`],
        icon: ["icon", `icon${ee(r)}`, `iconColor${ee(i)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${ee(r)}`,
          `deleteIconColor${ee(o)}`,
          `deleteIcon${ee(l)}Color${ee(o)}`,
        ],
      };
    return ke(u, g$, t);
  },
  S$ = ne("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        {
          color: r,
          iconColor: o,
          clickable: i,
          onDelete: s,
          size: a,
          variant: l,
        } = n;
      return [
        { [`& .${ze.avatar}`]: t.avatar },
        { [`& .${ze.avatar}`]: t[`avatar${ee(a)}`] },
        { [`& .${ze.avatar}`]: t[`avatarColor${ee(r)}`] },
        { [`& .${ze.icon}`]: t.icon },
        { [`& .${ze.icon}`]: t[`icon${ee(a)}`] },
        { [`& .${ze.icon}`]: t[`iconColor${ee(o)}`] },
        { [`& .${ze.deleteIcon}`]: t.deleteIcon },
        { [`& .${ze.deleteIcon}`]: t[`deleteIcon${ee(a)}`] },
        { [`& .${ze.deleteIcon}`]: t[`deleteIconColor${ee(r)}`] },
        { [`& .${ze.deleteIcon}`]: t[`deleteIcon${ee(l)}Color${ee(r)}`] },
        t.root,
        t[`size${ee(a)}`],
        t[`color${ee(r)}`],
        i && t.clickable,
        i && r !== "default" && t[`clickableColor${ee(r)})`],
        s && t.deletable,
        s && r !== "default" && t[`deletableColor${ee(r)}`],
        t[l],
        t[`${l}${ee(r)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
      return R(
        {
          maxWidth: "100%",
          fontFamily: e.typography.fontFamily,
          fontSize: e.typography.pxToRem(13),
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          color: (e.vars || e).palette.text.primary,
          backgroundColor: (e.vars || e).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: "nowrap",
          transition: e.transitions.create(["background-color", "box-shadow"]),
          cursor: "unset",
          outline: 0,
          textDecoration: "none",
          border: 0,
          padding: 0,
          verticalAlign: "middle",
          boxSizing: "border-box",
          [`&.${ze.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: "none",
          },
          [`& .${ze.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
            fontSize: e.typography.pxToRem(12),
          },
          [`& .${ze.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
          [`& .${ze.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark,
          },
          [`& .${ze.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10),
          },
          [`& .${ze.icon}`]: R(
            { marginLeft: 5, marginRight: -6 },
            t.size === "small" && {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4,
            },
            t.iconColor === t.color &&
              R(
                { color: e.vars ? e.vars.palette.Chip.defaultIconColor : n },
                t.color !== "default" && { color: "inherit" }
              )
          ),
          [`& .${ze.deleteIcon}`]: R(
            {
              WebkitTapHighlightColor: "transparent",
              color: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                : Fe(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: "pointer",
              margin: "0 5px 0 -6px",
              "&:hover": {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : Fe(e.palette.text.primary, 0.4),
              },
            },
            t.size === "small" && {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4,
            },
            t.color !== "default" && {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`
                : Fe(e.palette[t.color].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].contrastText,
              },
            }
          ),
        },
        t.size === "small" && { height: 24 },
        t.color !== "default" && {
          backgroundColor: (e.vars || e).palette[t.color].main,
          color: (e.vars || e).palette[t.color].contrastText,
        },
        t.onDelete && {
          [`&.${ze.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Fe(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        t.onDelete &&
          t.color !== "default" && {
            [`&.${ze.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      );
    },
    ({ theme: e, ownerState: t }) =>
      R(
        {},
        t.clickable && {
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Fe(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
          },
          [`&.${ze.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Fe(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
          "&:active": { boxShadow: (e.vars || e).shadows[1] },
        },
        t.clickable &&
          t.color !== "default" && {
            [`&:hover, &.${ze.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      R(
        {},
        t.variant === "outlined" && {
          backgroundColor: "transparent",
          border: e.vars
            ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
            : `1px solid ${
                e.palette.mode === "light"
                  ? e.palette.grey[400]
                  : e.palette.grey[700]
              }`,
          [`&.${ze.clickable}:hover`]: {
            backgroundColor: (e.vars || e).palette.action.hover,
          },
          [`&.${ze.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`& .${ze.avatar}`]: { marginLeft: 4 },
          [`& .${ze.avatarSmall}`]: { marginLeft: 2 },
          [`& .${ze.icon}`]: { marginLeft: 4 },
          [`& .${ze.iconSmall}`]: { marginLeft: 2 },
          [`& .${ze.deleteIcon}`]: { marginRight: 5 },
          [`& .${ze.deleteIconSmall}`]: { marginRight: 3 },
        },
        t.variant === "outlined" &&
          t.color !== "default" && {
            color: (e.vars || e).palette[t.color].main,
            border: `1px solid ${
              e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : Fe(e.palette[t.color].main, 0.7)
            }`,
            [`&.${ze.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : Fe(e.palette[t.color].main, e.palette.action.hoverOpacity),
            },
            [`&.${ze.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.focusOpacity
                  })`
                : Fe(e.palette[t.color].main, e.palette.action.focusOpacity),
            },
            [`& .${ze.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : Fe(e.palette[t.color].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].main,
              },
            },
          }
      )
  ),
  C$ = ne("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { size: r } = n;
      return [t.label, t[`label${ee(r)}`]];
    },
  })(({ ownerState: e }) =>
    R(
      {
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: "nowrap",
      },
      e.variant === "outlined" && { paddingLeft: 11, paddingRight: 11 },
      e.size === "small" && { paddingLeft: 8, paddingRight: 8 },
      e.size === "small" &&
        e.variant === "outlined" && { paddingLeft: 7, paddingRight: 7 }
    )
  );
function Ty(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const R$ = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiChip" }),
      {
        avatar: o,
        className: i,
        clickable: s,
        color: a = "default",
        component: l,
        deleteIcon: u,
        disabled: c = !1,
        icon: d,
        label: p,
        onClick: b,
        onDelete: m,
        onKeyDown: v,
        onKeyUp: C,
        size: g = "medium",
        variant: h = "filled",
        tabIndex: y,
        skipFocusWhenDisabled: S = !1,
      } = r,
      E = le(r, b$),
      _ = x.useRef(null),
      w = gt(_, n),
      k = (O) => {
        O.stopPropagation(), m && m(O);
      },
      L = (O) => {
        O.currentTarget === O.target && Ty(O) && O.preventDefault(), v && v(O);
      },
      P = (O) => {
        O.currentTarget === O.target &&
          (m && Ty(O)
            ? m(O)
            : O.key === "Escape" && _.current && _.current.blur()),
          C && C(O);
      },
      U = s !== !1 && b ? !0 : s,
      B = U || m ? ao : l || "div",
      F = R({}, r, {
        component: B,
        disabled: c,
        size: g,
        color: a,
        iconColor: (x.isValidElement(d) && d.props.color) || a,
        onDelete: !!m,
        clickable: U,
        variant: h,
      }),
      z = x$(F),
      V =
        B === ao
          ? R(
              { component: l || "div", focusVisibleClassName: z.focusVisible },
              m && { disableRipple: !0 }
            )
          : {};
    let K = null;
    m &&
      (K =
        u && x.isValidElement(u)
          ? x.cloneElement(u, {
              className: ue(u.props.className, z.deleteIcon),
              onClick: k,
            })
          : f.jsx(v$, { className: ue(z.deleteIcon), onClick: k }));
    let G = null;
    o &&
      x.isValidElement(o) &&
      (G = x.cloneElement(o, { className: ue(z.avatar, o.props.className) }));
    let N = null;
    return (
      d &&
        x.isValidElement(d) &&
        (N = x.cloneElement(d, { className: ue(z.icon, d.props.className) })),
      f.jsxs(
        S$,
        R(
          {
            as: B,
            className: ue(z.root, i),
            disabled: U && c ? !0 : void 0,
            onClick: b,
            onKeyDown: L,
            onKeyUp: P,
            ref: w,
            tabIndex: S && c ? -1 : y,
            ownerState: F,
          },
          V,
          E,
          {
            children: [
              G || N,
              f.jsx(C$, { className: ue(z.label), ownerState: F, children: p }),
              K,
            ],
          }
        )
      )
    );
  }),
  Ay = R$;
function po({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const w$ = x.createContext(void 0),
  Dm = w$;
function Or() {
  return x.useContext(Dm);
}
function oS(e) {
  return f.jsx(Sk, R({}, e, { defaultTheme: Fc, themeId: Oo }));
}
function Py(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Wu(e, t = !1) {
  return (
    e &&
    ((Py(e.value) && e.value !== "") ||
      (t && Py(e.defaultValue) && e.defaultValue !== ""))
  );
}
function E$(e) {
  return e.startAdornment;
}
function _$(e) {
  return Ee("MuiInputBase", e);
}
const k$ = _e("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  qi = k$,
  T$ = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  dd = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${ee(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  fd = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  A$ = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: c,
        readOnly: d,
        size: p,
        startAdornment: b,
        type: m,
      } = e,
      v = {
        root: [
          "root",
          `color${ee(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          p && p !== "medium" && `size${ee(p)}`,
          c && "multiline",
          b && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          d && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          m === "search" && "inputTypeSearch",
          c && "inputMultiline",
          p === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          b && "inputAdornedStart",
          i && "inputAdornedEnd",
          d && "readOnly",
        ],
      };
    return ke(v, _$, t);
  },
  pd = ne("div", { name: "MuiInputBase", slot: "Root", overridesResolver: dd })(
    ({ theme: e, ownerState: t }) =>
      R(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${qi.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          R({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  hd = ne("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: fd,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = R(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return R(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${qi.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${qi.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  P$ = f.jsx(oS, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  $$ = x.forwardRef(function (t, n) {
    var r;
    const o = Te({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: s,
        autoFocus: a,
        className: l,
        components: u = {},
        componentsProps: c = {},
        defaultValue: d,
        disabled: p,
        disableInjectingGlobalStyles: b,
        endAdornment: m,
        fullWidth: v = !1,
        id: C,
        inputComponent: g = "input",
        inputProps: h = {},
        inputRef: y,
        maxRows: S,
        minRows: E,
        multiline: _ = !1,
        name: w,
        onBlur: k,
        onChange: L,
        onClick: P,
        onFocus: U,
        onKeyDown: B,
        onKeyUp: F,
        placeholder: z,
        readOnly: V,
        renderSuffix: K,
        rows: G,
        slotProps: N = {},
        slots: O = {},
        startAdornment: D,
        type: X = "text",
        value: A,
      } = o,
      H = le(o, T$),
      W = h.value != null ? h.value : A,
      { current: se } = x.useRef(W != null),
      Y = x.useRef(),
      ve = x.useCallback((Me) => {}, []),
      ge = gt(Y, y, h.ref, ve),
      [oe, Ae] = x.useState(!1),
      ye = Or(),
      be = po({
        props: o,
        muiFormControl: ye,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (be.focused = ye ? ye.focused : oe),
      x.useEffect(() => {
        !ye && p && oe && (Ae(!1), k && k());
      }, [ye, p, oe, k]);
    const me = ye && ye.onFilled,
      $e = ye && ye.onEmpty,
      je = x.useCallback(
        (Me) => {
          Wu(Me) ? me && me() : $e && $e();
        },
        [me, $e]
      );
    On(() => {
      se && je({ value: W });
    }, [W, je, se]);
    const ct = (Me) => {
        if (be.disabled) {
          Me.stopPropagation();
          return;
        }
        U && U(Me),
          h.onFocus && h.onFocus(Me),
          ye && ye.onFocus ? ye.onFocus(Me) : Ae(!0);
      },
      Qe = (Me) => {
        k && k(Me),
          h.onBlur && h.onBlur(Me),
          ye && ye.onBlur ? ye.onBlur(Me) : Ae(!1);
      },
      T = (Me, ...Se) => {
        if (!se) {
          const Ht = Me.target || Y.current;
          if (Ht == null) throw new Error(oo(1));
          je({ value: Ht.value });
        }
        h.onChange && h.onChange(Me, ...Se), L && L(Me, ...Se);
      };
    x.useEffect(() => {
      je(Y.current);
    }, []);
    const M = (Me) => {
      Y.current && Me.currentTarget === Me.target && Y.current.focus(),
        P && P(Me);
    };
    let j = g,
      Z = h;
    _ &&
      j === "input" &&
      (G
        ? (Z = R({ type: void 0, minRows: G, maxRows: G }, Z))
        : (Z = R({ type: void 0, maxRows: S, minRows: E }, Z)),
      (j = m$));
    const re = (Me) => {
      je(
        Me.animationName === "mui-auto-fill-cancel" ? Y.current : { value: "x" }
      );
    };
    x.useEffect(() => {
      ye && ye.setAdornedStart(!!D);
    }, [ye, D]);
    const Q = R({}, o, {
        color: be.color || "primary",
        disabled: be.disabled,
        endAdornment: m,
        error: be.error,
        focused: be.focused,
        formControl: ye,
        fullWidth: v,
        hiddenLabel: be.hiddenLabel,
        multiline: _,
        size: be.size,
        startAdornment: D,
        type: X,
      }),
      ie = A$(Q),
      Pe = O.root || u.Root || pd,
      We = N.root || c.root || {},
      Ze = O.input || u.Input || hd;
    return (
      (Z = R({}, Z, (r = N.input) != null ? r : c.input)),
      f.jsxs(x.Fragment, {
        children: [
          !b && P$,
          f.jsxs(
            Pe,
            R(
              {},
              We,
              !Wi(Pe) && { ownerState: R({}, Q, We.ownerState) },
              { ref: n, onClick: M },
              H,
              {
                className: ue(
                  ie.root,
                  We.className,
                  l,
                  V && "MuiInputBase-readOnly"
                ),
                children: [
                  D,
                  f.jsx(Dm.Provider, {
                    value: null,
                    children: f.jsx(
                      Ze,
                      R(
                        {
                          ownerState: Q,
                          "aria-invalid": be.error,
                          "aria-describedby": i,
                          autoComplete: s,
                          autoFocus: a,
                          defaultValue: d,
                          disabled: be.disabled,
                          id: C,
                          onAnimationStart: re,
                          name: w,
                          placeholder: z,
                          readOnly: V,
                          required: be.required,
                          rows: G,
                          value: W,
                          onKeyDown: B,
                          onKeyUp: F,
                          type: X,
                        },
                        Z,
                        !Wi(Ze) && {
                          as: j,
                          ownerState: R({}, Q, Z.ownerState),
                        },
                        {
                          ref: ge,
                          className: ue(
                            ie.input,
                            Z.className,
                            V && "MuiInputBase-readOnly"
                          ),
                          onBlur: Qe,
                          onChange: T,
                          onFocus: ct,
                        }
                      )
                    ),
                  }),
                  m,
                  K ? K(R({}, be, { startAdornment: D })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  jm = $$;
function N$(e) {
  return Ee("MuiInput", e);
}
const I$ = R({}, qi, _e("MuiInput", ["root", "underline", "input"])),
  Es = I$;
function O$(e) {
  return Ee("MuiOutlinedInput", e);
}
const L$ = R(
    {},
    qi,
    _e("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  ),
  Fr = L$;
function M$(e) {
  return Ee("MuiFilledInput", e);
}
const F$ = R({}, qi, _e("MuiFilledInput", ["root", "underline", "input"])),
  vo = F$,
  D$ = mr(f.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  j$ = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  B$ = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  z$ = x.forwardRef(function (t, n) {
    const r = lo(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: p,
        onExit: b,
        onExited: m,
        onExiting: v,
        style: C,
        timeout: g = o,
        TransitionComponent: h = Om,
      } = t,
      y = le(t, j$),
      S = x.useRef(null),
      E = gt(S, a.ref, n),
      _ = (z) => (V) => {
        if (z) {
          const K = S.current;
          V === void 0 ? z(K) : z(K, V);
        }
      },
      w = _(p),
      k = _((z, V) => {
        Fm(z);
        const K = Vi({ style: C, timeout: g, easing: l }, { mode: "enter" });
        (z.style.webkitTransition = r.transitions.create("opacity", K)),
          (z.style.transition = r.transitions.create("opacity", K)),
          c && c(z, V);
      }),
      L = _(d),
      P = _(v),
      U = _((z) => {
        const V = Vi({ style: C, timeout: g, easing: l }, { mode: "exit" });
        (z.style.webkitTransition = r.transitions.create("opacity", V)),
          (z.style.transition = r.transitions.create("opacity", V)),
          b && b(z);
      }),
      B = _(m),
      F = (z) => {
        i && i(S.current, z);
      };
    return f.jsx(
      h,
      R(
        {
          appear: s,
          in: u,
          nodeRef: S,
          onEnter: k,
          onEntered: L,
          onEntering: w,
          onExit: U,
          onExited: B,
          onExiting: P,
          addEndListener: F,
          timeout: g,
        },
        y,
        {
          children: (z, V) =>
            x.cloneElement(
              a,
              R(
                {
                  style: R(
                    {
                      opacity: 0,
                      visibility: z === "exited" && !u ? "hidden" : void 0,
                    },
                    B$[z],
                    C,
                    a.props.style
                  ),
                  ref: E,
                },
                V
              )
            ),
        }
      )
    );
  }),
  iS = z$;
function U$(e) {
  return Ee("MuiBackdrop", e);
}
_e("MuiBackdrop", ["root", "invisible"]);
const V$ = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  W$ = (e) => {
    const { classes: t, invisible: n } = e;
    return ke({ root: ["root", n && "invisible"] }, U$, t);
  },
  H$ = ne("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    R(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  q$ = x.forwardRef(function (t, n) {
    var r, o, i;
    const s = Te({ props: t, name: "MuiBackdrop" }),
      {
        children: a,
        className: l,
        component: u = "div",
        components: c = {},
        componentsProps: d = {},
        invisible: p = !1,
        open: b,
        slotProps: m = {},
        slots: v = {},
        TransitionComponent: C = iS,
        transitionDuration: g,
      } = s,
      h = le(s, V$),
      y = R({}, s, { component: u, invisible: p }),
      S = W$(y),
      E = (r = m.root) != null ? r : d.root;
    return f.jsx(
      C,
      R({ in: b, timeout: g }, h, {
        children: f.jsx(
          H$,
          R({ "aria-hidden": !0 }, E, {
            as: (o = (i = v.root) != null ? i : c.Root) != null ? o : u,
            className: ue(S.root, l, E == null ? void 0 : E.className),
            ownerState: R({}, y, E == null ? void 0 : E.ownerState),
            classes: S,
            ref: n,
            children: a,
          })
        ),
      })
    );
  }),
  sS = q$,
  K$ = _e("MuiBox", ["root"]),
  G$ = K$,
  Q$ = Mc(),
  X$ = Ek({
    themeId: Oo,
    defaultTheme: Q$,
    defaultClassName: G$.root,
    generateClassName: Oh.generate,
  }),
  Qt = X$;
function Y$(e) {
  return Ee("MuiButton", e);
}
const J$ = _e("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Al = J$,
  Z$ = x.createContext({}),
  eN = Z$,
  tN = x.createContext(void 0),
  nN = tN,
  rN = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  oN = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${ee(t)}`,
          `size${ee(o)}`,
          `${i}Size${ee(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${ee(o)}`],
        endIcon: ["endIcon", `iconSize${ee(o)}`],
      },
      l = ke(a, Y$, s);
    return R({}, s, l);
  },
  aS = (e) =>
    R(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  iN = ne(ao, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${ee(n.color)}`],
        t[`size${ee(n.size)}`],
        t[`${n.variant}Size${ee(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return R(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": R(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Fe(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Fe(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Fe(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": R(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Al.focusVisible}`]: R(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Al.disabled}`]: R(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Fe(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Al.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Al.disabled}`]: { boxShadow: "none" },
      }
  ),
  sN = ne("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${ee(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    R(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      aS(e)
    )
  ),
  aN = ne("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${ee(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    R(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      aS(e)
    )
  ),
  lN = x.forwardRef(function (t, n) {
    const r = x.useContext(eN),
      o = x.useContext(nN),
      i = Ih(r, t),
      s = Te({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: c,
        disabled: d = !1,
        disableElevation: p = !1,
        disableFocusRipple: b = !1,
        endIcon: m,
        focusVisibleClassName: v,
        fullWidth: C = !1,
        size: g = "medium",
        startIcon: h,
        type: y,
        variant: S = "text",
      } = s,
      E = le(s, rN),
      _ = R({}, s, {
        color: l,
        component: u,
        disabled: d,
        disableElevation: p,
        disableFocusRipple: b,
        fullWidth: C,
        size: g,
        type: y,
        variant: S,
      }),
      w = oN(_),
      k =
        h && f.jsx(sN, { className: w.startIcon, ownerState: _, children: h }),
      L = m && f.jsx(aN, { className: w.endIcon, ownerState: _, children: m }),
      P = o || "";
    return f.jsxs(
      iN,
      R(
        {
          ownerState: _,
          className: ue(r.className, w.root, c, P),
          component: u,
          disabled: d,
          focusRipple: !b,
          focusVisibleClassName: ue(w.focusVisible, v),
          ref: n,
          type: y,
        },
        E,
        { classes: w, children: [k, a, L] }
      )
    );
  }),
  wt = lN;
function uN(e) {
  return Ee("MuiCard", e);
}
_e("MuiCard", ["root"]);
const cN = ["className", "raised"],
  dN = (e) => {
    const { classes: t } = e;
    return ke({ root: ["root"] }, uN, t);
  },
  fN = ne(qo, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ overflow: "hidden" })),
  pN = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1 } = r,
      s = le(r, cN),
      a = R({}, r, { raised: i }),
      l = dN(a);
    return f.jsx(
      fN,
      R(
        {
          className: ue(l.root, o),
          elevation: i ? 8 : void 0,
          ref: n,
          ownerState: a,
        },
        s
      )
    );
  }),
  hN = pN;
function mN(e) {
  return Ee("MuiCardContent", e);
}
_e("MuiCardContent", ["root"]);
const vN = ["className", "component"],
  gN = (e) => {
    const { classes: t } = e;
    return ke({ root: ["root"] }, mN, t);
  },
  yN = ne("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ padding: 16, "&:last-child": { paddingBottom: 24 } })),
  bN = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div" } = r,
      s = le(r, vN),
      a = R({}, r, { component: i }),
      l = gN(a);
    return f.jsx(
      yN,
      R({ as: i, className: ue(l.root, o), ownerState: a, ref: n }, s)
    );
  }),
  xN = bN;
function SN(e) {
  return Ee("PrivateSwitchBase", e);
}
_e("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const CN = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  RN = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${ee(o)}`],
        input: ["input"],
      };
    return ke(i, SN, t);
  },
  wN = ne(ao)(({ ownerState: e }) =>
    R(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  EN = ne("input", { shouldForwardProp: Dt })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  _N = x.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: s,
        defaultChecked: a,
        disabled: l,
        disableFocusRipple: u = !1,
        edge: c = !1,
        icon: d,
        id: p,
        inputProps: b,
        inputRef: m,
        name: v,
        onBlur: C,
        onChange: g,
        onFocus: h,
        readOnly: y,
        required: S = !1,
        tabIndex: E,
        type: _,
        value: w,
      } = t,
      k = le(t, CN),
      [L, P] = va({
        controlled: o,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      U = Or(),
      B = (O) => {
        h && h(O), U && U.onFocus && U.onFocus(O);
      },
      F = (O) => {
        C && C(O), U && U.onBlur && U.onBlur(O);
      },
      z = (O) => {
        if (O.nativeEvent.defaultPrevented) return;
        const D = O.target.checked;
        P(D), g && g(O, D);
      };
    let V = l;
    U && typeof V > "u" && (V = U.disabled);
    const K = _ === "checkbox" || _ === "radio",
      G = R({}, t, { checked: L, disabled: V, disableFocusRipple: u, edge: c }),
      N = RN(G);
    return f.jsxs(
      wN,
      R(
        {
          component: "span",
          className: ue(N.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: V,
          tabIndex: null,
          role: void 0,
          onFocus: B,
          onBlur: F,
          ownerState: G,
          ref: n,
        },
        k,
        {
          children: [
            f.jsx(
              EN,
              R(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: a,
                  className: N.input,
                  disabled: V,
                  id: K ? p : void 0,
                  name: v,
                  onChange: z,
                  readOnly: y,
                  ref: m,
                  required: S,
                  ownerState: G,
                  tabIndex: E,
                  type: _,
                },
                _ === "checkbox" && w === void 0 ? {} : { value: w },
                b
              )
            ),
            L ? i : d,
          ],
        }
      )
    );
  }),
  lS = _N,
  kN = (e, t) =>
    R(
      {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%",
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  TN = (e) =>
    R({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      "@media print": { backgroundColor: (e.vars || e).palette.common.white },
    }),
  AN = (e, t = !1) => {
    var n;
    const r = {};
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([s, a]) => {
        var l;
        r[e.getColorSchemeSelector(s).replace(/\s*&/, "")] = {
          colorScheme: (l = a.palette) == null ? void 0 : l.mode,
        };
      });
    let o = R(
      {
        html: kN(e, t),
        "*, *::before, *::after": { boxSizing: "inherit" },
        "strong, b": { fontWeight: e.typography.fontWeightBold },
        body: R({ margin: 0 }, TN(e), {
          "&::backdrop": {
            backgroundColor: (e.vars || e).palette.background.default,
          },
        }),
      },
      r
    );
    const i =
      (n = e.components) == null || (n = n.MuiCssBaseline) == null
        ? void 0
        : n.styleOverrides;
    return i && (o = [o, i]), o;
  };
function PN(e) {
  const t = Te({ props: e, name: "MuiCssBaseline" }),
    { children: n, enableColorScheme: r = !1 } = t;
  return f.jsxs(x.Fragment, {
    children: [f.jsx(oS, { styles: (o) => AN(o, r) }), n],
  });
}
function $N(e) {
  return Ee("MuiModal", e);
}
_e("MuiModal", ["root", "hidden", "backdrop"]);
const NN = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  IN = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return ke(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      $N,
      r
    );
  },
  ON = ne("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  LN = ne(sS, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  MN = x.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = Te({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = LN,
        BackdropProps: d,
        className: p,
        closeAfterTransition: b = !1,
        children: m,
        container: v,
        component: C,
        components: g = {},
        componentsProps: h = {},
        disableAutoFocus: y = !1,
        disableEnforceFocus: S = !1,
        disableEscapeKeyDown: E = !1,
        disablePortal: _ = !1,
        disableRestoreFocus: w = !1,
        disableScrollLock: k = !1,
        hideBackdrop: L = !1,
        keepMounted: P = !1,
        onBackdropClick: U,
        open: B,
        slotProps: F,
        slots: z,
      } = u,
      V = le(u, NN),
      K = R({}, u, {
        closeAfterTransition: b,
        disableAutoFocus: y,
        disableEnforceFocus: S,
        disableEscapeKeyDown: E,
        disablePortal: _,
        disableRestoreFocus: w,
        disableScrollLock: k,
        hideBackdrop: L,
        keepMounted: P,
      }),
      {
        getRootProps: G,
        getBackdropProps: N,
        getTransitionProps: O,
        portalRef: D,
        isTopModal: X,
        exited: A,
        hasTransition: H,
      } = f$(R({}, K, { rootRef: n })),
      W = R({}, K, { exited: A }),
      se = IN(W),
      Y = {};
    if ((m.props.tabIndex === void 0 && (Y.tabIndex = "-1"), H)) {
      const { onEnter: me, onExited: $e } = O();
      (Y.onEnter = me), (Y.onExited = $e);
    }
    const ve =
        (r = (o = z == null ? void 0 : z.root) != null ? o : g.Root) != null
          ? r
          : ON,
      ge =
        (i = (s = z == null ? void 0 : z.backdrop) != null ? s : g.Backdrop) !=
        null
          ? i
          : c,
      oe = (a = F == null ? void 0 : F.root) != null ? a : h.root,
      Ae = (l = F == null ? void 0 : F.backdrop) != null ? l : h.backdrop,
      ye = Hi({
        elementType: ve,
        externalSlotProps: oe,
        externalForwardedProps: V,
        getSlotProps: G,
        additionalProps: { ref: n, as: C },
        ownerState: W,
        className: ue(
          p,
          oe == null ? void 0 : oe.className,
          se == null ? void 0 : se.root,
          !W.open && W.exited && (se == null ? void 0 : se.hidden)
        ),
      }),
      be = Hi({
        elementType: ge,
        externalSlotProps: Ae,
        additionalProps: d,
        getSlotProps: (me) =>
          N(
            R({}, me, {
              onClick: ($e) => {
                U && U($e), me != null && me.onClick && me.onClick($e);
              },
            })
          ),
        className: ue(
          Ae == null ? void 0 : Ae.className,
          d == null ? void 0 : d.className,
          se == null ? void 0 : se.backdrop
        ),
        ownerState: W,
      });
    return !P && !B && (!H || A)
      ? null
      : f.jsx(r$, {
          ref: D,
          container: v,
          disablePortal: _,
          children: f.jsxs(
            ve,
            R({}, ye, {
              children: [
                !L && c ? f.jsx(ge, R({}, be)) : null,
                f.jsx(t$, {
                  disableEnforceFocus: S,
                  disableAutoFocus: y,
                  disableRestoreFocus: w,
                  isEnabled: X,
                  open: B,
                  children: x.cloneElement(m, Y),
                }),
              ],
            })
          ),
        });
  }),
  Bm = MN;
function FN(e) {
  return Ee("MuiDialog", e);
}
const DN = _e("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  Rf = DN,
  jN = x.createContext({}),
  uS = jN,
  BN = [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "className",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  zN = ne(sS, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  UN = (e) => {
    const {
        classes: t,
        scroll: n,
        maxWidth: r,
        fullWidth: o,
        fullScreen: i,
      } = e,
      s = {
        root: ["root"],
        container: ["container", `scroll${ee(n)}`],
        paper: [
          "paper",
          `paperScroll${ee(n)}`,
          `paperWidth${ee(String(r))}`,
          o && "paperFullWidth",
          i && "paperFullScreen",
        ],
      };
    return ke(s, FN, t);
  },
  VN = ne(Bm, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ "@media print": { position: "absolute !important" } }),
  WN = ne("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.container, t[`scroll${ee(n.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    R(
      { height: "100%", "@media print": { height: "auto" }, outline: 0 },
      e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&::after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      }
    )
  ),
  HN = ne(qo, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`scrollPaper${ee(n.scroll)}`],
        t[`paperWidth${ee(String(n.maxWidth))}`],
        n.fullWidth && t.paperFullWidth,
        n.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": { overflowY: "visible", boxShadow: "none" },
      },
      t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)",
      },
      t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left",
      },
      !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
      t.maxWidth === "xs" && {
        maxWidth:
          e.breakpoints.unit === "px"
            ? Math.max(e.breakpoints.values.xs, 444)
            : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
        [`&.${Rf.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: "calc(100% - 64px)" },
        },
      },
      t.maxWidth &&
        t.maxWidth !== "xs" && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${Rf.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        },
      t.fullWidth && { width: "calc(100% - 64px)" },
      t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${Rf.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
      }
    )
  ),
  qN = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiDialog" }),
      o = lo(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": s,
        "aria-labelledby": a,
        BackdropComponent: l,
        BackdropProps: u,
        children: c,
        className: d,
        disableEscapeKeyDown: p = !1,
        fullScreen: b = !1,
        fullWidth: m = !1,
        maxWidth: v = "sm",
        onBackdropClick: C,
        onClose: g,
        open: h,
        PaperComponent: y = qo,
        PaperProps: S = {},
        scroll: E = "paper",
        TransitionComponent: _ = iS,
        transitionDuration: w = i,
        TransitionProps: k,
      } = r,
      L = le(r, BN),
      P = R({}, r, {
        disableEscapeKeyDown: p,
        fullScreen: b,
        fullWidth: m,
        maxWidth: v,
        scroll: E,
      }),
      U = UN(P),
      B = x.useRef(),
      F = (G) => {
        B.current = G.target === G.currentTarget;
      },
      z = (G) => {
        B.current &&
          ((B.current = null), C && C(G), g && g(G, "backdropClick"));
      },
      V = za(a),
      K = x.useMemo(() => ({ titleId: V }), [V]);
    return f.jsx(
      VN,
      R(
        {
          className: ue(U.root, d),
          closeAfterTransition: !0,
          components: { Backdrop: zN },
          componentsProps: { backdrop: R({ transitionDuration: w, as: l }, u) },
          disableEscapeKeyDown: p,
          onClose: g,
          open: h,
          ref: n,
          onClick: z,
          ownerState: P,
        },
        L,
        {
          children: f.jsx(
            _,
            R({ appear: !0, in: h, timeout: w, role: "presentation" }, k, {
              children: f.jsx(WN, {
                className: ue(U.container),
                onMouseDown: F,
                ownerState: P,
                children: f.jsx(
                  HN,
                  R(
                    {
                      as: y,
                      elevation: 24,
                      role: "dialog",
                      "aria-describedby": s,
                      "aria-labelledby": V,
                    },
                    S,
                    {
                      className: ue(U.paper, S.className),
                      ownerState: P,
                      children: f.jsx(uS.Provider, { value: K, children: c }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  ru = qN;
function KN(e) {
  return Ee("MuiDialogContent", e);
}
_e("MuiDialogContent", ["root", "dividers"]);
function GN(e) {
  return Ee("MuiDialogTitle", e);
}
const QN = _e("MuiDialogTitle", ["root"]),
  XN = QN,
  YN = ["className", "dividers"],
  JN = (e) => {
    const { classes: t, dividers: n } = e;
    return ke({ root: ["root", n && "dividers"] }, KN, t);
  },
  ZN = ne("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
      },
      t.dividers
        ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${XN.root} + &`]: { paddingTop: 0 } }
    )
  ),
  eI = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiDialogContent" }),
      { className: o, dividers: i = !1 } = r,
      s = le(r, YN),
      a = R({}, r, { dividers: i }),
      l = JN(a);
    return f.jsx(ZN, R({ className: ue(l.root, o), ownerState: a, ref: n }, s));
  }),
  wf = eI,
  tI = ["className", "id"],
  nI = (e) => {
    const { classes: t } = e;
    return ke({ root: ["root"] }, GN, t);
  },
  rI = ne(ko, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: "16px 24px", flex: "0 0 auto" }),
  oI = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiDialogTitle" }),
      { className: o, id: i } = r,
      s = le(r, tI),
      a = r,
      l = nI(a),
      { titleId: u = i } = x.useContext(uS);
    return f.jsx(
      rI,
      R(
        {
          component: "h2",
          className: ue(l.root, o),
          ownerState: a,
          ref: n,
          variant: "h6",
          id: i ?? u,
        },
        s
      )
    );
  }),
  Ef = oI;
function iI(e) {
  return Ee("MuiDivider", e);
}
const sI = _e("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  $y = sI,
  aI = [
    "absolute",
    "children",
    "className",
    "component",
    "flexItem",
    "light",
    "orientation",
    "role",
    "textAlign",
    "variant",
  ],
  lI = (e) => {
    const {
      absolute: t,
      children: n,
      classes: r,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: a,
      variant: l,
    } = e;
    return ke(
      {
        root: [
          "root",
          t && "absolute",
          l,
          i && "light",
          s === "vertical" && "vertical",
          o && "flexItem",
          n && "withChildren",
          n && s === "vertical" && "withChildrenVertical",
          a === "right" && s !== "vertical" && "textAlignRight",
          a === "left" && s !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", s === "vertical" && "wrapperVertical"],
      },
      iI,
      r
    );
  },
  uI = ne("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.absolute && t.absolute,
        t[n.variant],
        n.light && t.light,
        n.orientation === "vertical" && t.vertical,
        n.flexItem && t.flexItem,
        n.children && t.withChildren,
        n.children && n.orientation === "vertical" && t.withChildrenVertical,
        n.textAlign === "right" &&
          n.orientation !== "vertical" &&
          t.textAlignRight,
        n.textAlign === "left" &&
          n.orientation !== "vertical" &&
          t.textAlignLeft,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      R(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (e.vars || e).palette.divider,
          borderBottomWidth: "thin",
        },
        t.absolute && {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        },
        t.light && {
          borderColor: e.vars
            ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
            : Fe(e.palette.divider, 0.08),
        },
        t.variant === "inset" && { marginLeft: 72 },
        t.variant === "middle" &&
          t.orientation === "horizontal" && {
            marginLeft: e.spacing(2),
            marginRight: e.spacing(2),
          },
        t.variant === "middle" &&
          t.orientation === "vertical" && {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1),
          },
        t.orientation === "vertical" && {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin",
        },
        t.flexItem && { alignSelf: "stretch", height: "auto" }
      ),
    ({ ownerState: e }) =>
      R(
        {},
        e.children && {
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
          border: 0,
          "&::before, &::after": { content: '""', alignSelf: "center" },
        }
      ),
    ({ theme: e, ownerState: t }) =>
      R(
        {},
        t.children &&
          t.orientation !== "vertical" && {
            "&::before, &::after": {
              width: "100%",
              borderTop: `thin solid ${(e.vars || e).palette.divider}`,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      R(
        {},
        t.children &&
          t.orientation === "vertical" && {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
            },
          }
      ),
    ({ ownerState: e }) =>
      R(
        {},
        e.textAlign === "right" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        e.textAlign === "left" &&
          e.orientation !== "vertical" && {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          }
      )
  ),
  cI = ne("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        display: "inline-block",
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      },
      t.orientation === "vertical" && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
      }
    )
  ),
  cS = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiDivider" }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        component: a = i ? "div" : "hr",
        flexItem: l = !1,
        light: u = !1,
        orientation: c = "horizontal",
        role: d = a !== "hr" ? "separator" : void 0,
        textAlign: p = "center",
        variant: b = "fullWidth",
      } = r,
      m = le(r, aI),
      v = R({}, r, {
        absolute: o,
        component: a,
        flexItem: l,
        light: u,
        orientation: c,
        role: d,
        textAlign: p,
        variant: b,
      }),
      C = lI(v);
    return f.jsx(
      uI,
      R(
        { as: a, className: ue(C.root, s), role: d, ref: n, ownerState: v },
        m,
        {
          children: i
            ? f.jsx(cI, { className: C.wrapper, ownerState: v, children: i })
            : null,
        }
      )
    );
  });
cS.muiSkipListHighlight = !0;
const Ny = cS,
  dI = [
    "addEndListener",
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function fI(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = hr(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s =
      u.getPropertyValue("-webkit-transform") ||
      u.getPropertyValue("transform");
  }
  let a = 0,
    l = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    (a = parseInt(u[4], 10)), (l = parseInt(u[5], 10));
  }
  return e === "left"
    ? o
      ? `translateX(${o.right + a - r.left}px)`
      : `translateX(${i.innerWidth + a - r.left}px)`
    : e === "right"
    ? o
      ? `translateX(-${r.right - o.left - a}px)`
      : `translateX(-${r.left + r.width - a}px)`
    : e === "up"
    ? o
      ? `translateY(${o.bottom + l - r.top}px)`
      : `translateY(${i.innerHeight + l - r.top}px)`
    : o
    ? `translateY(-${r.top - o.top + r.height - l}px)`
    : `translateY(-${r.top + r.height - l}px)`;
}
function pI(e) {
  return typeof e == "function" ? e() : e;
}
function Pl(e, t, n) {
  const r = pI(n),
    o = fI(e, t, r);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const hI = x.forwardRef(function (t, n) {
    const r = lo(),
      o = {
        enter: r.transitions.easing.easeOut,
        exit: r.transitions.easing.sharp,
      },
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: s,
        appear: a = !0,
        children: l,
        container: u,
        direction: c = "down",
        easing: d = o,
        in: p,
        onEnter: b,
        onEntered: m,
        onEntering: v,
        onExit: C,
        onExited: g,
        onExiting: h,
        style: y,
        timeout: S = i,
        TransitionComponent: E = Om,
      } = t,
      _ = le(t, dI),
      w = x.useRef(null),
      k = gt(l.ref, w, n),
      L = (N) => (O) => {
        N && (O === void 0 ? N(w.current) : N(w.current, O));
      },
      P = L((N, O) => {
        Pl(c, N, u), Fm(N), b && b(N, O);
      }),
      U = L((N, O) => {
        const D = Vi({ timeout: S, style: y, easing: d }, { mode: "enter" });
        (N.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          R({}, D)
        )),
          (N.style.transition = r.transitions.create("transform", R({}, D))),
          (N.style.webkitTransform = "none"),
          (N.style.transform = "none"),
          v && v(N, O);
      }),
      B = L(m),
      F = L(h),
      z = L((N) => {
        const O = Vi({ timeout: S, style: y, easing: d }, { mode: "exit" });
        (N.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          O
        )),
          (N.style.transition = r.transitions.create("transform", O)),
          Pl(c, N, u),
          C && C(N);
      }),
      V = L((N) => {
        (N.style.webkitTransition = ""), (N.style.transition = ""), g && g(N);
      }),
      K = (N) => {
        s && s(w.current, N);
      },
      G = x.useCallback(() => {
        w.current && Pl(c, w.current, u);
      }, [c, u]);
    return (
      x.useEffect(() => {
        if (p || c === "down" || c === "right") return;
        const N = Cc(() => {
            w.current && Pl(c, w.current, u);
          }),
          O = hr(w.current);
        return (
          O.addEventListener("resize", N),
          () => {
            N.clear(), O.removeEventListener("resize", N);
          }
        );
      }, [c, p, u]),
      x.useEffect(() => {
        p || G();
      }, [p, G]),
      f.jsx(
        E,
        R(
          {
            nodeRef: w,
            onEnter: P,
            onEntered: B,
            onEntering: U,
            onExit: z,
            onExited: V,
            onExiting: F,
            addEndListener: K,
            appear: a,
            in: p,
            timeout: S,
          },
          _,
          {
            children: (N, O) =>
              x.cloneElement(
                l,
                R(
                  {
                    ref: k,
                    style: R(
                      { visibility: N === "exited" && !p ? "hidden" : void 0 },
                      y,
                      l.props.style
                    ),
                  },
                  O
                )
              ),
          }
        )
      )
    );
  }),
  mI = hI;
function vI(e) {
  return Ee("MuiDrawer", e);
}
_e("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const gI = ["BackdropProps"],
  yI = [
    "anchor",
    "BackdropProps",
    "children",
    "className",
    "elevation",
    "hideBackdrop",
    "ModalProps",
    "onClose",
    "open",
    "PaperProps",
    "SlideProps",
    "TransitionComponent",
    "transitionDuration",
    "variant",
  ],
  dS = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      (n.variant === "permanent" || n.variant === "persistent") && t.docked,
      t.modal,
    ];
  },
  bI = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      o = {
        root: ["root"],
        docked: [(r === "permanent" || r === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${ee(n)}`,
          r !== "temporary" && `paperAnchorDocked${ee(n)}`,
        ],
      };
    return ke(o, vI, t);
  },
  xI = ne(Bm, { name: "MuiDrawer", slot: "Root", overridesResolver: dS })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  Iy = ne("div", {
    shouldForwardProp: Dt,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: dS,
  })({ flex: "0 0 auto" }),
  SI = ne(qo, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`paperAnchor${ee(n.anchor)}`],
        n.variant !== "temporary" && t[`paperAnchorDocked${ee(n.anchor)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0,
      },
      t.anchor === "left" && { left: 0 },
      t.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "right" && { right: 0 },
      t.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "left" &&
        t.variant !== "temporary" && {
          borderRight: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "top" &&
        t.variant !== "temporary" && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "right" &&
        t.variant !== "temporary" && {
          borderLeft: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "bottom" &&
        t.variant !== "temporary" && {
          borderTop: `1px solid ${(e.vars || e).palette.divider}`,
        }
    )
  ),
  fS = { left: "right", right: "left", top: "down", bottom: "up" };
function CI(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function RI(e, t) {
  return e.direction === "rtl" && CI(t) ? fS[t] : t;
}
const wI = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiDrawer" }),
      o = lo(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        anchor: s = "left",
        BackdropProps: a,
        children: l,
        className: u,
        elevation: c = 16,
        hideBackdrop: d = !1,
        ModalProps: { BackdropProps: p } = {},
        onClose: b,
        open: m = !1,
        PaperProps: v = {},
        SlideProps: C,
        TransitionComponent: g = mI,
        transitionDuration: h = i,
        variant: y = "temporary",
      } = r,
      S = le(r.ModalProps, gI),
      E = le(r, yI),
      _ = x.useRef(!1);
    x.useEffect(() => {
      _.current = !0;
    }, []);
    const w = RI(o, s),
      L = R({}, r, { anchor: s, elevation: c, open: m, variant: y }, E),
      P = bI(L),
      U = f.jsx(
        SI,
        R({ elevation: y === "temporary" ? c : 0, square: !0 }, v, {
          className: ue(P.paper, v.className),
          ownerState: L,
          children: l,
        })
      );
    if (y === "permanent")
      return f.jsx(
        Iy,
        R({ className: ue(P.root, P.docked, u), ownerState: L, ref: n }, E, {
          children: U,
        })
      );
    const B = f.jsx(
      g,
      R({ in: m, direction: fS[w], timeout: h, appear: _.current }, C, {
        children: U,
      })
    );
    return y === "persistent"
      ? f.jsx(
          Iy,
          R({ className: ue(P.root, P.docked, u), ownerState: L, ref: n }, E, {
            children: B,
          })
        )
      : f.jsx(
          xI,
          R(
            {
              BackdropProps: R({}, a, p, { transitionDuration: h }),
              className: ue(P.root, P.modal, u),
              open: m,
              ownerState: L,
              onClose: b,
              hideBackdrop: d,
              ref: n,
            },
            E,
            S,
            { children: B }
          )
        );
  }),
  EI = wI,
  _I = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  kI = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ke({ root: ["root", !n && "underline"], input: ["input"] }, M$, t);
    return R({}, t, o);
  },
  TI = ne(pd, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...dd(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return R(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${vo.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${vo.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${vo.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${vo.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${vo.disabled}, .${vo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${vo.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        R(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  AI = ne(hd, { name: "MuiFilledInput", slot: "Input", overridesResolver: fd })(
    ({ theme: e, ownerState: t }) =>
      R(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  pS = x.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = Te({ props: t, name: "MuiFilledInput" }),
      {
        components: l = {},
        componentsProps: u,
        fullWidth: c = !1,
        inputComponent: d = "input",
        multiline: p = !1,
        slotProps: b,
        slots: m = {},
        type: v = "text",
      } = a,
      C = le(a, _I),
      g = R({}, a, { fullWidth: c, inputComponent: d, multiline: p, type: v }),
      h = kI(a),
      y = { root: { ownerState: g }, input: { ownerState: g } },
      S = b ?? u ? rn(y, b ?? u) : y,
      E = (r = (o = m.root) != null ? o : l.Root) != null ? r : TI,
      _ = (i = (s = m.input) != null ? s : l.Input) != null ? i : AI;
    return f.jsx(
      jm,
      R(
        {
          slots: { root: E, input: _ },
          componentsProps: S,
          fullWidth: c,
          inputComponent: d,
          multiline: p,
          ref: n,
          type: v,
        },
        C,
        { classes: h }
      )
    );
  });
pS.muiName = "Input";
const hS = pS;
function PI(e) {
  return Ee("MuiFormControl", e);
}
_e("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const $I = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  NI = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = {
        root: ["root", n !== "none" && `margin${ee(n)}`, r && "fullWidth"],
      };
    return ke(o, PI, t);
  },
  II = ne("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      R({}, t.root, t[`margin${ee(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    R(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  OI = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: c,
        fullWidth: d = !1,
        hiddenLabel: p = !1,
        margin: b = "none",
        required: m = !1,
        size: v = "medium",
        variant: C = "outlined",
      } = r,
      g = le(r, $I),
      h = R({}, r, {
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: d,
        hiddenLabel: p,
        margin: b,
        required: m,
        size: v,
        variant: C,
      }),
      y = NI(h),
      [S, E] = x.useState(() => {
        let F = !1;
        return (
          o &&
            x.Children.forEach(o, (z) => {
              if (!Ks(z, ["Input", "Select"])) return;
              const V = Ks(z, ["Select"]) ? z.props.input : z;
              V && E$(V.props) && (F = !0);
            }),
          F
        );
      }),
      [_, w] = x.useState(() => {
        let F = !1;
        return (
          o &&
            x.Children.forEach(o, (z) => {
              Ks(z, ["Input", "Select"]) &&
                (Wu(z.props, !0) || Wu(z.props.inputProps, !0)) &&
                (F = !0);
            }),
          F
        );
      }),
      [k, L] = x.useState(!1);
    l && k && L(!1);
    const P = c !== void 0 && !l ? c : k;
    let U;
    const B = x.useMemo(
      () => ({
        adornedStart: S,
        setAdornedStart: E,
        color: s,
        disabled: l,
        error: u,
        filled: _,
        focused: P,
        fullWidth: d,
        hiddenLabel: p,
        size: v,
        onBlur: () => {
          L(!1);
        },
        onEmpty: () => {
          w(!1);
        },
        onFilled: () => {
          w(!0);
        },
        onFocus: () => {
          L(!0);
        },
        registerEffect: U,
        required: m,
        variant: C,
      }),
      [S, s, l, u, _, P, d, p, U, m, v, C]
    );
    return f.jsx(Dm.Provider, {
      value: B,
      children: f.jsx(
        II,
        R({ as: a, ownerState: h, className: ue(y.root, i), ref: n }, g, {
          children: o,
        })
      ),
    });
  }),
  rr = OI,
  LI = Yk({
    createStyledComponent: ne("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    useThemeProps: (e) => Te({ props: e, name: "MuiStack" }),
  }),
  Ga = LI;
function MI(e) {
  return Ee("MuiFormControlLabel", e);
}
const FI = _e("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
    "required",
    "asterisk",
  ]),
  Ws = FI,
  DI = [
    "checked",
    "className",
    "componentsProps",
    "control",
    "disabled",
    "disableTypography",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "required",
    "slotProps",
    "value",
  ],
  jI = (e) => {
    const {
        classes: t,
        disabled: n,
        labelPlacement: r,
        error: o,
        required: i,
      } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          `labelPlacement${ee(r)}`,
          o && "error",
          i && "required",
        ],
        label: ["label", n && "disabled"],
        asterisk: ["asterisk", o && "error"],
      };
    return ke(s, MI, t);
  },
  BI = ne("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Ws.label}`]: t.label },
        t.root,
        t[`labelPlacement${ee(n.labelPlacement)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${Ws.disabled}`]: { cursor: "default" },
      },
      t.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11,
      },
      t.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16,
      },
      t.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16,
      },
      {
        [`& .${Ws.label}`]: {
          [`&.${Ws.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        },
      }
    )
  ),
  zI = ne("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Ws.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  UI = x.forwardRef(function (t, n) {
    var r, o;
    const i = Te({ props: t, name: "MuiFormControlLabel" }),
      {
        className: s,
        componentsProps: a = {},
        control: l,
        disabled: u,
        disableTypography: c,
        label: d,
        labelPlacement: p = "end",
        required: b,
        slotProps: m = {},
      } = i,
      v = le(i, DI),
      C = Or(),
      g =
        (r = u ?? l.props.disabled) != null
          ? r
          : C == null
          ? void 0
          : C.disabled,
      h = b ?? l.props.required,
      y = { disabled: g, required: h };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((L) => {
      typeof l.props[L] > "u" && typeof i[L] < "u" && (y[L] = i[L]);
    });
    const S = po({ props: i, muiFormControl: C, states: ["error"] }),
      E = R({}, i, {
        disabled: g,
        labelPlacement: p,
        required: h,
        error: S.error,
      }),
      _ = jI(E),
      w = (o = m.typography) != null ? o : a.typography;
    let k = d;
    return (
      k != null &&
        k.type !== ko &&
        !c &&
        (k = f.jsx(
          ko,
          R({ component: "span" }, w, {
            className: ue(_.label, w == null ? void 0 : w.className),
            children: k,
          })
        )),
      f.jsxs(
        BI,
        R({ className: ue(_.root, s), ownerState: E, ref: n }, v, {
          children: [
            x.cloneElement(l, y),
            h
              ? f.jsxs(Ga, {
                  display: "block",
                  children: [
                    k,
                    f.jsxs(zI, {
                      ownerState: E,
                      "aria-hidden": !0,
                      className: _.asterisk,
                      children: [" ", "*"],
                    }),
                  ],
                })
              : k,
          ],
        })
      )
    );
  }),
  mS = UI;
function VI(e) {
  return Ee("MuiFormGroup", e);
}
_e("MuiFormGroup", ["root", "row", "error"]);
const WI = ["className", "row"],
  HI = (e) => {
    const { classes: t, row: n, error: r } = e;
    return ke({ root: ["root", n && "row", r && "error"] }, VI, t);
  },
  qI = ne("div", {
    name: "MuiFormGroup",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.row && t.row];
    },
  })(({ ownerState: e }) =>
    R(
      { display: "flex", flexDirection: "column", flexWrap: "wrap" },
      e.row && { flexDirection: "row" }
    )
  ),
  KI = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiFormGroup" }),
      { className: o, row: i = !1 } = r,
      s = le(r, WI),
      a = Or(),
      l = po({ props: r, muiFormControl: a, states: ["error"] }),
      u = R({}, r, { row: i, error: l.error }),
      c = HI(u);
    return f.jsx(qI, R({ className: ue(c.root, o), ownerState: u, ref: n }, s));
  }),
  GI = KI;
function QI(e) {
  return Ee("MuiFormHelperText", e);
}
const XI = _e("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  Oy = XI;
var Ly;
const YI = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  JI = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: a,
        required: l,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${ee(r)}`,
          n && "contained",
          a && "focused",
          s && "filled",
          l && "required",
        ],
      };
    return ke(u, QI, t);
  },
  ZI = ne("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${ee(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Oy.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Oy.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  eO = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiFormHelperText" }),
      { children: o, className: i, component: s = "p" } = r,
      a = le(r, YI),
      l = Or(),
      u = po({
        props: r,
        muiFormControl: l,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      c = R({}, r, {
        component: s,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = JI(c);
    return f.jsx(
      ZI,
      R({ as: s, ownerState: c, className: ue(d.root, i), ref: n }, a, {
        children:
          o === " "
            ? Ly ||
              (Ly = f.jsx("span", { className: "notranslate", children: "​" }))
            : o,
      })
    );
  }),
  tO = eO;
function nO(e) {
  return Ee("MuiFormLabel", e);
}
const rO = _e("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  sa = rO,
  oO = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  iO = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${ee(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return ke(l, nO, t);
  },
  sO = ne("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      R(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    R({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${sa.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${sa.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${sa.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  aO = ne("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${sa.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  lO = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: s = "label" } = r,
      a = le(r, oO),
      l = Or(),
      u = po({
        props: r,
        muiFormControl: l,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      c = R({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = iO(c);
    return f.jsxs(
      sO,
      R({ as: s, ownerState: c, className: ue(d.root, i), ref: n }, a, {
        children: [
          o,
          u.required &&
            f.jsxs(aO, {
              ownerState: c,
              "aria-hidden": !0,
              className: d.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  uO = lO,
  cO = x.createContext(),
  My = cO;
function dO(e) {
  return Ee("MuiGrid", e);
}
const fO = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  pO = ["column-reverse", "column", "row-reverse", "row"],
  hO = ["nowrap", "wrap-reverse", "wrap"],
  _s = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Oa = _e("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...fO.map((e) => `spacing-xs-${e}`),
    ...pO.map((e) => `direction-xs-${e}`),
    ...hO.map((e) => `wrap-xs-${e}`),
    ..._s.map((e) => `grid-xs-${e}`),
    ..._s.map((e) => `grid-sm-${e}`),
    ..._s.map((e) => `grid-md-${e}`),
    ..._s.map((e) => `grid-lg-${e}`),
    ..._s.map((e) => `grid-xl-${e}`),
  ]),
  mO = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ];
function Ii(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function vO({ theme: e, ownerState: t }) {
  let n;
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if ((t[o] && (n = t[o]), !n)) return r;
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    else {
      const s = Po({ values: t.columns, breakpoints: e.breakpoints.values }),
        a = typeof s == "object" ? s[o] : s;
      if (a == null) return r;
      const l = `${Math.round((n / a) * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== "0px") {
          const d = `calc(${l} + ${Ii(c)})`;
          u = { flexBasis: d, maxWidth: d };
        }
      }
      i = R({ flexBasis: l, flexGrow: 0, maxWidth: l }, u);
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    );
  }, {});
}
function gO({ theme: e, ownerState: t }) {
  const n = Po({ values: t.direction, breakpoints: e.breakpoints.values });
  return dn({ theme: e }, n, (r) => {
    const o = { flexDirection: r };
    return (
      r.indexOf("column") === 0 &&
        (o[`& > .${Oa.item}`] = { maxWidth: "none" }),
      o
    );
  });
}
function vS({ breakpoints: e, values: t }) {
  let n = "";
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function yO({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Po({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == "object" &&
      (s = vS({ breakpoints: e.breakpoints.values, values: i })),
      (o = dn({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              marginTop: `-${Ii(c)}`,
              [`& > .${Oa.item}`]: { paddingTop: Ii(c) },
            }
          : (u = s) != null && u.includes(l)
          ? {}
          : { marginTop: 0, [`& > .${Oa.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function bO({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Po({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == "object" &&
      (s = vS({ breakpoints: e.breakpoints.values, values: i })),
      (o = dn({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              width: `calc(100% + ${Ii(c)})`,
              marginLeft: `-${Ii(c)}`,
              [`& > .${Oa.item}`]: { paddingLeft: Ii(c) },
            }
          : (u = s) != null && u.includes(l)
          ? {}
          : {
              width: "100%",
              marginLeft: 0,
              [`& > .${Oa.item}`]: { paddingLeft: 0 },
            };
      }));
  }
  return o;
}
function xO(e, t, n = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return (
    t.forEach((o) => {
      const i = e[o];
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
    }),
    r
  );
}
const SO = ne("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: s,
        wrap: a,
        zeroMinWidth: l,
        breakpoints: u,
      } = n;
    let c = [];
    r && (c = xO(s, u, t));
    const d = [];
    return (
      u.forEach((p) => {
        const b = n[p];
        b && d.push(t[`grid-${p}-${String(b)}`]);
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...c,
        o !== "row" && t[`direction-xs-${String(o)}`],
        a !== "wrap" && t[`wrap-xs-${String(a)}`],
        ...d,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    R(
      { boxSizing: "border-box" },
      e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== "wrap" && { flexWrap: e.wrap }
    ),
  gO,
  yO,
  bO,
  vO
);
function CO(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return (
    t.forEach((r) => {
      const o = e[r];
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`;
        n.push(i);
      }
    }),
    n
  );
}
const RO = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: s,
      zeroMinWidth: a,
      breakpoints: l,
    } = e;
    let u = [];
    n && (u = CO(i, l));
    const c = [];
    l.forEach((p) => {
      const b = e[p];
      b && c.push(`grid-${p}-${String(b)}`);
    });
    const d = {
      root: [
        "root",
        n && "container",
        o && "item",
        a && "zeroMinWidth",
        ...u,
        r !== "row" && `direction-xs-${String(r)}`,
        s !== "wrap" && `wrap-xs-${String(s)}`,
        ...c,
      ],
    };
    return ke(d, dO, t);
  },
  wO = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiGrid" }),
      { breakpoints: o } = lo(),
      i = Oc(r),
      {
        className: s,
        columns: a,
        columnSpacing: l,
        component: u = "div",
        container: c = !1,
        direction: d = "row",
        item: p = !1,
        rowSpacing: b,
        spacing: m = 0,
        wrap: v = "wrap",
        zeroMinWidth: C = !1,
      } = i,
      g = le(i, mO),
      h = b || m,
      y = l || m,
      S = x.useContext(My),
      E = c ? a || 12 : S,
      _ = {},
      w = R({}, g);
    o.keys.forEach((P) => {
      g[P] != null && ((_[P] = g[P]), delete w[P]);
    });
    const k = R(
        {},
        i,
        {
          columns: E,
          container: c,
          direction: d,
          item: p,
          rowSpacing: h,
          columnSpacing: y,
          wrap: v,
          zeroMinWidth: C,
          spacing: m,
        },
        _,
        { breakpoints: o.keys }
      ),
      L = RO(k);
    return f.jsx(My.Provider, {
      value: E,
      children: f.jsx(
        SO,
        R({ ownerState: k, className: ue(L.root, s), as: u, ref: n }, w)
      ),
    });
  }),
  $l = wO,
  EO = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function Gp(e) {
  return `scale(${e}, ${e ** 2})`;
}
const _O = {
    entering: { opacity: 1, transform: Gp(1) },
    entered: { opacity: 1, transform: "none" },
  },
  _f =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  gS = x.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: c,
        onExit: d,
        onExited: p,
        onExiting: b,
        style: m,
        timeout: v = "auto",
        TransitionComponent: C = Om,
      } = t,
      g = le(t, EO),
      h = j1(),
      y = x.useRef(),
      S = lo(),
      E = x.useRef(null),
      _ = gt(E, i.ref, n),
      w = (V) => (K) => {
        if (V) {
          const G = E.current;
          K === void 0 ? V(G) : V(G, K);
        }
      },
      k = w(c),
      L = w((V, K) => {
        Fm(V);
        const {
          duration: G,
          delay: N,
          easing: O,
        } = Vi({ style: m, timeout: v, easing: s }, { mode: "enter" });
        let D;
        v === "auto"
          ? ((D = S.transitions.getAutoHeightDuration(V.clientHeight)),
            (y.current = D))
          : (D = G),
          (V.style.transition = [
            S.transitions.create("opacity", { duration: D, delay: N }),
            S.transitions.create("transform", {
              duration: _f ? D : D * 0.666,
              delay: N,
              easing: O,
            }),
          ].join(",")),
          l && l(V, K);
      }),
      P = w(u),
      U = w(b),
      B = w((V) => {
        const {
          duration: K,
          delay: G,
          easing: N,
        } = Vi({ style: m, timeout: v, easing: s }, { mode: "exit" });
        let O;
        v === "auto"
          ? ((O = S.transitions.getAutoHeightDuration(V.clientHeight)),
            (y.current = O))
          : (O = K),
          (V.style.transition = [
            S.transitions.create("opacity", { duration: O, delay: G }),
            S.transitions.create("transform", {
              duration: _f ? O : O * 0.666,
              delay: _f ? G : G || O * 0.333,
              easing: N,
            }),
          ].join(",")),
          (V.style.opacity = 0),
          (V.style.transform = Gp(0.75)),
          d && d(V);
      }),
      F = w(p),
      z = (V) => {
        v === "auto" && h.start(y.current || 0, V), r && r(E.current, V);
      };
    return f.jsx(
      C,
      R(
        {
          appear: o,
          in: a,
          nodeRef: E,
          onEnter: L,
          onEntered: P,
          onEntering: k,
          onExit: B,
          onExited: F,
          onExiting: U,
          addEndListener: z,
          timeout: v === "auto" ? null : v,
        },
        g,
        {
          children: (V, K) =>
            x.cloneElement(
              i,
              R(
                {
                  style: R(
                    {
                      opacity: 0,
                      transform: Gp(0.75),
                      visibility: V === "exited" && !a ? "hidden" : void 0,
                    },
                    _O[V],
                    m,
                    i.props.style
                  ),
                  ref: _,
                },
                K
              )
            ),
        }
      )
    );
  });
gS.muiSupportAuto = !0;
const kO = gS;
function TO(e, t, n, r, o) {
  const [i, s] = x.useState(() =>
    o && n ? n(e).matches : r ? r(e).matches : t
  );
  return (
    On(() => {
      let a = !0;
      if (!n) return;
      const l = n(e),
        u = () => {
          a && s(l.matches);
        };
      return (
        u(),
        l.addListener(u),
        () => {
          (a = !1), l.removeListener(u);
        }
      );
    }, [e, n]),
    i
  );
}
const yS = x.useSyncExternalStore;
function AO(e, t, n, r, o) {
  const i = x.useCallback(() => t, [t]),
    s = x.useMemo(() => {
      if (o && n) return () => n(e).matches;
      if (r !== null) {
        const { matches: c } = r(e);
        return () => c;
      }
      return i;
    }, [i, e, r, o, n]),
    [a, l] = x.useMemo(() => {
      if (n === null) return [i, () => () => {}];
      const c = n(e);
      return [
        () => c.matches,
        (d) => (
          c.addListener(d),
          () => {
            c.removeListener(d);
          }
        ),
      ];
    }, [i, n, e]);
  return yS(l, a, s);
}
function PO(e, t = {}) {
  const n = Bh(),
    r = typeof window < "u" && typeof window.matchMedia < "u",
    {
      defaultMatches: o = !1,
      matchMedia: i = r ? window.matchMedia : null,
      ssrMatchMedia: s = null,
      noSsr: a = !1,
    } = K1({ name: "MuiUseMediaQuery", props: t, theme: n });
  let l = typeof e == "function" ? e(n) : e;
  return (
    (l = l.replace(/^@media( ?)/m, "")),
    (yS !== void 0 ? AO : TO)(l, o, i, s, a)
  );
}
const $O = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  NO = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = ke({ root: ["root", !n && "underline"], input: ["input"] }, N$, t);
    return R({}, t, o);
  },
  IO = ne(pd, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...dd(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      R(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${Es.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${Es.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${Es.disabled}, .${Es.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${Es.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  OO = ne(hd, { name: "MuiInput", slot: "Input", overridesResolver: fd })({}),
  bS = x.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = Te({ props: t, name: "MuiInput" }),
      {
        disableUnderline: l,
        components: u = {},
        componentsProps: c,
        fullWidth: d = !1,
        inputComponent: p = "input",
        multiline: b = !1,
        slotProps: m,
        slots: v = {},
        type: C = "text",
      } = a,
      g = le(a, $O),
      h = NO(a),
      S = { root: { ownerState: { disableUnderline: l } } },
      E = m ?? c ? rn(m ?? c, S) : S,
      _ = (r = (o = v.root) != null ? o : u.Root) != null ? r : IO,
      w = (i = (s = v.input) != null ? s : u.Input) != null ? i : OO;
    return f.jsx(
      jm,
      R(
        {
          slots: { root: _, input: w },
          slotProps: E,
          fullWidth: d,
          inputComponent: p,
          multiline: b,
          ref: n,
          type: C,
        },
        g,
        { classes: h }
      )
    );
  });
bS.muiName = "Input";
const xS = bS;
function LO(e) {
  return Ee("MuiInputLabel", e);
}
_e("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const MO = ["disableAnimation", "margin", "shrink", "variant", "className"],
  FO = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${ee(r)}`,
          s,
        ],
        asterisk: [a && "asterisk"],
      },
      u = ke(l, LO, t);
    return R({}, t, u);
  },
  DO = ne(uO, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${sa.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        R(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            R(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        R(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  jO = x.forwardRef(function (t, n) {
    const r = Te({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: s } = r,
      a = le(r, MO),
      l = Or();
    let u = i;
    typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
    const c = po({
        props: r,
        muiFormControl: l,
        states: ["size", "variant", "required", "focused"],
      }),
      d = R({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required,
        focused: c.focused,
      }),
      p = FO(d);
    return f.jsx(
      DO,
      R(
        { "data-shrink": u, ownerState: d, ref: n, className: ue(p.root, s) },
        a,
        { classes: p }
      )
    );
  }),
  Qp = jO,
  BO = x.createContext({}),
  Jn = BO;
function zO(e) {
  return Ee("MuiList", e);
}
_e("MuiList", ["root", "padding", "dense", "subheader"]);
const UO = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  VO = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return ke(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      zO,
      t
    );
  },
  WO = ne("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    R(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  HO = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      c = le(r, UO),
      d = x.useMemo(() => ({ dense: a }), [a]),
      p = R({}, r, { component: s, dense: a, disablePadding: l }),
      b = VO(p);
    return f.jsx(Jn.Provider, {
      value: d,
      children: f.jsxs(
        WO,
        R({ as: s, className: ue(b.root, i), ref: n, ownerState: p }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  Xp = HO;
function qO(e) {
  return Ee("MuiListItem", e);
}
const KO = _e("MuiListItem", [
    "root",
    "container",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "padding",
    "button",
    "secondaryAction",
    "selected",
  ]),
  li = KO;
function GO(e) {
  return Ee("MuiListItemButton", e);
}
const QO = _e("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  ui = QO,
  XO = [
    "alignItems",
    "autoFocus",
    "component",
    "children",
    "dense",
    "disableGutters",
    "divider",
    "focusVisibleClassName",
    "selected",
    "className",
  ],
  YO = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  JO = (e) => {
    const {
        alignItems: t,
        classes: n,
        dense: r,
        disabled: o,
        disableGutters: i,
        divider: s,
        selected: a,
      } = e,
      u = ke(
        {
          root: [
            "root",
            r && "dense",
            !i && "gutters",
            s && "divider",
            o && "disabled",
            t === "flex-start" && "alignItemsFlexStart",
            a && "selected",
          ],
        },
        GO,
        n
      );
    return R({}, n, u);
  },
  ZO = ne(ao, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: YO,
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minWidth: 0,
        boxSizing: "border-box",
        textAlign: "left",
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shortest,
        }),
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${ui.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${ui.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Fe(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${ui.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Fe(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${ui.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${ui.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
      },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      t.alignItems === "flex-start" && { alignItems: "flex-start" },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.dense && { paddingTop: 4, paddingBottom: 4 }
    )
  ),
  eL = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiListItemButton" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        component: s = "div",
        children: a,
        dense: l = !1,
        disableGutters: u = !1,
        divider: c = !1,
        focusVisibleClassName: d,
        selected: p = !1,
        className: b,
      } = r,
      m = le(r, XO),
      v = x.useContext(Jn),
      C = x.useMemo(
        () => ({ dense: l || v.dense || !1, alignItems: o, disableGutters: u }),
        [o, v.dense, l, u]
      ),
      g = x.useRef(null);
    On(() => {
      i && g.current && g.current.focus();
    }, [i]);
    const h = R({}, r, {
        alignItems: o,
        dense: C.dense,
        disableGutters: u,
        divider: c,
        selected: p,
      }),
      y = JO(h),
      S = gt(g, n);
    return f.jsx(Jn.Provider, {
      value: C,
      children: f.jsx(
        ZO,
        R(
          {
            ref: S,
            href: m.href || m.to,
            component: (m.href || m.to) && s === "div" ? "button" : s,
            focusVisibleClassName: ue(y.focusVisible, d),
            ownerState: h,
            className: ue(y.root, b),
          },
          m,
          { classes: y, children: a }
        )
      ),
    });
  }),
  SS = eL;
function tL(e) {
  return Ee("MuiListItemSecondaryAction", e);
}
_e("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const nL = ["className"],
  rL = (e) => {
    const { disableGutters: t, classes: n } = e;
    return ke({ root: ["root", t && "disableGutters"] }, tL, n);
  },
  oL = ne("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })(({ ownerState: e }) =>
    R(
      {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.disableGutters && { right: 0 }
    )
  ),
  CS = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: o } = r,
      i = le(r, nL),
      s = x.useContext(Jn),
      a = R({}, r, { disableGutters: s.disableGutters }),
      l = rL(a);
    return f.jsx(oL, R({ className: ue(l.root, o), ownerState: a, ref: n }, i));
  });
CS.muiName = "ListItemSecondaryAction";
const iL = CS,
  sL = ["className"],
  aL = [
    "alignItems",
    "autoFocus",
    "button",
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "ContainerComponent",
    "ContainerProps",
    "dense",
    "disabled",
    "disableGutters",
    "disablePadding",
    "divider",
    "focusVisibleClassName",
    "secondaryAction",
    "selected",
    "slotProps",
    "slots",
  ],
  lL = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.button && t.button,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  uL = (e) => {
    const {
      alignItems: t,
      button: n,
      classes: r,
      dense: o,
      disabled: i,
      disableGutters: s,
      disablePadding: a,
      divider: l,
      hasSecondaryAction: u,
      selected: c,
    } = e;
    return ke(
      {
        root: [
          "root",
          o && "dense",
          !s && "gutters",
          !a && "padding",
          l && "divider",
          i && "disabled",
          n && "button",
          t === "flex-start" && "alignItemsFlexStart",
          u && "secondaryAction",
          c && "selected",
        ],
        container: ["container"],
      },
      qO,
      r
    );
  },
  cL = ne("div", { name: "MuiListItem", slot: "Root", overridesResolver: lL })(
    ({ theme: e, ownerState: t }) =>
      R(
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        },
        !t.disablePadding &&
          R(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 }
          ),
        !!t.secondaryAction && { [`& > .${ui.root}`]: { paddingRight: 48 } },
        {
          [`&.${li.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${li.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${li.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : Fe(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${li.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
        },
        t.alignItems === "flex-start" && { alignItems: "flex-start" },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box",
        },
        t.button && {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${li.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Fe(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 }
      )
  ),
  dL = ne("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  fL = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiListItem" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        button: s = !1,
        children: a,
        className: l,
        component: u,
        components: c = {},
        componentsProps: d = {},
        ContainerComponent: p = "li",
        ContainerProps: { className: b } = {},
        dense: m = !1,
        disabled: v = !1,
        disableGutters: C = !1,
        disablePadding: g = !1,
        divider: h = !1,
        focusVisibleClassName: y,
        secondaryAction: S,
        selected: E = !1,
        slotProps: _ = {},
        slots: w = {},
      } = r,
      k = le(r.ContainerProps, sL),
      L = le(r, aL),
      P = x.useContext(Jn),
      U = x.useMemo(
        () => ({ dense: m || P.dense || !1, alignItems: o, disableGutters: C }),
        [o, P.dense, m, C]
      ),
      B = x.useRef(null);
    On(() => {
      i && B.current && B.current.focus();
    }, [i]);
    const F = x.Children.toArray(a),
      z = F.length && Ks(F[F.length - 1], ["ListItemSecondaryAction"]),
      V = R({}, r, {
        alignItems: o,
        autoFocus: i,
        button: s,
        dense: U.dense,
        disabled: v,
        disableGutters: C,
        disablePadding: g,
        divider: h,
        hasSecondaryAction: z,
        selected: E,
      }),
      K = uL(V),
      G = gt(B, n),
      N = w.root || c.Root || cL,
      O = _.root || d.root || {},
      D = R({ className: ue(K.root, O.className, l), disabled: v }, L);
    let X = u || "li";
    return (
      s &&
        ((D.component = u || "div"),
        (D.focusVisibleClassName = ue(li.focusVisible, y)),
        (X = ao)),
      z
        ? ((X = !D.component && !u ? "div" : X),
          p === "li" &&
            (X === "li"
              ? (X = "div")
              : D.component === "li" && (D.component = "div")),
          f.jsx(Jn.Provider, {
            value: U,
            children: f.jsxs(
              dL,
              R(
                { as: p, className: ue(K.container, b), ref: G, ownerState: V },
                k,
                {
                  children: [
                    f.jsx(
                      N,
                      R(
                        {},
                        O,
                        !Wi(N) && { as: X, ownerState: R({}, V, O.ownerState) },
                        D,
                        { children: F }
                      )
                    ),
                    F.pop(),
                  ],
                }
              )
            ),
          }))
        : f.jsx(Jn.Provider, {
            value: U,
            children: f.jsxs(
              N,
              R(
                {},
                O,
                { as: X, ref: G },
                !Wi(N) && { ownerState: R({}, V, O.ownerState) },
                D,
                { children: [F, S && f.jsx(iL, { children: S })] }
              )
            ),
          })
    );
  }),
  ks = fL;
function pL(e) {
  return Ee("MuiListItemIcon", e);
}
const hL = _e("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  Fy = hL,
  mL = ["className"],
  vL = (e) => {
    const { alignItems: t, classes: n } = e;
    return ke(
      { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
      pL,
      n
    );
  },
  gL = ne("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      {
        minWidth: 56,
        color: (e.vars || e).palette.action.active,
        flexShrink: 0,
        display: "inline-flex",
      },
      t.alignItems === "flex-start" && { marginTop: 8 }
    )
  ),
  yL = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiListItemIcon" }),
      { className: o } = r,
      i = le(r, mL),
      s = x.useContext(Jn),
      a = R({}, r, { alignItems: s.alignItems }),
      l = vL(a);
    return f.jsx(gL, R({ className: ue(l.root, o), ownerState: a, ref: n }, i));
  }),
  Dy = yL;
function bL(e) {
  return Ee("MuiListItemText", e);
}
const xL = _e("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  Hu = xL,
  SL = [
    "children",
    "className",
    "disableTypography",
    "inset",
    "primary",
    "primaryTypographyProps",
    "secondary",
    "secondaryTypographyProps",
  ],
  CL = (e) => {
    const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
    return ke(
      {
        root: ["root", n && "inset", i && "dense", r && o && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"],
      },
      bL,
      t
    );
  },
  RL = ne("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Hu.primary}`]: t.primary },
        { [`& .${Hu.secondary}`]: t.secondary },
        t.root,
        n.inset && t.inset,
        n.primary && n.secondary && t.multiline,
        n.dense && t.dense,
      ];
    },
  })(({ ownerState: e }) =>
    R(
      { flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4 },
      e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
      e.inset && { paddingLeft: 56 }
    )
  ),
  wL = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiListItemText" }),
      {
        children: o,
        className: i,
        disableTypography: s = !1,
        inset: a = !1,
        primary: l,
        primaryTypographyProps: u,
        secondary: c,
        secondaryTypographyProps: d,
      } = r,
      p = le(r, SL),
      { dense: b } = x.useContext(Jn);
    let m = l ?? o,
      v = c;
    const C = R({}, r, {
        disableTypography: s,
        inset: a,
        primary: !!m,
        secondary: !!v,
        dense: b,
      }),
      g = CL(C);
    return (
      m != null &&
        m.type !== ko &&
        !s &&
        (m = f.jsx(
          ko,
          R(
            {
              variant: b ? "body2" : "body1",
              className: g.primary,
              component: u != null && u.variant ? void 0 : "span",
              display: "block",
            },
            u,
            { children: m }
          )
        )),
      v != null &&
        v.type !== ko &&
        !s &&
        (v = f.jsx(
          ko,
          R(
            {
              variant: "body2",
              className: g.secondary,
              color: "text.secondary",
              display: "block",
            },
            d,
            { children: v }
          )
        )),
      f.jsxs(
        RL,
        R({ className: ue(g.root, i), ownerState: C, ref: n }, p, {
          children: [m, v],
        })
      )
    );
  }),
  ou = wL,
  EL = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function kf(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function jy(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function RS(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function Ts(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !RS(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const _L = x.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: s,
        className: a,
        disabledItemsFocusable: l = !1,
        disableListWrap: u = !1,
        onKeyDown: c,
        variant: d = "selectedMenu",
      } = t,
      p = le(t, EL),
      b = x.useRef(null),
      m = x.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    On(() => {
      o && b.current.focus();
    }, [o]),
      x.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (y, S) => {
            const E = !b.current.style.width;
            if (y.clientHeight < b.current.clientHeight && E) {
              const _ = `${z1(on(y))}px`;
              (b.current.style[
                S.direction === "rtl" ? "paddingLeft" : "paddingRight"
              ] = _),
                (b.current.style.width = `calc(100% + ${_})`);
            }
            return b.current;
          },
        }),
        []
      );
    const v = (y) => {
        const S = b.current,
          E = y.key,
          _ = on(S).activeElement;
        if (E === "ArrowDown") y.preventDefault(), Ts(S, _, u, l, kf);
        else if (E === "ArrowUp") y.preventDefault(), Ts(S, _, u, l, jy);
        else if (E === "Home") y.preventDefault(), Ts(S, null, u, l, kf);
        else if (E === "End") y.preventDefault(), Ts(S, null, u, l, jy);
        else if (E.length === 1) {
          const w = m.current,
            k = E.toLowerCase(),
            L = performance.now();
          w.keys.length > 0 &&
            (L - w.lastTime > 500
              ? ((w.keys = []), (w.repeating = !0), (w.previousKeyMatched = !0))
              : w.repeating && k !== w.keys[0] && (w.repeating = !1)),
            (w.lastTime = L),
            w.keys.push(k);
          const P = _ && !w.repeating && RS(_, w);
          w.previousKeyMatched && (P || Ts(S, _, !1, l, kf, w))
            ? y.preventDefault()
            : (w.previousKeyMatched = !1);
        }
        c && c(y);
      },
      C = gt(b, n);
    let g = -1;
    x.Children.forEach(s, (y, S) => {
      if (!x.isValidElement(y)) {
        g === S && ((g += 1), g >= s.length && (g = -1));
        return;
      }
      y.props.disabled ||
        (((d === "selectedMenu" && y.props.selected) || g === -1) && (g = S)),
        g === S &&
          (y.props.disabled ||
            y.props.muiSkipListHighlight ||
            y.type.muiSkipListHighlight) &&
          ((g += 1), g >= s.length && (g = -1));
    });
    const h = x.Children.map(s, (y, S) => {
      if (S === g) {
        const E = {};
        return (
          i && (E.autoFocus = !0),
          y.props.tabIndex === void 0 &&
            d === "selectedMenu" &&
            (E.tabIndex = 0),
          x.cloneElement(y, E)
        );
      }
      return y;
    });
    return f.jsx(
      Xp,
      R(
        {
          role: "menu",
          ref: C,
          className: a,
          onKeyDown: v,
          tabIndex: o ? 0 : -1,
        },
        p,
        { children: h }
      )
    );
  }),
  kL = _L;
function TL(e) {
  return Ee("MuiPopover", e);
}
_e("MuiPopover", ["root", "paper"]);
const AL = ["onEntering"],
  PL = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  $L = ["slotProps"];
function By(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function zy(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function Uy(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function Tf(e) {
  return typeof e == "function" ? e() : e;
}
const NL = (e) => {
    const { classes: t } = e;
    return ke({ root: ["root"], paper: ["paper"] }, TL, t);
  },
  IL = ne(Bm, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  wS = ne(qo, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  OL = x.forwardRef(function (t, n) {
    var r, o, i;
    const s = Te({ props: t, name: "MuiPopover" }),
      {
        action: a,
        anchorEl: l,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: c,
        anchorReference: d = "anchorEl",
        children: p,
        className: b,
        container: m,
        elevation: v = 8,
        marginThreshold: C = 16,
        open: g,
        PaperProps: h = {},
        slots: y,
        slotProps: S,
        transformOrigin: E = { vertical: "top", horizontal: "left" },
        TransitionComponent: _ = kO,
        transitionDuration: w = "auto",
        TransitionProps: { onEntering: k } = {},
        disableScrollLock: L = !1,
      } = s,
      P = le(s.TransitionProps, AL),
      U = le(s, PL),
      B = (r = S == null ? void 0 : S.paper) != null ? r : h,
      F = x.useRef(),
      z = gt(F, B.ref),
      V = R({}, s, {
        anchorOrigin: u,
        anchorReference: d,
        elevation: v,
        marginThreshold: C,
        externalPaperSlotProps: B,
        transformOrigin: E,
        TransitionComponent: _,
        transitionDuration: w,
        TransitionProps: P,
      }),
      K = NL(V),
      G = x.useCallback(() => {
        if (d === "anchorPosition") return c;
        const me = Tf(l),
          je = (
            me && me.nodeType === 1 ? me : on(F.current).body
          ).getBoundingClientRect();
        return {
          top: je.top + By(je, u.vertical),
          left: je.left + zy(je, u.horizontal),
        };
      }, [l, u.horizontal, u.vertical, c, d]),
      N = x.useCallback(
        (me) => ({
          vertical: By(me, E.vertical),
          horizontal: zy(me, E.horizontal),
        }),
        [E.horizontal, E.vertical]
      ),
      O = x.useCallback(
        (me) => {
          const $e = { width: me.offsetWidth, height: me.offsetHeight },
            je = N($e);
          if (d === "none")
            return { top: null, left: null, transformOrigin: Uy(je) };
          const ct = G();
          let Qe = ct.top - je.vertical,
            T = ct.left - je.horizontal;
          const M = Qe + $e.height,
            j = T + $e.width,
            Z = hr(Tf(l)),
            re = Z.innerHeight - C,
            Q = Z.innerWidth - C;
          if (C !== null && Qe < C) {
            const ie = Qe - C;
            (Qe -= ie), (je.vertical += ie);
          } else if (C !== null && M > re) {
            const ie = M - re;
            (Qe -= ie), (je.vertical += ie);
          }
          if (C !== null && T < C) {
            const ie = T - C;
            (T -= ie), (je.horizontal += ie);
          } else if (j > Q) {
            const ie = j - Q;
            (T -= ie), (je.horizontal += ie);
          }
          return {
            top: `${Math.round(Qe)}px`,
            left: `${Math.round(T)}px`,
            transformOrigin: Uy(je),
          };
        },
        [l, d, G, N, C]
      ),
      [D, X] = x.useState(g),
      A = x.useCallback(() => {
        const me = F.current;
        if (!me) return;
        const $e = O(me);
        $e.top !== null && (me.style.top = $e.top),
          $e.left !== null && (me.style.left = $e.left),
          (me.style.transformOrigin = $e.transformOrigin),
          X(!0);
      }, [O]);
    x.useEffect(
      () => (
        L && window.addEventListener("scroll", A),
        () => window.removeEventListener("scroll", A)
      ),
      [l, L, A]
    );
    const H = (me, $e) => {
        k && k(me, $e), A();
      },
      W = () => {
        X(!1);
      };
    x.useEffect(() => {
      g && A();
    }),
      x.useImperativeHandle(
        a,
        () =>
          g
            ? {
                updatePosition: () => {
                  A();
                },
              }
            : null,
        [g, A]
      ),
      x.useEffect(() => {
        if (!g) return;
        const me = Cc(() => {
            A();
          }),
          $e = hr(l);
        return (
          $e.addEventListener("resize", me),
          () => {
            me.clear(), $e.removeEventListener("resize", me);
          }
        );
      }, [l, g, A]);
    let se = w;
    w === "auto" && !_.muiSupportAuto && (se = void 0);
    const Y = m || (l ? on(Tf(l)).body : void 0),
      ve = (o = y == null ? void 0 : y.root) != null ? o : IL,
      ge = (i = y == null ? void 0 : y.paper) != null ? i : wS,
      oe = Hi({
        elementType: ge,
        externalSlotProps: R({}, B, {
          style: D ? B.style : R({}, B.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: v, ref: z },
        ownerState: V,
        className: ue(K.paper, B == null ? void 0 : B.className),
      }),
      Ae = Hi({
        elementType: ve,
        externalSlotProps: (S == null ? void 0 : S.root) || {},
        externalForwardedProps: U,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: Y,
          open: g,
        },
        ownerState: V,
        className: ue(K.root, b),
      }),
      { slotProps: ye } = Ae,
      be = le(Ae, $L);
    return f.jsx(
      ve,
      R({}, be, !Wi(ve) && { slotProps: ye, disableScrollLock: L }, {
        children: f.jsx(
          _,
          R({ appear: !0, in: g, onEntering: H, onExited: W, timeout: se }, P, {
            children: f.jsx(ge, R({}, oe, { children: p })),
          })
        ),
      })
    );
  }),
  LL = OL;
function ML(e) {
  return Ee("MuiMenu", e);
}
_e("MuiMenu", ["root", "paper", "list"]);
const FL = ["onEntering"],
  DL = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  jL = { vertical: "top", horizontal: "right" },
  BL = { vertical: "top", horizontal: "left" },
  zL = (e) => {
    const { classes: t } = e;
    return ke({ root: ["root"], paper: ["paper"], list: ["list"] }, ML, t);
  },
  UL = ne(LL, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  VL = ne(wS, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  WL = ne(kL, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  HL = x.forwardRef(function (t, n) {
    var r, o;
    const i = Te({ props: t, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: a,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: c = {},
        onClose: d,
        open: p,
        PaperProps: b = {},
        PopoverClasses: m,
        transitionDuration: v = "auto",
        TransitionProps: { onEntering: C } = {},
        variant: g = "selectedMenu",
        slots: h = {},
        slotProps: y = {},
      } = i,
      S = le(i.TransitionProps, FL),
      E = le(i, DL),
      _ = lo(),
      w = _.direction === "rtl",
      k = R({}, i, {
        autoFocus: s,
        disableAutoFocusItem: u,
        MenuListProps: c,
        onEntering: C,
        PaperProps: b,
        transitionDuration: v,
        TransitionProps: S,
        variant: g,
      }),
      L = zL(k),
      P = s && !u && p,
      U = x.useRef(null),
      B = (O, D) => {
        U.current && U.current.adjustStyleForScrollbar(O, _), C && C(O, D);
      },
      F = (O) => {
        O.key === "Tab" && (O.preventDefault(), d && d(O, "tabKeyDown"));
      };
    let z = -1;
    x.Children.map(a, (O, D) => {
      x.isValidElement(O) &&
        (O.props.disabled ||
          (((g === "selectedMenu" && O.props.selected) || z === -1) &&
            (z = D)));
    });
    const V = (r = h.paper) != null ? r : VL,
      K = (o = y.paper) != null ? o : b,
      G = Hi({
        elementType: h.root,
        externalSlotProps: y.root,
        ownerState: k,
        className: [L.root, l],
      }),
      N = Hi({
        elementType: V,
        externalSlotProps: K,
        ownerState: k,
        className: L.paper,
      });
    return f.jsx(
      UL,
      R(
        {
          onClose: d,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: w ? "right" : "left",
          },
          transformOrigin: w ? jL : BL,
          slots: { paper: V, root: h.root },
          slotProps: { root: G, paper: N },
          open: p,
          ref: n,
          transitionDuration: v,
          TransitionProps: R({ onEntering: B }, S),
          ownerState: k,
        },
        E,
        {
          classes: m,
          children: f.jsx(
            WL,
            R(
              {
                onKeyDown: F,
                actions: U,
                autoFocus: s && (z === -1 || u),
                autoFocusItem: P,
                variant: g,
              },
              c,
              { className: ue(L.list, c.className), children: a }
            )
          ),
        }
      )
    );
  }),
  ES = HL;
function qL(e) {
  return Ee("MuiMenuItem", e);
}
const KL = _e("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  As = KL,
  GL = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  QL = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  XL = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: s,
      } = e,
      l = ke(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        qL,
        s
      );
    return R({}, s, l);
  },
  YL = ne(ao, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: QL,
  })(({ theme: e, ownerState: t }) =>
    R(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${As.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${As.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Fe(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${As.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Fe(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Fe(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${As.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${As.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${$y.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${$y.inset}`]: { marginLeft: 52 },
        [`& .${Hu.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${Hu.inset}`]: { paddingLeft: 36 },
        [`& .${Fy.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        R(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${Fy.root} svg`]: { fontSize: "1.25rem" } }
        )
    )
  ),
  JL = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: s = !1,
        divider: a = !1,
        disableGutters: l = !1,
        focusVisibleClassName: u,
        role: c = "menuitem",
        tabIndex: d,
        className: p,
      } = r,
      b = le(r, GL),
      m = x.useContext(Jn),
      v = x.useMemo(
        () => ({ dense: s || m.dense || !1, disableGutters: l }),
        [m.dense, s, l]
      ),
      C = x.useRef(null);
    On(() => {
      o && C.current && C.current.focus();
    }, [o]);
    const g = R({}, r, { dense: v.dense, divider: a, disableGutters: l }),
      h = XL(r),
      y = gt(C, n);
    let S;
    return (
      r.disabled || (S = d !== void 0 ? d : -1),
      f.jsx(Jn.Provider, {
        value: v,
        children: f.jsx(
          YL,
          R(
            {
              ref: y,
              role: c,
              tabIndex: S,
              component: i,
              focusVisibleClassName: ue(h.focusVisible, u),
              className: ue(h.root, p),
            },
            b,
            { ownerState: g, classes: h }
          )
        ),
      })
    );
  }),
  aa = JL;
function ZL(e) {
  return Ee("MuiNativeSelect", e);
}
const eM = _e("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  zm = eM,
  tM = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  nM = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${ee(n)}`, i && "iconOpen", r && "disabled"],
      };
    return ke(a, ZL, t);
  },
  _S = ({ ownerState: e, theme: t }) =>
    R(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": R(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${zm.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  rM = ne("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Dt,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${zm.multiple}`]: t.multiple },
      ];
    },
  })(_S),
  kS = ({ ownerState: e, theme: t }) =>
    R(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${zm.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  oM = ne("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${ee(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(kS),
  iM = x.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = "standard",
      } = t,
      u = le(t, tM),
      c = R({}, t, { disabled: o, variant: l, error: i }),
      d = nM(c);
    return f.jsxs(x.Fragment, {
      children: [
        f.jsx(
          rM,
          R(
            {
              ownerState: c,
              className: ue(d.select, r),
              disabled: o,
              ref: a || n,
            },
            u
          )
        ),
        t.multiple
          ? null
          : f.jsx(oM, { as: s, ownerState: c, className: d.icon }),
      ],
    });
  }),
  sM = iM;
var Vy;
const aM = ["children", "classes", "className", "label", "notched"],
  lM = ne("fieldset", { shouldForwardProp: Dt })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  uM = ne("legend", { shouldForwardProp: Dt })(({ ownerState: e, theme: t }) =>
    R(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        R(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function cM(e) {
  const { className: t, label: n, notched: r } = e,
    o = le(e, aM),
    i = n != null && n !== "",
    s = R({}, e, { notched: r, withLabel: i });
  return f.jsx(
    lM,
    R({ "aria-hidden": !0, className: t, ownerState: s }, o, {
      children: f.jsx(uM, {
        ownerState: s,
        children: i
          ? f.jsx("span", { children: n })
          : Vy ||
            (Vy = f.jsx("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
const dM = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  fM = (e) => {
    const { classes: t } = e,
      r = ke(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        O$,
        t
      );
    return R({}, t, r);
  },
  pM = ne(pd, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: dd,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return R(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Fr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Fr.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${Fr.focused} .${Fr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${Fr.error} .${Fr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${Fr.disabled} .${Fr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        R(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    );
  }),
  hM = ne(cM, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  mM = ne(hd, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: fd,
  })(({ theme: e, ownerState: t }) =>
    R(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  TS = x.forwardRef(function (t, n) {
    var r, o, i, s, a;
    const l = Te({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: d = "input",
        label: p,
        multiline: b = !1,
        notched: m,
        slots: v = {},
        type: C = "text",
      } = l,
      g = le(l, dM),
      h = fM(l),
      y = Or(),
      S = po({
        props: l,
        muiFormControl: y,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      E = R({}, l, {
        color: S.color || "primary",
        disabled: S.disabled,
        error: S.error,
        focused: S.focused,
        formControl: y,
        fullWidth: c,
        hiddenLabel: S.hiddenLabel,
        multiline: b,
        size: S.size,
        type: C,
      }),
      _ = (r = (o = v.root) != null ? o : u.Root) != null ? r : pM,
      w = (i = (s = v.input) != null ? s : u.Input) != null ? i : mM;
    return f.jsx(
      jm,
      R(
        {
          slots: { root: _, input: w },
          renderSuffix: (k) =>
            f.jsx(hM, {
              ownerState: E,
              className: h.notchedOutline,
              label:
                p != null && p !== "" && S.required
                  ? a || (a = f.jsxs(x.Fragment, { children: [p, " ", "*"] }))
                  : p,
              notched:
                typeof m < "u"
                  ? m
                  : !!(k.startAdornment || k.filled || k.focused),
            }),
          fullWidth: c,
          inputComponent: d,
          multiline: b,
          ref: n,
          type: C,
        },
        g,
        { classes: R({}, h, { notchedOutline: null }) }
      )
    );
  });
TS.muiName = "Input";
const AS = TS,
  vM = mr(
    f.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "RadioButtonUnchecked"
  ),
  gM = mr(
    f.jsx("path", {
      d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z",
    }),
    "RadioButtonChecked"
  ),
  yM = ne("span", { shouldForwardProp: Dt })({
    position: "relative",
    display: "flex",
  }),
  bM = ne(vM)({ transform: "scale(1)" }),
  xM = ne(gM)(({ theme: e, ownerState: t }) =>
    R(
      {
        left: 0,
        position: "absolute",
        transform: "scale(0)",
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeIn,
          duration: e.transitions.duration.shortest,
        }),
      },
      t.checked && {
        transform: "scale(1)",
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeOut,
          duration: e.transitions.duration.shortest,
        }),
      }
    )
  );
function PS(e) {
  const { checked: t = !1, classes: n = {}, fontSize: r } = e,
    o = R({}, e, { checked: t });
  return f.jsxs(yM, {
    className: n.root,
    ownerState: o,
    children: [
      f.jsx(bM, { fontSize: r, className: n.background, ownerState: o }),
      f.jsx(xM, { fontSize: r, className: n.dot, ownerState: o }),
    ],
  });
}
const SM = x.createContext(void 0),
  $S = SM;
function CM() {
  return x.useContext($S);
}
function RM(e) {
  return Ee("MuiRadio", e);
}
const Wy = _e("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
  ]),
  wM = [
    "checked",
    "checkedIcon",
    "color",
    "icon",
    "name",
    "onChange",
    "size",
    "className",
  ],
  EM = (e) => {
    const { classes: t, color: n, size: r } = e,
      o = { root: ["root", `color${ee(n)}`, r !== "medium" && `size${ee(r)}`] };
    return R({}, t, ke(o, RM, t));
  },
  _M = ne(lS, {
    shouldForwardProp: (e) => Dt(e) || e === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size !== "medium" && t[`size${ee(n.size)}`],
        t[`color${ee(n.color)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    R(
      { color: (e.vars || e).palette.text.secondary },
      !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${
                t.color === "default"
                  ? e.vars.palette.action.activeChannel
                  : e.vars.palette[t.color].mainChannel
              } / ${e.vars.palette.action.hoverOpacity})`
            : Fe(
                t.color === "default"
                  ? e.palette.action.active
                  : e.palette[t.color].main,
                e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
      },
      t.color !== "default" && {
        [`&.${Wy.checked}`]: { color: (e.vars || e).palette[t.color].main },
      },
      { [`&.${Wy.disabled}`]: { color: (e.vars || e).palette.action.disabled } }
    )
  );
function kM(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Hy = f.jsx(PS, { checked: !0 }),
  qy = f.jsx(PS, {}),
  TM = x.forwardRef(function (t, n) {
    var r, o;
    const i = Te({ props: t, name: "MuiRadio" }),
      {
        checked: s,
        checkedIcon: a = Hy,
        color: l = "primary",
        icon: u = qy,
        name: c,
        onChange: d,
        size: p = "medium",
        className: b,
      } = i,
      m = le(i, wM),
      v = R({}, i, { color: l, size: p }),
      C = EM(v),
      g = CM();
    let h = s;
    const y = hu(d, g && g.onChange);
    let S = c;
    return (
      g &&
        (typeof h > "u" && (h = kM(g.value, i.value)),
        typeof S > "u" && (S = g.name)),
      f.jsx(
        _M,
        R(
          {
            type: "radio",
            icon: x.cloneElement(u, {
              fontSize: (r = qy.props.fontSize) != null ? r : p,
            }),
            checkedIcon: x.cloneElement(a, {
              fontSize: (o = Hy.props.fontSize) != null ? o : p,
            }),
            ownerState: v,
            classes: C,
            name: S,
            checked: h,
            onChange: y,
            ref: n,
            className: ue(C.root, b),
          },
          m
        )
      )
    );
  }),
  AM = TM,
  PM = ["actions", "children", "defaultValue", "name", "onChange", "value"],
  $M = x.forwardRef(function (t, n) {
    const {
        actions: r,
        children: o,
        defaultValue: i,
        name: s,
        onChange: a,
        value: l,
      } = t,
      u = le(t, PM),
      c = x.useRef(null),
      [d, p] = va({ controlled: l, default: i, name: "RadioGroup" });
    x.useImperativeHandle(
      r,
      () => ({
        focus: () => {
          let C = c.current.querySelector("input:not(:disabled):checked");
          C || (C = c.current.querySelector("input:not(:disabled)")),
            C && C.focus();
        },
      }),
      []
    );
    const b = gt(n, c),
      m = za(s),
      v = x.useMemo(
        () => ({
          name: m,
          onChange(C) {
            p(C.target.value), a && a(C, C.target.value);
          },
          value: d,
        }),
        [m, a, p, d]
      );
    return f.jsx($S.Provider, {
      value: v,
      children: f.jsx(
        GI,
        R({ role: "radiogroup", ref: b }, u, { children: o })
      ),
    });
  }),
  NM = $M;
function IM(e) {
  return Ee("MuiSelect", e);
}
const Ps = _e("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var Ky;
const OM = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  LM = ne("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${Ps.select}`]: t.select },
        { [`&.${Ps.select}`]: t[n.variant] },
        { [`&.${Ps.error}`]: t.error },
        { [`&.${Ps.multiple}`]: t.multiple },
      ];
    },
  })(_S, {
    [`&.${Ps.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  MM = ne("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${ee(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(kS),
  FM = ne("input", {
    shouldForwardProp: (e) => RT(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function Gy(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function DM(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const jM = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${ee(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return ke(a, IM, t);
  },
  BM = x.forwardRef(function (t, n) {
    var r;
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: s,
        autoWidth: a,
        children: l,
        className: u,
        defaultOpen: c,
        defaultValue: d,
        disabled: p,
        displayEmpty: b,
        error: m = !1,
        IconComponent: v,
        inputRef: C,
        labelId: g,
        MenuProps: h = {},
        multiple: y,
        name: S,
        onBlur: E,
        onChange: _,
        onClose: w,
        onFocus: k,
        onOpen: L,
        open: P,
        readOnly: U,
        renderValue: B,
        SelectDisplayProps: F = {},
        tabIndex: z,
        value: V,
        variant: K = "standard",
      } = t,
      G = le(t, OM),
      [N, O] = va({ controlled: V, default: d, name: "Select" }),
      [D, X] = va({ controlled: P, default: c, name: "Select" }),
      A = x.useRef(null),
      H = x.useRef(null),
      [W, se] = x.useState(null),
      { current: Y } = x.useRef(P != null),
      [ve, ge] = x.useState(),
      oe = gt(n, C),
      Ae = x.useCallback((xe) => {
        (H.current = xe), xe && se(xe);
      }, []),
      ye = W == null ? void 0 : W.parentNode;
    x.useImperativeHandle(
      oe,
      () => ({
        focus: () => {
          H.current.focus();
        },
        node: A.current,
        value: N,
      }),
      [N]
    ),
      x.useEffect(() => {
        c && D && W && !Y && (ge(a ? null : ye.clientWidth), H.current.focus());
      }, [W, a]),
      x.useEffect(() => {
        s && H.current.focus();
      }, [s]),
      x.useEffect(() => {
        if (!g) return;
        const xe = on(H.current).getElementById(g);
        if (xe) {
          const He = () => {
            getSelection().isCollapsed && H.current.focus();
          };
          return (
            xe.addEventListener("click", He),
            () => {
              xe.removeEventListener("click", He);
            }
          );
        }
      }, [g]);
    const be = (xe, He) => {
        xe ? L && L(He) : w && w(He),
          Y || (ge(a ? null : ye.clientWidth), X(xe));
      },
      me = (xe) => {
        xe.button === 0 && (xe.preventDefault(), H.current.focus(), be(!0, xe));
      },
      $e = (xe) => {
        be(!1, xe);
      },
      je = x.Children.toArray(l),
      ct = (xe) => {
        const He = je.find((I) => I.props.value === xe.target.value);
        He !== void 0 && (O(He.props.value), _ && _(xe, He));
      },
      Qe = (xe) => (He) => {
        let I;
        if (He.currentTarget.hasAttribute("tabindex")) {
          if (y) {
            I = Array.isArray(N) ? N.slice() : [];
            const $ = N.indexOf(xe.props.value);
            $ === -1 ? I.push(xe.props.value) : I.splice($, 1);
          } else I = xe.props.value;
          if (
            (xe.props.onClick && xe.props.onClick(He), N !== I && (O(I), _))
          ) {
            const $ = He.nativeEvent || He,
              J = new $.constructor($.type, $);
            Object.defineProperty(J, "target", {
              writable: !0,
              value: { value: I, name: S },
            }),
              _(J, xe);
          }
          y || be(!1, He);
        }
      },
      T = (xe) => {
        U ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(xe.key) !== -1 &&
            (xe.preventDefault(), be(!0, xe)));
      },
      M = W !== null && D,
      j = (xe) => {
        !M &&
          E &&
          (Object.defineProperty(xe, "target", {
            writable: !0,
            value: { value: N, name: S },
          }),
          E(xe));
      };
    delete G["aria-invalid"];
    let Z, re;
    const Q = [];
    let ie = !1;
    (Wu({ value: N }) || b) && (B ? (Z = B(N)) : (ie = !0));
    const Pe = je.map((xe) => {
      if (!x.isValidElement(xe)) return null;
      let He;
      if (y) {
        if (!Array.isArray(N)) throw new Error(oo(2));
        (He = N.some((I) => Gy(I, xe.props.value))),
          He && ie && Q.push(xe.props.children);
      } else (He = Gy(N, xe.props.value)), He && ie && (re = xe.props.children);
      return x.cloneElement(xe, {
        "aria-selected": He ? "true" : "false",
        onClick: Qe(xe),
        onKeyUp: (I) => {
          I.key === " " && I.preventDefault(),
            xe.props.onKeyUp && xe.props.onKeyUp(I);
        },
        role: "option",
        selected: He,
        value: void 0,
        "data-value": xe.props.value,
      });
    });
    ie &&
      (y
        ? Q.length === 0
          ? (Z = null)
          : (Z = Q.reduce(
              (xe, He, I) => (
                xe.push(He), I < Q.length - 1 && xe.push(", "), xe
              ),
              []
            ))
        : (Z = re));
    let We = ve;
    !a && Y && W && (We = ye.clientWidth);
    let Ze;
    typeof z < "u" ? (Ze = z) : (Ze = p ? null : 0);
    const Me = F.id || (S ? `mui-component-select-${S}` : void 0),
      Se = R({}, t, { variant: K, value: N, open: M, error: m }),
      Ht = jM(Se),
      zn = R({}, h.PaperProps, (r = h.slotProps) == null ? void 0 : r.paper),
      er = za();
    return f.jsxs(x.Fragment, {
      children: [
        f.jsx(
          LM,
          R(
            {
              ref: Ae,
              tabIndex: Ze,
              role: "combobox",
              "aria-controls": er,
              "aria-disabled": p ? "true" : void 0,
              "aria-expanded": M ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [g, Me].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: T,
              onMouseDown: p || U ? null : me,
              onBlur: j,
              onFocus: k,
            },
            F,
            {
              ownerState: Se,
              className: ue(F.className, Ht.select, u),
              id: Me,
              children: DM(Z)
                ? Ky ||
                  (Ky = f.jsx("span", {
                    className: "notranslate",
                    children: "​",
                  }))
                : Z,
            }
          )
        ),
        f.jsx(
          FM,
          R(
            {
              "aria-invalid": m,
              value: Array.isArray(N) ? N.join(",") : N,
              name: S,
              ref: A,
              "aria-hidden": !0,
              onChange: ct,
              tabIndex: -1,
              disabled: p,
              className: Ht.nativeInput,
              autoFocus: s,
              ownerState: Se,
            },
            G
          )
        ),
        f.jsx(MM, { as: v, className: Ht.icon, ownerState: Se }),
        f.jsx(
          ES,
          R(
            {
              id: `menu-${S || ""}`,
              anchorEl: ye,
              open: M,
              onClose: $e,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            h,
            {
              MenuListProps: R(
                {
                  "aria-labelledby": g,
                  role: "listbox",
                  "aria-multiselectable": y ? "true" : void 0,
                  disableListWrap: !0,
                  id: er,
                },
                h.MenuListProps
              ),
              slotProps: R({}, h.slotProps, {
                paper: R({}, zn, {
                  style: R({ minWidth: We }, zn != null ? zn.style : null),
                }),
              }),
              children: Pe,
            }
          )
        ),
      ],
    });
  }),
  zM = BM,
  UM = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  VM = ["root"],
  WM = (e) => {
    const { classes: t } = e;
    return t;
  },
  Um = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => Dt(e) && e !== "variant",
    slot: "Root",
  },
  HM = ne(xS, Um)(""),
  qM = ne(AS, Um)(""),
  KM = ne(hS, Um)(""),
  NS = x.forwardRef(function (t, n) {
    const r = Te({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: c = D$,
        id: d,
        input: p,
        inputProps: b,
        label: m,
        labelId: v,
        MenuProps: C,
        multiple: g = !1,
        native: h = !1,
        onClose: y,
        onOpen: S,
        open: E,
        renderValue: _,
        SelectDisplayProps: w,
        variant: k = "outlined",
      } = r,
      L = le(r, UM),
      P = h ? sM : zM,
      U = Or(),
      B = po({ props: r, muiFormControl: U, states: ["variant", "error"] }),
      F = B.variant || k,
      z = R({}, r, { variant: F, classes: s }),
      V = WM(z),
      K = le(V, VM),
      G =
        p ||
        {
          standard: f.jsx(HM, { ownerState: z }),
          outlined: f.jsx(qM, { label: m, ownerState: z }),
          filled: f.jsx(KM, { ownerState: z }),
        }[F],
      N = gt(n, G.ref);
    return f.jsx(x.Fragment, {
      children: x.cloneElement(
        G,
        R(
          {
            inputComponent: P,
            inputProps: R(
              {
                children: i,
                error: B.error,
                IconComponent: c,
                variant: F,
                type: void 0,
                multiple: g,
              },
              h
                ? { id: d }
                : {
                    autoWidth: o,
                    defaultOpen: l,
                    displayEmpty: u,
                    labelId: v,
                    MenuProps: C,
                    onClose: y,
                    onOpen: S,
                    open: E,
                    renderValue: _,
                    SelectDisplayProps: R({ id: d }, w),
                  },
              b,
              { classes: b ? rn(K, b.classes) : K },
              p ? p.props.inputProps : {}
            ),
          },
          ((g && h) || u) && F === "outlined" ? { notched: !0 } : {},
          { ref: N, className: ue(G.props.className, a, V.root) },
          !p && { variant: F },
          L
        )
      ),
    });
  });
NS.muiName = "Select";
const Yp = NS;
function GM(e) {
  return Ee("MuiSwitch", e);
}
const QM = _e("MuiSwitch", [
    "root",
    "edgeStart",
    "edgeEnd",
    "switchBase",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
    "checked",
    "disabled",
    "input",
    "thumb",
    "track",
  ]),
  qt = QM,
  XM = ["className", "color", "edge", "size", "sx"],
  YM = (e) => {
    const {
        classes: t,
        edge: n,
        size: r,
        color: o,
        checked: i,
        disabled: s,
      } = e,
      a = {
        root: ["root", n && `edge${ee(n)}`, `size${ee(r)}`],
        switchBase: [
          "switchBase",
          `color${ee(o)}`,
          i && "checked",
          s && "disabled",
        ],
        thumb: ["thumb"],
        track: ["track"],
        input: ["input"],
      },
      l = ke(a, GM, t);
    return R({}, t, l);
  },
  JM = ne("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.edge && t[`edge${ee(n.edge)}`], t[`size${ee(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    R(
      {
        display: "inline-flex",
        width: 34 + 12 * 2,
        height: 14 + 12 * 2,
        overflow: "hidden",
        padding: 12,
        boxSizing: "border-box",
        position: "relative",
        flexShrink: 0,
        zIndex: 0,
        verticalAlign: "middle",
        "@media print": { colorAdjust: "exact" },
      },
      e.edge === "start" && { marginLeft: -8 },
      e.edge === "end" && { marginRight: -8 },
      e.size === "small" && {
        width: 40,
        height: 24,
        padding: 7,
        [`& .${qt.thumb}`]: { width: 16, height: 16 },
        [`& .${qt.switchBase}`]: {
          padding: 4,
          [`&.${qt.checked}`]: { transform: "translateX(16px)" },
        },
      }
    )
  ),
  ZM = ne(lS, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.switchBase,
        { [`& .${qt.input}`]: t.input },
        n.color !== "default" && t[`color${ee(n.color)}`],
      ];
    },
  })(
    ({ theme: e }) => ({
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      color: e.vars
        ? e.vars.palette.Switch.defaultColor
        : `${
            e.palette.mode === "light"
              ? e.palette.common.white
              : e.palette.grey[300]
          }`,
      transition: e.transitions.create(["left", "transform"], {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${qt.checked}`]: { transform: "translateX(20px)" },
      [`&.${qt.disabled}`]: {
        color: e.vars
          ? e.vars.palette.Switch.defaultDisabledColor
          : `${
              e.palette.mode === "light"
                ? e.palette.grey[100]
                : e.palette.grey[600]
            }`,
      },
      [`&.${qt.checked} + .${qt.track}`]: { opacity: 0.5 },
      [`&.${qt.disabled} + .${qt.track}`]: {
        opacity: e.vars
          ? e.vars.opacity.switchTrackDisabled
          : `${e.palette.mode === "light" ? 0.12 : 0.2}`,
      },
      [`& .${qt.input}`]: { left: "-100%", width: "300%" },
    }),
    ({ theme: e, ownerState: t }) =>
      R(
        {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Fe(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.color !== "default" && {
          [`&.${qt.checked}`]: {
            color: (e.vars || e).palette[t.color].main,
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : Fe(e.palette[t.color].main, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            [`&.${qt.disabled}`]: {
              color: e.vars
                ? e.vars.palette.Switch[`${t.color}DisabledColor`]
                : `${
                    e.palette.mode === "light"
                      ? yu(e.palette[t.color].main, 0.62)
                      : gu(e.palette[t.color].main, 0.55)
                  }`,
            },
          },
          [`&.${qt.checked} + .${qt.track}`]: {
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        }
      )
  ),
  eF = ne("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: e.transitions.create(["opacity", "background-color"], {
      duration: e.transitions.duration.shortest,
    }),
    backgroundColor: e.vars
      ? e.vars.palette.common.onBackground
      : `${
          e.palette.mode === "light"
            ? e.palette.common.black
            : e.palette.common.white
        }`,
    opacity: e.vars
      ? e.vars.opacity.switchTrack
      : `${e.palette.mode === "light" ? 0.38 : 0.3}`,
  })),
  tF = ne("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (e, t) => t.thumb,
  })(({ theme: e }) => ({
    boxShadow: (e.vars || e).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%",
  })),
  nF = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiSwitch" }),
      {
        className: o,
        color: i = "primary",
        edge: s = !1,
        size: a = "medium",
        sx: l,
      } = r,
      u = le(r, XM),
      c = R({}, r, { color: i, edge: s, size: a }),
      d = YM(c),
      p = f.jsx(tF, { className: d.thumb, ownerState: c });
    return f.jsxs(JM, {
      className: ue(d.root, o),
      sx: l,
      ownerState: c,
      children: [
        f.jsx(
          ZM,
          R(
            {
              type: "checkbox",
              icon: p,
              checkedIcon: p,
              ref: n,
              ownerState: c,
            },
            u,
            { classes: R({}, d, { root: d.switchBase }) }
          )
        ),
        f.jsx(eF, { className: d.track, ownerState: c }),
      ],
    });
  }),
  rF = nF;
function oF(e) {
  return Ee("MuiToolbar", e);
}
_e("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const iF = ["className", "component", "disableGutters", "variant"],
  sF = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return ke({ root: ["root", !n && "gutters", r] }, oF, t);
  },
  aF = ne("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      R(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === "regular" && e.mixins.toolbar
  ),
  lF = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: a = "regular",
      } = r,
      l = le(r, iF),
      u = R({}, r, { component: i, disableGutters: s, variant: a }),
      c = sF(u);
    return f.jsx(
      aF,
      R({ as: i, className: ue(c.root, o), ref: n, ownerState: u }, l)
    );
  }),
  uF = lF;
function cF(e) {
  return Ee("MuiTextField", e);
}
_e("MuiTextField", ["root"]);
const dF = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  fF = { standard: xS, filled: hS, outlined: AS },
  pF = (e) => {
    const { classes: t } = e;
    return ke({ root: ["root"] }, cF, t);
  },
  hF = ne(rr, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  mF = x.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = "primary",
        defaultValue: u,
        disabled: c = !1,
        error: d = !1,
        FormHelperTextProps: p,
        fullWidth: b = !1,
        helperText: m,
        id: v,
        InputLabelProps: C,
        inputProps: g,
        InputProps: h,
        inputRef: y,
        label: S,
        maxRows: E,
        minRows: _,
        multiline: w = !1,
        name: k,
        onBlur: L,
        onChange: P,
        onFocus: U,
        placeholder: B,
        required: F = !1,
        rows: z,
        select: V = !1,
        SelectProps: K,
        type: G,
        value: N,
        variant: O = "outlined",
      } = r,
      D = le(r, dF),
      X = R({}, r, {
        autoFocus: i,
        color: l,
        disabled: c,
        error: d,
        fullWidth: b,
        multiline: w,
        required: F,
        select: V,
        variant: O,
      }),
      A = pF(X),
      H = {};
    O === "outlined" &&
      (C && typeof C.shrink < "u" && (H.notched = C.shrink), (H.label = S)),
      V &&
        ((!K || !K.native) && (H.id = void 0),
        (H["aria-describedby"] = void 0));
    const W = za(v),
      se = m && W ? `${W}-helper-text` : void 0,
      Y = S && W ? `${W}-label` : void 0,
      ve = fF[O],
      ge = f.jsx(
        ve,
        R(
          {
            "aria-describedby": se,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: b,
            multiline: w,
            name: k,
            rows: z,
            maxRows: E,
            minRows: _,
            type: G,
            value: N,
            id: W,
            inputRef: y,
            onBlur: L,
            onChange: P,
            onFocus: U,
            placeholder: B,
            inputProps: g,
          },
          H,
          h
        )
      );
    return f.jsxs(
      hF,
      R(
        {
          className: ue(A.root, a),
          disabled: c,
          error: d,
          fullWidth: b,
          ref: n,
          required: F,
          color: l,
          variant: O,
          ownerState: X,
        },
        D,
        {
          children: [
            S != null &&
              S !== "" &&
              f.jsx(Qp, R({ htmlFor: W, id: Y }, C, { children: S })),
            V
              ? f.jsx(
                  Yp,
                  R(
                    {
                      "aria-describedby": se,
                      id: W,
                      labelId: Y,
                      value: N,
                      input: ge,
                    },
                    K,
                    { children: s }
                  )
                )
              : ge,
            m && f.jsx(tO, R({ id: se }, p, { children: m })),
          ],
        }
      )
    );
  }),
  ci = mF,
  Pn = "/hub",
  Vm = "/services/japps",
  vF = "This field is required.",
  Nl = { required: vF },
  gF =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABdCAYAAAAyj+FzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4wEeAgwag/GoiAAAEHJJREFUeNrtnHl8VFWyx791u0OT0AkEt3FckK1BefieIG7jknFBGU0TlFbccACNflxGeUISfeOzR99oEhxxGRdQAoI68yEqyW2BEZfBBffEBRETFgUdZIZBIOmQdLr71vsjHW2h0+lOQliS+qf7c++pOvf8Tp06VXXrXOimdpF05cHn5uam9O7d90rD0DOAo1X5WgRfUVHRy4B2AxiH7rjjjqHhsGUCg3e9p8oboVCjZ+bMmT90AxiD7rzzzsNDoXAl8Is40LydltYzy+v1WvFkGV0RwGAwfFd88AD0jPr6+gmtyeqSAIrgSbDp+G4Ad6Fp06YdChycSFtVjukGcBdyOp3bE91hgR/2SwAVZHvB8MwdU4f13V4wPPNf3mHOjpLt9XobgYoEF/u7rbWwx+POzc3NmD179o49BdT2aUP622yMEvQEkGGKHgMc5Yc+Ng1AjyY0U+uhNt9lAZtR2YDwtcJnhmhloKf14UHetTVJ2sCZqjzXSjO/iD6dtBuTm5ub1hgKFQtcAziBTSpSPG/OnEeSUP3YmuXBVtd/8NlqSA7KaGBQB8xDCOE9LH3FUvvC3jNWr0mEKS8vbxZIbosy0cuLi4tfSApAr9drbNi48VXg7BjL6t55JSX/2yZNK3ANMCxuFOEK4PA9HFp9qKJznT3r5ot30854TfPz869V1btAjmoepggfquptxcXF7ycdiUyePNmtUN5C20a1rH7z5s3bnOhg6gqGjrRU7wDNAWydbEq3IvKkFbA/2Hvmqh9ai0pUtZdlWd8XFxdvanMsPGnSpBmITIvTeGxJSYmZiMbZlD8Cl+0D0c42RQrTG+selZnf1Xe08J/vwoYRiO8Xafz73iy7P3/IrXblc2DCPhIqZgpa5O+R9oW/wHXuHgVQVBfH0b5tqampK1q6X5s3+Fh//aaPFH1Iodc+6B0NUGVZbZ5rlk49MnWPAFhSUvKewKMx2oWBGx5//HF/zP0+f8hViHwI/Ne+HsUh5Pp7pFXU5g8a1kGb1u40efLkiQq/BY4UWBUWeeCZOXNW7L5kMWrrXQ8ITN0Pg5IaES5xFla/1uEAJuTT3TLI4U8zFkDCgfm+SI2iXOssrl7QqQCqd1iP2p3BRSL8poMGEga+B/xAHVCj0CDgBxWQPiipCD2BTKAP0LejIkcVuTajsKqkUwDU3JEp/szahUBOG/prAD4G/RhkrYiss0TWpzts34h3VWNSvsltx/Tp0bPnQAsdoKoDEYaKcgowpA3PZQlyjbOo6tk9DmBt3uAnELkhQfE7QZcJvG0Z1nvpDkdFskAl/Xx3DDpELdtphvIrFT0bGJkgaxCRC9ILq97YYwDW5rluRmLu0j/TMhFeQymtV1l0SHFV7d40cvW3H9svbLdyVNWDcForY/7BsmynJBpPJwXgjjzXSYbwDpDSQpOVqjqzIa1H6aHeVf59ccfYUTBwkFi2G0S4Dshoodlnzp3WyfLo2kCHAbh52vG9etkaKgFXjOTdChWrKL1o7cvSzmxNZ9GWvCHpqcJkS3SqKP1iJE4ezCiqvr3DAGzB7r1vqNzSq7jq4/3Vh1Fvlt1fv+l64J5ddnUFzUovWvNWuwFsyqhYH0RlU7YKcm+v1KpHxYvFAUDbC4Zn2mj0onpT1DhXObelnyCzK4KJJxN2V2VRtR5vFirI3MZUa4CzqOrhAwU8gD6FK7elF1bdaohxMlAVuTysLrP2lnZpYE2Ba5woLwENghQ4i6oe5gCnLXlD0nuiTyFcBmxtUOkfz5Mw4mmfKHcD6wRO6QrgARxSXFWbXlw9AdVbgQyH6E1tWsI7810XAD0Nm+0MZ1H1Z3QxSi9e8wiqEwRuVu+wHkkDGIbzbHbO6XXf6u/popRevOYlVH/nbwiNTTrerbvz2MPppqZoJn/A0d0odNO+SQdcfaDH4+kRCARGORyOj0pLSxv3dH/2Awm8MWPGOAKBwDYgNRQKHQxs3dN9HlDVWfX19QKkdmaf9hizmGEYhi0tLa1uTy0Bt9v9S8MwDge2lpWVfbO3AHe73emWZf0iHA5vX7p06ZZEzZ7b7Xapqvh8vq8khtDVwFBVHe/z+V6Muj4PcAOFpmkW78qXnZ39gYicJCKTy8vL50bxzQI8InKVqn4vIo+p6qlRrJ8Dt5im+VYUz19oejG/1DTN38Toq7+IVKiqhsPhEUuWLNngdrs3A4dF5wiIpNdU9Qyfz7cqSv6JIlKoqllRyYPPVXW6z+dbtktfF4mID5ivql7gryJyEvCYaZo3J7OEe9H0QiepJaKqKUCmqp4DrFDVwSIyT1VnAmuA44FX3W73eVFssyO/oy+66KIjdrM7hnEZkCkiK5csWbIh0o9PRMqimr0JvAa8Fg6H/VHgXQC8o6onicg9InIBMA04QkSWZGdnj/mZuokEIvLtIrIkAt5aVf22szaRZjMwFXg7GAyOb14uHo+nIBAILAAuBeZ4PJ5BpaWljaZp/t3tdn8JHGcYxhXAjF0m5bLI3x813efzXZeTk9NHVXMAbDbblEWLFm3dRZsOBhZEnmlUeXl5c+bllZycnDLLslaKyJ89Ho+rtLQ0HLkXiAB5IVBrGMbJZWVlH3bmJtKcGvcDl0fbmtLS0sZgMHgzTa8yj2psbLwwim9O5Pe30cLGjRvnoqkCwu9wOF5Masc0jGtpqo8uNk2zKvpeWVnZOlV9DhgQCAROidLA5ix7b+C6aPA6SwObZ/JN0zR3Kx1bunTpFrfbvRi4VFVPBxZFNOiZcDj8R+C4nJyckWVlZRUA4XC4Wfv+Ulpa6k/SnFzQPKljx46NVWjkUFVUdSiwIsLT/O6krqam5rW96Qd+E2dga0QEVf3x7MaiRYu2ut3uF4ErVfUafqprvizC05YX4c0VscWqLb++EZFYeYDvly9fHmo3gKra4cveMAyHqiIiDbsMZJaqXmlZ1pVjxoyZbrfb+wPDgCqfz/d+G7pqrhq7F/guzvPEKkIPtTcSaYgM6qAWZi2jtexQa5ohIhuiL5aXl7/tdru/FJHjUlJSzgVGRCbx6bZMlIjsUNU+wLumaf6tsyOR5rzgyTH8sqOJHNqzLCvUAv+5ubm5KTFi176qem7Evr0aY9CzIqDlAGOBRhGJWQyUkpJiRPGlxlg9yyN/p3R6KKeqf4/8PXHs2LHjmq9ffPHFh4vI880OqYi09LLpiM2bNz/p8Xh6RAGfFggEnqHpNMCKl19++b3d1k0otACoFxFPRANfNE3zn7E62LJlSw1QDxAMBs+I0eRBIAiMd7vdd3m93t3GP3r06KSKQ+0xZjw1loEdOXLkK5WVlR8Bo1T1hezs7I9FJBAKhUYAW4AXgPGq2rOFviqBqwOBwK+zs7OXiYgAFwJHAJvC4fDEWEyLFy/e5na7F9J07AJVfbylwSxfvjwU2XiuEpGn3W73BMBmmuZFAKZpfu52u28CngDuqaysvHLs2LGvq2pQVQ8RkZNUtSISBbVNA1U1MwLkz+55vV4rFAq5VdUXuX8ScCqwNBQKnSoiK4Ftcfp6Fzgf8IvI9UBuJJpYAIxavHjx+ji2683I3499Pt878QYUDAb/O/KMqZHQMyta603TfEpVRwPvAy5VvRG4VUSuAGwisnoXkTuB9cC3reYDvV6vUVlZGYpcPys6Po2mrKysnhkZGUc6HI7Nrfli2dnZD4rIVODPpmneEgmnDjMMIzUlJWVTAgkLcbvdy4EzgUtM03wpEc0YPXp0r9TU1L6HHXbY5tmzZ8d8OT5u3LiDgsHgkYZhNDgcji2lpaU/JGsDf7aEP/300xMi4NUBn8RZKg3A2rYa3pZsWAsZk6kR8CpGjBhRZppmQnzLli2ri4yjRYqEeu3KGf4IYE5OzkDLsh6LLJmS8vLyvVqW5vV6jYqKiunA/UDQMIzrWzs9vjfIHpnl9yzLGklT6drnjY2Nv9+bD5WdnX1wZWXlchEZBljApOZQbl8jIypj8p6I3FxTU3Py0qVLazqqAxH5LhKGfZsoj8/n20pTtdRXwK9N03yObkqOcnJyjmF/feml3mE9/PlDz++exqYjurUFQ85OKhIR76pGVM+pzXdN6NLgeTFqB7hKDDT56qywGk8Bc2sLBl/SNcHLstfWu+YaMKRXYfVHSQPYVKkuL6FS6s9zFaqn08/77jWqnTbwUH/9pqUCE8PovXE3yXg3d0w/drBhhL9scnd0uVg9LnfOWLX5gAYvf/CZIH+l6WR9hbOoelS84vm42ZjeM1av4cfcm2SpEayozRsy/kAEbvO043v58133g7wRAU+xrNtbO3nQqpuwvWB4pk0DVcAhURZiuWD7nbPoq5UHAng1+YOyEePR6CMPKizIKKye2Kqfm0gH/jzX1SrM3zVVh8jjNis8I6147Xf7JXDTXWeIwf9FYu1o+rfYgv/hvO/rf3YIgAC1ea7nES6PlUECyixD/9T7/jUf7BeuSf2gCwWjADgtdiPxpBdXvZCIvIQB3HbbMX1SHD0+UeJ+T+p1UZ5plJDZt2j9jn0JuO3TBw00xLjUEK5T6B8H4ifSi9bcmHComsxD+KcNOV5t+g7xXxABBER4FaU0JA5fn8KV2/YGaDumHztYJDw+8rW2ExJgecuZmnJeMidKk441a/KGuEX0JRL/DkwY+AJ4R9B3bYTfSS1av3FPhFw7Bw463lI5HeQ04HTgyCRErNMQp2T8qfrfSSVL2vKw/jzXNSqU0PbSkH8Ba1VYJxbrBNZbNllvC4XrgzZjuz2csjMYrGvIfOib7erNsu9o2Jru0Lr0oKak2gxxKqGDFBmgagwUdAAwUGBQ278WIhtDImdlFn71TdKcbd/6XdcJPMn+X6T5D0vCWb0L17Upw96udFHkKNhzdHJVaAfSl3ZCY9pjUtqlPRmF1YvU4vzIktzf6PWwOE5vrz1u9/LLmFH9NuHwcJqKGfeLRAsijzhTf3lBR3gHHZbxbTq8/I8CkN8Djn0UvPWi5DqLq1/vKIEdnjKvucM1VFSeRPWsfQi4oCIPp6fW3t3KNwX3PoA/ujoFrnNVeQD4z726XOEFS8J3tnWX3WsANju3/oGDc7BkKsKvOhG4BoHn1GZ7KP2+1V/syY4SBnDWrFlpKSkpp6lqPyBsGMaqDRs2fOL1ekOJ8NdNHzTCMuRqkAm0+hXxNqvbxwbyrBrh59PvX7ulM2aqVQAXLlyY6vf7/we4hd2/tbJBVe+dMmXKnGS0snaA61SB84Dmosme7YhoVoC8GhZ9pU9h9frOthFxAXz66af7GobxCnBiK3Lmb9y4cVJbSi/Um2Wvq998LISHWyr9RPQokINVSReJlJ6I7sSSOoVNgm5UZb1d9NN9IQ/ZIoCqKnPnzl0W0ZLWgVD9w5QpU7x0MWoRwLlz53pUdWESsgJ2u901ceLEjV0JQCOORl2VpCxHKBS6sqtpYIsAisioNsgb1Q1gk8uSoqpJf3RCVQ/tBhC4/vrrg0DSJW4isrUbwJ/ozTbIW94N4E/a9GSSshqBZ7sBbA4xNmz4WzIapar3T548eUs3gBHyer1WMBj0AJ8mYPvmffvtt/fQBanVWDiSRLgbuJGmI1nR9J2I3D1p0qQSuiglnI2ZP39+r2AweCbQDwiKyGqn0/nBpZdeGqYL0/8DYoC55FAuaE8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMzBUMDI6MTI6MjYrMDA6MDDUuE4iAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTMwVDAyOjEyOjI2KzAwOjAwpeX2ngAAAABJRU5ErkJggg==",
  yF = [];
class is {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    const n = { listener: t };
    return (
      this.listeners.add(n),
      this.onSubscribe(),
      () => {
        this.listeners.delete(n), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const La = typeof window > "u" || "Deno" in window;
function wn() {}
function bF(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jp(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function IS(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Hs(e, t, n) {
  return Qa(e)
    ? typeof t == "function"
      ? { ...n, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e;
}
function xF(e, t, n) {
  return Qa(e)
    ? typeof t == "function"
      ? { ...n, mutationKey: e, mutationFn: t }
      : { ...t, mutationKey: e }
    : typeof e == "function"
    ? { ...t, mutationFn: e }
    : { ...e };
}
function zr(e, t, n) {
  return Qa(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function Qy(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a,
  } = e;
  if (Qa(s)) {
    if (r) {
      if (t.queryHash !== Wm(s, t.options)) return !1;
    } else if (!qu(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (typeof o < "u" && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Xy(e, t) {
  const { exact: n, fetching: r, predicate: o, mutationKey: i } = e;
  if (Qa(i)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (To(t.options.mutationKey) !== To(i)) return !1;
    } else if (!qu(t.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (o && !o(t))
  );
}
function Wm(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || To)(e);
}
function To(e) {
  return JSON.stringify(e, (t, n) =>
    Zp(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function qu(e, t) {
  return OS(e, t);
}
function OS(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !OS(e[n], t[n]))
    : !1;
}
function LS(e, t) {
  if (e === t) return e;
  const n = Yy(e) && Yy(t);
  if (n || (Zp(e) && Zp(t))) {
    const r = n ? e.length : Object.keys(e).length,
      o = n ? t : Object.keys(t),
      i = o.length,
      s = n ? [] : {};
    let a = 0;
    for (let l = 0; l < i; l++) {
      const u = n ? l : o[l];
      (s[u] = LS(e[u], t[u])), s[u] === e[u] && a++;
    }
    return r === i && a === r ? e : s;
  }
  return t;
}
function Ku(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Yy(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Zp(e) {
  if (!Jy(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Jy(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Jy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qa(e) {
  return Array.isArray(e);
}
function MS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Zy(e) {
  MS(0).then(e);
}
function SF() {
  if (typeof AbortController == "function") return new AbortController();
}
function eh(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? LS(e, t)
    : t;
}
class CF extends is {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!La && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("visibilitychange", n, !1),
            window.addEventListener("focus", n, !1),
            () => {
              window.removeEventListener("visibilitychange", n),
                window.removeEventListener("focus", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    this.focused !== t && ((this.focused = t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Gu = new CF(),
  e0 = ["online", "offline"];
class RF extends is {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!La && window.addEventListener) {
          const n = () => t();
          return (
            e0.forEach((r) => {
              window.addEventListener(r, n, !1);
            }),
            () => {
              e0.forEach((r) => {
                window.removeEventListener(r, n);
              });
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    this.online !== t && ((this.online = t), this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const Qu = new RF();
function wF(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function md(e) {
  return (e ?? "online") === "online" ? Qu.isOnline() : !0;
}
class FS {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function iu(e) {
  return e instanceof FS;
}
function DS(e) {
  let t = !1,
    n = 0,
    r = !1,
    o,
    i,
    s;
  const a = new Promise((C, g) => {
      (i = C), (s = g);
    }),
    l = (C) => {
      r || (b(new FS(C)), e.abort == null || e.abort());
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    d = () => !Gu.isFocused() || (e.networkMode !== "always" && !Qu.isOnline()),
    p = (C) => {
      r ||
        ((r = !0),
        e.onSuccess == null || e.onSuccess(C),
        o == null || o(),
        i(C));
    },
    b = (C) => {
      r ||
        ((r = !0), e.onError == null || e.onError(C), o == null || o(), s(C));
    },
    m = () =>
      new Promise((C) => {
        (o = (g) => {
          const h = r || !d();
          return h && C(g), h;
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (o = void 0), r || e.onContinue == null || e.onContinue();
      }),
    v = () => {
      if (r) return;
      let C;
      try {
        C = e.fn();
      } catch (g) {
        C = Promise.reject(g);
      }
      Promise.resolve(C)
        .then(p)
        .catch((g) => {
          var h, y;
          if (r) return;
          const S = (h = e.retry) != null ? h : 3,
            E = (y = e.retryDelay) != null ? y : wF,
            _ = typeof E == "function" ? E(n, g) : E,
            w =
              S === !0 ||
              (typeof S == "number" && n < S) ||
              (typeof S == "function" && S(n, g));
          if (t || !w) {
            b(g);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, g),
            MS(_)
              .then(() => {
                if (d()) return m();
              })
              .then(() => {
                t ? b(g) : v();
              });
        });
    };
  return (
    md(e.networkMode) ? v() : m().then(v),
    {
      promise: a,
      cancel: l,
      continue: () => ((o == null ? void 0 : o()) ? a : Promise.resolve()),
      cancelRetry: u,
      continueRetry: c,
    }
  );
}
const Hm = console;
function EF() {
  let e = [],
    t = 0,
    n = (c) => {
      c();
    },
    r = (c) => {
      c();
    };
  const o = (c) => {
      let d;
      t++;
      try {
        d = c();
      } finally {
        t--, t || a();
      }
      return d;
    },
    i = (c) => {
      t
        ? e.push(c)
        : Zy(() => {
            n(c);
          });
    },
    s =
      (c) =>
      (...d) => {
        i(() => {
          c(...d);
        });
      },
    a = () => {
      const c = e;
      (e = []),
        c.length &&
          Zy(() => {
            r(() => {
              c.forEach((d) => {
                n(d);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: s,
    schedule: i,
    setNotifyFunction: (c) => {
      n = c;
    },
    setBatchNotifyFunction: (c) => {
      r = c;
    },
  };
}
const mt = EF();
class jS {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Jp(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t ?? (La ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class _F extends jS {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || Hm),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || kF(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(t, n) {
    const r = eh(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual,
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({ type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (
      (n = this.retryer) == null || n.cancel(t),
      r ? r.then(wn).catch(wn) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !IS(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, n) {
    var r, o;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const b = this.observers.find((m) => m.options.queryFn);
      b && this.setOptions(b.options);
    }
    const s = SF(),
      a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      l = (b) => {
        Object.defineProperty(b, "signal", {
          enumerable: !0,
          get: () => {
            if (s) return (this.abortSignalConsumed = !0), s.signal;
          },
        });
      };
    l(a);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
          : Promise.reject(
              "Missing queryFn for queryKey '" + this.options.queryHash + "'"
            ),
      c = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: u,
      };
    if (
      (l(c),
      (r = this.options.behavior) == null || r.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((o = c.fetchOptions) == null ? void 0 : o.meta))
    ) {
      var d;
      this.dispatch({
        type: "fetch",
        meta: (d = c.fetchOptions) == null ? void 0 : d.meta,
      });
    }
    const p = (b) => {
      if (
        ((iu(b) && b.silent) || this.dispatch({ type: "error", error: b }),
        !iu(b))
      ) {
        var m, v, C, g;
        (m = (v = this.cache.config).onError) == null || m.call(v, b, this),
          (C = (g = this.cache.config).onSettled) == null ||
            C.call(g, this.state.data, b, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = DS({
        fn: c.fetchFn,
        abort: s == null ? void 0 : s.abort.bind(s),
        onSuccess: (b) => {
          var m, v, C, g;
          if (typeof b > "u") {
            p(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(b),
            (m = (v = this.cache.config).onSuccess) == null ||
              m.call(v, b, this),
            (C = (g = this.cache.config).onSettled) == null ||
              C.call(g, b, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: p,
        onFail: (b, m) => {
          this.dispatch({ type: "failed", failureCount: b, error: m });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var o, i;
      switch (t.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error,
          };
        case "pause":
          return { ...r, fetchStatus: "paused" };
        case "continue":
          return { ...r, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (o = t.meta) != null ? o : null,
            fetchStatus: md(this.options.networkMode) ? "fetching" : "paused",
            ...(!r.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case "error":
          const s = t.error;
          return iu(s) && s.revert && this.revertState
            ? { ...this.revertState, fetchStatus: "idle" }
            : {
                ...r,
                error: s,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...r, isInvalidated: !0 };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      mt.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function kF(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = typeof t < "u",
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class TF extends is {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, n, r) {
    var o;
    const i = n.queryKey,
      s = (o = n.queryHash) != null ? o : Wm(i, n);
    let a = this.get(s);
    return (
      a ||
        ((a = new _F({
          cache: this,
          logger: t.getLogger(),
          queryKey: i,
          queryHash: s,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(i),
        })),
        this.add(a)),
      a
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    mt.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = zr(t, n);
    return (
      typeof r.exact > "u" && (r.exact = !0), this.queries.find((o) => Qy(r, o))
    );
  }
  findAll(t, n) {
    const [r] = zr(t, n);
    return Object.keys(r).length > 0
      ? this.queries.filter((o) => Qy(r, o))
      : this.queries;
  }
  notify(t) {
    mt.batch(() => {
      this.listeners.forEach(({ listener: n }) => {
        n(t);
      });
    });
  }
  onFocus() {
    mt.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    mt.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class AF extends jS {
  constructor(t) {
    super(),
      (this.defaultOptions = t.defaultOptions),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || Hm),
      (this.observers = []),
      (this.state = t.state || BS()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: t,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    var t, n;
    return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null
      ? t
      : this.execute();
  }
  async execute() {
    const t = () => {
        var w;
        return (
          (this.retryer = DS({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (k, L) => {
              this.dispatch({ type: "failed", failureCount: k, error: L });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (w = this.options.retry) != null ? w : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === "loading";
    try {
      var r, o, i, s, a, l, u, c;
      if (!n) {
        var d, p, b, m;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((d = (p = this.mutationCache.config).onMutate) == null
            ? void 0
            : d.call(p, this.state.variables, this));
        const k = await ((b = (m = this.options).onMutate) == null
          ? void 0
          : b.call(m, this.state.variables));
        k !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: k,
            variables: this.state.variables,
          });
      }
      const w = await t();
      return (
        await ((r = (o = this.mutationCache.config).onSuccess) == null
          ? void 0
          : r.call(o, w, this.state.variables, this.state.context, this)),
        await ((i = (s = this.options).onSuccess) == null
          ? void 0
          : i.call(s, w, this.state.variables, this.state.context)),
        await ((a = (l = this.mutationCache.config).onSettled) == null
          ? void 0
          : a.call(l, w, null, this.state.variables, this.state.context, this)),
        await ((u = (c = this.options).onSettled) == null
          ? void 0
          : u.call(c, w, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: w }),
        w
      );
    } catch (w) {
      try {
        var v, C, g, h, y, S, E, _;
        throw (
          (await ((v = (C = this.mutationCache.config).onError) == null
            ? void 0
            : v.call(C, w, this.state.variables, this.state.context, this)),
          await ((g = (h = this.options).onError) == null
            ? void 0
            : g.call(h, w, this.state.variables, this.state.context)),
          await ((y = (S = this.mutationCache.config).onSettled) == null
            ? void 0
            : y.call(
                S,
                void 0,
                w,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((E = (_ = this.options).onSettled) == null
            ? void 0
            : E.call(_, void 0, w, this.state.variables, this.state.context)),
          w)
        );
      } finally {
        this.dispatch({ type: "error", error: w });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "loading":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !md(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      mt.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function BS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class PF extends is {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, n, r) {
    const o = new AF({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey
        ? t.getMutationDefaults(n.mutationKey)
        : void 0,
    });
    return this.add(o), o;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)),
      this.notify({ type: "removed", mutation: t });
  }
  clear() {
    mt.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > "u" && (t.exact = !0),
      this.mutations.find((n) => Xy(t, n))
    );
  }
  findAll(t) {
    return this.mutations.filter((n) => Xy(t, n));
  }
  notify(t) {
    mt.batch(() => {
      this.listeners.forEach(({ listener: n }) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const n = this.mutations.filter((r) => r.state.isPaused);
          return mt.batch(() =>
            n.reduce(
              (r, o) => r.then(() => o.continue().catch(wn)),
              Promise.resolve()
            )
          );
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function $F() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, o, i, s;
        const a =
            (t = e.fetchOptions) == null || (n = t.meta) == null
              ? void 0
              : n.refetchPage,
          l =
            (r = e.fetchOptions) == null || (o = r.meta) == null
              ? void 0
              : o.fetchMore,
          u = l == null ? void 0 : l.pageParam,
          c = (l == null ? void 0 : l.direction) === "forward",
          d = (l == null ? void 0 : l.direction) === "backward",
          p = ((i = e.state.data) == null ? void 0 : i.pages) || [],
          b = ((s = e.state.data) == null ? void 0 : s.pageParams) || [];
        let m = b,
          v = !1;
        const C = (_) => {
            Object.defineProperty(_, "signal", {
              enumerable: !0,
              get: () => {
                var w;
                if ((w = e.signal) != null && w.aborted) v = !0;
                else {
                  var k;
                  (k = e.signal) == null ||
                    k.addEventListener("abort", () => {
                      v = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          g =
            e.options.queryFn ||
            (() =>
              Promise.reject(
                "Missing queryFn for queryKey '" + e.options.queryHash + "'"
              )),
          h = (_, w, k, L) => (
            (m = L ? [w, ...m] : [...m, w]), L ? [k, ..._] : [..._, k]
          ),
          y = (_, w, k, L) => {
            if (v) return Promise.reject("Cancelled");
            if (typeof k > "u" && !w && _.length) return Promise.resolve(_);
            const P = {
              queryKey: e.queryKey,
              pageParam: k,
              meta: e.options.meta,
            };
            C(P);
            const U = g(P);
            return Promise.resolve(U).then((F) => h(_, k, F, L));
          };
        let S;
        if (!p.length) S = y([]);
        else if (c) {
          const _ = typeof u < "u",
            w = _ ? u : t0(e.options, p);
          S = y(p, _, w);
        } else if (d) {
          const _ = typeof u < "u",
            w = _ ? u : NF(e.options, p);
          S = y(p, _, w, !0);
        } else {
          m = [];
          const _ = typeof e.options.getNextPageParam > "u";
          S = (a && p[0] ? a(p[0], 0, p) : !0)
            ? y([], _, b[0])
            : Promise.resolve(h([], b[0], p[0]));
          for (let k = 1; k < p.length; k++)
            S = S.then((L) => {
              if (a && p[k] ? a(p[k], k, p) : !0) {
                const U = _ ? b[k] : t0(e.options, L);
                return y(L, _, U);
              }
              return Promise.resolve(h(L, b[k], p[k]));
            });
        }
        return S.then((_) => ({ pages: _, pageParams: m }));
      };
    },
  };
}
function t0(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function NF(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class IF {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new TF()),
      (this.mutationCache = t.mutationCache || new PF()),
      (this.logger = t.logger || Hm),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Gu.subscribe(() => {
          Gu.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = Qu.subscribe(() => {
          Qu.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, n;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (n = this.unsubscribeOnline) == null || n.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, n) {
    const [r] = zr(t, n);
    return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t, n, r) {
    const o = Hs(t, n, r),
      i = this.getQueryData(o.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(o);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const o = r.data;
        return [n, o];
      });
  }
  setQueryData(t, n, r) {
    const o = this.queryCache.find(t),
      i = o == null ? void 0 : o.state.data,
      s = bF(n, i);
    if (typeof s > "u") return;
    const a = Hs(t),
      l = this.defaultQueryOptions(a);
    return this.queryCache.build(this, l).setData(s, { ...r, manual: !0 });
  }
  setQueriesData(t, n, r) {
    return mt.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: o }) => [o, this.setQueryData(o, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = zr(t, n),
      o = this.queryCache;
    mt.batch(() => {
      o.findAll(r).forEach((i) => {
        o.remove(i);
      });
    });
  }
  resetQueries(t, n, r) {
    const [o, i] = zr(t, n, r),
      s = this.queryCache,
      a = { type: "active", ...o };
    return mt.batch(
      () => (
        s.findAll(o).forEach((l) => {
          l.reset();
        }),
        this.refetchQueries(a, i)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [o, i = {}] = zr(t, n, r);
    typeof i.revert > "u" && (i.revert = !0);
    const s = mt.batch(() =>
      this.queryCache.findAll(o).map((a) => a.cancel(i))
    );
    return Promise.all(s).then(wn).catch(wn);
  }
  invalidateQueries(t, n, r) {
    const [o, i] = zr(t, n, r);
    return mt.batch(() => {
      var s, a;
      if (
        (this.queryCache.findAll(o).forEach((u) => {
          u.invalidate();
        }),
        o.refetchType === "none")
      )
        return Promise.resolve();
      const l = {
        ...o,
        type:
          (s = (a = o.refetchType) != null ? a : o.type) != null ? s : "active",
      };
      return this.refetchQueries(l, i);
    });
  }
  refetchQueries(t, n, r) {
    const [o, i] = zr(t, n, r),
      s = mt.batch(() =>
        this.queryCache
          .findAll(o)
          .filter((l) => !l.isDisabled())
          .map((l) => {
            var u;
            return l.fetch(void 0, {
              ...i,
              cancelRefetch:
                (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: o.refetchPage },
            });
          })
      );
    let a = Promise.all(s).then(wn);
    return (i != null && i.throwOnError) || (a = a.catch(wn)), a;
  }
  fetchQuery(t, n, r) {
    const o = Hs(t, n, r),
      i = this.defaultQueryOptions(o);
    typeof i.retry > "u" && (i.retry = !1);
    const s = this.queryCache.build(this, i);
    return s.isStaleByTime(i.staleTime)
      ? s.fetch(i)
      : Promise.resolve(s.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(wn).catch(wn);
  }
  fetchInfiniteQuery(t, n, r) {
    const o = Hs(t, n, r);
    return (o.behavior = $F()), this.fetchQuery(o);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(wn).catch(wn);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((o) => To(t) === To(o.queryKey));
    r
      ? (r.defaultOptions = n)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => qu(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((o) => To(t) === To(o.mutationKey));
    r
      ? (r.defaultOptions = n)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => qu(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = Wm(n.queryKey, n)),
      typeof n.refetchOnReconnect > "u" &&
        (n.refetchOnReconnect = n.networkMode !== "always"),
      typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class OF extends is {
  constructor(t, n) {
    super(),
      (this.client = t),
      (this.options = n),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(n);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.currentQuery.addObserver(this),
      n0(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return th(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return th(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = new Set()),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options,
      o = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      Ku(r, this.options) ||
        this.client
          .getQueryCache()
          .notify({
            type: "observerOptionsUpdated",
            query: this.currentQuery,
            observer: this,
          }),
      typeof this.options.enabled < "u" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey),
      this.updateQuery();
    const i = this.hasListeners();
    i && r0(this.currentQuery, o, this.options, r) && this.executeFetch(),
      this.updateResult(n),
      i &&
        (this.currentQuery !== o ||
          this.options.enabled !== r.enabled ||
          this.options.staleTime !== r.staleTime) &&
        this.updateStaleTimeout();
    const s = this.computeRefetchInterval();
    i &&
      (this.currentQuery !== o ||
        this.options.enabled !== r.enabled ||
        s !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(s);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t),
      r = this.createResult(n, t);
    return (
      MF(this, r, t) &&
        ((this.currentResult = r),
        (this.currentResultOptions = this.options),
        (this.currentResultState = this.currentQuery.state)),
      r
    );
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const n = {};
    return (
      Object.keys(t).forEach((r) => {
        Object.defineProperty(n, r, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(r), t[r]),
        });
      }),
      n
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...n } = {}) {
    return this.fetch({ ...n, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const n = this.client.defaultQueryOptions(t),
      r = this.client.getQueryCache().build(this.client, n);
    return (
      (r.isFetchingOptimistic = !0),
      r.fetch().then(() => this.createResult(r, n))
    );
  }
  fetch(t) {
    var n;
    return this.executeFetch({
      ...t,
      cancelRefetch: (n = t.cancelRefetch) != null ? n : !0,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, t);
    return (t != null && t.throwOnError) || (n = n.catch(wn)), n;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      La || this.currentResult.isStale || !Jp(this.options.staleTime))
    )
      return;
    const n = IS(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(
        La ||
        this.options.enabled === !1 ||
        !Jp(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Gu.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(t, n) {
    const r = this.currentQuery,
      o = this.options,
      i = this.currentResult,
      s = this.currentResultState,
      a = this.currentResultOptions,
      l = t !== r,
      u = l ? t.state : this.currentQueryInitialState,
      c = l ? this.currentResult : this.previousQueryResult,
      { state: d } = t;
    let {
        dataUpdatedAt: p,
        error: b,
        errorUpdatedAt: m,
        fetchStatus: v,
        status: C,
      } = d,
      g = !1,
      h = !1,
      y;
    if (n._optimisticResults) {
      const k = this.hasListeners(),
        L = !k && n0(t, n),
        P = k && r0(t, r, n, o);
      (L || P) &&
        ((v = md(t.options.networkMode) ? "fetching" : "paused"),
        p || (C = "loading")),
        n._optimisticResults === "isRestoring" && (v = "idle");
    }
    if (
      n.keepPreviousData &&
      !d.dataUpdatedAt &&
      c != null &&
      c.isSuccess &&
      C !== "error"
    )
      (y = c.data), (p = c.dataUpdatedAt), (C = c.status), (g = !0);
    else if (n.select && typeof d.data < "u")
      if (
        i &&
        d.data === (s == null ? void 0 : s.data) &&
        n.select === this.selectFn
      )
        y = this.selectResult;
      else
        try {
          (this.selectFn = n.select),
            (y = n.select(d.data)),
            (y = eh(i == null ? void 0 : i.data, y, n)),
            (this.selectResult = y),
            (this.selectError = null);
        } catch (k) {
          this.selectError = k;
        }
    else y = d.data;
    if (typeof n.placeholderData < "u" && typeof y > "u" && C === "loading") {
      let k;
      if (
        i != null &&
        i.isPlaceholderData &&
        n.placeholderData === (a == null ? void 0 : a.placeholderData)
      )
        k = i.data;
      else if (
        ((k =
          typeof n.placeholderData == "function"
            ? n.placeholderData()
            : n.placeholderData),
        n.select && typeof k < "u")
      )
        try {
          (k = n.select(k)), (this.selectError = null);
        } catch (L) {
          this.selectError = L;
        }
      typeof k < "u" &&
        ((C = "success"),
        (y = eh(i == null ? void 0 : i.data, k, n)),
        (h = !0));
    }
    this.selectError &&
      ((b = this.selectError),
      (y = this.selectResult),
      (m = Date.now()),
      (C = "error"));
    const S = v === "fetching",
      E = C === "loading",
      _ = C === "error";
    return {
      status: C,
      fetchStatus: v,
      isLoading: E,
      isSuccess: C === "success",
      isError: _,
      isInitialLoading: E && S,
      data: y,
      dataUpdatedAt: p,
      error: b,
      errorUpdatedAt: m,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount:
        d.dataUpdateCount > u.dataUpdateCount ||
        d.errorUpdateCount > u.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !E,
      isLoadingError: _ && d.dataUpdatedAt === 0,
      isPaused: v === "paused",
      isPlaceholderData: h,
      isPreviousData: g,
      isRefetchError: _ && d.dataUpdatedAt !== 0,
      isStale: qm(t, n),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const n = this.currentResult,
      r = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      Ku(r, n))
    )
      return;
    this.currentResult = r;
    const o = { cache: !0 },
      i = () => {
        if (!n) return !0;
        const { notifyOnChangeProps: s } = this.options,
          a = typeof s == "function" ? s() : s;
        if (a === "all" || (!a && !this.trackedProps.size)) return !0;
        const l = new Set(a ?? this.trackedProps);
        return (
          this.options.useErrorBoundary && l.add("error"),
          Object.keys(this.currentResult).some((u) => {
            const c = u;
            return this.currentResult[c] !== n[c] && l.has(c);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (o.listeners = !0),
      this.notify({ ...o, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const n = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (n == null || n.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const n = {};
    t.type === "success"
      ? (n.onSuccess = !t.manual)
      : t.type === "error" && !iu(t.error) && (n.onError = !0),
      this.updateResult(n),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    mt.batch(() => {
      if (t.onSuccess) {
        var n, r, o, i;
        (n = (r = this.options).onSuccess) == null ||
          n.call(r, this.currentResult.data),
          (o = (i = this.options).onSettled) == null ||
            o.call(i, this.currentResult.data, null);
      } else if (t.onError) {
        var s, a, l, u;
        (s = (a = this.options).onError) == null ||
          s.call(a, this.currentResult.error),
          (l = (u = this.options).onSettled) == null ||
            l.call(u, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        }),
        t.cache &&
          this.client
            .getQueryCache()
            .notify({
              query: this.currentQuery,
              type: "observerResultsUpdated",
            });
    });
  }
}
function LF(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function n0(e, t) {
  return LF(e, t) || (e.state.dataUpdatedAt > 0 && th(e, t, t.refetchOnMount));
}
function th(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && qm(e, t));
  }
  return !1;
}
function r0(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    qm(e, n)
  );
}
function qm(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function MF(e, t, n) {
  return n.keepPreviousData
    ? !1
    : n.placeholderData !== void 0
    ? t.isPlaceholderData
    : !Ku(e.getCurrentResult(), t);
}
let FF = class extends is {
  constructor(t, n) {
    super(),
      (this.client = t),
      this.setOptions(n),
      this.bindMethods(),
      this.updateResult();
  }
  bindMethods() {
    (this.mutate = this.mutate.bind(this)),
      (this.reset = this.reset.bind(this));
  }
  setOptions(t) {
    var n;
    const r = this.options;
    (this.options = this.client.defaultMutationOptions(t)),
      Ku(r, this.options) ||
        this.client
          .getMutationCache()
          .notify({
            type: "observerOptionsUpdated",
            mutation: this.currentMutation,
            observer: this,
          }),
      (n = this.currentMutation) == null || n.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.currentMutation) == null || t.removeObserver(this);
    }
  }
  onMutationUpdate(t) {
    this.updateResult();
    const n = { listeners: !0 };
    t.type === "success"
      ? (n.onSuccess = !0)
      : t.type === "error" && (n.onError = !0),
      this.notify(n);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    (this.currentMutation = void 0),
      this.updateResult(),
      this.notify({ listeners: !0 });
  }
  mutate(t, n) {
    return (
      (this.mutateOptions = n),
      this.currentMutation && this.currentMutation.removeObserver(this),
      (this.currentMutation = this.client
        .getMutationCache()
        .build(this.client, {
          ...this.options,
          variables: typeof t < "u" ? t : this.options.variables,
        })),
      this.currentMutation.addObserver(this),
      this.currentMutation.execute()
    );
  }
  updateResult() {
    const t = this.currentMutation ? this.currentMutation.state : BS(),
      n = {
        ...t,
        isLoading: t.status === "loading",
        isSuccess: t.status === "success",
        isError: t.status === "error",
        isIdle: t.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      };
    this.currentResult = n;
  }
  notify(t) {
    mt.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (t.onSuccess) {
          var n, r, o, i;
          (n = (r = this.mutateOptions).onSuccess) == null ||
            n.call(
              r,
              this.currentResult.data,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (o = (i = this.mutateOptions).onSettled) == null ||
              o.call(
                i,
                this.currentResult.data,
                null,
                this.currentResult.variables,
                this.currentResult.context
              );
        } else if (t.onError) {
          var s, a, l, u;
          (s = (a = this.mutateOptions).onError) == null ||
            s.call(
              a,
              this.currentResult.error,
              this.currentResult.variables,
              this.currentResult.context
            ),
            (l = (u = this.mutateOptions).onSettled) == null ||
              l.call(
                u,
                void 0,
                this.currentResult.error,
                this.currentResult.variables,
                this.currentResult.context
              );
        }
      }
      t.listeners &&
        this.listeners.forEach(({ listener: c }) => {
          c(this.currentResult);
        });
    });
  }
};
var zS = { exports: {} },
  US = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ki = x;
function DF(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jF = typeof Object.is == "function" ? Object.is : DF,
  BF = Ki.useState,
  zF = Ki.useEffect,
  UF = Ki.useLayoutEffect,
  VF = Ki.useDebugValue;
function WF(e, t) {
  var n = t(),
    r = BF({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    UF(
      function () {
        (o.value = n), (o.getSnapshot = t), Af(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    zF(
      function () {
        return (
          Af(o) && i({ inst: o }),
          e(function () {
            Af(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    VF(n),
    n
  );
}
function Af(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jF(e, n);
  } catch {
    return !0;
  }
}
function HF(e, t) {
  return t();
}
var qF =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? HF
    : WF;
US.useSyncExternalStore =
  Ki.useSyncExternalStore !== void 0 ? Ki.useSyncExternalStore : qF;
zS.exports = US;
var KF = zS.exports;
const VS = KF.useSyncExternalStore,
  o0 = x.createContext(void 0),
  WS = x.createContext(!1);
function HS(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = o0),
        window.ReactQueryClientContext)
      : o0)
  );
}
const vd = ({ context: e } = {}) => {
    const t = x.useContext(HS(e, x.useContext(WS)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  GF = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const o = HS(n, r);
    return x.createElement(
      WS.Provider,
      { value: !n && r },
      x.createElement(o.Provider, { value: e }, t)
    );
  },
  qS = x.createContext(!1),
  QF = () => x.useContext(qS);
qS.Provider;
function XF() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const YF = x.createContext(XF()),
  JF = () => x.useContext(YF);
function KS(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const ZF = (e, t) => {
    (e.suspense || e.useErrorBoundary) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  eD = (e) => {
    x.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  tD = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && KS(n, [e.error, r]),
  nD = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  rD = (e, t) => e.isLoading && e.isFetching && !t,
  oD = (e, t, n) => (e == null ? void 0 : e.suspense) && rD(t, n),
  iD = (e, t, n) =>
    t
      .fetchOptimistic(e)
      .then(({ data: r }) => {
        e.onSuccess == null || e.onSuccess(r),
          e.onSettled == null || e.onSettled(r, null);
      })
      .catch((r) => {
        n.clearReset(),
          e.onError == null || e.onError(r),
          e.onSettled == null || e.onSettled(void 0, r);
      });
function sD(e, t) {
  const n = vd({ context: e.context }),
    r = QF(),
    o = JF(),
    i = n.defaultQueryOptions(e);
  (i._optimisticResults = r ? "isRestoring" : "optimistic"),
    i.onError && (i.onError = mt.batchCalls(i.onError)),
    i.onSuccess && (i.onSuccess = mt.batchCalls(i.onSuccess)),
    i.onSettled && (i.onSettled = mt.batchCalls(i.onSettled)),
    nD(i),
    ZF(i, o),
    eD(o);
  const [s] = x.useState(() => new t(n, i)),
    a = s.getOptimisticResult(i);
  if (
    (VS(
      x.useCallback(
        (l) => {
          const u = r ? () => {} : s.subscribe(mt.batchCalls(l));
          return s.updateResult(), u;
        },
        [s, r]
      ),
      () => s.getCurrentResult(),
      () => s.getCurrentResult()
    ),
    x.useEffect(() => {
      s.setOptions(i, { listeners: !1 });
    }, [i, s]),
    oD(i, a, r))
  )
    throw iD(i, s, o);
  if (
    tD({
      result: a,
      errorResetBoundary: o,
      useErrorBoundary: i.useErrorBoundary,
      query: s.getCurrentQuery(),
    })
  )
    throw a.error;
  return i.notifyOnChangeProps ? a : s.trackResult(a);
}
function Er(e, t, n) {
  const r = Hs(e, t, n);
  return sD(r, OF);
}
function Gi(e, t, n) {
  const r = xF(e, t, n),
    o = vd({ context: r.context }),
    [i] = x.useState(() => new FF(o, r));
  x.useEffect(() => {
    i.setOptions(r);
  }, [i, r]);
  const s = VS(
      x.useCallback((l) => i.subscribe(mt.batchCalls(l)), [i]),
      () => i.getCurrentResult(),
      () => i.getCurrentResult()
    ),
    a = x.useCallback(
      (l, u) => {
        i.mutate(l, u).catch(aD);
      },
      [i]
    );
  if (s.error && KS(i.options.useErrorBoundary, [s.error])) throw s.error;
  return { ...s, mutate: a, mutateAsync: s.mutate };
}
function aD() {}
var nh = {},
  i0 = ud;
(nh.createRoot = i0.createRoot), (nh.hydrateRoot = i0.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ma() {
  return (
    (Ma = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ma.apply(this, arguments)
  );
}
var Gr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Gr || (Gr = {}));
const s0 = "popstate";
function lD(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return rh(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : QS(o);
  }
  return cD(t, n, null, e);
}
function _t(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function GS(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function uD() {
  return Math.random().toString(36).substr(2, 8);
}
function a0(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function rh(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ma(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ss(t) : t,
      { state: n, key: (t && t.key) || r || uD() }
    )
  );
}
function QS(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ss(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function cD(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = Gr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Ma({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = Gr.Pop;
    let C = c(),
      g = C == null ? null : C - u;
    (u = C), l && l({ action: a, location: v.location, delta: g });
  }
  function p(C, g) {
    a = Gr.Push;
    let h = rh(v.location, C, g);
    n && n(h, C), (u = c() + 1);
    let y = a0(h, u),
      S = v.createHref(h);
    try {
      s.pushState(y, "", S);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(S);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function b(C, g) {
    a = Gr.Replace;
    let h = rh(v.location, C, g);
    n && n(h, C), (u = c());
    let y = a0(h, u),
      S = v.createHref(h);
    s.replaceState(y, "", S),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function m(C) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof C == "string" ? C : QS(C);
    return (
      (h = h.replace(/ $/, "%20")),
      _t(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, g)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(C) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(s0, d),
        (l = C),
        () => {
          o.removeEventListener(s0, d), (l = null);
        }
      );
    },
    createHref(C) {
      return t(o, C);
    },
    createURL: m,
    encodeLocation(C) {
      let g = m(C);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: p,
    replace: b,
    go(C) {
      return s.go(C);
    },
  };
  return v;
}
var l0;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(l0 || (l0 = {}));
function dD(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? ss(t) : t,
    o = JS(r.pathname || "/", n);
  if (o == null) return null;
  let i = XS(e);
  fD(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) {
    let l = wD(o);
    s = SD(i[a], l);
  }
  return s;
}
function XS(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (_t(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Io([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (_t(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      XS(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: bD(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of YS(i.path)) o(i, s, l);
    }),
    t
  );
}
function YS(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = YS(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function fD(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : xD(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const pD = /^:[\w-]+$/,
  hD = 3,
  mD = 2,
  vD = 1,
  gD = 10,
  yD = -2,
  u0 = (e) => e === "*";
function bD(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(u0) && (r += yD),
    t && (r += mD),
    n
      .filter((o) => !u0(o))
      .reduce((o, i) => o + (pD.test(i) ? hD : i === "" ? vD : gD), r)
  );
}
function xD(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function SD(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = CD(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    i.push({
      params: r,
      pathname: Io([o, c.pathname]),
      pathnameBase: PD(Io([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = Io([o, c.pathnameBase]));
  }
  return i;
}
function CD(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = RD(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: p, isOptional: b } = c;
      if (p === "*") {
        let v = a[d] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const m = a[d];
      return (
        b && !m ? (u[p] = void 0) : (u[p] = (m || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function RD(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    GS(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function wD(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      GS(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function JS(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ED(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? ss(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : _D(n, t)) : t,
    search: $D(r),
    hash: ND(o),
  };
}
function _D(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Pf(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function kD(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function TD(e, t) {
  let n = kD(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function AD(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = ss(e))
    : ((o = Ma({}, e)),
      _t(
        !o.pathname || !o.pathname.includes("?"),
        Pf("?", "pathname", "search", o)
      ),
      _t(
        !o.pathname || !o.pathname.includes("#"),
        Pf("#", "pathname", "hash", o)
      ),
      _t(!o.search || !o.search.includes("#"), Pf("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      o.pathname = p.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = ED(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Io = (e) => e.join("/").replace(/\/\/+/g, "/"),
  PD = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  $D = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ND = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ID(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ZS = ["post", "put", "patch", "delete"];
new Set(ZS);
const OD = ["get", ...ZS];
new Set(OD);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fa() {
  return (
    (Fa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fa.apply(this, arguments)
  );
}
const Km = x.createContext(null),
  LD = x.createContext(null),
  gd = x.createContext(null),
  yd = x.createContext(null),
  as = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  eC = x.createContext(null);
function bd() {
  return x.useContext(yd) != null;
}
function Gm() {
  return bd() || _t(!1), x.useContext(yd).location;
}
function tC(e) {
  x.useContext(gd).static || x.useLayoutEffect(e);
}
function Qm() {
  let { isDataRoute: e } = x.useContext(as);
  return e ? GD() : MD();
}
function MD() {
  bd() || _t(!1);
  let e = x.useContext(Km),
    { basename: t, future: n, navigator: r } = x.useContext(gd),
    { matches: o } = x.useContext(as),
    { pathname: i } = Gm(),
    s = JSON.stringify(TD(o, n.v7_relativeSplatPath)),
    a = x.useRef(!1);
  return (
    tC(() => {
      a.current = !0;
    }),
    x.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = AD(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Io([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
function FD(e, t) {
  return DD(e, t);
}
function DD(e, t, n, r) {
  bd() || _t(!1);
  let { navigator: o } = x.useContext(gd),
    { matches: i } = x.useContext(as),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Gm(),
    c;
  if (t) {
    var d;
    let C = typeof t == "string" ? ss(t) : t;
    l === "/" || ((d = C.pathname) != null && d.startsWith(l)) || _t(!1),
      (c = C);
  } else c = u;
  let p = c.pathname || "/",
    b = p;
  if (l !== "/") {
    let C = l.replace(/^\//, "").split("/");
    b = "/" + p.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let m = dD(e, { pathname: b }),
    v = VD(
      m &&
        m.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, a, C.params),
            pathname: Io([
              l,
              o.encodeLocation
                ? o.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? l
                : Io([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? x.createElement(
        yd.Provider,
        {
          value: {
            location: Fa(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Gr.Pop,
          },
        },
        v
      )
    : v;
}
function jD() {
  let e = KD(),
    t = ID(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    null
  );
}
const BD = x.createElement(jD, null);
class zD extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          as.Provider,
          { value: this.props.routeContext },
          x.createElement(eC.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function UD(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(Km);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(as.Provider, { value: t }, r)
  );
}
function VD(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id])
    );
    c >= 0 || _t(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: p, errors: b } = n,
          m =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!b || b[d.route.id] === void 0);
        if (d.route.lazy || m) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, p) => {
    let b,
      m = !1,
      v = null,
      C = null;
    n &&
      ((b = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || BD),
      l &&
        (u < 0 && p === 0
          ? (QD("route-fallback", !1), (m = !0), (C = null))
          : u === p &&
            ((m = !0), (C = d.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, p + 1)),
      h = () => {
        let y;
        return (
          b
            ? (y = v)
            : m
            ? (y = C)
            : d.route.Component
            ? (y = x.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          x.createElement(UD, {
            match: d,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? x.createElement(zD, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: b,
          children: h(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var nC = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(nC || {}),
  Xu = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Xu || {});
function WD(e) {
  let t = x.useContext(Km);
  return t || _t(!1), t;
}
function HD(e) {
  let t = x.useContext(LD);
  return t || _t(!1), t;
}
function qD(e) {
  let t = x.useContext(as);
  return t || _t(!1), t;
}
function rC(e) {
  let t = qD(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || _t(!1), n.route.id;
}
function KD() {
  var e;
  let t = x.useContext(eC),
    n = HD(Xu.UseRouteError),
    r = rC(Xu.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function GD() {
  let { router: e } = WD(nC.UseNavigateStable),
    t = rC(Xu.UseNavigateStable),
    n = x.useRef(!1);
  return (
    tC(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Fa({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const c0 = {};
function QD(e, t, n) {
  !t && !c0[e] && (c0[e] = !0);
}
function di(e) {
  _t(!1);
}
function XD(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Gr.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  bd() && _t(!1);
  let l = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: Fa({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = ss(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: p = "",
      state: b = null,
      key: m = "default",
    } = r,
    v = x.useMemo(() => {
      let C = JS(c, l);
      return C == null
        ? null
        : {
            location: { pathname: C, search: d, hash: p, state: b, key: m },
            navigationType: o,
          };
    }, [l, c, d, p, b, m, o]);
  return v == null
    ? null
    : x.createElement(
        gd.Provider,
        { value: u },
        x.createElement(yd.Provider, { children: n, value: v })
      );
}
function YD(e) {
  let { children: t, location: n } = e;
  return FD(oh(t), n);
}
new Promise(() => {});
function oh(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, oh(r.props.children, i));
        return;
      }
      r.type !== di && _t(!1), !r.props.index || !r.props.children || _t(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = oh(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ih(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]);
          }, [])
    )
  );
}
function JD(e, t) {
  let n = ih(e);
  return (
    t &&
      t.forEach((r, o) => {
        n.has(o) ||
          t.getAll(o).forEach((i) => {
            n.append(o, i);
          });
      }),
    n
  );
}
const ZD = "6";
try {
  window.__reactRouterVersion = ZD;
} catch {}
const ej = "startTransition",
  d0 = fu[ej];
function tj(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = x.useRef();
  i.current == null && (i.current = lD({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      (d) => {
        u && d0 ? d0(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    x.useLayoutEffect(() => s.listen(c), [s, c]),
    x.createElement(XD, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var f0;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(f0 || (f0 = {}));
var p0;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(p0 || (p0 = {}));
function oC(e) {
  let t = x.useRef(ih(e)),
    n = x.useRef(!1),
    r = Gm(),
    o = x.useMemo(() => JD(r.search, n.current ? null : t.current), [r.search]),
    i = Qm(),
    s = x.useCallback(
      (a, l) => {
        const u = ih(typeof a == "function" ? a(o) : a);
        (n.current = !0), i("?" + u, l);
      },
      [i, o]
    );
  return [o, s];
}
var iC = {};
function nj(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var rj = nj,
  Ie = rj;
function oj(e) {
  return !!e && typeof e.then == "function";
}
var tt = oj;
function ij(e, t) {
  if (e != null) return e;
  throw Ie(t ?? "Got unexpected null or undefined");
}
var st = ij;
function Ne(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
class xd {
  getValue() {
    throw Ie("BaseLoadable");
  }
  toPromise() {
    throw Ie("BaseLoadable");
  }
  valueMaybe() {
    throw Ie("BaseLoadable");
  }
  valueOrThrow() {
    throw Ie(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw Ie("BaseLoadable");
  }
  promiseOrThrow() {
    throw Ie(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw Ie("BaseLoadable");
  }
  errorOrThrow() {
    throw Ie(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw Ie("BaseLoadable");
  }
}
class sj extends xd {
  constructor(t) {
    super(),
      Ne(this, "state", "hasValue"),
      Ne(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return tt(n) ? Uo(n) : Qi(n) ? n : Xa(n);
    } catch (n) {
      return tt(n) ? Uo(n.next(() => this.map(t))) : Sd(n);
    }
  }
}
class aj extends xd {
  constructor(t) {
    super(),
      Ne(this, "state", "hasError"),
      Ne(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class sC extends xd {
  constructor(t) {
    super(),
      Ne(this, "state", "loading"),
      Ne(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(t) {
    return Uo(
      this.contents
        .then((n) => {
          const r = t(n);
          if (Qi(r)) {
            const o = r;
            switch (o.state) {
              case "hasValue":
                return o.contents;
              case "hasError":
                throw o.contents;
              case "loading":
                return o.contents;
            }
          }
          return r;
        })
        .catch((n) => {
          if (tt(n)) return n.then(() => this.map(t).contents);
          throw n;
        })
    );
  }
}
function Xa(e) {
  return Object.freeze(new sj(e));
}
function Sd(e) {
  return Object.freeze(new aj(e));
}
function Uo(e) {
  return Object.freeze(new sC(e));
}
function aC() {
  return Object.freeze(new sC(new Promise(() => {})));
}
function lj(e) {
  return e.every((t) => t.state === "hasValue")
    ? Xa(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
    ? Sd(
        st(
          e.find((t) => t.state === "hasError"),
          "Invalid loadable passed to loadableAll"
        ).contents
      )
    : Uo(Promise.all(e.map((t) => t.contents)));
}
function lC(e) {
  const n = (
      Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((o) => e[o])
    ).map((o) => (Qi(o) ? o : tt(o) ? Uo(o) : Xa(o))),
    r = lj(n);
  return Array.isArray(e)
    ? r
    : r.map((o) =>
        Object.getOwnPropertyNames(e).reduce(
          (i, s, a) => ({ ...i, [s]: o[a] }),
          {}
        )
      );
}
function Qi(e) {
  return e instanceof xd;
}
const uj = {
  of: (e) => (tt(e) ? Uo(e) : Qi(e) ? e : Xa(e)),
  error: (e) => Sd(e),
  loading: () => aC(),
  all: lC,
  isLoadable: Qi,
};
var Ko = {
    loadableWithValue: Xa,
    loadableWithError: Sd,
    loadableWithPromise: Uo,
    loadableLoading: aC,
    loadableAll: lC,
    isLoadable: Qi,
    RecoilLoadable: uj,
  },
  cj = Ko.loadableWithValue,
  dj = Ko.loadableWithError,
  fj = Ko.loadableWithPromise,
  pj = Ko.loadableLoading,
  hj = Ko.loadableAll,
  mj = Ko.isLoadable,
  vj = Ko.RecoilLoadable,
  Ya = Object.freeze({
    __proto__: null,
    loadableWithValue: cj,
    loadableWithError: dj,
    loadableWithPromise: fj,
    loadableLoading: pj,
    loadableAll: hj,
    isLoadable: mj,
    RecoilLoadable: vj,
  });
const sh = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function gj(e, t) {
  var n, r;
  const o =
    (n = iC[e]) === null ||
    n === void 0 ||
    (r = n.toLowerCase()) === null ||
    r === void 0
      ? void 0
      : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o))
    throw Ie(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true");
}
function yj(e, t) {
  var n;
  const r = (n = iC[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function bj() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (gj("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        sh.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      yj("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          sh.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
bj();
var ls = sh;
function Cd(e) {
  return ls.RECOIL_GKS_ENABLED.has(e);
}
Cd.setPass = (e) => {
  ls.RECOIL_GKS_ENABLED.add(e);
};
Cd.setFail = (e) => {
  ls.RECOIL_GKS_ENABLED.delete(e);
};
Cd.clear = () => {
  ls.RECOIL_GKS_ENABLED.clear();
};
var Ye = Cd;
function xj(e, t, { error: n } = {}) {
  return null;
}
var Sj = xj,
  Xm = Sj,
  $f,
  Nf,
  If;
const Cj =
    ($f = he.createMutableSource) !== null && $f !== void 0
      ? $f
      : he.unstable_createMutableSource,
  uC =
    (Nf = he.useMutableSource) !== null && Nf !== void 0
      ? Nf
      : he.unstable_useMutableSource,
  cC =
    (If = he.useSyncExternalStore) !== null && If !== void 0
      ? If
      : he.unstable_useSyncExternalStore;
function Rj() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } =
    he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0
      ? e
      : n.currentDispatcher
    ).useSyncExternalStore != null
  );
}
function wj() {
  return Ye("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : Ye("recoil_sync_external_store") && cC != null
    ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
    : Ye("recoil_mutable_source") &&
      uC != null &&
      typeof window < "u" &&
      !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
    ? Ye("recoil_suppress_rerender_in_callback")
      ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
      : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
    : Ye("recoil_suppress_rerender_in_callback")
    ? { mode: "LEGACY", early: !0, concurrent: !1 }
    : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function Ej() {
  return !1;
}
var Ja = {
  createMutableSource: Cj,
  useMutableSource: uC,
  useSyncExternalStore: cC,
  currentRendererSupportsUseSyncExternalStore: Rj,
  reactMode: wj,
  isFastRefreshEnabled: Ej,
};
class Ym {
  constructor(t) {
    Ne(this, "key", void 0), (this.key = t);
  }
  toJSON() {
    return { key: this.key };
  }
}
class dC extends Ym {}
class fC extends Ym {}
function _j(e) {
  return e instanceof dC || e instanceof fC;
}
var Rd = {
    AbstractRecoilValue: Ym,
    RecoilState: dC,
    RecoilValueReadOnly: fC,
    isRecoilValue: _j,
  },
  kj = Rd.AbstractRecoilValue,
  Tj = Rd.RecoilState,
  Aj = Rd.RecoilValueReadOnly,
  Pj = Rd.isRecoilValue,
  Xi = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: kj,
    RecoilState: Tj,
    RecoilValueReadOnly: Aj,
    isRecoilValue: Pj,
  });
function $j(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var wd = $j;
class pC {}
const Nj = new pC(),
  Vo = new Map(),
  Jm = new Map();
function Ij(e) {
  return wd(e, (t) => st(Jm.get(t)));
}
function Oj(e) {
  if (Vo.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function Lj(e) {
  ls.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && Oj(e.key), Vo.set(e.key, e);
  const t =
    e.set == null
      ? new Xi.RecoilValueReadOnly(e.key)
      : new Xi.RecoilState(e.key);
  return Jm.set(e.key, t), t;
}
class hC extends Error {}
function Mj(e) {
  const t = Vo.get(e);
  if (t == null) throw new hC(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function Fj(e) {
  return Vo.get(e);
}
const Yu = new Map();
function Dj(e) {
  var t;
  if (!Ye("recoil_memory_managament_2020")) return;
  const n = Vo.get(e);
  if (
    n != null &&
    (t = n.shouldDeleteConfigOnRelease) !== null &&
    t !== void 0 &&
    t.call(n)
  ) {
    var r;
    Vo.delete(e), (r = mC(e)) === null || r === void 0 || r(), Yu.delete(e);
  }
}
function jj(e, t) {
  Ye("recoil_memory_managament_2020") &&
    (t === void 0 ? Yu.delete(e) : Yu.set(e, t));
}
function mC(e) {
  return Yu.get(e);
}
var fn = {
  nodes: Vo,
  recoilValues: Jm,
  registerNode: Lj,
  getNode: Mj,
  getNodeMaybe: Fj,
  deleteNodeConfigIfPossible: Dj,
  setConfigDeletionHandler: jj,
  getConfigDeletionHandler: mC,
  recoilValuesForKeys: Ij,
  NodeMissingError: hC,
  DefaultValue: pC,
  DEFAULT_VALUE: Nj,
};
function Bj(e, t) {
  t();
}
var zj = { enqueueExecution: Bj };
function Uj(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var Vj = Uj(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (I) {
            return typeof I;
          }
        : function (I) {
            return I &&
              typeof Symbol == "function" &&
              I.constructor === Symbol &&
              I !== Symbol.prototype
              ? "symbol"
              : typeof I;
          },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    s = o / 2,
    a = o / 4,
    l = {},
    u = function ($) {
      return function () {
        return $;
      };
    },
    c = (n.hash = function (I) {
      var $ = typeof I > "u" ? "undefined" : t(I);
      if ($ === "number") return I;
      $ !== "string" && (I += "");
      for (var J = 0, ce = 0, de = I.length; ce < de; ++ce) {
        var pe = I.charCodeAt(ce);
        J = ((J << 5) - J + pe) | 0;
      }
      return J;
    }),
    d = function ($) {
      return (
        ($ -= ($ >> 1) & 1431655765),
        ($ = ($ & 858993459) + (($ >> 2) & 858993459)),
        ($ = ($ + ($ >> 4)) & 252645135),
        ($ += $ >> 8),
        ($ += $ >> 16),
        $ & 127
      );
    },
    p = function ($, J) {
      return (J >>> $) & i;
    },
    b = function ($) {
      return 1 << $;
    },
    m = function ($, J) {
      return d($ & (J - 1));
    },
    v = function ($, J, ce, de) {
      var pe = de;
      if (!$) {
        var we = de.length;
        pe = new Array(we);
        for (var Ce = 0; Ce < we; ++Ce) pe[Ce] = de[Ce];
      }
      return (pe[J] = ce), pe;
    },
    C = function ($, J, ce) {
      var de = ce.length - 1,
        pe = 0,
        we = 0,
        Ce = ce;
      if ($) pe = we = J;
      else for (Ce = new Array(de); pe < J; ) Ce[we++] = ce[pe++];
      for (++pe; pe <= de; ) Ce[we++] = ce[pe++];
      return $ && (Ce.length = de), Ce;
    },
    g = function ($, J, ce, de) {
      var pe = de.length;
      if ($) {
        for (var we = pe; we >= J; ) de[we--] = de[we];
        return (de[J] = ce), de;
      }
      for (var Ce = 0, Re = 0, Oe = new Array(pe + 1); Ce < J; )
        Oe[Re++] = de[Ce++];
      for (Oe[J] = ce; Ce < pe; ) Oe[++Re] = de[Ce++];
      return Oe;
    },
    h = 1,
    y = 2,
    S = 3,
    E = 4,
    _ = { __hamt_isEmpty: !0 },
    w = function ($) {
      return $ === _ || ($ && $.__hamt_isEmpty);
    },
    k = function ($, J, ce, de) {
      return { type: h, edit: $, hash: J, key: ce, value: de, _modify: N };
    },
    L = function ($, J, ce) {
      return { type: y, edit: $, hash: J, children: ce, _modify: O };
    },
    P = function ($, J, ce) {
      return { type: S, edit: $, mask: J, children: ce, _modify: D };
    },
    U = function ($, J, ce) {
      return { type: E, edit: $, size: J, children: ce, _modify: X };
    },
    B = function ($) {
      return $ === _ || $.type === h || $.type === y;
    },
    F = function ($, J, ce, de, pe) {
      for (var we = [], Ce = de, Re = 0, Oe = 0; Ce; ++Oe)
        Ce & 1 && (we[Oe] = pe[Re++]), (Ce >>>= 1);
      return (we[J] = ce), U($, Re + 1, we);
    },
    z = function ($, J, ce, de) {
      for (
        var pe = new Array(J - 1), we = 0, Ce = 0, Re = 0, Oe = de.length;
        Re < Oe;
        ++Re
      )
        if (Re !== ce) {
          var rt = de[Re];
          rt && !w(rt) && ((pe[we++] = rt), (Ce |= 1 << Re));
        }
      return P($, Ce, pe);
    },
    V = function I($, J, ce, de, pe, we) {
      if (ce === pe) return L($, ce, [we, de]);
      var Ce = p(J, ce),
        Re = p(J, pe);
      return P(
        $,
        b(Ce) | b(Re),
        Ce === Re
          ? [I($, J + r, ce, de, pe, we)]
          : Ce < Re
          ? [de, we]
          : [we, de]
      );
    },
    K = function ($, J, ce, de, pe, we, Ce, Re) {
      for (var Oe = pe.length, rt = 0; rt < Oe; ++rt) {
        var Zt = pe[rt];
        if (ce(Ce, Zt.key)) {
          var Tt = Zt.value,
            Rn = we(Tt);
          return Rn === Tt
            ? pe
            : Rn === l
            ? (--Re.value, C($, rt, pe))
            : v($, rt, k(J, de, Ce, Rn), pe);
        }
      }
      var Un = we();
      return Un === l ? pe : (++Re.value, v($, Oe, k(J, de, Ce, Un), pe));
    },
    G = function ($, J) {
      return $ === J.edit;
    },
    N = function ($, J, ce, de, pe, we, Ce) {
      if (J(we, this.key)) {
        var Re = de(this.value);
        return Re === this.value
          ? this
          : Re === l
          ? (--Ce.value, _)
          : G($, this)
          ? ((this.value = Re), this)
          : k($, pe, we, Re);
      }
      var Oe = de();
      return Oe === l
        ? this
        : (++Ce.value, V($, ce, this.hash, this, pe, k($, pe, we, Oe)));
    },
    O = function ($, J, ce, de, pe, we, Ce) {
      if (pe === this.hash) {
        var Re = G($, this),
          Oe = K(Re, $, J, this.hash, this.children, de, we, Ce);
        return Oe === this.children
          ? this
          : Oe.length > 1
          ? L($, this.hash, Oe)
          : Oe[0];
      }
      var rt = de();
      return rt === l
        ? this
        : (++Ce.value, V($, ce, this.hash, this, pe, k($, pe, we, rt)));
    },
    D = function ($, J, ce, de, pe, we, Ce) {
      var Re = this.mask,
        Oe = this.children,
        rt = p(ce, pe),
        Zt = b(rt),
        Tt = m(Re, Zt),
        Rn = Re & Zt,
        Un = Rn ? Oe[Tt] : _,
        Xo = Un._modify($, J, ce + r, de, pe, we, Ce);
      if (Un === Xo) return this;
      var al = G($, this),
        ps = Re,
        hs = void 0;
      if (Rn && w(Xo)) {
        if (((ps &= ~Zt), !ps)) return _;
        if (Oe.length <= 2 && B(Oe[Tt ^ 1])) return Oe[Tt ^ 1];
        hs = C(al, Tt, Oe);
      } else if (!Rn && !w(Xo)) {
        if (Oe.length >= s) return F($, rt, Xo, Re, Oe);
        (ps |= Zt), (hs = g(al, Tt, Xo, Oe));
      } else hs = v(al, Tt, Xo, Oe);
      return al ? ((this.mask = ps), (this.children = hs), this) : P($, ps, hs);
    },
    X = function ($, J, ce, de, pe, we, Ce) {
      var Re = this.size,
        Oe = this.children,
        rt = p(ce, pe),
        Zt = Oe[rt],
        Tt = (Zt || _)._modify($, J, ce + r, de, pe, we, Ce);
      if (Zt === Tt) return this;
      var Rn = G($, this),
        Un = void 0;
      if (w(Zt) && !w(Tt)) ++Re, (Un = v(Rn, rt, Tt, Oe));
      else if (!w(Zt) && w(Tt)) {
        if ((--Re, Re <= a)) return z($, Re, rt, Oe);
        Un = v(Rn, rt, _, Oe);
      } else Un = v(Rn, rt, Tt, Oe);
      return Rn ? ((this.size = Re), (this.children = Un), this) : U($, Re, Un);
    };
  _._modify = function (I, $, J, ce, de, pe, we) {
    var Ce = ce();
    return Ce === l ? _ : (++we.value, k(I, de, pe, Ce));
  };
  function A(I, $, J, ce, de) {
    (this._editable = I),
      (this._edit = $),
      (this._config = J),
      (this._root = ce),
      (this._size = de);
  }
  A.prototype.setTree = function (I, $) {
    return this._editable
      ? ((this._root = I), (this._size = $), this)
      : I === this._root
      ? this
      : new A(this._editable, this._edit, this._config, I, $);
  };
  var H = (n.tryGetHash = function (I, $, J, ce) {
    for (var de = ce._root, pe = 0, we = ce._config.keyEq; ; )
      switch (de.type) {
        case h:
          return we(J, de.key) ? de.value : I;
        case y: {
          if ($ === de.hash)
            for (var Ce = de.children, Re = 0, Oe = Ce.length; Re < Oe; ++Re) {
              var rt = Ce[Re];
              if (we(J, rt.key)) return rt.value;
            }
          return I;
        }
        case S: {
          var Zt = p(pe, $),
            Tt = b(Zt);
          if (de.mask & Tt) {
            (de = de.children[m(de.mask, Tt)]), (pe += r);
            break;
          }
          return I;
        }
        case E: {
          if (((de = de.children[p(pe, $)]), de)) {
            pe += r;
            break;
          }
          return I;
        }
        default:
          return I;
      }
  });
  A.prototype.tryGetHash = function (I, $, J) {
    return H(I, $, J, this);
  };
  var W = (n.tryGet = function (I, $, J) {
    return H(I, J._config.hash($), $, J);
  });
  A.prototype.tryGet = function (I, $) {
    return W(I, $, this);
  };
  var se = (n.getHash = function (I, $, J) {
    return H(void 0, I, $, J);
  });
  (A.prototype.getHash = function (I, $) {
    return se(I, $, this);
  }),
    (n.get = function (I, $) {
      return H(void 0, $._config.hash(I), I, $);
    }),
    (A.prototype.get = function (I, $) {
      return W($, I, this);
    });
  var Y = (n.has = function (I, $, J) {
    return H(l, I, $, J) !== l;
  });
  A.prototype.hasHash = function (I, $) {
    return Y(I, $, this);
  };
  var ve = (n.has = function (I, $) {
    return Y($._config.hash(I), I, $);
  });
  A.prototype.has = function (I) {
    return ve(I, this);
  };
  var ge = function ($, J) {
    return $ === J;
  };
  (n.make = function (I) {
    return new A(
      0,
      0,
      { keyEq: (I && I.keyEq) || ge, hash: (I && I.hash) || c },
      _,
      0
    );
  }),
    (n.empty = n.make());
  var oe = (n.isEmpty = function (I) {
    return I && !!w(I._root);
  });
  A.prototype.isEmpty = function () {
    return oe(this);
  };
  var Ae = (n.modifyHash = function (I, $, J, ce) {
    var de = { value: ce._size },
      pe = ce._root._modify(
        ce._editable ? ce._edit : NaN,
        ce._config.keyEq,
        0,
        I,
        $,
        J,
        de
      );
    return ce.setTree(pe, de.value);
  });
  A.prototype.modifyHash = function (I, $, J) {
    return Ae(J, I, $, this);
  };
  var ye = (n.modify = function (I, $, J) {
    return Ae(I, J._config.hash($), $, J);
  });
  A.prototype.modify = function (I, $) {
    return ye($, I, this);
  };
  var be = (n.setHash = function (I, $, J, ce) {
    return Ae(u(J), I, $, ce);
  });
  A.prototype.setHash = function (I, $, J) {
    return be(I, $, J, this);
  };
  var me = (n.set = function (I, $, J) {
    return be(J._config.hash(I), I, $, J);
  });
  A.prototype.set = function (I, $) {
    return me(I, $, this);
  };
  var $e = u(l),
    je = (n.removeHash = function (I, $, J) {
      return Ae($e, I, $, J);
    });
  A.prototype.removeHash = A.prototype.deleteHash = function (I, $) {
    return je(I, $, this);
  };
  var ct = (n.remove = function (I, $) {
    return je($._config.hash(I), I, $);
  });
  A.prototype.remove = A.prototype.delete = function (I) {
    return ct(I, this);
  };
  var Qe = (n.beginMutation = function (I) {
    return new A(I._editable + 1, I._edit + 1, I._config, I._root, I._size);
  });
  A.prototype.beginMutation = function () {
    return Qe(this);
  };
  var T = (n.endMutation = function (I) {
    return (I._editable = I._editable && I._editable - 1), I;
  });
  A.prototype.endMutation = function () {
    return T(this);
  };
  var M = (n.mutate = function (I, $) {
    var J = Qe($);
    return I(J), T(J);
  });
  A.prototype.mutate = function (I) {
    return M(I, this);
  };
  var j = function ($) {
      return $ && Z($[0], $[1], $[2], $[3], $[4]);
    },
    Z = function ($, J, ce, de, pe) {
      for (; ce < $; ) {
        var we = J[ce++];
        if (we && !w(we)) return re(we, de, [$, J, ce, de, pe]);
      }
      return j(pe);
    },
    re = function ($, J, ce) {
      switch ($.type) {
        case h:
          return { value: J($), rest: ce };
        case y:
        case E:
        case S:
          var de = $.children;
          return Z(de.length, de, 0, J, ce);
        default:
          return j(ce);
      }
    },
    Q = { done: !0 };
  function ie(I) {
    this.v = I;
  }
  (ie.prototype.next = function () {
    if (!this.v) return Q;
    var I = this.v;
    return (this.v = j(I.rest)), I;
  }),
    (ie.prototype[Symbol.iterator] = function () {
      return this;
    });
  var Pe = function ($, J) {
      return new ie(re($._root, J));
    },
    We = function ($) {
      return [$.key, $.value];
    },
    Ze = (n.entries = function (I) {
      return Pe(I, We);
    });
  A.prototype.entries = A.prototype[Symbol.iterator] = function () {
    return Ze(this);
  };
  var Me = function ($) {
      return $.key;
    },
    Se = (n.keys = function (I) {
      return Pe(I, Me);
    });
  A.prototype.keys = function () {
    return Se(this);
  };
  var Ht = function ($) {
      return $.value;
    },
    zn =
      (n.values =
      A.prototype.values =
        function (I) {
          return Pe(I, Ht);
        });
  A.prototype.values = function () {
    return zn(this);
  };
  var er = (n.fold = function (I, $, J) {
    var ce = J._root;
    if (ce.type === h) return I($, ce.value, ce.key);
    for (var de = [ce.children], pe = void 0; (pe = de.pop()); )
      for (var we = 0, Ce = pe.length; we < Ce; ) {
        var Re = pe[we++];
        Re &&
          Re.type &&
          (Re.type === h ? ($ = I($, Re.value, Re.key)) : de.push(Re.children));
      }
    return $;
  });
  A.prototype.fold = function (I, $) {
    return er(I, $, this);
  };
  var xe = (n.forEach = function (I, $) {
    return er(
      function (J, ce, de) {
        return I(ce, de, $);
      },
      null,
      $
    );
  });
  A.prototype.forEach = function (I) {
    return xe(I, this);
  };
  var He = (n.count = function (I) {
    return I._size;
  });
  (A.prototype.count = function () {
    return He(this);
  }),
    Object.defineProperty(A.prototype, "size", { get: A.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n);
});
class Wj {
  constructor(t) {
    Ne(this, "_map", void 0),
      (this._map = new Map(t == null ? void 0 : t.entries()));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return this._map.set(t, n), this;
  }
  delete(t) {
    return this._map.delete(t), this;
  }
  clone() {
    return ev(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Zm {
  constructor(t) {
    if ((Ne(this, "_hamt", Vj.empty.beginMutation()), t instanceof Zm)) {
      const n = t._hamt.endMutation();
      (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
    } else if (t) for (const [n, r] of t.entries()) this._hamt.set(n, r);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return this._hamt.set(t, n), this;
  }
  delete(t) {
    return this._hamt.delete(t), this;
  }
  clone() {
    return ev(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function ev(e) {
  return Ye("recoil_hamt_2020") ? new Zm(e) : new Wj(e);
}
var Hj = { persistentMap: ev },
  qj = Hj.persistentMap,
  Kj = Object.freeze({ __proto__: null, persistentMap: qj });
function Gj(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const o of t) if (o.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var la = Gj;
function Qj(e, t) {
  const n = new Map();
  return (
    e.forEach((r, o) => {
      n.set(o, t(r, o));
    }),
    n
  );
}
var Ju = Qj;
function Xj() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function Yj(e) {
  return {
    nodeDeps: Ju(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: Ju(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function Of(e, t, n, r) {
  const { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
    s = o.get(e);
  if (s && r && s !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const a = s == null ? t : la(t, s);
  for (const l of a) i.has(l) || i.set(l, new Set()), st(i.get(l)).add(e);
  if (s) {
    const l = la(s, t);
    for (const u of l) {
      if (!i.has(u)) return;
      const c = st(i.get(u));
      c.delete(e), c.size === 0 && i.delete(u);
    }
  }
}
function Jj(e, t, n, r) {
  var o, i, s, a;
  const l = n.getState();
  r === l.currentTree.version ||
    r === ((o = l.nextTree) === null || o === void 0 ? void 0 : o.version) ||
    (i = l.previousTree) === null ||
    i === void 0 ||
    i.version;
  const u = n.getGraph(r);
  if (
    (Of(e, t, u),
    r === ((s = l.previousTree) === null || s === void 0 ? void 0 : s.version))
  ) {
    const d = n.getGraph(l.currentTree.version);
    Of(e, t, d, u);
  }
  if (
    r ===
      ((a = l.previousTree) === null || a === void 0 ? void 0 : a.version) ||
    r === l.currentTree.version
  ) {
    var c;
    const d = (c = l.nextTree) === null || c === void 0 ? void 0 : c.version;
    if (d !== void 0) {
      const p = n.getGraph(d);
      Of(e, t, p, u);
    }
  }
}
var Za = { cloneGraph: Yj, graph: Xj, saveDepsToStore: Jj };
let Zj = 0;
const e4 = () => Zj++;
let t4 = 0;
const n4 = () => t4++;
let r4 = 0;
const o4 = () => r4++;
var Ed = {
  getNextTreeStateVersion: e4,
  getNextStoreID: n4,
  getNextComponentID: o4,
};
const { persistentMap: h0 } = Kj,
  { graph: i4 } = Za,
  { getNextTreeStateVersion: vC } = Ed;
function gC() {
  const e = vC();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: h0(),
    nonvalidatedAtoms: h0(),
  };
}
function s4() {
  const e = gC();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, i4()),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(),
  };
}
var yC = {
  makeEmptyTreeState: gC,
  makeEmptyStoreState: s4,
  getNextTreeStateVersion: vC,
};
class bC {}
function a4() {
  return new bC();
}
var _d = { RetentionZone: bC, retentionZone: a4 };
function l4(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
function u4(e, t) {
  const n = new Set(e);
  return n.delete(t), n;
}
function c4(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r;
}
function d4(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r;
}
function f4(e, t) {
  const n = new Map(e);
  return n.delete(t), n;
}
function p4(e, t) {
  const n = new Map(e);
  return t.forEach((r) => n.delete(r)), n;
}
var xC = {
  setByAddingToSet: l4,
  setByDeletingFromSet: u4,
  mapBySettingInMap: c4,
  mapByUpdatingInMap: d4,
  mapByDeletingFromMap: f4,
  mapByDeletingMultipleFromMap: p4,
};
function* h4(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var tv = h4;
function m4(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: (r) => Object.keys(r),
  });
}
var SC = m4;
const { getNode: el, getNodeMaybe: v4, recoilValuesForKeys: m0 } = fn,
  { RetentionZone: v0 } = _d,
  { setByAddingToSet: g4 } = xC,
  y4 = Object.freeze(new Set());
class b4 extends Error {}
function x4(e, t, n) {
  if (!Ye("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function o(i) {
    let s = r.get(i);
    s || r.set(i, (s = new Set())), s.add(t);
  }
  if (n instanceof v0) o(n);
  else if (Array.isArray(n)) for (const i of n) o(i);
  return () => {
    if (!Ye("recoil_memory_managament_2020")) return;
    const { retention: i } = e.getState();
    function s(a) {
      const l = i.nodesRetainedByZone.get(a);
      l == null || l.delete(t),
        l && l.size === 0 && i.nodesRetainedByZone.delete(a);
    }
    if (n instanceof v0) s(n);
    else if (Array.isArray(n)) for (const a of n) s(a);
  };
}
function nv(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = el(n),
    s = x4(e, n, i.retainedBy),
    a = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    a(), s();
  });
}
function S4(e, t, n) {
  nv(e, e.getState().currentTree, t, n);
}
function C4(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(),
    r.nodeCleanupFunctions.delete(t);
}
function R4(e, t, n) {
  return nv(e, t, n, "get"), el(n).get(e, t);
}
function CC(e, t, n) {
  return el(n).peek(e, t);
}
function w4(e, t, n) {
  var r;
  const o = v4(t);
  return (
    o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: g4(e.dirtyAtoms, t),
    }
  );
}
function E4(e, t, n, r) {
  const o = el(n);
  if (o.set == null) throw new b4(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return nv(e, t, n, "set"), i(e, t, r);
}
function _4(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = el(n).nodeType;
  return SC(
    { type: i },
    {
      loadable: () => CC(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (i === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var s;
        return m0((s = o.nodeDeps.get(n)) !== null && s !== void 0 ? s : []);
      },
      subscribers: () => {
        var s, a;
        return {
          nodes: m0(tv(RC(e, t, new Set([n])), (l) => l !== n)),
          components: wd(
            (s =
              (a = r.nodeToComponentSubscriptions.get(n)) === null ||
              a === void 0
                ? void 0
                : a.values()) !== null && s !== void 0
              ? s
              : [],
            ([l]) => ({ name: l })
          ),
        };
      },
    }
  );
}
function RC(e, t, n) {
  const r = new Set(),
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let a = o.pop(); a; a = o.pop()) {
    var s;
    r.add(a);
    const l =
      (s = i.nodeToNodeSubscriptions.get(a)) !== null && s !== void 0 ? s : y4;
    for (const u of l) r.has(u) || o.push(u);
  }
  return r;
}
var ho = {
  getNodeLoadable: R4,
  peekNodeLoadable: CC,
  setNodeValue: E4,
  initializeNode: S4,
  cleanUpNode: C4,
  setUnvalidatedAtomValue_DEPRECATED: w4,
  peekNodeInfo: _4,
  getDownstreamNodes: RC,
};
let wC = null;
function k4(e) {
  wC = e;
}
function T4() {
  var e;
  (e = wC) === null || e === void 0 || e();
}
var EC = { setInvalidateMemoizedSnapshot: k4, invalidateMemoizedSnapshot: T4 };
const { getDownstreamNodes: A4, getNodeLoadable: _C, setNodeValue: P4 } = ho,
  { getNextComponentID: $4 } = Ed,
  { getNode: N4, getNodeMaybe: kC } = fn,
  { DefaultValue: rv } = fn,
  { reactMode: I4 } = Ja,
  {
    AbstractRecoilValue: O4,
    RecoilState: L4,
    RecoilValueReadOnly: M4,
    isRecoilValue: F4,
  } = Xi,
  { invalidateMemoizedSnapshot: D4 } = EC;
function j4(e, { key: t }, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version ||
    n.version ===
      ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const s = _C(e, n, t);
  return s.state === "loading" && s.contents.catch(() => {}), s;
}
function B4(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, o) => {
      r.state === "hasValue" && r.contents instanceof rv
        ? n.delete(o)
        : n.set(o, r);
    }),
    n
  );
}
function z4(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const o = _C(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw Ie(i);
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents);
  } else return r;
}
function U4(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: o, valueOrUpdater: i } = n,
      s = z4(e, t, o, i),
      a = P4(e, t, o.key, s);
    for (const [l, u] of a.entries()) ah(t, l, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: o },
      loadable: i,
    } = n;
    ah(t, o, i);
  } else if (n.type === "markModified") {
    const {
      recoilValue: { key: o },
    } = n;
    t.dirtyAtoms.add(o);
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
        recoilValue: { key: o },
        unvalidatedValue: i,
      } = n,
      s = kC(o);
    s == null || (r = s.invalidate) === null || r === void 0 || r.call(s, t),
      t.atomValues.delete(o),
      t.nonvalidatedAtoms.set(o, i),
      t.dirtyAtoms.add(o);
  } else Xm(`Unknown action ${n.type}`);
}
function ah(e, t, n) {
  n.state === "hasValue" && n.contents instanceof rv
    ? e.atomValues.delete(t)
    : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function TC(e, t) {
  e.replaceState((n) => {
    const r = AC(n);
    for (const o of t) U4(e, r, o);
    return PC(e, r), D4(), r;
  });
}
function kd(e, t) {
  if (ua.length) {
    const n = ua[ua.length - 1];
    let r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else TC(e, [t]);
}
const ua = [];
function V4() {
  const e = new Map();
  return (
    ua.push(e),
    () => {
      for (const [t, n] of e) TC(t, n);
      ua.pop();
    }
  );
}
function AC(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function PC(e, t) {
  const n = A4(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = kC(i)) === null ||
      r === void 0 ||
      (o = r.invalidate) === null ||
      o === void 0 ||
      o.call(r, t);
  }
}
function $C(e, t, n) {
  kd(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function W4(e, t, n) {
  if (n instanceof rv) return $C(e, t, n);
  kd(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function H4(e, t) {
  kd(e, { type: "markModified", recoilValue: t });
}
function q4(e, t, n) {
  kd(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function K4(e, { key: t }, n, r = null) {
  const o = $4(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) ||
    i.nodeToComponentSubscriptions.set(t, new Map()),
    st(i.nodeToComponentSubscriptions.get(t)).set(o, [
      r ?? "<not captured>",
      n,
    ]);
  const s = I4();
  if (s.early && (s.mode === "LEGACY" || s.mode === "MUTABLE_SOURCE")) {
    const a = e.getState().nextTree;
    a && a.dirtyAtoms.has(t) && n(a);
  }
  return {
    release: () => {
      const a = e.getState(),
        l = a.nodeToComponentSubscriptions.get(t);
      l === void 0 ||
        !l.has(o) ||
        (l.delete(o), l.size === 0 && a.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function G4(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    o = N4(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r);
}
var vr = {
  RecoilValueReadOnly: M4,
  AbstractRecoilValue: O4,
  RecoilState: L4,
  getRecoilValueAsLoadable: j4,
  setRecoilValue: $C,
  setRecoilValueLoadable: W4,
  markRecoilValueModified: H4,
  setUnvalidatedRecoilValue: q4,
  subscribeToRecoilValue: K4,
  isRecoilValue: F4,
  applyAtomValueWrites: B4,
  batchStart: V4,
  writeLoadableToTreeState: ah,
  invalidateDownstreams: PC,
  copyTreeState: AC,
  refreshRecoilValue: G4,
};
function Q4(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done; ) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next();
  }
  return !1;
}
var X4 = Q4;
const { cleanUpNode: Y4 } = ho,
  { deleteNodeConfigIfPossible: J4, getNode: NC } = fn,
  { RetentionZone: IC } = _d,
  Z4 = 12e4,
  OC = new Set();
function LC(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set();
  for (const s of t)
    if (s instanceof IC) for (const a of r5(n, s)) o.add(a);
    else o.add(s);
  const i = e5(e, o);
  for (const s of i) n5(e, r, s);
}
function e5(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set(),
    s = new Set();
  return a(t), i;
  function a(l) {
    const u = new Set(),
      c = t5(e, r, l, i, s);
    for (const m of c) {
      var d;
      if (NC(m).retainedBy === "recoilRoot") {
        s.add(m);
        continue;
      }
      if (
        ((d = n.retention.referenceCounts.get(m)) !== null && d !== void 0
          ? d
          : 0) > 0
      ) {
        s.add(m);
        continue;
      }
      if (MC(m).some((C) => n.retention.referenceCounts.get(C))) {
        s.add(m);
        continue;
      }
      const v = o.nodeToNodeSubscriptions.get(m);
      if (v && X4(v, (C) => s.has(C))) {
        s.add(m);
        continue;
      }
      i.add(m), u.add(m);
    }
    const p = new Set();
    for (const m of u)
      for (const v of (b = o.nodeDeps.get(m)) !== null && b !== void 0
        ? b
        : OC) {
        var b;
        i.has(v) || p.add(v);
      }
    p.size && a(p);
  }
}
function t5(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    s = [],
    a = new Set();
  for (; n.size > 0; ) l(st(n.values().next().value));
  return s;
  function l(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return;
    }
    if (a.has(u)) return;
    const c = i.nodeToNodeSubscriptions.get(u);
    if (c) for (const d of c) l(d);
    a.add(u), n.delete(u), s.push(u);
  }
}
function n5(e, t, n) {
  if (!Ye("recoil_memory_managament_2020")) return;
  Y4(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
  const o = MC(n);
  for (const l of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(l)) === null ||
      i === void 0 ||
      i.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const s = r.graphsByVersion.get(t.version);
  if (s) {
    const l = s.nodeDeps.get(n);
    if (l !== void 0) {
      s.nodeDeps.delete(n);
      for (const u of l) {
        var a;
        (a = s.nodeToNodeSubscriptions.get(u)) === null ||
          a === void 0 ||
          a.delete(n);
      }
    }
    s.nodeToNodeSubscriptions.delete(n);
  }
  J4(n);
}
function r5(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0
    ? n
    : OC;
}
function MC(e) {
  const t = NC(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot"
    ? []
    : t instanceof IC
    ? [t]
    : t;
}
function o5(e, t) {
  const n = e.getState();
  n.nextTree
    ? n.retention.retainablesToCheckForRelease.add(t)
    : LC(e, new Set([t]));
}
function i5(e, t, n) {
  var r;
  if (!Ye("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? FC(e, t) : o.set(t, i);
}
function FC(e, t) {
  if (!Ye("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), o5(e, t);
}
function s5(e) {
  if (!Ye("recoil_memory_managament_2020")) return;
  const t = e.getState();
  LC(e, t.retention.retainablesToCheckForRelease),
    t.retention.retainablesToCheckForRelease.clear();
}
function a5(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var Go = {
  SUSPENSE_TIMEOUT_MS: Z4,
  updateRetainCount: i5,
  updateRetainCountToZero: FC,
  releaseScheduledRetainablesNow: s5,
  retainedByOptionWithDefault: a5,
};
const { unstable_batchedUpdates: l5 } = Us;
var u5 = { unstable_batchedUpdates: l5 };
const { unstable_batchedUpdates: c5 } = u5;
var d5 = { unstable_batchedUpdates: c5 };
const { batchStart: f5 } = vr,
  { unstable_batchedUpdates: p5 } = d5;
let ov = p5 || ((e) => e());
const h5 = (e) => {
    ov = e;
  },
  m5 = () => ov,
  v5 = (e) => {
    ov(() => {
      let t = () => {};
      try {
        (t = f5()), e();
      } finally {
        t();
      }
    });
  };
var Td = { getBatcher: m5, setBatcher: h5, batchUpdates: v5 };
function* g5(e) {
  for (const t of e) for (const n of t) yield n;
}
var DC = g5;
const jC = typeof Window > "u" || typeof window > "u",
  y5 = (e) => !jC && (e === window || e instanceof Window),
  b5 = typeof navigator < "u" && navigator.product === "ReactNative";
var Ad = { isSSR: jC, isReactNative: b5, isWindow: y5 };
function x5(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
  };
}
function S5(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || ((n = i), (r = e(...o))), r;
  };
}
function C5(e, t) {
  let n, r;
  return [
    (...s) => {
      const a = t(...s);
      return n === a || ((n = a), (r = e(...s))), r;
    },
    () => {
      n = null;
    },
  ];
}
var R5 = {
  memoizeWithArgsHash: x5,
  memoizeOneWithArgsHash: S5,
  memoizeOneWithArgsHashAndInvalidation: C5,
};
const { batchUpdates: lh } = Td,
  { initializeNode: w5, peekNodeInfo: E5 } = ho,
  { graph: _5 } = Za,
  { getNextStoreID: k5 } = Ed,
  { DEFAULT_VALUE: T5, recoilValues: g0, recoilValuesForKeys: y0 } = fn,
  {
    AbstractRecoilValue: A5,
    getRecoilValueAsLoadable: P5,
    setRecoilValue: b0,
    setUnvalidatedRecoilValue: $5,
  } = vr,
  { updateRetainCount: su } = Go,
  { setInvalidateMemoizedSnapshot: N5 } = EC,
  { getNextTreeStateVersion: I5, makeEmptyStoreState: O5 } = yC,
  { isSSR: L5 } = Ad,
  { memoizeOneWithArgsHashAndInvalidation: M5 } = R5;
class Pd {
  constructor(t, n) {
    Ne(this, "_store", void 0),
      Ne(this, "_refCount", 1),
      Ne(
        this,
        "getLoadable",
        (r) => (this.checkRefCount_INTERNAL(), P5(this._store, r))
      ),
      Ne(
        this,
        "getPromise",
        (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())
      ),
      Ne(this, "getNodes_UNSTABLE", (r) => {
        if (
          (this.checkRefCount_INTERNAL(),
          (r == null ? void 0 : r.isModified) === !0)
        ) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const s = this._store.getState().currentTree;
          return y0(s.dirtyAtoms);
        }
        const o = this._store.getState().knownAtoms,
          i = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? g0.values()
          : r.isInitialized === !0
          ? y0(DC([o, i]))
          : tv(g0.values(), ({ key: s }) => !o.has(s) && !i.has(s));
      }),
      Ne(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (
          this.checkRefCount_INTERNAL(),
          E5(this._store, this._store.getState().currentTree, r)
        )
      ),
      Ne(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const o = new uh(this, lh);
        return r(o), o;
      }),
      Ne(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const o = new uh(this, lh);
        return o.retain(), await r(o), o.autoRelease_INTERNAL(), o;
      }),
      (this._store = {
        storeID: k5(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const o = t.graphsByVersion;
          if (o.has(r)) return st(o.get(r));
          const i = _5();
          return o.set(r, i), i;
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw Ie("Cannot subscribe to Snapshots");
        },
      });
    for (const r of this._store.getState().knownAtoms)
      w5(this._store, r, "get"), su(this._store, r, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0, this._refCount++;
    let t = !1;
    return () => {
      t || ((t = !0), this._release());
    };
  }
  autoRelease_INTERNAL() {
    L5 || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !Ye("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    Ye("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return (
      this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
    );
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
}
function BC(e, t, n = !1) {
  const r = e.getState(),
    o = n ? I5() : t.version;
  return {
    currentTree: {
      version: n ? o : t.version,
      stateID: n ? o : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(
      wd(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}])
    ),
  };
}
function F5(e) {
  const t = new Pd(O5());
  return e != null ? t.map(e) : t;
}
const [x0, zC] = M5(
  (e, t) => {
    var n;
    const r = e.getState(),
      o =
        t === "latest"
          ? (n = r.nextTree) !== null && n !== void 0
            ? n
            : r.currentTree
          : st(r.previousTree);
    return new Pd(BC(e, o), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String(
        (n = e.getState().nextTree) === null || n === void 0
          ? void 0
          : n.version
      ) +
      String(e.getState().currentTree.version) +
      String(
        (r = e.getState().previousTree) === null || r === void 0
          ? void 0
          : r.version
      )
    );
  }
);
N5(zC);
function D5(e, t = "latest") {
  const n = x0(e, t);
  return n.isRetained() ? n : (zC(), x0(e, t));
}
class uh extends Pd {
  constructor(t, n) {
    super(
      BC(
        t.getStore_INTERNAL(),
        t.getStore_INTERNAL().getState().currentTree,
        !0
      ),
      t.getStoreID()
    ),
      Ne(this, "_batch", void 0),
      Ne(this, "set", (r, o) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          su(i, r.key, 1), b0(this.getStore_INTERNAL(), r, o);
        });
      }),
      Ne(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          su(o, r.key, 1), b0(this.getStore_INTERNAL(), r, T5);
        });
      }),
      Ne(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        lh(() => {
          for (const [i, s] of r.entries()) su(o, i, 1), $5(o, new A5(i), s);
        });
      }),
      (this._batch = n);
  }
}
var $d = {
    Snapshot: Pd,
    MutableSnapshot: uh,
    freshSnapshot: F5,
    cloneSnapshot: D5,
  },
  j5 = $d.Snapshot,
  B5 = $d.MutableSnapshot,
  z5 = $d.freshSnapshot,
  U5 = $d.cloneSnapshot,
  Nd = Object.freeze({
    __proto__: null,
    Snapshot: j5,
    MutableSnapshot: B5,
    freshSnapshot: z5,
    cloneSnapshot: U5,
  });
function V5(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var W5 = V5;
const { useRef: H5 } = he;
function q5(e) {
  const t = H5(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var S0 = q5;
const { getNextTreeStateVersion: K5, makeEmptyStoreState: UC } = yC,
  {
    cleanUpNode: G5,
    getDownstreamNodes: Q5,
    initializeNode: X5,
    setNodeValue: Y5,
    setUnvalidatedAtomValue_DEPRECATED: J5,
  } = ho,
  { graph: Z5 } = Za,
  { cloneGraph: eB } = Za,
  { getNextStoreID: VC } = Ed,
  { createMutableSource: Lf, reactMode: WC } = Ja,
  { applyAtomValueWrites: tB } = vr,
  { releaseScheduledRetainablesNow: HC } = Go,
  { freshSnapshot: nB } = Nd,
  {
    useCallback: rB,
    useContext: qC,
    useEffect: ch,
    useMemo: oB,
    useRef: iB,
    useState: sB,
  } = he;
function $s() {
  throw Ie("This component must be used inside a <RecoilRoot> component.");
}
const KC = Object.freeze({
  storeID: VC(),
  getState: $s,
  replaceState: $s,
  getGraph: $s,
  subscribeToTransactions: $s,
  addTransactionMetadata: $s,
});
let dh = !1;
function C0(e) {
  if (dh)
    throw Ie(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
    );
  const t = e.getState();
  if (t.nextTree === null) {
    Ye("recoil_memory_managament_2020") &&
      Ye("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      HC(e);
    const n = t.currentTree.version,
      r = K5();
    (t.nextTree = {
      ...t.currentTree,
      version: r,
      stateID: r,
      dirtyAtoms: new Set(),
      transactionMetadata: {},
    }),
      t.graphsByVersion.set(r, eB(st(t.graphsByVersion.get(n))));
  }
}
const GC = he.createContext({ current: KC }),
  Id = () => qC(GC),
  QC = he.createContext(null);
function aB() {
  return qC(QC);
}
function iv(e, t, n) {
  const r = Q5(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i) for (const [s, [a, l]] of i) l(n);
  }
}
function XC(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions)
      if (r.has(o)) for (const [s, a] of i) a(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!WC().early || t.suspendedComponentResolvers.size > 0) &&
      (iv(e, t, n),
      t.suspendedComponentResolvers.forEach((o) => o()),
      t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((o) => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(
      0,
      t.queuedComponentCallbacks_DEPRECATED.length
    );
}
function lB(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    (t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      XC(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Xm(
            "Ended batch with no previous state, which is unexpected",
            "recoil"
          ),
      (t.previousTree = null),
      Ye("recoil_memory_managament_2020") && n == null && HC(e);
  } finally {
    t.commitDepth--;
  }
}
function uB({ setNotifyBatcherOfChange: e }) {
  const t = Id(),
    [, n] = sB([]);
  return (
    e(() => n({})),
    ch(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e]
    ),
    ch(() => {
      zj.enqueueExecution("Batcher", () => {
        lB(t.current);
      });
    }),
    null
  );
}
function cB(e, t) {
  const n = UC();
  return (
    t({
      set: (r, o) => {
        const i = n.currentTree,
          s = Y5(e, i, r.key, o),
          a = new Set(s.keys()),
          l = i.nonvalidatedAtoms.clone();
        for (const u of a) l.delete(u);
        n.currentTree = {
          ...i,
          dirtyAtoms: W5(i.dirtyAtoms, a),
          atomValues: tB(i.atomValues, s),
          nonvalidatedAtoms: l,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((o, i) => {
          n.currentTree = J5(n.currentTree, i, o);
        });
      },
    }),
    n
  );
}
function dB(e) {
  const t = nB(e),
    n = t.getStore_INTERNAL().getState();
  return (
    t.retain(),
    n.nodeCleanupFunctions.forEach((r) => r()),
    n.nodeCleanupFunctions.clear(),
    n
  );
}
let R0 = 0;
function fB({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  children: r,
}) {
  let o;
  const i = (b) => {
      const m = o.current.graphsByVersion;
      if (m.has(b)) return st(m.get(b));
      const v = Z5();
      return m.set(b, v), v;
    },
    s = (b, m) => {
      if (m == null) {
        const { transactionSubscriptions: v } = d.current.getState(),
          C = R0++;
        return (
          v.set(C, b),
          {
            release: () => {
              v.delete(C);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: v } = d.current.getState();
        v.has(m) || v.set(m, new Map());
        const C = R0++;
        return (
          st(v.get(m)).set(C, b),
          {
            release: () => {
              const g = v.get(m);
              g && (g.delete(C), g.size === 0 && v.delete(m));
            },
          }
        );
      }
    },
    a = (b) => {
      C0(d.current);
      for (const m of Object.keys(b))
        st(d.current.getState().nextTree).transactionMetadata[m] = b[m];
    },
    l = (b) => {
      C0(d.current);
      const m = st(o.current.nextTree);
      let v;
      try {
        (dh = !0), (v = b(m));
      } finally {
        dh = !1;
      }
      v !== m &&
        ((o.current.nextTree = v),
        WC().early && iv(d.current, o.current, v),
        st(u.current)());
    },
    u = iB(null),
    c = rB(
      (b) => {
        u.current = b;
      },
      [u]
    ),
    d = S0(
      () =>
        n ?? {
          storeID: VC(),
          getState: () => o.current,
          replaceState: l,
          getGraph: i,
          subscribeToTransactions: s,
          addTransactionMetadata: a,
        }
    );
  n != null && (d.current = n),
    (o = S0(() => (e != null ? cB(d.current, e) : t != null ? dB(t) : UC())));
  const p = oB(
    () => (Lf == null ? void 0 : Lf(o, () => o.current.currentTree.version)),
    [o]
  );
  return (
    ch(() => {
      const b = d.current;
      for (const m of new Set(b.getState().knownAtoms)) X5(b, m, "get");
      return () => {
        for (const m of b.getState().knownAtoms) G5(b, m);
      };
    }, [d]),
    he.createElement(
      GC.Provider,
      { value: d },
      he.createElement(
        QC.Provider,
        { value: p },
        he.createElement(uB, { setNotifyBatcherOfChange: c }),
        r
      )
    )
  );
}
function pB(e) {
  const { override: t, ...n } = e,
    r = Id();
  return t === !1 && r.current !== KC ? e.children : he.createElement(fB, n);
}
function hB() {
  return Id().current.storeID;
}
var Lr = {
  RecoilRoot: pB,
  useStoreRef: Id,
  useRecoilMutableSource: aB,
  useRecoilStoreID: hB,
  notifyComponents_FOR_TESTING: iv,
  sendEndOfBatchNotifications_FOR_TESTING: XC,
};
function mB(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var vB = mB;
const { useEffect: gB, useRef: yB } = he;
function bB(e) {
  const t = yB();
  return (
    gB(() => {
      t.current = e;
    }),
    t.current
  );
}
var YC = bB;
const { useStoreRef: xB } = Lr,
  { SUSPENSE_TIMEOUT_MS: SB } = Go,
  { updateRetainCount: Ns } = Go,
  { RetentionZone: CB } = _d,
  { useEffect: RB, useRef: wB } = he,
  { isSSR: w0 } = Ad;
function EB(e) {
  if (Ye("recoil_memory_managament_2020")) return _B(e);
}
function _B(e) {
  const n = (Array.isArray(e) ? e : [e]).map((s) =>
      s instanceof CB ? s : s.key
    ),
    r = xB();
  RB(() => {
    if (!Ye("recoil_memory_managament_2020")) return;
    const s = r.current;
    if (o.current && !w0) window.clearTimeout(o.current), (o.current = null);
    else for (const a of n) Ns(s, a, 1);
    return () => {
      for (const a of n) Ns(s, a, -1);
    };
  }, [r, ...n]);
  const o = wB(),
    i = YC(n);
  if (!w0 && (i === void 0 || !vB(i, n))) {
    const s = r.current;
    for (const a of n) Ns(s, a, 1);
    if (i) for (const a of i) Ns(s, a, -1);
    o.current && window.clearTimeout(o.current),
      (o.current = window.setTimeout(() => {
        o.current = null;
        for (const a of n) Ns(s, a, -1);
      }, SB));
  }
}
var sv = EB;
function kB() {
  return "<component name not available>";
}
var tl = kB;
const { batchUpdates: TB } = Td,
  { DEFAULT_VALUE: JC } = fn,
  {
    currentRendererSupportsUseSyncExternalStore: AB,
    reactMode: us,
    useMutableSource: PB,
    useSyncExternalStore: $B,
  } = Ja,
  { useRecoilMutableSource: NB, useStoreRef: gr } = Lr,
  {
    AbstractRecoilValue: fh,
    getRecoilValueAsLoadable: nl,
    setRecoilValue: Zu,
    setUnvalidatedRecoilValue: IB,
    subscribeToRecoilValue: Yi,
  } = vr,
  {
    useCallback: un,
    useEffect: Ji,
    useMemo: ZC,
    useRef: ca,
    useState: av,
  } = he,
  { setByAddingToSet: OB } = xC,
  { isSSR: LB } = Ad;
function lv(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((o) => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
          LB &&
            tt(e.contents) &&
            e.contents.finally(() => {
              i.delete(o);
            });
      })
    : e.state === "hasError"
    ? e.contents
    : Ie(`Invalid value of loadable atom "${t.key}"`);
}
function MB() {
  const e = tl(),
    t = gr(),
    [, n] = av([]),
    r = ca(new Set());
  r.current = new Set();
  const o = ca(new Set()),
    i = ca(new Map()),
    s = un(
      (l) => {
        const u = i.current.get(l);
        u && (u.release(), i.current.delete(l));
      },
      [i]
    ),
    a = un((l, u) => {
      i.current.has(u) && n([]);
    }, []);
  return (
    Ji(() => {
      const l = t.current;
      la(r.current, o.current).forEach((u) => {
        if (i.current.has(u)) return;
        const c = Yi(l, new fh(u), (p) => a(p, u), e);
        i.current.set(u, c),
          l.getState().nextTree
            ? l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                a(l.getState(), u);
              })
            : a(l.getState(), u);
      }),
        la(o.current, r.current).forEach((u) => {
          s(u);
        }),
        (o.current = r.current);
    }),
    Ji(() => {
      const l = i.current;
      return (
        la(r.current, new Set(l.keys())).forEach((u) => {
          const c = Yi(t.current, new fh(u), (d) => a(d, u), e);
          l.set(u, c);
        }),
        () => l.forEach((u, c) => s(c))
      );
    }, [e, t, s, a]),
    ZC(() => {
      function l(m) {
        return (v) => {
          Zu(t.current, m, v);
        };
      }
      function u(m) {
        return () => Zu(t.current, m, JC);
      }
      function c(m) {
        var v;
        r.current.has(m.key) || (r.current = OB(r.current, m.key));
        const C = t.current.getState();
        return nl(
          t.current,
          m,
          us().early && (v = C.nextTree) !== null && v !== void 0
            ? v
            : C.currentTree
        );
      }
      function d(m) {
        const v = c(m);
        return lv(v, m, t);
      }
      function p(m) {
        return [d(m), l(m)];
      }
      function b(m) {
        return [c(m), l(m)];
      }
      return {
        getRecoilValue: d,
        getRecoilValueLoadable: c,
        getRecoilState: p,
        getRecoilStateLoadable: b,
        getSetRecoilState: l,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const FB = { current: 0 };
function DB(e) {
  const t = gr(),
    n = tl(),
    r = un(() => {
      var a;
      const l = t.current,
        u = l.getState(),
        c =
          us().early && (a = u.nextTree) !== null && a !== void 0
            ? a
            : u.currentTree;
      return { loadable: nl(l, e, c), key: e.key };
    }, [t, e]),
    o = un((a) => {
      let l;
      return () => {
        var u, c;
        const d = a();
        return (u = l) !== null &&
          u !== void 0 &&
          u.loadable.is(d.loadable) &&
          ((c = l) === null || c === void 0 ? void 0 : c.key) === d.key
          ? l
          : ((l = d), d);
      };
    }, []),
    i = ZC(() => o(r), [r, o]),
    s = un(
      (a) => {
        const l = t.current;
        return Yi(l, e, a, n).release;
      },
      [t, e, n]
    );
  return $B(s, i, i).loadable;
}
function jB(e) {
  const t = gr(),
    n = un(() => {
      var u;
      const c = t.current,
        d = c.getState(),
        p =
          us().early && (u = d.nextTree) !== null && u !== void 0
            ? u
            : d.currentTree;
      return nl(c, e, p);
    }, [t, e]),
    r = un(() => n(), [n]),
    o = tl(),
    i = un(
      (u, c) => {
        const d = t.current;
        return Yi(
          d,
          e,
          () => {
            if (!Ye("recoil_suppress_rerender_in_callback")) return c();
            const b = n();
            l.current.is(b) || c(), (l.current = b);
          },
          o
        ).release;
      },
      [t, e, o, n]
    ),
    s = NB();
  if (s == null)
    throw Ie(
      "Recoil hooks must be used in components contained within a <RecoilRoot> component."
    );
  const a = PB(s, r, i),
    l = ca(a);
  return (
    Ji(() => {
      l.current = a;
    }),
    a
  );
}
function ph(e) {
  const t = gr(),
    n = tl(),
    r = un(() => {
      var l;
      const u = t.current,
        c = u.getState(),
        d =
          us().early && (l = c.nextTree) !== null && l !== void 0
            ? l
            : c.currentTree;
      return nl(u, e, d);
    }, [t, e]),
    o = un(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    i = un(
      (l) => {
        const u = o();
        return l.loadable.is(u.loadable) && l.key === u.key ? l : u;
      },
      [o]
    );
  Ji(() => {
    const l = Yi(
      t.current,
      e,
      (u) => {
        a(i);
      },
      n
    );
    return a(i), l.release;
  }, [n, e, t, i]);
  const [s, a] = av(o);
  return s.key !== e.key ? o().loadable : s.loadable;
}
function BB(e) {
  const t = gr(),
    [, n] = av([]),
    r = tl(),
    o = un(() => {
      var a;
      const l = t.current,
        u = l.getState(),
        c =
          us().early && (a = u.nextTree) !== null && a !== void 0
            ? a
            : u.currentTree;
      return nl(l, e, c);
    }, [t, e]),
    i = o(),
    s = ca(i);
  return (
    Ji(() => {
      s.current = i;
    }),
    Ji(() => {
      const a = t.current,
        l = a.getState(),
        u = Yi(
          a,
          e,
          (d) => {
            var p;
            if (!Ye("recoil_suppress_rerender_in_callback")) return n([]);
            const b = o();
            ((p = s.current) !== null && p !== void 0 && p.is(b)) || n(b),
              (s.current = b);
          },
          r
        );
      if (l.nextTree)
        a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          (s.current = null), n([]);
        });
      else {
        var c;
        if (!Ye("recoil_suppress_rerender_in_callback")) return n([]);
        const d = o();
        ((c = s.current) !== null && c !== void 0 && c.is(d)) || n(d),
          (s.current = d);
      }
      return u.release;
    }, [r, o, e, t]),
    i
  );
}
function uv(e) {
  return (
    Ye("recoil_memory_managament_2020") && sv(e),
    {
      TRANSITION_SUPPORT: ph,
      SYNC_EXTERNAL_STORE: AB() ? DB : ph,
      MUTABLE_SOURCE: jB,
      LEGACY: BB,
    }[us().mode](e)
  );
}
function eR(e) {
  const t = gr(),
    n = uv(e);
  return lv(n, e, t);
}
function Od(e) {
  const t = gr();
  return un(
    (n) => {
      Zu(t.current, e, n);
    },
    [t, e]
  );
}
function zB(e) {
  const t = gr();
  return un(() => {
    Zu(t.current, e, JC);
  }, [t, e]);
}
function UB(e) {
  return [eR(e), Od(e)];
}
function VB(e) {
  return [uv(e), Od(e)];
}
function WB() {
  const e = gr();
  return (t, n = {}) => {
    TB(() => {
      e.current.addTransactionMetadata(n),
        t.forEach((r, o) => IB(e.current, new fh(o), r));
    });
  };
}
function tR(e) {
  return Ye("recoil_memory_managament_2020") && sv(e), ph(e);
}
function nR(e) {
  const t = gr(),
    n = tR(e);
  return lv(n, e, t);
}
function HB(e) {
  return [nR(e), Od(e)];
}
var qB = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: FB,
  useRecoilInterface: MB,
  useRecoilState: UB,
  useRecoilStateLoadable: VB,
  useRecoilValue: eR,
  useRecoilValueLoadable: uv,
  useResetRecoilState: zB,
  useSetRecoilState: Od,
  useSetUnvalidatedAtomValues: WB,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: tR,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: nR,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: HB,
};
function KB(e, t) {
  const n = new Map();
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n;
}
var GB = KB;
function QB(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var XB = QB;
function YB(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
  }
  return t;
}
var JB = YB;
const { batchUpdates: ZB } = Td,
  { DEFAULT_VALUE: e3, getNode: rR, nodes: t3 } = fn,
  { useStoreRef: cv } = Lr,
  { AbstractRecoilValue: n3, setRecoilValueLoadable: r3 } = vr,
  { SUSPENSE_TIMEOUT_MS: o3 } = Go,
  { cloneSnapshot: ec } = Nd,
  { useCallback: Ld, useEffect: oR, useRef: E0, useState: i3 } = he,
  { isSSR: _0 } = Ad;
function Md(e) {
  const t = cv();
  oR(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function k0(e) {
  const t = e.atomValues.toMap(),
    n = Ju(
      GB(t, (r, o) => {
        const s = rR(o).persistence_UNSTABLE;
        return s != null && s.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents
    );
  return JB(e.nonvalidatedAtoms.toMap(), n);
}
function s3(e) {
  Md(
    Ld(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = k0(r),
          i = k0(n),
          s = Ju(t3, (l) => {
            var u, c, d, p;
            return {
              persistence_UNSTABLE: {
                type:
                  (u =
                    (c = l.persistence_UNSTABLE) === null || c === void 0
                      ? void 0
                      : c.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (d =
                    (p = l.persistence_UNSTABLE) === null || p === void 0
                      ? void 0
                      : p.backButton) !== null && d !== void 0
                    ? d
                    : !1,
              },
            };
          }),
          a = XB(r.dirtyAtoms, (l) => o.has(l) || i.has(l));
        e({
          atomValues: o,
          previousAtomValues: i,
          atomInfo: s,
          modifiedAtoms: a,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e]
    )
  );
}
function a3(e) {
  Md(
    Ld(
      (t) => {
        const n = ec(t, "latest"),
          r = ec(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e]
    )
  );
}
function l3() {
  const e = cv(),
    [t, n] = i3(() => ec(e.current)),
    r = YC(t),
    o = E0(),
    i = E0();
  if (
    (Md(Ld((a) => n(ec(a)), [])),
    oR(() => {
      const a = t.retain();
      if (o.current && !_0) {
        var l;
        window.clearTimeout(o.current),
          (o.current = null),
          (l = i.current) === null || l === void 0 || l.call(i),
          (i.current = null);
      }
      return () => {
        window.setTimeout(a, 10);
      };
    }, [t]),
    r !== t && !_0)
  ) {
    if (o.current) {
      var s;
      window.clearTimeout(o.current),
        (o.current = null),
        (s = i.current) === null || s === void 0 || s.call(i),
        (i.current = null);
    }
    (i.current = t.retain()),
      (o.current = window.setTimeout(() => {
        var a;
        (o.current = null),
          (a = i.current) === null || a === void 0 || a.call(i),
          (i.current = null);
      }, o3));
  }
  return t;
}
function iR(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  ZB(() => {
    const s = new Set();
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const c of u) {
        var a, l;
        ((a = o.atomValues.get(c)) === null || a === void 0
          ? void 0
          : a.contents) !==
          ((l = i.atomValues.get(c)) === null || l === void 0
            ? void 0
            : l.contents) &&
          rR(c).shouldRestoreFromSnapshots &&
          s.add(c);
      }
    s.forEach((u) => {
      r3(e, new n3(u), i.atomValues.has(u) ? st(i.atomValues.get(u)) : e3);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }));
  });
}
function u3() {
  const e = cv();
  return Ld((t) => iR(e.current, t), [e]);
}
var sR = {
  useRecoilSnapshot: l3,
  gotoSnapshot: iR,
  useGotoRecoilSnapshot: u3,
  useRecoilTransactionObserver: a3,
  useTransactionObservation_DEPRECATED: s3,
  useTransactionSubscription_DEPRECATED: Md,
};
const { peekNodeInfo: c3 } = ho,
  { useStoreRef: d3 } = Lr;
function f3() {
  const e = d3();
  return ({ key: t }) => c3(e.current, e.current.getState().currentTree, t);
}
var p3 = f3;
const { reactMode: h3 } = Ja,
  { RecoilRoot: m3, useStoreRef: v3 } = Lr,
  { useMemo: g3 } = he;
function y3() {
  h3().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
    );
  const e = v3().current;
  return g3(() => {
    function t({ children: n }) {
      return he.createElement(m3, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var b3 = y3;
const { loadableWithValue: x3 } = Ya,
  { initializeNode: S3 } = ho,
  { DEFAULT_VALUE: C3, getNode: R3 } = fn,
  {
    copyTreeState: w3,
    getRecoilValueAsLoadable: E3,
    invalidateDownstreams: _3,
    writeLoadableToTreeState: k3,
  } = vr;
function T0(e) {
  return R3(e.key).nodeType === "atom";
}
class T3 {
  constructor(t, n) {
    Ne(this, "_store", void 0),
      Ne(this, "_treeState", void 0),
      Ne(this, "_changes", void 0),
      Ne(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!T0(r))
          throw Ie("Reading selectors within atomicUpdate is not supported");
        const o = E3(this._store, r, this._treeState);
        if (o.state === "hasValue") return o.contents;
        throw o.state === "hasError"
          ? o.contents
          : Ie(
              `Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`
            );
      }),
      Ne(this, "set", (r, o) => {
        if (!T0(r))
          throw Ie("Setting selectors within atomicUpdate is not supported");
        if (typeof o == "function") {
          const i = this.get(r);
          this._changes.set(r.key, o(i));
        } else S3(this._store, r.key, "set"), this._changes.set(r.key, o);
      }),
      Ne(this, "reset", (r) => {
        this.set(r, C3);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map());
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = w3(this._treeState);
    for (const [n, r] of this._changes) k3(t, n, x3(r));
    return _3(this._store, t), t;
  }
}
function A3(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new T3(e, n);
      return t(r), r.newTreeState_INTERNAL();
    });
  };
}
var P3 = { atomicUpdater: A3 },
  $3 = P3.atomicUpdater,
  aR = Object.freeze({ __proto__: null, atomicUpdater: $3 });
function N3(e, t) {
  if (!e) throw new Error(t);
}
var I3 = N3,
  qs = I3;
const { atomicUpdater: O3 } = aR,
  { batchUpdates: L3 } = Td,
  { DEFAULT_VALUE: M3 } = fn,
  { useStoreRef: F3 } = Lr,
  { refreshRecoilValue: D3, setRecoilValue: A0 } = vr,
  { cloneSnapshot: j3 } = Nd,
  { gotoSnapshot: B3 } = sR,
  { useCallback: z3 } = he;
class lR {}
const U3 = new lR();
function uR(e, t, n, r) {
  let o = U3,
    i;
  if (
    (L3(() => {
      const a =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw Ie(a);
      const l = SC(
          {
            ...(r ?? {}),
            set: (c, d) => A0(e, c, d),
            reset: (c) => A0(e, c, M3),
            refresh: (c) => D3(e, c),
            gotoSnapshot: (c) => B3(e, c),
            transact_UNSTABLE: (c) => O3(e)(c),
          },
          {
            snapshot: () => {
              const c = j3(e);
              return (i = c.retain()), c;
            },
          }
        ),
        u = t(l);
      if (typeof u != "function") throw Ie(a);
      o = u(...n);
    }),
    o instanceof lR && qs(!1),
    tt(o))
  )
    o = o.finally(() => {
      var a;
      (a = i) === null || a === void 0 || a();
    });
  else {
    var s;
    (s = i) === null || s === void 0 || s();
  }
  return o;
}
function V3(e, t) {
  const n = F3();
  return z3((...r) => uR(n.current, e, r), t != null ? [...t, n] : void 0);
}
var cR = { recoilCallback: uR, useRecoilCallback: V3 };
const { useStoreRef: W3 } = Lr,
  { refreshRecoilValue: H3 } = vr,
  { useCallback: q3 } = he;
function K3(e) {
  const t = W3();
  return q3(() => {
    const n = t.current;
    H3(n, e);
  }, [e, t]);
}
var G3 = K3;
const { atomicUpdater: Q3 } = aR,
  { useStoreRef: X3 } = Lr,
  { useMemo: Y3 } = he;
function J3(e, t) {
  const n = X3();
  return Y3(
    () =>
      (...r) => {
        Q3(n.current)((i) => {
          e(i)(...r);
        });
      },
    t != null ? [...t, n] : void 0
  );
}
var Z3 = J3;
class ez {
  constructor(t) {
    Ne(this, "value", void 0), (this.value = t);
  }
}
var tz = { WrappedValue: ez },
  nz = tz.WrappedValue,
  dR = Object.freeze({ __proto__: null, WrappedValue: nz });
const { isFastRefreshEnabled: rz } = Ja;
class P0 extends Error {}
class oz {
  constructor(t) {
    var n, r, o;
    Ne(this, "_name", void 0),
      Ne(this, "_numLeafs", void 0),
      Ne(this, "_root", void 0),
      Ne(this, "_onHit", void 0),
      Ne(this, "_onSet", void 0),
      Ne(this, "_mapNodeValue", void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit =
        (n = t == null ? void 0 : t.onHit) !== null && n !== void 0
          ? n
          : () => {}),
      (this._onSet =
        (r = t == null ? void 0 : t.onSet) !== null && r !== void 0
          ? r
          : () => {}),
      (this._mapNodeValue =
        (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0
          ? o
          : (i) => i);
  }
  size() {
    return this._numLeafs;
  }
  root() {
    return this._root;
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0
      ? void 0
      : r.value;
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r; ) {
      if ((n == null || n.onNodeVisit(r), r.type === "leaf"))
        return this._onHit(r), r;
      const o = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(o);
    }
  }
  set(t, n, r) {
    const o = () => {
      var i, s, a, l;
      let u, c;
      for (const [C, g] of t) {
        var d, p, b;
        const h = this._root;
        if ((h == null ? void 0 : h.type) === "leaf")
          throw this.invalidCacheError();
        const y = u;
        if (
          ((u = y ? y.branches.get(c) : h),
          (u =
            (d = u) !== null && d !== void 0
              ? d
              : {
                  type: "branch",
                  nodeKey: C,
                  parent: y,
                  branches: new Map(),
                  branchKey: c,
                }),
          u.type !== "branch" || u.nodeKey !== C)
        )
          throw this.invalidCacheError();
        y == null || y.branches.set(c, u),
          r == null ||
            (p = r.onNodeVisit) === null ||
            p === void 0 ||
            p.call(r, u),
          (c = this._mapNodeValue(g)),
          (this._root = (b = this._root) !== null && b !== void 0 ? b : u);
      }
      const m = u
        ? (i = u) === null || i === void 0
          ? void 0
          : i.branches.get(c)
        : this._root;
      if (m != null && (m.type !== "leaf" || m.branchKey !== c))
        throw this.invalidCacheError();
      const v = { type: "leaf", value: n, parent: u, branchKey: c };
      (s = u) === null || s === void 0 || s.branches.set(c, v),
        (this._root = (a = this._root) !== null && a !== void 0 ? a : v),
        this._numLeafs++,
        this._onSet(v),
        r == null ||
          (l = r.onNodeVisit) === null ||
          l === void 0 ||
          l.call(r, v);
    };
    try {
      o();
    } catch (i) {
      if (i instanceof P0) this.clear(), o();
      else throw i;
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return (this._root = null), (this._numLeafs = 0), !0;
    let r = t.parent,
      o = t.branchKey;
    for (; r; ) {
      var i;
      if ((r.branches.delete(o), r === n))
        return (
          r.branches.size === 0
            ? ((this._root = null), (this._numLeafs = 0))
            : this._numLeafs--,
          !0
        );
      if (r.branches.size > 0) break;
      (o = (i = r) === null || i === void 0 ? void 0 : i.branchKey),
        (r = r.parent);
    }
    for (; r !== n; r = r.parent) if (r == null) return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    (this._numLeafs = 0), (this._root = null);
  }
  invalidCacheError() {
    const t = rz()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (Xm(t + (this._name != null ? ` - ${this._name}` : "")), new P0());
  }
}
var iz = { TreeCache: oz },
  sz = iz.TreeCache,
  fR = Object.freeze({ __proto__: null, TreeCache: sz });
class az {
  constructor(t) {
    var n;
    Ne(this, "_maxSize", void 0),
      Ne(this, "_size", void 0),
      Ne(this, "_head", void 0),
      Ne(this, "_tail", void 0),
      Ne(this, "_map", void 0),
      Ne(this, "_keyMapper", void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return this.set(t, r.value), r.value;
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const i = this.head(),
      s = { key: t, right: i, left: null, value: n };
    i ? (i.left = s) : (this._tail = s),
      this._map.set(r, s),
      (this._head = s),
      this._size++,
      this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = st(this._map.get(n)),
      o = r.right,
      i = r.left;
    o && (o.left = r.left),
      i && (i.right = r.right),
      r === this.head() && (this._head = o),
      r === this.tail() && (this._tail = i),
      this._map.delete(n),
      this._size--;
  }
  clear() {
    (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map());
  }
}
var lz = { LRUCache: az },
  uz = lz.LRUCache,
  pR = Object.freeze({ __proto__: null, LRUCache: uz });
const { LRUCache: cz } = pR,
  { TreeCache: dz } = fR;
function fz({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new cz({ maxSize: t }),
    o = new dz({
      name: e,
      mapNodeValue: n,
      onHit: (i) => {
        r.set(i, !0);
      },
      onSet: (i) => {
        const s = r.tail();
        r.set(i, !0), s && o.size() > t && o.delete(s.key);
      },
    });
  return o;
}
var $0 = fz;
function Wn(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\"))
    return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw Ie("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (tt(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o, i) => Wn(o, t, i.toString()))}]`;
  if (typeof e.toJSON == "function") return Wn(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, s] of e) o[typeof i == "string" ? i : Wn(i, t)] = s;
    return Wn(o, t, n);
  }
  return e instanceof Set
    ? Wn(
        Array.from(e).sort((o, i) => Wn(o, t).localeCompare(Wn(i, t))),
        t,
        n
      )
    : Symbol !== void 0 &&
      e[Symbol.iterator] != null &&
      typeof e[Symbol.iterator] == "function"
    ? Wn(Array.from(e), t, n)
    : `{${Object.keys(e)
        .filter((o) => e[o] !== void 0)
        .sort()
        .map((o) => `${Wn(o, t)}:${Wn(e[o], t, o)}`)
        .join(",")}}`;
}
function pz(e, t = { allowFunctions: !1 }) {
  return Wn(e, t);
}
var Fd = pz;
const { TreeCache: hz } = fR,
  Il = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function mz(
  {
    equality: e = Il.equality,
    eviction: t = Il.eviction,
    maxSize: n = Il.maxSize,
  } = Il,
  r
) {
  const o = vz(e);
  return gz(t, n, o, r);
}
function vz(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => Fd(t);
  }
  throw Ie(`Unrecognized equality policy ${e}`);
}
function gz(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new hz({ name: r, mapNodeValue: n });
    case "lru":
      return $0({ name: r, maxSize: st(t), mapNodeValue: n });
    case "most-recent":
      return $0({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw Ie(`Unrecognized eviction policy ${e}`);
}
var yz = mz;
function bz(e) {
  return () => null;
}
var xz = { startPerfBlock: bz };
const {
    isLoadable: Sz,
    loadableWithError: Ol,
    loadableWithPromise: Cz,
    loadableWithValue: Mf,
  } = Ya,
  { WrappedValue: hR } = dR,
  { getNodeLoadable: Ll, peekNodeLoadable: Rz, setNodeValue: wz } = ho,
  { saveDepsToStore: Ez } = Za,
  {
    DEFAULT_VALUE: _z,
    getConfigDeletionHandler: kz,
    getNode: Tz,
    registerNode: N0,
  } = fn,
  { isRecoilValue: Az } = Xi,
  { markRecoilValueModified: I0 } = vr,
  { retainedByOptionWithDefault: Pz } = Go,
  { recoilCallback: $z } = cR,
  { startPerfBlock: Nz } = xz;
class mR {}
const Is = new mR(),
  Os = [],
  Ml = new Map(),
  Iz = (() => {
    let e = 0;
    return () => e++;
  })();
function vR(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
    i = e.set != null ? e.set : void 0,
    s = new Set(),
    a = yz(o ?? { equality: "reference", eviction: "keep-all" }, n),
    l = Pz(e.retainedBy_UNSTABLE),
    u = new Map();
  let c = 0;
  function d() {
    return !Ye("recoil_memory_managament_2020") || c > 0;
  }
  function p(A) {
    return (
      A.getState().knownSelectors.add(n),
      c++,
      () => {
        c--;
      }
    );
  }
  function b() {
    return kz(n) !== void 0 && !d();
  }
  function m(A, H, W, se, Y) {
    K(H, se, Y), v(A, W);
  }
  function v(A, H) {
    z(A, H) && F(A), g(H, !0);
  }
  function C(A, H) {
    z(A, H) && (st(P(A)).stateVersions.clear(), g(H, !1));
  }
  function g(A, H) {
    const W = Ml.get(A);
    if (W != null) {
      for (const se of W) I0(se, st(t));
      H && Ml.delete(A);
    }
  }
  function h(A, H) {
    let W = Ml.get(H);
    W == null && Ml.set(H, (W = new Set())), W.add(A);
  }
  function y(A, H, W, se, Y, ve) {
    return H.then((ge) => {
      if (!d()) throw (F(A), Is);
      const oe = Mf(ge);
      return m(A, W, Y, oe, se), ge;
    }).catch((ge) => {
      if (!d()) throw (F(A), Is);
      if (tt(ge)) return S(A, ge, W, se, Y, ve);
      const oe = Ol(ge);
      throw (m(A, W, Y, oe, se), ge);
    });
  }
  function S(A, H, W, se, Y, ve) {
    return H.then((ge) => {
      if (!d()) throw (F(A), Is);
      ve.loadingDepKey != null && ve.loadingDepPromise === H
        ? W.atomValues.set(ve.loadingDepKey, Mf(ge))
        : A.getState().knownSelectors.forEach((be) => {
            W.atomValues.delete(be);
          });
      const oe = w(A, W);
      if (oe && oe.state !== "loading") {
        if (((z(A, Y) || P(A) == null) && v(A, Y), oe.state === "hasValue"))
          return oe.contents;
        throw oe.contents;
      }
      if (!z(A, Y)) {
        const be = L(A, W);
        if (be != null) return be.loadingLoadable.contents;
      }
      const [Ae, ye] = _(A, W, Y);
      if (
        (Ae.state !== "loading" && m(A, W, Y, Ae, ye), Ae.state === "hasError")
      )
        throw Ae.contents;
      return Ae.contents;
    }).catch((ge) => {
      if (ge instanceof mR) throw Is;
      if (!d()) throw (F(A), Is);
      const oe = Ol(ge);
      throw (m(A, W, Y, oe, se), ge);
    });
  }
  function E(A, H, W, se) {
    var Y, ve, ge, oe;
    if (
      z(A, se) ||
      H.version ===
        ((Y = A.getState()) === null ||
        Y === void 0 ||
        (ve = Y.currentTree) === null ||
        ve === void 0
          ? void 0
          : ve.version) ||
      H.version ===
        ((ge = A.getState()) === null ||
        ge === void 0 ||
        (oe = ge.nextTree) === null ||
        oe === void 0
          ? void 0
          : oe.version)
    ) {
      var Ae, ye, be;
      Ez(
        n,
        W,
        A,
        (Ae =
          (ye = A.getState()) === null ||
          ye === void 0 ||
          (be = ye.nextTree) === null ||
          be === void 0
            ? void 0
            : be.version) !== null && Ae !== void 0
          ? Ae
          : A.getState().currentTree.version
      );
    }
    for (const me of W) s.add(me);
  }
  function _(A, H, W) {
    const se = Nz(n);
    let Y = !0,
      ve = !0;
    const ge = () => {
      se(), (ve = !1);
    };
    let oe,
      Ae = !1,
      ye;
    const be = { loadingDepKey: null, loadingDepPromise: null },
      me = new Map();
    function $e({ key: ct }) {
      const Qe = Ll(A, H, ct);
      switch (
        (me.set(ct, Qe),
        Y || (E(A, H, new Set(me.keys()), W), C(A, W)),
        Qe.state)
      ) {
        case "hasValue":
          return Qe.contents;
        case "hasError":
          throw Qe.contents;
        case "loading":
          throw (
            ((be.loadingDepKey = ct),
            (be.loadingDepPromise = Qe.contents),
            Qe.contents)
          );
      }
      throw Ie("Invalid Loadable state");
    }
    const je =
      (ct) =>
      (...Qe) => {
        if (ve)
          throw Ie(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
          );
        return t == null && qs(!1), $z(A, ct, Qe, { node: t });
      };
    try {
      (oe = r({ get: $e, getCallback: je })),
        (oe = Az(oe) ? $e(oe) : oe),
        Sz(oe) && (oe.state === "hasError" && (Ae = !0), (oe = oe.contents)),
        tt(oe) ? (oe = y(A, oe, H, me, W, be).finally(ge)) : ge(),
        (oe = oe instanceof hR ? oe.value : oe);
    } catch (ct) {
      (oe = ct),
        tt(oe) ? (oe = S(A, oe, H, me, W, be).finally(ge)) : ((Ae = !0), ge());
    }
    return (
      Ae ? (ye = Ol(oe)) : tt(oe) ? (ye = Cz(oe)) : (ye = Mf(oe)),
      (Y = !1),
      B(A, W, me),
      E(A, H, new Set(me.keys()), W),
      [ye, me]
    );
  }
  function w(A, H) {
    let W = H.atomValues.get(n);
    if (W != null) return W;
    const se = new Set();
    try {
      W = a.get(
        (ve) => (typeof ve != "string" && qs(!1), Ll(A, H, ve).contents),
        {
          onNodeVisit: (ve) => {
            ve.type === "branch" && ve.nodeKey !== n && se.add(ve.nodeKey);
          },
        }
      );
    } catch (ve) {
      throw Ie(`Problem with cache lookup for selector "${n}": ${ve.message}`);
    }
    if (W) {
      var Y;
      H.atomValues.set(n, W),
        E(
          A,
          H,
          se,
          (Y = P(A)) === null || Y === void 0 ? void 0 : Y.executionID
        );
    }
    return W;
  }
  function k(A, H) {
    const W = w(A, H);
    if (W != null) return F(A), W;
    const se = L(A, H);
    if (se != null) {
      var Y;
      return (
        ((Y = se.loadingLoadable) === null || Y === void 0
          ? void 0
          : Y.state) === "loading" && h(A, se.executionID),
        se.loadingLoadable
      );
    }
    const ve = Iz(),
      [ge, oe] = _(A, H, ve);
    return (
      ge.state === "loading"
        ? (U(A, ve, ge, oe, H), h(A, ve))
        : (F(A), K(H, ge, oe)),
      ge
    );
  }
  function L(A, H) {
    const W = DC([
      u.has(A) ? [st(u.get(A))] : [],
      wd(
        tv(u, ([Y]) => Y !== A),
        ([, Y]) => Y
      ),
    ]);
    function se(Y) {
      for (const [ve, ge] of Y) if (!Ll(A, H, ve).is(ge)) return !0;
      return !1;
    }
    for (const Y of W) {
      if (
        Y.stateVersions.get(H.version) ||
        !se(Y.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return Y.stateVersions.set(H.version, !0), Y;
      Y.stateVersions.set(H.version, !1);
    }
  }
  function P(A) {
    return u.get(A);
  }
  function U(A, H, W, se, Y) {
    u.set(A, {
      depValuesDiscoveredSoFarDuringAsyncWork: se,
      executionID: H,
      loadingLoadable: W,
      stateVersions: new Map([[Y.version, !0]]),
    });
  }
  function B(A, H, W) {
    if (z(A, H)) {
      const se = P(A);
      se != null && (se.depValuesDiscoveredSoFarDuringAsyncWork = W);
    }
  }
  function F(A) {
    u.delete(A);
  }
  function z(A, H) {
    var W;
    return H === ((W = P(A)) === null || W === void 0 ? void 0 : W.executionID);
  }
  function V(A) {
    return Array.from(A.entries()).map(([H, W]) => [H, W.contents]);
  }
  function K(A, H, W) {
    A.atomValues.set(n, H);
    try {
      a.set(V(W), H);
    } catch (se) {
      throw Ie(`Problem with setting cache for selector "${n}": ${se.message}`);
    }
  }
  function G(A) {
    if (Os.includes(n)) {
      const H = `Recoil selector has circular dependencies: ${Os.slice(
        Os.indexOf(n)
      ).join(" → ")}`;
      return Ol(Ie(H));
    }
    Os.push(n);
    try {
      return A();
    } finally {
      Os.pop();
    }
  }
  function N(A, H) {
    const W = H.atomValues.get(n);
    return (
      W ??
      a.get((se) => {
        var Y;
        return (
          typeof se != "string" && qs(!1),
          (Y = Rz(A, H, se)) === null || Y === void 0 ? void 0 : Y.contents
        );
      })
    );
  }
  function O(A, H) {
    return G(() => k(A, H));
  }
  function D(A) {
    A.atomValues.delete(n);
  }
  function X(A, H) {
    t == null && qs(!1);
    for (const se of s) {
      var W;
      const Y = Tz(se);
      (W = Y.clearCache) === null || W === void 0 || W.call(Y, A, H);
    }
    s.clear(), D(H), a.clear(), I0(A, t);
  }
  return i != null
    ? (t = N0({
        key: n,
        nodeType: "selector",
        peek: N,
        get: O,
        set: (H, W, se) => {
          let Y = !1;
          const ve = new Map();
          function ge({ key: be }) {
            if (Y)
              throw Ie(
                "Recoil: Async selector sets are not currently supported."
              );
            const me = Ll(H, W, be);
            if (me.state === "hasValue") return me.contents;
            if (me.state === "loading") {
              const $e = `Getting value of asynchronous atom or selector "${be}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw Ie($e);
            } else throw me.contents;
          }
          function oe(be, me) {
            if (Y)
              throw Ie(
                "Recoil: Async selector sets are not currently supported."
              );
            const $e = typeof me == "function" ? me(ge(be)) : me;
            wz(H, W, be.key, $e).forEach((ct, Qe) => ve.set(Qe, ct));
          }
          function Ae(be) {
            oe(be, _z);
          }
          const ye = i({ set: oe, get: ge, reset: Ae }, se);
          if (ye !== void 0)
            throw tt(ye)
              ? Ie("Recoil: Async selector sets are not currently supported.")
              : Ie("Recoil: selector set should be a void function.");
          return (Y = !0), ve;
        },
        init: p,
        invalidate: D,
        clearCache: X,
        shouldDeleteConfigOnRelease: b,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: l,
      }))
    : (t = N0({
        key: n,
        nodeType: "selector",
        peek: N,
        get: O,
        init: p,
        invalidate: D,
        clearCache: X,
        shouldDeleteConfigOnRelease: b,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: l,
      }));
}
vR.value = (e) => new hR(e);
var Zi = vR;
const {
    isLoadable: Oz,
    loadableWithError: Ff,
    loadableWithPromise: Df,
    loadableWithValue: oi,
  } = Ya,
  { WrappedValue: gR } = dR,
  { peekNodeInfo: Lz } = ho,
  {
    DEFAULT_VALUE: So,
    DefaultValue: Ur,
    getConfigDeletionHandler: yR,
    registerNode: Mz,
    setConfigDeletionHandler: Fz,
  } = fn,
  { isRecoilValue: Dz } = Xi,
  {
    getRecoilValueAsLoadable: jz,
    markRecoilValueModified: Bz,
    setRecoilValue: O0,
    setRecoilValueLoadable: zz,
  } = vr,
  { retainedByOptionWithDefault: Uz } = Go,
  Ls = (e) => (e instanceof gR ? e.value : e);
function Vz(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = Uz(e.retainedBy_UNSTABLE);
  let o = 0;
  function i(h) {
    return Df(
      h
        .then((y) => ((s = oi(y)), y))
        .catch((y) => {
          throw ((s = Ff(y)), y);
        })
    );
  }
  let s = tt(e.default)
    ? i(e.default)
    : Oz(e.default)
    ? e.default.state === "loading"
      ? i(e.default.contents)
      : e.default
    : oi(Ls(e.default));
  s.contents;
  let a;
  const l = new Map();
  function u(h) {
    return h;
  }
  function c(h, y) {
    const S = y
      .then((E) => {
        var _, w;
        return (
          ((w = (
            (_ = h.getState().nextTree) !== null && _ !== void 0
              ? _
              : h.getState().currentTree
          ).atomValues.get(t)) === null || w === void 0
            ? void 0
            : w.contents) === S && O0(h, g, E),
          E
        );
      })
      .catch((E) => {
        var _, w;
        throw (
          (((w = (
            (_ = h.getState().nextTree) !== null && _ !== void 0
              ? _
              : h.getState().currentTree
          ).atomValues.get(t)) === null || w === void 0
            ? void 0
            : w.contents) === S && zz(h, g, Ff(E)),
          E)
        );
      });
    return S;
  }
  function d(h, y, S) {
    var E;
    o++;
    const _ = () => {
      var P;
      o--,
        (P = l.get(h)) === null || P === void 0 || P.forEach((U) => U()),
        l.delete(h);
    };
    if ((h.getState().knownAtoms.add(t), s.state === "loading")) {
      const P = () => {
        var U;
        ((U = h.getState().nextTree) !== null && U !== void 0
          ? U
          : h.getState().currentTree
        ).atomValues.has(t) || Bz(h, g);
      };
      s.contents.finally(P);
    }
    const w = (E = e.effects) !== null && E !== void 0 ? E : e.effects_UNSTABLE;
    if (w != null) {
      let P = function (D) {
          if (z && D.key === t) {
            const X = F;
            return X instanceof Ur
              ? p(h, y)
              : tt(X)
              ? Df(X.then((A) => (A instanceof Ur ? s.toPromise() : A)))
              : oi(X);
          }
          return jz(h, D);
        },
        U = function (D) {
          return P(D).toPromise();
        },
        B = function (D) {
          var X;
          const A = Lz(
            h,
            (X = h.getState().nextTree) !== null && X !== void 0
              ? X
              : h.getState().currentTree,
            D.key
          );
          return z && D.key === t && !(F instanceof Ur)
            ? { ...A, isSet: !0, loadable: P(D) }
            : A;
        },
        F = So,
        z = !0,
        V = !1,
        K = null;
      const G = (D) => (X) => {
          if (z) {
            const A = P(g),
              H = A.state === "hasValue" ? A.contents : So;
            (F = typeof X == "function" ? X(H) : X),
              tt(F) && (F = F.then((W) => ((K = { effect: D, value: W }), W)));
          } else {
            if (tt(X))
              throw Ie("Setting atoms to async values is not implemented.");
            typeof X != "function" && (K = { effect: D, value: Ls(X) }),
              O0(
                h,
                g,
                typeof X == "function"
                  ? (A) => {
                      const H = Ls(X(A));
                      return (K = { effect: D, value: H }), H;
                    }
                  : Ls(X)
              );
          }
        },
        N = (D) => () => G(D)(So),
        O = (D) => (X) => {
          var A;
          const { release: H } = h.subscribeToTransactions((W) => {
            var se;
            let { currentTree: Y, previousTree: ve } = W.getState();
            ve || (ve = Y);
            const ge =
              (se = Y.atomValues.get(t)) !== null && se !== void 0 ? se : s;
            if (ge.state === "hasValue") {
              var oe, Ae, ye, be;
              const me = ge.contents,
                $e =
                  (oe = ve.atomValues.get(t)) !== null && oe !== void 0
                    ? oe
                    : s,
                je = $e.state === "hasValue" ? $e.contents : So;
              ((Ae = K) === null || Ae === void 0 ? void 0 : Ae.effect) !== D ||
              ((ye = K) === null || ye === void 0 ? void 0 : ye.value) !== me
                ? X(me, je, !Y.atomValues.has(t))
                : ((be = K) === null || be === void 0 ? void 0 : be.effect) ===
                    D && (K = null);
            }
          }, t);
          l.set(h, [...((A = l.get(h)) !== null && A !== void 0 ? A : []), H]);
        };
      for (const D of w)
        try {
          const X = D({
            node: g,
            storeID: h.storeID,
            parentStoreID_UNSTABLE: h.parentStoreID,
            trigger: S,
            setSelf: G(D),
            resetSelf: N(D),
            onSet: O(D),
            getPromise: U,
            getLoadable: P,
            getInfo_UNSTABLE: B,
          });
          if (X != null) {
            var k;
            l.set(h, [
              ...((k = l.get(h)) !== null && k !== void 0 ? k : []),
              X,
            ]);
          }
        } catch (X) {
          (F = X), (V = !0);
        }
      if (((z = !1), !(F instanceof Ur))) {
        var L;
        const D = V ? Ff(F) : tt(F) ? Df(c(h, F)) : oi(Ls(F));
        D.contents,
          y.atomValues.set(t, D),
          (L = h.getState().nextTree) === null ||
            L === void 0 ||
            L.atomValues.set(t, D);
      }
    }
    return _;
  }
  function p(h, y) {
    var S, E;
    return (S = (E = y.atomValues.get(t)) !== null && E !== void 0 ? E : a) !==
      null && S !== void 0
      ? S
      : s;
  }
  function b(h, y) {
    if (y.atomValues.has(t)) return st(y.atomValues.get(t));
    if (y.nonvalidatedAtoms.has(t)) {
      if (a != null) return a;
      if (n == null) return s;
      const S = y.nonvalidatedAtoms.get(t),
        E = n.validator(S, So);
      return (a = E instanceof Ur ? s : oi(E)), a;
    } else return s;
  }
  function m() {
    a = void 0;
  }
  function v(h, y, S) {
    if (y.atomValues.has(t)) {
      const E = st(y.atomValues.get(t));
      if (E.state === "hasValue" && S === E.contents) return new Map();
    } else if (!y.nonvalidatedAtoms.has(t) && S instanceof Ur) return new Map();
    return (a = void 0), new Map().set(t, oi(S));
  }
  function C() {
    return yR(t) !== void 0 && o <= 0;
  }
  const g = Mz({
    key: t,
    nodeType: "atom",
    peek: p,
    get: b,
    set: v,
    init: d,
    invalidate: m,
    shouldDeleteConfigOnRelease: C,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? {
          type: e.persistence_UNSTABLE.type,
          backButton: e.persistence_UNSTABLE.backButton,
        }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return g;
}
function dv(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return Dz(n) ? Wz({ ...t, default: n }) : Vz({ ...t, default: n });
}
function Wz(e) {
  const t = dv({
      ...e,
      default: So,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) =>
                r instanceof Ur
                  ? r
                  : st(e.persistence_UNSTABLE).validator(r, So),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = Zi({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const o = r(t);
        return o instanceof Ur ? e.default : o;
      },
      set: ({ set: r }, o) => r(t, o),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return Fz(n.key, yR(e.key)), n;
}
dv.value = (e) => new gR(e);
var bR = dv;
class Hz {
  constructor(t) {
    var n;
    Ne(this, "_map", void 0),
      Ne(this, "_keyMapper", void 0),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0
          ? n
          : (r) => r);
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var qz = { MapCache: Hz },
  Kz = qz.MapCache,
  Gz = Object.freeze({ __proto__: null, MapCache: Kz });
const { LRUCache: L0 } = pR,
  { MapCache: Qz } = Gz,
  Fl = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function Xz({
  equality: e = Fl.equality,
  eviction: t = Fl.eviction,
  maxSize: n = Fl.maxSize,
} = Fl) {
  const r = Yz(e);
  return Jz(t, n, r);
}
function Yz(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => Fd(t);
  }
  throw Ie(`Unrecognized equality policy ${e}`);
}
function Jz(e, t, n) {
  switch (e) {
    case "keep-all":
      return new Qz({ mapKey: n });
    case "lru":
      return new L0({ mapKey: n, maxSize: st(t) });
    case "most-recent":
      return new L0({ mapKey: n, maxSize: 1 });
  }
  throw Ie(`Unrecognized eviction policy ${e}`);
}
var xR = Xz;
const { setConfigDeletionHandler: Zz } = fn;
function eU(e) {
  var t, n;
  const r = xR({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i, s;
    const a = r.get(o);
    if (a != null) return a;
    const { cachePolicyForParams_UNSTABLE: l, ...u } = e,
      c = "default" in e ? e.default : new Promise(() => {}),
      d = bR({
        ...u,
        key: `${e.key}__${(i = Fd(o)) !== null && i !== void 0 ? i : "void"}`,
        default: typeof c == "function" ? c(o) : c,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function"
            ? e.retainedBy_UNSTABLE(o)
            : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(o)
            : typeof e.effects_UNSTABLE == "function"
            ? e.effects_UNSTABLE(o)
            : (s = e.effects) !== null && s !== void 0
            ? s
            : e.effects_UNSTABLE,
      });
    return (
      r.set(o, d),
      Zz(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var tU = eU;
const { setConfigDeletionHandler: nU } = fn;
let rU = 0;
function oU(e) {
  var t, n;
  const r = xR({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i;
    let s;
    try {
      s = r.get(o);
    } catch (p) {
      throw Ie(`Problem with cache lookup for selector ${e.key}: ${p.message}`);
    }
    if (s != null) return s;
    const a = `${e.key}__selectorFamily/${
        (i = Fd(o, { allowFunctions: !0 })) !== null && i !== void 0
          ? i
          : "void"
      }/${rU++}`,
      l = (p) => e.get(o)(p),
      u = e.cachePolicy_UNSTABLE,
      c =
        typeof e.retainedBy_UNSTABLE == "function"
          ? e.retainedBy_UNSTABLE(o)
          : e.retainedBy_UNSTABLE;
    let d;
    if (e.set != null) {
      const p = e.set;
      d = Zi({
        key: a,
        get: l,
        set: (m, v) => p(o)(m, v),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    } else
      d = Zi({
        key: a,
        get: l,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    return (
      r.set(o, d),
      nU(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var mo = oU;
const iU = mo({
  key: "__constant",
  get: (e) => () => e,
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function sU(e) {
  return iU(e);
}
var aU = sU;
const lU = mo({
  key: "__error",
  get: (e) => () => {
    throw Ie(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function uU(e) {
  return lU(e);
}
var cU = uU;
function dU(e) {
  return e;
}
var fU = dU;
const {
  loadableWithError: SR,
  loadableWithPromise: CR,
  loadableWithValue: RR,
} = Ya;
function Dd(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries())
    try {
      n[o] = e(i);
    } catch (s) {
      r[o] = s;
    }
  return [n, r];
}
function pU(e) {
  return e != null && !tt(e);
}
function jd(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function hh(e, t) {
  return Array.isArray(e)
    ? t
    : Object.getOwnPropertyNames(e).reduce(
        (n, r, o) => ({ ...n, [r]: t[o] }),
        {}
      );
}
function Oi(e, t, n) {
  const r = n.map((o, i) => (o == null ? RR(t[i]) : tt(o) ? CR(o) : SR(o)));
  return hh(e, r);
}
function hU(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const mU = mo({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = jd(e),
          [r, o] = Dd(t, n);
        return Oi(e, r, o);
      },
    dangerouslyAllowMutability: !0,
  }),
  vU = mo({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = jd(e),
          [r, o] = Dd(t, n);
        return o.some((i) => !tt(i))
          ? Oi(e, r, o)
          : new Promise((i) => {
              for (const [s, a] of o.entries())
                tt(a) &&
                  a
                    .then((l) => {
                      (r[s] = l), (o[s] = void 0), i(Oi(e, r, o));
                    })
                    .catch((l) => {
                      (o[s] = l), i(Oi(e, r, o));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  gU = mo({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = jd(e),
          [r, o] = Dd(t, n);
        if (o.every((s) => s == null)) return hh(e, r);
        const i = o.find(pU);
        if (i != null) throw i;
        return Promise.all(o).then((s) => hh(e, hU(r, s)));
      },
    dangerouslyAllowMutability: !0,
  }),
  yU = mo({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = jd(e),
          [r, o] = Dd(t, n);
        return o.every((i) => !tt(i))
          ? Oi(e, r, o)
          : Promise.all(
              o.map((i, s) =>
                tt(i)
                  ? i
                      .then((a) => {
                        (r[s] = a), (o[s] = void 0);
                      })
                      .catch((a) => {
                        (r[s] = void 0), (o[s] = a);
                      })
                  : null
              )
            ).then(() => Oi(e, r, o));
      },
    dangerouslyAllowMutability: !0,
  }),
  bU = mo({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return Zi.value(RR(t(e)));
        } catch (n) {
          return Zi.value(tt(n) ? CR(n) : SR(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var xU = {
  waitForNone: mU,
  waitForAny: vU,
  waitForAll: gU,
  waitForAllSettled: yU,
  noWait: bU,
};
const { RecoilLoadable: SU } = Ya,
  { DefaultValue: CU } = fn,
  { RecoilRoot: RU, useRecoilStoreID: wU } = Lr,
  { isRecoilValue: EU } = Xi,
  { retentionZone: _U } = _d,
  { freshSnapshot: kU } = Nd,
  {
    useRecoilState: TU,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: AU,
    useRecoilStateLoadable: PU,
    useRecoilValue: $U,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: NU,
    useRecoilValueLoadable: IU,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: OU,
    useResetRecoilState: LU,
    useSetRecoilState: MU,
  } = qB,
  {
    useGotoRecoilSnapshot: FU,
    useRecoilSnapshot: DU,
    useRecoilTransactionObserver: jU,
  } = sR,
  { useRecoilCallback: BU } = cR,
  {
    noWait: zU,
    waitForAll: UU,
    waitForAllSettled: VU,
    waitForAny: WU,
    waitForNone: HU,
  } = xU;
var fv = {
    DefaultValue: CU,
    isRecoilValue: EU,
    RecoilLoadable: SU,
    RecoilEnv: ls,
    RecoilRoot: RU,
    useRecoilStoreID: wU,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: b3,
    atom: bR,
    selector: Zi,
    atomFamily: tU,
    selectorFamily: mo,
    constSelector: aU,
    errorSelector: cU,
    readOnlySelector: fU,
    noWait: zU,
    waitForNone: HU,
    waitForAny: WU,
    waitForAll: UU,
    waitForAllSettled: VU,
    useRecoilValue: $U,
    useRecoilValueLoadable: IU,
    useRecoilState: TU,
    useRecoilStateLoadable: PU,
    useSetRecoilState: MU,
    useResetRecoilState: LU,
    useGetRecoilValueInfo_UNSTABLE: p3,
    useRecoilRefresher_UNSTABLE: G3,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: OU,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: NU,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: AU,
    useRecoilCallback: BU,
    useRecoilTransaction_UNSTABLE: Z3,
    useGotoRecoilSnapshot: FU,
    useRecoilSnapshot: DU,
    useRecoilTransactionObserver_UNSTABLE: jU,
    snapshot_UNSTABLE: kU,
    useRetain: sv,
    retentionZone: _U,
  },
  qU = fv.RecoilRoot,
  cs = fv.atom,
  St = fv.useRecoilState;
function wR(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: KU } = Object.prototype,
  { getPrototypeOf: pv } = Object,
  Bd = ((e) => (t) => {
    const n = KU.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  yr = (e) => ((e = e.toLowerCase()), (t) => Bd(t) === e),
  zd = (e) => (t) => typeof t === e,
  { isArray: ds } = Array,
  Da = zd("undefined");
function GU(e) {
  return (
    e !== null &&
    !Da(e) &&
    e.constructor !== null &&
    !Da(e.constructor) &&
    In(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ER = yr("ArrayBuffer");
function QU(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ER(e.buffer)),
    t
  );
}
const XU = zd("string"),
  In = zd("function"),
  _R = zd("number"),
  Ud = (e) => e !== null && typeof e == "object",
  YU = (e) => e === !0 || e === !1,
  au = (e) => {
    if (Bd(e) !== "object") return !1;
    const t = pv(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  JU = yr("Date"),
  ZU = yr("File"),
  eV = yr("Blob"),
  tV = yr("FileList"),
  nV = (e) => Ud(e) && In(e.pipe),
  rV = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (In(e.append) &&
          ((t = Bd(e)) === "formdata" ||
            (t === "object" &&
              In(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  oV = yr("URLSearchParams"),
  iV = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function rl(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), ds(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function kR(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const TR =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  AR = (e) => !Da(e) && e !== TR;
function mh() {
  const { caseless: e } = (AR(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && kR(t, o)) || o;
      au(t[i]) && au(r)
        ? (t[i] = mh(t[i], r))
        : au(r)
        ? (t[i] = mh({}, r))
        : ds(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && rl(arguments[r], n);
  return t;
}
const sV = (e, t, n, { allOwnKeys: r } = {}) => (
    rl(
      t,
      (o, i) => {
        n && In(o) ? (e[i] = wR(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  aV = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  lV = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  uV = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && pv(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  cV = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  dV = (e) => {
    if (!e) return null;
    if (ds(e)) return e;
    let t = e.length;
    if (!_R(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  fV = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && pv(Uint8Array)),
  pV = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  hV = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  mV = yr("HTMLFormElement"),
  vV = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  M0 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  gV = yr("RegExp"),
  PR = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    rl(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  yV = (e) => {
    PR(e, (t, n) => {
      if (In(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (In(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  bV = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return ds(e) ? r(e) : r(String(e).split(t)), n;
  },
  xV = () => {},
  SV = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  jf = "abcdefghijklmnopqrstuvwxyz",
  F0 = "0123456789",
  $R = { DIGIT: F0, ALPHA: jf, ALPHA_DIGIT: jf + jf.toUpperCase() + F0 },
  CV = (e = 16, t = $R.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function RV(e) {
  return !!(
    e &&
    In(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const wV = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Ud(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = ds(r) ? [] : {};
            return (
              rl(r, (s, a) => {
                const l = n(s, o + 1);
                !Da(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  EV = yr("AsyncFunction"),
  _V = (e) => e && (Ud(e) || In(e)) && In(e.then) && In(e.catch),
  q = {
    isArray: ds,
    isArrayBuffer: ER,
    isBuffer: GU,
    isFormData: rV,
    isArrayBufferView: QU,
    isString: XU,
    isNumber: _R,
    isBoolean: YU,
    isObject: Ud,
    isPlainObject: au,
    isUndefined: Da,
    isDate: JU,
    isFile: ZU,
    isBlob: eV,
    isRegExp: gV,
    isFunction: In,
    isStream: nV,
    isURLSearchParams: oV,
    isTypedArray: fV,
    isFileList: tV,
    forEach: rl,
    merge: mh,
    extend: sV,
    trim: iV,
    stripBOM: aV,
    inherits: lV,
    toFlatObject: uV,
    kindOf: Bd,
    kindOfTest: yr,
    endsWith: cV,
    toArray: dV,
    forEachEntry: pV,
    matchAll: hV,
    isHTMLForm: mV,
    hasOwnProperty: M0,
    hasOwnProp: M0,
    reduceDescriptors: PR,
    freezeMethods: yV,
    toObjectSet: bV,
    toCamelCase: vV,
    noop: xV,
    toFiniteNumber: SV,
    findKey: kR,
    global: TR,
    isContextDefined: AR,
    ALPHABET: $R,
    generateString: CV,
    isSpecCompliantForm: RV,
    toJSONObject: wV,
    isAsyncFn: EV,
    isThenable: _V,
  };
function De(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
q.inherits(De, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: q.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const NR = De.prototype,
  IR = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  IR[e] = { value: e };
});
Object.defineProperties(De, IR);
Object.defineProperty(NR, "isAxiosError", { value: !0 });
De.from = (e, t, n, r, o, i) => {
  const s = Object.create(NR);
  return (
    q.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    De.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const kV = null;
function vh(e) {
  return q.isPlainObject(e) || q.isArray(e);
}
function OR(e) {
  return q.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function D0(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = OR(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function TV(e) {
  return q.isArray(e) && !e.some(vh);
}
const AV = q.toFlatObject(q, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Vd(e, t, n) {
  if (!q.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = q.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, C) {
        return !q.isUndefined(C[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && q.isSpecCompliantForm(t);
  if (!q.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (q.isDate(m)) return m.toISOString();
    if (!l && q.isBlob(m))
      throw new De("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(m) || q.isTypedArray(m)
      ? l && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, v, C) {
    let g = m;
    if (m && !C && typeof m == "object") {
      if (q.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (q.isArray(m) && TV(m)) ||
        ((q.isFileList(m) || q.endsWith(v, "[]")) && (g = q.toArray(m)))
      )
        return (
          (v = OR(v)),
          g.forEach(function (y, S) {
            !(q.isUndefined(y) || y === null) &&
              t.append(
                s === !0 ? D0([v], S, i) : s === null ? v : v + "[]",
                u(y)
              );
          }),
          !1
        );
    }
    return vh(m) ? !0 : (t.append(D0(C, v, i), u(m)), !1);
  }
  const d = [],
    p = Object.assign(AV, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: vh,
    });
  function b(m, v) {
    if (!q.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(m),
        q.forEach(m, function (g, h) {
          (!(q.isUndefined(g) || g === null) &&
            o.call(t, g, q.isString(h) ? h.trim() : h, v, p)) === !0 &&
            b(g, v ? v.concat(h) : [h]);
        }),
        d.pop();
    }
  }
  if (!q.isObject(e)) throw new TypeError("data must be an object");
  return b(e), t;
}
function j0(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function hv(e, t) {
  (this._pairs = []), e && Vd(e, this, t);
}
const LR = hv.prototype;
LR.append = function (t, n) {
  this._pairs.push([t, n]);
};
LR.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, j0);
      }
    : j0;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function PV(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function MR(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || PV,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = q.isURLSearchParams(t) ? t.toString() : new hv(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class B0 {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    q.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const FR = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  $V = typeof URLSearchParams < "u" ? URLSearchParams : hv,
  NV = typeof FormData < "u" ? FormData : null,
  IV = typeof Blob < "u" ? Blob : null,
  OV = {
    isBrowser: !0,
    classes: { URLSearchParams: $V, FormData: NV, Blob: IV },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  DR = typeof window < "u" && typeof document < "u",
  LV = ((e) => DR && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  MV =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  FV = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: DR,
        hasStandardBrowserEnv: LV,
        hasStandardBrowserWebWorkerEnv: MV,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ur = { ...FV, ...OV };
function DV(e, t) {
  return Vd(
    e,
    new ur.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return ur.isNode && q.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function jV(e) {
  return q
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function BV(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function jR(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && q.isArray(o) ? o.length : s),
      l
        ? (q.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !q.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && q.isArray(o[s]) && (o[s] = BV(o[s])),
          !a)
    );
  }
  if (q.isFormData(e) && q.isFunction(e.entries)) {
    const n = {};
    return (
      q.forEachEntry(e, (r, o) => {
        t(jV(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function zV(e, t, n) {
  if (q.isString(e))
    try {
      return (t || JSON.parse)(e), q.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const mv = {
  transitional: FR,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = q.isObject(t);
      if ((i && q.isHTMLForm(t) && (t = new FormData(t)), q.isFormData(t)))
        return o ? JSON.stringify(jR(t)) : t;
      if (
        q.isArrayBuffer(t) ||
        q.isBuffer(t) ||
        q.isStream(t) ||
        q.isFile(t) ||
        q.isBlob(t)
      )
        return t;
      if (q.isArrayBufferView(t)) return t.buffer;
      if (q.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return DV(t, this.formSerializer).toString();
        if ((a = q.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Vd(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), zV(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || mv.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && q.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? De.from(a, De.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ur.classes.FormData, Blob: ur.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
q.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  mv.headers[e] = {};
});
const vv = mv,
  UV = q.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  VV = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && UV[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  z0 = Symbol("internals");
function Ms(e) {
  return e && String(e).trim().toLowerCase();
}
function lu(e) {
  return e === !1 || e == null ? e : q.isArray(e) ? e.map(lu) : String(e);
}
function WV(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const HV = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bf(e, t, n, r, o) {
  if (q.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!q.isString(t))) {
    if (q.isString(r)) return t.indexOf(r) !== -1;
    if (q.isRegExp(r)) return r.test(t);
  }
}
function qV(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function KV(e, t) {
  const n = q.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class Wd {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = Ms(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = q.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = lu(a));
    }
    const s = (a, l) => q.forEach(a, (u, c) => i(u, c, l));
    return (
      q.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : q.isString(t) && (t = t.trim()) && !HV(t)
        ? s(VV(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Ms(t)), t)) {
      const r = q.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return WV(o);
        if (q.isFunction(n)) return n.call(this, o, r);
        if (q.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ms(t)), t)) {
      const r = q.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Bf(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = Ms(s)), s)) {
        const a = q.findKey(r, s);
        a && (!n || Bf(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return q.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Bf(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      q.forEach(this, (o, i) => {
        const s = q.findKey(r, i);
        if (s) {
          (n[s] = lu(o)), delete n[i];
          return;
        }
        const a = t ? qV(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = lu(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      q.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && q.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[z0] = this[z0] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = Ms(s);
      r[a] || (KV(o, s), (r[a] = !0));
    }
    return q.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Wd.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
q.reduceDescriptors(Wd.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
q.freezeMethods(Wd);
const kr = Wd;
function zf(e, t) {
  const n = this || vv,
    r = t || n,
    o = kr.from(r.headers);
  let i = r.data;
  return (
    q.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function BR(e) {
  return !!(e && e.__CANCEL__);
}
function ol(e, t, n) {
  De.call(this, e ?? "canceled", De.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
q.inherits(ol, De, { __CANCEL__: !0 });
function GV(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new De(
          "Request failed with status code " + n.status,
          [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const QV = ur.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const s = [e + "=" + encodeURIComponent(t)];
        q.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
          q.isString(r) && s.push("path=" + r),
          q.isString(o) && s.push("domain=" + o),
          i === !0 && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function XV(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function YV(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function zR(e, t) {
  return e && !XV(t) ? YV(e, t) : t;
}
const JV = ur.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const a = q.isString(s) ? o(s) : s;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function ZV(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function e6(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let d = i,
        p = 0;
      for (; d !== o; ) (p += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const b = c && u - c;
      return b ? Math.round((p * 1e3) / b) : void 0;
    }
  );
}
function U0(e, t) {
  let n = 0;
  const r = e6(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      a = i - n,
      l = r(a),
      u = i <= s;
    n = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && u ? (s - i) / l : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const t6 = typeof XMLHttpRequest < "u",
  n6 =
    t6 &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = kr.from(e.headers).normalize();
        let { responseType: s, withXSRFToken: a } = e,
          l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let c;
        if (q.isFormData(o)) {
          if (ur.hasStandardBrowserEnv || ur.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((c = i.getContentType()) !== !1) {
            const [v, ...C] = c
              ? c
                  .split(";")
                  .map((g) => g.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([v || "multipart/form-data", ...C].join("; "));
          }
        }
        let d = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            C = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(v + ":" + C));
        }
        const p = zR(e.baseURL, e.url);
        d.open(e.method.toUpperCase(), MR(p, e.params, e.paramsSerializer), !0),
          (d.timeout = e.timeout);
        function b() {
          if (!d) return;
          const v = kr.from(
              "getAllResponseHeaders" in d && d.getAllResponseHeaders()
            ),
            g = {
              data:
                !s || s === "text" || s === "json"
                  ? d.responseText
                  : d.response,
              status: d.status,
              statusText: d.statusText,
              headers: v,
              config: e,
              request: d,
            };
          GV(
            function (y) {
              n(y), u();
            },
            function (y) {
              r(y), u();
            },
            g
          ),
            (d = null);
        }
        if (
          ("onloadend" in d
            ? (d.onloadend = b)
            : (d.onreadystatechange = function () {
                !d ||
                  d.readyState !== 4 ||
                  (d.status === 0 &&
                    !(d.responseURL && d.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(b);
              }),
          (d.onabort = function () {
            d &&
              (r(new De("Request aborted", De.ECONNABORTED, e, d)), (d = null));
          }),
          (d.onerror = function () {
            r(new De("Network Error", De.ERR_NETWORK, e, d)), (d = null);
          }),
          (d.ontimeout = function () {
            let C = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const g = e.transitional || FR;
            e.timeoutErrorMessage && (C = e.timeoutErrorMessage),
              r(
                new De(
                  C,
                  g.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
                  e,
                  d
                )
              ),
              (d = null);
          }),
          ur.hasStandardBrowserEnv &&
            (a && q.isFunction(a) && (a = a(e)), a || (a !== !1 && JV(p))))
        ) {
          const v =
            e.xsrfHeaderName && e.xsrfCookieName && QV.read(e.xsrfCookieName);
          v && i.set(e.xsrfHeaderName, v);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in d &&
            q.forEach(i.toJSON(), function (C, g) {
              d.setRequestHeader(g, C);
            }),
          q.isUndefined(e.withCredentials) ||
            (d.withCredentials = !!e.withCredentials),
          s && s !== "json" && (d.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            d.addEventListener("progress", U0(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            d.upload &&
            d.upload.addEventListener("progress", U0(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (v) => {
              d &&
                (r(!v || v.type ? new ol(null, e, d) : v),
                d.abort(),
                (d = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const m = ZV(p);
        if (m && ur.protocols.indexOf(m) === -1) {
          r(new De("Unsupported protocol " + m + ":", De.ERR_BAD_REQUEST, e));
          return;
        }
        d.send(o || null);
      });
    },
  gh = { http: kV, xhr: n6 };
q.forEach(gh, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const V0 = (e) => `- ${e}`,
  r6 = (e) => q.isFunction(e) || e === null || e === !1,
  UR = {
    getAdapter: (e) => {
      e = q.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !r6(n) && ((r = gh[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new De(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(V0).join(`
`)
            : " " + V0(i[0])
          : "as no adapter specified";
        throw new De(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: gh,
  };
function Uf(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ol(null, e);
}
function W0(e) {
  return (
    Uf(e),
    (e.headers = kr.from(e.headers)),
    (e.data = zf.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    UR.getAdapter(e.adapter || vv.adapter)(e).then(
      function (r) {
        return (
          Uf(e),
          (r.data = zf.call(e, e.transformResponse, r)),
          (r.headers = kr.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          BR(r) ||
            (Uf(e),
            r &&
              r.response &&
              ((r.response.data = zf.call(e, e.transformResponse, r.response)),
              (r.response.headers = kr.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const H0 = (e) => (e instanceof kr ? e.toJSON() : e);
function es(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return q.isPlainObject(u) && q.isPlainObject(c)
      ? q.merge.call({ caseless: d }, u, c)
      : q.isPlainObject(c)
      ? q.merge({}, c)
      : q.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if (q.isUndefined(c)) {
      if (!q.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!q.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (q.isUndefined(c)) {
      if (!q.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c) => o(H0(u), H0(c), !0),
  };
  return (
    q.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || o,
        p = d(e[c], t[c], c);
      (q.isUndefined(p) && d !== a) || (n[c] = p);
    }),
    n
  );
}
const VR = "1.6.7",
  gv = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    gv[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const q0 = {};
gv.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      VR +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new De(
        o(s, " has been removed" + (n ? " in " + n : "")),
        De.ERR_DEPRECATED
      );
    return (
      n &&
        !q0[s] &&
        ((q0[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function o6(e, t, n) {
  if (typeof e != "object")
    throw new De("options must be an object", De.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new De("option " + i + " must be " + l, De.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new De("Unknown option " + i, De.ERR_BAD_OPTION);
  }
}
const yh = { assertOptions: o6, validators: gv },
  Dr = yh.validators;
class tc {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new B0(), response: new B0() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? i &&
            !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + i)
          : (r.stack = i);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = es(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      yh.assertOptions(
        r,
        {
          silentJSONParsing: Dr.transitional(Dr.boolean),
          forcedJSONParsing: Dr.transitional(Dr.boolean),
          clarifyTimeoutError: Dr.transitional(Dr.boolean),
        },
        !1
      ),
      o != null &&
        (q.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : yh.assertOptions(
              o,
              { encode: Dr.function, serialize: Dr.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && q.merge(i.common, i[n.method]);
    i &&
      q.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete i[m];
        }
      ),
      (n.headers = kr.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      d = 0,
      p;
    if (!l) {
      const m = [W0.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, u),
          p = m.length,
          c = Promise.resolve(n);
        d < p;

      )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    p = a.length;
    let b = n;
    for (d = 0; d < p; ) {
      const m = a[d++],
        v = a[d++];
      try {
        b = m(b);
      } catch (C) {
        v.call(this, C);
        break;
      }
    }
    try {
      c = W0.call(this, b);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = u.length; d < p; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = es(this.defaults, t);
    const n = zR(t.baseURL, t.url);
    return MR(n, t.params, t.paramsSerializer);
  }
}
q.forEach(["delete", "get", "head", "options"], function (t) {
  tc.prototype[t] = function (n, r) {
    return this.request(
      es(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
q.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        es(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (tc.prototype[t] = n()), (tc.prototype[t + "Form"] = n(!0));
});
const uu = tc;
class yv {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new ol(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new yv(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const i6 = yv;
function s6(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function a6(e) {
  return q.isObject(e) && e.isAxiosError === !0;
}
const bh = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(bh).forEach(([e, t]) => {
  bh[t] = e;
});
const l6 = bh;
function WR(e) {
  const t = new uu(e),
    n = wR(uu.prototype.request, t);
  return (
    q.extend(n, uu.prototype, t, { allOwnKeys: !0 }),
    q.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return WR(es(e, o));
    }),
    n
  );
}
const Ct = WR(vv);
Ct.Axios = uu;
Ct.CanceledError = ol;
Ct.CancelToken = i6;
Ct.isCancel = BR;
Ct.VERSION = VR;
Ct.toFormData = Vd;
Ct.AxiosError = De;
Ct.Cancel = Ct.CanceledError;
Ct.all = function (t) {
  return Promise.all(t);
};
Ct.spread = s6;
Ct.isAxiosError = a6;
Ct.mergeConfig = es;
Ct.AxiosHeaders = kr;
Ct.formToJSON = (e) => jR(q.isHTMLForm(e) ? new FormData(e) : e);
Ct.getAdapter = UR.getAdapter;
Ct.HttpStatusCode = l6;
Ct.default = Ct;
const Vt = Ct.create({
  baseURL: "/services/japps",
  headers: { "Content-Type": "application/json" },
});
Vt.interceptors.response.use(
  (e) => e,
  (e) => {
    const t = e.response.status;
    (e.response.status === 401 || t === 403) &&
      (window.location.href = "/services/japps/jhub-login");
  }
);
const u6 = () => window.jhdata,
  HR = (e, t) => {
    var r;
    const n = [];
    for (const o in e)
      if (Object.hasOwnProperty.call(e, o)) {
        const i = e[o];
        i.display === !0 &&
          i.info.name &&
          n.push({
            name: i.info.name,
            url: (r = i.info.url) == null ? void 0 : r.replace("[USER]", t),
            external: i.info.external,
            pinned: yF.includes(i.info.name),
          });
      }
    return n;
  },
  c6 = (e, t) => {
    const n = [],
      r = [];
    if (t.toLowerCase() === "shared") n.push(...e.shared_apps);
    else {
      n.push(...e.user_apps);
      const o = n.find((i) => {
        var s;
        return i.name === "" && !((s = i.user_options) != null && s.jhub_app);
      });
      o &&
        r.push({
          id: "",
          name: "JupyterLab",
          description: "This is your default JupyterLab server.",
          framework: "JupyterLab",
          url: o.url,
          thumbnail: gF,
          ready: o.ready,
          public: !1,
        });
    }
    return (
      n.forEach((o) => {
        var i;
        if ((i = o.user_options) != null && i.jhub_app) {
          const s = o.user_options;
          r.push({
            id: s.name,
            name: s.display_name,
            description: s.description,
            framework: d6(s.framework),
            url: o.url,
            thumbnail: s.thumbnail,
            username: o.username,
            ready: o.ready,
            public: s.public,
          });
        }
      }),
      r
    );
  },
  d6 = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  f6 = () => {
    var e;
    if ((e = window.theme) != null && e.logo) return window.theme.logo;
  },
  ar = (e) => {
    document.location.href = e;
  };
var il = (e) => e.type === "checkbox",
  wi = (e) => e instanceof Date,
  Gt = (e) => e == null;
const qR = (e) => typeof e == "object";
var kt = (e) => !Gt(e) && !Array.isArray(e) && qR(e) && !wi(e),
  KR = (e) =>
    kt(e) && e.target ? (il(e.target) ? e.target.checked : e.target.value) : e,
  p6 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  GR = (e, t) => e.has(p6(t)),
  h6 = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return kt(t) && t.hasOwnProperty("isPrototypeOf");
  },
  bv =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function en(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(bv && (e instanceof Blob || e instanceof FileList)) &&
    (n || kt(e))
  )
    if (((t = n ? [] : {}), !n && !h6(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = en(e[r]));
  else return e;
  return t;
}
var sl = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  ht = (e) => e === void 0,
  ae = (e, t, n) => {
    if (!t || !kt(e)) return n;
    const r = sl(t.split(/[,[\].]+?/)).reduce((o, i) => (Gt(o) ? o : o[i]), e);
    return ht(r) || r === e ? (ht(e[t]) ? n : e[t]) : r;
  },
  Gn = (e) => typeof e == "boolean";
const nc = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  Qn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  br = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  m6 = he.createContext(null),
  xv = () => he.useContext(m6);
var QR = (e, t, n, r = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(o, i, {
        get: () => {
          const s = i;
          return (
            t._proxyFormState[s] !== Qn.all &&
              (t._proxyFormState[s] = !r || Qn.all),
            n && (n[s] = !0),
            e[s]
          );
        },
      });
    return o;
  },
  En = (e) => kt(e) && !Object.keys(e).length,
  XR = (e, t, n, r) => {
    n(e);
    const { name: o, ...i } = e;
    return (
      En(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((s) => t[s] === (!r || Qn.all))
    );
  },
  cu = (e) => (Array.isArray(e) ? e : [e]),
  YR = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    cu(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Sv(e) {
  const t = he.useRef(e);
  (t.current = e),
    he.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function v6(e) {
  const t = xv(),
    { control: n = t.control, disabled: r, name: o, exact: i } = e || {},
    [s, a] = he.useState(n._formState),
    l = he.useRef(!0),
    u = he.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    c = he.useRef(o);
  return (
    (c.current = o),
    Sv({
      disabled: r,
      next: (d) =>
        l.current &&
        YR(c.current, d.name, i) &&
        XR(d, u.current, n._updateFormState) &&
        a({ ...n._formState, ...d }),
      subject: n._subjects.state,
    }),
    he.useEffect(
      () => (
        (l.current = !0),
        u.current.isValid && n._updateValid(!0),
        () => {
          l.current = !1;
        }
      ),
      [n]
    ),
    QR(s, n, u.current, !1)
  );
}
var cr = (e) => typeof e == "string",
  JR = (e, t, n, r, o) =>
    cr(e)
      ? (r && t.watch.add(e), ae(n, e, o))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), ae(n, i)))
      : (r && (t.watchAll = !0), n);
function g6(e) {
  const t = xv(),
    {
      control: n = t.control,
      name: r,
      defaultValue: o,
      disabled: i,
      exact: s,
    } = e || {},
    a = he.useRef(r);
  (a.current = r),
    Sv({
      disabled: i,
      subject: n._subjects.values,
      next: (c) => {
        YR(a.current, c.name, s) &&
          u(en(JR(a.current, n._names, c.values || n._formValues, !1, o)));
      },
    });
  const [l, u] = he.useState(n._getWatch(r, o));
  return he.useEffect(() => n._removeUnmounted()), l;
}
var Cv = (e) => /^\w*$/.test(e),
  ZR = (e) => sl(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Xe = (e, t, n) => {
    let r = -1;
    const o = Cv(t) ? [t] : ZR(t),
      i = o.length,
      s = i - 1;
    for (; ++r < i; ) {
      const a = o[r];
      let l = n;
      if (r !== s) {
        const u = e[a];
        l = kt(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
      }
      (e[a] = l), (e = e[a]);
    }
    return e;
  };
function y6(e) {
  const t = xv(),
    { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e,
    s = GR(o._names.array, n),
    a = g6({
      control: o,
      name: n,
      defaultValue: ae(
        o._formValues,
        n,
        ae(o._defaultValues, n, e.defaultValue)
      ),
      exact: !0,
    }),
    l = v6({ control: o, name: n }),
    u = he.useRef(
      o.register(n, {
        ...e.rules,
        value: a,
        ...(Gn(e.disabled) ? { disabled: e.disabled } : {}),
      })
    );
  return (
    he.useEffect(() => {
      const c = o._options.shouldUnregister || i,
        d = (p, b) => {
          const m = ae(o._fields, p);
          m && (m._f.mount = b);
        };
      if ((d(n, !0), c)) {
        const p = en(ae(o._options.defaultValues, n));
        Xe(o._defaultValues, n, p),
          ht(ae(o._formValues, n)) && Xe(o._formValues, n, p);
      }
      return () => {
        (s ? c && !o._state.action : c) ? o.unregister(n) : d(n, !1);
      };
    }, [n, o, s, i]),
    he.useEffect(() => {
      ae(o._fields, n) &&
        o._updateDisabledField({
          disabled: r,
          fields: o._fields,
          name: n,
          value: ae(o._fields, n)._f.value,
        });
    }, [r, n, o]),
    {
      field: {
        name: n,
        value: a,
        ...(Gn(r) || l.disabled ? { disabled: l.disabled || r } : {}),
        onChange: he.useCallback(
          (c) =>
            u.current.onChange({
              target: { value: KR(c), name: n },
              type: nc.CHANGE,
            }),
          [n]
        ),
        onBlur: he.useCallback(
          () =>
            u.current.onBlur({
              target: { value: ae(o._formValues, n), name: n },
              type: nc.BLUR,
            }),
          [n, o]
        ),
        ref: (c) => {
          const d = ae(o._fields, n);
          d &&
            c &&
            (d._f.ref = {
              focus: () => c.focus(),
              select: () => c.select(),
              setCustomValidity: (p) => c.setCustomValidity(p),
              reportValidity: () => c.reportValidity(),
            });
        },
      },
      formState: l,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!ae(l.errors, n) },
          isDirty: { enumerable: !0, get: () => !!ae(l.dirtyFields, n) },
          isTouched: { enumerable: !0, get: () => !!ae(l.touchedFields, n) },
          isValidating: {
            enumerable: !0,
            get: () => !!ae(l.validatingFields, n),
          },
          error: { enumerable: !0, get: () => ae(l.errors, n) },
        }
      ),
    }
  );
}
const xr = (e) => e.render(y6(e));
var b6 = (e, t, n, r, o) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: o || !0 },
        }
      : {},
  K0 = (e) => ({
    isOnSubmit: !e || e === Qn.onSubmit,
    isOnBlur: e === Qn.onBlur,
    isOnChange: e === Qn.onChange,
    isOnAll: e === Qn.all,
    isOnTouch: e === Qn.onTouched,
  }),
  G0 = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const da = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = ae(e, o);
    if (i) {
      const { _f: s, ...a } = i;
      if (s) {
        if (s.refs && s.refs[0] && t(s.refs[0], o) && !r) break;
        if (s.ref && t(s.ref, s.name) && !r) break;
        da(a, t);
      } else kt(a) && da(a, t);
    }
  }
};
var x6 = (e, t, n) => {
    const r = sl(ae(e, n));
    return Xe(r, "root", t[n]), Xe(e, n, r), e;
  },
  Rv = (e) => e.type === "file",
  Qr = (e) => typeof e == "function",
  rc = (e) => {
    if (!bv) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  du = (e) => cr(e),
  wv = (e) => e.type === "radio",
  oc = (e) => e instanceof RegExp;
const Q0 = { value: !1, isValid: !1 },
  X0 = { value: !0, isValid: !0 };
var ew = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !ht(e[0].attributes.value)
        ? ht(e[0].value) || e[0].value === ""
          ? X0
          : { value: e[0].value, isValid: !0 }
        : X0
      : Q0;
  }
  return Q0;
};
const Y0 = { isValid: !1, value: null };
var tw = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Y0
      )
    : Y0;
function J0(e, t, n = "validate") {
  if (du(e) || (Array.isArray(e) && e.every(du)) || (Gn(e) && !e))
    return { type: n, message: du(e) ? e : "", ref: t };
}
var ii = (e) => (kt(e) && !oc(e) ? e : { value: e, message: "" }),
  Z0 = async (e, t, n, r, o) => {
    const {
        ref: i,
        refs: s,
        required: a,
        maxLength: l,
        minLength: u,
        min: c,
        max: d,
        pattern: p,
        validate: b,
        name: m,
        valueAsNumber: v,
        mount: C,
        disabled: g,
      } = e._f,
      h = ae(t, m);
    if (!C || g) return {};
    const y = s ? s[0] : i,
      S = (B) => {
        r &&
          y.reportValidity &&
          (y.setCustomValidity(Gn(B) ? "" : B || ""), y.reportValidity());
      },
      E = {},
      _ = wv(i),
      w = il(i),
      k = _ || w,
      L =
        ((v || Rv(i)) && ht(i.value) && ht(h)) ||
        (rc(i) && i.value === "") ||
        h === "" ||
        (Array.isArray(h) && !h.length),
      P = b6.bind(null, m, n, E),
      U = (B, F, z, V = br.maxLength, K = br.minLength) => {
        const G = B ? F : z;
        E[m] = { type: B ? V : K, message: G, ref: i, ...P(B ? V : K, G) };
      };
    if (
      o
        ? !Array.isArray(h) || !h.length
        : a &&
          ((!k && (L || Gt(h))) ||
            (Gn(h) && !h) ||
            (w && !ew(s).isValid) ||
            (_ && !tw(s).isValid))
    ) {
      const { value: B, message: F } = du(a)
        ? { value: !!a, message: a }
        : ii(a);
      if (
        B &&
        ((E[m] = {
          type: br.required,
          message: F,
          ref: y,
          ...P(br.required, F),
        }),
        !n)
      )
        return S(F), E;
    }
    if (!L && (!Gt(c) || !Gt(d))) {
      let B, F;
      const z = ii(d),
        V = ii(c);
      if (!Gt(h) && !isNaN(h)) {
        const K = i.valueAsNumber || (h && +h);
        Gt(z.value) || (B = K > z.value), Gt(V.value) || (F = K < V.value);
      } else {
        const K = i.valueAsDate || new Date(h),
          G = (D) => new Date(new Date().toDateString() + " " + D),
          N = i.type == "time",
          O = i.type == "week";
        cr(z.value) &&
          h &&
          (B = N ? G(h) > G(z.value) : O ? h > z.value : K > new Date(z.value)),
          cr(V.value) &&
            h &&
            (F = N
              ? G(h) < G(V.value)
              : O
              ? h < V.value
              : K < new Date(V.value));
      }
      if ((B || F) && (U(!!B, z.message, V.message, br.max, br.min), !n))
        return S(E[m].message), E;
    }
    if ((l || u) && !L && (cr(h) || (o && Array.isArray(h)))) {
      const B = ii(l),
        F = ii(u),
        z = !Gt(B.value) && h.length > +B.value,
        V = !Gt(F.value) && h.length < +F.value;
      if ((z || V) && (U(z, B.message, F.message), !n))
        return S(E[m].message), E;
    }
    if (p && !L && cr(h)) {
      const { value: B, message: F } = ii(p);
      if (
        oc(B) &&
        !h.match(B) &&
        ((E[m] = { type: br.pattern, message: F, ref: i, ...P(br.pattern, F) }),
        !n)
      )
        return S(F), E;
    }
    if (b) {
      if (Qr(b)) {
        const B = await b(h, t),
          F = J0(B, y);
        if (F && ((E[m] = { ...F, ...P(br.validate, F.message) }), !n))
          return S(F.message), E;
      } else if (kt(b)) {
        let B = {};
        for (const F in b) {
          if (!En(B) && !n) break;
          const z = J0(await b[F](h, t), y, F);
          z &&
            ((B = { ...z, ...P(F, z.message) }), S(z.message), n && (E[m] = B));
        }
        if (!En(B) && ((E[m] = { ref: y, ...B }), !n)) return E;
      }
    }
    return S(!0), E;
  };
function S6(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = ht(e) ? r++ : e[t[r++]];
  return e;
}
function C6(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !ht(e[t])) return !1;
  return !0;
}
function Pt(e, t) {
  const n = Array.isArray(t) ? t : Cv(t) ? [t] : ZR(t),
    r = n.length === 1 ? e : S6(e, n),
    o = n.length - 1,
    i = n[o];
  return (
    r && delete r[i],
    o !== 0 &&
      ((kt(r) && En(r)) || (Array.isArray(r) && C6(r))) &&
      Pt(e, n.slice(0, -1)),
    e
  );
}
var Vf = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const i of e) i.next && i.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  ic = (e) => Gt(e) || !qR(e);
function Ao(e, t) {
  if (ic(e) || ic(t)) return e === t;
  if (wi(e) && wi(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o)) return !1;
    if (o !== "ref") {
      const s = t[o];
      if (
        (wi(i) && wi(s)) ||
        (kt(i) && kt(s)) ||
        (Array.isArray(i) && Array.isArray(s))
          ? !Ao(i, s)
          : i !== s
      )
        return !1;
    }
  }
  return !0;
}
var nw = (e) => e.type === "select-multiple",
  R6 = (e) => wv(e) || il(e),
  Wf = (e) => rc(e) && e.isConnected,
  rw = (e) => {
    for (const t in e) if (Qr(e[t])) return !0;
    return !1;
  };
function sc(e, t = {}) {
  const n = Array.isArray(e);
  if (kt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (kt(e[r]) && !rw(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), sc(e[r], t[r]))
        : Gt(e[r]) || (t[r] = !0);
  return t;
}
function ow(e, t, n) {
  const r = Array.isArray(e);
  if (kt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || (kt(e[o]) && !rw(e[o]))
        ? ht(t) || ic(n[o])
          ? (n[o] = Array.isArray(e[o]) ? sc(e[o], []) : { ...sc(e[o]) })
          : ow(e[o], Gt(t) ? {} : t[o], n[o])
        : (n[o] = !Ao(e[o], t[o]));
  return n;
}
var Dl = (e, t) => ow(e, t, sc(t)),
  iw = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    ht(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && cr(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function Hf(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Rv(t)
      ? t.files
      : wv(t)
      ? tw(e.refs).value
      : nw(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : il(t)
      ? ew(e.refs).value
      : iw(ht(t.value) ? e.ref.value : t.value, e);
}
var w6 = (e, t, n, r) => {
    const o = {};
    for (const i of e) {
      const s = ae(t, i);
      s && Xe(o, i, s._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: r,
    };
  },
  Fs = (e) =>
    ht(e)
      ? e
      : oc(e)
      ? e.source
      : kt(e)
      ? oc(e.value)
        ? e.value.source
        : e.value
      : e,
  E6 = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function e1(e, t, n) {
  const r = ae(e, n);
  if (r || Cv(n)) return { error: r, name: n };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."),
      s = ae(t, i),
      a = ae(e, i);
    if (s && !Array.isArray(s) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    o.pop();
  }
  return { name: n };
}
var _6 = (e, t, n, r, o) =>
    o.isOnAll
      ? !1
      : !n && o.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : o.isOnBlur)
      ? !e
      : (n ? r.isOnChange : o.isOnChange)
      ? e
      : !0,
  k6 = (e, t) => !sl(ae(e, t)).length && Pt(e, t);
const T6 = {
  mode: Qn.onSubmit,
  reValidateMode: Qn.onChange,
  shouldFocusError: !0,
};
function A6(e = {}) {
  let t = { ...T6, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Qr(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    o =
      kt(t.defaultValues) || kt(t.values)
        ? en(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : en(o),
    s = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: Vf(), array: Vf(), state: Vf() },
    p = K0(t.mode),
    b = K0(t.reValidateMode),
    m = t.criteriaMode === Qn.all,
    v = (T) => (M) => {
      clearTimeout(u), (u = setTimeout(T, M));
    },
    C = async (T) => {
      if (c.isValid || T) {
        const M = t.resolver ? En((await k()).errors) : await P(r, !0);
        M !== n.isValid && d.state.next({ isValid: M });
      }
    },
    g = (T, M) => {
      (c.isValidating || c.validatingFields) &&
        ((T || Array.from(a.mount)).forEach(
          (j) => j && Xe(n.validatingFields, j, !!M)
        ),
        (n.isValidating = Object.values(n.validatingFields).some((j) => j)),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: n.isValidating,
        }));
    },
    h = (T, M = [], j, Z, re = !0, Q = !0) => {
      if (Z && j) {
        if (((s.action = !0), Q && Array.isArray(ae(r, T)))) {
          const ie = j(ae(r, T), Z.argA, Z.argB);
          re && Xe(r, T, ie);
        }
        if (Q && Array.isArray(ae(n.errors, T))) {
          const ie = j(ae(n.errors, T), Z.argA, Z.argB);
          re && Xe(n.errors, T, ie), k6(n.errors, T);
        }
        if (c.touchedFields && Q && Array.isArray(ae(n.touchedFields, T))) {
          const ie = j(ae(n.touchedFields, T), Z.argA, Z.argB);
          re && Xe(n.touchedFields, T, ie);
        }
        c.dirtyFields && (n.dirtyFields = Dl(o, i)),
          d.state.next({
            name: T,
            isDirty: B(T, M),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else Xe(i, T, M);
    },
    y = (T, M) => {
      Xe(n.errors, T, M), d.state.next({ errors: n.errors });
    },
    S = (T) => {
      (n.errors = T), d.state.next({ errors: n.errors, isValid: !1 });
    },
    E = (T, M, j, Z) => {
      const re = ae(r, T);
      if (re) {
        const Q = ae(i, T, ht(j) ? ae(o, T) : j);
        ht(Q) || (Z && Z.defaultChecked) || M
          ? Xe(i, T, M ? Q : Hf(re._f))
          : V(T, Q),
          s.mount && C();
      }
    },
    _ = (T, M, j, Z, re) => {
      let Q = !1,
        ie = !1;
      const Pe = { name: T },
        We = !!(ae(r, T) && ae(r, T)._f.disabled);
      if (!j || Z) {
        c.isDirty &&
          ((ie = n.isDirty),
          (n.isDirty = Pe.isDirty = B()),
          (Q = ie !== Pe.isDirty));
        const Ze = We || Ao(ae(o, T), M);
        (ie = !!(!We && ae(n.dirtyFields, T))),
          Ze || We ? Pt(n.dirtyFields, T) : Xe(n.dirtyFields, T, !0),
          (Pe.dirtyFields = n.dirtyFields),
          (Q = Q || (c.dirtyFields && ie !== !Ze));
      }
      if (j) {
        const Ze = ae(n.touchedFields, T);
        Ze ||
          (Xe(n.touchedFields, T, j),
          (Pe.touchedFields = n.touchedFields),
          (Q = Q || (c.touchedFields && Ze !== j)));
      }
      return Q && re && d.state.next(Pe), Q ? Pe : {};
    },
    w = (T, M, j, Z) => {
      const re = ae(n.errors, T),
        Q = c.isValid && Gn(M) && n.isValid !== M;
      if (
        (e.delayError && j
          ? ((l = v(() => y(T, j))), l(e.delayError))
          : (clearTimeout(u),
            (l = null),
            j ? Xe(n.errors, T, j) : Pt(n.errors, T)),
        (j ? !Ao(re, j) : re) || !En(Z) || Q)
      ) {
        const ie = {
          ...Z,
          ...(Q && Gn(M) ? { isValid: M } : {}),
          errors: n.errors,
          name: T,
        };
        (n = { ...n, ...ie }), d.state.next(ie);
      }
    },
    k = async (T) => {
      g(T, !0);
      const M = await t.resolver(
        i,
        t.context,
        w6(T || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return g(T), M;
    },
    L = async (T) => {
      const { errors: M } = await k(T);
      if (T)
        for (const j of T) {
          const Z = ae(M, j);
          Z ? Xe(n.errors, j, Z) : Pt(n.errors, j);
        }
      else n.errors = M;
      return M;
    },
    P = async (T, M, j = { valid: !0 }) => {
      for (const Z in T) {
        const re = T[Z];
        if (re) {
          const { _f: Q, ...ie } = re;
          if (Q) {
            const Pe = a.array.has(Q.name);
            g([Z], !0);
            const We = await Z0(
              re,
              i,
              m,
              t.shouldUseNativeValidation && !M,
              Pe
            );
            if ((g([Z]), We[Q.name] && ((j.valid = !1), M))) break;
            !M &&
              (ae(We, Q.name)
                ? Pe
                  ? x6(n.errors, We, Q.name)
                  : Xe(n.errors, Q.name, We[Q.name])
                : Pt(n.errors, Q.name));
          }
          ie && (await P(ie, M, j));
        }
      }
      return j.valid;
    },
    U = () => {
      for (const T of a.unMount) {
        const M = ae(r, T);
        M &&
          (M._f.refs ? M._f.refs.every((j) => !Wf(j)) : !Wf(M._f.ref)) &&
          Y(T);
      }
      a.unMount = new Set();
    },
    B = (T, M) => (T && M && Xe(i, T, M), !Ao(X(), o)),
    F = (T, M, j) =>
      JR(T, a, { ...(s.mount ? i : ht(M) ? o : cr(T) ? { [T]: M } : M) }, j, M),
    z = (T) =>
      sl(ae(s.mount ? i : o, T, e.shouldUnregister ? ae(o, T, []) : [])),
    V = (T, M, j = {}) => {
      const Z = ae(r, T);
      let re = M;
      if (Z) {
        const Q = Z._f;
        Q &&
          (!Q.disabled && Xe(i, T, iw(M, Q)),
          (re = rc(Q.ref) && Gt(M) ? "" : M),
          nw(Q.ref)
            ? [...Q.ref.options].forEach(
                (ie) => (ie.selected = re.includes(ie.value))
              )
            : Q.refs
            ? il(Q.ref)
              ? Q.refs.length > 1
                ? Q.refs.forEach(
                    (ie) =>
                      (!ie.defaultChecked || !ie.disabled) &&
                      (ie.checked = Array.isArray(re)
                        ? !!re.find((Pe) => Pe === ie.value)
                        : re === ie.value)
                  )
                : Q.refs[0] && (Q.refs[0].checked = !!re)
              : Q.refs.forEach((ie) => (ie.checked = ie.value === re))
            : Rv(Q.ref)
            ? (Q.ref.value = "")
            : ((Q.ref.value = re),
              Q.ref.type || d.values.next({ name: T, values: { ...i } })));
      }
      (j.shouldDirty || j.shouldTouch) &&
        _(T, re, j.shouldTouch, j.shouldDirty, !0),
        j.shouldValidate && D(T);
    },
    K = (T, M, j) => {
      for (const Z in M) {
        const re = M[Z],
          Q = `${T}.${Z}`,
          ie = ae(r, Q);
        (a.array.has(T) || !ic(re) || (ie && !ie._f)) && !wi(re)
          ? K(Q, re, j)
          : V(Q, re, j);
      }
    },
    G = (T, M, j = {}) => {
      const Z = ae(r, T),
        re = a.array.has(T),
        Q = en(M);
      Xe(i, T, Q),
        re
          ? (d.array.next({ name: T, values: { ...i } }),
            (c.isDirty || c.dirtyFields) &&
              j.shouldDirty &&
              d.state.next({
                name: T,
                dirtyFields: Dl(o, i),
                isDirty: B(T, Q),
              }))
          : Z && !Z._f && !Gt(Q)
          ? K(T, Q, j)
          : V(T, Q, j),
        G0(T, a) && d.state.next({ ...n }),
        d.values.next({ name: s.mount ? T : void 0, values: { ...i } });
    },
    N = async (T) => {
      const M = T.target;
      let j = M.name,
        Z = !0;
      const re = ae(r, j),
        Q = () => (M.type ? Hf(re._f) : KR(T)),
        ie = (Pe) => {
          Z = Number.isNaN(Pe) || Pe === ae(i, j, Pe);
        };
      if (re) {
        let Pe, We;
        const Ze = Q(),
          Me = T.type === nc.BLUR || T.type === nc.FOCUS_OUT,
          Se =
            (!E6(re._f) && !t.resolver && !ae(n.errors, j) && !re._f.deps) ||
            _6(Me, ae(n.touchedFields, j), n.isSubmitted, b, p),
          Ht = G0(j, a, Me);
        Xe(i, j, Ze),
          Me
            ? (re._f.onBlur && re._f.onBlur(T), l && l(0))
            : re._f.onChange && re._f.onChange(T);
        const zn = _(j, Ze, Me, !1),
          er = !En(zn) || Ht;
        if (
          (!Me && d.values.next({ name: j, type: T.type, values: { ...i } }),
          Se)
        )
          return (
            c.isValid && C(), er && d.state.next({ name: j, ...(Ht ? {} : zn) })
          );
        if ((!Me && Ht && d.state.next({ ...n }), t.resolver)) {
          const { errors: xe } = await k([j]);
          if ((ie(Ze), Z)) {
            const He = e1(n.errors, r, j),
              I = e1(xe, r, He.name || j);
            (Pe = I.error), (j = I.name), (We = En(xe));
          }
        } else
          g([j], !0),
            (Pe = (await Z0(re, i, m, t.shouldUseNativeValidation))[j]),
            g([j]),
            ie(Ze),
            Z && (Pe ? (We = !1) : c.isValid && (We = await P(r, !0)));
        Z && (re._f.deps && D(re._f.deps), w(j, We, Pe, zn));
      }
    },
    O = (T, M) => {
      if (ae(n.errors, M) && T.focus) return T.focus(), 1;
    },
    D = async (T, M = {}) => {
      let j, Z;
      const re = cu(T);
      if (t.resolver) {
        const Q = await L(ht(T) ? T : re);
        (j = En(Q)), (Z = T ? !re.some((ie) => ae(Q, ie)) : j);
      } else
        T
          ? ((Z = (
              await Promise.all(
                re.map(async (Q) => {
                  const ie = ae(r, Q);
                  return await P(ie && ie._f ? { [Q]: ie } : ie);
                })
              )
            ).every(Boolean)),
            !(!Z && !n.isValid) && C())
          : (Z = j = await P(r));
      return (
        d.state.next({
          ...(!cr(T) || (c.isValid && j !== n.isValid) ? {} : { name: T }),
          ...(t.resolver || !T ? { isValid: j } : {}),
          errors: n.errors,
        }),
        M.shouldFocus && !Z && da(r, O, T ? re : a.mount),
        Z
      );
    },
    X = (T) => {
      const M = { ...o, ...(s.mount ? i : {}) };
      return ht(T) ? M : cr(T) ? ae(M, T) : T.map((j) => ae(M, j));
    },
    A = (T, M) => ({
      invalid: !!ae((M || n).errors, T),
      isDirty: !!ae((M || n).dirtyFields, T),
      isTouched: !!ae((M || n).touchedFields, T),
      isValidating: !!ae((M || n).validatingFields, T),
      error: ae((M || n).errors, T),
    }),
    H = (T) => {
      T && cu(T).forEach((M) => Pt(n.errors, M)),
        d.state.next({ errors: T ? n.errors : {} });
    },
    W = (T, M, j) => {
      const Z = (ae(r, T, { _f: {} })._f || {}).ref;
      Xe(n.errors, T, { ...M, ref: Z }),
        d.state.next({ name: T, errors: n.errors, isValid: !1 }),
        j && j.shouldFocus && Z && Z.focus && Z.focus();
    },
    se = (T, M) =>
      Qr(T)
        ? d.values.subscribe({ next: (j) => T(F(void 0, M), j) })
        : F(T, M, !0),
    Y = (T, M = {}) => {
      for (const j of T ? cu(T) : a.mount)
        a.mount.delete(j),
          a.array.delete(j),
          M.keepValue || (Pt(r, j), Pt(i, j)),
          !M.keepError && Pt(n.errors, j),
          !M.keepDirty && Pt(n.dirtyFields, j),
          !M.keepTouched && Pt(n.touchedFields, j),
          !M.keepIsValidating && Pt(n.validatingFields, j),
          !t.shouldUnregister && !M.keepDefaultValue && Pt(o, j);
      d.values.next({ values: { ...i } }),
        d.state.next({ ...n, ...(M.keepDirty ? { isDirty: B() } : {}) }),
        !M.keepIsValid && C();
    },
    ve = ({ disabled: T, name: M, field: j, fields: Z, value: re }) => {
      if (Gn(T)) {
        const Q = T ? void 0 : ht(re) ? Hf(j ? j._f : ae(Z, M)._f) : re;
        Xe(i, M, Q), _(M, Q, !1, !1, !0);
      }
    },
    ge = (T, M = {}) => {
      let j = ae(r, T);
      const Z = Gn(M.disabled);
      return (
        Xe(r, T, {
          ...(j || {}),
          _f: {
            ...(j && j._f ? j._f : { ref: { name: T } }),
            name: T,
            mount: !0,
            ...M,
          },
        }),
        a.mount.add(T),
        j
          ? ve({ field: j, disabled: M.disabled, name: T, value: M.value })
          : E(T, !0, M.value),
        {
          ...(Z ? { disabled: M.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!M.required,
                min: Fs(M.min),
                max: Fs(M.max),
                minLength: Fs(M.minLength),
                maxLength: Fs(M.maxLength),
                pattern: Fs(M.pattern),
              }
            : {}),
          name: T,
          onChange: N,
          onBlur: N,
          ref: (re) => {
            if (re) {
              ge(T, M), (j = ae(r, T));
              const Q =
                  (ht(re.value) &&
                    re.querySelectorAll &&
                    re.querySelectorAll("input,select,textarea")[0]) ||
                  re,
                ie = R6(Q),
                Pe = j._f.refs || [];
              if (ie ? Pe.find((We) => We === Q) : Q === j._f.ref) return;
              Xe(r, T, {
                _f: {
                  ...j._f,
                  ...(ie
                    ? {
                        refs: [
                          ...Pe.filter(Wf),
                          Q,
                          ...(Array.isArray(ae(o, T)) ? [{}] : []),
                        ],
                        ref: { type: Q.type, name: T },
                      }
                    : { ref: Q }),
                },
              }),
                E(T, !1, void 0, Q);
            } else
              (j = ae(r, T, {})),
                j._f && (j._f.mount = !1),
                (t.shouldUnregister || M.shouldUnregister) &&
                  !(GR(a.array, T) && s.action) &&
                  a.unMount.add(T);
          },
        }
      );
    },
    oe = () => t.shouldFocusError && da(r, O, a.mount),
    Ae = (T) => {
      Gn(T) &&
        (d.state.next({ disabled: T }),
        da(
          r,
          (M, j) => {
            let Z = T;
            const re = ae(r, j);
            re && Gn(re._f.disabled) && (Z || (Z = re._f.disabled)),
              (M.disabled = Z);
          },
          0,
          !1
        ));
    },
    ye = (T, M) => async (j) => {
      let Z;
      j && (j.preventDefault && j.preventDefault(), j.persist && j.persist());
      let re = en(i);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: Q, values: ie } = await k();
        (n.errors = Q), (re = ie);
      } else await P(r);
      if ((Pt(n.errors, "root"), En(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await T(re, j);
        } catch (Q) {
          Z = Q;
        }
      } else M && (await M({ ...n.errors }, j)), oe(), setTimeout(oe);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: En(n.errors) && !Z,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        Z)
      )
        throw Z;
    },
    be = (T, M = {}) => {
      ae(r, T) &&
        (ht(M.defaultValue)
          ? G(T, en(ae(o, T)))
          : (G(T, M.defaultValue), Xe(o, T, en(M.defaultValue))),
        M.keepTouched || Pt(n.touchedFields, T),
        M.keepDirty ||
          (Pt(n.dirtyFields, T),
          (n.isDirty = M.defaultValue ? B(T, en(ae(o, T))) : B())),
        M.keepError || (Pt(n.errors, T), c.isValid && C()),
        d.state.next({ ...n }));
    },
    me = (T, M = {}) => {
      const j = T ? en(T) : o,
        Z = en(j),
        re = En(T),
        Q = re ? o : Z;
      if ((M.keepDefaultValues || (o = j), !M.keepValues)) {
        if (M.keepDirtyValues)
          for (const ie of a.mount)
            ae(n.dirtyFields, ie) ? Xe(Q, ie, ae(i, ie)) : G(ie, ae(Q, ie));
        else {
          if (bv && ht(T))
            for (const ie of a.mount) {
              const Pe = ae(r, ie);
              if (Pe && Pe._f) {
                const We = Array.isArray(Pe._f.refs)
                  ? Pe._f.refs[0]
                  : Pe._f.ref;
                if (rc(We)) {
                  const Ze = We.closest("form");
                  if (Ze) {
                    Ze.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = e.shouldUnregister ? (M.keepDefaultValues ? en(o) : {}) : en(Q)),
          d.array.next({ values: { ...Q } }),
          d.values.next({ values: { ...Q } });
      }
      (a = {
        mount: M.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (s.mount = !c.isValid || !!M.keepIsValid || !!M.keepDirtyValues),
        (s.watch = !!e.shouldUnregister),
        d.state.next({
          submitCount: M.keepSubmitCount ? n.submitCount : 0,
          isDirty: re
            ? !1
            : M.keepDirty
            ? n.isDirty
            : !!(M.keepDefaultValues && !Ao(T, o)),
          isSubmitted: M.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: re
            ? []
            : M.keepDirtyValues
            ? M.keepDefaultValues && i
              ? Dl(o, i)
              : n.dirtyFields
            : M.keepDefaultValues && T
            ? Dl(o, T)
            : {},
          touchedFields: M.keepTouched ? n.touchedFields : {},
          errors: M.keepErrors ? n.errors : {},
          isSubmitSuccessful: M.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    $e = (T, M) => me(Qr(T) ? T(i) : T, M);
  return {
    control: {
      register: ge,
      unregister: Y,
      getFieldState: A,
      handleSubmit: ye,
      setError: W,
      _executeSchema: k,
      _getWatch: F,
      _getDirty: B,
      _updateValid: C,
      _removeUnmounted: U,
      _updateFieldArray: h,
      _updateDisabledField: ve,
      _getFieldArray: z,
      _reset: me,
      _resetDefaultValues: () =>
        Qr(t.defaultValues) &&
        t.defaultValues().then((T) => {
          $e(T, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (T) => {
        n = { ...n, ...T };
      },
      _disableForm: Ae,
      _subjects: d,
      _proxyFormState: c,
      _setErrors: S,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return s;
      },
      set _state(T) {
        s = T;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return a;
      },
      set _names(T) {
        a = T;
      },
      get _formState() {
        return n;
      },
      set _formState(T) {
        n = T;
      },
      get _options() {
        return t;
      },
      set _options(T) {
        t = { ...t, ...T };
      },
    },
    trigger: D,
    register: ge,
    handleSubmit: ye,
    watch: se,
    setValue: G,
    getValues: X,
    reset: $e,
    resetField: be,
    clearErrors: H,
    unregister: Y,
    setError: W,
    setFocus: (T, M = {}) => {
      const j = ae(r, T),
        Z = j && j._f;
      if (Z) {
        const re = Z.refs ? Z.refs[0] : Z.ref;
        re.focus && (re.focus(), M.shouldSelect && re.select());
      }
    },
    getFieldState: A,
  };
}
function P6(e = {}) {
  const t = he.useRef(),
    n = he.useRef(),
    [r, o] = he.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Qr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Qr(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...A6(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    Sv({
      subject: i._subjects.state,
      next: (s) => {
        XR(s, i._proxyFormState, i._updateFormState, !0) &&
          o({ ...i._formState });
      },
    }),
    he.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    he.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const s = i._getDirty();
        s !== r.isDirty && i._subjects.state.next({ isDirty: s });
      }
    }, [i, r.isDirty]),
    he.useEffect(() => {
      e.values && !Ao(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          o((s) => ({ ...s })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    he.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    he.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    he.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = QR(r, i)),
    t.current
  );
}
const fs = cs({ key: "currentUser", default: void 0 }),
  $6 = cs({
    key: "currentJhData",
    default: {
      admin_access: !1,
      base_url: "/hub",
      options_form: !1,
      prefix: "/",
      user: "",
      xsrf_token: "",
    },
  }),
  Qo = cs({ key: "currentNotification", default: void 0 }),
  sw = cs({ key: "currentFormInput", default: void 0 }),
  aw = cs({ key: "currentImage", default: void 0 }),
  lw = cs({ key: "currentFile", default: void 0 }),
  uw = ({ id: e }) => {
    const t = Qm(),
      [n, r] = x.useState(!1),
      [o] = St(fs),
      [, i] = St(Qo),
      [s, a] = St(sw),
      [l, u] = x.useState(""),
      [c, d] = St(lw),
      [p, b] = St(aw),
      [m, v] = x.useState(!1),
      { data: C, error: g } = Er({
        queryKey: ["app-form", e],
        queryFn: () => Vt.get(`/server/${e}`).then((O) => O.data),
        enabled: !!e,
      }),
      { data: h, isLoading: y } = Er({
        queryKey: ["app-frameworks"],
        queryFn: () => Vt.get("/frameworks/").then((O) => O.data),
      }),
      { data: S, isLoading: E } = Er({
        queryKey: ["app-environments"],
        queryFn: () => Vt.get("/conda-environments/").then((O) => O.data),
      }),
      { data: _, isLoading: w } = Er({
        queryKey: ["app-profiles"],
        queryFn: () => Vt.get("/spawner-profiles/").then((O) => O.data),
      }),
      {
        control: k,
        handleSubmit: L,
        reset: P,
        watch: U,
        formState: { errors: B },
      } = P6({
        defaultValues: {
          display_name: "",
          description: "",
          framework: "",
          thumbnail: "",
          filepath: "",
          conda_env: "",
          env: "",
          custom_command: "",
          profile: "",
          is_public: !1,
        },
      }),
      F = U("framework"),
      z = ({
        display_name: O,
        description: D,
        framework: X,
        thumbnail: A,
        filepath: H,
        conda_env: W,
        env: se,
        custom_command: Y,
        profile: ve,
      }) => {
        if (_ && _.length > 0) {
          const ge = {
            jhub_app: !0,
            display_name: l || O,
            description: D,
            framework: X,
            thumbnail: A,
            filepath: H,
            conda_env: W,
            env: se ? JSON.parse(se) : null,
            custom_command: Y,
            profile: ve,
            is_public: m,
          };
          a(ge), t(`/server-types${e ? `?id=${e}` : ""}`);
        } else {
          const ge = {
            servername: l || O,
            user_options: {
              jhub_app: !0,
              name: l || O,
              display_name: O,
              description: D || "",
              framework: X,
              thumbnail: A || "",
              filepath: H || "",
              conda_env: W || "",
              env: se ? JSON.parse(se) : null,
              custom_command: Y || "",
              profile: ve || "",
              public: m,
            },
          };
          r(!0),
            e
              ? N(ge, {
                  onSuccess: async () => {
                    window.location.assign(Pn);
                  },
                  onError: async (oe) => {
                    r(!1), i(oe.message);
                  },
                })
              : G(ge, {
                  onSuccess: async (oe) => {
                    const Ae = o == null ? void 0 : o.name;
                    if (Ae && (oe == null ? void 0 : oe.length) > 1) {
                      const ye = oe[1];
                      window.location.assign(`${Pn}/spawn-pending/${Ae}/${ye}`);
                    }
                  },
                  onError: async (oe) => {
                    r(!1), i(oe.message);
                  },
                });
        }
      },
      V = async ({ servername: O, user_options: D }) => {
        const X = {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          A = new FormData();
        return (
          A.append("data", JSON.stringify({ servername: O, user_options: D })),
          c && A.append("thumbnail", c),
          (await Vt.post("/server", A, { headers: X })).data
        );
      },
      K = async ({ servername: O, user_options: D }) => {
        const X = {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          A = new FormData();
        return (
          A.append("data", JSON.stringify({ servername: O, user_options: D })),
          c ? A.append("thumbnail", c) : p && A.append("thumbnail_data_url", p),
          (await Vt.put(`/server/${O}`, A, { headers: X })).data
        );
      },
      { mutate: G } = Gi({ mutationFn: V, retry: 1 }),
      { mutate: N } = Gi({ mutationFn: K, retry: 1 });
    return (
      x.useEffect(() => {
        C != null &&
          C.name &&
          C != null &&
          C.user_options &&
          (u(C.name),
          P({
            ...C.user_options,
            env: C.user_options.env
              ? JSON.stringify(C.user_options.env)
              : void 0,
          }),
          v(C.user_options.public),
          b(C.user_options.thumbnail));
      }, [
        C == null ? void 0 : C.name,
        C == null ? void 0 : C.user_options,
        P,
        b,
      ]),
      x.useEffect(() => {
        s &&
          (u(s.display_name),
          P({
            display_name: s.display_name || "",
            description: s.description || "",
            framework: s.framework || "",
            filepath: s.filepath || "",
            conda_env: s.conda_env || "",
            env: s.env ? JSON.stringify(s.env) : void 0,
            custom_command: s.custom_command || "",
            profile: s.profile || "",
          }),
          v(s.is_public),
          b(s.thumbnail));
      }, [s, P, b]),
      x.useEffect(() => {
        g && i(g.message);
      }, [g, i]),
      f.jsxs("form", {
        id: "app-form",
        onSubmit: L(z),
        className: "form",
        noValidate: !0,
        children: [
          f.jsxs("div", {
            className: "form-section",
            children: [
              f.jsx("h2", { children: "App Info" }),
              f.jsx(xr, {
                name: "display_name",
                control: k,
                rules: Nl,
                render: ({ field: { ref: O, ...D } }) => {
                  var X;
                  return f.jsx(rr, {
                    children: f.jsx(ci, {
                      ...D,
                      id: "display_name",
                      label: "Name",
                      placeholder: "Add app name (max. 16 characters)",
                      autoFocus: !0,
                      required: !0,
                      error: !!((X = B.display_name) != null && X.message),
                      inputProps: { maxLength: 16 },
                    }),
                  });
                },
              }),
              f.jsx(xr, {
                name: "description",
                control: k,
                render: ({ field: { ref: O, ...D } }) =>
                  f.jsx(rr, {
                    children: f.jsx(ci, {
                      ...D,
                      id: "description",
                      label: "Description",
                      placeholder: "Add app description (max. 75 characters)",
                      multiline: !0,
                      rows: 4,
                      inputProps: { maxLength: 75 },
                    }),
                  }),
              }),
            ],
          }),
          f.jsx("hr", {}),
          f.jsxs("div", {
            className: "form-section",
            children: [
              f.jsx("h2", { children: "Configuration" }),
              f.jsx(xr, {
                name: "framework",
                control: k,
                rules: Nl,
                render: ({ field: { ref: O, ...D } }) => {
                  var X;
                  return f.jsxs(rr, {
                    children: [
                      f.jsx(Qp, {
                        id: "framework-label",
                        required: !0,
                        children: "Framework",
                      }),
                      f.jsx(Yp, {
                        ...D,
                        id: "framework",
                        label: "Framework",
                        required: !0,
                        error: !!((X = B.framework) != null && X.message),
                        children:
                          h == null
                            ? void 0
                            : h.map((A) =>
                                f.jsx(
                                  aa,
                                  { value: A.name, children: A.display_name },
                                  A.name
                                )
                              ),
                      }),
                    ],
                  });
                },
              }),
              F === "custom"
                ? f.jsx(xr, {
                    name: "custom_command",
                    control: k,
                    rules: Nl,
                    render: ({ field: { ref: O, ...D } }) =>
                      f.jsx(rr, {
                        children: f.jsx(ci, {
                          ...D,
                          id: "custom_command",
                          label: "Custom Command",
                          required: F === "custom",
                        }),
                      }),
                  })
                : f.jsx(f.Fragment, {}),
              S && S.length > 0
                ? f.jsx(xr, {
                    name: "conda_env",
                    control: k,
                    rules: Nl,
                    render: ({ field: { ref: O, ...D } }) => {
                      var X;
                      return f.jsxs(rr, {
                        children: [
                          f.jsx(Qp, {
                            id: "framework-label",
                            required: !0,
                            children: "Software Environment",
                          }),
                          f.jsx(Yp, {
                            ...D,
                            id: "conda_env",
                            label: "Software Environment",
                            required: !0,
                            error: !!((X = B.conda_env) != null && X.message),
                            children: S.map((A) =>
                              f.jsx(aa, { value: A, children: A }, A)
                            ),
                          }),
                        ],
                      });
                    },
                  })
                : f.jsx(f.Fragment, {}),
              f.jsx(xr, {
                name: "filepath",
                control: k,
                render: ({ field: { ref: O, ...D } }) => {
                  var X;
                  return f.jsx(rr, {
                    children: f.jsx(ci, {
                      ...D,
                      id: "filepath",
                      label: "File path",
                      placeholder:
                        'Enter the path to the file, e.g. "/shared/users/panel_basic.py"',
                      error: !!((X = B.filepath) != null && X.message),
                    }),
                  });
                },
              }),
              f.jsx(xr, {
                name: "env",
                control: k,
                render: ({ field: { ref: O, ...D } }) =>
                  f.jsx(rr, {
                    children: f.jsx(ci, {
                      ...D,
                      id: "env",
                      label: "Environment Variables",
                      placeholder:
                        'Enter valid json: {"KEY_1":"VALUE_1","KEY_2":"VALUE_2"}',
                    }),
                  }),
              }),
            ],
          }),
          f.jsx("hr", {}),
          f.jsxs("div", {
            className: "form-section",
            children: [
              f.jsx("h2", { children: "Sharing" }),
              f.jsx(xr, {
                name: "is_public",
                control: k,
                render: ({ field: { ref: O, value: D, onChange: X, ...A } }) =>
                  f.jsx(rr, {
                    children: f.jsx(mS, {
                      control: f.jsx(rF, {
                        ...A,
                        id: "is_public",
                        checked: m,
                        onChange: () => {
                          v(!m);
                        },
                      }),
                      label: "Allow Public Access",
                    }),
                  }),
              }),
            ],
          }),
          f.jsx("hr", {}),
          f.jsxs("div", {
            className: "form-section",
            children: [
              f.jsx("h2", { children: "App Thumbnail" }),
              f.jsx(xr, {
                name: "thumbnail",
                control: k,
                render: ({ field: { ref: O, value: D, onChange: X, ...A } }) =>
                  f.jsx(rr, {
                    children: f.jsx(h8, {
                      ...A,
                      id: "thumbnail",
                      currentImage: p,
                      setCurrentImage: b,
                      currentFile: c,
                      setCurrentFile: d,
                    }),
                  }),
              }),
            ],
          }),
          f.jsx("hr", {}),
          f.jsxs("div", {
            className: "button-section",
            children: [
              f.jsx("div", {
                className: "prev",
                children: f.jsx(wt, {
                  id: "cancel-btn",
                  type: "button",
                  variant: "text",
                  color: "secondary",
                  onClick: () => ar(`${Pn}`),
                  children: "Cancel",
                }),
              }),
              f.jsx("div", {
                className: "next",
                children: f.jsx(wt, {
                  id: "submit-btn",
                  type: "submit",
                  variant: "contained",
                  color: "primary",
                  disabled: y || E || w || n,
                  children:
                    _ && _.length > 0
                      ? f.jsx(f.Fragment, { children: "Next" })
                      : e
                      ? f.jsx(f.Fragment, { children: "Save" })
                      : f.jsx(f.Fragment, { children: "Create App" }),
                }),
              }),
            ],
          }),
        ],
      })
    );
  };
var cw = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (i = o(i, r(a)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number") return i;
      if (typeof i != "object") return "";
      if (Array.isArray(i)) return n.apply(null, i);
      if (
        i.toString !== Object.prototype.toString &&
        !i.toString.toString().includes("[native code]")
      )
        return i.toString();
      var s = "";
      for (var a in i) t.call(i, a) && i[a] && (s = o(s, a));
      return s;
    }
    function o(i, s) {
      return s ? (i ? i + " " + s : i + s) : i;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(cw);
var N6 = cw.exports;
const I6 = xh(N6),
  qf = ({ id: e = void 0, className: t, children: n }) => {
    const r = I6("button-group", t);
    return f.jsx("ul", {
      id: e,
      className: r,
      children: x.Children.map(n, (o, i) =>
        f.jsx("li", { className: "button-group-item", children: o }, i)
      ),
    });
  };
var Ev = {},
  dw = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(dw);
var jn = dw.exports,
  Kf = {};
const O6 = ww($T);
var t1;
function Bn() {
  return (
    t1 ||
      ((t1 = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = O6;
      })(Kf)),
    Kf
  );
}
var L6 = jn;
Object.defineProperty(Ev, "__esModule", { value: !0 });
var fw = (Ev.default = void 0),
  M6 = L6(Bn()),
  F6 = f;
fw = Ev.default = (0, M6.default)(
  (0, F6.jsx)("path", {
    d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2",
  }),
  "MoreHoriz"
);
const D6 = ({ id: e, items: t }) => {
  const n = he.useRef(null);
  return f.jsxs("div", {
    className: "context-menu-container",
    id: e,
    tabIndex: 0,
    ref: n,
    children: [
      f.jsx(fw, {}),
      f.jsx("ul", {
        className: "context-menu",
        children: t
          .filter((r) => r.visible)
          .map((r) =>
            f.jsx(
              "li",
              {
                children: f.jsx("a", {
                  className: r.disabled ? "disabled" : "",
                  onClick: (o) => {
                    var i;
                    r.onClick &&
                      !r.disabled &&
                      (r.onClick(o), (i = n.current) == null || i.blur());
                  },
                  children: r.title,
                }),
              },
              `context-menu-item-${r.id}`
            )
          ),
      }),
    ],
  });
};
var _v = {},
  j6 = jn;
Object.defineProperty(_v, "__esModule", { value: !0 });
var pw = (_v.default = void 0),
  B6 = j6(Bn()),
  z6 = f;
pw = _v.default = (0, B6.default)(
  (0, z6.jsx)("path", {
    d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1",
  }),
  "HomeRounded"
);
var kv = {},
  U6 = jn;
Object.defineProperty(kv, "__esModule", { value: !0 });
var hw = (kv.default = void 0),
  V6 = U6(Bn()),
  W6 = f;
hw = kv.default = (0, V6.default)(
  (0, W6.jsx)("path", {
    d: "M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0",
  }),
  "KeyboardArrowDownRounded"
);
var Tv = {},
  H6 = jn;
Object.defineProperty(Tv, "__esModule", { value: !0 });
var mw = (Tv.default = void 0),
  q6 = H6(Bn()),
  K6 = f;
mw = Tv.default = (0, q6.default)(
  (0, K6.jsx)("path", {
    d: "M8.12 14.71 12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71a.9959.9959 0 0 0-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0",
  }),
  "KeyboardArrowUpRounded"
);
var Av = {},
  G6 = jn;
Object.defineProperty(Av, "__esModule", { value: !0 });
var vw = (Av.default = void 0),
  Q6 = G6(Bn()),
  X6 = f;
vw = Av.default = (0, Q6.default)(
  (0, X6.jsx)("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" }),
  "Menu"
);
var Pv = {},
  Y6 = jn;
Object.defineProperty(Pv, "__esModule", { value: !0 });
var gw = (Pv.default = void 0),
  J6 = Y6(Bn()),
  Z6 = f;
gw = Pv.default = (0, J6.default)(
  (0, Z6.jsx)("path", {
    fillRule: "evenodd",
    d: "M19 12.87c0-.47-.34-.85-.8-.98C16.93 11.54 16 10.38 16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.38-.93 2.54-2.2 2.89-.46.13-.8.51-.8.98V13c0 .55.45 1 1 1h4.98l.02 7c0 .55.45 1 1 1s1-.45 1-1l-.02-7H18c.55 0 1-.45 1-1z",
  }),
  "PushPinRounded"
);
const n1 = ne(ou)(({ theme: e }) => ({
    fontWeight: 700,
    paddingLeft: e.spacing(4),
    paddingTop: e.spacing(1),
    paddingBottom: e.spacing(1),
  })),
  r1 = ne(SS)(({ theme: e }) => ({ paddingLeft: e.spacing(4) })),
  e8 = ({ ...e }) => {
    const t = lo(),
      [n, r] = he.useState(null),
      o = !!n,
      i = PO(t.breakpoints.down("sm")),
      { window: s } = e,
      [a, l] = x.useState(!i),
      [u] = St(fs),
      [, c] = St(Qo),
      [d, p] = x.useState([]),
      {
        isLoading: b,
        error: m,
        data: v,
      } = Er({
        queryKey: ["service-data"],
        queryFn: () =>
          Vt.get("/services/")
            .then((h) => h.data)
            .then((h) => h),
        enabled: !!u,
      }),
      C = () => {
        l((h) => !h);
      };
    x.useEffect(() => {
      !b && v && u && p(() => HR(v, u.name));
    }, [b, v, u]),
      x.useEffect(() => {
        c(m ? m.message : void 0);
      }, [m, c]),
      x.useEffect(() => {
        l(!i);
      }, [i]);
    const g = f.jsxs(Qt, {
      children: [
        f.jsx(ks, {
          disablePadding: !0,
          sx: { mt: 10, mb: 2 },
          children: f.jsxs(SS, {
            sx: { pl: 3 },
            onClick: () => ar(`${Pn}`),
            children: [
              f.jsx(Dy, { children: f.jsx(pw, {}) }),
              f.jsx(ou, { primary: "Home" }),
            ],
          }),
        }),
        f.jsx(Ny, {}),
        d.find((h) => h.pinned)
          ? f.jsxs(f.Fragment, {
              children: [
                f.jsxs(Xp, {
                  children: [
                    f.jsx(ks, {
                      disablePadding: !0,
                      children: f.jsx(n1, {
                        primary: "Pinned",
                        disableTypography: !0,
                      }),
                    }),
                    d
                      .filter((h) => h.pinned)
                      .map((h, y) =>
                        f.jsx(
                          ks,
                          {
                            disablePadding: !0,
                            children: f.jsxs(r1, {
                              onClick: () => ar(h.url),
                              children: [
                                f.jsx(ou, { primary: h.name }),
                                f.jsx(Dy, {
                                  sx: { minWidth: "32px" },
                                  children: f.jsx(gw, {}),
                                }),
                              ],
                            }),
                          },
                          y
                        )
                      ),
                  ],
                }),
                f.jsx(Ny, {}),
              ],
            })
          : f.jsx(f.Fragment, {}),
        f.jsxs(Xp, {
          children: [
            f.jsx(ks, {
              disablePadding: !0,
              children: f.jsx(n1, {
                primary: "Services",
                disableTypography: !0,
                sx: { pt: 2 },
              }),
            }),
            d.map((h, y) =>
              f.jsx(
                ks,
                {
                  disablePadding: !0,
                  children: f.jsx(r1, {
                    onClick: () => ar(h.url),
                    children: f.jsx(ou, { primary: h.name }),
                  }),
                },
                y
              )
            ),
          ],
        }),
      ],
    });
    return f.jsxs(Qt, {
      sx: { flexGrow: 1 },
      children: [
        f.jsx(GP, {
          position: "fixed",
          sx: {
            zIndex: (h) => h.zIndex.drawer + 1,
            backgroundColor: (h) => h.palette.common.black,
          },
          children: f.jsxs(uF, {
            children: [
              f.jsx(rS, {
                color: "inherit",
                "aria-label": "open drawer",
                edge: "start",
                onClick: C,
                sx: { mr: 2, display: { sm: "none" } },
                children: f.jsx(vw, {}),
              }),
              f.jsx(Qt, {
                component: "div",
                sx: { flexGrow: 1, display: { xs: "none", sm: "block" } },
                children: f.jsx("a", {
                  href: Pn,
                  children: f.jsx("img", {
                    src: f6(),
                    alt: "logo",
                    height: "28",
                  }),
                }),
              }),
              f.jsxs(Qt, {
                sx: { display: { xs: "none", sm: "block" } },
                children: [
                  f.jsxs(wt, {
                    id: "profile-menu-btn",
                    "aria-controls": o ? "profile-menu-list" : void 0,
                    "aria-haspopup": "true",
                    "aria-expanded": o ? "true" : void 0,
                    onClick: (h) => r(h.currentTarget),
                    endIcon: o ? f.jsx(mw, {}) : f.jsx(hw, {}),
                    sx: { color: t.palette.common.white, fontWeight: 700 },
                    children: [
                      u == null ? void 0 : u.name,
                      " ",
                      u != null && u.admin ? "(admin)" : "",
                    ],
                  }),
                  f.jsxs(ES, {
                    id: "profile-menu-list",
                    anchorEl: n,
                    open: o,
                    onClose: () => r(null),
                    MenuListProps: { "aria-labelledby": "profile-menu-btn" },
                    sx: { marginTop: "20px" },
                    children: [
                      f.jsx(aa, {
                        onClick: () => ar(`${Pn}/token`),
                        sx: { width: "180px" },
                        children: "Tokens",
                      }),
                      u != null && u.admin
                        ? f.jsx(aa, {
                            onClick: () => ar(`${Pn}/admin`),
                            children: "Admin",
                          })
                        : f.jsx(f.Fragment, {}),
                      f.jsx(aa, {
                        onClick: () => ar(`${Pn}/logout`),
                        children: "Logout",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        f.jsx("nav", {
          children: f.jsx(EI, {
            container: s !== void 0 ? () => s().document.body : void 0,
            variant: "persistent",
            open: a,
            onClose: C,
            ModalProps: { keepMounted: !0 },
            sx: {
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            },
            children: g,
          }),
        }),
      ],
    });
  },
  t8 = ({ severity: e = "error", message: t, onClose: n }) =>
    f.jsx("div", {
      className: "alert-wrapper",
      children: t
        ? f.jsx(LP, {
            id: "alert-notification",
            severity: e,
            onClose: n,
            children: t,
          })
        : f.jsx(f.Fragment, {}),
    });
var $v = {},
  n8 = jn;
Object.defineProperty($v, "__esModule", { value: !0 });
var yw = ($v.default = void 0),
  r8 = n8(Bn()),
  o8 = f;
yw = $v.default = (0, r8.default)(
  (0, o8.jsx)("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-4.44-6.19-2.35 3.02-1.56-1.88c-.2-.25-.58-.24-.78.01l-1.74 2.23c-.26.33-.02.81.39.81h8.98c.41 0 .65-.47.4-.8l-2.55-3.39c-.19-.26-.59-.26-.79 0",
  }),
  "CropOriginalRounded"
);
var Nv = {},
  i8 = jn;
Object.defineProperty(Nv, "__esModule", { value: !0 });
var bw = (Nv.default = void 0),
  s8 = i8(Bn()),
  a8 = f;
bw = Nv.default = (0, s8.default)(
  (0, a8.jsx)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1",
  }),
  "DeleteRounded"
);
var Iv = {},
  l8 = jn;
Object.defineProperty(Iv, "__esModule", { value: !0 });
var xw = (Iv.default = void 0),
  u8 = l8(Bn()),
  c8 = f;
xw = Iv.default = (0, u8.default)(
  (0, c8.jsx)("path", {
    d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z",
  }),
  "UploadFile"
);
var Ov = {},
  d8 = jn;
Object.defineProperty(Ov, "__esModule", { value: !0 });
var Sw = (Ov.default = void 0),
  f8 = d8(Bn()),
  p8 = f;
Sw = Ov.default = (0, f8.default)(
  (0, p8.jsx)("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3",
  }),
  "Visibility"
);
const h8 = ({
  id: e,
  name: t,
  currentImage: n,
  setCurrentImage: r,
  currentFile: o,
  setCurrentFile: i,
  ...s
}) => {
  const [a, l] = x.useState(!1),
    [u, c] = x.useState(!1),
    d = x.useRef(null),
    p = (S) => {
      S.preventDefault(), l(!0);
    },
    b = (S) => {
      S.preventDefault(), l(!0);
    },
    m = (S) => {
      S.preventDefault(), l(!1);
    },
    v = (S) => {
      S.preventDefault(), l(!1);
      const E = S.dataTransfer.files[0];
      i(E);
    },
    C = (S) => {
      if (!S.target.files) return;
      const E = S.target.files[0];
      i(E);
    },
    g = (S) => {
      S.preventDefault(), c(!0);
    },
    h = (S) => {
      S.preventDefault();
      const E = d.current;
      E && E.click();
    },
    y = (S) => {
      S.preventDefault();
      const E = d.current;
      E && ((E.value = ""), i(void 0), r(void 0));
    };
  return (
    x.useEffect(() => {
      const S = d.current;
      if (S && S.files && S.files.length > 0) {
        const E = S.files[0];
        i(E);
      }
    }, [d, i]),
    f.jsxs("div", {
      id: `thumbnail-${e}`,
      className: "thumbnail",
      children: [
        f.jsxs("div", {
          id: `thumbnail-body-${e}`,
          className: `thumbnail-body ${a ? "dragging" : ""} ${
            o || n ? "selected" : ""
          }`,
          onDragOver: p,
          onDragEnter: b,
          onDragLeave: m,
          onDrop: v,
          children: [
            o || n
              ? f.jsx("div", {
                  className: "thumbnail-img-container",
                  children: f.jsx("img", {
                    src: o ? URL.createObjectURL(o) : n,
                    alt: "App thumnail",
                    className: "thumbnail-img",
                  }),
                })
              : f.jsx("div", {
                  className: "thumbnail-icon-container",
                  tabIndex: 0,
                  onClick: h,
                  children: f.jsx(yw, { className: "thumbnail-icon" }),
                }),
            f.jsx("input", {
              ref: d,
              id: e,
              name: t,
              type: "file",
              accept: "image/*",
              onChange: C,
              style: { display: "none" },
              ...s,
            }),
          ],
        }),
        f.jsxs("div", {
          className: "thumbnail-actions",
          children: [
            f.jsx(wt, {
              id: "view-thumbnail-btn",
              variant: "contained",
              color: "secondary",
              size: "small",
              startIcon: f.jsx(Sw, {}),
              onClick: g,
              disabled: !o && !n,
              children: "View Thumbnail",
            }),
            f.jsx(wt, {
              id: "upload-thumbnail-btn",
              variant: "contained",
              color: "secondary",
              size: "small",
              startIcon: f.jsx(xw, {}),
              onClick: h,
              children: "Upload Thumbnail",
            }),
            f.jsx(wt, {
              id: "remove-thumbnail-btn",
              variant: "contained",
              color: "secondary",
              size: "small",
              startIcon: f.jsx(bw, {}),
              onClick: y,
              disabled: !o && !n,
              children: "Remove Thumbnail",
            }),
          ],
        }),
        f.jsx(ru, {
          onClose: () => c(!1),
          open: u,
          children: f.jsx("img", {
            src: o ? URL.createObjectURL(o) : n,
            alt: "App thumnail",
          }),
        }),
      ],
    })
  );
};
var Lv = {},
  m8 = jn;
Object.defineProperty(Lv, "__esModule", { value: !0 });
var Hd = (Lv.default = void 0),
  v8 = m8(Bn()),
  g8 = f;
Hd = Lv.default = (0, v8.default)(
  (0, g8.jsx)("path", {
    d: "M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 0 0-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1",
  }),
  "ArrowBackRounded"
);
const yn = ne("div")(({ theme: e }) => ({ padding: e.spacing(0) })),
  y8 = () =>
    f.jsx(Qt, {
      className: "container",
      children: f.jsxs(Ga, {
        children: [
          f.jsx(yn, {
            children: f.jsx("div", {
              className: "form-breadcrumb",
              children: f.jsx(wt, {
                id: "back-btn",
                type: "button",
                variant: "text",
                color: "primary",
                startIcon: f.jsx(Hd, {}),
                onClick: () => ar(Pn),
                children: "Back",
              }),
            }),
          }),
          f.jsxs(yn, {
            children: [
              f.jsx("h1", {
                className: "form-heading",
                children: "Create a new app",
              }),
              f.jsxs("p", {
                className: "form-paragraph",
                children: [
                  "Begin your project by entering the details below. For more information about creating an app,",
                  " ",
                  f.jsx("a", {
                    href: "https://jhub-apps.nebari.dev/docs/reference/create-app-form",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "form-paragraph-link",
                    children: "visit our docs",
                  }),
                  ".",
                ],
              }),
            ],
          }),
          f.jsx(yn, { children: f.jsx(uw, {}) }),
        ],
      }),
    }),
  b8 = () => {
    const [e] = oC(),
      t = e.get("id");
    return f.jsx(Qt, {
      className: "container",
      children: f.jsxs(Ga, {
        children: [
          f.jsx(yn, {
            children: f.jsx("div", {
              className: "form-breadcrumb",
              children: f.jsx(wt, {
                id: "back-btn",
                type: "button",
                variant: "text",
                color: "primary",
                startIcon: f.jsx(Hd, {}),
                onClick: () => ar(Pn),
                children: "Back",
              }),
            }),
          }),
          f.jsxs(yn, {
            children: [
              f.jsx("h1", { className: "form-heading", children: "Edit app" }),
              f.jsxs("p", {
                className: "form-paragraph",
                children: [
                  "Edit your app details here. For more information on editing your app,",
                  " ",
                  f.jsx("a", {
                    href: "https://jhub-apps.nebari.dev/docs/reference/create-app-form",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "form-paragraph-link",
                    children: "visit our docs",
                  }),
                  ".",
                ],
              }),
            ],
          }),
          f.jsx(yn, {
            children: f.jsx(f.Fragment, {
              children: t
                ? f.jsx(uw, { id: t })
                : f.jsx(f.Fragment, { children: "No app found." }),
            }),
          }),
        ],
      }),
    });
  };
var Mv = {},
  x8 = jn;
Object.defineProperty(Mv, "__esModule", { value: !0 });
var Cw = (Mv.default = void 0),
  S8 = x8(Bn()),
  C8 = f;
Cw = Mv.default = (0, S8.default)(
  (0, C8.jsx)("path", {
    d: "M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1",
  }),
  "AddRounded"
);
const R8 = ({
    id: e,
    title: t,
    description: n,
    thumbnail: r,
    framework: o,
    url: i,
    username: s,
    ready: a = !1,
    isPublic: l = !1,
    isShared: u = !1,
  }) => {
    const c = vd(),
      [d, p] = x.useState(!1),
      [, b] = St(Qo),
      [m, v] = x.useState(!1),
      [C, g] = x.useState(!1),
      [h, y] = x.useState(!1),
      S = async ({ id: V }) => await Vt.post(`/server/${V}`),
      E = async ({ id: V, remove: K }) =>
        await Vt.delete(`/server/${V}`, { params: { remove: K } }),
      { mutate: _ } = Gi({ mutationFn: S, retry: 1 }),
      { mutate: w } = Gi({ mutationFn: E, retry: 1 }),
      k = () => {
        p(!0),
          w(
            { id: e, remove: !0 },
            {
              onSuccess: async () => {
                p(!1), y(!1), c.invalidateQueries({ queryKey: ["app-state"] });
              },
              onError: async (V) => {
                p(!1), b(V.message);
              },
            }
          );
      },
      L = () => {
        p(!0),
          _(
            { id: e },
            {
              onSuccess: async () => {
                p(!1), v(!1), c.invalidateQueries({ queryKey: ["app-state"] });
              },
              onError: async (V) => {
                p(!1), b(V.message);
              },
            }
          );
      },
      P = () => {
        p(!0),
          w(
            { id: e, remove: !1 },
            {
              onSuccess: async () => {
                p(!1), g(!1), c.invalidateQueries({ queryKey: ["app-state"] });
              },
              onError: async (V) => {
                p(!1), b(V.message);
              },
            }
          );
      },
      U = [
        {
          id: "start",
          title: "Start",
          onClick: () => v(!0),
          visible: !0,
          disabled: a,
        },
        {
          id: "stop",
          title: "Stop",
          onClick: () => g(!0),
          visible: !0,
          disabled: !a || u,
        },
        {
          id: "edit",
          title: "Edit",
          onClick: () => (window.location.href = `${Vm}/edit-app?id=${e}`),
          visible: !0,
          disabled: u || e === "",
        },
        {
          id: "delete",
          title: "Delete",
          onClick: () => y(!0),
          visible: !0,
          disabled: u || e === "",
        },
      ],
      B = f.jsxs(f.Fragment, {
        children: [
          f.jsxs("p", {
            className: "card-dialog-body",
            children: [
              "Are you sure you want to start ",
              f.jsx("b", { children: t }),
              "?",
            ],
          }),
          f.jsxs(qf, {
            children: [
              f.jsx(wt, {
                id: "cancel-btn",
                variant: "text",
                color: "secondary",
                onClick: () => v(!1),
                children: "Cancel",
              }),
              f.jsx(wt, {
                id: "start-btn",
                variant: "contained",
                color: "primary",
                onClick: () => L(),
                disabled: d,
                children: "Start",
              }),
            ],
          }),
        ],
      }),
      F = f.jsxs(f.Fragment, {
        children: [
          f.jsxs("p", {
            className: "card-dialog-body",
            children: [
              "Are you sure you want to stop ",
              f.jsx("b", { children: t }),
              "?",
            ],
          }),
          f.jsxs(qf, {
            children: [
              f.jsx(wt, {
                id: "cancel-btn",
                variant: "text",
                color: "secondary",
                onClick: () => g(!1),
                children: "Cancel",
              }),
              f.jsx(wt, {
                id: "stop-btn",
                variant: "contained",
                color: "primary",
                onClick: () => P(),
                disabled: d,
                children: "Stop",
              }),
            ],
          }),
        ],
      }),
      z = f.jsxs(f.Fragment, {
        children: [
          f.jsxs("p", {
            className: "card-dialog-body",
            children: [
              "Are you sure you want to delete ",
              f.jsx("b", { children: t }),
              "? This action is permanent and cannot be reversed.",
            ],
          }),
          f.jsxs(qf, {
            children: [
              f.jsx(wt, {
                id: "cancel-btn",
                variant: "text",
                color: "secondary",
                onClick: () => y(!1),
                children: "Cancel",
              }),
              f.jsx(wt, {
                id: "delete-btn",
                variant: "contained",
                color: "primary",
                onClick: () => k(),
                disabled: d,
                children: "Delete",
              }),
            ],
          }),
        ],
      });
    return f.jsxs("div", {
      className: "card",
      id: `card-${e}`,
      tabIndex: 0,
      children: [
        f.jsxs("div", {
          className: "card-header-media",
          children: [
            f.jsxs("div", {
              className: "card-header-menu",
              children: [
                f.jsx(D6, { id: `card-menu-${e}`, items: U }),
                m &&
                  f.jsxs(ru, {
                    open: m,
                    onClose: v,
                    children: [
                      f.jsxs(Ef, { children: ["Start ", t] }),
                      f.jsx(wf, { children: B }),
                    ],
                  }),
                C &&
                  f.jsxs(ru, {
                    open: C,
                    onClose: g,
                    children: [
                      f.jsxs(Ef, { children: ["Stop ", t] }),
                      f.jsx(wf, { children: F }),
                    ],
                  }),
                h &&
                  f.jsxs(ru, {
                    open: h,
                    onClose: y,
                    children: [
                      f.jsxs(Ef, { children: ["Delete ", t] }),
                      f.jsx(wf, { children: z }),
                    ],
                  }),
              ],
            }),
            f.jsx("div", {
              className: "card-header-img",
              children: r
                ? f.jsx("img", { src: r, alt: "App thumb" })
                : f.jsx(f.Fragment, {}),
            }),
          ],
        }),
        f.jsx("div", {
          className: "card-header",
          children: f.jsx("h3", {
            className: "font-bold",
            children: f.jsx("a", { href: i, children: t }),
          }),
        }),
        f.jsxs("div", {
          className: "card-body",
          children: [
            f.jsx("p", { children: n }),
            s
              ? f.jsxs("div", {
                  children: [
                    f.jsx("span", {
                      className: "font-bold",
                      children: "Author: ",
                    }),
                    s,
                  ],
                })
              : f.jsx(f.Fragment, {}),
          ],
        }),
        f.jsxs("div", {
          className: "card-footer",
          children: [
            f.jsx(Ay, {
              id: `tag-${e}`,
              label: o,
              variant: "outlined",
              size: "small",
            }),
            l
              ? f.jsx(Ay, {
                  id: `tag-${e}`,
                  label: "Public",
                  variant: "outlined",
                  size: "small",
                })
              : f.jsx(f.Fragment, {}),
          ],
        }),
      ],
    });
  },
  o1 = ({ appType: e = "My", filter: t }) => {
    const [n] = St(fs),
      [, r] = St(Qo),
      [o, i] = x.useState([]),
      {
        isLoading: s,
        error: a,
        data: l,
      } = Er({
        queryKey: ["app-state"],
        queryFn: () =>
          Vt.get("/server/")
            .then((u) => u.data)
            .then((u) => u),
        enabled: !!n,
      });
    return (
      x.useEffect(() => {
        if (!s && l) {
          const u = t.toLowerCase();
          i(() =>
            c6(l, e).filter((c) => {
              var d, p;
              return (
                c.name.toLowerCase().includes(u) ||
                ((d = c.description) == null
                  ? void 0
                  : d.toLowerCase().includes(u)) ||
                ((p = c.framework) == null
                  ? void 0
                  : p.toLowerCase().includes(u))
              );
            })
          );
        }
      }, [s, l, e, t]),
      x.useEffect(() => {
        r(a ? a.message : void 0);
      }, [a, r]),
      f.jsx(Qt, {
        children: f.jsxs(Ga, {
          children: [
            f.jsx(yn, {
              children: f.jsxs(Qt, {
                sx: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: "48px",
                },
                children: [
                  f.jsx("div", {
                    className: "grid-heading-left",
                    children: f.jsxs("h2", { children: [e, " Apps"] }),
                  }),
                  f.jsx("div", {
                    className: "grid-heading-center",
                    children: f.jsx("hr", { className: "grid-spacer" }),
                  }),
                  f.jsx("div", {
                    className: "grid-heading-right",
                    children: f.jsxs("h2", { children: [o.length, " apps"] }),
                  }),
                ],
              }),
            }),
            f.jsx(yn, {
              children: f.jsx(Qt, {
                sx: {
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "16px",
                  justifyContent: "flex-start",
                  paddingBottom: "48px",
                },
                children: s
                  ? f.jsx("div", {
                      className: "font-bold",
                      children: "Loading...",
                    })
                  : o.length > 0
                  ? f.jsx(f.Fragment, {
                      children: o.map((u) =>
                        f.jsx(
                          R8,
                          {
                            id: u.id,
                            title: u.name,
                            description: u.description,
                            thumbnail: u.thumbnail,
                            framework: u.framework,
                            url: u.url,
                            ready: u.ready,
                            username: u.username,
                            isPublic: u.public,
                            isShared: e === "Shared",
                          },
                          `app-${u.id}`
                        )
                      ),
                    })
                  : f.jsx("div", { children: "No apps available" }),
              }),
            }),
          ],
        }),
      })
    );
  },
  w8 = () => {
    const [e] = St(fs),
      [, t] = St(Qo),
      [n, r] = x.useState([]),
      {
        isLoading: o,
        error: i,
        data: s,
      } = Er({
        queryKey: ["service-data"],
        queryFn: () =>
          Vt.get("/services/")
            .then((l) => l.data)
            .then((l) => l),
        enabled: !!e,
      }),
      a = (l, u) => {
        u ? window.open(l, "_blank") : window.location.assign(l);
      };
    return (
      x.useEffect(() => {
        !o && s && e && r(() => HR(s, e.name));
      }, [o, s, e]),
      x.useEffect(() => {
        t(i ? i.message : void 0);
      }, [i, t]),
      f.jsx(Qt, {
        children: f.jsxs(Ga, {
          children: [
            f.jsx(yn, {
              children: f.jsxs(Qt, {
                sx: {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: "48px",
                },
                children: [
                  f.jsx("div", {
                    className: "grid-heading-left",
                    children: f.jsx("h2", { children: "Services" }),
                  }),
                  f.jsx("div", {
                    className: "grid-heading-center",
                    children: f.jsx("hr", { className: "grid-spacer" }),
                  }),
                  f.jsx("div", {
                    className: "grid-heading-right",
                    children: f.jsxs("h2", {
                      children: [n.length, " services"],
                    }),
                  }),
                ],
              }),
            }),
            f.jsx(yn, {
              children: f.jsx(Qt, {
                sx: {
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "16px",
                  justifyContent: "flex-start",
                  paddingBottom: "48px",
                },
                children: o
                  ? f.jsx("div", {
                      className: "font-bold",
                      children: "Loading...",
                    })
                  : n.length > 0
                  ? f.jsx(f.Fragment, {
                      children: n.map((l, u) =>
                        f.jsx(
                          wt,
                          {
                            id: `service-${u}`,
                            variant: "outlined",
                            color: "secondary",
                            style: { minWidth: "180px" },
                            onClick: () => {
                              a(l.url, l.external);
                            },
                            children: l.name,
                          },
                          `service-${u}`
                        )
                      ),
                    })
                  : f.jsx("div", { children: "No services available" }),
              }),
            }),
          ],
        }),
      })
    );
  },
  i1 = () => {
    const [e, t] = x.useState(""),
      n = (r) => {
        const o = r.target;
        t(o.value);
      };
    return f.jsxs(Qt, {
      sx: { flexGrow: 1 },
      className: "container",
      children: [
        f.jsxs($l, {
          container: !0,
          spacing: 2,
          paddingBottom: "48px",
          children: [
            f.jsx($l, {
              item: !0,
              xs: 12,
              md: 2,
              children: f.jsx(yn, {
                children: f.jsx("h1", { children: "Home" }),
              }),
            }),
            f.jsx($l, {
              item: !0,
              xs: 8,
              md: 8,
              children: f.jsx(yn, {
                children: f.jsx(ci, {
                  id: "search",
                  size: "small",
                  placeholder: "Search...",
                  "aria-label": "Search for an app",
                  className: "search-bar",
                  onChange: n,
                }),
              }),
            }),
            f.jsx($l, {
              item: !0,
              xs: 4,
              md: 2,
              children: f.jsx(yn, {
                children: f.jsx(Qt, {
                  display: "flex",
                  justifyContent: "flex-end",
                  children: f.jsx(wt, {
                    id: "create-app",
                    variant: "contained",
                    color: "primary",
                    startIcon: f.jsx(Cw, {}),
                    onClick: () => {
                      window.location.href = `${Vm}/create-app`;
                    },
                    children: "Create App",
                  }),
                }),
              }),
            }),
          ],
        }),
        f.jsx(w8, {}),
        f.jsx(o1, { appType: "My", filter: e }),
        f.jsx(o1, { appType: "Shared", filter: e }),
      ],
    });
  },
  E8 = () => {
    const [e] = oC(),
      t = Qm(),
      n = vd(),
      [r, o] = x.useState(!1),
      [i] = St(fs),
      [s, a] = St(sw),
      [l] = St(lw),
      [u] = St(aw),
      [, c] = St(Qo),
      [d, p] = he.useState((s == null ? void 0 : s.profile) || ""),
      b = e.get("id"),
      {
        data: m,
        isLoading: v,
        error: C,
      } = Er(["serverTypes"], async () => {
        const { data: w } = await Vt.get("/spawner-profiles/");
        return w;
      }),
      g = (w) => {
        p(w), s && a({ ...s, profile: w });
      },
      h = (w) => {
        w.preventDefault();
        const k = {
          servername: (s == null ? void 0 : s.display_name) || "",
          user_options: {
            jhub_app: !0,
            name: (s == null ? void 0 : s.display_name) || "",
            display_name: (s == null ? void 0 : s.display_name) || "",
            description: (s == null ? void 0 : s.description) || "",
            framework: (s == null ? void 0 : s.framework) || "",
            thumbnail: (s == null ? void 0 : s.thumbnail) || "",
            filepath: (s == null ? void 0 : s.filepath) || "",
            conda_env: (s == null ? void 0 : s.conda_env) || "",
            env: (s == null ? void 0 : s.env) || "",
            custom_command: (s == null ? void 0 : s.custom_command) || "",
            profile: (s == null ? void 0 : s.profile) || "",
            public: (s == null ? void 0 : s.is_public) || !1,
          },
        };
        o(!0),
          b
            ? _(k, {
                onSuccess: async () => {
                  n.invalidateQueries({ queryKey: ["app-state"] });
                },
                onError: async (L) => {
                  o(!1), c(L.message);
                },
              })
            : E(k, {
                onSuccess: async (L) => {
                  const P = i == null ? void 0 : i.name;
                  if (P && (L == null ? void 0 : L.length) > 1) {
                    const U = L[1];
                    window.location.assign(`/hub/spawn-pending/${P}/${U}`);
                  }
                },
                onError: async (L) => {
                  o(!1), c(L.message);
                },
              });
      },
      y = async ({ servername: w, user_options: k }) => {
        const L = {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          P = new FormData();
        return (
          P.append("data", JSON.stringify({ servername: w, user_options: k })),
          l && P.append("thumbnail", l),
          (await Vt.post("/server", P, { headers: L })).data
        );
      },
      S = async ({ servername: w, user_options: k }) => {
        const L = {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          P = new FormData();
        return (
          P.append("data", JSON.stringify({ servername: w, user_options: k })),
          l ? P.append("thumbnail", l) : u && P.append("thumbnail_data_url", u),
          (await Vt.put(`/server/${w}`, P, { headers: L })).data
        );
      },
      { mutate: E } = Gi({ mutationFn: y, retry: 1 }),
      { mutate: _ } = Gi({ mutationFn: S, retry: 1 });
    return f.jsxs("div", {
      className: "container",
      children: [
        f.jsx("div", {
          className: "form-breadcrumb",
          children: f.jsx(wt, {
            id: "back-btn",
            type: "button",
            variant: "text",
            color: "primary",
            startIcon: f.jsx(Hd, {}),
            onClick: () => t(b ? `/edit-app?id=${b}` : "/create-app"),
            children: "Back",
          }),
        }),
        f.jsxs("div", {
          className: "row",
          children: [
            f.jsx("h1", { className: "form-heading", children: "Server Type" }),
            f.jsxs("p", {
              className: "form-paragraph",
              children: [
                "Please select the appropriate server for your app. For more information on server types,",
                " ",
                f.jsx("span", {
                  children: f.jsx("a", {
                    href: "https://www.nebari.dev/docs/welcome",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "form-paragraph-link",
                    children: "visit our docs",
                  }),
                }),
                ".",
              ],
            }),
          ],
        }),
        C
          ? f.jsxs("div", { children: ["An error occurred: ", C.message] })
          : v
          ? f.jsx("div", {
              className: "font-bold center",
              children: "Loading...",
            })
          : m && m.length > 0
          ? f.jsxs("form", {
              className: "form",
              onSubmit: h,
              children: [
                f.jsx("div", {
                  className: "form-section",
                  children: f.jsx(NM, {
                    children:
                      m == null
                        ? void 0
                        : m.map((w, k) =>
                            f.jsx(
                              hN,
                              {
                                className: "server-type-card",
                                onClick: () => g(w.slug),
                                tabIndex: 0,
                                children: f.jsxs(xN, {
                                  children: [
                                    f.jsx(
                                      mS,
                                      {
                                        value: w.slug,
                                        id: w.slug,
                                        control: f.jsx(AM, {
                                          checked: d ? d === w.slug : k === 0,
                                        }),
                                        label: w.display_name,
                                      },
                                      w.slug
                                    ),
                                    f.jsx("p", { children: w.description }),
                                  ],
                                }),
                              },
                              `server-type-card-${w.slug}`
                            )
                          ),
                  }),
                }),
                f.jsx("hr", {}),
                f.jsxs("div", {
                  className: "button-section",
                  children: [
                    f.jsx("div", {
                      className: "prev",
                      children: f.jsx(wt, {
                        id: "cancel-btn",
                        type: "button",
                        variant: "text",
                        color: "secondary",
                        onClick: () => ar(Pn),
                        children: "Cancel",
                      }),
                    }),
                    f.jsx("div", {
                      className: "next",
                      children: f.jsx(wt, {
                        id: "submit-btn",
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        disabled: r,
                        children: b
                          ? f.jsx(f.Fragment, { children: "Save" })
                          : f.jsx(f.Fragment, { children: "Create App" }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          : f.jsx("div", { children: "No servers available" }),
      ],
    });
  },
  _8 = () => {
    const [, e] = St($6),
      [, t] = St(fs),
      [n, r] = St(Qo),
      { error: o, data: i } = Er({
        queryKey: ["user-state"],
        queryFn: () =>
          Vt.get("/user")
            .then((s) => s.data)
            .then((s) => s),
      });
    return (
      x.useEffect(() => {
        o && r(o.message);
      }, [o, r]),
      x.useEffect(() => {
        e(u6());
      }, [e]),
      x.useEffect(() => {
        i && t({ ...i });
      }, [i, t]),
      f.jsxs("div", {
        children: [
          f.jsx(e8, {}),
          f.jsxs(Qt, {
            component: "main",
            sx: { flexGrow: 1, pt: 9, pl: { xs: 1, sm: 33 }, pr: 1 },
            children: [
              n
                ? f.jsx(t8, { message: n, onClose: () => r(void 0) })
                : f.jsx(f.Fragment, {}),
              f.jsxs(YD, {
                children: [
                  f.jsx(di, { path: "/home", element: f.jsx(i1, {}) }),
                  f.jsx(di, { path: "/create-app", element: f.jsx(y8, {}) }),
                  f.jsx(di, { path: "/edit-app", element: f.jsx(b8, {}) }),
                  f.jsx(di, { path: "/server-types", element: f.jsx(E8, {}) }),
                  f.jsx(di, { path: "/", element: f.jsx(i1, {}) }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  k8 = {
    50: "#2491FF",
    100: "#2491FF",
    200: "#2491FF",
    300: "#2491FF",
    400: "#2491FF",
    500: "#005EA2",
    600: "#1A4480",
    700: "#1A4480",
    800: "#1A4480",
    900: "#162E51",
  },
  At = {
    50: "#F7F8F8",
    100: "#E1E3E4",
    200: "#C3C7CB",
    300: "#A6ACB2",
    400: "#90969C",
    500: "#5B5F63",
    600: "#44474A",
    700: "#3C3C3B",
    800: "#242628",
    900: "#1A1C1D",
  },
  jl = "#BA18DA",
  s1 = "#BA18DA10",
  a1 = "#9B00CE",
  si = "#18817A",
  T8 = "#18817A10",
  A8 = "#12635E",
  P8 = "#D72D47",
  $8 = "#F66A0A",
  nr = "#FFFFFF",
  l1 = "#000000",
  Bl = Mc({
    typography: { fontFamily: '"Inter", sans-serif' },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: !0,
          style: { textTransform: "none", textWrap: "nowrap" },
        },
      },
      MuiFormControl: {
        defaultProps: { fullWidth: !0, sx: { marginBottom: "12px" } },
      },
      MuiTextField: {
        defaultProps: {
          autoComplete: "off",
          fullWidth: !0,
          sx: { marginBottom: "0" },
        },
      },
      MuiSelect: { defaultProps: { fullWidth: !0 } },
    },
  }),
  N8 = Mc(Bl, {
    palette: {
      primary: Bl.palette.augmentColor({
        color: { light: s1, main: jl, dark: a1, contrastText: nr },
        name: "primary",
      }),
      secondary: Bl.palette.augmentColor({
        color: { light: T8, main: si, dark: A8, contrastText: nr },
        name: "secondary",
      }),
      gray: Bl.palette.augmentColor({
        color: {
          light: At[300],
          main: At[500],
          dark: At[700],
          contrastText: l1,
          50: At[50],
          100: At[100],
          200: At[200],
          300: At[300],
          400: At[400],
          500: At[500],
          600: At[600],
          700: At[700],
          800: At[800],
          900: At[900],
        },
        name: "gray",
      }),
      warning: { main: $8, contrastText: nr },
      error: { main: P8, contrastText: nr },
      info: { main: k8, contrastText: nr },
      success: { main: si[500], contrastText: nr },
      common: { black: l1, white: nr },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained", color: "primary" },
            style: {
              minWidth: "120px",
              backgroundColor: `${jl}`,
              border: `1px solid ${jl}`,
              fontWeight: 700,
              "&:hover": { backgroundColor: `${a1}` },
              "&:disabled": { borderColor: "transparent" },
            },
          },
          {
            props: { variant: "contained", color: "secondary" },
            style: {
              minWidth: "120px",
              backgroundColor: At[100],
              border: `1px solid ${At[100]}`,
              color: At[700],
              fontWeight: 700,
              "&:hover": { backgroundColor: nr, filter: "brightness(0.96)" },
              "&:disabled": { borderColor: "transparent" },
            },
          },
          {
            props: { variant: "outlined", color: "secondary" },
            style: {
              minWidth: "120px",
              backgroundColor: nr,
              border: `2px solid ${si}`,
              color: `${si}`,
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                backgroundColor: nr,
                borderWidth: 2,
                border: `2px solid ${si}`,
                color: `${si}`,
              },
            },
          },
          {
            props: { variant: "text", color: "primary" },
            style: { color: `${jl}`, "&:focus": { backgroundColor: `${s1}` } },
          },
          {
            props: { variant: "text", color: "secondary" },
            style: {
              color: At[500],
              "&:focus": { backgroundColor: `${At[100]}` },
            },
          },
        ],
      },
    },
  }),
  I8 = new URL(window.location.href),
  O8 = new IF();
nh.createRoot(document.getElementById("root")).render(
  f.jsx(he.StrictMode, {
    children: f.jsx(tj, {
      basename: I8.pathname.indexOf("hub") === -1 ? Vm : Pn,
      children: f.jsx(qU, {
        children: f.jsxs(ET, {
          theme: N8,
          children: [
            f.jsx(PN, {}),
            f.jsx(GF, { client: O8, children: f.jsx(_8, {}) }),
          ],
        }),
      }),
    }),
  })
);
