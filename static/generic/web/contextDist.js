$(document).ready(function () {
  $(document).on('copy', function (e) {
    window.parent.eventEmitter.emit('doCopyAsync', window.getSelection().toString())
  })
  context.init({
    preventDoubleContext: false
  })
  context.attach('html', [{
    text: '标记',
    action(e) {
      // window.parent.receive(window.getSelection().toString())
      window.parent.eventEmitter.emit('doMarksAsync', window.getSelection().toString())
    }
  },
  {
    text: '复制',
    action(e) {
      document.execCommand('Copy')
      // let targetName = context.name();
      // if (targetName) {
      //   $('[name=' + targetName + ']').focus();
      // }
      // ChromClipBoard.Copy();
      window.parent.eventEmitter.emit('doCopyAsync', window.getSelection().toString())
      e.preventDefault()
    }
  }
  ])
})
