// 3. Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:

// Есть следующее расширение объектов:
//   Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник

// Есть следующий объект, в котором свойства лежат кучей:

const john = {
  name: "John",
  lastName: "Smith",
  position: "Senior engineer",
  startDate: "10.10.1990",
  endDate: "10.10.2000",
  baseSalary: "10000",
  salaryCurrency: "$",
  location: "Russia",
  department: "IT",
  phoneNumber: "+1234567890",
  eat: function() {},
  sleep: function() {},
  callFriend: function() {},
  writeReport: function() {},
  organizeMeeting: function () {},
  retire: function () {},
  startVacation: function () {}
};

const human = {
  name: "John",
  lastName: "Smith",
  location: "Russia",
  phoneNumber: "+1234567890",
  eat: function() {},
  sleep: function() {},
  callFriend: function() {},
}

const employee = {
  position: "Senior engineer",
  department: "IT",
  salaryCurrency: "$",
  baseSalary: "10000",
  writeReport: function() {},
  organizeMeeting: function () {},
  startVacation: function () {},
  retire: function () {},
}

Object.setPrototypeOf(employee, human)

const currentEmployee = {
  startDate: "10.10.1990",
}

Object.setPrototypeOf(currentEmployee, employee)

const formerEmployee = {
  endDate: "10.10.2000",
}

Object.setPrototypeOf(formerEmployee, employee)

