const task = require("../tasks");
const helper = require("../helper/helper");

const { forEach, map, reduce, upperProps, slice, createProxy } = task;
const { randomValue: random, randomNumberArray } = helper;

const nativeSlice = Array.prototype.slice;
const nativeMap = Array.prototype.map;
const nativeReduce = Array.prototype.reduce;

describe("task 2", () => {
  describe("forEach", () => {
    it("need to change the function for each element of the array and include that element as the first argument.", () => {
      const array = randomNumberArray();
      const passed = [];
      forEach(array, (el) => passed.push(el));

      expect(array).toEqual(passed);
    });
    it("must pass the element index as the second argument", () => {
      const array = randomNumberArray();
      let index = 0;
      // eslint-disable-next-line no-plusplus
      forEach(array, (el, i) => expect(i).toEqual(index++));
    });
    it("must pass the array itself as the third argument", () => {
      const array = randomNumberArray();
      forEach(array, (el, i, a) => expect(a).toStrictEqual(array));
    });
  });

  describe("map", () => {
    it("must call a function for each element of the array and pass the element as the first argument", () => {
      const array = randomNumberArray();
      const passed = [];

      map(array, (el) => passed.push(el));

      expect(array).toEqual(passed);
    });

    it("must pass the element index as the second argument", () => {
      const array = randomNumberArray();
      let index = 0;

      // eslint-disable-next-line no-plusplus
      map(array, (el, i) => expect(i).toEqual(index++));
    });

    it("must pass the element index as the second argument", () => {
      const array = randomNumberArray();

      map(array, (el, i, a) => expect(a).toStrictEqual(a, array));
    });

    it("should return a modified copy of the array", () => {
      const array = randomNumberArray();
      const target = nativeMap.call(array, (el) => el ** 2);
      const result = map(array, (el) => el ** 2);

      expect(result).toEqual(target);
    });

    it("should return a modified copy of the array", () => {
      const array = randomNumberArray();
      const arrayCopy = nativeSlice.call(array);

      map(array, (el) => el ** 2);
      expect(array).toEqual(arrayCopy);
    });
  });

  describe("reduce", () => {
    it("should call a function for each element and pass the previous result as the first argument", () => {
      const array = randomNumberArray();
      let i = 0;
      let prevResult = array[0];

      reduce(array, (prev) => {
        expect(prev).toBe(prevResult);

        // eslint-disable-next-line no-return-assign, no-const-assign, no-plusplus
        prevResult = i++;
        return prevResult;
      });
    });

    it("must take initial into account", () => {
      const array = randomNumberArray();
      const passed = [];
      const initial = random("number");

      reduce(array, (prev) => passed.push(prev), initial);

      expect(passed[0]).toEqual(initial);
    });

    it("if initial is not specified, then at the first iteration the first element of the array is passed to prev", () => {
      const array = randomNumberArray();
      const passed = [];

      reduce(array, (prev) => passed.push(prev));

      expect(passed[0]).toStrictEqual(array[0]);
    });

    it("must pass the element as the second argument", () => {
      const array = randomNumberArray();
      let passed = [];
      const initial = random("number");

      reduce(array, (prev, el) => passed.push(el));

      expect(array.slice(1)).toEqual(passed);

      passed = [];
      reduce(array, (prev, el) => passed.push(el), initial); // with initial
      expect(array).toEqual(passed);
    });

    it("must pass the element's index as the third argument", () => {
      const array = randomNumberArray();
      let index = 1;
      const initial = random("number");

      // eslint-disable-next-line no-plusplus
      reduce(array, (prev, el, i) => expect(i).toBe(index++));

      index = 0;

      // eslint-disable-next-line no-plusplus
      reduce(array, (prev, el, i) => expect(i).toBe(index++), initial); // with initial
    });

    it("must pass the array itself as the fourth argument", () => {
      const array = randomNumberArray();

      reduce(array, (prev, el, i, a) => expect(a).toStrictEqual(array));
    });

    it("should not change the original array", () => {
      const array = randomNumberArray();
      const arrayCopy = nativeSlice.call(array);

      reduce(array, (el) => el ** 2);
      expect(array).toEqual(arrayCopy);
    });

    it("general functionality check", () => {
      const array = randomNumberArray();
      let target = nativeReduce.call(array, (prev, el) => prev + el);
      let result = reduce(array, (prev, el) => prev + el);
      const initial = random("number");

      expect(result).toEqual(target);

      target = nativeReduce.call(array, (prev, el) => prev + el, initial);
      result = reduce(array, (prev, el) => prev + el, initial);
      expect(result).toEqual(target);
    });
  });

  describe("upperProps", () => {
    it("should return an array of property names and convert those names to upper case", () => {
      const obj = { a: 1, b: 2 };
      const target = ["A", "B"];
      const result = upperProps(obj);

      expect(result).toEqual(target);
    });
  });

  describe("slice", () => {
    it("general functionality check", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      let target = nativeSlice.call(array);
      let result = slice(array);

      expect(result).toEqual(target);

      target = nativeSlice.call(array, 0);
      result = slice(array, 0);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 0, 0);
      result = slice(array, 0, 0);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 0, 1);
      result = slice(array, 0, 1);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 0, 2);
      result = slice(array, 0, 2);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 0, 5);
      result = slice(array, 0, 5);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 0, -1);
      result = slice(array, 0, -1);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 0, -3);
      result = slice(array, 0, -3);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 0, -10000);
      result = slice(array, 0, -10000);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 3);
      result = slice(array, 3);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 3, -100);
      result = slice(array, 3, -100);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 3, 100);
      result = slice(array, 3, 100);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 3, 5);
      result = slice(array, 3, 5);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, 9999);
      result = slice(array, 9999);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, -9999);
      result = slice(array, -9999);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, -9999, 4);
      result = slice(array, -9999, 4);
      expect(result).toEqual(target);

      target = nativeSlice.call(array, -9999, -4);
      result = slice(array, -9999, -4);
      expect(result).toEqual(target);
    });
  });

  describe("createProxy", () => {
    it("should return a Proxy that squares whatever value is written", () => {
      let obj = {};

      obj = createProxy(obj);

      obj.a = 2;
      obj.b = 5;

      expect(obj).toEqual({ a: 4, b: 25 });
    });
  });
});
