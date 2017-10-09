const dollarAmount = 8.07;
const piggyBank = {};

let breakItDown = number => {

let quarters = Math.floor(number / .25);
piggyBank.quarters = quarters;
let remaining = (number % .25);

let dimes = Math.floor(remaining / .10);
piggyBank.dimes = dimes;
 remaining = (remaining % .10);

let nickels = Math.floor(remaining / .05);
piggyBank.nickels = nickels;
 remaining = (remaining % .05);
 
let pennies = Math.floor(remaining / .01);
piggyBank.pennies = pennies;

return(piggyBank)
}