import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import ContextApp from './Context.App'
import ContextPlayground from './Context.Playground'

import Duration from './App.X.Playground.X.Infomation.X.Duration'
import Cumulation from './App.X.Playground.X.Infomation.X.Cumulation'
import Point from './App.X.Playground.X.Infomation.X.Point'

function App() {
  const contextApp = React.useContext(ContextApp)
  const contextPlayground = React.useContext(ContextPlayground)

  return [<Duration />, <Cumulation />]
}

export default App