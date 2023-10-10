const countChars = (str) => {
  const info = {}

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (!info[char]) {
      info[char] = 1
    } else {
      info[char]++
    }
  }

  return info
}

module.exports = countChars
