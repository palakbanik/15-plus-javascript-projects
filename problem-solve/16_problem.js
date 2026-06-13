function countWord(sentence) {
    if (typeof sentence !== "string" || !sentence || sentence === " ")
        throw "please enter valid sentence";

    return String(sentence).trim().split(" ").length;
}

console.log(countWord("How are you "));
console.log(countWord("what is the date today 12"));
// console.log(countWord(" "));

function countWord2(sentence) {
    if (typeof sentence !== "string" || !sentence || sentence === " ")
        throw "please enter valid sentence";

    return String(sentence)
        .split(" ")
        .filter((item) => item !== "");
}

console.log(countWord2("How are you "));
