function isPalindrome(str) {
    let revered = "";
    for(let i= str.length-1; i>=0; i--){
        revered +=str[i];
    }
    return str === reveresed;
}
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("hello")); //false

