let a = 5;
let b = 6;
let c;

if (typeof x === "number" && typeof y === "number") {
    c = b;
    b = a;
    a = c;
    console.log(`a = ${a}, b = ${b}`);
}

let x = 2;
let y = 4;

if (typeof x === "number" && typeof y === "number") {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log(`x = ${x}, y = ${y}`);
}
