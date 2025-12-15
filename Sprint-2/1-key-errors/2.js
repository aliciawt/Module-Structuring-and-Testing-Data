
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// There will be an error because the name of the input variable is not defined and we are just putting a number which will throw 'unexpected number' error.
// and likewise, the variable num is undefined.

//function square(3) {
//    return num * num;
//}

// =============> write the error message here
// Uncaught SyntaxError: Unexpected number

// =============> explain this error message here
// This error happens when numeral is improperly positioned/used
// In this case, when declaring a function we should always first declare what is the name of the input parameter
// (instead of immediately inserting the parameter).

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}