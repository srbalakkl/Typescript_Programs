// interface GenericIdentity<Type>{
//     (arg:Type):Type;
// }

/*********Generic Function*************/
function identity<Type>(val:Type):Type{
    return val
}

let v = identity<number>(10);
console.log("value",v)

/********** Generic Function **********/
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

// Ex 2
const addUserId = <T> (obj:T) => {
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
console.log('val = ',r)
// console.log(`User = ${addUserId(user.name)}`)

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
myClass.add_to_cart({name:'adsf',author:'bala',book_number:123});
/*******************/
