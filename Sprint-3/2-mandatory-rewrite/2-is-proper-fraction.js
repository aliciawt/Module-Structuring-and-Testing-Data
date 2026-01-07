function isProperFraction(numerator, denominator) {
  if (denominator === 0) return "Denominator cannot be zero";
  if (Math.abs(numerator) < Math.abs(denominator)) return true;
  return false;
}

module.exports = isProperFraction;