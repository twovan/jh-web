/*
 * Context.js
 * Copyright Jacob Kelley
 * MIT License
 */
var context = context || (function () {
  let options = {
    fadeSpeed: 100,
    filter($obj) {
      // Modify $obj, Do not return
    },
    above: 'auto',
    preventDoubleContext: true,
    compress: false
  }
  let keyValue = ''

  function initialize(opts) {
    options = $.extend({}, options, opts)

    $(document).on('click', 'html', function (e) {
      $('.dropdown-context').fadeOut(options.fadeSpeed, function () {
        $('.dropdown-context').css({
          display: ''
        }).find('.drop-left').removeClass('drop-left')
      })
    })
    if (options.preventDoubleContext) {
      $(document).on('contextmenu', '.dropdown-context', function (e) {
        e.preventDefault()
      })
    }
    $(document).on('mouseenter', '.dropdown-submenu', function () {
      let $sub = $(this).find('.dropdown-context-sub:first'),
        subWidth = $sub.width(),
        subLeft = $sub.offset().left,
        collision = (subWidth + subLeft) > window.innerWidth
      if (collision) {
        $sub.addClass('drop-left')
      }
    })
  }

  function updateOptions(opts) {
    options = $.extend({}, options, opts)
  }

  function buildMenu(data, id, subMenu) {
    let subClass = (subMenu) ? ' dropdown-context-sub' : '',
      compressed = options.compress ? ' compressed-context' : '',
      $menu = $('<ul class="dropdown-menu dropdown-context' + subClass +
        compressed + '" id="dropdown-' + id + '"></ul>')
    let i = 0,
      linkTarget = ''
    for (i; i < data.length; i++) {
      if (typeof data[i].divider !== 'undefined') {
        $menu.append('<li class="divider"></li>')
      } else if (typeof data[i].header !== 'undefined') {
        $menu.append('<li class="nav-header">' + data[i].header + '</li>')
      } else {
        if (typeof data[i].href === 'undefined') {
          data[i].href = '#'
        }
        if (typeof data[i].target !== 'undefined') {
          linkTarget = ' target="' + data[i].target + '"'
        }
        if (typeof data[i].subMenu !== 'undefined') {
          $sub = ('<li class="dropdown-submenu"><a tabindex="-1" href="' +
            data[i].href + '">' + data[i].text + '</a></li>')
        } else {
          $sub = $('<li ><a  tabindex="-1" href="' + data[i].href + '"' +
            linkTarget + '>' + data[i].text + '</a></li>')
        }
        if (typeof data[i].action !== 'undefined') {
          let actiond = new Date(),
            actionID = 'event-' + actiond.getTime() * Math.floor(Math.random() *
              100000),
            eventAction = data[i].action
          $sub.find('a').attr('id', actionID)
          if (window.getSelection().toString() == '' && data[i].text ==
            '复制') {
            $sub.find('a').addClass('layui-hide')
          }
          $sub.find('a').attr('id', actionID)
          $('#' + actionID).addClass('context-event')
          $(document).on('click', '#' + actionID, eventAction)
        }
        $menu.append($sub)
        if (typeof data[i].subMenu !== 'undefined') {
          let subMenuData = buildMenu(data[i].subMenu, id, true)
          $menu.find('li:last').append(subMenuData)
        }
      }
      if (typeof options.filter === 'function') {
        options.filter($menu.find('li:last'))
      }
    }
    return $menu
  }

  function addContext(selector, data) {
    let d = new Date(),
      id = d.getTime(),
      $menu = buildMenu(data, id)

    $('body').append($menu)
    $(document).on('contextmenu', selector, function (e) {
      e.preventDefault()
      e.stopPropagation()
      if (!(document.activeElement.tagName == 'INPUT' || document.activeElement
        .tagName === 'TEXTAREA') && window.getSelection().toString() ==
        '') {
        return false
      }
      $('.dropdown-context').find('li').each(function () {
        if ($(this).find('a').html() == '复制') {
          $(this).find('a').attr('href', 'javascript:;')
          if (window.getSelection().toString()) {
            $(this).find('a').removeClass('layui-hide')
          } else {
            $(this).find('a').addClass('layui-hide')
          }
        } else if ($(this).find('a').html() == '粘贴') {
          $(this).find('a').attr('href', 'javascript:;')
          if (document.activeElement.tagName == 'INPUT' || document
            .activeElement.tagName == 'TEXTAREA') {
            $(this).find('a').removeClass('layui-hide')
          } else {
            $(this).find('a').addClass('layui-hide')
          }
        }
      })
      keyValue = $(document.activeElement).attr('name')
      $('.dropdown-context:not(.dropdown-context-sub)').hide()

      $dd = $('#dropdown-' + id)
      if (typeof options.above === 'boolean' && options.above) {
        $dd.addClass('dropdown-context-up').css({
          top: e.pageY - 20 - $('#dropdown-' + id).height(),
          left: e.pageX - 13
        }).fadeIn(options.fadeSpeed)
      } else if (typeof options.above === 'string' && options.above ==
        'auto') {
        $dd.removeClass('dropdown-context-up')
        let autoH = $dd.height() + 12
        // if ((e.pageY + autoH) > $('html').height()) {
        // 	$dd.addClass('dropdown-context-up').css({
        // 		top: e.pageY - 20 - autoH,
        // 		left: e.pageX - 13
        // 	}).fadeIn(options.fadeSpeed);
        // } else {
        if ((e.pageX + $dd.width()) > $('html').width()) {
          $dd.css({
            top: e.pageY + 10,
            left: e.pageX + ($('html').width() - $dd.width() - e.pageX)
          }).fadeIn(options.fadeSpeed)
        } else {
          $dd.css({
            top: e.pageY + 10,
            left: e.pageX - 13
          }).fadeIn(options.fadeSpeed)
        }
        // }
      }
    })
  }

  function destroyContext(selector) {
    $(document).off('contextmenu', selector).off('click', '.context-event')
  }

  function getValue() {
    return keyValue
  }
  return {
    init: initialize,
    settings: updateOptions,
    attach: addContext,
    destroy: destroyContext,
    name: getValue
  }
})()
$(document.body).bind({
  copy(e) {
    let cpTxt = window.getSelection().toString()
    let clipboardData = window.clipboardData // for IE
    if (!clipboardData) {
      clipboardData = e.originalEvent.clipboardData
    }
    clipboardData.setData('Text', cpTxt)
    return false
  },
  paste(e) { // paste事件
    let eve = e.originalEvent
    let cp = eve.clipboardData
    let data = null
    let clipboardData = window.clipboardData // IE
    if (!clipboardData) { // chrome
      clipboardData = e.originalEvent.clipboardData
    }
    data = clipboardData.getData('Text')
    let targetName = context.name()
    if (targetName) {
      $('[name=' + targetName + ']').focus()
      let sel = getCursortPosition($('[name=' + targetName + ']')[0])
      let string = $('[name=' + targetName + ']').val()
      let str = setStrMarke(string, data, sel)
      $('[name=' + targetName + ']').val(str)
      e.preventDefault()
    }
  }
})

function getCursortPosition(obj) {
  let cursorIndex = 0
  if (document.selection) {
    // IE Support
    obj.focus()
    let range = document.selection.createRange()
    range.moveStart('character', -obj.value.length)
    cursorIndex = range.text.length
  } else if (obj.selectionStart || obj.selectionStart == 0) {
    // another support
    cursorIndex = obj.selectionStart
  }
  return cursorIndex
}

function setStrMarke(str, subStr, indexs) {
  let getString = window.getSelection().toString()
  let str = str
  if (getString) {
    str = str.replace(getString, '')
  }
  let string = str.substr(0, indexs) + subStr + str.substr(indexs, str.length)
  return string
}
