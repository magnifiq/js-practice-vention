function randomNumber(min = 0, max = 100) {
  return Math.round((max - min) * Math.random()) + min;
}

// eslint-disable-next-line consistent-return
function randomValue(typesParams, maxDepth = 2) {
  let depth = 0;
  const allTypes = [
    "string",
    "number",
    "boolean",
    "null",
    "undefined",
    "array",
    "object",
  ];
  let type = "";
  let types = typesParams;

  if (types) {
    types = Array.isArray(types) ? types : [types];
  } else {
    types = allTypes;
  }

  type = randomNumber(0, types.length - 1);

  // eslint-disable-next-line default-case
  switch (types[type]) {
    case "string": {
      const length = randomNumber(3, 10);
      const string = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        string.push(String.fromCharCode(randomNumber(33, 126)));
      }

      return string.join("");
    }
    case "number":
      return randomNumber();
    case "boolean":
      return !!randomNumber(0, 1);
    case "null":
      return null;
    case "array": {
      if (depth < maxDepth) {
        const length = randomNumber(3, 10);
        const array = [];

        // eslint-disable-next-line no-plusplus
        depth++;

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < length; i++) {
          array.push(
            randomValue(
              depth === maxDepth ? allTypes.slice(0, -2) : allTypes,
              maxDepth - depth,
            ),
          );
        }

        return array;
      }
      return randomValue(allTypes.slice(0, -2));
    }
    case "object": {
      if (depth < maxDepth) {
        const length = randomNumber(3, 10);
        const object = {};

        // eslint-disable-next-line no-plusplus
        depth++;

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < length; i++) {
          const key = randomValue("string");

          object[key] = randomValue(
            // eslint-disable-next-line eqeqeq
            depth == maxDepth ? allTypes.slice(0, -2) : allTypes,
            maxDepth - depth,
          );
        }

        return object;
      }
      return randomValue(allTypes.slice(0, -2));
    }
  }
}

function randomNumberArray(mode, min, max, minLength = 3, maxLength = 10) {
  const length = randomNumber(minLength, maxLength);
  const array = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    let number = randomNumber(min, max);

    if ((mode === "even" && number % 2) || (mode === "odd" && !(number % 2))) {
      // eslint-disable-next-line no-plusplus
      number++;
    }

    array.push(number);
  }

  return array;
}

function randomStringArray(minLength = 3, maxLength = 10) {
  const length = randomNumber(minLength, maxLength);
  const array = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    array.push(randomValue("string"));
  }

  return array;
}

module.exports = {
  randomValue,
  randomNumberArray,
  randomStringArray,
  randomNumber,
};
