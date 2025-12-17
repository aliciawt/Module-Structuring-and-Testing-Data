// Predict and explain first...
//  =============> write your prediction here
// The function will not work because the variable str is the input to the function.
// Hence, this will throw an error that says that the variable str is already declared.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The error message is 'Uncaught SyntaxError: Identifier 'str' has already been declared.'
// Like what I have explained about, the variable str is the input for the function, so it cannot be declared again with let.
// You need to make a new variable with a new name in order for the function to work.

// =============> write your new code here
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}