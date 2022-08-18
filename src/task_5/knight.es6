import { ChessPiece } from "./chess-piece";

export class Knight extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'knight'
  }
}
