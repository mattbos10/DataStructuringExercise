// NESTING WITH DATA

// Array Nesting
const pixarMovies = [
    ["Finding Nemo", "Finding Dory"]
    ["The Incredibles", "The Incredibles 2"],
    [
        ["Coco", "Inside Out"],
        "Soul"
    ]
];

// Example 1
console.log(pixarMovies[0]); // [ 'Finding Nemo', 'Finding Dory' ]

// Example 2
console.log(pixarMovies[1][0]); // The Incredibles
// PixarMovies[1][0]
// ["The Incredibles", "The Incredibles 2"[0]]
// The Incredibles

// Example 3 
console.log(pixarMovies[2][0][1]); // Inside Out
// pixarMovies[2][0][1]
// [["Coco", "Inside Out", "Soul"][0][1]]
// ["Coco", "Inside Out"][1]
// "Inside Out"

// Object Nesting
const toyStory = {
    main: {
        buzz: "Tim Allen",
        woody: "Tom Hanks"
    },
    other: {
        hamm: "John Ratzenberger",
        boPeep: "Annie Potts",
        Slinky: "Jim Varney"
    }
};

// Example 1 (Using Square Brackets [])
console.log(toyStyor["main"]["buzz"]); // Tim Allen
// toyStory["main"]["buzz"]
// {buzz: "Tim Allen", woody: "Tom Hanks"}["buzz"]
// Tim Allen

//Example 2 (Using a Dot .)
console.log(toyStory.main.woody); // Tom Hanks
// toy.Story.main.woody
// {buzz: "Tim Allen", woody: "Tom Hanks"}.woody
// "Tom Hanks"

// Example 3 (Using a Dot .)
console.log(toyStory.other.boPeep) // Annie Potts
// toyStory.other.boPeep
// {hamm: "John Ratzenberger", boPeep: "Annie Potts", slinky: "Jim Varney"}.boPeep
// "Annie Potts"

// Mix of Array And Object Nesting
const monstersInc= {
main: [
    "Mike Wazowski",
    "James P. Sullivan"
],
other: [
    "Randal",
    "Boo",
    "Roz",
    "Celia",
    "Yeti"
]
};

// Exmaple 1
console.log(monstersInc["main"][0]); // Mike Wazowski
// monstersInc["main"][0]
//["Mike Wazowski", "James P. Sullivan"][0]
// "Mike Wazowski"

// Example 2 (Using a Dot .)
console.log(monstersInc.other[2]); // Roz
// monstersInc.other[2]
// ["Randal", "Boo", "Roz", "Celia", "Yeti"][2]
// "Roz"

 