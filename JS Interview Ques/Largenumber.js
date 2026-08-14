let arr = [20, 10, 40, 30];

let larget = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>larget){
        larget= arr[i];
    }
}
console.log(larget);