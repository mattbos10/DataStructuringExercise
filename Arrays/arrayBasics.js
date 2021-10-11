// ARRAY BASICS
// An Array is a data structure that can store multiple values (NOTE: Square brackets [] are used to create arrays)

// This is an empty array
let cryptids = [];
console.log(cryptids);

// This is an array of strings
cryptids = ["Bigfoot", "Loch Ness Monster", "Moth Man"];
console.log(cryptids);

// This is an array of numbers
let sums = [1, 2, 3];
console.log(nums);

// Length (Returns the amount of items in an array like length returns the amount of characters in a string)
// String Example
console.log("Chupacabra".length); // 10
// Array Example
console.log(cryptids.length); // 3

// Index (Returns the character at a specified index for a string. Also, returns an array item at a specified index for an array)
// String Ex.
console.log("Jersey Devil"[7]);
// Array Ex.
console.log(cryptids[2]);

// Changing an item in an Array using Index
cryptids[0] = "Easter Bunny";
console.log(cryptids);

// Adding an item to an array using Index
// Example 1
// cryptids[3];
cryptids[cryptids.length] = "Flatwoods Monster";

// Ex 2
// If a value is added to an index that is greater than the length of the array then there will be an empty array item in the array
cryptids[5] = "Kraken";
console.log(cryptids);


// This is an array of different value/data types
const randomArray = [42, true, "Hello", null];

// When creating an array it can be done on multiple lines or a single line in a JS file
const multiLineArray = [
    "Dover Demon",
    "Slenderman",
    "Hopkinsville Goblin"
];
// Same as below
// const multiLineArray = ["Dover Demon", "Slendar Man", "Hopkinsville Goblin"];
