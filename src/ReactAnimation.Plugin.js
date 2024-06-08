import ReactAnimation from './ReactAnimation'

import PositionCover from './Utils.Position.Cover'

const useStateFlow = (props) => {
  const ref = ReactAnimation.useRef([])

  const getState = (index) => {
    return ref.current[index === undefined ? (ref.current.length - 1) : index]
  }

  const useState = (state) => {
    ReactAnimation.useEffectImmediate(() => ref.current = [...ref.current, state], [state])
    ReactAnimation.useEffectImmediate(() => () => ref.current = ref.current.filter((i) => i !== state), [state])
  }

  return { getState, useState }
}

const useAnimationCount = (props) => {
  const [animationCount, setAnimationCount] = ReactAnimation.useState(props.count)
  const [animationDelay, setAnimationDelay] = ReactAnimation.useState(props.delay)
  const [animationFlow, setAnimationFlow] = ReactAnimation.useState(props.flow)

  ReactAnimation.useEffect(() => {
    if (animationDelay !== 0) setAnimationDelay(animationDelay - 1)
  })

  ReactAnimation.useEffect(() => {
    if (props.play === true && animationDelay === 0 && props.reverse === true && (animationCount === props.min || animationCount < props.min)) setAnimationFlow(0)
    if (props.play === true && animationDelay === 0 && props.reverse === true && (animationCount === props.max || animationCount > props.max)) setAnimationFlow(1)
  })

  ReactAnimation.useEffect(() => {
    if (props.play === true && animationDelay === 0 && (animationFlow === 0 && animationCount < props.max)) setAnimationCount(animationCount + props.rate)
    if (props.play === true && animationDelay === 0 && (animationFlow === 1 && animationCount > props.min)) setAnimationCount(animationCount - props.rate)
  })

  return { animationCount, setAnimationCount, animationDelay, setAnimationDelay, animationFlow, setAnimationFlow }
}


const useEventRoot = (props) => {
  const events = ReactAnimation.useRef([])

  const addEventListener = (type, callback, option) => {
    events.current = [...events.current, { type, callback, option }]
  }

  const removeEventListener = (type, callback, option) => {
    events.current = events.current.filter(i => i.type !== type || i.callback !== callback || i.option !== option)
  }

  const useEventListener = (type, callback, option, dependence) => {
    ReactAnimation.useEffectImmediate(() => addEventListener(type, callback, option), dependence)
    ReactAnimation.useEffectImmediate(() => () => removeEventListener(type, callback, option), dependence)
  }

  const clearEventListener = () => {
    events.current = []
  }

  const execute = (e, type) => {
    const exe = events.current
      .map(i => Object({ ...i, option: typeof i.option === 'function' ? i.option() : i.option }))
      .filter(i => i.type === type)
      .sort((a, b) => {
        const a_ = a.option === undefined || a.option.priority === undefined ? 0 : a.option.priority
        const b_ = b.option === undefined || b.option.priority === undefined ? 0 : b.option.priority
        return b_ - a_
      })

    var stopPropagation = false

    exe.forEach(i => {
      var x
      var y

      if (window.ontouchstart === undefined) x = e.pageX
      if (window.ontouchstart === undefined) y = e.pageY
      if (window.ontouchstart !== undefined) x = e.changedTouches[0].pageX
      if (window.ontouchstart !== undefined) y = e.changedTouches[0].pageY

      x = x * props.dpr
      y = y * props.dpr

      const point = { x, y }

      var ifCallback

      if (stopPropagation === false && Boolean(i.option) === true && Boolean(i.option.position) === true && PositionCover.pointcover(i.option.position, point) === true) ifCallback = true
      if (stopPropagation === false && Boolean(i.option) !== true || Boolean(i.option.position) !== true) ifCallback = true

      if (ifCallback) i.callback(e)
      if (ifCallback && Boolean(i.option) === true && Boolean(i.option.stopPropagation) === true) stopPropagation = true
    })
  }

  ReactAnimation.useEffectImmediate(() => {
    new Array('click', 'touchstart', 'touchmove', 'touchend', 'mousedown', 'mousemove', 'mouseup').forEach(type => {
      props.canvas.addEventListener(type, e => execute(e, type), { passive: true })
    })
  }, [])

  return { addEventListener, removeEventListener, clearEventListener, useEventListener }
}


