class ChessPiece {
  constructor(color) {
    this.color = color
  }

  getAvailableMoves() {}

  static availableColors = ['white', 'black']
  static availableChessPieces = ['pawn', 'rook', 'bishop', 'knight', 'king', 'queen']
}

class Pawn extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'pawn'
    this.canBeChanged = false
  }
}

class Rook extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'rook'
  }
}

class Bishop extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'bishop'
  }
}

class Knight extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'knight'
  }
}

class King extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'king'
  }
}

class Queen extends ChessPiece {
  constructor(color) {
    super(color);
    this.name = 'queen'
  }
}

// ------------- FIELD
class Field {
  constructor() {
    // расписывать координаты всех фигур не будем, представим, что тут все описано
    this.chessPieceCords = {}
  }

  getFieldState() {}
  getChessPieceCords(name) { return this.chessPieceCords[name] }

  static coords() { console.log('this is field default matrix coords') }
}

// ------------- GAME
class Game {
  constructor() {
    this.state = 'in progress'
    this.killed = []
    this.currentMove = 'white'
    this.movesCount = 0
    this.movesHistory = []
  }

  static availableStatuses = ['white win', 'black win', 'in progress']
}
