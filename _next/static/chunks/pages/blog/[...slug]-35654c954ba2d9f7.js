;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [94],
  {
    7847: function (t, n, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/blog/[...slug]',
        function () {
          return r(3274)
        },
      ])
    },
    3274: function (t, n, r) {
      'use strict'
      r.r(n),
        r.d(n, {
          __N_SSG: function () {
            return a
          },
          default: function () {
            return i
          },
        })
      var e = r(7320),
        o = r(5941),
        u = r(1460),
        a = !0
      function i(t) {
        var n = t.post,
          r = t.authorDetails,
          a = t.prev,
          i = t.next,
          c = n.mdxSource,
          l = n.toc,
          s = n.frontMatter
        return (0, e.tZ)(e.HY, {
          children:
            'draft' in s && !0 !== s.draft
              ? (0, e.tZ)(u.J, {
                  layout: s.layout || 'PostLayout',
                  toc: l,
                  mdxSource: c,
                  frontMatter: s,
                  authorDetails: r,
                  prev: a,
                  next: i,
                })
              : (0, e.tZ)('div', {
                  className: 'mt-24 text-center',
                  children: (0, e.BX)(o.Z, {
                    children: [
                      'Under Construction',
                      ' ',
                      (0, e.tZ)('span', {
                        role: 'img',
                        'aria-label': 'roadwork sign',
                        children: '\ud83d\udea7',
                      }),
                    ],
                  }),
                }),
        })
      }
    },
  },
  function (t) {
    t.O(0, [774, 545, 460, 888, 179], function () {
      return (n = 7847), t((t.s = n))
      var n
    })
    var n = t.O()
    _N_E = n
  },
])
