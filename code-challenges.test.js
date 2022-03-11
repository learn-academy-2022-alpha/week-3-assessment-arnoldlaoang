// ASSESSMENT 3: Coding Practical Questions with Jest

const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibonacci", () => {

    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {

        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function that takes in a number
// Use a let statement to assign parameter a new argument
// Use for loop to iterate from 0 index through function's placeholder refering inputs minus 2
// Add built-in method .push with newArr declaring the value of newArr
// Therefore returning an array that length containing the numbers of the Fibonacci sequence.

const fibonacci = (num) => {
    let newArr = [1, 1]
    for (let i = 0; i < num - 2; i++) {
        newArr.push(newArr[i] + newArr[i + 1])

    }
    return newArr
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("oddNums", () => {

    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {

        expect(oddNums(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddNums(fullArr2)).toEqual([-823, 7, 23])
    })
})

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function that takes in an array
// Create a let statement saying to use Higher Order Function in array placeholder .filter() in the function
// Using typeoof operator to return strings in the input
// Use Higher Order Funcrtion on array placeholder to loop through the given array to satify stated condition
// Declare that the strings and paramter divided by 2 not equal to 0 to get odd numbers in string
// Call out function name follwing by a built-in method mutator .sort() following the function name to alphabetize the modified arrays to output
// Return new modified array calling new variable name
// Therefore returning a new array of only odd numbers sorted from least to greatest.

const oddNums = (array) => {
    let onlyOdds = array.filter(value => typeof value === "number" && value % 2 !== 0)
    onlyOdds.sort((a, b) => a - b)
    return onlyOdds
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

describe("sum", () => {

    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {

        expect(sum([2, 4, 45, 9])).toEqual([2, 6, 51, 60])
        expect(sum([0, 7, -8, 12])).toEqual([0, 7, -1, 11])
        expect(sum([])).toEqual([])
    })
})

// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function that takes in an array
// Create let statement with empty brackets inside the function as empty container for output to be in an array
// Use a for loop to start iterating in index 0 till the last index of the array
// // Create another let statement with 0 value to initialize with first index
// Extrpolate by calling newestSum by starting to add the initial index of the given arrays
// Call out newSum following the built-in method .push to populate empty array
// Return new populated array to newSum in empty bracket
// Therefore returning an array of the accumulating sum and the empty array returning an empty array.

const sum = (array) => {
    let newSum = []
    let newestSum = 0
    for (let i = 0; i < array.length; i++) {
        newestSum = newestSum + array[i]
        newSum.push(newestSum)
    }
    return newSum
}