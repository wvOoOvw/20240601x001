/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Caculate: () => (/* reexport */ CanvasXML_Caculate),
  Draw: () => (/* reexport */ CanvasXML_Draw),
  Layout: () => (/* reexport */ CanvasXML_Layout),
  Position: () => (/* reexport */ CanvasXML_Position),
  PositionBatch: () => (/* reexport */ CanvasXML_Position_Batch),
  PositionCover: () => (/* reexport */ CanvasXML_Position_Cover),
  React: () => (/* reexport */ CanvasXML_React),
  ReactDom: () => (/* reexport */ CanvasXML_ReactDom),
  ReactPlugin: () => (/* reexport */ CanvasXML_React_Plugin),
  "default": () => (/* binding */ package_0)
});

;// CONCATENATED MODULE: ./package/CanvasXML.Caculate.js
const number = (number, fixed) => Number(number.toFixed(fixed))

const random = (number, offset, fixed) => Number(((Math.random() * number).toFixed(fixed))) + offset

const range = (number, min, max) => Math.min(Math.max(number, min), max)

const Caculate = { number, random, range }

/* harmony default export */ const CanvasXML_Caculate = (Caculate);
;// CONCATENATED MODULE: ./package/CanvasXML.Draw.js
const drawImage = (context, position, image) => {
  var { x, y, w, h } = position

  if (image.width === 0 || image.height === 0) return

  var sx = 0
  var sy = 0
  var sw = image.width
  var sh = image.height

  context.drawImage(image, sx, sy, sw, sh, x, y, w, h)
}

const drawImageClipMaxCenter = (context, position, image) => {
  var { x, y, w, h } = position

  if (image.width === 0 || image.height === 0) return

  var sx = 0
  var sy = 0
  var sw = image.width
  var sh = image.height

  const dw = w / sw
  const dh = h / sh

  if (dw > dh) {
    sy = (sh - sh * dh / dw)
    sh = sh - (sh - sh * dh / dw)
  }

  if (dh > dw) {
    sx = (sw - sw * dw / dh)
    sw = sw - (sw - sw * dw / dh)
  }

  context.drawImage(image, sx, sy, sw, sh, x, y, w, h)
}

const drawImageClipMinCenter = (context, position, image) => {
  var { x, y, w, h } = position

  if (image.width === 0 || image.height === 0) return

  var sx = 0
  var sy = 0
  var sw = image.width
  var sh = image.height

  const dw = w / sw
  const dh = h / sh

  if (dw > dh) {
    x = x + (w - w * dh / dw) / 2
    w = w - (w - w * dh / dw)
  }

  if (dh > dw) {
    y = y + (h - h * dw / dh) / 2
    h = h - (h - h * dw / dh)
  }

  context.drawImage(image, sx, sy, sw, sh, x, y, w, h)
}

const drawArc = (context, position, radius, sAngle, eAngle, counterclockwise) => {
  var { x, y, w, h } = position

  context.beginPath()
  context.arc(x, y, radius, sAngle, eAngle, counterclockwise)
}

const drawRect = (context, position) => {
  var { x, y, w, h } = position

  context.beginPath()
  context.moveTo(x, y)
  context.lineTo(x + w, y)
  context.lineTo(x + w, y + h)
  context.lineTo(x, y + h)
  context.closePath()
}

const drawRectRadius = (context, position, radius) => {
  var { x, y, w, h } = position

  const radiusFill = Array.isArray(radius) ? radius : new Array(4).fill(radius)

  context.beginPath()
  context.moveTo(x, y + radiusFill[0])
  context.arcTo(x, y, x + radiusFill[0], y, radiusFill[0])
  context.lineTo(x + w - radiusFill[1], y)
  context.arcTo(x + w, y, x + w, y + radiusFill[1], radiusFill[1])
  context.lineTo(x + w, y + h - radiusFill[2])
  context.arcTo(x + w, y + h, x + w - radiusFill[2], y + h, radiusFill[2])
  context.lineTo(x + radiusFill[3], y + h)
  context.arcTo(x, y + h, x, y + h - radiusFill[3], radiusFill[3])
  context.closePath()
}

const drawText = (context, position, text) => {
  var { x, y, w, h } = position

  context.fillText(text, x, y)
}

const drawTextCaculateLine = (context, position, text) => {
  var { x, y, w, h } = position

  var caculateText = ''
  var caculateLine = []

  text.split('').forEach(i => {
    const tw = context.measureText(caculateText + i).width

    if (tw > w) caculateLine.push({ text: caculateText, w: tw, h: Number(context.font.match(/\d+px/)[0].replace('px', '')) })
    if (tw > w) caculateText = ''

    caculateText = caculateText + i
  })

  if (caculateText) caculateLine.push({ text: caculateText, w: context.measureText(caculateText).width, h: Number(context.font.match(/\d+px/)[0].replace('px', '')) })

  return caculateLine
}

