/* 
Arrays

    => Arrays are resizble that means we can add any value and remove also.
    => The dataType of array is object it non-premative (Reference data Type)
    => 

*/


const myArr = [1, 3, 5, 7, 11, true, "Mohit"];
// console.log(myArr[4]);
// console.log(myArr[6]);


// Methoed of Arrays
myArr.push(6)                                               // #1 push(Element) used to add new element in last of array
console.log(myArr);

myArr.pop()
console.log(myArr);                                         // #2 pop(don't pass any element) used to delete the last value of array

myArr.unshift("Ram")
console.log(myArr);                                         // #3 unshift(element) used to add new element in starting of array.


myArr.shift()
console.log(myArr);                                         // #4 shift() used to remove the element in starting of array.

console.log(myArr.includes(7));                             // #5 include(element) used to cheak that the passed element is include in array or not.

console.log(myArr.indexOf('Mohit'));                        // #6 indexOf(element) use to find index of Element


console.log(myArr);
console.log(myArr.join());                                  // #7 join() use of convert data type of array from object to string  
console.log(typeof myArr.join());

// we can assign the same value to other array and use more methoed
// const newArr = myArr.join();                    // convert into string by join() methoed
// console.log(newArr);

// Defference b/w slice() and splice
console.log(`This is my original array:  ${myArr}`);
console.log(`slice Methoed : ${myArr.slice(1, 4)}`);            // #8 slice(starting index, ending index) use to print selected elements. it gives as a copy of element original array never change by it.
console.log(`after slice array: ${myArr}`);                


console.log(`splice Methoed: ${myArr.splice(1, 4)}`);
console.log(`after splice() array: ${myArr}`);                  // #9 splice() use to cut the selected part (sub array)




// ********************************************* Array Part 2 *************************************

const actors = new Array('Akshay Kumar', 'Amir Khan', 'Sunil Shetty' )
const actress = new Array('Shilpa shetty', 'anishka sharma', 'priyanka chopra')

// actors.push(actress)                                    // It include with dataType (complete array include in array) and conunt a single element.
// console.log(actors);        
// console.log(actors[3]);

// console.log(actors[3][1]);                              // it return 1st index element of 3rd index element in array.

// actors.concat(actress)                                  // #10 concat() use to add element 
// console.log(actors);

//  but  when we store a concat() array in new variable 

const allactors = actors.concat(actress)
console.log(allactors);
        // or  we can use following 

const all_actors = [...actors, ...actress]
console.log(all_actors);



const myArray = [1, 2, 4, 8, [3, 2, 23, [5, 4, 9, 50], 3, 2, [1,8]], 23, 12, 33, [45, 24, 90]]
console.log(myArray.flat(Infinity));                // #11 flat()

console.log(Array.isArray("Mohit"));                // #12 Array.isArray() use to check array

console.log(Array.from("Mohit"));                   // #13 Array.from() to convert into array

console.log(typeof Array.from("Mohit"));            // dataType is object  after using from

console.log(Array.from({name: "Mohit"}));           // it return empty array 

// to create array by data or variables

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));          // #14 Array.of() use to create array by given value 


