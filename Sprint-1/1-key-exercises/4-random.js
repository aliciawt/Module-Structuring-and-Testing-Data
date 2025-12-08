const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.floor() rounds down any number to an integer.
// Math.random() returns a number (floating point) between 0 (inclusive) and 1 (exclusive), so basically from 0 - 0.999999999999...
// So, num will do the operation inside the parentheses first, which is Math.random() * (maximum - minimum + 1)
// maximum - minimum + 1 is in another parentheses so we do that first. That operation is 100 - 1 + 1 so it evaluates to 100
// So then the operation inside the parentheses is Math.random() * 100. If we put any number from 0 - 0.999999999, let's say put 0.678 then it evaluates to 67.8
// Next, Math.floor() takes effect so it will be Math.floor(67.8) which evaluates to 67
// Next, we add minimum to that result, means 67 + 1. So, num evaluates to 68.
// So, num represents an integer between 1-100 (range between minimum and maximum).