function showMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++ ){
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

showMultiplicationTable(7);

//
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
for (let i = 0; i < 10; i++) {
    // Generate a random number between 20 and 200
    const randomNumber = Math.floor(Math.random() * 181) + 20;

    // Check if the number is even or odd
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    } else {
        console.log(randomNumber + ' is odd');
    }
}

for (let i = 1; i <= 9; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}


const countDownBy5 =(num) => {
    for(let i =num; i > 0;
    i -= 5){
        console.log(i);
    }
}
countDownBy5(100)



    






















