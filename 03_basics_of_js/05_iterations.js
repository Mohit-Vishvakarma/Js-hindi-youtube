/**
 * => itrerations means loops  both are same.
 * 
 * 
 */

// For loop 
const numA = ["1A", "2B", "3C", "4D", "5E"]

for(let i = 0; i<numA.length; i++){
    console.log(numA[i]);
}


// do while loop

console.log("do while loop");

let i = 0;
do{
    console.log(numA[i]);
    i++;
}
while(i < numA.length);



// while loop
console.log("While loop");
let j = 0;
while (j < numA.length) {
 console.log(numA[j]);   
 j++;
}



// for of loop
// there no requirment to condition and operators.
// Object me for of loop nahi lagta hai object ke liye loop iterateble nahi hai. Object for in loop me print hote hai.

console.log(" For of loop.");

// Example 1
const arr = [12, 13, 14, 15, 16, 17];

for (const i of arr) {
    // iterations is a variable like i , j, num etc
    console.log(i);
}


// Example 2


console.log("to print string with for of loop");
const greeting = "Hellow world"

for (const greet of greeting) {
    console.log(greet);    
}



// For in loop
// for in loop with objects

const myObj = {
    gameA: "GTA",
    gameB: 'Car Drivinig',
    gameC: 'Sawesafar'
}


for (const key in myObj) {
    // console.log(key);       // print only keys of object
    // console.log(myObj[key]);        // print only values of object
    console.log(`${key} : ${myObj[key]}`);      // print key and value both of object by using variables
}


// For in loop with arrays

const arr2 = [ 23, 24, 25, 26, 27, 28 ,29, 30 ]

for (const key in arr2) {
  console.log(key);             // it return only index number
  console.log(arr2[key]);           // it return value of array
  console.log(`${key} : ${arr2[key]}`);     // it return index and value both by variable.
}




// --------------- For Each loop---------------------

const array3 =  [12, 13, 14, 15, 16, 17 ,18]

array3.forEach( function (item) {
    console.log(item);
} )



// or use by arrow function

array3.forEach( (item) => {
    console.log(item);
})



// or we use anothor function and pass it
console.log("for Each loop by function");
function printMe(item){
    console.log(item);
}

array3.forEach(printMe);


// more property of for Ecah loop


array3.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

// .......................... object ko access karna by for ecah loop......................

const myCoding  = [
    {
        languageName: 'javaScript',
        languageFile: 'js'
    },
    {
        languageName: 'Python',
        languageFile: 'py'
    }, 
    {
        languageName: 'Java',
        languageFile: 'java'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})







// ******************************************** Map in JS ************************************

// => Map is a object in JS. 
// => Map me order matter karta hai 
// => Map [Key or value] ko hold karta hai 
// => Map kisi bhi [key, value] ke pair ko repit nahi karta hu
// => map me sabhi value Uniqce hoti hai becuase koi bhi value double nahi hoti hai
// => map me value set karne ke liye map.set() ka use karte hai



const myMap = new Map()
myMap.set('In', 'India')
myMap.set('Us', 'United state')
myMap.set('fr', 'France')
myMap.set('In', 'India')            // ye map nahi hoga kyoki ye ek baar map ho gaya hai.
myMap.set('Sh', 'Shreelanka')

    // console.log(myMap);

// Loop in myMap

for (const [key, value] of myMap) {
    console.log(key, ":", value);
    
}

// for (const key in myMap) {
//  console.log(key);             // map for in loop me execute nahi hota hai
// }