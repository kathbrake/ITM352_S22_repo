var dollarvalue = 1.75;
var amount = dollarvalue*100;


//quarters
var numofquarters = parseInt(amount/25);
var quartersremaining = amount%25;

//dimes
var numofdimes = parseInt(quartersremaining/10);
var dimesremaining = quartersremaining%10;

//nickels
var numofnickels = parseInt(dimesremaining/5)
var nickelsremaining = dimesremaining%5;

//pennies
var numofpennies = nickelsremaining;

console.log(`We need ${numofquarters} quarters, ${numofdimes} dimes, ${numofnickels}nickels and ${numofpennies} pennies to make $${dollarvalue}`)