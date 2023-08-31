// import './style.css'
// import { setupCounter } from './counter.ts'
import { Board } from './Board.ts'
import { createBoardTester } from './createBoardTester.ts'

const board = new Board()
console.log(board)
console.log(board.getModel())
const view = board.getView()
document.querySelector<HTMLDivElement>('#app')!.append(view)
createBoardTester(board)

view.addEventListener('mousemove', e => {
  console.log(e.offsetX)
  if (board.getMode() === 'pan') {
    view.setAttribute('viewBox', `0 0 ${e.offsetX} 100`)
  }
})

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
