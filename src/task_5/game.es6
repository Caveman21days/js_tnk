import * as constants from './constants'
import { Field } from './filed'
import { Bishop } from "./bishop";
import { King } from "./king";
import { Knight } from "./knight";
import { Pawn } from "./pawn";
import { Queen } from "./queen";
import { Rook } from "./rook";

export class Game {
  constructor() {
    this.state = IN_PROGRESS
    this.killed = []
    this.currentMove = WM
    this.movesCount = 0
    this.movesHistory = []
  }

  static availableStatuses = AVAILABLE_STATUSES
}