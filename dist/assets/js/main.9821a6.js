!(function (t) {
  function e(e) {
    for (var r, c, u = e[0], a = e[1], f = e[2], s = 0, p = []; s < u.length; s++)
      (c = u[s]), Object.prototype.hasOwnProperty.call(o, c) && o[c] && p.push(o[c][0]), (o[c] = 0);
    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    for (l && l(e); p.length; ) p.shift()();
    return i.push.apply(i, f || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], r = !0, u = 1; u < n.length; u++) {
        var a = n[u];
        0 !== o[a] && (r = !1);
      }
      r && (i.splice(e--, 1), (t = c((c.s = n[0]))));
    }
    return t;
  }
  var r = {},
    o = { 0: 0 },
    i = [];
  function c(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = t),
    (c.c = r),
    (c.d = function (t, e, n) {
      c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (c.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if ((c.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
        for (var r in t)
          c.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return c.d(e, 'a', e), e;
    }),
    (c.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = './');
  var u = (window.webpackJsonp = window.webpackJsonp || []),
    a = u.push.bind(u);
  (u.push = e), (u = u.slice());
  for (var f = 0; f < u.length; f++) e(u[f]);
  var l = a;
  i.push([145, 1]), n();
})({
  121: function (t, e, n) {},
  125: function (t, e, n) {},
  132: function (t, e, n) {},
  133: function (t, e, n) {},
  134: function (t, e, n) {},
  135: function (t, e, n) {},
  136: function (t, e, n) {},
  137: function (t, e, n) {},
  138: function (t, e, n) {},
  139: function (t, e, n) {},
  140: function (t, e, n) {},
  142: function (t, e, n) {},
  145: function (t, e, n) {
    'use strict';
    n.r(e);
    n(27),
      n(5),
      n(6),
      n(7),
      n(11),
      n(36),
      n(8),
      n(121),
      n(12),
      n(13),
      n(14),
      n(37),
      n(64),
      n(100),
      n(101),
      n(19),
      n(102),
      n(20),
      n(21),
      n(15),
      n(125),
      n(65),
      n(104),
      n(66),
      n(105);
    function r(t) {
      return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function o(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t))) return;
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var c, u = t[Symbol.iterator]();
              !(r = (c = u.next()).done) && (n.push(c.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return i(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          'Object' === n && t.constructor && (n = t.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(n);
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function i(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    function c(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function u(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? c(Object(n), !0).forEach(function (e) {
              a(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function a(t, e, n) {
      return (
        e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
        t
      );
    }
    var f = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return t.set(e, u({}, t.get(e), {}, n));
      },
      l = function (t, e, n) {
        for (var r = e.get(n), o = r._elements, i = r._state, c = 0, u = Object.keys(i); c < u.length; c++) {
          var a = u[c],
            l = t.querySelectorAll('[data-prop-'.concat(a, ']'));
          l && ((o['_element'.concat(a)] = l), f(e, n, { _elements: o }));
        }
      };
    function s(t) {
      return (s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function p(t, e) {
      return (
        (function (t) {
          if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
          if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t))) return;
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var c, u = t[Symbol.iterator]();
              !(r = (c = u.next()).done) && (n.push(c.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (o = !0), (i = t);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        })(t, e) ||
        (function (t, e) {
          if (!t) return;
          if ('string' == typeof t) return y(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          'Object' === n && t.constructor && (n = t.constructor.name);
          if ('Map' === n || 'Set' === n) return Array.from(n);
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e);
        })(t, e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function y(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    var h = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'div',
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
        try {
          for (var r = document.createElement(t), o = 0, i = Object.entries(e); o < i.length; o++) {
            var c = p(i[o], 2),
              u = c[0],
              a = c[1];
            r.setAttribute(u, a);
          }
          return b(r, n), r;
        } catch (t) {
          return console.log(t), !1;
        }
      },
      b = function (t, e) {
        if (!Array.isArray(e))
          return 'string' == typeof e
            ? ((t.innerHTML = e), t)
            : 'object' !== s(e) || e.nodeType
            ? 'object' === s(e) && e.nodeType && e.nodeType === Node.ELEMENT_NODE
              ? (t.appendChild(e), t)
              : void 0
            : ((t.innerHTML = e.html),
              e.reference.forEach(function (n, r) {
                var o = t.querySelector(n);
                e.components[r] && (o.parentElement.appendChild(e.components[r]), o.remove());
              }),
              t);
        e.forEach(function (e) {
          t.appendChild(e);
        });
      };
    function d(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function v(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var m = new WeakMap(),
      w = (function () {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          d(this, t), m.set(this, { _state: e, _elements: {} });
        }
        var e, n, i;
        return (
          (e = t),
          (n = [
            {
              key: 'template',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'div',
                  e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  n = arguments.length > 2 ? arguments[2] : void 0;
                return (this.el = h(t, e, n)), l(this.el, m, this), this.el;
              },
            },
            {
              key: 'state',
              get: function () {
                return m.get(this)._state;
              },
              set: function (t) {
                !(function (t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = t.get(e),
                    c = i._state,
                    a = i._elements;
                  if (JSON.stringify(c) === JSON.stringify(n)) return !1;
                  for (
                    var l = function (t, e) {
                        a['_element'.concat(t)] &&
                          Array.from(a['_element'.concat(t)]).forEach(function (t) {
                            t.innerHTML = e;
                          });
                      },
                      s = 0,
                      p = Object.entries(n);
                    s < p.length;
                    s++
                  ) {
                    var y = o(p[s], 2),
                      h = y[0],
                      b = y[1];
                    c[h] || (c[h] = b), c[h] && 'object' !== r(c[h]) && c[h] !== b && ((c[h] = b), l(h, b));
                  }
                  f(t, e, u({}, c));
                })(m, this, t);
              },
            },
          ]) && v(e.prototype, n),
          i && v(e, i),
          t
        );
      })(),
      _ =
        (n(67),
        n(129),
        n(132),
        function () {
          return '\n      <h1>Education</h1>\n    ';
        });
    function g(t) {
      return (g =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function O(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function S(t, e) {
      return !e || ('object' !== g(e) && 'function' != typeof e) ? j(t) : e;
    }
    function j(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function P() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function R(t) {
      return (R = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function E(t, e) {
      return (E =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var k = new WeakMap(),
      C = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && E(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = R(e);
              if (P()) {
                var r = R(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return S(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            k.set(j(t), { _defaultSelector: 'c__education' }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = k.get(this)._defaultSelector;
                return (this.el = this.template('div', { class: t }, _())), this.el;
              },
            },
          ]) && O(n.prototype, r),
          o && O(n, o),
          c
        );
      })(w),
      T =
        (n(133),
        function (t, e, n, r) {
          return {
            html: '\n        <div class="'
              .concat(t, '__banner">\n          <div class="container">\n            <div class="')
              .concat(
                t,
                '__banner__description">\n              <h1>Feito para conectar quem precisa de ajuda nesse momento de pandemia com quem pode ajudar.</h1>\n              <div class="btnCadastro"></div>\n              <div class="btnLogin"></div>              \n            </div>\n          </div>\n        </div>          \n        <div class="'
              )
              .concat(
                t,
                '__what">\n          <div class="container">\n            <h1>Como funciona?</h1>\n            <div class="phone"></div>\n            <div class="card"></div>\n          </div>\n        <div>\n      '
              ),
            reference: ['.btnCadastro', '.btnLogin', '.card'],
            components: [e.render(), n.render(), r.render()],
          };
        });
    function D(t) {
      return (D =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function x(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function M(t, e) {
      return !e || ('object' !== D(e) && 'function' != typeof e) ? A(t) : e;
    }
    function A(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function I() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function W(t) {
      return (W = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function L(t, e) {
      return (L =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var N = new WeakMap(),
      H = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && L(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = W(e);
              if (I()) {
                var r = W(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return M(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            N.set(A(t), { _defaultSelector: 'c__home' }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = N.get(this)._defaultSelector,
                  e = new re({ label: 'Cadastro' }),
                  n = new re({ label: 'Login', cssClass: '--secondary' }),
                  r = new he({ title: 'Título do card', body: 'Corpo do card' });
                return (
                  setTimeout(function () {
                    r.state = { title: 'New title' };
                  }, 3e3),
                  setTimeout(function () {
                    r.state = { title: 'Other title', body: 'New body' };
                  }, 5e3),
                  (this.el = this.template('div', { class: t }, T(t, e, n, r))),
                  this.el
                );
              },
            },
          ]) && x(n.prototype, r),
          o && x(n, o),
          c
        );
      })(w),
      q =
        (n(134),
        function () {
          return '<h1>How</h1>';
        });
    function J(t) {
      return (J =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function B(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function F(t, e) {
      return !e || ('object' !== J(e) && 'function' != typeof e) ? U(t) : e;
    }
    function U(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function Y() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function $(t) {
      return ($ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function z(t, e) {
      return (z =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var G = new WeakMap(),
      K = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && z(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = $(e);
              if (Y()) {
                var r = $(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return F(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            G.set(U(t), { _defaultSelector: 'c__how' }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = G.get(this)._defaultSelector;
                return (this.el = this.template('div', { class: t }, q())), this.el;
              },
            },
          ]) && B(n.prototype, r),
          o && B(n, o),
          c
        );
      })(w),
      Q =
        (n(135),
        function () {
          return 'Login';
        });
    function V(t) {
      return (V =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function X(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Z(t, e) {
      return !e || ('object' !== V(e) && 'function' != typeof e) ? tt(t) : e;
    }
    function tt(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function et() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function nt(t) {
      return (nt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function rt(t, e) {
      return (rt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var ot = new WeakMap(),
      it = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && rt(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = nt(e);
              if (et()) {
                var r = nt(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return Z(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            ot.set(tt(t), { _defaultSelector: 'c__login' }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = ot.get(this)._defaultSelector;
                return (this.el = this.template('div', { class: t }, Q())), this.el;
              },
            },
          ]) && X(n.prototype, r),
          o && X(n, o),
          c
        );
      })(w),
      ct =
        (n(136),
        function () {
          return '\n        <h1>Página não encontrada</h1>\n      ';
        });
    function ut(t) {
      return (ut =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function at(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ft(t, e) {
      return !e || ('object' !== ut(e) && 'function' != typeof e) ? lt(t) : e;
    }
    function lt(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function st() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function pt(t) {
      return (pt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function yt(t, e) {
      return (yt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var ht = new WeakMap(),
      bt = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && yt(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = pt(e);
              if (st()) {
                var r = pt(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return ft(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            ht.set(lt(t), { _defaultSelector: 'c__notfound' }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = ht.get(this)._defaultSelector;
                return (this.el = this.template('div', { class: t }, ct())), this.el;
              },
            },
          ]) && at(n.prototype, r),
          o && at(n, o),
          c
        );
      })(w),
      dt =
        (n(137),
        function () {
          return '<h1>Register</h1>';
        });
    function vt(t) {
      return (vt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function mt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function wt(t, e) {
      return !e || ('object' !== vt(e) && 'function' != typeof e) ? _t(t) : e;
    }
    function _t(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function gt() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function Ot(t) {
      return (Ot = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function St(t, e) {
      return (St =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var jt = new WeakMap(),
      Pt = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && St(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = Ot(e);
              if (gt()) {
                var r = Ot(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return wt(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            jt.set(_t(t), { _defaultSelector: 'c__register' }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = jt.get(this)._defaultSelector;
                return (this.el = this.template('div', { class: t }, dt())), this.el;
              },
            },
          ]) && mt(n.prototype, r),
          o && mt(n, o),
          c
        );
      })(w),
      Rt =
        (n(138),
        function () {
          return '<h1>Why</h1>';
        });
    function Et(t) {
      return (Et =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function kt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ct(t, e) {
      return !e || ('object' !== Et(e) && 'function' != typeof e) ? Tt(t) : e;
    }
    function Tt(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function Dt() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function xt(t) {
      return (xt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function Mt(t, e) {
      return (Mt =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var At = new WeakMap(),
      It = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && Mt(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = xt(e);
              if (Dt()) {
                var r = xt(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return Ct(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            At.set(Tt(t), { _defaultSelector: 'c__what' }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = At.get(this)._defaultSelector;
                return (this.el = this.template('div', { class: t }, Rt())), this.el;
              },
            },
          ]) && kt(n.prototype, r),
          o && kt(n, o),
          c
        );
      })(w),
      Wt = function () {
        return 'Hello user';
      },
      Lt = [
        { path: '/', component: new H() },
        { path: 'education', component: new C() },
        { path: 'home', component: new H() },
        { path: 'how', component: new K() },
        { path: 'login', component: new it() },
        { path: 'register', component: new Pt() },
        { path: 'what', component: new It() },
        { path: 'welcome', component: {}, resolve: Wt() },
      ];
    function Nt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var Ht = new WeakMap(),
      qt = (function () {
        function t() {
          var e = this;
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
          })(this, t),
            Ht.set(this, { id: 0 }),
            (window.onpopstate = function () {
              e.controlHistoryPopState();
            });
        }
        var e, n, r;
        return (
          (e = t),
          (n = [
            {
              key: 'setContent',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                f(Ht, this, { _content: t }), this.getInitialRoute();
              },
            },
            {
              key: 'getInitialRoute',
              value: function () {
                var t = window.location.href.split('/#');
                t.length > 1 ? this.routeChange(t[1], !0) : this.routeChange('/', !0);
              },
            },
            {
              key: 'routeChange',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                  e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n = Ht.get(this),
                  r = n._content,
                  o = Lt.filter(function (e) {
                    return e.path === t;
                  });
                o.length > 0
                  ? (this.controlHistoryPushState(t, e),
                    'resolve' in o[0] ? console.log('resolve') : r.route(o[0].component))
                  : r.route(new bt());
              },
            },
            {
              key: 'controlHistoryPushState',
              value: function (t, e) {
                var n = window.location.href.split('/#');
                if ('/' === t) return window.location.href.split('/#')[0];
                var r = Ht.get(this).id + 1;
                f(Ht, this, { id: r }),
                  e || window.history.pushState({ route: t, id: r }, document.title, ''.concat(n[0], '#').concat(t));
              },
            },
            {
              key: 'controlHistoryPopState',
              value: function () {
                var t = window.history.state;
                t ? this.routeChange(t.route, !0) : this.routeChange('/');
              },
            },
          ]) && Nt(e.prototype, n),
          r && Nt(e, r),
          t
        );
      })();
    function Jt(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    var Bt = function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      Jt(this, t),
        (this.label = e.label || 'Label'),
        (this.cssClass = e.cssClass || ''),
        (this.disabled = e.disabled || !1);
    };
    function Ft(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    var Ut = function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      Ft(this, t), (this.title = e.title || 'Title'), (this.body = e.body || 'Body card');
    };
    function Yt(t) {
      return (Yt =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function $t(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function zt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? $t(Object(n), !0).forEach(function (e) {
              Gt(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : $t(Object(n)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function Gt(t, e, n) {
      return (
        e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n),
        t
      );
    }
    function Kt(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Qt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Vt(t, e) {
      return !e || ('object' !== Yt(e) && 'function' != typeof e) ? Xt(t) : e;
    }
    function Xt(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function Zt() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function te(t) {
      return (te = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function ee(t, e) {
      return (ee =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var ne = new WeakMap(),
      re = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ee(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = te(e);
              if (Zt()) {
                var r = te(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return Vt(this, t);
            });
        function c() {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Kt(this, c), (t = i.call(this, new Bt(e))), ne.set(Xt(t), { _defaultSelector: 'c__button' }), t;
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = ne.get(this)._defaultSelector,
                  e = this.state,
                  n = e.label,
                  r = e.cssClass,
                  o = e.disabled;
                return (
                  (this.el = this.template(
                    'button',
                    { class: ''.concat(t, ' ').concat(t).concat(r), 'data-label': n },
                    n
                  )),
                  o && this.el.setAttribute('disabled', !0),
                  (window['button'.concat(n)] = this),
                  this.el
                );
              },
            },
            {
              key: 'disabled',
              set: function (t) {
                (this.state = zt({}, this.state, { disabled: t })),
                  t ? this.el.setAttribute('disabled', !0) : this.el.removeAttribute('disabled');
              },
            },
            {
              key: 'label',
              set: function (t) {
                (this.state = zt({}, this.state, { label: t })), (this.el.innerText = t);
              },
            },
          ]) && Qt(n.prototype, r),
          o && Qt(n, o),
          c
        );
      })(w),
      oe =
        (n(139),
        function (t, e) {
          return '\n        <h4 class="'
            .concat(t, '__title" data-prop-title>')
            .concat(e.title, '</h4>\n        <p class="')
            .concat(t, '__body" data-prop-body>')
            .concat(e.body, '</p>\n      ');
        });
    function ie(t) {
      return (ie =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function ce(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function ue(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ae(t, e) {
      return !e || ('object' !== ie(e) && 'function' != typeof e) ? fe(t) : e;
    }
    function fe(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function le() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function se(t) {
      return (se = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function pe(t, e) {
      return (pe =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var ye = new WeakMap(),
      he = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && pe(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = se(e);
              if (le()) {
                var r = se(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return ae(this, t);
            });
        function c() {
          var t,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return ce(this, c), (t = i.call(this, new Ut(e))), f(ye, fe(t), { _defaultSelector: 'c__card' }), t;
        }
        return (
          (n = c),
          (r = [
            {
              key: 'render',
              value: function () {
                var t = ye.get(this)._defaultSelector,
                  e = this.state;
                return (this.el = this.template('div', { class: t }, oe(t, e))), (window.card = this), this.el;
              },
            },
          ]) && ue(n.prototype, r),
          o && ue(n, o),
          c
        );
      })(w);
    n(140);
    function be(t) {
      return (be =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function de(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function ve(t, e) {
      return !e || ('object' !== be(e) && 'function' != typeof e) ? me(t) : e;
    }
    function me(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function we() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function _e(t) {
      return (_e = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function ge(t, e) {
      return (ge =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var Oe = new WeakMap(),
      Se = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && ge(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = _e(e);
              if (we()) {
                var r = _e(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return ve(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            Oe.set(me(t), { _defaultSelector: 'c__content' }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'route',
              value: function (t) {
                var e = this.el;
                (e.innerHTML = ''), e.appendChild(t.render());
              },
            },
            {
              key: 'render',
              value: function () {
                var t = Oe.get(this)._defaultSelector;
                return (this.el = this.template('div', { class: t })), this.el;
              },
            },
          ]) && de(n.prototype, r),
          o && de(n, o),
          c
        );
      })(w),
      je =
        (n(141),
        n(142),
        n(143),
        n(144),
        function (t, e) {
          return '\n      <div class="container">\n        <div class="'
            .concat(t, '__logotipo">\n          \n        </div>\n        <div class="')
            .concat(
              t,
              '__control__navigation">\n          <button alt="menu" title="menu"><i class="icon-menu-1"></i></button>\n        </div>\n        <div class="'
            )
            .concat(t, '__navigation">\n          <div class="')
            .concat(t, '__navigation__logotipo"></div>\n          <ul>\n            ')
            .concat(
              e
                .map(function (t) {
                  return '\n                <li>\n                  <a href="#'
                    .concat(t.route, '">\n                    <span>\n                      <i class="')
                    .concat(t.icon, '"></i>\n                    </span>\n                    ')
                    .concat(t.name, '\n                  </a>\n                </li>\n              ');
                })
                .join(''),
              '\n          </ul>\n        </div>\n      </div>\n    '
            );
        });
    function Pe(t) {
      return (Pe =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function Re(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function Ee(t, e) {
      return !e || ('object' !== Pe(e) && 'function' != typeof e) ? ke(t) : e;
    }
    function ke(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function Ce() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }
    function Te(t) {
      return (Te = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function De(t, e) {
      return (De =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    var xe = new WeakMap(),
      Me = new (function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
        })(this, t),
          (this.items = [
            { name: 'Educação', icon: 'icon-book-open', route: 'education' },
            { name: 'Cadastro', icon: 'icon-user-add-outline', route: 'register' },
            { name: 'Login', icon: 'icon-login-1', route: 'login' },
          ]);
      })(),
      Ae = (function (t) {
        !(function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && De(t, e);
        })(c, t);
        var e,
          n,
          r,
          o,
          i =
            ((e = c),
            function () {
              var t,
                n = Te(e);
              if (Ce()) {
                var r = Te(this).constructor;
                t = Reflect.construct(n, arguments, r);
              } else t = n.apply(this, arguments);
              return Ee(this, t);
            });
        function c() {
          var t;
          return (
            (function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, c),
            (t = i.call(this)),
            xe.set(ke(t), { _defaultSelector: 'c__header', _items: Me.items }),
            t
          );
        }
        return (
          (n = c),
          (r = [
            {
              key: 'getChilds',
              value: function () {
                var t,
                  e = this,
                  n = xe.get(this)._defaultSelector,
                  r = this.el;
                (this.btnDropdown = r.querySelector('.'.concat(n, '__control__navigation'))),
                  (this.navigation = r.querySelector('.'.concat(n, '__navigation'))),
                  (this.btnDropdown.onclick = function (t) {
                    t.preventDefault(), e.controlNavigation();
                  }),
                  (r.querySelector('.'.concat(n, '__logotipo')).onclick = function (t) {
                    var e;
                    t.preventDefault(), null === (e = window.router) || void 0 === e || e.routeChange('home');
                  }),
                  null === (t = Array.from(this.navigation.querySelectorAll('a'))) ||
                    void 0 === t ||
                    t.forEach(function (t) {
                      t.onclick = function (t) {
                        var n, r;
                        t.preventDefault();
                        var o =
                          null === (n = t.target.getAttribute('href')) || void 0 === n ? void 0 : n.replace('#', '');
                        null === (r = window.router) || void 0 === r || r.routeChange(o), e.controlNavigation();
                      };
                    });
              },
            },
            {
              key: 'controlNavigation',
              value: function () {
                var t = this.navigation,
                  e = xe.get(this)._defaultSelector;
                null == t || t.classList.toggle(''.concat(e, '__navigation--open'));
              },
            },
            {
              key: 'render',
              value: function () {
                var t = xe.get(this),
                  e = t._defaultSelector,
                  n = t._items;
                return (
                  (this.el = this.template('nav', { class: e }, je(e, n))),
                  (window.header = this),
                  this.getChilds(),
                  this.el
                );
              },
            },
          ]) && Re(n.prototype, r),
          o && Re(n, o),
          c
        );
      })(w),
      Ie = { PROJECT_IDENTIFY: 'raioDoBem', PROJECT_NAME: 'Raio do Bem' },
      We = function (t) {
        return '<div id="'.concat(t, '"></div>');
      };
    function Le(t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    }
    function Ne(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var He = new WeakMap();
    window.router = new qt();
    var qe = (function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Le(this, t),
          He.set(this, {
            _defaultSelector: 'app__raio__do__bem',
            _injectInto: e.injectInto || document.querySelector('body'),
          }),
          this.renderCritical();
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: 'renderCritical',
            value: function () {
              var t = He.get(this)._injectInto,
                e = Ie.PROJECT_IDENTIFY;
              (t.innerHTML = We(e)), (this.el = t.querySelector('#'.concat(e))), this.render();
            },
          },
          {
            key: 'createChilds',
            value: function () {
              var t = this.el,
                e = new Ae(),
                n = new Se();
              f(He, this, { _header: e, _content: n }),
                [e.render(), n.render()].forEach(function (e) {
                  return t.appendChild(e);
                });
            },
          },
          {
            key: 'render',
            value: function () {
              this.createChilds();
              var t = He.get(this)._content;
              window.router.setContent(t);
            },
          },
        ]) && Ne(e.prototype, n),
        r && Ne(e, r),
        t
      );
    })();
    window.app = new qe();
  },
});
