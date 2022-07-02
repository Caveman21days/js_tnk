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


const shipyardPrototype = {
  kind: {
    configurable: false,
    get: function() {
      return this.shipyardKind
    }
  },
  changeShipColor: function(ship, color) {
    ship.color = color
  },
  createShip: function(kind, ...args) {
    return this.handleShip(['kind', kind],function() {
      switch (kind) {
        case 'motor':
          return new MotorShip(...args)
        case 'sail':
          return new SailShip(...args)
      }
    })
  },
  repairShip: function(ship) {
    this.handleShip(['ship', ship], function() { console.log('repairing...') })
  },
  tradeShip: function(ship) {
    this.handleShip(['ship', ship], function() { console.log('success trade!') })
  },
  handleShip: function(arg, callbackFn) {
    let hasAccess;

    switch(arg[0]) {
      case 'kind':
        hasAccess = arg[1] === this.shipyardKind
        break;
      case 'ship':
        hasAccess = arg[1].kind === this.shipyardKind
        break;
      default:
        alert("wrong argument error");
    }

    if (hasAccess) {
      return callbackFn()
    } else {
      console.log('wrong ship kind!')
    }
  }
}

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
}
MotorShipyard.prototype =  shipyardPrototype


function SailShipyard() {
  this.shipyardKind = 'sail'
}
SailShipyard.prototype =  shipyardPrototype


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
