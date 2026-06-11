function isPrimeNum(num) {
    let output = true;

    for (let i = 2; i < num; i++) {
        console.log(`${num} * ${i} = ${num % i}`);
        // num % i === 0 ? (output = false) : true;
        if (num % i === 0) {
            output = false;
            break;
        }
    }

    return output;
}

console.log(isPrimeNum(5));
console.log(isPrimeNum(4));
