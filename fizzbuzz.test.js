const {expect, test} = require('@jest/globals');
const {fizzBuzz} = require("./fizzbuzz");
const exp = require("node:constants");

test("Arguments less than 1 should fail", () => {
  expect(() => fizzBuzz(0)).toThrowError("Invalid parameter");
  expect(() => fizzBuzz(-100)).toThrowError("Invalid parameter");
})
test("Arguments should be numbers", () => {
  expect(() => fizzBuzz()).toThrowError("Invalid parameter");
  expect(() => fizzBuzz(null)).toThrowError("Invalid parameter");
  expect(() => fizzBuzz([])).toThrowError("Invalid parameter");
  expect(() => fizzBuzz([1])).toThrowError("Invalid parameter");
})
test("Shortest fizzbuzz", () => {
  expect(fizzBuzz(1)).toEqual(["1"]);
})
test("Basic fizzbuzz", () => {
  const answers = ["1", "2", "Fizz", "4", "Buzz"];
  expect(fizzBuzz(5)).toEqual(answers)
})
test("Complex fizzbuzz", () => {
  const answers = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"];
  expect(fizzBuzz(15)).toEqual(answers)
})
