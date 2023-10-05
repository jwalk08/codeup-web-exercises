console.log("Hello from external JavaScript.")

alert("Welcome to my Website!");


 let userInput = prompt("What is your favorite color?");
 console.log(`The user entered: ${userInput}`);
 alert(`Great, ${userInput } I like that color too.`);



        userInput = prompt("What is you Google hourly rate?");
        let GoogleHourlyRate =(userInput);
       userInput = prompt("What is your Amazon hourly rate?");
      let AmazonHourlyRate = (userInput);
      userInput = prompt("What is your Facebook hourly rate?")
      let FacebookHourlyRate = (userInput);

      let googlePay = GoogleHourlyRate * 10;
      let amazonPay = AmazonHourlyRate * 6;
      let facebookPay= FacebookHourlyRate * 4;

      let totalPay = googlePay + amazonPay + facebookPay;
      totalPay = totalPay.toLocaleString("en-US", { style: "currency", currency: "USD"});
      console.log(`The total pay is: ${totalPay}`);

      alert(totalPay)




