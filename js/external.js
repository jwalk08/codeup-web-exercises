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
        let FacebookHourlyRate = (userIunput);

                      let googlePay = GoogleHourlyRate * 10;
                      let amazonPay = AmazonHourlyRate * 6;
                      let facebookPay= FacebookHourlyRate * 4;

                      let totalPay = googlePay + amazonPay + facebookPay;
                      totalPay = totalPay.toLocaleString("en-US", { style: "currency", currency: "USD"});
                      console.log(`The total pay is: ${totalPay}`);

      alert(totalPay)

                let movie1 = "The little mermaid";
                let movie2 = "Brother Bear";
                let movie3 = "Hercules";

                movie1 = 3;
                movie2 = 5;
                movie3 = 1;

                let totalCost= (movie1 + movie2 + movie3) * 3;
                console.log(`The total cost is: ${totalCost}`);
                totalCost.toString()




