/**
 * The call,apply,bind methods are used to reuse the methods available inside the object.
 *
 * `call()` function is basically used for setting the `this` context for a function call.
 *
 *
 * */


const person = {
    name: 'bala',
    greet: function (greeting: string, punctuation: string) {
        console.log(`${greeting}, My name is ${this.name} ${punctuation}`)
    }
}

person.greet('Hello.....', '!');

const anotherPerson = {
    name: 'bob',
}
// The first argument to call() sets 'this'. Subsequent arguments are passed to the function.
person.greet.call(anotherPerson, 'hi..', '.');//<- here,
// I'm sending anotherPerson as the context for the person object.
// Basically,
// I'm overriding the default value of the greet function in the person object
// (i.e., The value of 'this' = anotherPerson instead of person)

// The first argument to apply() sets 'this'. The second argument is an array of arguments for the function.
person.greet.apply(anotherPerson, ['hello!!', 'da']);

// bind() creates a new function with 'this' bound to the first argument.
// It doesn't call the function immediately.
let greetBob = person.greet.bind(anotherPerson)

greetBob("Hey there", "?");//<- now the call function is called and executed.
