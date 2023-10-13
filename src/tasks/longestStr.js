const findLongestStr = (arr) => arr.reduce((longest, curr) => curr.length > longest.length ? curr : longest, "")

module.exports = findLongestStr