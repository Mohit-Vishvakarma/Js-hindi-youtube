// => empty () of a function return undefind value in console. 
// => function is always star with lowe case
// => return is end of function.


// ********** FUNCTION 1 SUM()
function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(2, 5));

// ************ FUNCTION 2 UNDEFIND INPUT OR PARAMETER 

function ShopingCard(...value){
    // ... it is a way to take indefind value. if we take more variable like value1, value2 etc after ...value so always staring values is store in this variables.
return value;
}

console.log(ShopingCard(200, 300, 499, 132)); 


// ****************** FUNCITON 3 DEFAULT VALUE OR INPUT VALUE PRING WITH MESSAGE

function loginUserMessage(username = "user"){
            // if user enter her name than print message with her name else print by defult with user.
    console.log(`${username} you are login successfully.`);
}

console.log(loginUserMessage());

                            // 0r Use conditonal 

function loginUserMessage2(username2){
    if(username2 === undefined){
        console.log("Please enter valid name");
        return;
    }

    console.log(`${username2} you are login successfully.`);
    return ;
}

console.log(loginUserMessage2("Mohit"));



// _____________________________________________________________________________________________________________

// FUNCTION 4 ACCESS THE VALUE FROM OBJECT

const user = {
    username : "Mohit",
    id: 900996
}

function userInfo(anyObject){
    console.log(`user name is ${anyObject.username} and id is ${anyObject.id}.`);
    return 0;
}

userInfo(user); // here first we created a object which is user and than pass as a parameter.



                    // or we can directly pass object 

function userInfo2(anyObject){
    console.log(`user name is ${anyObject.username} and id is ${anyObject.id}.`);
    return 0;
}

userInfo2({
    username: "Rahul",
    id : 898789
})




// FUNCTION 5 ARRAY WITH FUNCTION 

const myArray = [200, 300, 400, 453]

function getValueOfArray(anyArray){
    console.log(`the first value of array is ${anyArray[2]}`);
    // we pass the array with her index
}

getValueOfArray(myArray)


                // or we can pass directly 
getValueOfArray([200, 123, 124, 786, 987])