const Draw = { drawImage, drawImageClipMinCenter, drawImageClipMaxCenter, drawArc, drawRect, drawRectRadius, drawText, drawTextCaculateLine }

/* harmony default export */ const CanvasXML_Draw = (Draw);
;// CONCATENATED MODULE: ./package/CanvasXML.Position.js
const l = (position) => position.x

const r = (position) => position.x + position.w

const t = (position) => position.y

const b = (position) => position.y + position.h

const wireframe = (position) => Object({ ...position, l: l(position), r: r(position), t: t(position), b: b(position) })


const cx = (position) => position.x + position.w / 2

const cy = (position) => position.y + position.h / 2

const ltx = (position) => position.x

const lty = (position) => position.y

const lbx = (position) => position.x

const lby = (position) => position.y + position.h

const rtx = (position) => position.x + position.w

const rty = (position) => position.y

const rbx = (position) => position.x + position.w

const rby = (position) => position.y + position.h

const point = (position) => Object({ ...position, cx: cx(position), cy: cy(position), ltx: ltx(position), lty: lty(position), lbx: lbx(position), lby: lby(position), rtx: rtx(position), rty: rty(position), rbx: rbx(position), rby: rby(position) })


const vmin = (position) => Math.min(position.w, position.h) * 0.01

const vmax = (position) => Math.max(position.w, position.h) * 0.01

const vw = (position) => position.w * 0.01

const vh = (position) => position.h * 0.01

const viewport = (position) => Object({ ...position, vmin: vmin(position), vmax: vmax(position), vw: vw(position), vh: vh(position) })


const fromcenter = (position) => Object({ ...position, x: position.cx - position.w / 2, y: position.cy - position.h / 2} )


const coordinate = (position) => Object({ x: position.x, y: position.y, w: position.w, h: position.h, ...wireframe(position), ...point(position), ...viewport(position) })

const coordinatefromcenter = (position) => coordinate(fromcenter(position))


const Position = { l, r, t, b, wireframe, cx, cy, ltx, lty, lbx, lby, rtx, rty, rbx, rby, point, vmin, vmax, vw, vh, viewport, fromcenter, coordinate, coordinatefromcenter }

/* harmony default export */ const CanvasXML_Position = (Position);
;// CONCATENATED MODULE: ./package/CanvasXML.Position.Batch.js
const add = (positions) => positions.reduce((t, i) => Object({ x: t.x + (i.x || 0), y: t.y + (i.y || 0), w: t.w + (i.w || 0), h: t.h + (i.h || 0) }), { x: 0, y: 0, w: 0, h: 0 })

const box = (positions) => positions.reduce((t, i) => Object({ x: i.x ? Math.min(t.x, i.x) : t.x, y: i.y ? Math.min(t.y, i.y) : t.y, w: i.x && i.w ? Math.max(t.w, i.x + i.w) : t.w, h: i.y && i.h ? Math.max(t.h, i.y + i.h) : t.h }), { x: 0, y: 0, w: 0, h: 0 })

const wmin = (positions) => positions.reduce((t, i) => i.w ? Math.min(i.w, t) : t, 0)

const wmax = (positions) => positions.reduce((t, i) => i.w ? Math.max(i.w, t) : t, 0)

const hmin = (positions) => positions.reduce((t, i) => i.h ? Math.min(i.h, t) : t, 0)

const hmax = (positions) => positions.reduce((t, i) => i.h ? Math.max(i.h, t) : t, 0)

const PositionBatch = { add, box, wmin, wmax, hmin, hmax }

/* harmony default export */ const CanvasXML_Position_Batch = (PositionBatch);
;// CONCATENATED MODULE: ./package/CanvasXML.Layout.js



const horizontalForward = (layoutPosition, unitPositons) => {
  var x = 0

  unitPositons.forEach(i => {
    i.x = layoutPosition.x + x
    x = x + i.w
  })

  return unitPositons
}

const horizontalReverse = (layoutPosition, unitPositons) => {
  var x = 0

  unitPositons.forEach(i => {
    i.x = layoutPosition.x + layoutPosition.w - i.w - x
    x = x + i.w
  })

  return unitPositons
}

const horizontalCenter = (layoutPosition, unitPositons) => {
  var x = 0
  var w = CanvasXML_Position_Batch.add(unitPositons).w

  unitPositons.forEach(i => {
    i.x = layoutPosition.x + (layoutPosition.w - w) / 2 + x
    x = x + i.w
  })

  return unitPositons
}

const horizontalAround = (layoutPosition, unitPositons) => {
  var x = 0
  var w = CanvasXML_Position_Batch.add(unitPositons).w

  unitPositons.forEach((i, index) => {
    i.x = layoutPosition.x + (layoutPosition.w - w) / (unitPositons.length - 1) * index + x
    x = x + i.w
  })

  return unitPositons
}

