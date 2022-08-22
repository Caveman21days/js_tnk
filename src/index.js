import './main.css'
import { Game } from "./task_5/game";
import blackBishop from "./task_5/assets/black-bishop.png";
import whiteBishop from "./task_5/assets/white-bishop.png";
import blackKing from   "./task_5/assets/black-king.png";
import whiteKing from   "./task_5/assets/white-king.png";
import blackKnight from "./task_5/assets/black-knight.png";
import whiteKnight from "./task_5/assets/white-knight.png";
import blackPawn from   "./task_5/assets/black-pawn.png";
import whitePawn from   "./task_5/assets/white-pawn.png";
import blackQueen from  "./task_5/assets/black-queen.png";
import whiteQueen from  "./task_5/assets/white-queen.png";
import blackRook from   "./task_5/assets/black-rook.png";
import whiteRook from   "./task_5/assets/white-rook.png";


let game = new Game()
game.restart()
game.addClickListeners()
game.setPlayer(game.player1, prompt("Type player1 (white) name: "))
game.setPlayer(game.player2, prompt("Type player2 (white) name: "))
game.showPlayers()