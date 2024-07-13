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

const MeshCircleFill = (props) => {
  const cx_0 = React.useMemo(() => {
    var cx = props.option.cx[0]

    cx = cx + (props.option.cx[1] - props.option.cx[0]) * props.animationCountProcess

    return cx
  }, [props.animationCountProcess, props.option.cx[0], props.option.cx[1]])

  const cy_0 = React.useMemo(() => {
    var cy = props.option.cy[0]

    cy = cy + (props.option.cy[1] - props.option.cy[0]) * props.animationCountProcess

    return cy
  }, [props.animationCountProcess, props.option.cy[0], props.option.cy[1]])

  const radius_0 = React.useMemo(() => {
    var radius = props.option.radius

    radius = radius + props.option.radius * props.animationCountWait * 0.25

    return radius
  }, [props.animationCountWait, props.animationCountSuccess, props.animationCountFail, props.option.radius])

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

    globalAlpha = globalAlpha - props.animationCountWait * 1

    if (globalAlpha < 0) globalAlpha = 0
    if (globalAlpha > 1) globalAlpha = 1

    return globalAlpha
  }, [props.animationCountProcess, props.animationCountWait, props.animationCountSuccess, props.animationCountFail])

  return <>
    <circle
      beginPath
      fill
      cx={cx_0}
      cy={cy_0}
      sAngle={0}
      eAngle={Math.PI * 2}
      counterclockwise={false}
      radius={radius_0}
      fillStyle={color}
      globalAlpha={globalAlpha_0}
    />
  </>
}

const MeshCircleStroke = (props) => {
  const radius_0 = React.useMemo(() => {
    var radius = props.option.radius

    radius = radius + radius
    radius = radius - props.option.radius * props.animationCountProcess * 1
    radius = radius - props.option.radius * props.animationCountWait * 0.25
    radius = radius - props.option.radius * props.animationCountSuccess * 0.75
    radius = radius - props.option.radius * props.animationCountFail * 0.75

    return radius
  }, [props.animationCountProcess, props.animationCountWait, props.animationCountSuccess, props.animationCountFail, props.option.radius])

  const color = React.useMemo(() => {
    var colorR = 255
    var colorG = 255
    var colorB = 255
    return `rgb(${colorR}, ${colorG}, ${colorB})`
  }, [props.animationCountProcess, props.animationCountSuccess, props.animationCountFail])

  const globalAlpha_0 = React.useMemo(() => {
    var globalAlpha = 0

    if (props.animationCountProcess < 0.25) {
      globalAlpha = props.animationCountProcess / 0.25
    }

    if (props.animationCountProcess > 0.25 || props.animationCountProcess === 0.25) {
      globalAlpha = 1
    }

    if (props.animationCountProcess === 1) globalAlpha = 0

    return globalAlpha
  }, [props.animationCountProcess, props.animationCountSuccess, props.animationCountFail])

  return <>
    <arc
      beginPath
      stroke
      cx={props.option.cx[1]}
      cy={props.option.cy[1]}
      sAngle={0}
      eAngle={Math.PI * 2}
      counterclockwise={false}
      radius={radius_0}
      lineWidth={4}
      strokeStyle={color}
      globalAlpha={globalAlpha_0}
    />
  </>
}

