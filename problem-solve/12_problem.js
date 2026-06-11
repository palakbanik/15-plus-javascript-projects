function factorsOfNum(num) {
    const convertNum = Math.floor(Number(num));
    console.log(convertNum);
    if (isNaN(convertNum) || convertNum < 1) {
        throw new Error("enter positive number or up to 0");
    }
    const factors = [];

    for (let i = 1; i <= convertNum; i++) {
        if (convertNum % i === 0) factors.push(i);
    }

    return {
        count: factors.length,
        factors,
        message: `the factors of numbers ${convertNum} is ${factors.length}`,
    };
}

// console.log(factorsOfNum(14));
// console.log(factorsOfNum("14"));
// console.log(factorsOfNum("abc"));
console.log(factorsOfNum(10));
// console.log(factorsOfNum(-9));
console.log(factorsOfNum(10.3));
console.log(factorsOfNum(35));
