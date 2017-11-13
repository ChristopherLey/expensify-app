//
// Object Destructuring
//

const person = {
    name: 'Chris',
    age: 30,
    location: {
        city: 'Santiago',
        temp: 32
    }
}

const { 
    name: username = "anonymous", 
    age, 
    location 
} = person;

console.log(`${username} is ${age}.`)

const {temp: temperature, city: userCity} = location;

console.log(`It's ${temperature} in ${userCity}.`)


//
// Array Destructuring
//

const address = ['123', 'Fake Street', "Santiago", "Chile", '820000'];

const [,, city, state] = address;

console.log(`You are in ${city}, ${state}.`)