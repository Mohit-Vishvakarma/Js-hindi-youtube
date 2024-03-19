
/* 
data types memory में store होने और memory से कॉल करने के base पर officaily दो प्रकार के होते है  
 1. Primetive -
            there are 7 types:
            i) String
            ii) Boolean
            iii) number
            iv) bigInt
            v) null
            vi) undefined
            vii) Symbol
 2. Reference or Non-primetive 
            i) Array
            ii) Objects
            iii) Function
*/



// ************************************* Primative ***************************

//null value
const nullValue = null;

// undefined
// const name;  // this is invalid because const never be undefined
let name;   
let Name = undefined 

//bigInt 
const bigInt = 9999999999999999999999999999999999999n


// Boolean 
const isLoggedIn = true

// String
const Str = "Mohit"

// number
const num = 67


// Symbol 
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)   // it return false


// ********************************  Non-Primative ******************


// Object defined and its Data Type
const myObject = {
    name: "Mohit",
    age: 21
}


// Function defined and its Data Type
const myFunction = function(){
    console.log("I am a function and my data Type is Object Funtion");
}


// Array defined and its DT(DataType)
const Heros = [ "Akshay", "Ritik", "Ajay"]


console.log("Data Type of Funciton: " + typeof myFunction); 
console.log("Data Type of Object: " + typeof myObject); 
console.log("Data Type of null: " + typeof nullValue); 
console.log("Data Type of Symbol: " + typeof id); 
console.log("Data Type of Undefined: " + typeof Name); 
console.log("Data Type of bigInt: " + typeof bigInt); 
console.log("Data Type of Boolean: " + typeof isLoggedIn); 
console.log("Data Type of String: " + typeof Str); 
console.log("Data Type of Number: " + typeof num); 
console.log("Data Type of Array: " + typeof Heros); 