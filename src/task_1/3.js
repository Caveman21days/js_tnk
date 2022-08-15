// Написать функцию для реверсии слова не используя встроенные методы
reverse = (word) => {
  let arr = word.split('');
  let res = [];

  while (arr.length > 0) {
    res.push(arr.pop())
  }

  return res.join('')
};