let score = null
console.log(typeof score)
         //or
console.log(typeof (score))   
let variableToNumber = Number(score)     
console.log(typeof variableToNumber)
console.log(variableToNumber)

// "33" => 33
// "33abc" => NaN (not a number) but type is number
// null => 0
// undefined => NaN
// true => 1 , false => 0

let isLoggedIn = 33
let variableToBoolean = Boolean(isLoggedIn)
console.log(typeof variableToBoolean)
console.log(variableToBoolean)

// 1 => True typeof(Boolean)
// 0 => False typeof(Boolean)
// ""(empty) => False typeof(Boolean)
// "Anuj" => True typeof(Boolean)
// null => False typeof(Boolean)
// undefined => False typeof(Boolean)
// 33 => True typeof(Boolean)

let string = false
let variableToString = String(string)
console.log(typeof variableToString)
console.log(variableToString)

// "Anuj" => Anuj typeof(String)
// "" => Blank typeof(String)
// 33 => 33 typeof(String)
// null => null typeof(String)
// undefined => undefined typeof(String)
// true => true typeof(String) , false => false typeof(String)