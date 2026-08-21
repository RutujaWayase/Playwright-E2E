function countOfOccurane(arr, target){
    let count = 0;
    for(let element of arr) {
        if(element === target) {
            count ++;
        }
    }
    return count;
}
console.log(countOfOccurane([1,2,2,2,2,3, 4, 6, 6, 5], 2)); //4