const horizontalBetween = (layoutPosition, unitPositons) => {
  var x = 0
  var w = CanvasXML_Position_Batch.add(unitPositons).w

  unitPositons.forEach((i, index) => {
    i.x = layoutPosition.x + (layoutPosition.w - w) / (unitPositons.length + 1) * (index + 1) + x
    x = x + i.w
  })

  return unitPositons
}

const horizontalAccommodate = (layoutPosition, unitPositons) => {
  var x = 0
  var accommodated = false
  var result = []

  unitPositons.forEach(i => {
    if (accommodated === false && (x + i.w < layoutPosition.w || x + i.w === layoutPosition.w)) result.push(i)
    if (accommodated === false && (x + i.w < layoutPosition.w || x + i.w === layoutPosition.w)) x = x + i.w
    if (x + i.w > layoutPosition.w) accommodated = true
  })

  return { result: result, rest: unitPositons.filter((i, index) => index > result.length - 1) }
}

const horizontalInfinite = (layoutPosition, unitPositons, horizontal) => {
  var result = []

  var rest = unitPositons

  while (rest.length) {
    const accommodate = horizontalAccommodate(layoutPosition, rest)
    result = [...result, horizontal(layoutPosition, accommodate.result)]
    rest = accommodate.rest
  }

  return { result: result, rest: unitPositons.filter((i, index) => index < result.flat().length - 1) }
}

const horizontalAlignLeft = (layoutPosition, unitPositons) => {
  unitPositons.forEach((i, index) => {
    i.x = layoutPosition.x
  })

  return unitPositons
}

const horizontalAlignRight = (layoutPosition, unitPositons) => {
  unitPositons.forEach((i, index) => {
    i.x = layoutPosition.x + layoutPosition.w
  })

  return unitPositons
}

const horizontalAlignCenter = (layoutPosition, unitPositons) => {
  unitPositons.forEach((i, index) => {
    i.x = layoutPosition.x + (layoutPosition.w - i.w) / 2
  })

  return unitPositons
}


const verticalForward = (layoutPosition, unitPositons) => {
  var y = 0

  unitPositons.forEach(i => {
    i.y = layoutPosition.y + y
    y = y + i.h
  })

  return unitPositons
}

const verticalReverse = (layoutPosition, unitPositons) => {
  var y = 0

  unitPositons.forEach(i => {
    i.y = layoutPosition.y + layoutPosition.h - i.h - y
    y = y + i.h
  })

  return unitPositons
}

const verticalCenter = (layoutPosition, unitPositons) => {
  var y = 0
  var h = CanvasXML_Position_Batch.add(unitPositons).h

  unitPositons.forEach(i => {
    i.y = layoutPosition.y + (layoutPosition.h - h) / 2 + y
    y = y + i.h
  })

  return unitPositons
}

const verticalAround = (layoutPosition, unitPositons) => {
  var y = 0
  var h = CanvasXML_Position_Batch.add(unitPositons).h

  unitPositons.forEach((i, index) => {
    i.y = layoutPosition.y + (layoutPosition.h - h) / (unitPositons.length - 1) * index + y
    y = y + i.h
  })

  return unitPositons
}

const verticalBetween = (layoutPosition, unitPositons) => {
  var y = 0
  var h = CanvasXML_Position_Batch.add(unitPositons).h

  unitPositons.forEach((i, index) => {
    i.y = layoutPosition.y + (layoutPosition.h - h) / (unitPositons.length + 1) * (index + 1) + y
    y = y + i.h
  })

  return unitPositons
}

const verticalAccommodate = (layoutPosition, unitPositons) => {
  var y = 0
  var accommodated = false
  var result = []

  unitPositons.forEach(i => {
    if (accommodated === false && (y + i.h < layoutPosition.h || y + i.h === layoutPosition.h)) result.push(i)
    if (accommodated === false && (y + i.h < layoutPosition.h || y + i.h === layoutPosition.h)) y = y + i.h
    if (y + i.y > layoutPosition.h) accommodated = true
  })

  return { result: result, rest: unitPositons.filter((i, index) => index > result.length - 1) }
}

const verticalInfinite = (layoutPosition, unitPositons, verticalt) => {
  var result = []

  var rest = unitPositons

  while (rest.length) {
    result = [...result, verticalt(layoutPosition, rest).result]
    rest = verticalt(layoutPosition, rest).rest
  }

  return { result: result, rest: unitPositons.filter((i, index) => index < result.flat().length - 1) }
}

const verticalAlignLeft = (layoutPosition, unitPositons) => {
  unitPositons.forEach((i, index) => {
    i.y = layoutPosition.y
  })

  return unitPositons
}

const verticalAlignRight = (layoutPosition, unitPositons) => {
  unitPositons.forEach((i, index) => {
    i.y = layoutPosition.y + layoutPosition.h
  })

  return unitPositons
}

