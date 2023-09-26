// interface GenericIdentity<Type>{
//     (arg:Type):Type;
// }

/*********Generic Function*************/
function identity<Type>(val:Type):Type{
    return val
}

let v = identity<number>(10);
console.log("value",v)

/********** Generic Function with extends Keyword **********/
// Ex 1
// since we are using extends number we can't use assign string as argument to testFun
function testFun<T,U extends number>(value1:T,value2:U):object{
    return {
        value1,
        value2
    }
}
// console.log(testFun(10,'12'))
console.log(testFun(10,12))
/****************/

/******** Generics in Arrow Function ********/
// const addUserId = <T> (obj:T) => {//<- Most common way to declare a generic
const addUserId = <T,> (obj:T) => {// Note: <T,> is another syntax to define a Generics
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

const r =addUserId(user);
console.log('Generic Arrow Function :',r)
// console.log(`User = ${addUserId(user.name)}`)
/***************/

/***** Generic Interface ******/

function genericIntFn<T>(arg:T):T{
    return arg
}

interface Bottle{
    brand:string,
    type:number
}

console.log(genericIntFn<Bottle>({brand:'asdf',type:10}))

/***** Generic Class *******/
interface quiz{
    name:string,
    type:number
}

interface course{
    name:string,
    author:string,
    book_number:number
}

class Sellable<T>{
    public cart:T[] = [];

    add_to_cart(product:T){
        this.cart.push(product)
    }
}

const myClass = new Sellable<course>();
myClass.add_to_cart({name:'java',author:'bala',book_number:123});
/*******************/


/******** Generics in Array ************/
myClass.add_to_cart({name:'kotlin',author:'bala',book_number:123});
myClass.add_to_cart({name:'golang',author:'bala',book_number:123});
function getSearchProducts<T>(products:T[]):T{
    return products[2]//<- 2 is the array index we want to find.
}

console.log('Search Product:',getSearchProducts<course>(myClass.cart))
/************************/

/*****Type Parameter with generic constrains especially with KEY********/

/**
 * Here the below code ensure we are not accidentally grabbing the property that doesn't exist
 * */

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a"))//<- This doesn't allow us to enter the key that doesn't available in the 'x' object.
// getProperty(x, "m");

/***********************/
