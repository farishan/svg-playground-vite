import { Board } from "./Board"
import { createSvgElement } from "./createSvgElement"

function createSizeForm(board: Board) {
  const sizeForm = document.createElement('form')
  sizeForm.style.border = '1px solid'
  sizeForm.style.display = 'inline-block'
  sizeForm.style.padding = '4px'

  const title = document.createElement('h4')
  title.innerHTML = 'Board Sizer'
  sizeForm.append(title)

  const widthLabel = document.createElement('label')
  widthLabel.innerHTML = 'width<br>'
  const widthInput = document.createElement('input')
  widthInput.type = 'number'
  widthLabel.append(widthInput)
  sizeForm.append(widthLabel)

  const heightLabel = document.createElement('label')
  heightLabel.innerHTML = 'height<br>'
  sizeForm.innerHTML += '<br>'
  const heightInput = document.createElement('input')
  heightInput.type = 'number'
  heightLabel.append(heightInput)
  sizeForm.append(heightLabel)

  const sizeButton = document.createElement('button')
  sizeButton.innerHTML = 'set size'
  sizeButton.type = 'submit'
  sizeButton.style.display = 'block'
  sizeButton.style.marginLeft = 'auto'
  sizeForm.append(sizeButton)

  sizeForm.onsubmit = function (e: any) {
    e.preventDefault()
    const newWidth = e.target[0].valueAsNumber
    const newHeight = e.target[1].valueAsNumber

    board.setWidth(newWidth)
    board.setHeight(newHeight)
  }
  return sizeForm
}

export function createBoardTester(board: Board) {
  const sizeForm = createSizeForm(board)
  document.body.append(sizeForm)

  const viewButton = document.createElement('button')
  viewButton.innerHTML = 'switch to view mode'
  viewButton.onclick = function () {
    board.setMode('view')
    console.log(board.getModel())
  }
  const panButton = document.createElement('button')
  panButton.innerHTML = 'switch to pan mode'
  panButton.onclick = function () {
    board.setMode('pan')
    console.log(board.getModel())
  }

  document.body.append(viewButton)
  document.body.append(panButton)

  const rectDef = createSvgElement('rect')
  rectDef.setAttribute('id', 'myRect')
  rectDef.setAttribute('x', "0")
  rectDef.setAttribute('y', "0")
  rectDef.setAttribute('width', "10")
  rectDef.setAttribute('height', "10")
  rectDef.setAttribute('stroke', 'black')
  board.def(rectDef)

  const textDef = createSvgElement('text')
  textDef.setAttribute('id', 'myText')
  textDef.setAttribute('x', "0")
  textDef.setAttribute('y', "0")
  textDef.setAttribute('fill', "red")
  textDef.innerHTML = 'hello world'
  board.def(textDef)

  const rect = createSvgElement('use')
  rect.setAttribute('href', '#myRect')
  rect.setAttribute('x', "0")
  rect.setAttribute('y', "0")
  board.append(rect)
  const rect1 = createSvgElement('use')
  rect1.setAttribute('href', '#myRect')
  rect1.setAttribute('x', "20")
  rect1.setAttribute('y', "20")
  board.append(rect1)
  const text = createSvgElement('use')
  text.setAttribute('href', '#myText')
  text.setAttribute('x', "20")
  text.setAttribute('y', "20")
  board.append(text)

  const line = createSvgElement('line')
  line.setAttribute('x1', rect.getAttribute('x') || "0")
  line.setAttribute('y1', rect.getAttribute('y') || "0")
  line.setAttribute('x2', rect1.getAttribute('x') || "0")
  line.setAttribute('y2', rect1.getAttribute('y') || "0")
  line.setAttribute('stroke', 'yellow')
  board.append(line)
}
