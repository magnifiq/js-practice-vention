const sumEven = require('../tasks/summEven.js')

test('test with the input [2, 6, 4, 4]', () => {
  expect(sumEven([2, 6, 4, 4])).toBe(10)
})
