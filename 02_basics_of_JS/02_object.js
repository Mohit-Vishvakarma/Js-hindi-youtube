// Object

// => There are 2 way to create objects i) constorctor  ii) Literals 
// => singleton is not agsist in literals. 



// Object with Literals  

const mySym = Symbol("key1")
const jsUser = {
    name: "Mohit",
    "full name": "M. Vishvakarma",
    location: "Ujjain",
    email: "mohitvishvakram9@gmail.com",
    isLoggedIn: true,
    lastLoggedInDay: ["monday", "Firday"],
    [mySym] : "myKey1"                      // Symbol is always written in []
}

console.log(jsUser["email"]);           // This is the way to print key of object
console.log(jsUser[mySym]);             //it return myKey1
console.log(jsUser.mySym);              // it return undefined because this is not a key of object so you can not access by jsUser.mySym

// TO CHENGE THE VALUE OF KEY OF A OBJECT

jsUser.email = "mv@gmail.com"
console.log(jsUser['email']);

jsUser["full name"]  = "M V"
console.log(jsUser["full name"]);


// Object.freeze(name of object) to use lock any object after use it we can't do changes in object or her keys  

console.log(jsUser);
// Object.freeze(jsUser)

jsUser["location"] = "Indore"           // There is no change because object is freezed
console.log(jsUser);        



// function use in object  (first we comment the freeze function because we menupulet jsUser)

jsUser.greeting = function(){
    console.log("Hello Coders");
}


console.log(jsUser.greeting);           // jsUser.greeting return the reffernce of function 
console.log(jsUser.greeting());         // jsUser.greeting() execute the function


// this function in js 

jsUser.greetingTwo = function(){
    console.log(`Hello Coders, ${this.name}`);  // this is used to definde the object 
    // this yah batata hai ki  kis object se key access karna hai 
    // yaha this bata raha hai ki jsUser ki key name ko access karna hai
}

console.log(jsUser.greetingTwo());







