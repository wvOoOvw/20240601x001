import { React, ReactCanvas2dComponent, ReactCanvas2d, ReactCanvas2dPlugin, ReactCanvas2dTag, ReactCanvas2dUtils, Location } from '../../package/index'

import Template from '../_Template/App'

function Rect() {
  console.log(1)
  return <layout w='120px' h='120px' item container horizontalAlignCenter verticalAlignCenter>
    <rect x='extend' y='extend' w='extend' h='extend' beginPath fillStyle={'rgba(255, 135, 135, 1)'} onClick={onClick2}>
      <fill />
    </rect>
  </layout>
}

function GraphComponent() {
  const [count, setCount] = React.useState(0)
  const [countMemo, setCountMemo] = React.useState(0)

  const onClick1 = e => {
    if (e.device === 'mouse' && Location.pointcover({ x: e.dom.props.x, y: e.dom.props.y, w: e.dom.props.w, h: e.dom.props.h }, { x: e.x, y: e.y })) {
      setCount(count + 1)
    }
    if (e.device === 'touch' && Location.pointcover({ x: e.dom.props.x, y: e.dom.props.y, w: e.dom.props.w, h: e.dom.props.h }, { x: e.x[0], y: e.y[0] })) {
      setCount(count + 1)
    }
  }

  const onClick2 = e => {
    if (e.device === 'mouse' && Location.pointcover({ x: e.dom.props.x, y: e.dom.props.y, w: e.dom.props.w, h: e.dom.props.h }, { x: e.x, y: e.y })) {
      setCountMemo(count + 1)
    }
    if (e.device === 'touch' && Location.pointcover({ x: e.dom.props.x, y: e.dom.props.y, w: e.dom.props.w, h: e.dom.props.h }, { x: e.x[0], y: e.y[0] })) {
      setCountMemo(count + 1)
    }
  }

  const RectMemo = React.useMemo(() => <Rect />, [countMemo])

  return <rect x='extend' y='extend' w='extend' h='extend' beginPath fillStyle='rgba(255, 255, 255, 1)' radius={16}>

    <fill />

    <clip x='extend' y='extend' w='extend' h='extend'>
      <layout x='extend' y='extend' w='extend' h='extend' container horizontalAlignCenter verticalAlignCenter>
        <layout w='calc(100% - 48px)' h='calc(100% - 48px)' gap={24} item container wrap horizontalCenter verticalCenter>
          <layout w='120px' h='120px' item container horizontalAlignCenter verticalAlignCenter>
            <rect x='extend' y='extend' w='extend' h='extend' beginPath fillStyle={'rgba(135, 135, 135, 1)'} onClick={onClick1}>
              <fill />
            </rect>
          </layout>

          <layout w='120px' h='120px' item container horizontalAlignCenter verticalAlignCenter>
            <rect x='extend' y='extend' w='extend' h='extend' beginPath fillStyle={'rgba(135, 255, 135, 1)'} onClick={onClick2}>
              <fill />
            </rect>
          </layout>

          {RectMemo}
        </layout>
      </layout>
    </clip>

  </rect>
}

function App() {
  const title =
    [
      {
        text: 'CanvasXML',
      },
      {
        text: 'Document',
        onClick: () => window.open('https://github.com/wvOoOvw/20240601x001/tree/master/example/Rect')
      },
      {
        text: 'Github',
        onClick: () => window.open('https://github.com/wvOoOvw/20240601x001')
      },
      {
        text: 'Npm',
        onClick: () => window.open('https://www.npmjs.com/package/canvasxml')
      },
    ]

  const description =
    [
      {
        text: 'Component <Rect/> API',
        font: '28px monospace',
        fillStyle: 'rgba(255, 255, 255, 1)',
        lineHeight: 1,
        gap: 14,
        align: 'left',
      },
      {
        text: 'This Is A Basic Rect Component Display By Setting Different Orientations, Sizes, Rounded Corners, And Rendering Modes, Try To Click The Rect Above To Change The Color',
        font: '24px monospace',
        fillStyle: 'rgba(185, 185, 185, 1)',
        lineHeight: 1,
        gap: 12,
        align: 'left',
      },
    ]

  return <Template GraphComponent={<GraphComponent />} title={title} description={description} />
}

export default App