import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import ContextApp from './Context.App'
import ContextPlayground from './Context.Playground'

const init = (optionOverlay) => {
  const option = Object.assign(
    {
      status: [],
    }, optionOverlay
  )

  return { key: Math.random(), component: App, option: option }
}

function WireHitAnimation(props) {
  const contextApp = React.useContext(ContextApp)
  const contextPlayground = React.useContext(ContextPlayground)

  const { animationCount: animationCountAppear } = React.useAnimationDestination({ play: contextPlayground.gamePlay === true, defaultCount: 0, destination: 1, rate: 1 / 30 * contextPlayground.gameTimeRate, postprocess: n => Number(n.toFixed(4)) })

  const rotateAngle = React.useMemo(() => animationCountAppear * Math.PI * 0.05, [animationCountAppear])
  const radius = React.useMemo(() => contextApp.unitpx * 0.16 + animationCountAppear * contextApp.unitpx * 0.16 * 4, [animationCountAppear])

  const globalAlpha = React.useMemo(() => {
    var globalAlpha

    if (animationCountAppear < 0.25) globalAlpha = animationCountAppear / 0.25
    if (animationCountAppear >= 0.25 && animationCountAppear <= 0.5) globalAlpha = 1
    if (animationCountAppear > 0.5) globalAlpha = (1 - animationCountAppear) / 0.5

    return globalAlpha
  }, [animationCountAppear])

  React.useEffect(() => {
    if (animationCountAppear === 1) props.onDestory()
  }, [animationCountAppear])

  return <>
    <translate translateX={props.x} translateY={props.y}>
      <rotate rotateAngle={Math.PI * 0.25}>
        <translate translateX={props.x * -1} translateY={props.y * -1}>
          <rect
            stroke
            cx={props.x}
            cy={props.y}
            w={contextApp.unitpx * 0.32 + contextApp.unitpx * 0.02 * animationCountAppear}
            h={contextApp.unitpx * 0.32 + contextApp.unitpx * 0.02 * animationCountAppear}
            globalAlpha={globalAlpha}
            strokeStyle={'white'}
            lineWidth={contextApp.unitpx * 0.008}
          />
        </translate>
      </rotate>
    </translate>

    <circle
      fill
      cx={props.x}
      cy={props.y}
      fillStyle={'white'}
      radius={contextApp.unitpx * 0.02 - animationCountAppear * contextApp.unitpx * 0.005}
      sAngle={0}
      eAngle={Math.PI * 2}
      counterclockwise={false}
      globalAlpha={globalAlpha}
    />

    <translate translateX={props.x} translateY={props.y}>
      <rotate rotateAngle={rotateAngle}>
        <translate translateX={props.x * -1} translateY={props.y * -1}>
          <arc
            stroke
            cx={props.x}
            cy={props.y}
            strokeStyle={'white'}
            radius={contextApp.unitpx * 0.1 + animationCountAppear * contextApp.unitpx * 0.02}
            sAngle={Math.PI * 0}
            eAngle={Math.PI * 0.5}
            counterclockwise={false}
            lineWidth={contextApp.unitpx * 0.008}
            globalAlpha={globalAlpha}
          />
          <arc
            stroke
            cx={props.x}
            cy={props.y}
            strokeStyle={'white'}
            radius={contextApp.unitpx * 0.1 + animationCountAppear * contextApp.unitpx * 0.02}
            sAngle={Math.PI * 1}
            eAngle={Math.PI * 1.5}
            counterclockwise={false}
            lineWidth={contextApp.unitpx * 0.008}
            globalAlpha={globalAlpha}
          />
        </translate>
      </rotate>
    </translate>
  </>
}

