import { React, ReactCanvas2d, Location } from '../../package/index'

import App from './App'

ReactCanvas2d.mount(<App />, { renderFrameTimeDiffMax: 12 }).render()