class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @loggedMethod
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const p = new Person("Ron");
p.greet();


function loggedMethod(originalMethod: any, _context: any) {
    // function replacementMethod(this: any, ...args: any[]) {
    function replacementMethod(target, key, descriptor) {

        console.log(descriptor?.value)

        console.log("LOG: Entering method.")
        const result = originalMethod.call(this, ...args);//<- Here this context is the `Person` class.
        console.log("LOG: Exiting method.")
        return result;
    }

    return replacementMethod;
}

