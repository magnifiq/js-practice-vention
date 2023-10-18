/*
    Task 1:
    Write an analogue of the built-in forEach method for working with arrays
    See how forEach works and repeat this behavior for the array that will be passed in the array parameter
 */
function forEach(array, fn) {}

/*
 Task 2:
    Write an analogue of the built-in map method for working with arrays
    See how map works and repeat this behavior for the array that will be passed in the array parameter
 */
function map(array, fn) {}
/*
 Task 3:

    Write an analogue of the built-in reduce method for working with arrays
    See how reduce works and repeat this behavior for the array that will be passed in the array parameter
 */
function reduce(array, fn, initial) {}

/*
 Task 4:
    The function should iterate over all the properties of the object, convert their names to uppercase and return them as an array
    Example:
        upperProps({ name: 'Sem', lastName: 'Mus' }) will return ['NAME', 'LASTNAME']
 */
function upperProps(obj) {}

/*
 Task 5 *:
    Write an analogue of the built-in slice method for working with arrays
    See how slice works and repeat this behavior for the array that will be passed in the array parameter
 */
function slice(array, from = 0, to = array.length) {}

/*
 Task 6 *:
   The function accepts an object and must return a Proxy for that object
   The proxy should intercept all attempts to write property values and square that value
 */
function createProxy(obj) {}

module.exports = {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy,
};
