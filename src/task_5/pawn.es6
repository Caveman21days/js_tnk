import { ChessPiece } from "./chess-piece";

export class Pawn extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'pawn'
    this.canBeChanged = false
  }
}