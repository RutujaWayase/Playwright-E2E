 // Array example and operations

 //Define an array
 const fruits = ["Apple", "Banana", "Cherry", "DAte"];

 //Access elements by index
 console.log(fruits[0]); //Apple
 console.log(fruits[2]); //Cherry

 // Add an element to the end of the array
 fruits.push("Mango");
 console.log(fruits); //[ 'Apple', 'Banana', 'Cherry', 'DAte', 'Mango' ]

 //Remove the last element from the array
 const lastFruit = fruits.pop();
 console.log(lastFruit); //Mango
 console.log(fruits); //[ 'Apple', 'Banana', 'Cherry', 'DAte' ]

 //Add an element to the beginnng of the array
 fruits.unshift("Fig");
 console.log(fruits); //[ 'Fig', 'Apple', 'Banana', 'Cherry', 'DAte' ]

 //Remove the first element from the array
 const firstFruit = fruits.shift();
 console.log(firstFruit); //Fig
 console.log(fruits); //[ 'Apple', 'Banana', 'Cherry', 'DAte' ]

 //Find the index of an element
 const index = fruits.indexOf("Cherry");
 console.log(index); //2

 //Remove an element by index
 const removedFruit = fruits.splice(index,1); //shift one position forward (1,1)
 console.log(removedFruit); //[ 'Cherry' ]
 console.log(fruits); [ 'Apple', 'Banana', 'DAte' ]

 //Iterate over the array
 fruits.forEach((fruits,index) => {
    console.log(`${index}: ${fruits}`);
 }) //0: Apple
// 1: Banana
// 2: DAte
 
//String example and operations
//Define a string


