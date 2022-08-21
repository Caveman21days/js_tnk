import { Figure } from "./figure";
import {Colors, FigureNames} from "../constants";
import blackLogo from "../assets/black-rook.png";
import whiteLogo from "../assets/white-rook.png";

export class Rook extends Figure {
  constructor(color, x, y, field) {
    super(color, x, y, field);
    this.logo = color === Colors.B ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(x, y) {
    if (!super.canMove(x, y)) return false

    return this.isEmptyX(x, y) || this.isEmptyY(x, y)
  }
}
