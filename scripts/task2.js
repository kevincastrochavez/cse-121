/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Kevin Castro";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.getElementById("name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYear = 2021;

// Step 4: place the value of the current year variable into the HTML file
document.getElementById("year").textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const imageName = "images/portrait.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", imageName);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ["Tacos", "Enchiladas", "Picadas", "Tamales"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById("food").innerHTML = favoriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
const additionalFood = "Mole";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(additionalFood);

// Step 5: repeat Step 2
document.getElementById("food").innerHTML = favoriteFoods;

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = favoriteFoods;

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = favoriteFoods;
