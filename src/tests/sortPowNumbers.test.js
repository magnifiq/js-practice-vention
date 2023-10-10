const  sortPowNumbers  = require("../tasks/sortedPowNumbers.js");

test("the test for the input [-5,-3,10,7]", ()=>{
    expect(sortPowNumbers([-5,-3,10,7])).toEqual([9, 25, 49, 100])
});
