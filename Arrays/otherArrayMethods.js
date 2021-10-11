// OTHER ARRAY METHODS
// Concat (Concatenates two arrays into one array)
const theHobbit = [
    "An Unexpected Journey",
    "The Desolation of Smaug",
    "The Battle of the Fives Armies"
];
const lotr = [
    "The Fellowship of the Ring",
    "The Towers",
    "Return of the King"
];
// The Concat method returns the value of two arrays
const allLOTR = theHobbit.concat(lotr);
console.log(theHobbit);

// indexOf (Returns at array (or String) index position)
// Example of indexOf on a String
const villian = "Sauron".indexOf("S")
console.log(villian); // 0