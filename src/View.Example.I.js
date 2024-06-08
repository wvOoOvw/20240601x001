import ReactAnimation from './ReactAnimation'
import ReactAnimationPlugin from './ReactAnimation.Plugin'

import Layout from './Utils.Layout'
import Position from './Utils.Position'
import PositionBatch from './Utils.Position.Batch'
import Draw from './Utils.Draw'

import Caculate from './Utils.Caculate'

import background from '../static/bg.97101e.jpg'

function ImageDragRectRadius() {
  const context = ReactAnimation.useContext()

  const position = { x: context.coordinateFlow.getState().cx, y: context.coordinateFlow.getState().cy, w: context.coordinateFlow.getState().w + 100, h: context.coordinateFlow.getState().h + 100 }

  context.context.save()

  Draw.drawRectRadius(context.context, position, 12)
  context.context.fillStyle = 'rgba(255, 255, 255, 1)'
  context.context.fill()

  context.context.restore()
}

function TestImageDrag() {
  const context = ReactAnimation.useContext()

  const coordinate = context.coordinateFlow.getState()

  const { animationCount } = ReactAnimationPlugin.useAnimationCount({ count: 0, flow: 0, delay: 0, min: 0, max: 1, rate: 1 / 60, play: true, reverse: true })

  const [positionOrigin, setPositionOrigin] = ReactAnimation.useState(Position.coordinatefromcenter({ cx: coordinate.cx, cy: coordinate.cy + 200, w: 600, h: 900 }))
  const [positionDrag, setPositionDrag] = ReactAnimation.useState({ x: 0, y: 0 })
  const [positionAnimation, setPositionAnimation] = ReactAnimation.useState({ x: 0, y: 0 })
  const [positionImage, setPositionImage] = ReactAnimation.useState(Position.add([positionOrigin, positionDrag, positionAnimation]))
  const [inDrag, setInDrag] = ReactAnimation.useState(false)

  const { image } = ReactAnimationPlugin.useImage({ src: background, onload: ReactAnimation.shouldRender })

  const onChange = (params) => {
    if (params.status === 'afterStart') setInDrag(true)
    if (params.status === 'afterEnd') setInDrag(false)
    if (params.status === 'afterMove') positionDrag.x = positionDrag.x + params.changedX * context.dpr
    if (params.status === 'afterMove') positionDrag.y = positionDrag.y + params.changedY * context.dpr
    setPositionDrag(positionDrag)
  }

  ReactAnimation.useEffectImmediate(() => setPositionAnimation(Object.assign(positionAnimation, { x: animationCount * 200 - 100 })), [animationCount])
  ReactAnimation.useEffectImmediate(() => setPositionImage(Object.assign(positionImage, Position.add([positionOrigin, positionDrag, positionAnimation]))), [positionDrag.x, positionDrag.y, positionAnimation.x, positionAnimation.y])

  ReactAnimationPlugin.useDragControl({ onChange: ReactAnimation.useCallback(onChange, []), enable: true, useEventListener: context.useEventListener, startOption: ReactAnimation.useMemo(() => Object({ position: positionImage }), []) })

  context.coordinateFlow.useState(Position.coordinate(positionImage))

  if (inDrag) ReactAnimation.component(ImageDragRectRadius)()

  Draw.drawImageClipMaxCenter(context.context, positionImage, image)
}

function TestHorizontal() {
  const context = ReactAnimation.useContext()

  const vw = Position.vw(context.coordinate.getCoordinate())

  const centeredPosition = Position.centered({ x: context.coordinate.getCoordinate().x, y: context.coordinate.getCoordinate().y, w: vw * 50, h: vw * 10 })

  const position = [
    { w: vw * 20, h: vw * 10 },
    { w: vw * 15, h: vw * 10 },
    { w: vw * 5, h: vw * 10 },
    { w: vw * 20, h: vw * 10 },
  ]

  const positionHorizontal = Layout.horizontalcenter(centeredPosition, position).result

  context.context.save()

  positionHorizontal.forEach(i => {
    Draw.drawRect(context.context, { ...i, y: centeredPosition.y })
    context.context.fillStyle = `rgba(${Caculate.random(255, 0, 0)}, ${Caculate.random(255, 0, 0)}, ${Caculate.random(255, 0, 0)}, 1)`
    context.context.fill()
  })

  context.context.restore()
}

function TestVertical() {
  const context = ReactAnimation.useContext()

  const coordinate = context.coordinateFlow.getState()

  context.context.save()

  const layout = Layout.compose(
    {
      position: coordinate,
      layout: Layout.verticalreverse,
      postprocess: (position, positionupper) => position.x = positionupper.x,
      positions: [
        {
          position: { key: 2, w: coordinate.w, h: coordinate.vh * 16, },
          layout: Layout.horizontalforward,
          postprocess: (position, positionupper) => position.y = positionupper.y,
          positions:
            [
              { position: { key: 3, w: coordinate.vw * 15, h: coordinate.vh * 16 }, },
              { position: { key: 4, w: coordinate.vw * 20, h: coordinate.vh * 16 }, },
            ]
        },
        { position: { key: 5, w: coordinate.w, h: coordinate.vh * 32 }, },
      ]
    },
  )

  console.log(layout)

  layout.forEach(i => {
    Draw.drawRect(context.context, i)
    context.context.fillStyle = `rgba(${Caculate.random(255, 0, 0)}, ${Caculate.random(255, 0, 0)}, ${Caculate.random(255, 0, 0)}, 1)`
    context.context.fill()

    const onChange = (params) => {
      if (params.status === 'afterStart') console.log(i.key)
    }

    ReactAnimationPlugin.useDragControl({ onChange: onChange, enable: true, useEventListener: context.useEventListener, startOption: { position: i } })

  })

  context.context.restore()
}

function App() {
  // TestImageDrag()
  // TestHorizontal()
  TestVertical()
}

export default App
