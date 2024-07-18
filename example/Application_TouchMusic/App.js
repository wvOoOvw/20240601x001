import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

import Context from './context'

import Animation from './View.Animation'
import Audio from './View.Audio'
import Hit from './View.Hit'
import Info from './View.Info'
import Loading from './View.Loading'
import Preparing from './View.Preparing'
import Role from './View.Role'
import Wire from './View.Wire'

import pngA from './static/15418_5819817346.png'
import pngB from './static/161527_92732416628.png'
import pngC from './static/172347_42778254000.png'
import pngD from './static/3311_66125319722.png'

import StormsEye from './static/StormsEye.m4a'
// import Door from './static/Door.m4a'

import { jsonA, jsonB } from './json'

function App() {
  const [gamePlay, setGamePlay] = React.useState(false)
  const [gameHit, setGameHit] = React.useState([])
  const [gameHitSuccess, setGameHitSuccess] = React.useState([])
  const [gameHitFail, setGameHitFail] = React.useState([])
  const [gameWire, setGameWire] = React.useState([])
  const [gameTimeRate, setGameTimeRate] = React.useState(1)

  const [loadTimeout, setLoadTimeout] = React.useState(false)

  const { load: loadPngA, image: imagePngA } = ReactCanvas2d.useImage({ src: pngA })
  const { load: loadPngB, image: imagePngB } = ReactCanvas2d.useImage({ src: pngB })
  const { load: loadPngC, image: imagePngC } = ReactCanvas2d.useImage({ src: pngC })
  const { load: loadPngD, image: imagePngD } = ReactCanvas2d.useImage({ src: pngD })
  const { load: loadStormsEye, audio: audioStormsEye } = ReactCanvas2d.useAudio({ src: StormsEye })

  const { ref: refLayout, load: loadLayout, location: locationLayout } = ReactCanvas2d.useLocationProperty({ default: { x: 0, y: 0, w: 0, h: 0 } })

  const unitpx = React.useMemo(() => {
    const w = locationLayout.w
    const h = locationLayout.h

    const ratio = w / h

    let px;

    const minRatio = 0.35;
    const maxRatio = 1 / 0.35;
    const midRatio = 1;

    const minPx = w;
    const maxPx = h;
    var midPx = w * 0.3 + h * 0.3;

    if (ratio < midRatio) midPx = w * 0.6;
    if (ratio > midRatio) midPx = h * 0.6;

    if (ratio < minRatio || ratio === minRatio) px = minPx;
    if (ratio > maxRatio || ratio === maxRatio) px = maxPx;
    if (ratio === midRatio) px = midPx;
    if (ratio > minRatio && ratio < midRatio) px = minPx + ((ratio - minRatio) / (midRatio - minRatio)) *   (midPx - minPx);
    if (ratio > midRatio && ratio < maxRatio) px = midPx + ((ratio - midRatio) / (maxRatio - midRatio)) *   (maxPx - midPx);

    return px
  }, [locationLayout])

  const load = loadTimeout && loadPngA && loadPngB && loadPngC && loadPngD && loadLayout

  const { animationCount: animationCountGameTime } = React.useAnimationCount({ play: load && gamePlay, defaultCount: 0, defaultDelay: 0, defaultFlow: 0, reverse: false, min: 0, max: Infinity, rate: gameTimeRate })

  const information = React.useMemo(() => { if (loadLayout) return jsonA(locationLayout, unitpx) }, [loadLayout, locationLayout])

  const AudioMemo = React.useMemo(() => <Audio />, [loadLayout, locationLayout, gamePlay, audioStormsEye])
  const HitMemo = React.useMemo(() => <Hit />, [loadLayout, locationLayout, gamePlay, gameHit, gameTimeRate, animationCountGameTime])
  const InfoMemo = React.useMemo(() => <Info />, [loadLayout, locationLayout, gamePlay, gameHit, gameHitSuccess, gameHitFail, animationCountGameTime])
  const LoadingMemo = React.useMemo(() => <Loading />, [])
  const PreparingMemo = React.useMemo(() => <Preparing />, [loadLayout, locationLayout, gamePlay])
  const RoleMemo = React.useMemo(() => <Role />, [loadLayout, locationLayout, gamePlay, animationCountGameTime])
  const WireMemo = React.useMemo(() => <Wire />, [loadLayout, locationLayout, gamePlay, gameWire, gameTimeRate, animationCountGameTime])

  React.useEffect(() => {
    setTimeout(() => setLoadTimeout(true), 1000)
  }, [])

  return <Context.Provider value={{ information, gamePlay, setGamePlay, gameHit, gameHitSuccess, setGameHitSuccess, gameHitFail, setGameHitFail, setGameHit, gameWire, setGameWire, gameTimeRate, setGameTimeRate, loadLayout, locationLayout, unitpx, animationCountGameTime, imagePngA, imagePngB, imagePngC, imagePngD, audioStormsEye, load }}>
    <layout onLocationMount={dom => refLayout.current = dom}>
      {
        load === true && gamePlay !== true ?
          <>
            {PreparingMemo}
          </>
          : null
      }

      {
        load === true && gamePlay === true ?
          <>
            <Animation>
              {AudioMemo}
              {InfoMemo}
              {RoleMemo}
              {WireMemo}
              {HitMemo}
            </Animation>
          </>
          : null
      }

      {
        load !== true && loadLayout === true ?
          <>
            {LoadingMemo}
          </>
          : null
      }
    </layout>
  </Context.Provider>
}

export default App