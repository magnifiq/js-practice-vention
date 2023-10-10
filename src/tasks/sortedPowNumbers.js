const sortPowNumbers = (arr) => {
  const powArr = [];
  arr.forEach((element) => {
    const powNum = Math.pow(element, 2);
    powArr.push(powNum);
  });

  return powArr.sort((a, b) => a - b);
};

module.exports = sortPowNumbers;
