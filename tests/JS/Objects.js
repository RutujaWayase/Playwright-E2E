//Object is collection of properties
let person = {
    firstName: 'Tim',
    lastname: 'Joe',
    age: 24,
    fullName: function()
    {
        console.log(this.firstName+this.lastname)
    }
}

console.log(person.fullName())
console.log(person.lastname)
console.log(person['lastName'])
person.firstName = 'Tim Dane'
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person)

for (let key in person)
{
    person[key]
}
