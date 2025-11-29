let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 4 function calls:
// Number(carPrice.replaceAll(",","")); with carPrice.replaceAll(",","") nested inside it --> total 2 function calls
// Number(priceAfterOneYear.replaceAll(",","")); with priceAfterOneYear.replaceAll(",","") nested inside it --> total 2 function calls

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line 5 because there is no comma after ",". Syntax for replaceAll() should be string.replaceAll(searchValue, replaceValue).

// c) Identify all the lines that are variable reassignment statements
// Variable reassignment statements are on lines 4 & 5 (reassigning value to carPrice and priceAfterOneYear variables)

// d) Identify all the lines that are variable declarations
// Variable declarations are on lines 1, 2 (declaring variables carPrice & priceAfterOneYear) and lines 7, 8 (declaring variables priceDifference & percentageChange)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// First, it is replacing all commas in the variable carPrice with nothing -- essentially deleting all commas. Then, it turns the string into a Number data type.
