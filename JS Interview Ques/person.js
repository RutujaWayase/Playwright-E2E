//Define the parent class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    //Method to get the person's details
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

//Export the Person class
export default Person;