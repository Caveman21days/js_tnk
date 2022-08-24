import { Figure } from "./figure";
import {Colors, FigureNames} from "../constants";
import blackLogo from "../assets/black-knight.png";
import whiteLogo from "../assets/white-knight.png";

export class Knight extends Figure {
  constructor(color, x, y, field) {
    super(color, x, y, field);
    this.logo = color === Colors.B ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMove(x, y) {
    if (!super.canMove(x, y)) return false

    const dx = Math.abs(this.x - x);
    const dy = Math.abs(this.y - y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
  }
}
