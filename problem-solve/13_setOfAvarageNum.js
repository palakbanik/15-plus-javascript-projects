function setOfAvgNum(arr) {
    let count = 0;

    for (const num of arr) count += num;

    return count / arr.length;
}
console.log(setOfAvgNum([1, 2, 4]));
console.log(setOfAvgNum([1, 2, 7, 14]));
console.log(setOfAvgNum([1, 5, 7, 35]));
