import { Figure } from "./figure";
import { FigureNames, Colors } from "../constants";
import blackBishop from "../assets/black-bishop.png";
import whiteBishop from "../assets/white-bishop.png";

export class Bishop extends Figure {
  constructor(color, x, y, field) {
    super(color, x, y, field);
    this.logo = color === Colors.B ? blackBishop : whiteBishop;
    this.name = FigureNames.BISHOP;
  }

  canMove(x, y) {
    if (!super.canMove(x, y)) return false

    return super.isEmptyXY(x, y);
  }
}
