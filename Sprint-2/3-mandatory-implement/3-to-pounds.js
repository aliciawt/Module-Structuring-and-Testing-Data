// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
    // remove the "p"
    const penceStringWithoutP = penceString.replace("p", "");

    // separate pounds and pence
    let pence = penceStringWithoutP.slice(-2).padStart(2, "0");
    let pounds = penceStringWithoutP.slice(0, -2).padStart(1, "0");

    // convert to number and format with commas
    pounds = Number(pounds).toLocaleString('en-GB'); 

    return `£${pounds}.${pence}`;
}

// examples
console.log(toPounds("5p"));        // £0.05
console.log(toPounds("99p"));       // £0.99
console.log(toPounds("1234p"));     // £12.34
console.log(toPounds("1234567p"));  // £12,345.67