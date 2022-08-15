export class ChessPiece {
  constructor(color) {
    this.color = color
  }

  getAvailableMoves() {}

  static availableColors = AVAILABLE_COLORS
  static availableChessPieces = AVAILABLE_CHESS_PIECES
}