const removeVowels = require('../tasks/removeVowels.js')

test('the test for the input Abeceda', () => {
  expect(removeVowels('Abeceda')).toEqual('bcd')
})