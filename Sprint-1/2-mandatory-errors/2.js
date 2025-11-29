// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

// It is not working because the variable cityOfBirth is set after console.log() command, so the template literal in the console.log() cannot recall the variable cityOfBirth since it does not exist yet.

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// And now it should work! :D