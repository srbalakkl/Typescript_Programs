console.log("Array Iterative Methods")

const kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30},
];

console.log('Normal Array of Objects:', kvArray, '\n')

const reformattedArray = kvArray.map(({key, value}) => (
    {[key]: value}
));

// this can also be written as below.
// but when you open a curly brace after an aero operator (=>) you must use the return keyword
// for map operators (or for the operators that return an array)

const test = kvArray.map(({key, value}) => {
    return {[key]: value}
});

console.log('\nReformatted Array of Objects:', reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

console.log('\nWith Json Stringify', JSON.stringify(reformattedArray), '\n');


// ***************FreeCodeCamp.com**************
// **** Splice ****

/*
To add an object in the middle, use Array.splice.
It can also remove items.
Watch out for its parameters:

Array.splice(
  {index where to start},
  {how many items to remove},
  {items to add}
);

*/
console.log('********** Array.splice ***********')
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
];

console.log(`\n\nBefore Splice()\n`, cars);

let car = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}

cars.splice(1, 0, car);//1 -> starting position, 0 -> delete count, car object to insert
console.log(`\nAfter Splice()`, cars)

console.log('\n************ Array.map *************')
/*
Array.map
Transform objects of an array
Here I'm transforming an array of object into an array of different objects.
*/
let sizes: Array<string> = cars.map(cr => {
    // The major difference between forEach and map operator is forEach operator doesn't return a new array like a map operator.
    if (cr.capacity <= 3) {
        return "small"
    }
    if (cr.capacity <= 5) {
        return "medium"
    }
    return "large"
})
console.log('sizes = ', sizes)

// It's also possible to create a new object if we need more values:
let carProperties = cars.map(cr => {
    let properties = {
        "capacity": cr.capacity,
        "size": "large"
    };

    if (cr.capacity <= 5) {
        properties['size'] = 'medium';
    }

    if (cr.capacity <= 3) {
        properties['size'] = 'small';
    }

    return properties;
})
console.log('carProperties=', carProperties)

console.log('\n************ Array.forEach *************')
// Array.forEach is used to Add a property to every object of an array
// The major difference between forEach and map operator is forEach operator doesn't return a new array like map operator.
console.log('Before Foreach=', cars)
cars.forEach(car => {
    car['size'] = "large";
    if (car.capacity <= 5) {
        car['size'] = "medium";
    }
    if (car.capacity <= 3) {
        car['size'] = "small";
    }
});
console.log('After Foreach=', cars)

console.log('\n**************  Array.sort **************');
/*
Typically, the sorting is based on the value of a property every object has.
We can use the Array.sort function.
*/

// NOTE: Make sure to always add the case for zero
// when the compared value of both objects is the same to avoid unnecessary swaps.


let sortedCars = cars.sort((c1, c2) =>
    (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0
);
console.log(sortedCars)

console.log('\n*********** Some ************')
// to find some cars have red color & cabrio type.
console.log(typeof cars)
console.log('Cars=', cars)
const sm = cars.some(car => car.color === "red" && car.type === "Cabrio");
console.log('Some=', sm)

console.log('\n********** every ************')
const evry = cars.every(car => car.capacity >= 0);
console.log(evry);

// Note: Array.includes which is similar to Array.some, but works only for primitive types.

console.log('\n********** reduce ***********');
const objects = [{x: 1}, {x: 2}, {x: 3}];
console.log('Before reduce:', objects)
const sum = objects.reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    0,//<- Denote the current position of the value.
);
console.log('After reduce', sum); // 6

console.log('\n********* Grouping items by using reduce method (NOTE: This can also be achieved by filter operator) ********');
const objs = [
    {
        name: 'bala',
        age: 20,
        gender: 'male'
    },
    {
        name: 'asdf',
        age: 30,
        gender: 'female'
    },
    {
        name: 'asdf',
        age: 45,
        gender: 'male'
    },
    {
        name: 'qwer',
        age: 54,
        gender: 'male'
    },
    {
        name: 'oioipi',
        age: 30,
        gender: 'female'
    }
];

console.log('Before Groups: ', objs)

console.log('After Groups', objs.reduce((acc, val) => {
    if (val.age == 30)
        acc.push(val)

    return acc
}, []))


console.log(`\n\n***Testing***`)
let obj = [{name: 'asdf', adr: 'asdf'}]
console.log(`name = ${obj[0].name}`)

let newObj = [{n: 'asdf'}, {v: 10}]
console.log('newObj=', newObj)
obj = [{name: 'wqer', adr: 'qwer'}]

console.log(`obj = ${obj[0].name}`)
console.log('Without Stringify', obj)
console.log('With Stringify (JSON)', JSON.stringify(obj))

let people = [
    {name: "aaron", age: 65},
    {name: "beth", age: 15},
    {name: "cara", age: 13},
    {name: "daniel", age: 3},
    {name: "ella", age: 25},
    {name: "fin", age: 16},
    {name: "george", age: 18},
]

let range = {
    lower: 13,
    upper: 16
}

let teenager = people.filter(function (person) {
    return person.age >= range.lower && person.age <= range.upper
})

console.log('teenagers = ', teenager)


console.log('********* Object Comparison using JSON.stringify ********')
var person1 = {
    name: 'Dhoni',
    Age: 41,
    Trophies: [2007, 2011, 2013]
};

//Creating person2 object
var person2 = {
    name: 'Kohli',
    Trophies: [],
    Age: 34,
};

console.log(JSON.stringify(person1) == JSON.stringify(person2))
// document.write(_.isEqual(person1, person2));


console.log(`***************** Object.prototype ****************`);

/**
 * @description
 * The Object.defineProperty() static method defines a new property directly on an object,
 * or modifies an existing property on an object and returns the object.
 *
 * Property descriptors present in objects come in two main flavors:    data descriptors and accessor descriptors.
 *
 * A <b>data descriptor</b> is a property with a value that may or may not be writable.
 * An <b>accessor descriptor</b> is a property described by a getter-setter pair of functions.
 *
 * A descriptor must be one of these two flavors; it cannot be both.
 *
 * */

let person = {
    id: 1,
    name: 'bala'
}

Object.defineProperty(person, 'id', {
    value: 2,
    writable: false//Default val is true
})

console.log(person.id)
person.id = 3;
console.log(person.id)

