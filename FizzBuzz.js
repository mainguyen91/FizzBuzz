/* BSSA WDIJS11 > Assignments > FizzBuzz
Due Monday 29/04/2019// Submitted by Mai Nguyen 

Write a program that prints the numbers from 1 to 100.
But for multiples of 3 print Fizz instead of the number and for the multiples of 5 print Buzz. 
For numbers which are multiples of both 3 and 5 print FizzBuzz.
Your output should look like the following:
1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz … 100
Once complete, submit a Github repository which holds your file with the solution.*/

for (let x = 1; x <= 100; x++) {
    if (x%3===0 && x%5===0) {
        console.log('FizzBuzz');
      } else if (x % 3 === 0) {
        console.log('Fizz');
        } else if (x % 5 === 0) {
          console.log('Buzz');
      } else {
      console.log(x);
      }
}


