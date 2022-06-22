// Создать объект human со следующими возможностями:
// 1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
// 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года

const human = Object.create({}, {
  fullName: {
    get: function() {
      return `${this.lastName} ${this.firstName}`
    },
    set: function(val) {
      [this.lastName, this.firstName] = val.split(' ')
    }
  },
  dateOfBirth: {
    get: function() {
      return `${this.dayOfBirth}.${this.monthOfBirth}.${this.yearOfBirth}`
    },
    set: function(date) {
      this.age = new Date().getFullYear() - date.getFullYear()
      this.dayOfBirth = date.getDate()
      this.monthOfBirth = date.getMonth()
      this.yearOfBirth = date.getFullYear()
    }
  }
})
