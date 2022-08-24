import { Figure } from "./figure";
import {Colors, FigureNames} from "../constants";
import blackLogo from "../assets/black-king.png";
import whiteLogo from "../assets/white-king.png";

export class King extends Figure {
  constructor(color, x, y, field) {
    super(color, x, y, field);
    this.logo = color === Colors.B ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(x, y) {
    if (!super.canMove(x, y)) return false

    const dx = Math.abs(this.x - x);
    const dy = Math.abs(this.y - y);

    return (dx === 1 && dy === 0) ||
           (dx === 0 && dy === 1) ||
           (dx === 1 && dy === 1) ||
           (dx === 1 && dy === 1)
  }
}