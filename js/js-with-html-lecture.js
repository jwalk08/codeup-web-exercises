console.log("testing");

let myName = "Janice"
//defined myName;
console.log("myName");
//print  myName;

 //let x =1
  //  x =+ 2;
// console.log(x);


 let pi= 3.14;
 console.log(pi);
 let piString = pi.toString();
 console.log(piString);

 let nmrOfStudents = "19";
 nmrOfStudents = parseInt(nmrOfStudents);
 console.log(nmrOfStudents);
 typeof nmrOfStudents
console.log(nmrOfStudents);

 let x ="griffin";
 let xNumber =Number(x);//NaN's happen when running number operations
console.log(xNumber);
let isEqual = xNumber == NaN //cannot do it this way
console.log("NaN strict comparison =>", isEqual);
let isReallyEqual =isNaN(xNumber);
console.log("isNaN function =>", isReallyEqual);


//truthy/falsey
let  emptyString ="" == false;
console.log("emptyString =>", emptyString);
let zero = 0 == false;
console.log("zero => ", zero);
let noValue;
console.log(noValue);
let noData = null;

if (noData){
 console.log("Yup, it's truthy");
}

let middleName ="Sabina";
if (middleName) {
 console.log("Yup , it's truthy");
}else{
 console.log("NOPE, IT'S FALSY");

}

//let username = "Justin";
//let guildName;
//let namelength =username.length
//console.log("nameLength => ", namelength);
//let guildNameStart = username.indexOf("(");
//console.log("guildNameStart => " , guildNameStart);
//let guildNameEnd = nameLength - 1;
//guildName = username.substring( guildNameStart);

//TEMPLATE STRINGS
//let channelMessage = "username from the guildName guild has logged in.";
//channelMessage = username + "from the " +guildName + "guild has logged in.";

let i = 35;
console.log(i);








