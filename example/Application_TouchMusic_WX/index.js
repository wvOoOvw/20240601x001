import './adapter-weapp'

import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import App from '../Application_TouchMusic/App'

var canvas = window.canvas

setTimeout(() => {
  ReactCanvas2d.mount(<ReactCanvas2d.CanvasLayout><App /></ReactCanvas2d.CanvasLayout>, canvas, { renderFrameTimeDiffMax: 0 }).render()
}, 1000);