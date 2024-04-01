// Immediately Invoked Function Expressions (IIFE)

// Simple function
 function DB(){
    console.log("DB is connected successfully.");
}
DB();

// IIFE function 
// in IIFE must use semicolam ; 

(function db(){
    console.log(`db is connected successfully`);
})();


// IIFE with arrow function

( () => {
    console.log(`connected`);
})();

