/*
 * The sum of the squares of the first ten natural numbers is,
 *
 * 12 + 22 + ... + 102 = 385
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)2 = 552 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function getArray(min, max) {
    var values = []
    for (var i = min; i <= max; i++) {
       values.push(i)
    }
    return values;
}

function getTheSquareOfSum(list) {
    var sum = list.reduce(function(a, b) { return a + b });
    return sum * sum
}

function getTheSumOfSquares(list) {
    return list.map(function(x) { return x*x }).reduce(function(a, b) { return a + b });
}

module.exports = function(min, max) {
    var list = getArray(min, max),
        squaraOfSum = getTheSquareOfSum(list)
        sumOfSquares = getTheSumOfSquares(list)

    return squaraOfSum - sumOfSquares;
}
