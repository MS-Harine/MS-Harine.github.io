;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    4478: function (t, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/projects',
        function () {
          return r(7571)
        },
      ])
    },
    7753: function (t, e, r) {
      'use strict'
      var n = r(7320)
      function a(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      function i() {
        return (i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e]
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            return t
          }).apply(this, arguments)
      }
      e.Z = function (t) {
        var e = i({}, t)
        return (0, n.tZ)(
          'img',
          (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(r)
              'function' === typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                  Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable
                  })
                )),
                n.forEach(function (e) {
                  a(t, e, r[e])
                })
            }
            return t
          })({}, e)
        )
      }
    },
    1476: function (t, e, r) {
      'use strict'
      r.d(e, {
        TQ: function () {
          return s
        },
        $t: function () {
          return d
        },
        Uy: function () {
          return m
        },
      })
      var n = r(7320),
        a = r(9008),
        i = r(1163),
        c = r(7059),
        o = r.n(c),
        l = function (t) {
          var e = t.title,
            r = t.description,
            c = t.ogType,
            l = t.ogImage,
            s = t.twImage,
            d = t.canonicalUrl,
            m = (0, i.useRouter)()
          return (0, n.BX)(a.default, {
            children: [
              (0, n.tZ)('title', { children: e }),
              (0, n.tZ)('meta', { name: 'robots', content: 'follow, index' }),
              (0, n.tZ)('meta', { name: 'description', content: r }),
              (0, n.tZ)('meta', {
                property: 'og:url',
                content: ''.concat(o().siteUrl).concat(m.asPath),
              }),
              (0, n.tZ)('meta', { property: 'og:type', content: c }),
              (0, n.tZ)('meta', { property: 'og:site_name', content: o().title }),
              (0, n.tZ)('meta', { property: 'og:description', content: r }),
              (0, n.tZ)('meta', { property: 'og:title', content: e }),
              Array.isArray(l)
                ? l.map(function (t) {
                    var e = t.url
                    return (0, n.tZ)('meta', { property: 'og:image', content: e }, e)
                  })
                : (0, n.tZ)('meta', { property: 'og:image', content: l }, l),
              (0, n.tZ)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
              (0, n.tZ)('meta', { name: 'twitter:site', content: o().twitter }),
              (0, n.tZ)('meta', { name: 'twitter:title', content: e }),
              (0, n.tZ)('meta', { name: 'twitter:description', content: r }),
              (0, n.tZ)('meta', { name: 'twitter:image', content: s }),
              (0, n.tZ)('link', {
                rel: 'canonical',
                href: d || ''.concat(o().siteUrl).concat(m.asPath),
              }),
            ],
          })
        },
        s = function (t) {
          var e = t.title,
            r = t.description,
            a = o().siteUrl + o().socialBanner,
            i = o().siteUrl + o().socialBanner
          return (0, n.tZ)(l, {
            title: e,
            description: r,
            ogType: 'website',
            ogImage: a,
            twImage: i,
          })
        },
        d = function (t) {
          var e = t.title,
            r = t.description,
            c = o().siteUrl + o().socialBanner,
            s = o().siteUrl + o().socialBanner,
            d = (0, i.useRouter)()
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(l, { title: e, description: r, ogType: 'website', ogImage: c, twImage: s }),
              (0, n.tZ)(a.default, {
                children: (0, n.tZ)('link', {
                  rel: 'alternate',
                  type: 'application/rss+xml',
                  title: ''.concat(r, ' - RSS feed'),
                  href: ''.concat(o().siteUrl).concat(d.asPath, '/feed.xml'),
                }),
              }),
            ],
          })
        },
        m = function (t) {
          var e = t.authorDetails,
            r = t.title,
            i = t.summary,
            c = t.date,
            s = t.lastmod,
            d = t.url,
            m = t.images,
            p = void 0 === m ? [] : m,
            u = t.canonicalUrl,
            g = new Date(c).toISOString(),
            h = new Date(s || c).toISOString(),
            f = (0 === p.length ? [o().socialBanner] : 'string' === typeof p ? [p] : p).map(
              function (t) {
                return { '@type': 'ImageObject', url: ''.concat(o().siteUrl).concat(t) }
              }
            ),
            y = {
              '@context': 'https://schema.org',
              '@type': 'Article',
              mainEntityOfPage: { '@type': 'WebPage', '@id': d },
              headline: r,
              image: f,
              datePublished: g,
              dateModified: h,
              author: e
                ? e.map(function (t) {
                    return { '@type': 'Person', name: t.name }
                  })
                : { '@type': 'Person', name: o().author },
              publisher: {
                '@type': 'Organization',
                name: o().author,
                logo: { '@type': 'ImageObject', url: ''.concat(o().siteUrl).concat(o().siteLogo) },
              },
              description: i,
            },
            Z = f[0].url
          return (0, n.BX)(n.HY, {
            children: [
              (0, n.tZ)(l, {
                title: r,
                description: i,
                ogType: 'article',
                ogImage: f,
                twImage: Z,
                canonicalUrl: u,
              }),
              (0, n.BX)(a.default, {
                children: [
                  c && (0, n.tZ)('meta', { property: 'article:published_time', content: g }),
                  s && (0, n.tZ)('meta', { property: 'article:modified_time', content: h }),
                  (0, n.tZ)('script', {
                    type: 'application/ld+json',
                    dangerouslySetInnerHTML: { __html: JSON.stringify(y, null, 2) },
                  }),
                ],
              }),
            ],
          })
        }
    },
    7571: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          default: function () {
            return m
          },
        })
      var n = r(7320),
        a = r(7059),
        i = r.n(a),
        c = [],
        o = r(7753),
        l = r(5741),
        s = function (t) {
          var e = t.title,
            r = t.description,
            a = t.imgSrc,
            i = t.href
          return (0, n.tZ)('div', {
            className: 'md p-4 md:w-1/2',
            style: { maxWidth: '544px' },
            children: (0, n.BX)('div', {
              className: ''.concat(
                a && 'h-full',
                '  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700'
              ),
              children: [
                a &&
                  (i
                    ? (0, n.tZ)(l.Z, {
                        href: i,
                        'aria-label': 'Link to '.concat(e),
                        children: (0, n.tZ)(o.Z, {
                          alt: e,
                          src: a,
                          className: 'object-cover object-center md:h-36 lg:h-48',
                          width: 544,
                          height: 306,
                        }),
                      })
                    : (0, n.tZ)(o.Z, {
                        alt: e,
                        src: a,
                        className: 'object-cover object-center md:h-36 lg:h-48',
                        width: 544,
                        height: 306,
                      })),
                (0, n.BX)('div', {
                  className: 'p-6',
                  children: [
                    (0, n.tZ)('h2', {
                      className: 'mb-3 text-2xl font-bold leading-8 tracking-tight',
                      children: i
                        ? (0, n.tZ)(l.Z, {
                            href: i,
                            'aria-label': 'Link to '.concat(e),
                            children: e,
                          })
                        : e,
                    }),
                    (0, n.tZ)('p', {
                      className: 'prose mb-3 max-w-none text-gray-500 dark:text-gray-400',
                      children: r,
                    }),
                    i &&
                      (0, n.tZ)(l.Z, {
                        href: i,
                        className:
                          'text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400',
                        'aria-label': 'Link to '.concat(e),
                        children: 'Learn more \u2192',
                      }),
                  ],
                }),
              ],
            }),
          })
        },
        d = r(1476)
      function m() {
        return (0, n.BX)(n.HY, {
          children: [
            (0, n.tZ)(d.TQ, {
              title: 'Projects - '.concat(i().author),
              description: i().description,
            }),
            (0, n.BX)('div', {
              className: 'divide-y divide-gray-200 dark:divide-gray-700',
              children: [
                (0, n.BX)('div', {
                  className: 'space-y-2 pt-6 pb-8 md:space-y-5',
                  children: [
                    (0, n.tZ)('h1', {
                      className:
                        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
                      children: 'Projects',
                    }),
                    (0, n.tZ)('p', {
                      className: 'text-lg leading-7 text-gray-500 dark:text-gray-400',
                      children: 'Showcase your projects with a hero image (16 x 9)',
                    }),
                  ],
                }),
                (0, n.tZ)('div', {
                  className: 'container py-12',
                  children: (0, n.tZ)('div', {
                    className: '-m-4 flex flex-wrap',
                    children: c.map(function (t) {
                      return (0,
                      n.tZ)(s, { title: t.title, description: t.description, imgSrc: t.imgSrc, href: t.href }, t.title)
                    }),
                  }),
                }),
              ],
            }),
          ],
        })
      }
    },
  },
  function (t) {
    t.O(0, [888, 179], function () {
      return (e = 4478), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  },
])
