/*
    Task 1:
    Write an analogue of the built-in forEach method for working with arrays
    See how forEach works and repeat this behavior for the array that will be passed in the array parameter
 */
function forEach(array, fn) {
  const lenArr=array.length
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lenArr; i++) {
    fn(array[i], i, array);
  }
}

/*
 Task 2:
    Write an analogue of the built-in map method for working with arrays
    See how map works and repeat this behavior for the array that will be passed in the array parameter
 */
function map(array, fn) {
  return array.map((element, index) => fn(element, index, array));
}
/*
 Task 3:

    Write an analogue of the built-in reduce method for working with arrays
    See how reduce works and repeat this behavior for the array that will be passed in the array parameter
 */
function reduce(array, fn, initial) {
  let acc = initial !== undefined ? initial : array[0];
  const startIndex = initial !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    acc = fn(acc, array[i], i, array);
  }

  return acc;
}

/*
 Task 4:
    The function should iterate over all the properties of the object, convert their names to uppercase and return them as an array
    Example:
        upperProps({ name: 'Sem', lastName: 'Mus' }) will return ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const result = [];
  for (const key in obj) {
    result.push(key.toUpperCase());
  }
  return result;
}

/*
 Task 5 *:
    Write an analogue of the built-in slice method for working with arrays
    See how slice works and repeat this behavior for the array that will be passed in the array parameter
 */
function slice(array, from = 0, to = array.length) {
  const output = [];
  let startIdx = from < 0 ? Math.max(array.length + from, 0) : from;
  let endIdx = to < 0 ? Math.max(array.length + to, 0) : to;

  for (let i = startIdx; i < endIdx; i++) {
    output.push(array[i]);
  }

  return output;
}

/*
 Task 6 *:
   The function accepts an object and must return a Proxy for that object
   The proxy should intercept all attempts to write property values and square that value
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      if (typeof value ==='number') {
        target[prop] = value * value;
        return true;
      }else{
        return false;
      }
      
    },
  });
}

module.exports = {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy,
};
