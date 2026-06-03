// problem -> 1
console.log("Hello World");

// problem -> 2
function sum(a, b) {
    console.log(a + b);
}
sum(1, 2);

// problem -> 3
function areaOfRectangle(length, width) {
    if (length <= 0 || width <= 0) {
        throw new Error("length and width should be a positive number");
    }

    return length * width;
}
console.log(areaOfRectangle(10, 20));

// problem -> 4
// function oddOrEven(num) {
//     if (num === 0) {
//     } else if (num % 2 !== 0) {
//         return "odd";
//     } else {
//         return "even";
//     }
// }

function oddOrEven(num) {
    return num === 0 ? "zero" : num % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven(29492397));

// problem -> 5
function smallestNum(...numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) smallest = numbers[i];
    }
    return smallest;
}

console.log(smallestNum(50, 15, 80, 3, 25));

// problem -> 6
function reverseStr(str) {
    if (typeof str !== "string") throw new Error("Please provide a string");

    let reverseString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }

    return reverseString;
}
console.log(reverseStr("polok"));
console.log(reverseStr("software developer"));
// console.log(reverseStr(10));
console.log(reverseStr("palak Banik"));

function reverseStr2(str) {
    if (typeof str !== "string") throw new Error("Please provide a string");

    const splittedStr = str.split("");
    const reversedStr = splittedStr.reverse();

    return reversedStr.join("");
}

console.log(reverseStr2("polok"));
console.log(reverseStr2("hello world"));
// console.log(reverseStr2(10));