function WireSkillA() {
  const contextApp = React.useContext(ContextApp)
  const contextPlayground = React.useContext(ContextPlayground)

  const [wireHitAnimation, setWireHitAnimation] = React.useState([])

  const [open, setOpen] = React.useState(false)

  const { animationCount: animationCountMount, setAnimationCount: setAnimationCountMount } = React.useAnimationDestination({ play: contextPlayground.gamePlay === true && open === true, defaultCount: 0, destination: 1, rate: 1 / 720 * contextPlayground.gameTimeRate, postprocess: n => Number(n.toFixed(4)) })
  const { animationCount: animationCountUnmount, setAnimationCount: setAnimationCountUnmount } = React.useAnimationDestination({ play: contextPlayground.gamePlay === true && open === false, defaultCount: 0, destination: 1, rate: 1 / 240 * contextPlayground.gameTimeRate, postprocess: n => Number(n.toFixed(4)) })

  const { animationCount: animationCountTouchCount, setAnimationCount: setAnimationCountTouchCount } = React.useAnimationDestination({ play: contextPlayground.gamePlay === true, defaultCount: 0, destination: 0, rate: 1 / 15 * contextPlayground.gameTimeRate, postprocess: n => Number(n.toFixed(4)) })

  const { animationCount: animationCountTransition } = React.useAnimationDestination({ play: contextPlayground.gamePlay === true, defaultCount: 0, destination: open ? 1 : 0, rate: 1 / 15 * contextPlayground.gameTimeRate, postprocess: n => Number(n.toFixed(4)) })

  const h = contextApp.unitpx * 0.004
  const y = contextApp.locationLayout.h * 0.6 + (1 - animationCountTransition) * contextApp.unitpx * 0.08 + animationCountTouchCount * contextApp.unitpx * 0.02

  const onPointerDown = (e) => {
    if (contextPlayground.gamePlay === true && open === true) {
      setAnimationCountTouchCount(i => i + 1)

      contextPlayground.gameHit.forEach(i => {
        if (
          i.inProcess === true &&
          i.inDestory === false &&
          i.ifHit() === true &&
          i.ifCollisions().every(i => i.x + i.radius > e.x && i.x - i.radius < e.x && i.y + i.radius > (y - h / 2) && i.y - i.radius < (y + h / 2))
          // i.ifCollisions().every(i => i.y + i.radius > (y - h / 2) && i.y - i.radius < (y + h / 2))
        ) {
          i.onHit()
          i.onUpdate()
          setWireHitAnimation(n => [...n, { key: Math.random(), x: i.option.x, y: i.option.y }])
          setAnimationCountTouchCount(i => i + 1)
          new Audio(contextApp.audioPianoV1E7.src).play()
        }
      })
    }
  }

  React.useEffect(() => {
    if (animationCountMount === 1) {
      setOpen(false)
      setAnimationCountUnmount(0)
    }
  }, [animationCountMount])

  React.useEffect(() => {
    if (animationCountUnmount === 1) {
      setOpen(true)
      setAnimationCountMount(0)
    }
  }, [animationCountUnmount])

  return <>
    <layout zIndex={contextPlayground.zIndex.Wire}>
      <rect
        h={h + contextApp.unitpx * 0.12}
        cx={'50%'}
        cy={y + contextApp.unitpx * 0.02}
        onPointerDown={onPointerDown}
      />

      <rect
        fill
        h={h}
        cx={'50%'}
        cy={y}
        fillStyle={'white'}
        globalAlpha={animationCountTransition}
      />
    </layout>

    <layout zIndex={contextPlayground.zIndex.WireHitAnimation}>
      {
        wireHitAnimation.map(i => <WireHitAnimation onDestory={() => setWireHitAnimation(n => n.filter(v => v !== i))} {...i} y={y} />)
      }
    </layout>
  </>
}

function App(props) {
  const contextApp = React.useContext(ContextApp)
  const contextPlayground = React.useContext(ContextPlayground)

  const [wireHitAnimation, setWireHitAnimation] = React.useState([])

  const { animationCount: animationCountAppear } = React.useAnimationDestination({ play: contextPlayground.gamePlay === true, defaultCount: 0, destination: 1, rate: 1 / 15 * contextPlayground.gameTimeRate, postprocess: n => Number(n.toFixed(4)) })
  const { animationCount: animationCountTouchCount, setAnimationCount: setAnimationCountTouchCount } = React.useAnimationDestination({ play: contextPlayground.gamePlay === true, defaultCount: 0, destination: 0, rate: 1 / 15 * contextPlayground.gameTimeRate, postprocess: n => Number(n.toFixed(4)) })
  const { animationCount: animationCountHitCount, setAnimationCount: setAnimationCountHitCount } = React.useAnimationDestination({ play: contextPlayground.gamePlay === true, defaultCount: 0, destination: 0, rate: 1 / 15 * contextPlayground.gameTimeRate, postprocess: n => Number(n.toFixed(4)) })

  const h = contextApp.unitpx * 0.004
  const y = contextApp.locationLayout.h * 0.8 + (1 - animationCountAppear) * contextApp.unitpx * 0.08 + animationCountTouchCount * contextApp.unitpx * 0.01

  const onPointerDown = (e) => {
    if (contextPlayground.gamePlay === true) {
      setAnimationCountTouchCount(i => i + 1)

      contextPlayground.gameHit.forEach(i => {
        if (
          i.inProcess === true &&
          i.inDestory === false &&
          i.ifHit() === true &&
          i.ifCollisions().every(i => i.x + i.radius > e.x && i.x - i.radius < e.x && i.y + i.radius > (y - h / 2) && i.y - i.radius < (y + h / 2))
        ) {
          i.onHit()
          i.onUpdate()
          setWireHitAnimation(n => [...n, { key: Math.random(), x: i.option.x, y: i.option.y }])
          setAnimationCountHitCount(i => i + 1)
          contextPlayground.setGamePoint(i => i + 200)
          const audio = new Audio(contextApp.audioPianoV1E7.src)
          audio.volume = 0.5
          audio.play()
        }
      })
    }
  }

  return <>
    <layout zIndex={contextPlayground.zIndex.Wire}>
      <rect
        h={h + contextApp.unitpx * 0.16}
        cx={'50%'}
        cy={y}
        onPointerDown={onPointerDown}
      />

      <rect
        fill
        h={h}
        cx={'50%'}
        cy={y}
        fillStyle={'white'}
        globalAlpha={animationCountAppear}
      />
    </layout>

    <layout zIndex={contextPlayground.zIndex.WireHitAnimation}>
      {
        wireHitAnimation.map(i => <WireHitAnimation onDestory={() => setWireHitAnimation(n => n.filter(v => v !== i))} {...i} y={y} />)
      }
    </layout>

    <layout zIndex={1003}>
      <image
        cx={'50%'}
        cy={'50%'}
        image={props.option.image}
        size='auto-max'
        position='center'
        globalAlpha={animationCountHitCount ? 1 / (1 + Math.exp(1e-9 - Math.log(animationCountHitCount / 24) * Math.LN2)) : animationCountHitCount}
      />
    </layout>
  </>
}

export { init, App }