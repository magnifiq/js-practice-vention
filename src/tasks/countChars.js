const countChars = (str) =>
  str.split('').reduce((info, char) => {
    // eslint-disable-next-line no-param-reassign
    info[char] = (info[char] || 0) + 1
    return info
  }, {})

module.exports = countChars