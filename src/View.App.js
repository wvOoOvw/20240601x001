import ReactAnimation from './ReactAnimation'
import ReactAnimationPlugin from './ReactAnimation.Plugin'

import ExampleI from './View.Example.I'
import ExampleII from './View.Example.II'

function App() {
  const canvas = ReactAnimation.useMemo(() => document.createElement('canvas'), [])
  const context = ReactAnimation.useMemo(() => canvas.getContext('2d'), [])

  const dpr = ReactAnimation.useRef(2)

  const coordinate = ReactAnimationPlugin.useCoordinateFlow()

  const event = ReactAnimationPlugin.useEventRoot({ canvas: canvas, dpr: dpr.current })

  const flex = () => {
    canvas.width = window.innerWidth * dpr.current
    canvas.height = window.innerHeight * dpr.current
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
  }

  const resize = () => {
    flex()
    ReactAnimation.shouldRender()
  }

  ReactAnimation.useEffectImmediate(() => canvas.style.position = 'absolute', [])
  ReactAnimation.useEffectImmediate(() => canvas.style.width = '100%', [])
  ReactAnimation.useEffectImmediate(() => canvas.style.height = '100%', [])
  ReactAnimation.useEffectImmediate(() => canvas.style.background = 'black', [])
  ReactAnimation.useEffectImmediate(() => canvas.style.overflow = 'hidden', [])
  ReactAnimation.useEffectImmediate(() => flex(), [])
  ReactAnimation.useEffectImmediate(() => window.addEventListener('resize', resize), [])
  ReactAnimation.useEffectImmediate(() => document.body.appendChild(canvas), [])
  ReactAnimation.useEffectImmediate(() => () => document.body.removeChild(canvas), [])

  coordinate.useCoordinate({ x: canvas.width / 2, y: canvas.height / 2, w: canvas.width, h: canvas.height })

  const provider = {
    canvas: canvas, 
    context: context, 
    coordinate: coordinate,
    useEventListener: event.useEventListener,
    w: canvas.width,
    h: canvas.height,
    m: Math.min(canvas.width,canvas.height),
    dpr: dpr.current,
  }

  ReactAnimation.contextProvider(provider)

  context.clearRect(0, 0, canvas.width, canvas.height)

  // ReactAnimation.component(ExampleI)()
  ReactAnimation.component(ExampleII)()
}

export default App