import ReactAnimation from './ReactAnimation'
import ReactAnimationPlugin from './ReactAnimation.Plugin'

import Caculate from './Utils.Caculate'
import Position from './Utils.Position'
import Draw from './Utils.Draw'

function Arc(props) {
  const context = ReactAnimation.useContext()

  const coordinate = context.coordinate.getCoordinate()

  const position = Position.centered({ x: coordinate.x + props.x, y: coordinate.y + props.y, w: props.radius * 2, h: props.radius * 2 })

  context.context.save()

  Draw.drawArcMin(context.context, position, 0, Math.PI * 2, false)
  context.context.fillStyle = 'rgba(255, 255, 255, 1)'
  context.context.fill()

  context.context.restore()
}

function App() {
  const context = ReactAnimation.useContext()

  const coordinate = context.coordinate.getCoordinate()
  const min = Position.min(coordinate)

  const { animationCount } = ReactAnimationPlugin.useAnimationCount({ count: 0, flow: 0, delay: 0, min: 0, max: Infinity, rate: 1 / 15, play: true, reverse: true })

  context.context.save()

  context.context.globalAlpha = Caculate.range(Caculate.number(context.pageAnimationCount, 2), 0, 1)

  ReactAnimation.component(Arc)({ x: min * 0.1 * -1, y: 0, radius: min * 0.03 + Math.cos(animationCount + Math.PI / 4 * 2 * -1) * min * 0.006 })
  ReactAnimation.component(Arc)({ x: 0, y: 0, radius: min * 0.03 + Math.cos(animationCount + Math.PI / 4 * 1 * -1) * min * 0.006 })
  ReactAnimation.component(Arc)({ x: min * 0.1, y: 0, radius: min * 0.03 + Math.cos(animationCount + Math.PI / 4 * 0) * min * 0.006 })

  context.context.restore()
}

export default App
