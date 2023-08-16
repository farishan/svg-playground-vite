import { BoardMode } from "./BoardMode.type"
import { HasDimension } from "./molecules/HasDimension"

export class BoardModel extends HasDimension {
  mode: BoardMode

  constructor(defaultModel?: BoardModel) {
    const DEFAULT_WIDTH = 100
    const DEFAULT_HEIGHT = 100
    const DEFAULT_MODE = 'view'

    super({
      width: defaultModel?.width || DEFAULT_WIDTH,
      height: defaultModel?.height || DEFAULT_HEIGHT
    })

    this.mode = defaultModel?.mode || DEFAULT_MODE
  }
}
