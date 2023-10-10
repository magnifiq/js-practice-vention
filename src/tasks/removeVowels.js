const removeVowels = (str) => {
  return str.replace(/[aeiouAEIOU]/g, '')
}

module.exports = removeVowels
