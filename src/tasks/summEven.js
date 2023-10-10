const sumEven = (arr) => {
  return arr.reduce((sum, curr, idx) => {
    if (idx % 2 === 1) {
      return sum + curr
    }
    return sum
  }, 0)
}

module.exports = sumEven
