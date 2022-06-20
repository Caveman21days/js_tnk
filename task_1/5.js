// Реализовать if для проверки доступа
const o = {
  age: 18,
  paid: true,
  blocked: false,
  badUsername: false,
  isAdmin: false
}

const ageComp = o.age >= 18 && o.age <= 35;

if (o.isAdmin && ageComp || ageComp && o.paid && !o.blocked && !o.badUsername) {
// do something
}

let hasAccess = o.isAdmin ? ageComp : (ageComp ? (o.paid ? (!o.blocked ? !o.badUsername : false) : false) : false)