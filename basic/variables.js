const accountId = 1234567
let accountEmail = "anuj@gmail.com"
var accountPassword = "12345"
accountCity = "Alwar"

// accountId = 2 // not allowed because in const we cant change value.

accountEmail = "anuj2@gmail.com"
accountPassword = "21212121"
accountCity = "jaipur"

/*
prefred not to use var beuse it block scope or functional scope.
*/

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity])
