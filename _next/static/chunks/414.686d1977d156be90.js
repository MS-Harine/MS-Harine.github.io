'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [414],
  {
    6414: function (t, e, n) {
      n.r(e)
      var a = n(7320),
        s = n(1720),
        i = n(425),
        c = n(7059),
        o = n.n(c)
      e.default = function (t) {
        var e = t.mapping,
          n = (0, s.useState)(!0),
          c = n[0],
          r = n[1],
          m = (0, i.F)(),
          u = m.theme,
          d = m.resolvedTheme,
          g =
            '' === o().comment.giscusConfig.themeURL
              ? 'dark' === u || 'dark' === d
                ? o().comment.giscusConfig.darkTheme
                : o().comment.giscusConfig.theme
              : o().comment.giscusConfig.themeURL,
          f = 'comments-container',
          p = (0, s.useCallback)(
            function () {
              r(!1)
              var t = document.createElement('script')
              ;(t.src = 'https://giscus.app/client.js'),
                t.setAttribute('data-repo', o().comment.giscusConfig.repo),
                t.setAttribute('data-repo-id', o().comment.giscusConfig.repositoryId),
                t.setAttribute('data-category', o().comment.giscusConfig.category),
                t.setAttribute('data-category-id', o().comment.giscusConfig.categoryId),
                t.setAttribute('data-mapping', e),
                t.setAttribute('data-reactions-enabled', o().comment.giscusConfig.reactions),
                t.setAttribute('data-emit-metadata', o().comment.giscusConfig.metadata),
                t.setAttribute('data-theme', g),
                t.setAttribute('crossorigin', 'anonymous'),
                (t.async = !0)
              var n = document.getElementById(f)
              return (
                n && n.appendChild(t),
                function () {
                  var t = document.getElementById(f)
                  t && (t.innerHTML = '')
                }
              )
            },
            [g, e]
          )
        return (
          (0, s.useEffect)(
            function () {
              document.querySelector('iframe.giscus-frame') && p()
            },
            [p]
          ),
          (0, a.BX)('div', {
            className: 'pt-6 pb-6 text-center text-gray-700 dark:text-gray-300',
            children: [
              c && (0, a.tZ)('button', { onClick: p, children: 'Load Comments' }),
              (0, a.tZ)('div', { className: 'giscus', id: f }),
            ],
          })
        )
      }
    },
  },
])
