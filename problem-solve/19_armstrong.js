function armstrong(num) {
    if (!num || typeof num !== "number" || num < 1)
        throw "please enter position number";

    const inputNum = num.toString();
    const power = num.toString().length;

    const arrOutput = [];

    let armstrongSum = 0;

    for (let i = 0; i < inputNum.length; i++)
        arrOutput.push(Number(inputNum[i]) ** power);

    for (const item of arrOutput) armstrongSum += item;

    return armstrongSum === Number(num) ? true : false;
}

console.log(armstrong(153));
console.log(armstrong(370));

const allArmstrong = Array.from({ length: 999 }, (_, i) => i + 1).filter(
    (num) => armstrong(num),
);

console.log(allArmstrong);
