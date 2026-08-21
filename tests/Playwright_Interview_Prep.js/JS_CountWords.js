function countWords(str) {
    let words = str.trim().split(/\s+/);
    return str.trim() === "" ? 0 : words.length;
}
console.log(countWords("Javascript is very Powerful"));
//4