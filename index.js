// FUNCTION IMPLEMENTATION
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  return toN + sum(fromN, toN - 1);
}

// EXPORT FILE
module.exports = sum;
