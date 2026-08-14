let arr = [22, 33, 11, 36, 8];

let smallest = arr[0];
for(let i=1; i< arr.length; i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
}
console.log(smallest);