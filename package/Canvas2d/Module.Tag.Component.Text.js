import Core from './Core'
import Tag from './Module.Tag'

const caculateLine = (text, font, w, wrap, ellipsis, split) => {
  ellipsis = ellipsis || ''
  split = split || ''

  const px = Number(font.match(/[\d\.]+px/)[0].replace('px', ''))

  Core.context().save()
  Core.context().font = font

  var caculateText = ''
  var caculateTextLine = []

  text = text.split(split).map((i, index) => index ? [split, i] : [i]).flat()

  if (Boolean(wrap) === true) {
    text.forEach((i) => {
      const tw = Core.context().measureText(caculateText + i).width
      if (tw > w && caculateText !== '') caculateTextLine.push(caculateText)
      if (tw > w && caculateText !== '') caculateText = i
      if (tw > w && caculateText === '') caculateTextLine.push(i)
      if (tw < w) caculateText = caculateText + i
    })
  }

  if (Boolean(wrap) !== true) {
    text.some((i) => {
      const tw = Core.context().measureText(caculateText + i + ellipsis).width
      if (tw > w) caculateTextLine.push(caculateText + ellipsis)
      if (tw > w) caculateText = ''
      if (tw < w) caculateText = caculateText + i
      return caculateTextLine.length > 0
    })
  }

  if (caculateText) caculateTextLine.push(caculateText)

  caculateTextLine = caculateTextLine.map(i => {
    return {
      text: i.trim(),
      w: Core.context().measureText(i.trim()).width,
      h: px,
    }
  })

  Core.context().restore()

  return caculateTextLine
}

const caculateLineLocation = (line, lineHeight, gap) => {
  const w = Math.max(...line.map(i => i.w))
  const h = line.reduce((t, n, index) => t + n.h * lineHeight + (index ? gap : 0), 0)

  return { w, h }
}

const App = {
  locationMount: (dom) => {
    Tag.locationMount(dom)
  },

  locationUnmount: (dom) => {
    Tag.locationUnmount(dom)
  },

  renderMount: (dom) => {
    Tag.renderMount_0(dom)

    const lineHeight = dom.props.lineHeight || 1
    const gap = dom.props.gap || 0

    const px = Number(Core.context().font.match(/[\d\.]+px/)[0].replace('px', ''))

    const line = dom.props.line ? dom.props.line : caculateLine(dom.props.text, dom.props.font, dom.props.w, dom.props.wrap, dom.props.ellipsis, dom.props.split)

    line.forEach((i, index) => {
      var x = dom.props.x
      var y = dom.props.y
      var h = px * lineHeight

      y = y - px * 0.18 - (h - px) * 0.5
      y = y + (index + 1) * h + index * gap

      if (dom.props.align === 'left') x = x
      if (dom.props.align === 'center') x = x + (dom.props.w - i.w) / 2
      if (dom.props.align === 'right') x = x + (dom.props.w - i.w)

      if (Boolean(dom.props.fillText) === true) Core.context().fillText(i.text, x, y)
      if (Boolean(dom.props.strokeText) === true) Core.context().strokeText(i.text, x, y)
    })

    Tag.renderMount_1(dom)
  },

  renderUnmount: (dom) => {
    Tag.renderUnmount_0(dom)
  },
}

App.caculateLine = caculateLine
App.caculateLineLocation = caculateLineLocation

export default App