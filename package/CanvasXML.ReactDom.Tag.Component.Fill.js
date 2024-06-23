import React from './CanvasXML.React'
import ReactDom from './CanvasXML.ReactDom'

import ReactDomTag from './CanvasXML.ReactDom.Tag'

const App = {
  locationMount: (dom) => {
    ReactDomTag.locationMount(dom)
  },

  locationUnmount: (dom) => {
    ReactDomTag.locationUnmount(dom)
  },
  
  renderMount: (dom) => {
    ReactDomTag.renderMount_0(dom)

    ReactDom.context().fill()

    ReactDomTag.renderMount_1(dom)
  },

  renderUnmount: (dom) => {
    ReactDomTag.renderUnmount(dom)
  },
}

export default App