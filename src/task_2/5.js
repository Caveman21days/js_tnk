// Есть массив сотрудников компании
// const employees = [
//   {
//     firstName: 'Alex',
//     lastName: 'Smith',
//     age: 54,
//     salary: 10000,
//     position: 'Architect'
//   },
//   {
//     firstName: 'Gustav',
//     lastName: 'Andersen',
//     age: 31,
//     salary: 5000,
//     position: 'Software engineer'
//   },
//   {
//     firstName: 'Liz',
//     lastName: 'Taylor',
//     age: 20,
//     salary: 7000,
//     position: 'Manager'
//   }
// ]
//
// Нужно выполнить с ним следующие преобразования:
//   1. Узнать среднюю зарплату сотрудников
//   2. Отсортировать сотрудников по зарплате
//   3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет

const employees = [
  {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 54,
    salary: 10000,
    position: 'Architect'
  },
  {
    firstName: 'Gustav',
    lastName: 'Andersen',
    age: 31,
    salary: 5000,
    position: 'Software engineer'
  },
  {
    firstName: 'Liz',
    lastName: 'Taylor',
    age: 20,
    salary: 7000,
    position: 'Manager'
  }
]


const calculateAverageSalary = function(arr) {
  return arr.map(e => e.salary).reduce((acc, el) => acc + el, 0) / arr.length
}

const sortBySalary = function(arr) {
  return arr.sort((a,b) => Number(b.salary) - Number(a.salary) ) // desc
}

const _filter = function(arr) {
  return arr.filter(e => Number(e.salary) > 4500 && Number(e.age) > 25)
}

// 1
calculateAverageSalary(employees) // 7333.3

// 2
sortBySalary(employees) // Alex, Liz, Gustav

// 3
_filter(employees) // Alex, Gustav