const verticalAlignCenter = (layoutPosition, unitPositons) => {
  unitPositons.forEach((i, index) => {
    i.y = layoutPosition.y + (layoutPosition.h - i.h) / 2
  })

  return unitPositons
}


const layout = (structure) => {
  const r = []

  if (typeof structure.tag === 'function') structure.tag({ ...structure, layoutProcess: undefined, preprocess: undefined, postprocess: undefined })
  if (typeof structure.tag === 'string' && structure.tag === 'layout' && structure.component) structure.component({ ...structure, layoutProcess: undefined, preprocess: undefined, postprocess: undefined })

  if (structure.children) {
    const children = structure.children.map(i => typeof i === 'function' ? i(structure.position) : i)

    children.filter(i => typeof i.position === 'function').forEach(i => i.position = i.position(structure.position))

    children.filter(i => i.preprocess).forEach(i => i.preprocess.forEach(i => i(structure.position, children.map(i => i.position), i.position)))

    if (structure.layoutProcess) structure.layoutProcess.forEach(i => i(structure.position, children.map(i => i.position)))

    children.filter(i => i.postprocess).forEach(i => i.postprocess.forEach(i => i(structure.position, children.map(i => i.position), i.position)))

    children.forEach(i => r.push(...layout(i)))
  }

  r.push({ ...structure, layoutProcess: undefined, preprocess: undefined, postprocess: undefined })

  return r
}

const layoutReactBabelCreateElement = (tag, props, ...children) => ({ ...props, tag: tag, children: children.filter(i => i).flat() })

const layoutProcessCopy = (keys) => (layoutPosition, unitPositons) => unitPositons.forEach(i => keys.forEach(key => i[key] = layoutPosition[key]))

const layoutProcessCoordinate = (layoutPosition, unitPositons) => unitPositons.forEach(i => Object.assign(i, CanvasXML_Position.coordinate(i)))

const Layout = { horizontalForward, horizontalReverse, horizontalCenter, horizontalAround, horizontalBetween, horizontalAccommodate, horizontalInfinite, horizontalAlignLeft, horizontalAlignRight, horizontalAlignCenter, verticalForward, verticalReverse, verticalCenter, verticalAround, verticalBetween, verticalAccommodate, verticalInfinite, verticalAlignLeft, verticalAlignCenter, verticalAlignRight, layout, layoutReactBabelCreateElement, layoutProcessCopy, layoutProcessCoordinate }

/* harmony default export */ const CanvasXML_Layout = (Layout);
;// CONCATENATED MODULE: ./package/CanvasXML.Position.Cover.js
const pointcover = (position, point) => point.x >= position.x && point.x <= position.x + position.w && point.y >= position.y && point.y <= position.y + position.h

const PositionCover = { pointcover }

/* harmony default export */ const CanvasXML_Position_Cover = (PositionCover);
;// CONCATENATED MODULE: ./package/CanvasXML.React.js
var contextQueue = []
var contextQueueRecordCount = []

var renderFrameTimeDiff = 0
var renderFrameTimeDiffMax = 0

var renderQueueRoot = { alternate: 'root', children: [] }

var renderQueueInRender = false
var renderQueueShouldRender = false

var renderQueueCallback = []

var renderQueueNode = undefined
var renderQueueNodeChildrenIndex = 0

var renderQueueHooks = []
var renderQueueHook = undefined

var renderListener = []

const destory = (node) => {
  node.hooks
    .filter(i => i.type === useEffect && i.effectPrevious && typeof i.effectPrevious === 'function')
    .forEach(i => renderQueueCallback.push(() => i.effectPrevious()))

  node.hooks
    .filter(i => i.type === useEffectImmediate && i.effectPrevious && typeof i.effectPrevious === 'function')
    .forEach(i => i.effectPrevious())

  node.children.forEach(i => destory(i))
}

const componentRunBefore = (node) => {
  renderQueueNode.children[renderQueueNodeChildrenIndex] = node

  renderQueueNode = node
  renderQueueNodeChildrenIndex = 0

  contextQueueRecordCount.push(0)

  renderQueueHooks.push({ hooks: node.hooks, index: 0 })
  renderQueueHook = renderQueueHooks[renderQueueHooks.length - 1]
}

const componentRunAfter = (node) => {
  node.children.filter((i, index) => index > renderQueueNodeChildrenIndex || index === renderQueueNodeChildrenIndex).forEach(i => destory(i))
  node.children = node.children.filter((i, index) => index < renderQueueNodeChildrenIndex)

  renderQueueNode = node.parent
  renderQueueNodeChildrenIndex = renderQueueNode.children.findIndex(i => i === node) + 1

  contextQueue = contextQueue.filter((i, index) => index < contextQueue.length - contextQueueRecordCount[contextQueueRecordCount.length - 1])
  contextQueueRecordCount = contextQueueRecordCount.filter((i, index) => index < contextQueueRecordCount.length - 1)

  renderQueueHooks = renderQueueHooks.filter((i, index) => index < renderQueueHooks.length - 1)
  renderQueueHook = renderQueueHooks[renderQueueHooks.length - 1]
}

