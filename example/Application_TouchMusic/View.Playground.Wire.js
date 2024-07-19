import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import ContextApp from './Context.App'
import ContextPlayground from './Context.Playground'

function App() {
  const contextApp = React.useContext(ContextApp)
  const contextPlayground = React.useContext(ContextPlayground)

  const { animationCount: animationCountRoleActive } = React.useAnimationDestination({ play: true, defaultCount: contextPlayground.roleActive ? 0 : 1, destination: contextPlayground.roleActive ? 0 : 1, rate: 1 / 30, postprocess: n => Number(n.toFixed(3)) })

  React.useEffect(() => {
    if (contextPlayground.information) {
      contextPlayground.information.gameWire.forEach(i => {
        const iWire = {
          key: i.key,
          time: i.time,
          component: i.component,
          option: i.option,
          toHide: i.toHide,
          toHit: i.toHit,
          inShow: false,
          inHide: false,
          inDestory: false,
          onDestory: () => {
            iWire.inDestory = true
            contextPlayground.setGameWire(i => [...i])
            if (i.onDestory) i.onDestory(iWire)
          },
          onShow: () => {
            iWire.inShow = true
            contextPlayground.setGameWire(i => [...i])
            if (i.onShow) i.onShow(iWire)
          },
          onHide: () => {
            iWire.inHide = true
            contextPlayground.setGameWire(i => [...i])
            if (i.onHide) i.onHide(iWire)
          },
        }

        contextPlayground.setGameWire(i => [...i, iWire])
      })
    }
  }, [contextPlayground.information])

  React.useEffect(() => {
    if (contextPlayground.gamePlay) {
      contextPlayground.gameWire
        .filter((i) => {
          return i.inShow === false
        })
        .forEach(i => {
          if (contextPlayground.animationCountGameTime > i.time) i.onShow()
        })
    }
  }, [contextPlayground.gamePlay, contextPlayground.animationCountGameTime])

  const WireMemo = React.useMemo(() => {
    if (contextPlayground.gamePlay) {
      return contextPlayground.gameWire
        .filter((i) => {
          return i.inShow === true && i.inDestory === false
        })
        .map((i) => {
          return <i.component gameTimeRate={contextPlayground.gameTimeRate} {...i} />
        })
    }
  }, [contextPlayground.gamePlay, contextPlayground.animationCountGameTime, contextPlayground.gameWire, contextPlayground.gameTimeRate])

  return <layout globalAlpha={0.5 + animationCountRoleActive * 0.5}>{WireMemo}</layout>
}

export default App