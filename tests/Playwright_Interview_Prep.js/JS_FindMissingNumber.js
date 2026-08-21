let arr = [1, 2, 3, 5, 6, 7];
let n =7; 
let expectedSum = n* (n+1)/2;
let actualSum = 0;
for(let num of arr){
    actualSum +=num;
}
let missing = expectedSum -actualSum;
console.log(missing);


//0/P => 4