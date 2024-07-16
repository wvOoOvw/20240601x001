import { React, Canvas2d, ReactCanvas2d } from '../../package/index'

const init = (locationLayout, optionOverlay) => {
  const randomX = Math.random()

  const option = Object.assign(
    {
      status: 'process',
      rateProcess: 60,
      rateWait: 30,
      rateSuccess: 60,
      rateFail: 30,
      radius: 100,
      w: 100,
      h: 25,
      cx: [
        randomX * (locationLayout.w - 100 * 4) + 100 * 2,
        randomX * (locationLayout.w - 100 * 4) + 100 * 2,
      ],
      cy: [
        0,
        locationLayout.h - 100 * 2,
      ],
    }, optionOverlay
  )

  return { component: App, option: option, toSuccess: () => option.status = 'success', toFail: () => option.status = 'fail' }
}

const MeshRectFill = (props) => {
  const cx_0 = React.useMemo(() => props.option.cx[0] + (props.option.cx[1] - props.option.cx[0]) * props.animationCountProcess, [props.animationCountProcess, props.option.cx[0], props.option.cx[1]])
  const cy_0 = React.useMemo(() => props.option.cy[0] + (props.option.cy[1] - props.option.cy[0]) * props.animationCountProcess, [props.animationCountProcess, props.option.cy[0], props.option.cy[1]])

  const color = React.useMemo(() => {
    var colorR = 255
    var colorG = 255
    var colorB = 255
    return `rgb(${colorR}, ${colorG}, ${colorB})`
  }, [])

  const globalAlpha_0 = React.useMemo(() => {
    var globalAlpha = 0

    if (props.animationCountProcess < 0.25) {
      globalAlpha = props.animationCountProcess / 0.25
    }

    if (props.animationCountProcess > 0.25 || props.animationCountProcess === 0.25) {
      globalAlpha = 1
    }

    if (props.animationCountSuccess > 0) globalAlpha = 0
    if (props.animationCountFail > 0) globalAlpha = 0

    if (globalAlpha < 0) globalAlpha = 0
    if (globalAlpha > 1) globalAlpha = 1

    return globalAlpha
  }, [props.animationCountProcess, props.animationCountSuccess, props.animationCountFail])

  return <>
    <rect
      beginPath
      fill
      cx={cx_0}
      cy={cy_0}
      w={props.option.w}
      h={props.option.h}
      fillStyle={color}
      globalAlpha={globalAlpha_0}
    />
  </>
}

const Success = (props) => {
  const cx_0 = React.useMemo(() => props.option.cx[0] + (props.option.cx[1] - props.option.cx[0]) * props.animationCountProcess, [props.animationCountProcess, props.option.cx[0], props.option.cx[1]])
  const cy_0 = React.useMemo(() => props.option.cy[0] + (props.option.cy[1] - props.option.cy[0]) * props.animationCountProcess, [props.animationCountProcess, props.option.cy[0], props.option.cy[1]])
  const rotateAngle_0 = React.useMemo(() => props.animationCountSuccess * Math.PI * 0.2, [props.animationCountSuccess])
  const radius = React.useMemo(() => Math.max(props.option.w, props.option.h) / 2, [props.option.w, props.option.h])

  const globalAlpha_0 = React.useMemo(() => {
    var globalAlpha

    if (props.animationCountSuccess < 0.25) {
      globalAlpha = props.animationCountSuccess / 0.25
    }
    if (props.animationCountSuccess >= 0.25 && props.animationCountSuccess < 0.5) {
      globalAlpha = 1
    }
    if (props.animationCountSuccess > 0.5) {
      globalAlpha = (1 - props.animationCountSuccess) / 0.5
    }

    return globalAlpha
  }, [props.animationCountSuccess])

  return <>
    <rect
      beginPath
      stroke
      cx={cx_0}
      cy={cy_0}
      w={radius * 2}
      h={radius * 2}
      globalAlpha={globalAlpha_0}
      strokeStyle={'white'}
      lineWidth={4}
      radius={radius * 2 * 0.08}
    />

    <arc
      beginPath
      stroke
      cx={cx_0}
      cy={cy_0}
      sAngle={0 + rotateAngle_0}
      eAngle={Math.PI * 0.5 + rotateAngle_0}
      counterclockwise={false}
      globalAlpha={globalAlpha_0}
      strokeStyle={'white'}
      lineWidth={4}
      radius={props.option.radius * 0.65}
    />

    <arc
      beginPath
      stroke
      cx={cx_0}
      cy={cy_0}
      sAngle={0 + Math.PI + rotateAngle_0}
      eAngle={Math.PI * 0.5 + + Math.PI + rotateAngle_0}
      counterclockwise={false}
      globalAlpha={globalAlpha_0}
      strokeStyle={'white'}
      lineWidth={4}
      radius={props.option.radius * 0.65}
    />

  </>
}

const Action = (props) => {
  const onHit = (e) => {
    if (props.option.status === 'process') {
      props.toSuccess()
      props.onHit(e, 1 - props.animationCountWait)
      e.stopPropagation()
    }
  }

  return <>
    <circle
      cx={props.option.cx[1]}
      cy={props.option.cy[1]}
      sAngle={0}
      eAngle={Math.PI * 2}
      counterclockwise={false}
      radius={props.option.radius}
      onPointerDown={onHit}
      onPointerDownOption={{ priority: 1 }}
    />
  </>
}

const App = (props) => {
  const { animationCount: animationCountProcess } = React.useAnimationDestination(
    {
      play: props.option.status === 'process',
      defaultCount: 0,
      destination: 1,
      rate: 1 / props.option.rateProcess * props.gameTimeRate,
      postprocess: n => Number(n.toFixed(3))
    }
  )

  const { animationCount: animationCountSuccess } = React.useAnimationDestination(
    {
      play: props.option.status === 'success',
      defaultCount: 0,
      destination: 1,
      rate: 1 / props.option.rateSuccess * props.gameTimeRate,
      postprocess: n => Number(n.toFixed(3))
    }
  )

  const { animationCount: animationCountFail } = React.useAnimationDestination(
    {
      play: props.option.status === 'fail',
      defaultCount: 0,
      destination: 1,
      rate: 1 / props.option.rateFail * props.gameTimeRate,
      postprocess: n => Number(n.toFixed(3))
    }
  )

  React.useEffect(() => {
    if (animationCountProcess === 1 && props.option.status === 'process') props.option.status = 'fail'
  }, [animationCountProcess])

  React.useEffect(() => {
    if (animationCountSuccess === 1 || animationCountFail === 1) props.onDestory()
  }, [animationCountSuccess, animationCountFail])

  React.useEffect(() => {
    if (props.option.status === 'success') props.onSuccess()
  }, [props.option.status])

  React.useEffect(() => {
    if (props.option.status === 'fail') props.onFail()
  }, [props.option.status])

  const delivery = { animationCountProcess, animationCountSuccess, animationCountFail, ...props }

  return <>
    <MeshRectFill {...delivery} />
    <Success {...delivery} />
    <Action {...delivery} />
  </>
}

export { init, App }