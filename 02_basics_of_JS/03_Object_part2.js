

// const tinderUser = new Object();        // singleton object (it is used in constructor)

// const tinderUser = {}                   // non- singleotn object (it is used in literals)

// there is no difference b/w both objects.

//Add the keys of object

const tinderUser = {}

console.log(tinderUser);

tinderUser.id = "123ans"
tinderUser.name = 'rahul'

console.log(tinderUser);

// _____________________________________________________--



// # NESTING OF OBJECTS

const regularUser = {
    email : "mohit@gmail.com",

    // nesting of object

    fullName: {
        userName: {
            firstName: "mohit",
            lastName : "Sharma"
        }
    }
}

console.log(regularUser.fullName.userName.firstName);

// ____________________________________________________________-

// #  conbine the objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)                  //# Object.assign() use to combine object

console.log(obj3);   

                                // Second way to combine

const obj3Two = {...obj1, ...obj2}
console.log(obj3Two);

// ____________________________________________________________________

const User = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
    {
        id: 4,
        email: "user5@gmail.com"
    },
]

// we can access by follow the following way-
console.log(User[1].email); 


// _________________________________________________________________---

console.log("some other methoeds");

console.log(Object.keys(tinderUser));               // Object.keys(name of object) use to create array of the keys of object.

console.log(Object.values(tinderUser));             // Object.values(name of object) use to create array of the values of object.

console.log(Object.entries(tinderUser));            // Object.entries(name of object) use to create many array in the form of [key: value], [key2: value2] etc 

console.log(tinderUser.hasOwnProperty("name"));   // (objectName).hasOwnProperty('name of property') use to cheak, is property exsit in object or not?

