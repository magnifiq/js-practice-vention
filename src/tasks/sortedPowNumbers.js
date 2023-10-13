const sortPowNumbers = (arr) => {
  let powArr = []
  powArr = arr.map((el) => el * el)

  return powArr.sort((a, b) => a - b)
}

module.exports = sortPowNumbers