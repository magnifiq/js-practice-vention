const findLongestStr = require('../tasks/longestStr.js')

test('the test for the input [is, Vention, CsGo]', () => {
  expect(findLongestStr(['is', 'Vention', 'CsGo'])).toEqual('Vention')
})