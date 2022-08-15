import { ChessPiece } from "./chess-piece";

export class Bishop extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'bishop'
  }
}
