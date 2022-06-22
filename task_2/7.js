// Создать пустой объект и наполнить его данными:
// 1. Добавить свойство name и записать в него значение ‘Alex’
// 2. Добавить свойство lastName и записать в него значение ‘Smith’
// 3. Присвоить значение ‘Bob’ в свойство name
// 4. Удалить оба свойства

const obj = Object.create({}, {
  name: {
    value: 'Alex',
    writable: true,
    configurable: true
  },
  lastName: {
    value: 'Smith',
    configurable: true
  }
})

obj.name = 'Bob'
delete obj.name
delete obj.lastName
