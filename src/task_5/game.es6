import * as Constants from './constants'
import { Field } from './field'
import { Colors } from "./constants";
import { FigureNames } from "./constants";
import { Knight } from "./figures/knight";
import { Queen } from "./figures/queen";
import { Rook } from "./figures/rook";
import { Bishop } from "./figures/bishop";

export class Game {
  constructor() {
    this.state = Constants.GameStatuses.IN_PROGRESS
    this.currentMove = Colors.W
    this.movesCount = 0
    this.movesHistory = []
    this.field = null
    this.waitForPawnChange = false
    this.selectedFigure = null
  }

  restart() {
    this.field = new Field()
    this.field.addFigures()
    this.rerenderField()
  }

  rerenderField() {
    const img = document.createElement("img");

    document.querySelectorAll('td').forEach(n => n.innerHTML = '')

    this.field.aliveFigures.forEach(f => {
      let _img = img.cloneNode()
      let cord = `${f.x},${f.y}`
      let el = document.getElementById(cord)

      _img.src = f.logo
      _img.className = 'chess-image'

      el.appendChild(_img)
    })
  }

  addClickListeners() {
    document.querySelectorAll('.button').forEach(b => {
      b.addEventListener('click', e => {
        this.figureButtonsHandler(e.currentTarget.id)
      })
    })

    document.querySelectorAll('td').forEach(el => {
      let c = el.id.split(',')

      el.addEventListener('click', () => this.moveFigure(Number(c[0]), Number(c[1])))
    })
  }

  moveFigure(x, y) {
    this.clearSelected()

    let f = this.field.getFigureByCords(x, y)
    let el = document.getElementById(`${x},${y}`)

    if (!this.selectedFigure || this.selectedFigure.color === this.currentMove) {
      if (f && f.color === this.currentMove) {
        this.selectedFigure = f
        el.classList.add("selected-figure")
      }

      if (this.selectedFigure && this.selectedFigure.canMove(x, y)) {
        // Поскольку ход разрешен, значит тут либо нет фигуры,
        // либо стоит вражеская (кроме короля)
        let enemyFigure = this.field.getFigureByCords(x, y)

        if (enemyFigure) {
          this.field.aliveFigures = this.field.aliveFigures.filter(f => f !== enemyFigure)
          this.field.deadFigures.push(enemyFigure)
        }

        this.addToHistory(this.selectedFigure, x, y)
        this.selectedFigure.moveFigure(x, y)
        this.selectedFigure.x = x
        this.selectedFigure.y = y
        this.currentMove = this.selectedFigure.color === Colors.W ? Colors.B : Colors.W
        this.movesCount += 1
        this.movesHistory.push(this.selectedFigure)
        if (this.canPawnBeChanged(this.selectedFigure)) {
          this.showFiguresList()
          document.getElementById('field').hidden = true
        } else {
          this.selectedFigure = null
          this.rerenderField()
        }
      }
    }
  }

  clearSelected() {
    document.querySelector('.selected-figure')?.classList?.remove('selected-figure')
  }

  addToHistory(f, x, y) {
    this.movesHistory.push({ name: f.n, fromX: f.x, fromY: f.y, toX: x, toY: y })

    let p = document.createElement("p");
    p.innerText = `${f.color} ${f.name} from ${f.x} ${f.y} to ${x} ${y}`
    document.getElementById('history').appendChild(p)
  }

  canPawnBeChanged(f) {
    return f.constructor.name === FigureNames.PAWN && f.y === 0 || f.y === 7
  }

  showFiguresList() {
    document.getElementById('dialog').removeAttribute("hidden");
  }

  figureButtonsHandler(name) {
    this.changePawn(name, this.selectedFigure)
    document.getElementById('dialog').hidden = true
    this.selectedFigure = null
    this.rerenderField()
    document.getElementById('field').removeAttribute('hidden')
  }

  changePawn(name, f) {
    switch(name) {
      case 'knight':
        this.changeToFigure(Knight, f)
        break
      case 'rook':
        this.changeToFigure(Rook, f)
        break
      case 'queen':
        this.changeToFigure(Queen, f)
        break
      case 'bishop':
        this.changeToFigure(Bishop, f)
        break
    }
  }

  changeToFigure(constructor, f) {
    let newFigure = new constructor(f.color, f.y, f.x, f.field)
    f.field.aliveFigures = f.field.aliveFigures.filter(figure => figure !== f)
    f.field.aliveFigures.push(newFigure)
  }
}

let game = new Game()
game.restart()
game.addClickListeners()
