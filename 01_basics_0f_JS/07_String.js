/*
String defined karne ki teqnics
=> always use back-tik(``) to print string
=> when we use `new String("")` that means its dataType is always be Object. it sure this is String.
=> when we defined the string in the form of object. String follow all the properties of objects.
=> every string property create a new string that means all the changes will not be on original string. because it follow stack memory. 
*/
// _____________________________________________________________





// #1 First way to Difined strings
const name = "Mohit"
const job = "Web Devloper"

// #2 Second way to Defined strings
const iAm = new String("Mohit");
const myJob = new String(" Web Devloper");

// #1 way to print string
console.log("my name is " + name + " my job is " + job);
console.log(typeof name); // dataType is String  


//#2 way to print string
console.log(`My name is ${iAm} and My job is ${myJob}`)

// we can use mathoed in variable
console.log(`My job length is ${job.length}`)

console.log(typeof iAm); // dataType is object 




// _______________________________________________

// Sting with object properties
const companyName = new String(" Mohit Info ")
console.log(companyName);                           // #1 pirnt in the form of object

console.log(companyName.length);                    // #2 length property, find length of String (or Object)

console.log(companyName.indexOf("M"));              // #3 indexOf property, find index of given charactor

console.log(companyName.charAt(4));                 // #4 charAt property, find the charactor of given index

console.log(companyName.lastIndexOf("o"));          // #5 lastIndexOf property, find the last index value of given charactor

console.log(companyName[3]);                        // #6 to access the charactor of index 3

console.log(companyName.replace("Mohit", "Rahul")); // #7 replace() use to replace the char or string

console.log(companyName.includes("Mohit"));         // #8 To cheak the value in string if the value is include return true another false

console.log(companyName.endsWith("o"));             // #9 endWith() it cheaks that string end with the given value or not

console.log(companyName.slice(2, 4));               // #10 slice(Strat index, end index + 1) it is used to print string according to given index

console.log(companyName.slice(5));                  // #11 slice(starting index) it is start the give index and go to the end 

console.log(companyName.slice(-4));                 // #12 start revers index

console.log(companyName.startsWith("o"));           // #13 startsWith() it cheaks string that start with the given value or not

console.log(companyName.repeat(3));                 // #14 repeat(number) it is used to repeat the string

console.log(companyName.search("m"));               // #15 to search value

console.log(companyName.toUpperCase());             // #16 string change into upper case 

console.log(companyName.toLowerCase());             // #17 Stirng change into lower case

console.log(companyName.trim());                    // #18 to remove the extra space of starting and ending in string

console.log(companyName.substring(0, 5));           // #19 to create a substring

console.log(companyName.split(" "));                // #20 split() is used to create array with the basc of " " or "-" etc

