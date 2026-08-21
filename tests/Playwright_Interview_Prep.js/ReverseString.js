let str = "Playwright";
let reversed = "";
for(let i=str.length-1; i>=0; i--){
    reversed +=str[i];
}
console.log(reversed);

//build in method
let str1 = "Playwright";
let rever = str1.split("").reverse().join("");
console.log(rever);