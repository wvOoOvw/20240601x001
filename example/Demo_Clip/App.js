import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import Template from '../_Template/App'

function GraphComponent() {
  return <rect beginPath fillStyle='rgba(255, 255, 255, 1)' radius={16}>

    <fill />

    <clip>
      <layout container horizontalAlignCenter verticalAlignCenter>
        <layout w='calc(100% - 48px)' h='calc(100% - 48px)' item>
          <rect beginPath fill clip fillStyle='rgba(135, 135, 135, 1)'>
            <arc beginPath fill fillStyle='rgba(125, 0, 255, 1)' cx='calc(extend - 50% + 25px)' cy='calc(extend - 50% + 25px)' radius={200} sAngle={0} eAngle={Math.PI * 2} counterclockwise={false}></arc>
            <arc beginPath fill fillStyle='rgba(255, 125, 0, 1)' cx='calc(extend + 50% + 25px)' cy='calc(extend - 50% + 25px)' radius={200} sAngle={0} eAngle={Math.PI * 2} counterclockwise={false}></arc>
            <arc beginPath fill fillStyle='rgba(0, 125, 255, 1)' cx='calc(extend - 50% + 25px)' cy='calc(extend + 50% + 25px)' radius={200} sAngle={0} eAngle={Math.PI * 2} counterclockwise={false}></arc>
          </rect>
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
        text: 'Component <Clip/> API',
        font: '28px monospace',
        fillStyle: 'rgba(255, 255, 255, 1)',
        lineHeight: 1,
        gap: 14,
        align: 'left',
      },
      {
        text: 'This Is A Basic Clip Component Display By Setting Different Orientations, Sizes, Rounded Corners, And Rendering Modes, Try To Click The Rect Above To Change The Color',
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