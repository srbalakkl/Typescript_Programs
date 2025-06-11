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
    makeSound: function () {
        return 'Some sound';
    }
};

let dog = Object.create(animal);//<- prototype-based inheritance,
// basically here,The dog has the inherited property (i.e., property link of animal.) of an animal.
// it is not a shallow copy or deep copy.
dog.breed = 'Golden Retriever';
console.log(dog)//only breed name because `animal` is the linked property of the `dog` not its own property.

// Property lookup follows the prototype chain
console.log(dog.breed); // "Golden Retriever" (own property)
console.log(dog.species); // "Unknown" (inherited from animal)
console.log(dog.makeSound()); // "Some sound" (inherited method)
