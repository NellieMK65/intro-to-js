// 1. Numbers
console.log(typeof 23);
console.log(typeof -2);
console.log(typeof 0.3453);

// 2. Strings
console.log(typeof 'first');
console.log(typeof `John`);

const firstName = 'John';
const lastName = `Doe`;

console.log(4 + 5);
console.log(firstName + lastName);

// 3. Boolean (true/false)
console.log(typeof true);
console.log(typeof false);

// 4. Objects - collection of data stored in key/value pairs
const car = {
	model: 'BMW',
	yearOfManufacture: 2018,
	owner: 'John Doe',
};

console.log(typeof car);

// Arrays - special types of objects
const students = ['John', 'Jane'];

console.log(typeof students);

// 5. null
let name = null;
console.log(name);

// 6. undefined
let age;
console.log(age);
