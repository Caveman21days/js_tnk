import { FigureNames } from "../constants";

export class Figure {
  constructor(color, y, x, field) {
    this.color = color
    this.y = y
    this.x = x
    this.id = Math.random()
    this.field = field
  }

  canMove(x, y) {
    let f = this.field.getFigureByCords(x, y)

    if (!this.isEmpty(x, y) && !this.isEnemy(x, y)) return false
    if (f && f.name === FigureNames.KING) return false

    return true
  }

  isEmpty(x, y) {
    return !Boolean(this.field.getFigureByCords(x, y))
  }

  isEnemy(x, y) {
    let f = this.field.getFigureByCords(x, y)

    return f && f.color !== this.color
  }

  moveFigure(x, y) {}

  isEmptyY(x, y) {
    if (this.x !== x) return false

    const min = Math.min(this.y, y)
    const max = Math.max(this.y, y)

    for (let y = min + 1; y < max; y++) {
      if (this.field.getFigureByCords(x, y)) return false
    }
    return true
  }

  isEmptyX(x, y) {
    if (this.y !== y) return false

    const min = Math.min(this.x, x)
    const max = Math.max(this.x, x)

    for (let x = min + 1; x < max; x++) {
      if (this.field.getFigureByCords(x, y)) return false
    }
    return true
  }

  isEmptyXY(x, y) {
    const absX = Math.abs(x - this.x)
    const absY = Math.abs(y - this.y)

    if (absY !== absX) return false

    const dy = this.y < y ? 1 : -1
    const dx = this.x < x ? 1 : -1

    for (let i = 1; i < absY; i++) {
      if (this.field.getFigureByCords(this.x + dx * i, this.y + dy * i)) return false
    }
    return true
  }
}