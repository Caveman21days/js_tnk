// 2. С помощью прототипа реализовать структуру "Квадрат" которая будет расширять структуру "Прямоугольник",
// должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр

// Мне кажется, прямоугольник должен быть прототипом квадрата.
// Все таки квадрат - это частный случай прямоугольника

function Rectangle(w, h) {
  this.w = w
  this.h = h

  this.getArea = function() {
    return this.w * this.h
  }

  this.getPerimeter = function() {
    return 2 * (this.w + this.h)
  }
}

function Square(s) {
  this.w = this.h = s
}

Square.prototype = new Rectangle
