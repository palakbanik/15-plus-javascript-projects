function fibonacci(num) {
    const covertNum = Math.floor(Number(num));

    let count = 0;

    for (let i = 1; i <= covertNum; i++) {
        count += i;
    }

    return count;
}

console.log(fibonacci(10));

let count = 0;

for (let i = 1; i <= 10; i++) {
    count += i;
}

console.log(count);
