;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    425: function (e, t, n) {
      'use strict'
      n.d(t, {
        f: function () {
          return u
        },
        F: function () {
          return i
        },
      })
      var r = n(1720),
        a = n(9008),
        o = (0, r.createContext)({ setTheme: function (e) {}, themes: [] }),
        i = function () {
          return (0, r.useContext)(o)
        },
        l = ['light', 'dark'],
        c = '(prefers-color-scheme: dark)',
        u = function (e) {
          var t = e.forcedTheme,
            n = e.disableTransitionOnChange,
            a = void 0 !== n && n,
            i = e.enableSystem,
            u = void 0 === i || i,
            h = e.enableColorScheme,
            v = void 0 === h || h,
            p = e.storageKey,
            g = void 0 === p ? 'theme' : p,
            y = e.themes,
            w = void 0 === y ? ['light', 'dark'] : y,
            b = e.defaultTheme,
            x = void 0 === b ? (u ? 'system' : 'light') : b,
            _ = e.attribute,
            k = void 0 === _ ? 'data-theme' : _,
            E = e.value,
            O = e.children,
            Z = (0, r.useState)(function () {
              return f(g, x)
            }),
            T = Z[0],
            C = Z[1],
            S = (0, r.useState)(function () {
              return f(g)
            }),
            j = S[0],
            M = S[1],
            N = E ? Object.values(E) : w,
            I = (0, r.useCallback)(
              function (e) {
                var n = m(e)
                M(n), 'system' !== T || t || z(n, !1)
              },
              [T, t]
            ),
            L = (0, r.useRef)(I)
          L.current = I
          var z = (0, r.useCallback)(function (e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = !0)
            var r = (null == E ? void 0 : E[e]) || e,
              o = a && n ? d() : null
            if (t)
              try {
                localStorage.setItem(g, e)
              } catch (e) {}
            if ('system' === e && u) {
              var i = m()
              r = (null == E ? void 0 : E[i]) || i
            }
            if (n) {
              var l,
                c = document.documentElement
              'class' === k
                ? ((l = c.classList).remove.apply(l, N), c.classList.add(r))
                : c.setAttribute(k, r),
                null == o || o()
            }
          }, [])
          ;(0, r.useEffect)(function () {
            var e = function () {
                return L.current.apply(L, [].slice.call(arguments))
              },
              t = window.matchMedia(c)
            return (
              t.addListener(e),
              e(t),
              function () {
                return t.removeListener(e)
              }
            )
          }, [])
          var B = (0, r.useCallback)(
            function (e) {
              t ? z(e, !0, !1) : z(e), C(e)
            },
            [t]
          )
          return (
            (0, r.useEffect)(
              function () {
                var e = function (e) {
                  e.key === g && B(e.newValue)
                }
                return (
                  window.addEventListener('storage', e),
                  function () {
                    return window.removeEventListener('storage', e)
                  }
                )
              },
              [B]
            ),
            (0, r.useEffect)(
              function () {
                if (v) {
                  var e =
                    t && l.includes(t) ? t : T && l.includes(T) ? T : ('system' === T && j) || null
                  document.documentElement.style.setProperty('color-scheme', e)
                }
              },
              [v, T, j, t]
            ),
            r.default.createElement(
              o.Provider,
              {
                value: {
                  theme: T,
                  setTheme: B,
                  forcedTheme: t,
                  resolvedTheme: 'system' === T ? j : T,
                  themes: u ? [].concat(w, ['system']) : w,
                  systemTheme: u ? j : void 0,
                },
              },
              r.default.createElement(s, {
                forcedTheme: t,
                storageKey: g,
                attribute: k,
                value: E,
                enableSystem: u,
                defaultTheme: x,
                attrs: N,
              }),
              O
            )
          )
        },
        s = (0, r.memo)(
          function (e) {
            var t = e.forcedTheme,
              n = e.storageKey,
              o = e.attribute,
              i = e.enableSystem,
              l = e.defaultTheme,
              u = e.value,
              s =
                'class' === o
                  ? 'var d=document.documentElement.classList;d.remove(' +
                    e.attrs
                      .map(function (e) {
                        return "'" + e + "'"
                      })
                      .join(',') +
                    ');'
                  : 'var d=document.documentElement;',
              f = function (e, t) {
                e = (null == u ? void 0 : u[e]) || e
                var n = t ? e : "'" + e + "'"
                return 'class' === o ? 'd.add(' + n + ')' : "d.setAttribute('" + o + "', " + n + ')'
              },
              d = 'system' === l
            return r.default.createElement(
              a.default,
              null,
              r.default.createElement(
                'script',
                t
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: { __html: '!function(){' + s + f(t) + '}()' },
                    }
                  : i
                  ? {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try {' +
                          s +
                          "var e=localStorage.getItem('" +
                          n +
                          "');" +
                          (d ? '' : f(l) + ';') +
                          'if("system"===e||(!e&&' +
                          d +
                          ')){var t="' +
                          c +
                          '",m=window.matchMedia(t);m.media!==t||m.matches?' +
                          f('dark') +
                          ':' +
                          f('light') +
                          '}else if(e) ' +
                          (u ? 'var x=' + JSON.stringify(u) + ';' : '') +
                          f(u ? 'x[e]' : 'e', !0) +
                          '}catch(e){}}()',
                      },
                    }
                  : {
                      key: 'next-themes-script',
                      dangerouslySetInnerHTML: {
                        __html:
                          '!function(){try{' +
                          s +
                          'var e=localStorage.getItem("' +
                          n +
                          '");if(e){' +
                          (u ? 'var x=' + JSON.stringify(u) + ';' : '') +
                          f(u ? 'x[e]' : 'e', !0) +
                          '}else{' +
                          f(l) +
                          ';}}catch(t){}}();',
                      },
                    }
              )
            )
          },
          function (e, t) {
            return e.forcedTheme === t.forcedTheme
          }
        ),
        f = function (e, t) {
          if ('undefined' != typeof window) {
            var n
            try {
              n = localStorage.getItem(e) || void 0
            } catch (e) {}
            return n || t
          }
        },
        d = function () {
          var e = document.createElement('style')
          return (
            e.appendChild(
              document.createTextNode(
                '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
              )
            ),
            document.head.appendChild(e),
            function () {
              window.getComputedStyle(document.body),
                setTimeout(function () {
                  document.head.removeChild(e)
                }, 1)
            }
          )
        },
        m = function (e) {
          return e || (e = window.matchMedia(c)), e.matches ? 'dark' : 'light'
        }
    },
    3454: function (e, t, n) {
      'use strict'
      var r, a
      e.exports =
        (null === (r = n.g.process) || void 0 === r ? void 0 : r.env) &&
        'object' === typeof (null === (a = n.g.process) || void 0 === a ? void 0 : a.env)
          ? n.g.process
          : n(7663)
    },
    6363: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(7002)
        },
      ])
    },
    5741: function (e, t, n) {
      'use strict'
      var r = n(7320),
        a = n(1664)
      function o(e, t, n) {
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
        )
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            r.forEach(function (t) {
              o(e, t, n[t])
            })
        }
        return e
      }
      function l(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              o = Object.keys(e)
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]))
        }
        return a
      }
      t.Z = function (e) {
        var t = e.href,
          n = l(e, ['href']),
          o = t && t.startsWith('/'),
          c = t && t.startsWith('#')
        return o
          ? (0, r.tZ)(a.default, { href: t, children: (0, r.tZ)('a', i({}, n)) })
          : c
          ? (0, r.tZ)('a', i({ href: t }, n))
          : (0, r.tZ)('a', i({ target: '_blank', rel: 'noopener noreferrer', href: t }, n))
      }
    },
    3653: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return a
        },
      })
      var r = n(7320)
      function a(e) {
        var t = e.children
        return (0, r.tZ)('div', {
          className: 'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0',
          children: t,
        })
      }
    },
    6515: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return w
        },
      })
      var r,
        a,
        o = n(7320),
        i = n(1720)
      function l() {
        return (l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var c
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var s
      function f() {
        return (f =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var d
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var h
      function v() {
        return (v =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var p
      function g() {
        return (g =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var y = {
          mail: function (e) {
            return i.createElement(
              'svg',
              l({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20' }, e),
              r ||
                (r = i.createElement('path', {
                  d: 'M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z',
                })),
              a ||
                (a = i.createElement('path', {
                  d: 'm18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z',
                }))
            )
          },
          github: function (e) {
            return i.createElement(
              'svg',
              u({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
              c ||
                (c = i.createElement('path', {
                  d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
                }))
            )
          },
          facebook: function (e) {
            return i.createElement(
              'svg',
              f({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              s ||
                (s = i.createElement('path', {
                  d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                }))
            )
          },
          youtube: function (e) {
            return i.createElement(
              'svg',
              m({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              d ||
                (d = i.createElement('path', {
                  d: 'M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z',
                }))
            )
          },
          linkedin: function (e) {
            return i.createElement(
              'svg',
              v({ viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, e),
              h ||
                (h = i.createElement('path', {
                  d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                }))
            )
          },
          twitter: function (e) {
            return i.createElement(
              'svg',
              g({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
              p ||
                (p = i.createElement('path', {
                  d: 'M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z',
                }))
            )
          },
        },
        w = function (e) {
          var t = e.kind,
            n = e.href,
            r = e.size,
            a = void 0 === r ? 8 : r
          if (!n || ('mail' === t && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n)))
            return null
          var i = y[t]
          return (0, o.BX)('a', {
            className: 'text-sm text-gray-500 transition hover:text-gray-600',
            target: '_blank',
            rel: 'noopener noreferrer',
            href: n,
            children: [
              (0, o.tZ)('span', { className: 'sr-only', children: t }),
              (0, o.tZ)(i, {
                className:
                  'fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-'
                    .concat(a, ' w-')
                    .concat(a),
              }),
            ],
          })
        }
    },
    7059: function (e, t, n) {
      'use strict'
      var r = n(3454),
        a = {
          title: 'Harine Blog',
          author: 'Minseok Song',
          headerTitle: '\uac1c\ubc1c/\uc5f0\uad6c \ube14\ub85c\uadf8',
          description:
            '\uac1c\ubc1c \ubc0f \uc5f0\uad6c \uae30\ub85d\uc744 \ub0a8\uae30\ub294 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.',
          language: 'ko-KR',
          theme: 'system',
          siteUrl: 'https://MS-Harine.github.io',
          siteRepo: 'https://github.com/MS-Harine/MS-Harine.github.io',
          siteLogo: '/static/images/logo.png',
          image: '/static/images/avatar.png',
          socialBanner: '',
          email: 'Minseok.H.Song@gmail.com',
          github: 'https://github.com/MS-Harine',
          twitter: '',
          facebook: '',
          youtube: '',
          linkedin: '',
          locale: 'ko-KR',
          analytics: {
            plausibleDataDomain: '',
            simpleAnalytics: !1,
            umamiWebsiteId: '',
            googleAnalyticsId: '',
          },
          newsletter: { provider: 'buttondown' },
          comment: {
            provider: 'giscus',
            giscusConfig: {
              repo: r.env.NEXT_PUBLIC_GISCUS_REPO,
              repositoryId: r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
              category: r.env.NEXT_PUBLIC_GISCUS_CATEGORY,
              categoryId: r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
              mapping: 'pathname',
              reactions: '1',
              metadata: '0',
              theme: 'light',
              darkTheme: 'transparent_dark',
              themeURL: '',
            },
            utterancesConfig: {
              repo: r.env.NEXT_PUBLIC_UTTERANCES_REPO,
              issueTerm: '',
              label: '',
              theme: '',
              darkTheme: '',
            },
            disqusConfig: { shortname: r.env.NEXT_PUBLIC_DISQUS_SHORTNAME },
          },
        }
      e.exports = a
    },
    8418: function (e, t, n) {
      'use strict'
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != n) {
              var r,
                a,
                o = [],
                i = !0,
                l = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t);
                  i = !0
                );
              } catch (c) {
                ;(l = !0), (a = c)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (l) throw a
                }
              }
              return o
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return r(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return r(e, t)
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      t.default = void 0
      var o,
        i = (o = n(1720)) && o.__esModule ? o : { default: o },
        l = n(6273),
        c = n(387),
        u = n(7190)
      var s = {}
      function f(e, t, n, r) {
        if (e && l.isLocalURL(t)) {
          e.prefetch(t, n, r).catch(function (e) {
            0
          })
          var a = r && 'undefined' !== typeof r.locale ? r.locale : e && e.locale
          s[t + '%' + n + (a ? '%' + a : '')] = !0
        }
      }
      var d = function (e) {
        var t,
          n = !1 !== e.prefetch,
          r = c.useRouter(),
          o = i.default.useMemo(
            function () {
              var t = a(l.resolveHref(r, e.href, !0), 2),
                n = t[0],
                o = t[1]
              return { href: n, as: e.as ? l.resolveHref(r, e.as) : o || n }
            },
            [r, e.href, e.as]
          ),
          d = o.href,
          m = o.as,
          h = e.children,
          v = e.replace,
          p = e.shallow,
          g = e.scroll,
          y = e.locale
        'string' === typeof h && (h = i.default.createElement('a', null, h))
        var w = (t = i.default.Children.only(h)) && 'object' === typeof t && t.ref,
          b = a(u.useIntersection({ rootMargin: '200px' }), 2),
          x = b[0],
          _ = b[1],
          k = i.default.useCallback(
            function (e) {
              x(e), w && ('function' === typeof w ? w(e) : 'object' === typeof w && (w.current = e))
            },
            [w, x]
          )
        i.default.useEffect(
          function () {
            var e = _ && n && l.isLocalURL(d),
              t = 'undefined' !== typeof y ? y : r && r.locale,
              a = s[d + '%' + m + (t ? '%' + t : '')]
            e && !a && f(r, d, m, { locale: t })
          },
          [m, d, _, y, n, r]
        )
        var E = {
          ref: k,
          onClick: function (e) {
            t.props && 'function' === typeof t.props.onClick && t.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, r, a, o, i, c) {
                  ;('A' !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var t = e.currentTarget.target
                      return (
                        (t && '_self' !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      )
                    })(e) &&
                      l.isLocalURL(n))) &&
                    (e.preventDefault(),
                    null == i && r.indexOf('#') >= 0 && (i = !1),
                    t[a ? 'replace' : 'push'](n, r, { shallow: o, locale: c, scroll: i }))
                })(e, r, d, m, v, p, g, y)
          },
          onMouseEnter: function (e) {
            t.props && 'function' === typeof t.props.onMouseEnter && t.props.onMouseEnter(e),
              l.isLocalURL(d) && f(r, d, m, { priority: !0 })
          },
        }
        if (e.passHref || ('a' === t.type && !('href' in t.props))) {
          var O = 'undefined' !== typeof y ? y : r && r.locale,
            Z =
              r && r.isLocaleDomain && l.getDomainLocale(m, O, r && r.locales, r && r.domainLocales)
          E.href = Z || l.addBasePath(l.addLocale(m, O, r && r.defaultLocale))
        }
        return i.default.cloneElement(t, E)
      }
      t.default = d
    },
    7190: function (e, t, n) {
      'use strict'
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != n) {
              var r,
                a,
                o = [],
                i = !0,
                l = !1
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t);
                  i = !0
                );
              } catch (c) {
                ;(l = !0), (a = c)
              } finally {
                try {
                  i || null == n.return || n.return()
                } finally {
                  if (l) throw a
                }
              }
              return o
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return
            if ('string' === typeof e) return r(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === n && e.constructor && (n = e.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(n)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return r(e, t)
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            r = e.disabled || !l,
            u = o.useRef(),
            s = a(o.useState(!1), 2),
            f = s[0],
            d = s[1],
            m = a(o.useState(t ? t.current : null), 2),
            h = m[0],
            v = m[1],
            p = o.useCallback(
              function (e) {
                u.current && (u.current(), (u.current = void 0)),
                  r ||
                    f ||
                    (e &&
                      e.tagName &&
                      (u.current = (function (e, t, n) {
                        var r = (function (e) {
                            var t = e.rootMargin || '',
                              n = c.get(t)
                            if (n) return n
                            var r = new Map(),
                              a = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var t = r.get(e.target),
                                    n = e.isIntersecting || e.intersectionRatio > 0
                                  t && n && t(n)
                                })
                              }, e)
                            return c.set(t, (n = { id: t, observer: a, elements: r })), n
                          })(n),
                          a = r.id,
                          o = r.observer,
                          i = r.elements
                        return (
                          i.set(e, t),
                          o.observe(e),
                          function () {
                            i.delete(e),
                              o.unobserve(e),
                              0 === i.size && (o.disconnect(), c.delete(a))
                          }
                        )
                      })(
                        e,
                        function (e) {
                          return e && d(e)
                        },
                        { root: h, rootMargin: n }
                      )))
              },
              [r, h, n, f]
            )
          return (
            o.useEffect(
              function () {
                if (!l && !f) {
                  var e = i.requestIdleCallback(function () {
                    return d(!0)
                  })
                  return function () {
                    return i.cancelIdleCallback(e)
                  }
                }
              },
              [f]
            ),
            o.useEffect(
              function () {
                t && v(t.current)
              },
              [t]
            ),
            [p, f]
          )
        })
      var o = n(1720),
        i = n(9311),
        l = 'undefined' !== typeof IntersectionObserver
      var c = new Map()
    },
    7002: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return N
          },
        })
      var r = n(7320),
        a = (n(7762), n(6870), n(4315), n(1330), n(425)),
        o = n(9008),
        i = n(7059),
        l = n.n(i),
        c = n(4298),
        u = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                src: 'https://www.googletagmanager.com/gtag/js?id='.concat(
                  l().analytics.googleAnalyticsId
                ),
              }),
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                id: 'ga-script',
                children:
                  "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(
                    l().analytics.googleAnalyticsId,
                    "', {\n              page_path: window.location.pathname,\n            });\n        "
                  ),
              }),
            ],
          })
        }
      var s,
        f,
        d,
        m,
        h = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                'data-domain': l().analytics.plausibleDataDomain,
                src: 'https://plausible.io/js/plausible.js',
              }),
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                id: 'plausible-script',
                children:
                  '\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        ',
              }),
            ],
          })
        },
        v = function () {
          return (0, r.BX)(r.HY, {
            children: [
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                id: 'sa-script',
                children:
                  '\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        ',
              }),
              (0, r.tZ)(c.default, {
                strategy: 'lazyOnload',
                src: 'https://scripts.simpleanalyticscdn.com/latest.js',
              }),
            ],
          })
        },
        p = function () {
          return (0, r.tZ)(r.HY, {
            children: (0, r.tZ)(c.default, {
              async: !0,
              defer: !0,
              'data-website-id': l().analytics.umamiWebsiteId,
              src: 'https://umami.example.com/umami.js',
            }),
          })
        },
        g = function () {
          return (0, r.BX)(r.HY, {
            children: [
              l().analytics.plausibleDataDomain && (0, r.tZ)(h, {}),
              l().analytics.simpleAnalytics && (0, r.tZ)(v, {}),
              l().analytics.umamiWebsiteId && (0, r.tZ)(p, {}),
              l().analytics.googleAnalyticsId && (0, r.tZ)(u, {}),
            ],
          })
        },
        y = [
          { href: '/blog', title: 'Blog' },
          { href: '/tags', title: 'Tags' },
          { href: '/about', title: 'About' },
        ],
        w = n(1720)
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      var x = function (e) {
          return w.createElement(
            'svg',
            b(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                xmlnsXlink: 'http://www.w3.org/1999/xlink',
                viewBox: '344.564 330.278 111.737 91.218',
                width: 53.87,
                height: 43.61,
              },
              e
            ),
            w.createElement(
              'defs',
              null,
              w.createElement(
                'linearGradient',
                {
                  id: 'logo_svg__b',
                  gradientUnits: 'userSpaceOnUse',
                  x1: 420.97,
                  y1: 331.28,
                  x2: 420.97,
                  y2: 418.5,
                },
                w.createElement('stop', {
                  style: { stopColor: '#06b6d4', stopOpacity: 1 },
                  offset: '0%',
                }),
                w.createElement('stop', {
                  style: { stopColor: '#67e8f9', stopOpacity: 1 },
                  offset: '100%',
                })
              ),
              w.createElement(
                'linearGradient',
                {
                  id: 'logo_svg__d',
                  gradientUnits: 'userSpaceOnUse',
                  x1: 377.89,
                  y1: 331.28,
                  x2: 377.89,
                  y2: 418.5,
                },
                w.createElement('stop', {
                  style: { stopColor: '#06b6d4', stopOpacity: 1 },
                  offset: '0%',
                }),
                w.createElement('stop', {
                  style: { stopColor: '#67e8f9', stopOpacity: 1 },
                  offset: '100%',
                })
              ),
              s ||
                (s = w.createElement('path', {
                  d: 'M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z',
                  id: 'logo_svg__a',
                })),
              f ||
                (f = w.createElement('path', {
                  d: 'M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z',
                  id: 'logo_svg__c',
                }))
            ),
            d ||
              (d = w.createElement('use', {
                xlinkHref: '#logo_svg__a',
                fill: 'url(#logo_svg__b)',
              })),
            m ||
              (m = w.createElement('use', { xlinkHref: '#logo_svg__c', fill: 'url(#logo_svg__d)' }))
          )
        },
        _ = n(5741),
        k = n(3653),
        E = n(6515)
      function O() {
        return (0, r.tZ)('footer', {
          children: (0, r.BX)('div', {
            className: 'mt-16 flex flex-col items-center',
            children: [
              (0, r.BX)('div', {
                className: 'mb-3 flex space-x-4',
                children: [
                  (0, r.tZ)(E.Z, { kind: 'mail', href: 'mailto:'.concat(l().email), size: 6 }),
                  (0, r.tZ)(E.Z, { kind: 'github', href: l().github, size: 6 }),
                  (0, r.tZ)(E.Z, { kind: 'facebook', href: l().facebook, size: 6 }),
                  (0, r.tZ)(E.Z, { kind: 'youtube', href: l().youtube, size: 6 }),
                  (0, r.tZ)(E.Z, { kind: 'linkedin', href: l().linkedin, size: 6 }),
                  (0, r.tZ)(E.Z, { kind: 'twitter', href: l().twitter, size: 6 }),
                ],
              }),
              (0, r.BX)('div', {
                className: 'mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400',
                children: [
                  (0, r.tZ)('div', { children: l().author }),
                  (0, r.tZ)('div', { children: ' \u2022 ' }),
                  (0, r.tZ)('div', { children: '\xa9 '.concat(new Date().getFullYear()) }),
                  (0, r.tZ)('div', { children: ' \u2022 ' }),
                  (0, r.tZ)(_.Z, { href: '/', children: l().title }),
                ],
              }),
              (0, r.tZ)('div', {
                className: 'mb-8 text-sm text-gray-500 dark:text-gray-400',
                children: (0, r.tZ)(_.Z, {
                  href: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
                  children: 'Tailwind Nextjs Theme',
                }),
              }),
            ],
          }),
        })
      }
      var Z = function () {
          var e = (0, w.useState)(!1),
            t = e[0],
            n = e[1],
            a = function () {
              n(function (e) {
                return (document.body.style.overflow = e ? 'auto' : 'hidden'), !e
              })
            }
          return (0, r.BX)('div', {
            className: 'sm:hidden',
            children: [
              (0, r.tZ)('button', {
                type: 'button',
                className: 'ml-1 mr-1 h-8 w-8 rounded py-1',
                'aria-label': 'Toggle Menu',
                onClick: a,
                children: (0, r.tZ)('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 20 20',
                  fill: 'currentColor',
                  className: 'text-gray-900 dark:text-gray-100',
                  children: t
                    ? (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                        clipRule: 'evenodd',
                      })
                    : (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d: 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z',
                        clipRule: 'evenodd',
                      }),
                }),
              }),
              (0, r.BX)('div', {
                className:
                  'fixed top-24 right-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 '.concat(
                    t ? 'translate-x-0' : 'translate-x-full'
                  ),
                children: [
                  (0, r.tZ)('button', {
                    type: 'button',
                    'aria-label': 'toggle modal',
                    className: 'fixed h-full w-full cursor-auto focus:outline-none',
                    onClick: a,
                  }),
                  (0, r.tZ)('nav', {
                    className: 'fixed mt-8 h-full',
                    children: y.map(function (e) {
                      return (0,
                      r.tZ)('div', { className: 'px-12 py-4', children: (0, r.tZ)(_.Z, { href: e.href, className: 'text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100', onClick: a, children: e.title }) }, e.title)
                    }),
                  }),
                ],
              }),
            ],
          })
        },
        T = function () {
          var e = (0, w.useState)(!1),
            t = e[0],
            n = e[1],
            o = (0, a.F)(),
            i = o.theme,
            l = o.setTheme,
            c = o.resolvedTheme
          return (
            (0, w.useEffect)(function () {
              return n(!0)
            }, []),
            (0, r.tZ)('button', {
              'aria-label': 'Toggle Dark Mode',
              type: 'button',
              className: 'ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4',
              onClick: function () {
                return l('dark' === i || 'dark' === c ? 'light' : 'dark')
              },
              children: (0, r.tZ)('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                className: 'text-gray-900 dark:text-gray-100',
                children:
                  !t || ('dark' !== i && 'dark' !== c)
                    ? (0, r.tZ)('path', {
                        d: 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z',
                      })
                    : (0, r.tZ)('path', {
                        fillRule: 'evenodd',
                        d: 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z',
                        clipRule: 'evenodd',
                      }),
              }),
            })
          )
        },
        C = function (e) {
          var t = e.children
          return (0, r.tZ)(k.Z, {
            children: (0, r.BX)('div', {
              className: 'flex h-screen flex-col justify-between',
              children: [
                (0, r.BX)('header', {
                  className: 'flex items-center justify-between py-10',
                  children: [
                    (0, r.tZ)('div', {
                      children: (0, r.tZ)(_.Z, {
                        href: '/',
                        'aria-label': l().headerTitle,
                        children: (0, r.BX)('div', {
                          className: 'flex items-center justify-between',
                          children: [
                            (0, r.tZ)('div', { className: 'mr-3', children: (0, r.tZ)(x, {}) }),
                            'string' === typeof l().headerTitle
                              ? (0, r.tZ)('div', {
                                  className: 'hidden h-6 text-2xl font-semibold sm:block',
                                  children: l().headerTitle,
                                })
                              : l().headerTitle,
                          ],
                        }),
                      }),
                    }),
                    (0, r.BX)('div', {
                      className: 'flex items-center text-base leading-5',
                      children: [
                        (0, r.tZ)('div', {
                          className: 'hidden sm:block',
                          children: y.map(function (e) {
                            return (0,
                            r.tZ)(_.Z, { href: e.href, className: 'p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4', children: e.title }, e.title)
                          }),
                        }),
                        (0, r.tZ)(T, {}),
                        (0, r.tZ)(Z, {}),
                      ],
                    }),
                  ],
                }),
                (0, r.tZ)('main', { className: 'mb-auto', children: t }),
                (0, r.tZ)(O, {}),
              ],
            }),
          })
        },
        S = (n(1163), n(3454))
      function j(e, t, n) {
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
        )
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            r.forEach(function (t) {
              j(e, t, n[t])
            })
        }
        return e
      }
      S.env.SOCKET
      function N(e) {
        var t = e.Component,
          n = e.pageProps
        return (0, r.BX)(a.f, {
          attribute: 'class',
          defaultTheme: l().theme,
          children: [
            (0, r.tZ)(o.default, {
              children: (0, r.tZ)('meta', {
                content: 'width=device-width, initial-scale=1',
                name: 'viewport',
              }),
            }),
            false,
            (0, r.tZ)(g, {}),
            (0, r.tZ)(C, { children: (0, r.tZ)(t, M({}, n)) }),
          ],
        })
      }
    },
    1330: function () {},
    4315: function () {},
    6870: function () {},
    7762: function () {},
    7663: function (e) {
      !(function () {
        var t = {
            162: function (e) {
              var t,
                n,
                r = (e.exports = {})
              function a() {
                throw new Error('setTimeout has not been defined')
              }
              function o() {
                throw new Error('clearTimeout has not been defined')
              }
              function i(e) {
                if (t === setTimeout) return setTimeout(e, 0)
                if ((t === a || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0)
                try {
                  return t(e, 0)
                } catch (r) {
                  try {
                    return t.call(null, e, 0)
                  } catch (r) {
                    return t.call(this, e, 0)
                  }
                }
              }
              !(function () {
                try {
                  t = 'function' === typeof setTimeout ? setTimeout : a
                } catch (e) {
                  t = a
                }
                try {
                  n = 'function' === typeof clearTimeout ? clearTimeout : o
                } catch (e) {
                  n = o
                }
              })()
              var l,
                c = [],
                u = !1,
                s = -1
              function f() {
                u && l && ((u = !1), l.length ? (c = l.concat(c)) : (s = -1), c.length && d())
              }
              function d() {
                if (!u) {
                  var e = i(f)
                  u = !0
                  for (var t = c.length; t; ) {
                    for (l = c, c = []; ++s < t; ) l && l[s].run()
                    ;(s = -1), (t = c.length)
                  }
                  ;(l = null),
                    (u = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e)
                      if ((n === o || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e)
                      try {
                        n(e)
                      } catch (t) {
                        try {
                          return n.call(null, e)
                        } catch (t) {
                          return n.call(this, e)
                        }
                      }
                    })(e)
                }
              }
              function m(e, t) {
                ;(this.fun = e), (this.array = t)
              }
              function h() {}
              ;(r.nextTick = function (e) {
                var t = new Array(arguments.length - 1)
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
                c.push(new m(e, t)), 1 !== c.length || u || i(d)
              }),
                (m.prototype.run = function () {
                  this.fun.apply(null, this.array)
                }),
                (r.title = 'browser'),
                (r.browser = !0),
                (r.env = {}),
                (r.argv = []),
                (r.version = ''),
                (r.versions = {}),
                (r.on = h),
                (r.addListener = h),
                (r.once = h),
                (r.off = h),
                (r.removeListener = h),
                (r.removeAllListeners = h),
                (r.emit = h),
                (r.prependListener = h),
                (r.prependOnceListener = h),
                (r.listeners = function (e) {
                  return []
                }),
                (r.binding = function (e) {
                  throw new Error('process.binding is not supported')
                }),
                (r.cwd = function () {
                  return '/'
                }),
                (r.chdir = function (e) {
                  throw new Error('process.chdir is not supported')
                }),
                (r.umask = function () {
                  return 0
                })
            },
          },
          n = {}
        function r(e) {
          var a = n[e]
          if (void 0 !== a) return a.exports
          var o = (n[e] = { exports: {} }),
            i = !0
          try {
            t[e](o, o.exports, r), (i = !1)
          } finally {
            i && delete n[e]
          }
          return o.exports
        }
        r.ab = '//'
        var a = r(162)
        e.exports = a
      })()
    },
    9008: function (e, t, n) {
      e.exports = n(5443)
    },
    1664: function (e, t, n) {
      e.exports = n(8418)
    },
    1163: function (e, t, n) {
      e.exports = n(387)
    },
    4298: function (e, t, n) {
      e.exports = n(699)
    },
    6584: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          Fragment: function () {
            return r.HY
          },
          jsx: function () {
            return o
          },
          jsxs: function () {
            return o
          },
          jsxDEV: function () {
            return o
          },
        })
      var r = n(6400),
        a = 0
      function o(e, t, n, o, i) {
        var l,
          c,
          u = {}
        for (c in t) 'ref' == c ? (l = t[c]) : (u[c] = t[c])
        var s = {
          type: e,
          props: u,
          key: n,
          ref: l,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: --a,
          __source: o,
          __self: i,
        }
        if ('function' == typeof e && (l = e.defaultProps))
          for (c in l) void 0 === u[c] && (u[c] = l[c])
        return r.YM.vnode && r.YM.vnode(s), s
      }
    },
    7320: function (e, t, n) {
      'use strict'
      n.d(t, {
        HY: function () {
          return r.Fragment
        },
        tZ: function () {
          return r.jsx
        },
        BX: function () {
          return r.jsxs
        },
      })
      var r = n(6584)
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [179], function () {
      return t(6363), t(387)
    })
    var n = e.O()
    _N_E = n
  },
])
