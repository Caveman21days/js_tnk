// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей
//
// Для моторных кораблей доступны следующие специфичные характеристики:
//   Мощность двигателя
//   Материал корпуса
//
// Для парусных кораблей доступны следующие специфичные характеристики:
//   Количество мачт
//   Общая площадь парусов
//
// Что можно делать в верфи:
//   Строить корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
//   Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
//   Перекрашивать корабли - Можно красить любые корабли
//   Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
//
// Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы.
// Задание потребует воспользоваться гуглом для решения.
//
// Верфи и корабли должны создаваться с помощью функций-конструкторов.


const shipyardPrototype = Object.create({
  changeShipColor: function(ship, color) {
    ship.color = color
  },
  createShip: function(kind, ...args) {
    // В такой реализации вроде как и смысла нет проверять тип корабля,
    // тут DI и конструктор верфи исключают все проблемы, плюс
    // какой смысл передавать тип корабля в верфь с конкретным типом, но пусть будет
    if (this.checkAccess({kind})) return this.buildShip(...args)
  },
  repairShip: function(ship) {
    if (this.checkAccess(ship)) console.log('repairing...')
  },
  tradeShip: function(ship) {
    if (this.checkAccess(ship)) console.log('success trade!')
  },
  checkAccess: function(target = {kind: ''}) {
    if (!target.kind) return alert("wrong argument error");
    return target.kind === this.kind || console.log('wrong ship kind!')
  },
  buildShip: function () { alert("Not implemented error")}
}, {
  kind: {
    configurable: false,
    get: function() {
      return this.shipyardKind
    }
  }
})


const ship = Object.create({}, {
  kind: {
    configurable: false,
    get: function() {
      return this.shipKind
    }
  },
  color: {
    configurable: false,
    set: function (c) {
      this.shipColor = c
    }
  }
})

function MotorShipyard() {
  this.shipyardKind = 'motor'
  this.buildShip = function(...args) {
    return new MotorShip(...args)
  }
}
MotorShipyard.prototype = shipyardPrototype


function SailShipyard() {
  this.shipyardKind = 'sail'
  this.buildShip = function(...args) {
    return new SailShip(...args)
  }
}
SailShipyard.prototype = shipyardPrototype


function MotorShip(power, bodyMaterial) {
  this.shipKind = 'motor'
  this.power = power
  this.bodyMaterial = bodyMaterial
}
MotorShip.prototype = ship


function SailShip(sailCount, sailArea) {
  this.shipKind = 'sail'
  this.sailCount = sailCount
  this.sailArea = sailArea
}
SailShip.prototype = ship
