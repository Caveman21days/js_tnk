import { Figure } from "./figure";
import { FigureNames } from "../constants";
import { Colors } from "../constants";
import blackLogo from "../assets/black-pawn.png";
import whiteLogo from "../assets/white-pawn.png";

export class Pawn extends Figure {
  constructor(color, x, y, field) {
    super(color, x, y, field);
    this.logo = color === Colors.B ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
    this.isFirstStep = true
  }

  canMove(x, y) {
    if(!super.canMove(x, y)) return false;

    const direction = this.color === Colors.B ? 1 : -1
    const firstStepDirection = this.color === Colors.B ? 2 : -2

    if ((y === this.y + direction || this.isFirstStep && (y === this.y + firstStepDirection)) &&
         x === this.x && !this.field.getFigureByCords(x, y)) {
      return true;
    }

    return !!(y === this.y + direction && (x === this.x + 1 || x === this.x - 1) && this.isEnemy(x, y));
  }

  moveFigure(x, y) {
    this.isFirstStep = false;
  }
}