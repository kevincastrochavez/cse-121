/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
  return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
  const addend1 = Number(document.getElementById("addend1").value);
  const addend2 = Number(document.getElementById("addend2").value);
  const sum = document.getElementById("sum");

  return (sum.value = add(addend1, addend2));
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const buttonAdd = document.getElementById("addNumbers");
buttonAdd.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  const minuend = Number(document.getElementById("minuend").value);
  const subtrahend = Number(document.getElementById("subtrahend").value);
  const difference = document.getElementById("difference");

  return (difference.value = subtract(minuend, subtrahend));
};

const buttonSubtract = document.getElementById("subtractNumbers");
buttonSubtract.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (number1, number2) => {
  return number1 * number2;
};

const mulitplyNumbers = () => {
  const factor1 = Number(document.getElementById("factor1").value);
  const factor2 = Number(document.getElementById("factor2").value);
  const product = document.getElementById("product");

  return (product.value = multiply(factor1, factor2));
};

const buttonMultiplier = document.getElementById("multiplyNumbers");
buttonMultiplier.addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (number1, number2) => {
  return number1 / number2;
};

const divideNumbers = () => {
  const dividend = Number(document.getElementById("dividend").value);
  const divisor = Number(document.getElementById("divisor").value);
  const quotient = document.getElementById("quotient");

  return (quotient.value = divide(dividend, divisor));
};

const buttonDivider = document.getElementById("divideNumbers");
buttonDivider.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const year = date.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = document.getElementById("odds");
const oddsArray = numbers.filter((number) => number % 2 != 0);
odds.innerHTML = oddsArray;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evens = document.getElementById("evens");
const evensArray = numbers.filter((number) => number % 2 == 0);
evens.innerHTML = evensArray;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = document.getElementById("sumOfArray");
const sumNumbers = numbers.reduce((acc, curr) => acc + curr);
sumOfArray.innerHTML = sumNumbers;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multiplied = document.getElementById("multiplied");
const multipliedNumbers = numbers.map((num) => num * 2);
multiplied.innerHTML = multipliedNumbers;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = document.getElementById("sumOfMultiplied");
const result = numbers.map((num) => num * 2).reduce((acc, curr) => acc + curr);
sumOfMultiplied.innerHTML = result;
