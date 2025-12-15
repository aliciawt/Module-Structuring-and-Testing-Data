// Predict and explain first...
//  =============> write your prediction here
// Return will return nothing since no value is assigned to it.
// The line a + b never runs because a function ends with 'return'.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The console log will print 'undefined' on the call function.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);