const isValidSoduko = require("./valid-sudoku");

if (process.argv.length < 3) {
    throw new Error("No test file specified");
}

const testCases = require(process.argv[2]);

testCases.forEach((test) => console.log(isValidSoduko(test)));
