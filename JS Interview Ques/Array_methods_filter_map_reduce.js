/*
Create an array of objects representing students with their names and scores, and get the below result with optimized solution.
1) Filters out students who passed in the exam with score more than 36.
2) Update Passed students name with uppercase.
3) Total score of all passing students
*/
const students = [{name: "Allice", score: 25},
    {name: "Bob", score: 55},
    {name: "Charlie", score: 65},
    {name: "David", score: 35},
    {name: "Eve", score: 75}
]

const passedStudents = students.filter(student => student.score>=36);
console.log(passedStudents);

const upperCaseNames = passedStudents.map(student => student.name.toUpperCase());
console.log(upperCaseNames);

const totalScore = passedStudents.reduce(function(acc, student) {
    acc = acc + student.score; //120
    return acc;
}, 0)
console.log(totalScore);