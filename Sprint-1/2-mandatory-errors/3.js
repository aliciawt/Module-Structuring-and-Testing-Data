const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Prediction: the code won't work because slice() is a string manipulation property and cardNumber type is not string, it's number
// Then run the code and see what error it gives.
// It gives Uncaught TypeError
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// I did not know specifically what type of error it will throw but I did predict it will throw an error.
// Uncaught TypeError means we used a value in the wrong way for its type.
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

const last4Digits = cardNumber.toString().slice(-4);