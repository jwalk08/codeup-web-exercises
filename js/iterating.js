


//
// const fruits =["orange", "strawberry","kiwi","tomato","banana"];
//
// const firstFruit = fruits[0];
// const nmrOfFruits = fruits.length;
//
//
// for (let i = 0; i < fruits.length; i++){
//     const fruit = fruits(i);
//
//     if (fruit.includes("berry")) {
//     console.log(fruit);




    (function(){
        "use strict";

        /**
         * TODO:
         * Create an array of 4 people's names and store it in a variable called
         * 'names'.
         */
        const names =["John", "Jake","Jana","Janice","Jim"];
        console.log(names)

        /**
         * TODO:
         * Create a log statement that will log the number of elements in the names
         * array.
         */
console.log(names.length)
        /**
         * TODO:
         * Create log statements that will print each of the names individually by
         * accessing each element's index.
         */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3])


        /**
         * TODO:
         * Write some code that uses a for loop to log every item in the names
         * array.
         */
                for (let element of names) {
                    console.log(element)
                }
        /**
         * TODO:
         * Refactor your above code to use a `forEach` loop
         */
names.forEach(name => console.log(`My name is: ${name}`))

        /**
         * TODO:
         * Create the following three functions, each will accept an array and
         * return an an element from it
         * - first: returns the first item in the array
         * - second: returns the second item in the array
         * - last: returns the last item in the array
         *
         * Example:
         *  > first([1, 2, 3, 4, 5]) // returns 1
         *  > second([1, 2, 3, 4, 5]) // returns 2
         *  > last([1, 2, 3, 4, 5]) // return 5
         */
const increment = (input) => {
    input =parseFloat(input);
            if (isNaN(input)) {
                return false;
            }
            return input +1;

}


        const decrement = (input) => {
            input =parseFloat(input);
            if (isNaN(input)) {
                return false;
            }
            return input -1;

        }



const getHighestNumber = (num1,num2,num3) => {
    const highestNum = Math.max(num1,num2,num3)



}
const parseNumber = (input) => {
    input = parseFloat(input);
    if(isNaN())

}


const add = (num1,num2) => {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (isNaN(num1)) || isNaN(num2)
    return num1 +num2;


}











    })();
