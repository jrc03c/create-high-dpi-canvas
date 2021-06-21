function createHighDPICanvas(width, height) {
  width = parseInt(width)
  height = parseInt(height)

  let dpi = window.devicePixelRatio || 1
  let canvas = document.createElement("canvas")
  canvas.width = parseInt(width * dpi)
  canvas.height = parseInt(height * dpi)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  let context = canvas.getContext("2d")
  context.scale(dpi, dpi)

  return canvas
}

if (typeof module !== "undefined") {
  module.exports = createHighDPICanvas
}
