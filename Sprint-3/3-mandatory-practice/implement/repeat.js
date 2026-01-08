function repeat(str, count) {
    if (count < 0) return "Invalid input, count cannot be negative.";
    return str.repeat(count);
}

module.exports = repeat;