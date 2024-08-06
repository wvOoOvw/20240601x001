import React from './CanvasXML.React'

import Canvas2d from './CanvasXML.Canvas2d'

import Accordion from './CanvasXML.ReactCanvas2d.Component.Accordion'
import Button from './CanvasXML.ReactCanvas2d.Component.Button'
import CanvasLayout from './CanvasXML.ReactCanvas2d.Component.CanvasLayout'
import CoordinateHelper from './CanvasXML.ReactCanvas2d.Component.CoordinateHelper'
import PoweredBy from './CanvasXML.ReactCanvas2d.Component.PoweredBy'
import TextCaculateLine from './CanvasXML.ReactCanvas2d.Component.TextCaculateLine'

import useAudio from './CanvasXML.ReactCanvas2d.Plugin.UseAudio'
import useImage from './CanvasXML.ReactCanvas2d.Plugin.UseImage'
import useResourceReload from './CanvasXML.ReactCanvas2d.Plugin.UseResourceReload'
import useLocationProperty from './CanvasXML.ReactCanvas2d.Plugin.UseLocationProperty'
import useLocationPropertyRef from './CanvasXML.ReactCanvas2d.Plugin.UseLocationPropertyRef'
import useLocationBox from './CanvasXML.ReactCanvas2d.Plugin.UseLocationBox'
import useEventDragControl from './CanvasXML.ReactCanvas2d.Plugin.UseEventDragControl'
import useEventCompose from './CanvasXML.ReactCanvas2d.Plugin.UseEventCompose'
import useEventClick from './CanvasXML.ReactCanvas2d.Plugin.UseEventClick'
import useEventPointerDown from './CanvasXML.ReactCanvas2d.Plugin.UseEventPointerDown'
import useEventPointerDownAway from './CanvasXML.ReactCanvas2d.Plugin.UseEventPointerDownAway'
import useEventPointerMove from './CanvasXML.ReactCanvas2d.Plugin.UseEventPointerMove'
import useEventPointerMoveAway from './CanvasXML.ReactCanvas2d.Plugin.UseEventPointerMoveAway'
import useEventPointerUp from './CanvasXML.ReactCanvas2d.Plugin.UseEventPointerUp'
import useEventPointerUpAway from './CanvasXML.ReactCanvas2d.Plugin.UseEventPointerUpAway'

import flatDom from './CanvasXML.ReactCanvas2d.Utils.FlatDom'
import getDomById from './CanvasXML.ReactCanvas2d.Utils.GetDomById'

const createDom = (node) => {
  return { ...node, props: { ...node.element.props } }
}

const renderDom = (dom) => {
  while (dom.children.some(i => i.type !== 2)) {
    dom.children = dom.children.map(i => i.type !== 2 ? i.children : i).flat()
  }

  dom.children = dom.children.map(i => renderDom({ ...createDom(i), parent: dom }))

  dom.getDomById = (id) => Utils.getDomById(dom, id)

  return dom
}

const update = () => {
  Canvas2d.update()
  React.shouldRender(React.renderQueueNode())
}

const mount = (element, canvas, option) => {
  const dpr = option && option.dpr || 2
  const renderFrameTimeDiffMax = option && option.renderFrameTimeDiffMax || 0
  const powered = option && option.powered !== undefined ? option.powered : true

  var Component

  if (Boolean(powered) === true) Component = <PoweredBy>{element}</PoweredBy>
  if (Boolean(powered) !== true) Component = element

  Canvas2d.mount(canvas, dpr)
  React.mount(Component, renderFrameTimeDiffMax, (node) => Canvas2d.render(renderDom(createDom(node))))

  return { render: React.render }
}

const unMount = () => {
  Canvas2d.unMount()
  React.unmount()
}

const ReactCanvas2d = { update, mount, unMount, Accordion, Button, CanvasLayout, CoordinateHelper, PoweredBy, TextCaculateLine, useAudio, useImage, useResourceReload, useLocationProperty, useLocationPropertyRef, useLocationBox, useEventDragControl, useEventCompose, useEventClick, useEventPointerDown, useEventPointerDownAway, useEventPointerMove, useEventPointerMoveAway, useEventPointerUp, useEventPointerUpAway, flatDom, getDomById }

export default ReactCanvas2d