function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam"));

// Without Built in methods
function isPalindrome1(str1) {
    let reversed = "";
    for(let i=str1.length - 1; i >= 0; i--){
        reversed += str1[i];
    }
    return str1 === reversed;
}
//console.log(isPalindrome1("rutuja")); //false
console.log(isPalindrome1("madam")); //true