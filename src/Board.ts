import { createSvgElement } from "./createSvgElement";
import { BoardMode } from "./BoardMode.type";
import { BoardModel } from "./BoardModel";
import { BoardView } from "./BoardView";

export class Board {
  model: BoardModel
  view: BoardView
  observers: BoardView[] = []

  constructor(setting?: BoardModel) {

    this.model = new BoardModel(setting)
    this.view = new BoardView(this.model)

    /* Init */
    this.addObserver(this.view)
  }

  addObserver(observer: BoardView) {
    this.observers.push(observer);
  }
  removeObserver(observer: BoardView) {
    this.observers = this.observers.filter(o => o !== observer);
  }
  notifyObservers(updatedModel: BoardModel) {
    this.observers.forEach(observer => {
      if (observer.update) {
        observer.update(updatedModel)
      }
      if (observer.render) {
        observer.render()
      }
    });
  }

  setWidth(newWidth: number) {
    this.model.width = newWidth
    this.notifyObservers(this.model)
  }
  setHeight(newHeight: number) {
    this.model.height = newHeight
    this.notifyObservers(this.model)
  }
  setMode(newMode: BoardMode) {
    this.model.mode = newMode
    this.notifyObservers(this.model)
  }

  getMode() {
    return this.model.mode
  }

  def(element:any) {
    const def = createSvgElement('defs')
    def.append(element)
    this.view.append(def)
  }

  getModel() {
    return this.model
  }
  getView() {
    this.view.render()
    return this.view.get()
  }

  append(e: any) {
    this.view.append(e)
  }
}
