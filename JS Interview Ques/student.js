//Import the Person class
import Person from "./person.js";

//Define the child class that inherits from Person
class Student extends Person {
    constructor(name, age, grade){
        //Call the parent class constructor using super
        super(name, age);
        this.grade = grade;
    }

    //Method to get the student's details
    getStudentDetails(){
        //Call the parnet class method
        const parentDetails = super.getDetails();
        return `${parentDetails}, Grade: ${this.grade}`;
    }
}

//Export the Student class
export default Student;