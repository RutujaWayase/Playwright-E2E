// Can JS hold a function as a prpperty => Yes
const person = {
    name: "John",
    age: 30,
    greet: function(){
        console.log("Hello, I am " + this.name);
    }
}

person.greet(); //Hello, I am John

// Anoynomous function in JS

function sayHello(){      //general function
    return "Hello, I am the world";
}

const helloMessage = sayHello();
console.log(helloMessage); //Hello, I am the world

const greet = function(name){ //anoynomus function
    return "Hello, I am " + name;
}
console.log(greet)