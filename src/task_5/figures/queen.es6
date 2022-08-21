import { Figure } from "./figure";
import {Colors, FigureNames} from "../constants";
import blackLogo from "../assets/black-queen.png";
import whiteLogo from "../assets/white-queen.png";

export class Queen extends Figure {
  constructor(color, x, y, field) {
    super(color, x, y, field);
    this.logo = color === Colors.B ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(x, y) {
    if (!super.canMove(x, y)) return false

    return this.isEmptyY(x, y) || this.isEmptyX(x, y) || this.isEmptyXY(x, y);
  }
}