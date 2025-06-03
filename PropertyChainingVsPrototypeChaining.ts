console.log('********** Basic property chaining **********')
let person = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York',
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    }
};

// Accessing nested properties through chaining
console.log(person.address.street); // "123 Main St"
console.log(person.address.coordinates.lat); // 40.7128


// Prototype chain example
console.log('\n\n********** Prototype chain example ***********')
let animal = {
    species: 'Unknown',
    makeSound: function() {
        return 'Some sound';
    }
};

let dog = Object.create(animal);
dog.breed = 'Golden Retriever';

console.log(dog)

// Property lookup follows the prototype chain
console.log(dog.breed); // "Golden Retriever" (own property)
console.log(dog.species); // "Unknown" (inherited from animal)
console.log(dog.makeSound()); // "Some sound" (inherited method)
