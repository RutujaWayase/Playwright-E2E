function findDuplicateNumbers(arr){
    let frequency = {};
    let duplicates = [];
    for(let num of arr){
        frequency[num] = (frequency[num] || 0)+1;
    }
    for(let num in frequency) {
        if(frequency[num] > 1){
            duplicates.push(Number(num));
        }
    }
    return duplicates;
}
console.log(findDuplicateNumbers([1, 2, 3, 4, 5, 2, 1]));