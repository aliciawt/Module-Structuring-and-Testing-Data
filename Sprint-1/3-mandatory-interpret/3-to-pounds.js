const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
// penceString.length returns the length of "399p" which is 4
// Hence, penceString.substring(0, 3) will return "399", which is assigned to the variable penceStringWithoutTrailingP.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0")
// padStart() controls the string length and puts "padding" at the start of the string if the characters do not fulfill the target length.
// The syntax for padStart() is str.padStart(targetLength, padString)
// So, padStart(3, "0") means that the string length should always be 3 and if it is not, to pad it with 0 at the start of the string.
// For example, if a function returns the string "2", padStart(3, "0") will return it as "002".
// In this case, penceStringWithoutTrailingP = "399", which already has a length of 3.
// Thus, "399" is assigned to the variable paddedPenceNumberString.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2)
// paddedPenceNumberString.length returns the length of "399" which is 3.
// Hence, paddedPenceNumberString.substring(0, 1) will return "3", which is assigned to the variable pounds.
// Through this operation, the program removes the last two digits (the pence) to isolate the pounds.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0")
// paddedPenceNumberString.length returns the length of "399", which is 3.
// Hence, paddedPenceNumberString.substring(1) will return everything from that index (1) to the end of the string.
// It will return "99".
// padEnd() is the opposite of padStart(), in which it controls the string length and puts "padding" at the end of the string if the characters do not fulfill the target length.
// So, padEnd (2, "0") means that the string length should always be 2 and if it is not, to pad it with 0 at the end of the string.
// For example, if a function returns the string "2", padEnd(2, "0") will return it as "20".
// In this case, "99" already has a length of 2.
// Thus, "99" is assigned to the variable pence.
// Through this operation, the program keeps the last two digits to isolate the pence.

// 6. console.log(`£${pounds}.${pence}`)) then will log £3.99 to the terminal.

// Observation:
// This entire process only works correctly when the pence value contains exactly three digits before the trailing "p".
// If the input contains fewer or more digits (e.g. "9p" or "4499p"), the logic still runs but the interpretation changes, because the program always splits the last two digits as pence and the rest as pounds, rather than calculating based on actual pence value.