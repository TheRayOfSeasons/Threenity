import Manager from './manager';

export default class CanvasManager extends Manager {
  public canvas: HTMLElement;
  public responsive: boolean;
  private useParentSize: boolean;

  public constructor(
    canvas: HTMLElement,
    useParentSize: boolean,
    responsive: boolean,
  ) {
    super();
    this.canvas = canvas;
    this.responsive = responsive;
    this.useParentSize = useParentSize;
  }

  get width() {
    return this.useParentSize
      ? this.canvas.parentElement.clientWidth
      : this.canvas.clientWidth;
  }

  get height() {
    return this.useParentSize
      ? this.canvas.parentElement.clientHeight
      : this.canvas.clientHeight;
  }
}
