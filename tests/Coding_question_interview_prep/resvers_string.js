//Without build in methods =>
function reverseString(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}
console.log(reverseString("Playwright"));

//Build in methods => 

function reverseStr(str1) {
    return str1.split('').reverse().join('');
}
console.log(reverseStr('Playwright Automation Framework testing'));

// Without built-in methods =>

function reverseStr1(str) {
    let result = "";
    for(let i = str.length-1; i >=0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseStr1("Rutuja"));