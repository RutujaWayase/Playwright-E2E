//Using Set
let arr = [1, 2, 2, 3, 4, 5, 5];
let result = [...new Set(arr)];
console.log(result);

//o/p => [ 1, 2, 3, 4, 5 ]

// Without Set
let arr1 = [1, 2, 2, 3, 4, 5, 5, 8, 9, 9, 8, 7, 6, 3, 2, 1];
let result1 = [];
for(let num of arr1){
    if(!result.includes(num)){
        result.push(num);
    }
}
console.log(result);

//O/p => [ 1, 2, 3, 4, 5 ]
[
  1, 2, 3, 4, 5,
  8, 9, 7, 6
]