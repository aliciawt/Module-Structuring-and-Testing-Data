// Predict and explain first...

// =============> write your prediction here
// My prediction is that the second console log will not print what is intended because in the function, the last line is console.log
// Console.log will return nothing (undefined). Instead, the last line should've been return.
// Using return will make the second console log print the result of the function (instead of undefined).

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// Finally, correct the code to fix the problem

//  =============> write your new code here
function multiply(a,b) {
  return a*b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);