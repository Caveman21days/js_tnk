// Реализовать функцию для фильтрации массива по длине слов

const _filter = (arr, min, max) => {
  if (!Array.isArray(arr)) throw new Error('first argument must be array')
  if (!arr.every(i => typeof i === 'string')) throw new Error('all array elements must be strings')
  if (!Number.isInteger(min) || !Number.isInteger(max)) throw new Error('min and max args must be integer')

  return arr.filter(e => e.length >= min && e.length <= max)
}