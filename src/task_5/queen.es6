import { ChessPiece } from "./chess-piece";

export class Queen extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'queen'
  }
}