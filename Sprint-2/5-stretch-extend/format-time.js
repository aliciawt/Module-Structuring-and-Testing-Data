// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

//function formatAs12HourClock(time) {
//  const hours = Number(time.slice(0, 2));
//  if (hours > 12) {
//    return `${hours - 12}:00 pm`;
//  }
//  return `${time} am`;
//}

// Observation:
// the minutes are hardcoded for hours > 12
// incorrect midnight (00:00) it will return 00:00 am instead of 12:00 am
// incorrect noon (12:00) it will return 12:00 am instead of 12:00 pm
// no padding for single digit hours

// Fixing the function:
function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2)); // get hours as number
  const minutes = time.slice(2);        // keep the minutes string
  let suffix = "am";

  if (hours === 0) {
    hours = 12; // midnight
  } else if (hours === 12) {
    suffix = "pm"; // noon
  } else if (hours > 12) {
    hours -= 12;
    suffix = "pm";
  }

  // pad single-digit hours with leading zero
  const hoursStr = String(hours).padStart(2, "0");

  return `${hoursStr}${minutes} ${suffix}`;
}


const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);