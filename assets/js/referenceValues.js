// using value => ALL PRIMITIVES
let a = 10;
let b = a;

a = 30;

console.log({a,b});

// using referece => ALL OBJECTS
 let personOne = {name: "Cris"};
 let personTwo = personOne;

 personTwo.name = "Dani";

 console.log({personOne, personTwo}); 

// Broke referece in OBJECTS
let changeFieldValue = ({...object})=>{
    object.field = "TestFieldChangedInMethod";
    return object;
}

let objectOne = {field: "Test"};
let objectTwo = {...objectOne};
objectOne.field = "TestFieldChangedDirectly";

console.log({objectOne, objectTwo});
let objectThree = changeFieldValue(objectTwo);
console.log({objectThree});


let fruits = ["apple", "pear", "pineapple"];
let otherFruits = [...fruits];
otherFruits.push("orange");
console.log({fruits, otherFruits});