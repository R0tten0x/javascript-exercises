const fibonacci = function(fibonaccin) {
  if (fibonaccin < 0) {
    throw new Error("Input must be a non-negative integer");
  }
  if (fibonaccin === 0) {
    return 0;
  }
  if (fibonaccin === 1) {
    return 1;
  }
  return fibonacci(fibonaccin - 1) + fibonacci(fibonaccin - 2);
};

// Do not edit below this line
module.exports = fibonacci;