const compoment = (alternate, props, callback) => {
  var node
  var key = Object(props).key
  var equalIndex = renderQueueNode.children.findIndex(i => i.key !== undefined && i.key === key && i.alternate === alternate)

  if (equalIndex !== -1) {
    renderQueueNode.children.splice(renderQueueNodeChildrenIndex, 0, renderQueueNode.children.splice(equalIndex, 1)[0])
  }

  if (node === undefined && renderQueueNode.children[renderQueueNodeChildrenIndex] && renderQueueNode.children[renderQueueNodeChildrenIndex].alternate === alternate && renderQueueNode.children[renderQueueNodeChildrenIndex].key === key) {
    node = renderQueueNode.children[renderQueueNodeChildrenIndex]
  }

  if (node === undefined) {
    node = { key: key, alternate: alternate, children: [], hooks: [], props: props }
  }

  if (node !== renderQueueNode.children[renderQueueNodeChildrenIndex] && renderQueueNode.children[renderQueueNodeChildrenIndex]) {
    destory(renderQueueNode.children[renderQueueNodeChildrenIndex])
  }

  node.parent = renderQueueNode

  componentRunBefore(node)

  const result = node.alternate(props)

  if (callback) callback(result)

  componentRunAfter(node)

  return result
}

const createElement = (alternate, props, ...children) => {
  return { alternate, props, children }
}

const Fragment = () => {
  return undefined
}

const mount = (listener, frameTimeDiffMax) => {
  renderListener.push(listener)
  renderFrameTimeDiffMax = frameTimeDiffMax
  return CanvasXML_React_React
}

const render = () => {
  renderQueueInRender = true

  renderFrameTimeDiff = performance.now()

  renderQueueNode = renderQueueRoot
  renderQueueNodeChildrenIndex = 0

  renderListener.forEach(i => i())

  while (renderQueueCallback.length !== 0) renderQueueCallback.shift()()

  const renderRequestAnimationFrame = () => {
    requestAnimationFrame(() => {
      const now = performance.now()
      if (now - renderFrameTimeDiff < renderFrameTimeDiffMax) renderRequestAnimationFrame()
      if (now - renderFrameTimeDiff > renderFrameTimeDiffMax || now - renderFrameTimeDiff === renderFrameTimeDiffMax) renderQueueInRender = false
      if (now - renderFrameTimeDiff > renderFrameTimeDiffMax || now - renderFrameTimeDiff === renderFrameTimeDiffMax) render()
    })
  }

  if (renderQueueShouldRender) renderRequestAnimationFrame()
  if (renderQueueShouldRender === false) renderQueueInRender = false

  renderQueueShouldRender = false
}

const hook = (callback) => {
  return (...props) => {
    try {
      if (renderQueueHook.hooks[renderQueueHook.index] !== undefined && renderQueueHook.hooks[renderQueueHook.index].type !== callback) {
        throw Error(callback)
      }
      return callback(...props)
    } finally {
      renderQueueHook.hooks[renderQueueHook.index].type = callback
      renderQueueHook.index = renderQueueHook.index + 1
    }
  }
}

const contextProvider = (value) => {
  contextQueue.push(value)
  contextQueueRecordCount[contextQueueRecordCount.length - 1] = contextQueueRecordCount[contextQueueRecordCount.length - 1] + 1
}

const contextProviderExtend = (value) => {
  contextQueue.push({ ...contextQueue[contextQueue.length - 1], ...value })
  contextQueueRecordCount[contextQueueRecordCount.length - 1] = contextQueueRecordCount[contextQueueRecordCount.length - 1] + 1
}

const shouldRender = () => {
  if (renderQueueInRender === true) renderQueueShouldRender = true
  if (renderQueueInRender === false) requestAnimationFrame(render)
}

const useContext = () => {
  return contextQueue[contextQueue.length - 1]
}

const useState = (state) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { state: state }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  const setState = (state) => {
    if (typeof state === 'function') hook.state = state(hook.state)
    if (typeof state !== 'function') hook.state = state

    if (renderQueueInRender === true) renderQueueShouldRender = true
    if (renderQueueInRender === false) requestAnimationFrame(render)
  }

  return [hook.state, setState]
}

const useRef = (current) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { current: current }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  return hook
}

const useEffect = (effect, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { effect: effect }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) renderQueueCallback.push(() => hook.effectPrevious = hook.effectPrevious && typeof hook.effectPrevious === 'function' ? hook.effectPrevious() : undefined)
  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) renderQueueCallback.push(() => hook.effectPrevious = effect())

  hook.dependence = dependence
}

