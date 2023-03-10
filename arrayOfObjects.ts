const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
console.log('Normal Array of Objecjs:',kvArray,'\n')

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log('Reformated Array of Objects:',reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

console.log('with Json Stringify',JSON.stringify(reformattedArray));


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

let car = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}

cars.splice(1, 0, car);
console.log('CARS =', cars)

console.log('************ Array.map *************')
/*
Array.map
Transform objects of an array
Here I'm transforming array of object into an array of different objects.
*/
let sizes: Array<string> = cars.map(cr => {
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
// console.log(`car Properties = ${carProperties}`);
console.log('carProperties=', carProperties)

console.log('************ Array.forEach *************')
// Array.forEach is used to Add a property to every object of an array
console.log('Before Foreach=',cars)
cars.forEach(car => {
  car['size'] = "large";
  if (car.capacity <= 5) {
    car['size'] = "medium";
  }
  if (car.capacity <= 3) {
    car['size'] = "small";
  }
});
console.log('After Foreach=',cars)

console.log('**************  Array.sort **************')
/*
Typically, the sorting is based on a value of a property every object has.
We can use the Array.sort function,
*/

// NOTE: Make sure to always add the case for zero
// when the compared value of both objects is the same to avoid unnecessary swaps.


// let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
// console.log(sortedCars);

let sortedCars = cars.sort((c1, c2) =>
  (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0
);
console.log(sortedCars)

console.log('*********** Some ************')
// to find some cars have red color & cabrio type.
console.log('Cars=',cars)
const sm = cars.some(car => car.color === "red" && car.type === "cabrio");
console.log('Some=',sm)

console.log('********** every ************')
const evry = cars.every(car => car.capacity >= 0);
console.log(evry);

// Note: Array.includes which is similar to Array.some, but works only for primitive types.

console.log('********** reduce ***********');
// Reduce is an array method that helps you convert an array into a single value.

// InitialValue is the value you want to start with.
// accumulator is the value returned from the previous iteration. It will be initialValue for the first iteration.
//   currentValue is array item in the current iteration.
const total = [0, 1, 2, 3];
console.log("Bef Reduce: The total is:", + total)
total.reduce(function (a, b) {
  return a + b;
});
console.log("Aft Reduce:The total is : " + total );


console.log(`***Testing***`)
let obj = [{name:'asdf',adr:'asdf'}]
console.log(`name = ${obj[0].name}`)

let newObj = [{n:'asdf'},{v:10}]
console.log('newObj=',newObj)
obj = [{name:'wqer',adr:'qwer'}]

console.log(`obj = ${obj[0].name}`)
console.log('Without Stringify',obj)
console.log('With Stringify (JSON)',JSON.stringify(obj))

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

let teenager = people.filter(function (person){
  return person.age >= range.lower && person.age<=range.upper
})

console.log('teenagers = ',teenager)


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
