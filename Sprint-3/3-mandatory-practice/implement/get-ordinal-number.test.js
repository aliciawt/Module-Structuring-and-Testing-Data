const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 11, 12, 13
// When the number is 11, 12, 13
// Then the function should return "11th", "12th", "13th"

test("should return '-th' for 11, 12, 13", () => {
    expect(getOrdinalNumber("11")).toEqual("11th");
    });

// Case 2: Identify the ordinal number numbers ending in 1
// When the number is 1, 21, 31, etc.
// Then the function should return "1st", "21st", "31st"

test("should return '-st' for numbers ending in 1", () => {
    expect(getOrdinalNumber("1")).toEqual("1st");
    });

// Case 3: Identify the ordinal number numbers ending in 2
// When the number is 2, 22, 32, etc.
// Then the function should return "2nd", "22nd", "32nd"

test("should return '-nd' for numbers ending in 2", () => {
    expect(getOrdinalNumber("2")).toEqual("2nd");
    });

// Case 4: Identify the ordinal number numbers ending in 3
// When the number is 3, 23, 33, etc.
// Then the function should return "3rd", "23rd", "33rd"

test("should return '-rd' for numbers ending in 3", () => {
    expect(getOrdinalNumber("3")).toEqual("3rd");
    });

// Case 5: Identify the ordinal number for other numbers not ending in 1, 2, 3
// When the number does not end in 1, 2, 3
// Then the function should return "num+th"

test("should return '-th' for 11, 12, 13", () => {
    expect(getOrdinalNumber("15")).toEqual("15th");
    });