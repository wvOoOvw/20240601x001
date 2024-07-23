import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import App from './App'

var canvas

canvas = document.createElement('canvas')
canvas.style.position = 'absolute'
canvas.style.top = '0'
canvas.style.left = '0'
canvas.style.width = '100%'
canvas.style.height = '100%'
canvas.style.background = 'black'
canvas.style.overflow = 'hidden'
canvas.style.userSelect = 'none'
window.addEventListener('wheel', e => e.preventDefault(), { passive: false })
window.addEventListener('touchmove', e => e.preventDefault(), { passive: false })
window.addEventListener('contextmenu', e => e.preventDefault(), { passive: false })
document.body.appendChild(canvas)

var mount = false

const observer = new ResizeObserver(() => {
  if (mount) ReactCanvas2d.unMount()
  ReactCanvas2d.mount(<ReactCanvas2d.CanvasLayout><App /></ReactCanvas2d.CanvasLayout>, canvas, { renderFrameTimeDiffMax: 12, powered: false }).render()
  mount = true
})

observer.observe(canvas)