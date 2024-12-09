/**
 * @title: Types
 *
 * @description Types are just a development time description to check the shapes for your values.
 * */

interface Boxed {
    value: string;
}

let boxed: Boxed = {value: 'hello'};

/**
 * @title Generic Interface
 *
 * @desc **Generic Interface** have pieces that can be swapped out each time a usage is declared.
 *
 * note: In generics, Type parameter should appear twice, If a type parameter only appears in one location,
 * strongly reconsider if you actually need it.
 *
 * The type parameters should only be used for input to the output but if you only use it for the input or the output
 * then there is no relationship between them.
 *
 * */

interface Boxed1<T> {
    value: T;
}

let box: Boxed1<string>;

// box.value = 1;//<- This will give us error because we assigned string type as a generic type to this box variable.

/**
 *
 * @title **Identity function**  (one of the Generic Function)
 *
 * @desc **Identity** function is common in all programming languages This will just take the value and returns that same value.
 * */
function identity<Type>(val: Type) { //or function identity(val: Type):Type { or function identity<Type>(val: Type):Type {
    return val
}

console.log("Identity Function Example =", identity('TestValue'))

/**
 * @desc Generics using state function in javascript.
 * */


interface State<T> {
    get: () => T;
    set: (newValue: T) => void;
}

function createState<T>(initialState: T): State<T> {
    let currVal = initialState;

    return {
        get: () => currVal,
        set: (newValue: T) => currVal = newValue
    };
}

let state = createState('ABC')
state.set('XYZ')
console.log('state=', state.get())//Type:string

/**
 * @desc Generics using literal ( not primitives like string,integer & etc) / Primitive type vs Literals (const T) using generics
 * */

interface Box<T> {
    value: T;
}

function createBox<const T>(value: T): Box<T> {//<- on <const T> we are declaring it as const type (i.e. exact value type)
    return {value}
}

let box1 = createBox('abc')

if (box1.value === 'def') {//comparing two literal type ('abc' with 'def') is unnecessary so it shows some error.
    throw new Error('What ?')
}

/**
 * @desc The `extends` keyword is used to constraint generic type parameters,
 * allowing them to be a subset of specific types. The `keyof` keyword is used to extract
 * the keys of a type, providing a union of its property names.
 */

// function get<T, K>(obj: T, key: keyof T) {//if you use this way (i.e. Without using extends keyword) the output/return type may be a string or boolean instead of exact value.
function get<T, K extends keyof T>(obj: T, key: K) {//<- Here,we are getting the exact value.
    return obj[key];
}

const attendee = {
    interested: true,
    name: "you"
}

let value = get(attendee, 'name')


/**
 * @desc Use `noInfer` to stop a type parameter from being included in type argument inference.
 */

declare function getIndexOf<const T>(
    value1: T[], value2: NoInfer<T>
    // value1: T[], value2: T
): T;

getIndexOf(["blue","feta"],'blua')//This would only work if we're expanding the type of T (i.e. value1: T[], value2: T )
getIndexOf(["blue","feta"],'blue')//We are getting the expected value because of NoInfer<T>

/********** Generic Function with extends Keyword **********/
// Ex 1
// since we are using extends number we can't use assign string as argument to testFun
function testFun<T, U extends number>(value1: T, value2: U): object {
    let v2 = value2.toString();
    return {
        value1,
        v2
    }
}

console.log('extend function test', testFun(10, 55))
/****************/

/******** Generics in Arrow Function ********/
// const addUserId = <T> (obj:T) => {//<- Most common way to declare a generic
const addUserId = <T, >(obj: T) => {// Note: <T,> is another syntax to define a Generics
    // especially in .JSX (react) files
    // to differentiate it from HTML tags like <h1> or <p> and etc
    const id = Math.random().toString(2);
    return {
        ...obj,
        id
    }
};

const user = {
    name: "bala"
}

const r = addUserId(user);
console.log('Generic Arrow Function :', r)
// console.log(`User = ${addUserId(user.name)}`)
/***************/

/***** Generic Interface ******/

function genericIntFn<T>(arg: T): T {
    return arg
}

interface Bottle {
    brand: string,
    type: number
}

console.log(genericIntFn<Bottle>({brand: 'asdf', type: 10}))

/***** Generic Class *******/
interface quiz {
    name: string,
    type: number
}

interface course {
    name: string,
    author: string,
    book_number: number
}

class Sellable<T> {
    public cart: T[] = [];

    add_to_cart(product: T) {
        this.cart.push(product)
    }
}

const myClass = new Sellable<course>();
myClass.add_to_cart({name: 'java', author: 'bala', book_number: 123});
/*******************/


/******** Generics in Array ************/
myClass.add_to_cart({name: 'kotlin', author: 'bala', book_number: 123});
myClass.add_to_cart({name: 'golang', author: 'bala', book_number: 123});

function getSearchProducts<T>(products: T[]): T {
    return products[2]//<- 2 is the array index we want to find.
}

console.log('Search Product:', getSearchProducts<course>(myClass.cart))
/************************/

/*****Type Parameter with generic constrains especially with KEY********/

/**
 * Here the below code ensure we are not accidentally grabbing the property that doesn't exist
 * */

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};

console.log(getProperty(x, "a"))//<- This doesn't allow us to enter the key that doesn't available in the 'x' object.
// getProperty(x, "m");

/***********************/
