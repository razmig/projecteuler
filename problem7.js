/*
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 *
 */

module.exports = function(target) {
    var isPrime = function(number) {
        if (number % 2 === 0) { return false; };
        for(var i =2; i < number; i++) {
            if(number % i === 0) {
                return false
            }
        }
        return true
    }

    var primes = [2]
    var i = 3;
    while(primes.length < target) {
        if (isPrime(i)) {
            primes.push(i)
        }
        i++
    }
    return primes[target-1];
}
