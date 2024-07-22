import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import ContextApp from './Context.App'
import ContextPlayground from './Context.Playground'

import Background from './View.Playground.Background'
import Hit from './View.Playground.Hit'
import Infomation from './View.Playground.Infomation'
import Music from './View.Playground.Music'
import Role from './View.Playground.Role'
import Wire from './View.Playground.Wire'

import { jsonA } from './json'

function App() {
  const contextApp = React.useContext(ContextApp)

  const [gamePlay, setGamePlay] = React.useState(true)
  const [gameHit, setGameHit] = React.useState([])
  const [gameHitSuccess, setGameHitSuccess] = React.useState([])
  const [gameHitFail, setGameHitFail] = React.useState([])
  const [gameWire, setGameWire] = React.useState([])
  const [gameRole, setGameRole] = React.useState([])
  const [gameRoleActive, setGameRoleActive] = React.useState()
  const [gameMusic, setGameMusic] = React.useState()
  const [gameTimeRate, setGameTimeRate] = React.useState(1)

  const { animationCount: animationCountGameTime } = React.useAnimationCount({ play: gamePlay, defaultCount: 0, defaultDelay: 0, defaultFlow: 0, reverse: false, min: 0, max: Infinity, rate: gameTimeRate })

  const information = React.useMemo(() => jsonA(contextApp), [])

  const BackgroundMemo = React.useMemo(() => <Background />, [contextApp.locationLayout, gamePlay])
  const HitMemo = React.useMemo(() => <Hit />, [contextApp.locationLayout, gamePlay, gameHit, gameRoleActive, animationCountGameTime])
  const InfomationMemo = React.useMemo(() => <Infomation />, [contextApp.locationLayout, gamePlay, gameHit, gameHitSuccess, gameHitFail, animationCountGameTime])
  const MusicMemo = React.useMemo(() => <Music />, [contextApp.locationLayout, gamePlay, gameMusic])
  const RoleMemo = React.useMemo(() => <Role />, [contextApp.locationLayout, gamePlay, gameHit, gameRole, gameRoleActive, animationCountGameTime])
  const WireMemo = React.useMemo(() => <Wire />, [contextApp.locationLayout, gamePlay, gameWire, gameRoleActive, animationCountGameTime])

  return <ContextPlayground.Provider value={{ gamePlay, setGamePlay, gameHit, gameHitSuccess, setGameHitSuccess, gameHitFail, setGameHitFail, setGameHit, gameWire, setGameWire, gameRole, setGameRole, gameRoleActive, setGameRoleActive, gameMusic, setGameMusic, gameTimeRate, setGameTimeRate, animationCountGameTime, information }}>
    {MusicMemo}
    {BackgroundMemo}
    {RoleMemo}
    {WireMemo}
    {HitMemo}
    {InfomationMemo}
  </ContextPlayground.Provider>
}

export default App