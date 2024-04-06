// => forEach doesn't return any value
// => filtter return value


// _________________________ forEach loop ________________________

const value = [11, 13, 15, 17, 19, 21]
const newValue = value.forEach( (items) => console.log(items))

console.log(newValue);          // forEach loop variable me store nahi hota hai jiski kami filtter puri karta hai    

// _________________________ filtter ______________

//#1
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = num.filter((num) => num > 4);
                // or 
const newNum = num.filter( function(num) {
            return num > 4;                   // return keyword is required when we us carliBracates {} 
})

console.log(newNum);

//#2 second way
const myNum = [12, 13, 12, 2, 1, 132, 134, 125, 342]

const My_num= []
myNum.forEach( (items) => {
    if(items > 4){
    My_num.push(items);
    }
} )
console.log(My_num);


