/*
 *A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.

 * There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.
 */

module.exports = function() {
    for(var a = 1; a < 1000; a++) {
        for(var b = 1; b < 1000; b++) {
            var c = Math.sqrt((a*a) + (b *b))
            if( a + b + c === 1000) {
                return a * b * c
            }
        }
    }
}
