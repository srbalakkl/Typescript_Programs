let product = {
    title: 'pen',
    price: 100,
    inStock: true
}

let val = Object.getOwnPropertyDescriptor(product, 'price')

console.log(val)
//op: { value: 100, writable: true, enumerable: true, configurable: true }
// <- There are called property descriptors except value property.


console.log('\n\n******** Writable ********')

Object.defineProperty(product, 'price', {writable: false})// Defining writable property to false

product.price = 200;//if we enable `use 'strict'` then the node will show an error in this line.

console.log(product)//<- Here price won't change because it has {writable:false} property descriptor.



console.log('\n\n******** Enumerable ********')

Object.defineProperty(product,'inStock',{enumerable:false});

console.log(product.inStock)

console.log(product)// inStock become invisible

for (const valKey in product) {//not even visible with `for..in` looping.
    console.log(valKey)
}

console.log('hasOwnProperty = ',product.hasOwnProperty("inStock"))



console.log('\n\n******** Configurable *******')
// When we set the configurable flag to false,
// we cannot change any of the property descriptors on that object except {writable:false} property.
Object.defineProperty(product,'inStock',{configurable:false});