import { ChessPiece } from "./chess-piece";

export class Rook extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'rook'
  }
}
