var newKeydown = null
var stopPropagationIfNeeded = null
var handleMouseWheel = null
var pagechangeFC = null
var scalechangeFC = null
var localizedFC = null
var webViewerHashchangeFC = null
var webViewerResizeFC = null
var updateviewareaFC = null
var pdfHistoryBeforeUnload = null
var presentationmodechangedFC = null
var pdfHistoryPopstate = null

function cleanCache() {
  // window.PDFBug.cleanup()
  //   console.log(window.PDFBug.cleanup())
  window.removeEventListener('keydown', newKeydown, true)
  window.removeEventListener('beforeprint', stopPropagationIfNeeded, false)
  window.removeEventListener('afterprint', stopPropagationIfNeeded, false)
  window.removeEventListener('DOMMouseScroll', handleMouseWheel)
  window.removeEventListener('mousewheel', handleMouseWheel)
  window.removeEventListener('pagechange', pagechangeFC, true)
  window.removeEventListener('scalechange', scalechangeFC, true)
  window.removeEventListener('localized', localizedFC, true)
  window.removeEventListener('hashchange', webViewerHashchangeFC)
  window.removeEventListener('resize', webViewerResizeFC)
  window.removeEventListener('updateviewarea', updateviewareaFC, true)
  window.removeEventListener('presentationmodechanged', presentationmodechangedFC)
  window.removeEventListener('beforeunload', pdfHistoryBeforeUnload, false)
  window.removeEventListener('popstate', pdfHistoryPopstate, false)
}
cleanCache()
