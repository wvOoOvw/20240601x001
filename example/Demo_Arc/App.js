import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import Template from '../_Template/App'

function Arc() {
  const [active, setActive] = React.useState(false)
  const [hover, setHover] = React.useState(false)

  const destinationRadius = hover ? 75 : 60
  const destinationSAngle = active ? Math.PI * 2 : Math.PI * 0
  const destinationEAngle = active ? Math.PI * 3.5 : Math.PI * 1.5

  const { animationCount: radius } = React.useAnimationDestination({ play: true, defaultCount: destinationRadius, destination: destinationRadius, rate: 15 / 15, postprocess: n => Number(n.toFixed(2)) })
  const { animationCount: sAngle } = React.useAnimationDestination({ play: true, defaultCount: destinationSAngle, destination: destinationSAngle, rate: Math.PI * 1 / 15, postprocess: n => Number(n.toFixed(12)) })
  const { animationCount: eAngle } = React.useAnimationDestination({ play: true, defaultCount: destinationEAngle, destination: destinationEAngle, rate: Math.PI * 1 / 15, postprocess: n => Number(n.toFixed(12)) })

  return <layout container horizontalAlignCenter verticalAlignCenter>
    <layout w={`${radius * 2}px`} h={`${radius * 2}px`} item>
      <arc
        save
        beginPath
        fill
        globalAlpha={1}
        fillStyle={'rgba(135, 135, 135, 1)'}
        radius={radius}
        sAngle={sAngle}
        eAngle={eAngle}
        counterclockwise={false}
        onClick={() => setActive(!active)}
        onPointerMove={() => setHover(true)}
        onPointerMoveAway={() => setHover(false)}
      />
    </layout>
  </layout>
}

function GraphComponent() {
  return <rectradius save beginPath fill clip fillStyle='rgba(255, 255, 255, 1)' radius={16}>
    <layout container horizontalAlignCenter verticalAlignCenter>
      <layout w='calc(100% - 48px)' h='calc(100% - 48px)' gap={24} item container wrap horizontalCenter verticalCenter>
        {
          new Array(12).fill().map(i => {
            return <layout w='120px' h='120px' item>
              <Arc />
            </layout>
          })
        }
      </layout>
    </layout>
  </rectradius>
}

function App() {
  const title =
    [
      {
        text: 'CanvasXML',
      },
      {
        text: 'Document',
        onClick: () => window.open('https://github.com/wvOoOvw/20240601x001/tree/master/example/Arc')
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
        text: 'Component <Arc/> API',
        font: '28px courier',
        fillStyle: 'rgba(255, 255, 255, 1)',
        lineHeight: 1,
        gap: 14,
        align: 'left',
      },
      {
        text: 'This Is A Basic Arc Component Display By Setting Different Orientations, Sizes, Rounded Corners, And Rendering Modes, Try To Click The Rect Above To Change The Color',
        font: '24px courier',
        fillStyle: 'rgba(185, 185, 185, 1)',
        lineHeight: 1,
        gap: 12,
        align: 'left',
      },
    ]

  return <Template GraphComponent={<GraphComponent />} title={title} description={description} />
}

export default App