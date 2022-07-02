// 1. Модифицировать прототип Array, добавив в него метод shuffle,
// чтобы получить возможность выполнять случайную сортировку для любого массива

Array.prototype.shuffle = function() { return this.sort(() => 0.5 - Math.random()) }