const useDragControlMouse = (props) => {
  const positionOrigin = ReactAnimation.useRef()
  const positionTarget = ReactAnimation.useRef()

  const onChange = ReactAnimation.useCallback((params) => {
    if (props.onChange) props.onChange(params)
  }, [props.onChange])

  const onStart = ReactAnimation.useCallback((e) => {
    if (props.enable === false) return

    const x = e.pageX
    const y = e.pageY

    positionOrigin.current = { x, y }
    positionTarget.current = { x, y }

    const changedX = 0
    const changedY = 0
    const continuedX = 0
    const continuedY = 0

    onChange({ type: 'mouse', status: 'afterStart', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const onMove = ReactAnimation.useCallback((e) => {
    if (props.enable === false) return

    if (positionTarget.current === undefined) return

    const x = e.pageX
    const y = e.pageY

    const changedX = x - positionTarget.current.x
    const changedY = y - positionTarget.current.y
    const continuedX = positionTarget.current.x - positionOrigin.current.x
    const continuedY = positionTarget.current.y - positionOrigin.current.y

    positionTarget.current = { x, y }

    onChange({ type: 'mouse', status: 'afterMove', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const onEnd = ReactAnimation.useCallback((e) => {
    if (props.enable === false) return

    if (positionTarget.current === undefined) return

    const x = e.pageX
    const y = e.pageY

    const changedX = x - positionTarget.current.x
    const changedY = y - positionTarget.current.y
    const continuedX = positionTarget.current.x - positionOrigin.current.x
    const continuedY = positionTarget.current.y - positionOrigin.current.y

    onChange({ type: 'mouse', status: 'beforeEnd', e, x, y, changedX, changedY, continuedX, continuedY })

    positionOrigin.current = undefined
    positionTarget.current = undefined

    onChange({ type: 'mouse', status: 'afterEnd', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  return { onStart, onMove, onEnd }
}

const useDragControlTouch = (props) => {
  const positionOrigin = ReactAnimation.useRef()
  const positionTarget = ReactAnimation.useRef()

  const onChange = ReactAnimation.useCallback((params) => {
    if (props.onChange) props.onChange(params)
    if (props.onChangeMemo) props.onChangeMemo(params)
  }, [props.onChange])

  const onStart = ReactAnimation.useCallback((e) => {
    if (props.enable === false) return

    const x = [...e.changedTouches].map(i => i.pageX)
    const y = [...e.changedTouches].map(i => i.pageY)

    positionOrigin.current = { x, y }
    positionTarget.current = { x, y }

    const changedX = []
    const changedY = []
    const continuedX = []
    const continuedY = []

    x.forEach((x, index) => {
      changedX[index] = 0
      continuedX[index] = 0
    })

    y.forEach((y, index) => {
      changedY[index] = 0
      continuedY[index] = 0
    })

    onChange({ type: 'touch', status: 'afterStart', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const onMove = ReactAnimation.useCallback((e) => {
    if (props.enable === false) return

    if (positionTarget.current === undefined) return

    const x = [...e.changedTouches].map(i => i.pageX)
    const y = [...e.changedTouches].map(i => i.pageY)

    const changedX = []
    const changedY = []
    const continuedX = []
    const continuedY = []

    x.forEach((x, index) => {
      changedX[index] = x - positionTarget.current.x[index]
      continuedX[index] = positionTarget.current.x[index] - positionOrigin.current.x[index]
    })

    y.forEach((y, index) => {
      changedY[index] = y - positionTarget.current.y[index]
      continuedY[index] = positionTarget.current.y[index] - positionOrigin.current.y[index]
    })

    positionTarget.current = { x, y }

    onChange({ type: 'touch', status: 'afterMove', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const onEnd = ReactAnimation.useCallback((e) => {
    if (props.enable === false) return

    if (positionTarget.current === undefined) return

    const x = [...e.changedTouches].map(i => i.pageX)
    const y = [...e.changedTouches].map(i => i.pageY)

    const changedX = []
    const changedY = []
    const continuedX = []
    const continuedY = []

    x.forEach((x, index) => {
      changedX[index] = x - positionTarget.current.x[index]
      continuedX[index] = positionTarget.current.x[index] - positionOrigin.current.x[index]
    })

    y.forEach((y, index) => {
      changedY[index] = y - positionTarget.current.y[index]
      continuedY[index] = positionTarget.current.y[index] - positionOrigin.current.y[index]
    })

    onChange({ type: 'touch', status: 'beforeEnd', e, x, y, changedX, changedY, continuedX, continuedY })

    positionOrigin.current = undefined
    positionTarget.current = undefined

    onChange({ type: 'touch', status: 'afterEnd', e, x, y, changedX, changedY, continuedX, continuedY })
  }, [props.enable, props.onChange])

  const r = { onStart, onMove, onEnd }

  return r
}

const useDragControl = (props) => {
  if (window.ontouchstart === undefined) {
    var { onStart, onMove, onEnd } = useDragControlMouse({ onChange: props.onChange, enable: props.enable })
    props.useEventListener('mousedown', onStart, props.startOption, [onStart, props.startOption])
    props.useEventListener('mousemove', onMove, props.moveOption, [onMove, props.moveOption])
    props.useEventListener('mouseup', onEnd, props.endOption, [onEnd, props.endOption])
  }
  if (window.ontouchstart !== undefined) {
    var { onStart, onMove, onEnd } = useDragControlTouch({ onChange: props.onChange, enable: props.enable })
    props.useEventListener('touchstart', onStart, props.startOption, [onStart, props.startOption])
    props.useEventListener('touchmove', onMove, props.moveOption, [onMove, props.moveOption])
    props.useEventListener('touchend', onEnd, props.endOption, [onEnd, props.endOption])
  }
}


const useImage = (props) => {
  const image = ReactAnimation.useMemo(() => new Image(), [])

  ReactAnimation.useEffectImmediate(() => image.src = props.src, [props.src])
  ReactAnimation.useEffectImmediate(() => image.onload = () => props.onload ? props.onload() : undefined, [props.onload])

  return { image }
}

const usePreloadResource = (props) => {
  const [resourceCount, setResourceCount] = ReactAnimation.useState(0)
  const [resourceLoading, setResourceLoading] = ReactAnimation.useState(true)

  ReactAnimation.useEffectImmediate(() => {
    setResourceCount(0)
    setResourceLoading(true)

    props.resource.forEach(i => fetch(i).then(() => setResourceCount(pre => pre + 1)))
  }, [props.resource])

  ReactAnimation.useEffectImmediate(() => setResourceLoading(resourceCount < props.resource.length), [resourceCount])

  return { resourceCount, resourceLoading }
}


const useScrollControl = (props) => {
  const enableScrollX = props.enableScrollX
  const enableScrollY = props.enableScrollY
  const maxScrollX = props.maxScrollX
  const maxScrollY = props.maxScrollY
  const position = props.position

  const [scrollX, setScrollX] = ReactAnimation.useState(props.defaultScrollX)
  const [scrollY, setScrollY] = ReactAnimation.useState(props.defaultScrollY)

  const onScroll = (x, y) => {
    if (enableScrollX) {
      var rx = scrollX + x
      if (rx > maxScrollX) rx = maxScrollX
      if (rx < 0) rx = 0
      setScrollX(rx)
    }
    if (enableScrollY) {
      var rx = scrollY + x
      if (rx > maxScrollY) rx = maxScrollY
      if (rx < 0) rx = 0
      setScrollX(rx)
    }
  }

  const onChange = () => {
    if (params.status === 'afterMove') onScroll(params.changedX, params.changedY)
  }

  ReactAnimationPlugin.useDragControlMouse({ onChange: ReactAnimation.useCallback(onChange, []), enable: true, useEventListener: props.useEventListener, mousedownOption: props.position, mousemoveOption: props.position, mouseupOption: props.position, mousedownOption: props.position })

  return { setScrollX, setScrollY }
}


const ReactAnimationPlugin = { useStateFlow, useEventRoot, useAnimationCount, useDragControlMouse, useDragControlTouch, useDragControl, useImage, usePreloadResource }

export default ReactAnimationPlugin