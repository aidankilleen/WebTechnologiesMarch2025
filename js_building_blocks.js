// Comments
// js uses both // and /* */ for comments

console.log("js_building_blocks.js running...");


// variables
var x = 10;

// var keyword is outdated use let keyword instead
let y = 20;
const pi = 3.14;
// pi = 4; // can't assign to a const

// data types
let z = 100; // number
let firstname = "Aidan"; // string
let v = 1.2345; // floating point numbers
let b = true; // boolean

z = "one hundred"; // js is not type safe

// date is an object
let d = new Date();
console.log(d.getFullYear());

// everything else is also an object
console.log(firstname.toUpperCase());

// arrays
let colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(colours[1]); // index starts at 0 so colours[1] is orange
console.log(colours.length); // length of the array

// no requirement for items in the array to have the same type
let stuff= [1, 1.1, "one", true, new Date()];

console.log(colours[7]);

// loops
for (let i=0; i<colours.length; i++) {
    console.log(colours[i]);
}
console.log("-------------------------");
for (let colour of colours) {
    console.log(colour);
}

// conditionals
let r = Math.random();

if (r < 0.3) {
    console.log("small:" + r);
} else if (r < 0.7){
    console.log("medium:" + r);
} else {
    console.log("large:" + r);
}

// ternary operator
let message = "The value is " + (r < 0.5 ? "small" : "large");


// Objects
let o = {
    name: "Aidan", 
    location: "Cork", 
    score: 999
};
console.log(o);

console.log(o.name);
console.log(o.score);

// access property using a string name is unusual but useful
console.log(o["name"]);

// you can add a property to an object - unusual but useful
o.country = "Ireland";

console.log(o);


let people = [
    { id:1, name:"Alice", email:"alice@gmail.com", active:true },
    { id:2, name:"Bob", email:"bob@gmail.com", active:false },
    { id:3, name:"Carol", email:"carol@gmail.com", active:false },
    { id:4, name:"Dan", email:"dan@gmail.com", active:true }
];

for (let person of people) {
    if (person.active) {
        console.log(person.name);
    } else {
        console.log(person.name + " is inactive");
    }
}




































console.log("finished");



