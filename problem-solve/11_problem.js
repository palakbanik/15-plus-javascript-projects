const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowelAndConsonant(inpStr) {
    if (typeof inpStr !== "string" || !inpStr.trim() || Number(inpStr)) {
        throw new Error("Please enter a valid word");
    }

    const result = inpStr.trim();

    let vowel = 0;
    let consonant = 0;

    for (let i = 0; i < result.length; i++) {
        if (result[i] === " ") continue;

        if (vowels.includes(result[i])) {
            vowel++;
        } else {
            consonant++;
        }
    }

    return {
        vowel,
        consonant,
    };
}

console.log(countVowelAndConsonant("palak"));
console.log(countVowelAndConsonant("Hello World"));
console.log(countVowelAndConsonant("aeiou AEIOU aeiou"));
console.log(countVowelAndConsonant("AEIOU"));
// console.log(countVowelAndConsonant("20 ")); // throw error
// console.log(countVowelAndConsonant(" ")); // throw error
// console.log(countVowelAndConsonant("")); // throw error
// console.log(countVowelAndConsonant()); // throw error
