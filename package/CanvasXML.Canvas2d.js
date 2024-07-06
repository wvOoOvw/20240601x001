import Tag from './CanvasXML.Canvas2d.Tag'
import Event from './CanvasXML.Canvas2d.Event'
import Location from './CanvasXML.Canvas2d.Location'

var canvas
var context
var dpr
var rect

const update = () => {
  rect = canvas.getBoundingClientRect()
  canvas.width = canvas.offsetWidth * dpr
  canvas.height = canvas.offsetHeight * dpr
  canvas.coordinate = Location.coordinate({ x: 0, y: 0, w: canvas.width, h: canvas.height })
}

const mount = (canvas_0, dpr_0) => {
  canvas = canvas_0
  dpr = dpr_0

  context = canvas.getContext('2d')

  update()

  Event.removeEventListenerWithCanvas(canvas)
  Event.addEventListenerWithCanvas(canvas)
}

const render = (dom) => {
  context.clearRect(0, 0, canvas.width, canvas.height)

  Event.clearEventListener()

  Tag.relocation(dom)
  Tag.rerender(dom)
}

const Export = { dpr: () => dpr, canvas: () => canvas, context: () => context, rect: () => rect, update, mount, render, Tag, Event, Location }

export default Export