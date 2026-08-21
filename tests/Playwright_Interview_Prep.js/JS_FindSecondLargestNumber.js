let arr = [80, 10, 20, 30, 40];
let largest = -Infinity;
let secondlargest = -Infinity;
for(let num of arr){
    if(num > largest){
        secondlargest = largest;
        largest = num;
    }else if(num > secondlargest && num !== largest){
        secondlargest = num;
    }
}
console.log(secondlargest);

//40