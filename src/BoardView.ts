import { createSvgElement } from "./createSvgElement"
import { BoardModel } from "./BoardModel"

export class BoardView {
  dom: SVGElement
  model: BoardModel
  constructor(boardModel: BoardModel) {
    this.model = boardModel

    this.dom = createSvgElement()
    this.dom.style.border = `1px solid`
    this.dom.style.background = '#ddd'
    this.dom.setAttribute('viewBox', `0 0 ${this.model.width} ${this.model.height}`)
  }

  update(newModel: BoardModel) {
    console.log(newModel)
    this.model.width = newModel.width
    this.model.height = newModel.height
    this.model.mode = newModel.mode
  }

  render() {
    this.dom.setAttribute('width', String(this.model.width))
    this.dom.setAttribute('height', String(this.model.height))

    if (this.model.mode === 'view') {
      this.dom.style.cursor = 'default'
    }
    else if (this.model.mode === 'pan') {
      this.dom.style.cursor = 'grab'
    }
  }

  append(e: any) {
    this.dom.append(e)
  }

  get() {
    return this.dom
  }
}
