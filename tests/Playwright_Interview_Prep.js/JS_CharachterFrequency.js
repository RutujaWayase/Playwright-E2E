let str = "javascipt";
let count = {};
for(let char of str){
    count[char] = (count[char] || 0) + 1;
}
console.log(count);

//O/p => { j: 1, a: 2, v: 1, s: 1, c: 1, i: 1, p: 1, t: 1 }

//if spaces are ignored

let str2="Hello World";
let count1={};
for (let char of str2){
    if(char !== " "){
        count1[char] = (count1[char]||0)+1;
    }
}
console.log(count1);

// { j: 1, a: 2, v: 1, s: 1, c: 1, i: 1, p: 1, t: 1 }
// { H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1 }