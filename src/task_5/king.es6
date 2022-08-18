import { ChessPiece } from "./chess-piece";

export class King extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'king'
  }
}