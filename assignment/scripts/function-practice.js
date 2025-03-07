console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log( helloName('Sarah') )

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(1, 2))

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
console.log(multiplyThree(2,3,4))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(2));
console.log(isPositive(-2));
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  let lastItem = array.length - 1;
  return array[lastItem];
}
console.log(getLast([1,2,3,4]))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let arrayNumbers = [1, 2, 3, 4, 5]
function find(value, array) {
    for (let i = 0; i < array.length - 1; i++)
    if (value === array[i]){
      return true;
    } 
    return false;
    }
    

console.log(find(2, arrayNumbers))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(firstLetter, string) {
  letters = string.split('');
  for (let letter of letters) {
    if (firstLetter === letter) {
      return true;
    }
    return false;
  }
}

console.log(isFirstLetter('d', 'dog'))
// 9. Function to return the sum of all numbers in an array

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (numbers of array) {
    sum = numbers + sum;
  }
  // TODO: return the sum
  return sum;
}

console.log(sumAll(arrayNumbers))
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let positiveArray = []
let numbersArray = [-3, -2, -1, 0]
function allPositive(array) {
  for (let numbers of array) {
    if (numbers > 0) {
      positiveArray.push(numbers);
    }
  }
  return positiveArray;
}

 console.log(allPositive(numbersArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// I picked the matchstick house challenge. I'm supposed
// to code an expression that determines how many matches
// there are based on the amount of matchstick houses.
// 1 house has 6 matchsticks total but 2 houses would only
// have 11 matchsticks as the houses share a wall. 

function matchHouses(step) {
	if(step > 0){
		let matches = (step - 1) * 5 + 6;
		return matches;
	}
	else{
		return 0;
	}
}

console.log(matchHouses(5));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
