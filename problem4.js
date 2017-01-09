/*
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

module.exports = function () {
    var result;
    var values = []

    for( var a =999; a >=100; a--) {
        for( var b = 999; b >= 100; b--) {
            result = String(a * b)
            if (result === result.split('').reverse().join('')) {
                values.push(result)
            }
        }
    }

    return Math.max.apply(null, values)
}
