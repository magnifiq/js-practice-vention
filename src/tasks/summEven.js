const sumEven = (arr) => arr.reduce((sum, curr) => {
    if (curr % 2 === 0) {
      return sum + curr
    }
    return sum
  }, 0)

module.exports = sumEven