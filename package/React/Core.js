var rootElement = undefined

var renderFrameTimeLast = 0
var renderFrameTimeDiffMax = 0

var renderQueueInRender = false
var renderQueueShouldRender = false

var renderQueueNode = undefined

var renderQueueHook = undefined
var renderQueueHookCallback = []

var renderListener = []

var updateQueueNode = []
var updateQueueNodeFilter = []
var updateQueueNodeRoot = []

var updateAnimationFrame = undefined


const destory = (node) => {
  node.hooks.forEach(i => {
    if (typeof i.effectPrevious === 'function' && i.type === useEffect) renderQueueHookCallback.push(() => i.effectPrevious())
  })

  node.hooks.forEach(i => {
    if (typeof i.effectPrevious === 'function' && i.type === useEffectImmediate) i.effectPrevious()
  })

  node.children.forEach(i => destory(i))
}

const createElement = (tag, props, ...children) => {
  return { tag, key: Object(props).key, props: props || Object(), children }
}

const createNode = (element) => {
  var node = { element: element, key: undefined, type: undefined, children: [], hooks: [], memo: undefined, update: undefined, create: undefined, parent: undefined }

  if (Boolean(element) !== true || typeof element !== 'object') {
    node.type = 0
  }
  if (Boolean(element) === true && typeof element === 'object' && typeof element.tag === 'function') {
    node.type = 1
    node.key = element.key
  }
  if (Boolean(element) === true && typeof element === 'object' && typeof element.tag === 'string') {
    node.type = 2
    node.key = element.key
  }
  if (Boolean(element) === true && typeof element === 'object' && Array.isArray(element) === true) {
    node.type = 3
    node.key = element.key
  }

  return node
}

const renderNode = (node) => {
  renderQueueHook = { hooks: node.hooks, index: 0, node: node }

  var childrenIteration = []
  var childrenRest = []
  var childrenDestory = []

  if ((node.memo !== true || updateQueueNodeFilter.includes(node) === true) && node.type === 1) {
    childrenIteration = new Array(node.element.tag({ ...node.element.props, children: node.element.props.children || node.element.children }))
  }

  if ((node.memo !== true || updateQueueNodeFilter.includes(node) === true) && node.type === 2) {
    childrenIteration = node.element.props.children || node.element.children
  }

  if ((node.memo !== true || updateQueueNodeFilter.includes(node) === true) && node.type === 3) {
    childrenIteration = node.element
  }

  if (node.memo === true && updateQueueNodeFilter.includes(node) !== true && node.type !== 0) {
    childrenIteration = node.children.map(i => i.element)
  }

  childrenDestory = node.children

  childrenIteration.forEach((i, index) => {
    var equalIndex = node.children.findIndex(n => n && i && typeof n === 'object' && typeof i === 'object' && n.key !== undefined && n.key === i.key && n.element.tag === i.tag)

    if (equalIndex !== -1) node.children.splice(index, 0, node.children.splice(equalIndex, 1)[0])

    var inode

    const memo =
      Boolean(
        node.children[index] &&
        node.children[index].element === i
      )

    if (memo === true) inode = node.children[index]
    if (memo !== true) inode = createNode(i)

    inode.memo = memo

    const update =
      !memo &&
      Boolean(
        node.children[index] &&
        node.children[index].type === inode.type &&
        node.children[index].key === inode.key &&
        node.children[index].element.tag === inode.element.tag
      )

    if (update === true) {
      inode.hooks = node.children[index].hooks
      inode.children = node.children[index].children
    }

    inode.update = update

    inode.create = memo === false && update === false

    inode.parent = node

    if (memo === true || update === true) childrenDestory = childrenDestory.filter(i => i !== node.children[index])

    childrenRest.push(renderNode(inode))
  })

  node.children = childrenRest

  childrenDestory.forEach(i => destory(i))

  node.hooks.forEach(i => {
    if (typeof i.effect === 'function' && i.type === useEffectImmediateLoopEnd) i.effect()
  })

  renderQueueHook = undefined

  return node
}

const Fragment = (props) => {
  return props.children
}

const mount = (rootElement_0, renderFrameTimeDiffMax_0, renderListener_0) => {
  rootElement = rootElement_0
  renderFrameTimeDiffMax = renderFrameTimeDiffMax_0
  renderListener = renderListener_0
  return { render }
}

const unmount = () => {
  if (renderQueueNode) destory(renderQueueNode)
  if (updateAnimationFrame) updateAnimationFrame = cancelAnimationFrame(updateAnimationFrame)

  while (renderQueueHookCallback.length !== 0) renderQueueHookCallback.shift()()

  rootElement = undefined
  renderFrameTimeLast = 0
  renderFrameTimeDiffMax = 0
  renderQueueInRender = false
  renderQueueShouldRender = false
  renderQueueNode = undefined
  renderQueueHook = undefined
  renderQueueHookCallback = []
  renderListener = []
  updateQueueNode = []
  updateQueueNodeFilter = []
  updateQueueNodeRoot = []
  updateAnimationFrame = undefined
}

