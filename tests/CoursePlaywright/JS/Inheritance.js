// Inheritance is the Main Pillar of Object oriented Programming
// One class can inherit/acquire the properties, Methods of another class
// The class which inherits the properties of other is known as subclass (derived class, child class)
// The class whose properties are inherited is known as superclass

const Person = require("./Class")
class Pet extends Person

{
    get location()
    {
        return "BlueCross"
    }
    constructor(firstName, lastName)
    {
        //call parent class constructor
        super(firstName, lastName)
    }
}
let pet = new Pet("sam", "san")
pet.fullName()
console.log(pet.location)