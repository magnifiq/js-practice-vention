const countChars = require('../tasks/countChars.js')

test('the input is gooseLambda', () => {
  expect(countChars('gooseLambda')).toEqual({
    g: 1,
    o: 2,
    s: 1,
    e: 1,
    L: 1,
    a: 2,
    m: 1,
    b: 1,
    d: 1,
  })
})
