const sumAll = function(num1, num2) {
    
    return Array.from({length: Math.abs(num2 - num1) + 1}, (_, i) => Math.min(num1, num2) + i)
                .reduce((acc, curr) => acc + curr, 0);

};

// Do not edit below this line
module.exports = sumAll;
