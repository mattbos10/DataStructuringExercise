// OBJECTS (An Object is a Data Structure that can store multiple values. Objects store data/values in Properties (AKA Key value pairs))

/* 
Syntax Example for an Object

{ key: value }
*/
// NOTE: Keys should be written in camelCase

// Object Example 1
const user = { firstName: "Kelsey", lastName: "Riley" };

// Object Example 2
const userInfo = {
    username: "KelseyDCummings",
    firstName: "Kelsey",
    lastName: "Cummings",
    age: 26,
    loggedIn: true
};

// ACCESSING VALUES IN AN OBJECT (To access a value in an object the key that is paried with that value must be used/referenced)
// Using Square Brackets [] and a String ("", '', ``)
console.log(userInfo[`username`]); // KelseyDCummings
console.log(userInfo["age"]); // age 26
console.log(userInfo["LoggedIn"]); // true

// Using a Dot .
console.log(userInfo.first); // Kelsey
console.log(userInfo.loggedIn); // true

// MODIFYING/ADDING WITH AN OBJECT
const willSmith = {
    firstName: "Will",
    lastName: "Smith",
    age: "53",
    greatActor: true,
    favoriteMovie: "Independence Day"
};

// Modifying
// Examples using Square Brackets []
willSmith["favoriteMovie"] = "Men In Black";
console.log(willSmith["favoriteMovie"]); // Men In Black
console.log(willSmith); // Entire Object with Men In Black set as the new value for the favoriteMovie key

// Example using a Dot .
willSmith.firstName = "Willard"; 
console.log(willSmith.firstName); // Willard
console.log(willSmith); // Entire Object with "Willard" set as the new value for the firstName 

// Adding
// When referencing a key that does NOT already exist in the object it will created a new Key Value Pair
// Example using Square Brackets []
console.log(willSmith);
willSmith['highestGrossingMovie'] = "Aladdin"; // Aladdin
console.log(willSmith); // Entire Object with "Aladdin" set as the value for the NEW highestGrossMovie key

// Example using a Dot .
willSmith.favoritesTVShow = "Fresh Prince of Bel Air";
console.log(willSmith.favoriteTVShow); // Fresh Prince of Bel Air
console.log(willSmith); // Entire Object with "Fresh Prince of Bel Air" set as the value for the NEW favoriteTVShow key

// Example 2
willSmith.upcomingMovie = "King Richard"
console.log(willSmith.upcomingMovie); // King Richard
console.log(willSmith); // Entire Object with "King Richard" set as the value for the NEW upcomingMovie key