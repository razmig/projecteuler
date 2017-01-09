/*
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

 module.exports = function(min, max) {
    var target;
    var i = 1;
    while (i) {
        var values = []
        for (var v = min; v <= max; v++) {
            var bool = (i%v === 0);
            if(!bool) { break }

            values.push(bool);
        }

        if (values.length === max) {
            target = i;
            break;
        }
        i++
    }
    return target;
}
