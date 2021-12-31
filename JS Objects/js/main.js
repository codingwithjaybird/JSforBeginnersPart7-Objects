// OBJECTS:

// 1. OBJECT LITERAL:

const emptyObject = {};
console.log(emptyObject);

const myComputer = {
  type: 'Laptop',
  model: 'Macbook',
  size: 13,
  color: 'Space Grey',
  sleep: function () {
    return `When I close my ${this.model}, it goes to sleep.`;
  }
  // "this" refers to the "owner" of the function
}

console.log(myComputer);

// 2 ways to access the properties in an object:

// A. DOT NOTATION:

console.log(myComputer.model); // Macbook

console.log(`I use my ${myComputer.color} ${myComputer.model} to make my videos.`);

// Adding a property to an object
myComputer.modelYear = 2021;

console.log(myComputer);

// Updating a property of an object:
myComputer.size = 14;
console.log(myComputer.size);

// Methods are functions that are properties of an object:
console.log(myComputer.sleep());

// B. BRACKET NOTATION:

console.log(myComputer['color']);

// Add a new property
myComputer['case'] = 'Rose Gold';
console.log(myComputer);

// Update a property
myComputer['model'] = 'Macbook Pro';

console.log(myComputer);

// 2. NEW KEYWORD

let myDog = new Object();
console.log(myDog);

myDog.name = 'Niki';
myDog.breed = 'Poodle';
myDog.age = 7;
console.log(myDog); 