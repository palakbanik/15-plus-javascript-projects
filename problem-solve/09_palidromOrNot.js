function isPalindrome(palindromeStr) {
    if (
        !palindromeStr ||
        typeof palindromeStr !== "string" ||
        Number(palindromeStr)
    ) {
        alert("enter a valid word");
        return;
    }

    let result = "";
    for (let i = palindromeStr.length - 1; i >= 0; i--) {
        result += palindromeStr[i];
    }

    if (result === palindromeStr) return true;
    return false;
}

// console.log(isPalindrome("true"));
// console.log(isPalindrome("01"));
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("mada"));
// console.log(isPalindrome("palak"));

function isPalindrome2(palindromeStr) {
    if (
        !palindromeStr ||
        typeof palindromeStr !== "string" ||
        Number(palindromeStr)
    ) {
        alert("enter a valid word");
        return;
    }

    for (let i = 0; i <= palindromeStr.length / 2; i++) {
        if (palindromeStr[i] !== palindromeStr.length - 1 + i) {
            return false;
        }
    }

    return true;
}

// console.log(isPalindrome2("true"));
// // console.log(isPalindrome2("01"));
// console.log(isPalindrome2("abba"));
// console.log(isPalindrome2("madam"));
// console.log(isPalindrome2("palak"));
