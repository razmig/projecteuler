/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

module.exports = function() {
    var max = 600851475143;
    var target = max;
    var values = [];
    var i = 0;

    while(i <= target) {
        if (target%i === 0) {
            var target = target/i;
            values.push(i);
        }
        i++
    }

    return Math.max.apply(null, values);
}
