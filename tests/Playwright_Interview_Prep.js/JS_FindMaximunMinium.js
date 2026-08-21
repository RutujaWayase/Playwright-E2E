function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];

    for (let num of arr){
        if(num > max){
            max = num;
        }
        if(num < min){
            min = num;
        }
    }
    return {max, min};
}
console.log(findMaxMin([10, 5, 25, 3, 15]));
// {max: 25, min: 3}