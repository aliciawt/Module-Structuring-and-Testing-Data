const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variables declared: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There is just one function call: console.log().

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % is the modulus/remainder operator, meaning how much is the remainder after a division is performed on a number.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// You remove the leftover seconds, then divide by 60 to turn total seconds into full minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result is the movie length in hour, minute, and seconds, instead of just in seconds. I would suggest the name movieRunTime for this variable.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, it works for all movie lengths, since it always accounts for the remainder. However, the formatting is not ideal, for example if I put 64 (seconds) as the movieLength, ideally it would be 00:01:04 but it logs 0:1:4.
// Which is not wrong, just not good formatting. We can use padStart() to fix it.

const hh = String(totalHours).padStart(2, "0");
const mm = String(remainingMinutes).padStart(2, "0");
const ss = String(remainingSeconds).padStart(2, "0");

const movieRunTime = `${hh}:${mm}:${ss}`;
console.log(movieRunTime);