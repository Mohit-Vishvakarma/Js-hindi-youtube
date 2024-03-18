const accountId = 370
let accountEmail = "mohit@gmail.com"  // let is a block scope variable use allows it
var accountPassword = "370A11" // don't use it becuse var is not block scope varible
accountCity = "ujjain"
let accountState;   // it return undefine value


// accountId = 371  this is invalide "const never change"

console.log(accountId);

// This is a methode to print more than one variables or value


accountEmail = "mv@gmail.com"
accountPassword = "3344"
accountCity = "Indore"


console.table([accountId, accountEmail, accountPassword, accountCity])
