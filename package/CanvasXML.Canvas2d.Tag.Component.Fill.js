import Canvas2d from './CanvasXML.Canvas2d'

const App = {
  locationMount: (dom) => {
    Canvas2d.Tag.locationMount(dom)
  },

  locationUnmount: (dom) => {
    Canvas2d.Tag.locationUnmount(dom)
  },
  
  renderMount: (dom) => {
    Canvas2d.Tag.renderMount_0(dom)

    Canvas2d.context().fill()

    Canvas2d.Tag.renderMount_1(dom)
  },

  renderUnmount: (dom) => {
    Canvas2d.Tag.renderUnmount(dom)
  },
}

export default App