const marks = new Number(100)       // now 100 is always number

console.log(marks);             
console.log(marks.toString());            // # toString() is used to create string
// now marks is convert into string 


console.log(marks.toString().length);       // we use more than one properties
// now marks is convert into string and length is the property of string which is used.


console.log(marks.toFixed(2));              // toFixed is used to fix the value after decimal
// now marks is 100.00 because we passed the value which is 2.


const salary = 455.234
console.log(salary.toPrecision(4));         // it return precision value


const bill = 1000000
console.log(bill.toLocaleString());           // use to , b/w zeros
console.log(bill.toLocaleString('en-IN'));          // indian pattern of amounts