const useEffectImmediate = (effect, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { effect: effect }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.effectPrevious = hook.effectPrevious && typeof hook.effectPrevious === 'function' ? hook.effectPrevious() : undefined
  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.effectPrevious = effect()

  hook.dependence = dependence
}

const useMemo = (memo, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { memo: memo }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.memo = memo()

  hook.dependence = dependence

  return hook.memo
}

const useCallback = (callback, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { callback: callback }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.callback = callback

  hook.dependence = dependence

  return hook.callback
}

const CanvasXML_React_React = { mount, render, componentRunBefore, componentRunAfter, compoment, createElement, Fragment, contextProvider, contextProviderExtend, shouldRender, useContext, useState, useRef, useEffect, useEffectImmediate, useMemo, useCallback }

Object.keys(CanvasXML_React_React).filter(i => [useState, useRef, useEffect, useEffectImmediate, useMemo, useCallback].includes(CanvasXML_React_React[i])).forEach(i => CanvasXML_React_React[i] = hook(CanvasXML_React_React[i]))

/* harmony default export */ const CanvasXML_React = (CanvasXML_React_React);
;// CONCATENATED MODULE: ./package/CanvasXML.ReactDom.js


var rootComponent

const CanvasXML_ReactDom_mount = (component, frameTimeDiffMax) => {
  rootComponent = component

  CanvasXML_React.mount(() => renderCompoment(rootComponent), frameTimeDiffMax)

  return { render: CanvasXML_React.render }
}

const renderCompoment = (compoment) => {
  if (!compoment || typeof compoment !== 'object') return

  if (Array.isArray(compoment) === true) compoment.forEach(i => renderCompoment(i))

  if (Array.isArray(compoment) === false && typeof compoment.alternate === 'function') CanvasXML_React.compoment(compoment.alternate, compoment.props, result => renderCompoment(result))

  // if (typeof compoment.alternate === 'string') renderCompoment(React.compoment(compoment.alternate, compoment.props))

  if (Array.isArray(compoment) === false && compoment.children) compoment.children.forEach(i => renderCompoment(i))
}

const ReactDom = { mount: CanvasXML_ReactDom_mount }

/* harmony default export */ const CanvasXML_ReactDom = (ReactDom);
;// CONCATENATED MODULE: ./package/CanvasXML.React.Plugin.js


const useStateFlow = (props) => {
  const ref = CanvasXML_React.useRef([])

  const getState = (index) => {
    return ref.current[index === undefined ? (ref.current.length - 1) : index]
  }

  const useState = (state) => {
    CanvasXML_React.useEffectImmediate(() => ref.current = [...ref.current, state], [state])
    CanvasXML_React.useEffectImmediate(() => () => ref.current = ref.current.filter((i) => i !== state), [state])
  }

  return { getState, useState }
}

const useAnimationCount = (props) => {
  const [animationCount, setAnimationCount] = CanvasXML_React.useState(props.count)
  const [animationDelay, setAnimationDelay] = CanvasXML_React.useState(props.delay)
  const [animationFlow, setAnimationFlow] = CanvasXML_React.useState(props.flow)

  CanvasXML_React.useEffect(() => {
    if (animationDelay !== 0) setAnimationDelay(animationDelay - 1)
  })

  CanvasXML_React.useEffect(() => {
    if (props.play === true && animationDelay === 0 && props.reverse === true && (animationCount === props.min || animationCount < props.min)) setAnimationFlow(0)
    if (props.play === true && animationDelay === 0 && props.reverse === true && (animationCount === props.max || animationCount > props.max)) setAnimationFlow(1)
  })

  CanvasXML_React.useEffect(() => {
    if (props.play === true && animationDelay === 0 && (animationFlow === 0 && animationCount < props.max)) setAnimationCount(animationCount + props.rate)
    if (props.play === true && animationDelay === 0 && (animationFlow === 1 && animationCount > props.min)) setAnimationCount(animationCount - props.rate)
  })

  return { animationCount, setAnimationCount, animationDelay, setAnimationDelay, animationFlow, setAnimationFlow }
}


