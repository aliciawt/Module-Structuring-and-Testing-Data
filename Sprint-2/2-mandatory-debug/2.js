// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The function will not run as intended because the parameter is not set
// Instead it always uses the variable num, so it will always only return that variable's last digit.

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// All outputs are "3", which is the last digit of the variable num, 103.
// Explain why the output is the way it is
// =============> write your explanation here
// It is because no parameter is set on the function and it instead always uses the variable num.
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(number) {
  return number.toString().slice(-1);
}


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
