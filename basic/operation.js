 let value = 3
 let negValue = -value
 console.log(negValue) // very easy to guess output

console.log(1+2) // Addition
console.log(1-2) // Substraction
console.log(1*2) // Multiplication
console.log(1**3) // Power
console.log(1/2) // Devide
console.log(1%2) // Remender

 let str1 = "Hello"
 let str2 = " Anuj"
 let str3 = str1 + str2
 console.log(str3) // addition of two strings normaly

// Prefered not to do create confution while reading code
 console.log("1" + 2) // because of rule first value type of will be of next one like in this first one is string  so 2 is also string output will be 12
 console.log(1 + "2") // in this 1 is not string but 2 is string output will be 12
 console.log("1" + 2 + 2) // same rule like first one here firste value typeof is string so it will take next values also as string output will be 122
 console.log(1 + 2 + "2") // here 1 + 2 is mot string so it will be added amd last 2 is string so it will come as it is in last or first solution output wll be 32
 console,log(1 + 2 * 3 % 4) // X dont make code like this this is very confusing 
 console.log(((1 + 2) * 3) % 4) // This one is better  less confusing any one can read this code easily

// Not good to write you are making confusion
 console.log(true) // output will be true as usualy
 console.log(+true) // output will be 1 
 console.log(true+) // output will not come it will show error
 console.log(+"") // output will be 0

 let gameCounter = 100
 gameCounter++
 console.log(gameCounter) // output will be 101 (100 + 1) 

// Prefered not to do create confution while reading code we can make this more simple 
 let num1, num2, num3
 num1 = num2 = num3 = 2 + 2 
 console.log(num1)
 console.log(num2)
 console.log(num3) 

//  links for study purposes

//  1. https://tc39.es/ecma262/#sec-type-conversion
//  2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

/* 
JavaScript mein ++ (increment operator) ka simple matlab hota hai kisi value ko 1 se badhana.
Yeh do types ke data par kaam karta hai: normal Number aur BigInt.Yeh operator operand ko pehle numeric value mein convert karta hai—agar value BigInt hai toh usme 1n jodta hai, baaki sabhi cases mein normal 1 jodta hai.
Prefix (++x) vs Postfix (x++) ka DifferencePostfix (x++): Pehle purani value return karta hai, fir variable ki value ko 1 badhata hai.Prefix (++x): Pehle value ko 1 badhata hai, fir nayi updated value return karta hai.
Code  Return kya hota hai?
Variable ki nayi value let y = x++ Purani value Value 1 se badh jaati hai let y = ++x Nayi value Value 1 se badh jaati hai 
*/