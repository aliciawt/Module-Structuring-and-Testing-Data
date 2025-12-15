// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// It will throw an error because decimalNumber is the input for the function, but below we are trying to declare it again using const.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// This function would not run because the variable decimalNumber is declared twice.
// In order for it to work, another variable with a different name must be created.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage (decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}