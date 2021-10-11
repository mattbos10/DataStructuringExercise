// MAIN ARRAY METHODS
const tmnt = [
    "Leonardo",
    "Michaelangelo",
    "Donatello",
    "Raphael"
];
console.log(tmnt);

// PUSH (Adds an item to the end of an array)
// NOTE: PUSH also returns the new number of items in the array.
tmnt.push("Master Splinter");
// console.log(tmnt.push("Master Splinter"));
console.log(tmnt);

// POP (Removes the item at the end of an array)
// NOTE: POP also returns the value of the item that was removed from the end of the array
const splinter = tmnt.pop();
console.log(splinter); // Master Splinter
console.log(tmnt);

// SHIFT (Removes the item at the start of an array (AKA Item at index of Zero). Also, moves all leftover items in the array on space/index to the left)
// NOTE: SHIFT also returns the value of the item that was removed from the start of the array
const leo = tmnt.shift();
console.log(leo);
console.log(tmnt);

// UNSHIFT (Adds the item at the start of an array (AKA at the index of Zero). Also, moves all items in the array on space/index to the right)
// NOTE: UNSHIFT also returns the new number of items in the array.
const arrayNum2 = tmnt.unshift("Shredder");
console.log(arrayNum2);
console.log(tmnt);

// const CAN be used when altering an array via array methods, but you can NOT create a brand new array value for an array that is set to a const variable
// tmnt = ["Casey Jones"]; <-- This will not work