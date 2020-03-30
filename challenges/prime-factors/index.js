function isPrimeNumber(number) {
    let result = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            result = false;
            break;
        }
    }

    return result;
}

module.exports = function toPrimeFactors(number) {
    const isPrimeNumberResult = isPrimeNumber(number);
    if (isPrimeNumberResult) {
        return [number];
    }

    let output = [];

    for (let i = 2; i < number; i++) {
        if (isPrimeNumber(i) && number % i === 0) {
            // do ... while   i
            // recursive: toPrimeFactors
            output.push(i);
        }
    }

    return output;
};