const render = () => {
  updateQueueNode = []
  updateQueueNodeFilter = []
  updateQueueNodeRoot = []

  if (updateAnimationFrame) updateAnimationFrame = cancelAnimationFrame(updateAnimationFrame)
  if (renderQueueNode) destory(renderQueueNode)

  renderQueueNode = createNode(rootElement)
  renderQueueInRender = true

  renderNode(renderQueueNode)
  renderListener(renderQueueNode)

  while (renderQueueHookCallback.length !== 0) renderQueueHookCallback.shift()()

  renderQueueInRender = false

  if (renderQueueShouldRender && renderQueueShouldRender !== (renderQueueShouldRender = false)) update()
}

const update = () => {
  if (updateAnimationFrame === undefined) {
    const now = performance.now()

    if (now - renderFrameTimeLast < renderFrameTimeDiffMax) {
      updateAnimationFrame = requestAnimationFrame(() => {
        updateAnimationFrame = undefined
        update()
      })
    }

    if (now - renderFrameTimeLast > renderFrameTimeDiffMax || now - renderFrameTimeLast === renderFrameTimeDiffMax) {
      updateAnimationFrame = requestAnimationFrame(() => {
        updateAnimationFrame = undefined
        renderFrameTimeLast = now

        updateQueueNodeFilter = Array.from(new Set(updateQueueNode))

        updateQueueNodeRoot = updateQueueNodeFilter.filter(i => {
          var isRoot = true

          while (isRoot === true && i.parent) {
            i = i.parent
            isRoot = updateQueueNodeFilter.every(n => n !== i)
          }

          return isRoot
        })

        updateQueueNode = []

        renderQueueInRender = true

        updateQueueNodeRoot.forEach(i => renderNode(i))

        renderListener(renderQueueNode)

        while (renderQueueHookCallback.length !== 0) renderQueueHookCallback.shift()()

        renderQueueInRender = false

        updateQueueNodeFilter = []
        updateQueueNodeRoot = []

        if (renderQueueShouldRender && renderQueueShouldRender !== (renderQueueShouldRender = false)) update()
      })
    }
  }
}

const hook = (callback) => {
  return (...props) => {
    try {
      if (renderQueueHook.hooks[renderQueueHook.index] !== undefined && renderQueueHook.hooks[renderQueueHook.index].type !== callback) {
        throw Error(callback)
      }
      return callback(...props)
    } finally {
      renderQueueHook.hooks[renderQueueHook.index].type = callback
      renderQueueHook.index = renderQueueHook.index + 1
    }
  }
}

const shouldRender = (queueNode) => {
  updateQueueNode = [...updateQueueNode, queueNode]

  if (renderQueueInRender === true) renderQueueShouldRender = true
  if (renderQueueInRender !== true) update()
}

const createContext = (value) => {
  const context = { value: value }

  return {
    context,
    Consumer: (props) => {
      return props.children(context.value)
    },
    Provider: (props) => {
      if (props.value !== undefined) context.value = props.value
      return props.children
    }
  }
}

const useContext = (contextInstance) => {
  return contextInstance.context.value
}

const useShouldRender = () => {
  const queueNode = renderQueueHook.node
  return () => shouldRender(queueNode)
}

const useState = (state) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { state: state }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  const queueNode = renderQueueHook.node

  const setState = (state) => {
    const _ = hook.state

    if (typeof state === 'function') hook.state = state(hook.state)
    if (typeof state !== 'function') hook.state = state

    if (hook.state !== _) shouldRender(queueNode)
  }

  return [hook.state, setState]
}

const useRef = (current) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { current: current }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  return hook
}

const useEffect = (effect, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { effect: effect }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) renderQueueHookCallback.push(() => hook.effectPrevious = hook.effectPrevious && typeof hook.effectPrevious === 'function' ? hook.effectPrevious() : undefined)
  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) renderQueueHookCallback.push(() => hook.effectPrevious = effect())

  hook.dependence = dependence
}

const useEffectImmediate = (effect, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { effect: effect }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.effectPrevious = hook.effectPrevious && typeof hook.effectPrevious === 'function' ? hook.effectPrevious() : undefined
  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.effectPrevious = effect()

  hook.dependence = dependence
}

const useEffectImmediateLoopEnd = (effect, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { effect: effect }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.effect = effect

  hook.dependence = dependence
}

const useMemo = (memo, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { memo: memo }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.memo = memo()

  hook.dependence = dependence

  return hook.memo
}

const useCallback = (callback, dependence) => {
  var hook

  if (hook === undefined) hook = renderQueueHook.hooks[renderQueueHook.index]
  if (hook === undefined) hook = { callback: callback }

  renderQueueHook.hooks[renderQueueHook.index] = hook

  if (hook.dependence === undefined || hook.dependence.some((i, index) => i !== dependence[index])) hook.callback = callback

  hook.dependence = dependence

  return hook.callback
}


export default {
  renderQueueNode: () => renderQueueNode,
  mount,
  unmount,
  render,
  renderNode,
  createElement,
  Fragment,
  shouldRender,
  createContext,
  useContext,
  useShouldRender,
  useState: hook(useState),
  useRef: hook(useRef),
  useEffect: hook(useEffect),
  useEffectImmediateLoopEnd: hook(useEffectImmediateLoopEnd),
  useEffectImmediate: hook(useEffectImmediate),
  useMemo: hook(useMemo),
  useCallback: hook(useCallback),
}