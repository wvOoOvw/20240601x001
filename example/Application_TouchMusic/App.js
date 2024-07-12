import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import Context from './context'

import { init as initHitPointDropCircle, App as AppHitPointDropCircle } from './Hit.Component.PointDropCircle'

import { json_0 } from './json'

function Scene() {
  const context = React.useContext(Context)

  const { animationCount: animationCountSceneRotate, setAnimationCount: setAnimationCountSceneRotate } = React.Plugin.useAnimationDestination({ play: true, defaultCount: 0, destination: 0, rate: Math.PI * 2 / 360 * context.gameTimeRate / 8 })

  React.useEffect(() => {
    if (context.gameHitSuccess.length > 0) {
      const event = context.gameHitSuccess[context.gameHitSuccess.length].event

      const changeRotate = (event.xs[event.xs.length - 1] - context.locationLayout.x - context.locationLayout.w / 2)

      if (changeRotate < 0) setAnimationCountSceneRotate(i => i - Math.PI * 2 / 360 * 4 * -1)
      if (changeRotate > 0) setAnimationCountSceneRotate(i => i - Math.PI * 2 / 360 * 4)

      navigator.vibrate(500)
    }
  }, [context.gameHitSuccess, context.locationLayout])

  return <layout>
    <translate translateX={context.locationLayout.x + context.locationLayout.w / 2} translateY={(context.locationLayout.y + context.locationLayout.h / 2)}>
      <rotate rotateAngle={animationCountSceneRotate}>
        <translate translateX={(context.locationLayout.x + context.locationLayout.w / 2) * -1} translateY={(context.locationLayout.y + context.locationLayout.h / 2) * -1}>
          <rect
            beginPath
            fill
            cx={context.locationLayout.w / 2}
            cy={context.locationLayout.h - 100 * 3 - 16}
            w='200%'
            h={4}
            lineWidth={4}
            fillStyle={'rgb(255, 255, 255)'}
            globalAlpha={0.25}
          />

          <rect
            beginPath
            fill
            cx={context.locationLayout.w / 2}
            cy={context.locationLayout.h - 100 * 3}
            w='200%'
            h={4}
            lineWidth={4}
            fillStyle={'rgb(255, 255, 255)'}
            globalAlpha={1}
          />

          <rect
            beginPath
            fill
            cx={context.locationLayout.w / 2}
            cy={context.locationLayout.h - 100 * 3 + 16}
            w='200%'
            h={4}
            lineWidth={4}
            fillStyle={'rgb(255, 255, 255)'}
            globalAlpha={0.25}
          />
        </translate>
      </rotate>
    </translate>
  </layout>
}

function Hit() {
  const context = React.useContext(Context)

  React.useEffect(() => {
    if (context.gameInformation.gameHit.length > 0 && context.animationCountGameTime > context.gameInformation.gameHit[0].time) {
      const iShift = context.gameInformation.gameHit.shift()

      const iInit = iShift.init(context.locationLayout, iShift.option) 

      const iHit = { 
        key: Math.random(),
        type: iInit.type,
        option: iInit.option,
        toSuccess: iInit.toSuccess,
        toFail: iInit.toFail,
        onDestory: () => context.setGameHit(i => i.filter(n => n !== iHit)),
        onSuccess: () => context.setGameHitSuccess(i => [...i, iHit]),
        onFail: () => context.setGameHitFail(i => [...i, iHit]),
        onHit: (event, score) => Object.assign(h, { event, score }),
        gameTimeRate: context.gameTimeRate,
      }

      context.setGameHit(i => [...i, iHit])
    }
  }, [context.animationCountGameTime])

  const HitsMemo = React.useMemo(() => {
    return context.gameHit.map((i) => {
      var Component

      if (i.type === 'PointDropCircle') Component = AppHitPointDropCircle

      return <Component {...i} />
    })
  }, [context.gameHit, context.rate, context.locationLayout, context.setGameScore, context.setAnimationCountSceneRotate])

  return <layout>{HitsMemo}</layout>
}

function Score() {
  const context = React.useContext(Context)

  const { animationCount: animationCountGameScore } = React.Plugin.useAnimationDestination({ play: true, defaultCount: 0, destination: context.gameScore, rate: 8 })

  const gameScoreFixed = animationCountGameScore.toFixed()

  return <layout container verticalCenter horizontalAlignCenter>
    <ReactCanvas2d.Component.TextCaculateLine text={`HIT`} font='24px monospace' lineHeight={1} gap={0} w={context.locationLayout.w - 48} split=' ' wrap>
      {
        (line, location) => {
          return <layout w={location.w} h={location.h} item>
            <text fillText fillStyle='white' align='center' font='24px monospace' lineHeight={1} gap={0} line={line} />
          </layout>
        }
      }
    </ReactCanvas2d.Component.TextCaculateLine>

    <layout h='32px' item></layout>

    <ReactCanvas2d.Component.TextCaculateLine text={gameScoreFixed} font='48px monospace' lineHeight={1} gap={0} w={context.locationLayout.w - 48} split=' ' wrap>
      {
        (line, location) => {
          return <layout w={location.w} h={location.h} item>
            <text fillText fillStyle='white' align='center' font='48px monospace' lineHeight={1} gap={0} line={line} />
          </layout>
        }
      }
    </ReactCanvas2d.Component.TextCaculateLine>
  </layout>
}

function App() {
  const [gameHit, setGameHit] = React.useState([])
  const [gameHitSuccess, setGameHitSuccess] = React.useState([])
  const [gameHitFail, setGameHitFail] = React.useState([])
  const [gameScore, setGameScore] = React.useState(0)
  const [gameTimeRate, setGameTimeRate] = React.useState(1)

  const { ref: refLayout, load: loadLayout, location: locationLayout } = ReactCanvas2d.Plugin.useLocationProperty({ default: { x: 0, y: 0, w: 0, h: 0 } })

  const { animationCount: animationCountGameTime } = React.Plugin.useAnimationCount({ play: loadLayout, defaultCount: 0, defaultDelay: 0, defaultFlow: 0, reverse: false, min: 0, max: Infinity, rate: gameTimeRate })

  const gameInformation = React.useMemo(() => { if (refLayout) return json_0(locationLayout) }, [refLayout])

  const SceneMemo = React.useMemo(() => <Scene />, [loadLayout, locationLayout, gameHit, gameHitSuccess, gameHitFail])
  const HitMemo = React.useMemo(() => <Hit />, [loadLayout, locationLayout, gameHit, animationCountGameTime])
  const ScoreMemo = React.useMemo(() => <Score />, [loadLayout, locationLayout, gameScore])
  
  return <Context.Provider value={{ gameInformation, gameHit, setGameHit,gameHitSuccess,setGameHitSuccess,gameHitFail,setGameHitFail, gameScore, setGameScore, gameTimeRate, setGameTimeRate, loadLayout, locationLayout, animationCountGameTime }}>
    <layout onLocationMount={dom => refLayout.current = dom}>
      {
        loadLayout ?
          <>
            {SceneMemo}
            {HitMemo}
            {ScoreMemo}
          </>
          : null
      }
    </layout>
  </Context.Provider>
}

export default App