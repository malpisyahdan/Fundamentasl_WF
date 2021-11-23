!(function (t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function (n) {
              return t[n];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ""),
    e((e.s = 7));
})([
  function (t, n, e) {
    var r = e(1),
      o = e(2);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var i = { insert: "head", singleton: !1 },
      a = (r(o, i), o.locals ? o.locals : {});
    t.exports = a;
  },
  function (t, n, e) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function () {
        var t = {};
        return function (n) {
          if (void 0 === t[n]) {
            var e = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              e instanceof window.HTMLIFrameElement
            )
              try {
                e = e.contentDocument.head;
              } catch (t) {
                e = null;
              }
            t[n] = e;
          }
          return t[n];
        };
      })(),
      a = [];
    function c(t) {
      for (var n = -1, e = 0; e < a.length; e++)
        if (a[e].identifier === t) {
          n = e;
          break;
        }
      return n;
    }
    function u(t, n) {
      for (var e = {}, r = [], o = 0; o < t.length; o++) {
        var i = t[o],
          u = n.base ? i[0] + n.base : i[0],
          s = e[u] || 0,
          f = "".concat(u, " ").concat(s);
        e[u] = s + 1;
        var l = c(f),
          p = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== l
          ? (a[l].references++, a[l].updater(p))
          : a.push({ identifier: f, updater: y(p, n), references: 1 }),
          r.push(f);
      }
      return r;
    }
    function s(t) {
      var n = document.createElement("style"),
        r = t.attributes || {};
      if (void 0 === r.nonce) {
        var o = e.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (t) {
          n.setAttribute(t, r[t]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(n);
      else {
        var a = i(t.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(n);
      }
      return n;
    }
    var f,
      l =
        ((f = []),
        function (t, n) {
          return (f[t] = n), f.filter(Boolean).join("\n");
        });
    function p(t, n, e, r) {
      var o = e
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (t.styleSheet) t.styleSheet.cssText = l(n, o);
      else {
        var i = document.createTextNode(o),
          a = t.childNodes;
        a[n] && t.removeChild(a[n]),
          a.length ? t.insertBefore(i, a[n]) : t.appendChild(i);
      }
    }
    function d(t, n, e) {
      var r = e.css,
        o = e.media,
        i = e.sourceMap;
      if (
        (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = r;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      m = 0;
    function y(t, n) {
      var e, r, o;
      if (n.singleton) {
        var i = m++;
        (e = h || (h = s(n))),
          (r = p.bind(null, e, i, !1)),
          (o = p.bind(null, e, i, !0));
      } else
        (e = s(n)),
          (r = d.bind(null, e, n)),
          (o = function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(e);
          });
      return (
        r(t),
        function (n) {
          if (n) {
            if (
              n.css === t.css &&
              n.media === t.media &&
              n.sourceMap === t.sourceMap
            )
              return;
            r((t = n));
          } else o();
        }
      );
    }
    t.exports = function (t, n) {
      (n = n || {}).singleton ||
        "boolean" == typeof n.singleton ||
        (n.singleton = o());
      var e = u((t = t || []), n);
      return function (t) {
        if (
          ((t = t || []),
          "[object Array]" === Object.prototype.toString.call(t))
        ) {
          for (var r = 0; r < e.length; r++) {
            var o = c(e[r]);
            a[o].references--;
          }
          for (var i = u(t, n), s = 0; s < e.length; s++) {
            var f = c(e[s]);
            0 === a[f].references && (a[f].updater(), a.splice(f, 1));
          }
          e = i;
        }
      };
    };
  },
  function (t, n, e) {
    (n = e(3)(!1)).push([
      t.i,
      "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap);",
    ]),
      n.push([
        t.i,
        "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    padding: 10px;\n}\n\nmovie-list{\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: space-around;\n    margin-top: 50px;\n}\n\n\n\n\n",
        "",
      ]),
      (t.exports = n);
  },
  function (t, n, e) {
    "use strict";
    t.exports = function (t) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            var e = (function (t, n) {
              var e = t[1] || "",
                r = t[3];
              if (!r) return e;
              if (n && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (u =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        c
                      )),
                    "/*# ".concat(u, " */")),
                  i = r.sources.map(function (t) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(t, " */");
                  });
                return [e].concat(i).concat([o]).join("\n");
              }
              var a, c, u;
              return [e].join("\n");
            })(n, t);
            return n[2] ? "@media ".concat(n[2], " {").concat(e, "}") : e;
          }).join("");
        }),
        (n.i = function (t, e, r) {
          "string" == typeof t && (t = [[null, t, ""]]);
          var o = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var c = 0; c < t.length; c++) {
            var u = [].concat(t[c]);
            (r && o[u[0]]) ||
              (e &&
                (u[2]
                  ? (u[2] = "".concat(e, " and ").concat(u[2]))
                  : (u[2] = e)),
              n.push(u));
          }
        }),
        n
      );
    };
  },
  function (t, n) {
    function e(t) {
      return (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function o(t, n) {
      return !n || ("object" !== e(n) && "function" != typeof n)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : n;
    }
    function i(t) {
      var n = "function" == typeof Map ? new Map() : void 0;
      return (i = function (t) {
        if (
          null === t ||
          ((e = t), -1 === Function.toString.call(e).indexOf("[native code]"))
        )
          return t;
        var e;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== n) {
          if (n.has(t)) return n.get(t);
          n.set(t, r);
        }
        function r() {
          return a(t, arguments, s(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          u(r, t)
        );
      })(t);
    }
    function a(t, n, e) {
      return (a = c()
        ? Reflect.construct
        : function (t, n, e) {
            var r = [null];
            r.push.apply(r, n);
            var o = new (Function.bind.apply(t, r))();
            return e && u(o, e.prototype), o;
          }).apply(null, arguments);
    }
    function c() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function u(t, n) {
      return (u =
        Object.setPrototypeOf ||
        function (t, n) {
          return (t.__proto__ = n), t;
        })(t, n);
    }
    function s(t) {
      return (s = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var f = (function (t) {
      !(function (t, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && u(t, n);
      })(l, t);
      var n,
        e,
        i,
        a,
        f =
          ((n = l),
          function () {
            var t,
              e = s(n);
            if (c()) {
              var r = s(this).constructor;
              t = Reflect.construct(e, arguments, r);
            } else t = e.apply(this, arguments);
            return o(this, t);
          });
      function l() {
        var t;
        return (
          (function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, l),
          ((t = f.call(this)).shadowDOM = t.attachShadow({ mode: "open" })),
          t
        );
      }
      return (
        (e = l),
        (i = [
          {
            key: "connectedCallback",
            value: function () {
              this.render();
            },
          },
          {
            key: "render",
            value: function () {
              this.shadowDOM.innerHTML =
                "\n        <style>\n            *{\n                margin: 0;\n                padding: 0;\n                box-sizing: border-box;\n            }\n            :host {\n                display: block;\n                width: 100%;\n                background-color: coral;\n                font-size: inherit ;\n                color: white;\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            }\n            h3{\n                padding : 16px;\n            }\n        </style>\n        <h3>Movie Seeker</h3>";
            },
          },
        ]) && r(e.prototype, i),
        a && r(e, a),
        l
      );
    })(i(HTMLElement));
    customElements.define("app-bar", f);
  },
  function (t, n) {
    function e(t) {
      return (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function o(t, n) {
      return !n || ("object" !== e(n) && "function" != typeof n)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : n;
    }
    function i(t) {
      var n = "function" == typeof Map ? new Map() : void 0;
      return (i = function (t) {
        if (
          null === t ||
          ((e = t), -1 === Function.toString.call(e).indexOf("[native code]"))
        )
          return t;
        var e;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== n) {
          if (n.has(t)) return n.get(t);
          n.set(t, r);
        }
        function r() {
          return a(t, arguments, s(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          u(r, t)
        );
      })(t);
    }
    function a(t, n, e) {
      return (a = c()
        ? Reflect.construct
        : function (t, n, e) {
            var r = [null];
            r.push.apply(r, n);
            var o = new (Function.bind.apply(t, r))();
            return e && u(o, e.prototype), o;
          }).apply(null, arguments);
    }
    function c() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function u(t, n) {
      return (u =
        Object.setPrototypeOf ||
        function (t, n) {
          return (t.__proto__ = n), t;
        })(t, n);
    }
    function s(t) {
      return (s = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var f = (function (t) {
      !(function (t, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && u(t, n);
      })(l, t);
      var n,
        e,
        i,
        a,
        f =
          ((n = l),
          function () {
            var t,
              e = s(n);
            if (c()) {
              var r = s(this).constructor;
              t = Reflect.construct(e, arguments, r);
            } else t = e.apply(this, arguments);
            return o(this, t);
          });
      function l() {
        var t;
        return (
          (function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, l),
          ((t = f.call(this)).shadowDOM = t.attachShadow({ mode: "open" })),
          t
        );
      }
      return (
        (e = l),
        (i = [
          {
            key: "render",
            value: function () {
              this.shadowDOM.innerHTML =
                '\n            <style>\n             * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n            :host {\n                display: block;\n                margin-bottom: 18px;\n                box-shadow: 0 4px 8px 0 rgba(10, 10, 10, 0.2);\n                border-radius: 5px;\n                overflow: hidden;\n                flex-direction: column;\n                width: 270px;\n                height: 300px;\n                margin: 15px auto ;\n            }\n\n           .fan-art-movie {\n                width: 100%;\n                max-height: 300px;\n                object-fit: cover;\n                object-position: center;\n            }\n            h3 {\n                font-weight: lighter;\n                padding: 10px 10px 0px;\n                \n            }\n            p {\n                padding: 0px 10px 10px;\n                margin-top: 15px;\n                overflow: hidden;\n                display: -webkit-box;\n                -webkit-box-orient: vertical;\n                -webkit-line-clamp: 10; /* number of lines to show */\n            }\n            @media screen and (max-width:700px){\n                :host{\n                    width: 100%;\n                    margin: 20px 30px;\n                }\n            </style>\n            <img class="fan-art-movie" src="'
                  .concat(
                    this._movie.fanArt,
                    '" alt="Fan Art">\n            <h3>'
                  )
                  .concat(this._movie.name, "</h3>\n            <p>Stadium: ")
                  .concat(this._movie.stadium, "<br>")
                  .concat(this._movie.stadium, "\n            <br></p> ");
            },
          },
          {
            key: "movie",
            set: function (t) {
              (this._movie = t), this.render();
            },
          },
        ]) && r(e.prototype, i),
        a && r(e, a),
        l
      );
    })(i(HTMLElement));
    customElements.define("movie-item", f);
  },
  function (t, n) {
    function e(t) {
      return (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function r(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function o(t, n) {
      return !n || ("object" !== e(n) && "function" != typeof n)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : n;
    }
    function i(t) {
      var n = "function" == typeof Map ? new Map() : void 0;
      return (i = function (t) {
        if (
          null === t ||
          ((e = t), -1 === Function.toString.call(e).indexOf("[native code]"))
        )
          return t;
        var e;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== n) {
          if (n.has(t)) return n.get(t);
          n.set(t, r);
        }
        function r() {
          return a(t, arguments, s(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          u(r, t)
        );
      })(t);
    }
    function a(t, n, e) {
      return (a = c()
        ? Reflect.construct
        : function (t, n, e) {
            var r = [null];
            r.push.apply(r, n);
            var o = new (Function.bind.apply(t, r))();
            return e && u(o, e.prototype), o;
          }).apply(null, arguments);
    }
    function c() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function u(t, n) {
      return (u =
        Object.setPrototypeOf ||
        function (t, n) {
          return (t.__proto__ = n), t;
        })(t, n);
    }
    function s(t) {
      return (s = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var f = (function (t) {
      !(function (t, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && u(t, n);
      })(l, t);
      var n,
        e,
        i,
        a,
        f =
          ((n = l),
          function () {
            var t,
              e = s(n);
            if (c()) {
              var r = s(this).constructor;
              t = Reflect.construct(e, arguments, r);
            } else t = e.apply(this, arguments);
            return o(this, t);
          });
      function l() {
        var t;
        return (
          (function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, l),
          ((t = f.call(this)).shadowDOM = t.attachShadow({ mode: "open" })),
          t
        );
      }
      return (
        (e = l),
        (i = [
          {
            key: "connectedCallback",
            value: function () {
              this.render();
            },
          },
          {
            key: "render",
            value: function () {
              (this.shadowDOM.innerHTML =
                '\n        <style>\n        .search-container {\n                max-width: 800px;\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                padding: 5px;\n                border-radius: 5px;\n                display: flex;\n                position: sticky;\n                top: 10px;\n                background-color: white;\n                margin: 10px auto;\n                display: block;\n                \n            }\n            .search-container:hover{\n                border: 3px double coral;\n            }\n\n            .search-container > input {\n                width: 80%;\n                padding: 16px;\n                font-size: inherit;\n                text-align: center;\n                border: 0;\n            }\n\n            .search-container > input:focus::placeholder {\n                font-weight: bold;\n            }\n\n            .search-container >  input::placeholder {\n                color: coral;\n                font-weight: normal;\n            }\n\n            .search-container > button {\n                width: 18%;\n                cursor: pointer;\n                margin-left: auto;\n                padding: 16px;\n                background-color: coral;\n                color: white;\n                border: 0;\n                text-transform: uppercase;\n                border-radius: inherit;\n            }\n\n            .search-container > button:hover {\n                background-color: rgb(236, 91, 38);\n            }\n            h1{\n                font: xx-large;\n                font-family: \'Source Sans Pro\', sans-serif ;\n                color: coral;\n                text-align: center;\n                margin: 5px;\n            }\n            @media screen and (max-width: 550px){\n                .search-container {\n                    flex-direction: column;\n                    position: static;\n                    margin: 20px;\n                }\n\n                .search-container > input {\n                    width: 100%;\n                    margin-bottom: 12px;\n                }\n\n                .search-container > button {\n                    width: 100%;\n                }\n            }\n        </style>\n        <h1>Search movie</h1>\n        <div id="search-container" class="search-container">\n            <input placeholder="Movie title ..." id="searchElement" type="search">\n            <button id="searchButtonElement" type="submit">Search</button>\n        </div>'),
                this.shadowDOM
                  .querySelector("#searchButtonElement")
                  .addEventListener("click", this._clickEvent);
            },
          },
          {
            key: "clickEvent",
            set: function (t) {
              (this._clickEvent = t), this.render();
            },
          },
          {
            key: "value",
            get: function () {
              return this.shadowDOM.querySelector("#searchElement").value;
            },
          },
        ]) && r(e.prototype, i),
        a && r(e, a),
        l
      );
    })(i(HTMLElement));
    customElements.define("search-bar", f);
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    e(0), e(4), e(5);
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function o(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    function i(t, n) {
      return !n || ("object" !== r(n) && "function" != typeof n)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : n;
    }
    function a(t) {
      var n = "function" == typeof Map ? new Map() : void 0;
      return (a = function (t) {
        if (
          null === t ||
          ((e = t), -1 === Function.toString.call(e).indexOf("[native code]"))
        )
          return t;
        var e;
        if ("function" != typeof t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== n) {
          if (n.has(t)) return n.get(t);
          n.set(t, r);
        }
        function r() {
          return c(t, arguments, f(this).constructor);
        }
        return (
          (r.prototype = Object.create(t.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          s(r, t)
        );
      })(t);
    }
    function c(t, n, e) {
      return (c = u()
        ? Reflect.construct
        : function (t, n, e) {
            var r = [null];
            r.push.apply(r, n);
            var o = new (Function.bind.apply(t, r))();
            return e && s(o, e.prototype), o;
          }).apply(null, arguments);
    }
    function u() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function s(t, n) {
      return (s =
        Object.setPrototypeOf ||
        function (t, n) {
          return (t.__proto__ = n), t;
        })(t, n);
    }
    function f(t) {
      return (f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    var l = (function (t) {
      !(function (t, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && s(t, n);
      })(l, t);
      var n,
        e,
        r,
        a,
        c =
          ((n = l),
          function () {
            var t,
              e = f(n);
            if (u()) {
              var r = f(this).constructor;
              t = Reflect.construct(e, arguments, r);
            } else t = e.apply(this, arguments);
            return i(this, t);
          });
      function l() {
        var t;
        return (
          (function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, l),
          ((t = c.call(this)).shadowDOM = t.attachShadow({ mode: "open" })),
          t
        );
      }
      return (
        (e = l),
        (r = [
          {
            key: "render",
            value: function () {
              var t = this;
              (this.shadowDOM.innerHTML = ""),
                this._movies.forEach(function (n) {
                  var e = document.createElement("movie-item");
                  (e.movie = n), t.shadowDOM.appendChild(e);
                });
            },
          },
          {
            key: "renderError",
            value: function (t) {
              (this.shadowDOM.innerHTML =
                "\n        <style>\n            .placeholder {\n            font-weight: lighter;\n            color: rgba(0,0,0,0.5);\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            }\n            \n        </style>"),
                (this.shadowDOM.innerHTML += '<h2 class="placeholder">'.concat(
                  t,
                  "</h2>"
                ));
            },
          },
          {
            key: "movies",
            set: function (t) {
              (this._movies = t), this.render();
            },
          },
        ]) && o(e.prototype, r),
        a && o(e, a),
        l
      );
    })(a(HTMLElement));
    customElements.define("movie-list", l);
    e(6);
    var p = [
      {
        name: "Aston Villa",
        stadium: "Villa Park",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/trxryx1421747670.jpg",
        description: "KEREN",
      },
      {
        name: "Bournemouth",
        stadium: "Dean Court",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/wvuypx1469485789.jpg",
        description: "Cool",
      },
      {
        name: "Brighton",
        stadium: "Falmer Stadium",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/bk2b6j1504211012.jpg",
        description: "WOW",
      },
      {
        name: "Chelsea",
        stadium: "Stamford Bridge",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/rppwtt1424447399.jpg",
        description: "WEWOEOW",
      },
      {
        name: "Crystal Palace",
        stadium: "Selhurst Park",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/svsvqv1424367005.jpg",
        description: "dACAC",
      },
      {
        name: "Everton",
        stadium: "Goodison Park",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/yyuypw1420393451.jpg",
        description: "asda",
      },
      {
        name: "Arsenal",
        stadium: "Emirates Stadium",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/xyusxr1419347566.jpg",
        description: "Keren",
      },
      {
        name: "Aston Villa",
        stadium: "Villa Park",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/trxryx1421747670.jpg",
        description: "KEREN",
      },
      {
        name: "Bournemouth",
        stadium: "Dean Court",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/wvuypx1469485789.jpg",
        description: "Cool",
      },
      {
        name: "Brighton",
        stadium: "Falmer Stadium",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/bk2b6j1504211012.jpg",
        description: "WOW",
      },
      {
        name: "Chelsea",
        stadium: "Stamford Bridge",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/rppwtt1424447399.jpg",
        description: "WEWOEOW",
      },
      {
        name: "Crystal Palace",
        stadium: "Selhurst Park",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/svsvqv1424367005.jpg",
        description: "dACAC",
      },
      {
        name: "Everton",
        stadium: "Goodison Park",
        fanArt:
          "https://www.thesportsdb.com/images/media/team/fanart/yyuypw1420393451.jpg",
        description: "asda",
      },
    ];
    function d(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var h = (function () {
        function t() {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var n, e, r;
        return (
          (n = t),
          (r = [
            {
              key: "searchMovie",
              value: function (t) {
                return new Promise(function (n, e) {
                  var r = p.filter(function (n) {
                    return n.name.toUpperCase().includes(t.toUpperCase());
                  });
                  r.length ? n(r) : e("".concat(t, " is not found"));
                });
              },
            },
          ]),
          (e = null) && d(n.prototype, e),
          r && d(n, r),
          t
        );
      })(),
      m = function () {
        var t = document.querySelector("search-bar"),
          n = document.querySelector("movie-List"),
          e = function (t) {
            n.movies = t;
          },
          r = function (t) {
            n.renderError(t);
          };
        t.clickEvent = function () {
          h.searchMovie(t.value).then(e).catch(r);
        };
      };
    document.addEventListener("DOMContentLoaded", m);
  },
]);
