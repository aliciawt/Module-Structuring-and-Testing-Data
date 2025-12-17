function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// 3 times

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// The value assigned to num when pad is called for the first time is the variable TotalHours
// totalHours = (totalMinutes - remainingMinutes) / 60
// totalMinutes = (seconds - remainingSeconds) / 60
// remainingMinutes = totalMinutes % 60
// remainingSeconds = seconds % 60 = 61 % 60 = 1
// totalMinutes = (61 - 1) / 60 = 1
// remainingMinutes = 1 % 60 = 1
// totalHours = (1 - 1) / 60 = 0
// So, the value assigned to num when pad is called for the first time is 0.

// c) What is the return value of pad is called for the first time?
// The return value of pad when it is called for the first time is "00".
// First, 0 is turned into string --> "0".
// Then, a pad of 0 is added at the start so the string length will be 2.
// Hence, the return value is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The value assigned to num when pad is called for the last time is the variable remainingSeconds.
// As calculated above, remainingSeconds = 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The return value of pad when it is called for the last time is "01".
// First, 1 is turned into string --> "1".
// Then, a pad of 0 is added at the start so the string length will be 2.
// Hence, the return value is "01".