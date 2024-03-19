/* 
JavaScript में दो type की memory alocation होती है 
    1. Stack-
            => primative data type को Stack के form में memory alocate होती है | 
            => primative data type use stack.
            => variable की value change करने पर उसकी copy की value change होती है original value नहीं | (see #1)

    2. Heap-
            non-primative data type को Heap के form में memory alocate होती है | 
            non-primative data type use Heap. 

        See picture 06 Memory alocation
*/


// #1 stack memory alocation and value cheak
let myCompany = "Mohit Info Teach"  // This is the value of first variable which is fixed on memory (let it's memory address is 34876)

// concept 
let Company = myCompany;            // This is the value of second variable which is fixed in memory on another memory address like 8765 
Company = "MV Info"                 // here we changed the value of second variable So the prossess is : the second variable duplicate in memory (let the address is 7654) than change the value of second variable. but now we both places are filled (first: 8765 & second: 7654). 

console.log(myCompany); 
console.log(Company);

// #2 Heap memory alocation and value cheak

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "mv@gmail.com"

console.log("Email of userOne: ");
console.log(userOne.email);
console.log("Email of userTwo: " + userTwo);
console.log(userTwo.email);