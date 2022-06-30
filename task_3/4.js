// 4. Система продажи билетов
//
// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их
// ticketWindow.createEvent('Concert', 500) // создаем концерт и указываем цену билетов
// ticketWindow.buyTicket('Concert') /* Добавляем сумму за билет в кассу, возвращаем
// случайный шестизначный ID билета, создать ID можно любым способом */
//
// ticketWindow.returnTicket('123456') /* Возвращаем билет, если в системе такой id записан
// как проданный, он должен быть удален из списка проданных и из кассы должна быть
// вычтена соответствующая его цене сумма */

const eventHandler = () => {
  let events = {}
  let sum = 0
  let sold = []

  return {
    createEvent: function (event_name, price){
      events[event_name] ||= price
    },

    buyTicket: function (event_name){
      if (events[event_name]) {
        let id = Math.floor(Math.random() * 899999 + 100000)

        sum += events[event_name]
        sold.push([event_name, id])
        console.log(id)
        return id
      } else {
        return 'События с таким названием еще не придумали'
      }
    },

    returnTicket: function (id){
      let t = sold.find(s => s[1] === id)

      if (t) {
        sold = sold.filter(a => a[1] !== id)
        sum -= events[t[0]]
      } else {
        return 'Ваш билет паленый'
      }
    }
  }
}
