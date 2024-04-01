// => this keyword is use in object not function
// => this is not use in arrow function
// => window is a bigest global object


const user = {
    username: "Mohit",
    price: 345,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`); 
        // this key word is access current scope.
        console.log(this);
        // here this keyword print the current scope value
    } 
    
}

console.log(this);
// here this keyword return empty object {} but in console it return window.

// console.log(user);

// user.welcomeMessage()


function chai(){
    console.log(this);
}

// chai();

// _______________________________________________________________
// Arrow Function 


// Function 1 Print hellow world

const hello = () => {
    console.log("hellow world");
}
hello()



// Function 2 addTwo number 

const addTwo = (num1, num2) => {
console.log(num1 + num2);
}

addTwo(2, 5)


// Function 3 implicit return 

const addNum = (value1, value2) => (console.log(value1 +value2));
// if we use carly bracats {} we use return keyword but in small bracat no requirment to use return keyword.

addNum(34, 78)


// Function 4 pass object in arrow function 

// const addT = (num1, num2) => {username: "Mohit"}

// console.log(addT()); // it return undefind because it is in carly bracat. 


const addT = (num1, num2) => ({username: "Mohit"})  // this is write way

console.log(addT()); 