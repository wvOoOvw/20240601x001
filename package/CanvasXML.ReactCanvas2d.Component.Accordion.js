import React from './CanvasXML.React'
import Canvas2d from './CanvasXML.Canvas2d'
import ReactCanvas2d from './CanvasXML.ReactCanvas2d'

function App(props) {
  const titleH = props.titleH || 0
  const contentH = props.contentH || 0

  const x = props.x || undefined
  const y = props.y || undefined
  const w = props.w || undefined
  const h = props.h || undefined

  const [expand, setExpand] = React.useState(props.defaultExpand || false)

  const expandUse = props.expand === undefined ? expand : props.expand

  const { transitionCount: transitionCountContentH } = React.Plugin.useTransitionCount({ play: true, defaultCount: expandUse ? contentH : 0, destination: expandUse ? contentH : 0, rate: contentH / 5, postprocess: n => Number(n.toFixed(2)) })

  React.Plugin.useEffectUpdate(() => {
    if (props.onChangeExpand) props.onChangeExpand(expandUse)
  }, [expandUse])

  React.Plugin.useEffectUpdate(() => {
    if (props.onChangeHeight) props.onChangeHeight(transitionCountContentH)
  }, [transitionCountContentH])

  if (props.ref) props.ref({ expand, setExpand })

  return <layout x={x} y={y} w={w} h={titleH + transitionCountContentH} container verticalForward>

    <rect  {...props.onAccordion}></rect>

    <layout h={titleH} item>
      <rect  {...props.onTitle}></rect>
      <rect beginPath clip onClick={() => setExpand(!expand)}>{props.titleComponent}</rect>
    </layout>

    <layout h={transitionCountContentH} item>
      <rect  {...props.onContent}></rect>
      <rect beginPath clip>{props.contentComponent}</rect>
    </layout>

  </layout>
}

export default App