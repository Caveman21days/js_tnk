export class Field {
  constructor() {
    // расписывать координаты всех фигур не будем, представим, что тут все описано
    this.chessPieceCords = {}
  }

  getFieldState() {}
  getChessPieceCords(name) { return this.chessPieceCords[name] }

  static coords() { console.log('this is field default matrix coords') }
}