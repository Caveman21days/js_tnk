const positiveElements = arr => {
  if (!Array.isArray(arr)) throw new Error('arg is not an array')
  if (arr.length === 0) return 0

  return arr.filter(e => e > 0).reduce((acc, curr) => acc + curr, 0)
}