const useEventRoot = (props) => {
  const events = CanvasXML_React.useRef([])

  const addEventListener = (type, callback) => {
    events.current = [...events.current, { type, callback }]
  }

  const removeEventListener = (type, callback) => {
    events.current = events.current.filter(i => i.type !== type || i.callback !== callback)
  }

  const useEventListener = (type, callback, dependence) => {
    CanvasXML_React.useEffectImmediate(() => addEventListener(type, callback), [type, callback])
    CanvasXML_React.useEffectImmediate(() => () => removeEventListener(type, callback), [type, callback])
  }

  const clearEventListener = () => {
    events.current = []
  }

  const execute = (e, type) => {
    const exe = events.current
      .filter(i => i.type === type)
      .sort((a, b) => {
        const a_ = a.option === undefined || a.option.priority === undefined ? 0 : a.option.priority
        const b_ = b.option === undefined || b.option.priority === undefined ? 0 : b.option.priority
        return b_ - a_
      })

    var stopPropagation = false

    exe.forEach(i => {
      var x
      var y

      if (window.ontouchstart === undefined) x = e.pageX
      if (window.ontouchstart === undefined) y = e.pageY
      if (window.ontouchstart !== undefined) x = e.changedTouches[0].pageX
      if (window.ontouchstart !== undefined) y = e.changedTouches[0].pageY

      x = x * props.dpr
      y = y * props.dpr

      const re = {
        native: e,
        x: x,
        y: y,
        stopPropagation: () => stopPropagation = true
      }

      if (stopPropagation === false) i.callback(re)
    })
  }

  CanvasXML_React.useEffectImmediate(() => {
    new Array('click', 'touchstart', 'touchmove', 'touchend', 'mousedown', 'mousemove', 'mouseup').forEach(type => {
      props.canvas.addEventListener(type, e => execute(e, type), { passive: true })
    })
  }, [])

  return { addEventListener, removeEventListener, clearEventListener, useEventListener }
}


