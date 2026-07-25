var marks = Array(6)
var marks = new Array(20, 40, 35, 12, 37, 100)

var marks = [20, 40, 35, 12, 37, 100]
subMarks = marks.slice(2, 5) //breaks array 
console.log(subMarks)

console.log(marks[2]) //35
marks[3] = 14
console.log(marks) //[20, 40, 35, 14, 37, 100]
console.log(marks.length) //6
marks.push(65)
console.log(marks) //[20, 40, 35, 14, 37, 100, 65]
marks.pop() //[20, 40, 35, 14, 37, 100] //removes an element from an array
marks.unshift(12)  //insterts element at start of an array
console.log(marks)
console.log(marks.indexOf(100))
//120 in the array
console.log(marks.includes(120)) //check wheteher the element is present or included in an array i.e. it will return boolean i.e. true or false
var sum=0
for(let i=0; i<marks.length; i++)
{
    //console.log(marks[i])
    sum = sum + marks[i] //32+40
}
console.log(sum)
//reduce filter map
let total = marks.reduce((sum, totalMarks) => sum + totalMarks, 0)
console.log(total)
var scores = [12, 13, 14, 16]
//create new array with even numbers of scores array [12, 14, 16]
var evenScores = []
for(let i=0; i<scores.length; i++)
{
    if(scores[i]%2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)
let newFilterEvenScores = scores.filter(scores => scores%2 == 0)
console.log(newFilterEvenScores) // [12, 14, 16]

/* Methods when to use => 
    1) reduce: iterate & accumulate values for example sum
         Ex: let total = marks.reduce((sum, totalMarks) => sum + totalMarks, 0)
    2) filter: when we have to filter for any condition for example even numbers
         Ex: let newFilterEvenScores = scores.filter(scores => scores%2 == 0)
    3) map: mapping from one value to new value for example multiply operation
         Ex: let mappedArray = newFilterEvenScores.map(score => score*3)     
*/         

//map

//create new array with even number of scores and multiply each value with 3 array [12, 14, 16] => [36, 42, 48]

let mappedArray = newFilterEvenScores.map(score => score*3)
console.log(mappedArray)

//create new array with even number of scores and multiply each value
// with 3 and sum them array [12, 14, 16] => [36, 42, 48] => 126

let totalVal = mappedArray.reduce((sum, val) => sum +val, 0)
console.log(totalVal)
var scores1 = [12, 13, 14, 16]

scores1.filter(scores=>scores%2==0)