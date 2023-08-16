import { HasHeight } from "../atoms/HasHeight";
import { HasWidth } from "../atoms/HasWidth";

interface Dimension extends HasWidth, HasHeight { }

export class HasDimension implements HasWidth, HasHeight {
  width: number;
  height: number;

  constructor(defaultDimension?: Dimension) {
    this.width = defaultDimension?.width || 0
    this.height = defaultDimension?.height || 0
  }
}
