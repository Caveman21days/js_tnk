import { Bishop } from "./figures/bishop";
import { King } from "./figures/king";
import { Knight } from "./figures/knight";
import { Pawn } from "./figures/pawn";
import { Queen } from "./figures/queen";
import { Rook } from "./figures/rook";
import { Colors } from "./constants";

export class Field {
  // 8 _ A B C D E F G H _ 0
  // 7                     1
  // 6                     2
  // 5                     3
  // 4                     4
  // 3                     5
  // 2                     6
  // 1 _ 0 1 2 3 4 5 6 7 _ 7

  constructor() {
    this.aliveFigures = []
    this.deadFigures = []
  }

  addFigures() {
    this.#addPawns()
    this.#addKnights()
    this.#addKings()
    this.#addBishops()
    this.#addQueens()
    this.#addRooks()
  }

  getFigureCords(id) {
    let f = this.aliveFigures.find(f => f.id === id)
    if (f) return [f.y, f.x]
    return null
  }

  getFigureByCords(x, y) {
    return this.aliveFigures.find(f => f.x === x && f.y === y)
  }

  #addPawns() {
    for (let i = 0; i < 8; i++) {
      this.aliveFigures.push(new Pawn(Colors.B, 1, i, this))
      this.aliveFigures.push(new Pawn(Colors.W, 6, i, this))
    }
  }

  #addKings() {
    this.aliveFigures.push(new King(Colors.B, 0, 4, this))
    this.aliveFigures.push(new King(Colors.W, 7, 4, this))
  }

  #addQueens() {
    this.aliveFigures.push(new Queen(Colors.B, 0, 3, this))
    this.aliveFigures.push(new Queen(Colors.W, 7, 3, this))
  }

  #addBishops() {
    this.aliveFigures.push(new Bishop(Colors.B, 0, 2, this))
    this.aliveFigures.push(new Bishop(Colors.B, 0, 5, this))
    this.aliveFigures.push(new Bishop(Colors.W, 7, 2, this))
    this.aliveFigures.push(new Bishop(Colors.W, 7, 5, this))
  }

  #addKnights() {
    this.aliveFigures.push(new Knight(Colors.B, 0, 1, this))
    this.aliveFigures.push(new Knight(Colors.B, 0, 6, this))
    this.aliveFigures.push(new Knight(Colors.W, 7, 1, this))
    this.aliveFigures.push(new Knight(Colors.W, 7, 6, this))
  }

  #addRooks() {
    this.aliveFigures.push(new Rook(Colors.B, 0, 0, this))
    this.aliveFigures.push(new Rook(Colors.B, 0, 7, this))
    this.aliveFigures.push(new Rook(Colors.W, 7, 0, this))
    this.aliveFigures.push(new Rook(Colors.W, 7, 7, this))
  }
}