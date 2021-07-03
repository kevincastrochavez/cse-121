/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

const personalInfo = {
  name: "Kevin Castro",
  photo: "images/kevin.jpg",
  favoriteFoods: ["Tacos", "Enchiladas", "Carnitas", "Pizza", "Hot Dogs"],
  hobbies: ["Sports", "Reading", "Hiking", "Movies"],
  placesLived: [
    {
      place: "Morelos, MX",
      length: "15 years",
    },
    {
      place: "Baja California, MX",
      length: "5 years",
    },
    {
      place: "Mexico City, MX",
      length: "4 years",
    },
    {
      place: "Idaho, USA",
      length: "3 months",
    },
  ],
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = personalInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const photo = document.getElementById("photo");
photo.src = personalInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.setAttribute("alt", personalInfo.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const favoriteFoods = document.getElementById("favorite-foods");

const foodArray = personalInfo.favoriteFoods;

foodArray.map((food) => {
  const item = document.createElement("li");
  favoriteFoods.append(item);
  item.textContent = food;
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobbies = document.getElementById("hobbies");

const hobbiesArray = personalInfo.hobbies;

hobbiesArray.map((hobbie) => {
  const item = document.createElement("li");
  hobbies.append(item);
  item.textContent = hobbie;
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

const placesLived = document.getElementById("places-lived");

const placesArray = personalInfo.placesLived;

placesArray.map((place) => {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");

  placesLived.append(dt);
  placesLived.append(dd);

  dt.textContent = place.place;
  dd.textContent = place.length;
});
