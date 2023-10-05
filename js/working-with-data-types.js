console.log("awake");
let a = 1;
console.log(a)
let b = a++;
console.log(b)
let c = ++a;
console.log(c)

let d = "hello";
let e = false;
let incrementD = d++;
let incrementE = e++;
d++;
e++;
console.log(incrementD);
console.log(incrementE);


//let price = "2.7";
//price.toFixed(2);
//console.log(price)


//let perplexed; // perplexed is undefined (no value is assigned)
//perplexed + 2;
//console.log(perplexed);

let price = 2.7;
price = price.toFixed(2);
console.log(price);
  //USE ISNAAN FUNCTION;
console.log(isNaN(0));
console.log(isNaN(1))       // false (1 is a valid number)
console.log(isNaN(""))      // false (an empty string is treated as 0, which is a valid number)
console.log(isNaN("string"))   // true  ("string" is not a valid number)
console.log(isNaN("0"))         // false ("0" is treated as 0, which is a valid number)
console.log(isNaN("1"))         // false ("1" is treated as 1, which is a valid number)
console.log(isNaN("3.145"))        // false ("3.145" is treated as 3.145, which is a valid number)
console.log(isNaN(Number.MAX_VALUE))
console.log(isNaN(Infinity))
console.log(isNaN("true"))
// true  ("true" is not a valid number)
console.log(isNaN(true))
// false (true is treated as 1, which is a valid number)
console.log(isNaN("false"))

// true  ("false" is not a valid number)
console.log(isNaN(false))      // false (false is treated as 0, which is a valid number)


// // STRING METHODS
// let username = "Justino (Nova)";
// let guildName;
//
// // get the length of the string
// let nameLength = username.length;
// console.log("nameLength => ", nameLength);
// // find the index of the "(" character
// let guildNameStart = username.indexOf("(");
// console.log("guildNameStart => ", guildNameStart);
// // get the index before the closing ")"
// let guildNameEnd = nameLength - 1;
// guildName = username.substring(guildNameStart + 1, guildNameEnd);
// console.log("guildName => ", guildName);
// // we want to remove the guild name from the username now
// let guildNameWithParenthesis = "(" + guildName + ")";
// username = username.replace(guildNameWithParenthesis, "");
// username = username.trim();
// console.log("username => ", username);

console.log(!true);      // false
console.log(!false);     // true
console.log(!!true);     // true
console.log(!!false);    // false
console.log(!!0);        // false
console.log(!!-0);       // false
console.log(!!1);        // true
console.log(!!-1);       // true
console.log(!!0.1);      // true
console.log(!!"hello");  // true
console.log(!true);      // false
console.log(!false);     // true
console.log(!!true);     // true
console.log(!!false);    // false
console.log(!!0);        // false
console.log(!!-0);       // false
console.log(!!1);        // true
console.log(!!-1);       // true
console.log(!!0.1);      // true
console.log(!!"hello");  // true
console.log(!!'');       // false
console.log(!!"false");  // true
console.log(!!"0");      // true




let sample = "Hello Codeup Class";
let sampleLength = sample.length; // variable decide length
console.log(sample.toUpperCase()); //ALPHABET
let sampleStart = sample.indexOf("Codeup"); //locate Codeup in code
let codeupLength = "codeup".length; //find the number length of codeup
let sampleEnd = sampleStart + codeupLength;
let codeupWord = sample.substring(sampleStart, sampleEnd);
console.log("codeup word is:" + codeupWord);





let movie1 = "The little mermaid";
let movie2 = "Brother Bear";
let movie3 = "Hercules";

movie1 = 3;
movie2 = 5;
movie3 = 1;

let totalCost= (movie1 + movie2 + movie3) * 3;
console.log(`The total cost is: ${totalCost}`);
totalCost.toString()



let GoogleHourlyRate = 400;
let AmazonHourlyRate = 380;
let FacebookHourlyRate = 350;

let googlePay =     GoogleHourlyRate * 10;
let amazonPay = AmazonHourlyRate * 6;
let facebookPay = FacebookHourlyRate * 4;

let totalPay = googlePay + amazonPay + facebookPay;
totalPay = totalPay.toLocaleString("en-US", { style: "currency", currency: "USD"});
console.log(`The total pay is: ${totalPay}`);

console.log("1" +  2);
let test = "Hello Duck"
console.log(test);

let username = 'codeup';
let password = 'notastrongpassword';

// Check conditions and store results in boolean variables
let isPasswordValid = password.length >= 5;  // Password must be at least 5 characters
let doesNotIncludeUsername = !password.includes(username); // Password must not include the username
let isUsernameValid = username.trim().length <= 20; // Username must be no more than 20 characters
let noWhitespaceAtStartOrEnd = !username.startsWith(' ') && !username.endsWith(' ') && !password.startsWith(' ') && !password.endsWith(' ');

// Display the results
console.log("Password is valid:", isPasswordValid);
console.log("Password does not include username:", doesNotIncludeUsername);
console.log("Username is valid:", isUsernameValid);
console.log("No whitespace at start or end:", noWhitespaceAtStartOrEnd);