const Success = (props) => {
  const cx_0 = React.useMemo(() => {
    var cx = props.option.cx[0]

    cx = cx + (props.option.cx[1] - props.option.cx[0]) * props.animationCountProcess

    return cx
  }, [props.animationCountProcess, props.option.cx[0], props.option.cx[1]])

  const cy_0 = React.useMemo(() => {
    var cy = props.option.cy[0]

    cy = cy + (props.option.cy[1] - props.option.cy[0]) * props.animationCountProcess

    return cy
  }, [props.animationCountProcess, props.option.cy[0], props.option.cy[1]])

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

  const rotateAngle_0 = React.useMemo(() => {
    return props.animationCountSuccess * Math.PI
  }, [props.animationCountSuccess])

  return <>
    <rect
      beginPath
      stroke
      cx={cx_0}
      cy={cy_0}
      w={props.option.radius * 2}
      h={props.option.radius * 2}
      globalAlpha={globalAlpha_0}
      strokeStyle={'white'}
      lineWidth={4}
      radius={props.option.radius * 2 * 0.08}
    />

    <translate translateX={cx_0} translateY={cy_0}>
      <rotate rotateAngle={rotateAngle_0}>
        <translate translateX={cx_0 * -1} translateY={cy_0 * -1}>
          <rect
            beginPath
            stroke
            cx={cx_0}
            cy={cy_0}
            w={props.option.radius}
            h={props.option.radius}
            globalAlpha={globalAlpha_0}
            strokeStyle={'white'}
            lineWidth={4}
            radius={props.option.radius * 0.08}
          />
        </translate>
      </rotate>
    </translate>

    <translate translateX={cx_0} translateY={cy_0}>
      <rotate rotateAngle={rotateAngle_0 * -1}>
        <translate translateX={cx_0 * -1} translateY={cy_0 * -1}>
          <rect
            beginPath
            stroke
            cx={cx_0}
            cy={cy_0}
            w={props.option.radius * 4}
            h={props.option.radius * 4}
            globalAlpha={globalAlpha_0}
            strokeStyle={'white'}
            lineWidth={4}
            radius={props.option.radius * 4 * 0.08}
          />
        </translate>
      </rotate>
    </translate>
  </>
}

const Action = (props) => {
  const onHit = (e) => {
    if (props.option.status === 'wait') {
      props.toSuccess()
      props.onHit(e, 1 - props.animationCountWait)
    }

    e.stopPropagation()
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
  const { animationCount: animationCountProcess } = React.Plugin.useAnimationDestination(
    {
      play: props.option.status === 'process' || true,
      defaultCount: 0,
      destination: 1,
      rate: 1 / props.option.rateProcess * props.gameTimeRate,
      postprocess: n => Number(n.toFixed(3))
    }
  )

  const { animationCount: animationCountWait } = React.Plugin.useAnimationDestination(
    {
      play: props.option.status === 'wait' || animationCountProcess === 1,
      defaultCount: 0,
      destination: 1,
      rate: 1 / props.option.rateWait * props.gameTimeRate,
      postprocess: n => Number(n.toFixed(3))
    }
  )

  const { animationCount: animationCountSuccess } = React.Plugin.useAnimationDestination(
    {
      play: props.option.status === 'success',
      defaultCount: 0,
      destination: 1,
      rate: 1 / props.option.rateSuccess * props.gameTimeRate,
      postprocess: n => Number(n.toFixed(3))
    }
  )

  const { animationCount: animationCountFail } = React.Plugin.useAnimationDestination(
    {
      play: props.option.status === 'fail',
      defaultCount: 0,
      destination: 1,
      rate: 1 / props.option.rateFail * props.gameTimeRate,
      postprocess: n => Number(n.toFixed(3))
    }
  )

  React.useEffect(() => {
    if (animationCountProcess === 1 && props.option.status === 'process') props.option.status = 'wait'
  }, [animationCountProcess])

  React.useEffect(() => {
    if (animationCountWait === 1 && props.option.status === 'wait') props.option.status = 'fail'
  }, [animationCountWait])

  React.useEffect(() => {
    if (animationCountSuccess === 1 || animationCountFail === 1) props.onDestory()
  }, [animationCountSuccess, animationCountFail])

  React.useEffect(() => {
    if (props.option.status === 'success') props.onSuccess()
  }, [props.option.status])

  React.useEffect(() => {
    if (props.option.status === 'fail') props.onFail()
  }, [props.option.status])

  const delivery = { animationCountProcess, animationCountWait, animationCountSuccess, animationCountFail, ...props }

  return <>
    <MeshCircleFill {...delivery} />
    <MeshCircleStroke {...delivery} />
    <Success {...delivery} />
    <Action {...delivery} />
  </>
}

export { init, App }