const useDragControlMouse = (props) => {
  const positionOrigin = CanvasXML_React.useRef()
  const positionTarget = CanvasXML_React.useRef()

  const onChange = CanvasXML_React.useCallback((params) => {
    if (props.onChange) props.onChange(params)
  }, [props.onChange])

  const onStart = CanvasXML_React.useCallback((e) => {
    if (props.enable === false) return

    const x = e.pageX
    const y = e.pageY

    positionOrigin.current = { x, y }
    positionTarget.current = { x, y }

    const changedX = 0
    const changedY = 0
    const continuedX = 0
    const continuedY = 0

    onChange({ type: 'mouse', status: 'afterStart', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const onMove = CanvasXML_React.useCallback((e) => {
    if (props.enable === false) return

    if (positionTarget.current === undefined) return

    const x = e.pageX
    const y = e.pageY

    const changedX = x - positionTarget.current.x
    const changedY = y - positionTarget.current.y
    const continuedX = positionTarget.current.x - positionOrigin.current.x
    const continuedY = positionTarget.current.y - positionOrigin.current.y

    positionTarget.current = { x, y }

    onChange({ type: 'mouse', status: 'afterMove', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const onEnd = CanvasXML_React.useCallback((e) => {
    if (props.enable === false) return

    if (positionTarget.current === undefined) return

    const x = e.pageX
    const y = e.pageY

    const changedX = x - positionTarget.current.x
    const changedY = y - positionTarget.current.y
    const continuedX = positionTarget.current.x - positionOrigin.current.x
    const continuedY = positionTarget.current.y - positionOrigin.current.y

    onChange({ type: 'mouse', status: 'beforeEnd', e, x, y, changedX, changedY, continuedX, continuedY })

    positionOrigin.current = undefined
    positionTarget.current = undefined

    onChange({ type: 'mouse', status: 'afterEnd', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  return { onStart, onMove, onEnd }
}

const useDragControlTouch = (props) => {
  const positionOrigin = CanvasXML_React.useRef()
  const positionTarget = CanvasXML_React.useRef()

  const onChange = CanvasXML_React.useCallback((params) => {
    if (props.onChange) props.onChange(params)
    if (props.onChangeMemo) props.onChangeMemo(params)
  }, [props.onChange])

  const onStart = CanvasXML_React.useCallback((e) => {
    if (props.enable === false) return

    const x = [...e.changedTouches].map(i => i.pageX)
    const y = [...e.changedTouches].map(i => i.pageY)

    positionOrigin.current = { x, y }
    positionTarget.current = { x, y }

    const changedX = []
    const changedY = []
    const continuedX = []
    const continuedY = []

    x.forEach((x, index) => {
      changedX[index] = 0
      continuedX[index] = 0
    })

    y.forEach((y, index) => {
      changedY[index] = 0
      continuedY[index] = 0
    })

    onChange({ type: 'touch', status: 'afterStart', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const onMove = CanvasXML_React.useCallback((e) => {
    if (props.enable === false) return

    if (positionTarget.current === undefined) return

    const x = [...e.changedTouches].map(i => i.pageX)
    const y = [...e.changedTouches].map(i => i.pageY)

    const changedX = []
    const changedY = []
    const continuedX = []
    const continuedY = []

    x.forEach((x, index) => {
      changedX[index] = x - positionTarget.current.x[index]
      continuedX[index] = positionTarget.current.x[index] - positionOrigin.current.x[index]
    })

    y.forEach((y, index) => {
      changedY[index] = y - positionTarget.current.y[index]
      continuedY[index] = positionTarget.current.y[index] - positionOrigin.current.y[index]
    })

    positionTarget.current = { x, y }

    onChange({ type: 'touch', status: 'afterMove', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const onEnd = CanvasXML_React.useCallback((e) => {
    if (props.enable === false) return

    if (positionTarget.current === undefined) return

    const x = [...e.changedTouches].map(i => i.pageX)
    const y = [...e.changedTouches].map(i => i.pageY)

    const changedX = []
    const changedY = []
    const continuedX = []
    const continuedY = []

    x.forEach((x, index) => {
      changedX[index] = x - positionTarget.current.x[index]
      continuedX[index] = positionTarget.current.x[index] - positionOrigin.current.x[index]
    })

    y.forEach((y, index) => {
      changedY[index] = y - positionTarget.current.y[index]
      continuedY[index] = positionTarget.current.y[index] - positionOrigin.current.y[index]
    })

    onChange({ type: 'touch', status: 'beforeEnd', e, x, y, changedX, changedY, continuedX, continuedY })

    positionOrigin.current = undefined
    positionTarget.current = undefined

    onChange({ type: 'touch', status: 'afterEnd', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const r = { onStart, onMove, onEnd }

  return r
}

const useDragControl = (props) => {
  if (window.ontouchstart === undefined) {
    var { onStart, onMove, onEnd } = useDragControlMouse({ onChange: props.onChange, enable: props.enable })
    props.useEventListener('mousedown', onStart, props.startOption)
    props.useEventListener('mousemove', onMove, props.moveOption)
    props.useEventListener('mouseup', onEnd, props.endOption)
  }
  if (window.ontouchstart !== undefined) {
    var { onStart, onMove, onEnd } = useDragControlTouch({ onChange: props.onChange, enable: props.enable })
    props.useEventListener('touchstart', onStart, props.startOption)
    props.useEventListener('touchmove', onMove, props.moveOption)
    props.useEventListener('touchend', onEnd, props.endOption)
  }
}


const useImage = (props) => {
  const image = CanvasXML_React.useMemo(() => new Image(), [])

  CanvasXML_React.useEffectImmediate(() => image.src = props.src, [props.src])
  CanvasXML_React.useEffectImmediate(() => image.onload = () => props.onload ? props.onload() : undefined, [props.onload])

  return { image }
}

const usePreloadResource = (props) => {
  const [resourceCount, setResourceCount] = CanvasXML_React.useState(0)
  const [resourceLoading, setResourceLoading] = CanvasXML_React.useState(true)

  CanvasXML_React.useEffectImmediate(() => {
    setResourceCount(0)
    setResourceLoading(true)

    props.resource.forEach(i => fetch(i).then(() => setResourceCount(pre => pre + 1)))
  }, [props.resource])

  CanvasXML_React.useEffectImmediate(() => setResourceLoading(resourceCount < props.resource.length), [resourceCount])

  return { resourceCount, resourceLoading }
}


const useScrollControl = (props) => {
  const enableScrollX = props.enableScrollX
  const enableScrollY = props.enableScrollY
  const maxScrollX = props.maxScrollX
  const maxScrollY = props.maxScrollY
  const position = props.position

  const [scrollX, setScrollX] = React.useState(props.defaultScrollX)
  const [scrollY, setScrollY] = React.useState(props.defaultScrollY)

  const onScroll = (x, y) => {
    if (enableScrollX) {
      var rx = scrollX + x
      if (rx > maxScrollX) rx = maxScrollX
      if (rx < 0) rx = 0
      setScrollX(rx)
    }
    if (enableScrollY) {
      var rx = scrollY + x
      if (rx > maxScrollY) rx = maxScrollY
      if (rx < 0) rx = 0
      setScrollX(rx)
    }
  }

  const onChange = () => {
    if (params.status === 'afterMove') onScroll(params.changedX, params.changedY)
  }

  ReactPlugin.useDragControlMouse({ onChange: React.useCallback(onChange, []), enable: true, useEventListener: props.useEventListener, mousedownOption: props.position, mousemoveOption: props.position, mouseupOption: props.position, mousedownOption: props.position })

  return { setScrollX, setScrollY }
}


const ReactPlugin = { useStateFlow, useEventRoot, useAnimationCount, useDragControlMouse, useDragControlTouch, useDragControl, useImage, usePreloadResource }

/* harmony default export */ const CanvasXML_React_Plugin = (ReactPlugin);
;// CONCATENATED MODULE: ./package/index.js










/* harmony default export */ const package_0 = ({ Caculate: CanvasXML_Caculate, Draw: CanvasXML_Draw, Layout: CanvasXML_Layout, Position: CanvasXML_Position, PositionBatch: CanvasXML_Position_Batch, PositionCover: CanvasXML_Position_Cover, React: CanvasXML_React, ReactDom: CanvasXML_ReactDom, ReactPlugin: CanvasXML_React_Plugin });


var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;