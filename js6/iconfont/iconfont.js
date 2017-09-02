;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-mima01" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M762.623549 396.549571l-27.851325 0L734.772224 288.635793c0-129.73476-92.452645-231.331669-223.801159-231.331669-131.87654 0-221.745337 103.762225-221.745337 231.331669l0 107.913778-27.850301 0c-61.421908 0-111.38074 50.710962-111.38074 113.081475l0 339.201445c0 62.371536 49.958832 113.081475 111.38074 113.081475l501.248122 0c61.420885 0 111.381763-50.709939 111.381763-113.081475L874.005312 509.631046C874.005312 447.25951 824.044434 396.549571 762.623549 396.549571zM344.905866 288.635793c0-96.340185 64.888869-174.789908 166.0652-174.789908 100.118232 0 168.099533 76.771501 168.099533 174.789908l0 107.913778L344.905866 396.549571 344.905866 288.635793zM818.302663 848.832492c0 31.185256-24.979928 56.540737-55.679114 56.540737L261.375427 905.373229c-30.700209 0-55.701626-25.355481-55.701626-56.540737L205.673801 509.631046c0-31.18628 25.001417-56.540737 55.701626-56.540737l501.248122 0c30.699186 0 55.679114 25.355481 55.679114 56.540737L818.302663 848.832492zM511.987209 566.128805c-30.743188 0-55.679114 25.354458-55.679114 56.583716 0 20.929682 11.208273 39.187511 27.850301 48.964178l0 92.3892c0 15.59314 12.456706 28.225855 27.828812 28.225855 15.394618 0 27.851325-12.632715 27.851325-28.225855l0-92.393293c16.646122-9.776667 27.852348-28.033473 27.852348-48.960085C567.690882 591.483262 542.753933 566.128805 511.987209 566.128805z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M963.523 990.162H67.443a31.723 31.723 0 0 1-30.405-40.77c10.824-36.369 44.75-94.996 144.912-167.766 79.007-57.397 170.767-101.409 210.474-109.269l9.24-1.83 4.06-8.283c4.05-8.256 7.324-23.764 8.549-40.472l0.556-7.661-5.233-5.778c-2.185-2.413-6.93-6.84-11.955-11.528-26.181-24.42-74.915-69.878-88.505-128.29l-2.023-8.69-8.258-3.851c-12.825-5.987-23.803-19.845-30.924-39.026-5.603-15.03-8.29-32.014-7.552-47.786 0.865-18.53 6.233-34.424 15.52-45.961l4.02-4.996v-6.351c0-1.069-0.074-2.245-0.221-3.494l-0.027-0.237c-2.792-25.361 1.393-63.37 10.923-99.196 8.738-32.849 26.144-79.711 59.449-116.42C386.287 52.557 441.94 32.3 515.453 32.3c73.465 0 129.131 20.272 165.452 60.253 62.697 69.099 66.14 178.469 62.179 214.782-0.032 0.293-0.069 0.585-0.109 0.878-0.224 1.63-0.224 2.856-0.224 3.586v6.349l4.024 5.004c9.273 11.53 14.639 27.405 15.512 45.903 0.755 15.995-1.86 32.533-7.562 47.828-6.99 18.889-18.23 33.122-30.811 38.977l-8.23 3.836-2.038 8.668c-14.688 62.53-64.337 111.93-85.538 133.025-2.857 2.842-5.556 5.526-6.778 6.88l-5.288 5.842 0.616 7.75c1.4 17.589 4.563 32.353 8.678 40.505l4.095 8.12 9.092 1.806c39.733 7.898 131.5 51.939 210.484 109.324 100.162 72.78 134.093 131.408 144.92 167.775a31.723 31.723 0 0 1-4.972 28.015 31.729 31.729 0 0 1-25.432 12.757z m-844.006-63.445h791.929c-21.303-29.255-55.675-61.763-99.732-93.777-81.397-59.136-162.263-93.793-185.551-98.422l-24.264-4.817a31.72 31.72 0 0 1-22.148-16.83l-11.06-21.927c-8.019-15.885-13.162-37.441-15.28-64.057l-1.7-21.404a31.716 31.716 0 0 1 8.103-23.8l14.467-15.983c2.336-2.583 5.31-5.543 9.076-9.29 18.821-18.726 57.985-57.694 68.524-102.56l5.562-23.663a31.723 31.723 0 0 1 17.482-21.497l17.726-8.26c0.68-1.154 1.614-2.982 2.598-5.642 5.59-14.991 3.629-28.858 1.861-32.154l-10.806-13.44a31.716 31.716 0 0 1-7-19.877v-17.52c0-1.67 0-6.029 0.746-11.705 3.553-33.578-3.031-117.405-46.12-164.894-23.778-26.175-63.644-39.454-118.477-39.454-54.863 0-94.707 13.253-118.422 39.395-46.043 50.747-57.337 137.955-54.307 165.937 0.426 3.656 0.64 7.282 0.64 10.778v17.53a31.727 31.727 0 0 1-7.008 19.89l-10.81 13.433c-2.139 3.944-3.363 18.14 1.849 32.12 1 2.692 1.93 4.52 2.6 5.664l17.926 8.36a31.725 31.725 0 0 1 17.489 21.559l5.522 23.727c9.208 39.583 47.254 75.07 69.986 96.273 6.557 6.117 11.737 10.947 15.713 15.343l14.334 15.826a31.718 31.718 0 0 1 8.127 23.597l-1.543 21.215c-1.079 14.712-4.44 42.535-14.858 63.78l-10.971 22.384a31.72 31.72 0 0 1-22.32 17.155l-24.651 4.883c-23.272 4.607-104.1 39.22-185.506 98.36-44.057 32.009-78.425 64.513-99.726 93.764z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)