console.log("************ Iterative Array Methods ************")

let a: any = [10, 2, 20, 23, 40]
console.log(`Value of array A = ${a}`);

console.log("\n ********* Find Method ***********")
let result: number;
result = a.find((value) => {
    return value > 10
    //show 1st result 20 only among other 23,40
    //op:20
});
console.log(`\nFind = ${result}`)

console.log("\n ********* Filter Method **********")
result = a.filter((value) => {
    // console.log(value)
    return value > 10
    //instead of single value(or unlike find()) it shows every thing
    //  op:[20,23,40]
});
console.log(`\nFilter = ${result}`)


//#map example1
console.log("\n ********* Map Method *************")
result = a.map((value) => {
    //NOTE: if you don't specify the condition, it will return true / false
    return value > 10
    //Used to check the condition
//  op: [false,false,true,true,true]
});
console.log(`\nEx1: map = ${result}`)


//#map example2
result = a.map((value) => {
    //NOTE: But if u specify the condition then it will work according to it.
    return '#' + value // <-- HERE I'M USING CONCATENATION TO LIST THE RESULT INSTEAD OF BOOLEAN VALUES.
//  op:[#10, #2, #20, #23, #40]
});
console.log(`\nEx2: map ${result}`)


//#map example2 with accumulator

console.log("\n*********** map example2 with accumulator ************")
console.log(`\nBef map with accumulator: ${a}`)

// note: since the map operator doesn't support the accumulator concept like reduce(),
// It will take 1st variable as the `current value' & the second variable as the index value

// i.e [10,2,20,23,40] is calculated as 10*0, 2*1, 20*2, 23*3, 40*4
result = a.map((curr_value, index) => {
    // NOTE: Map support current value only, not accumulator.
    return curr_value * index
    // op = [0,2,40,69,160]
});
console.log(`Aft map with accumulator ${result}`)


//#Reduce
console.log('\n************* reduce **************');
console.log(`Bef (Reduce without accumulator) = ${a}`)
result = a.reduce((value) => {
    //NOTE: This will reduce all the value and give 1st value
    return value
});
console.log(`Aft (Reduce without accumulator) = ${result}`);


//#Reduce method with accumulator.
result = a.reduce((Accumulator: number, value: number) => {
    //NOTE: This will reduce all the value ang give 1st value
    return Accumulator + value
//  op: 95

},0);
console.log(`\nBefore Reduce with accumulator= ${a}`);
console.log(`After Reduce with accumulator= ${result}`);

// Reduce is an array method that helps you convert an array into a single value.

// InitialValue is the value you want to start with.
// Accumulator is the value returned from the previous iteration. It will be initialValue for the first iteration.
//   currentValue is array item in the current iteration.
const total: Array<number> = [0, 1, 2, 3];
console.log("\nBef Reduce: The total is:", total)
let aftReduce = total.reduce(function (a, b) {
    return a + b;
});
console.log("Aft Reduce:The total is : ", aftReduce);

/*******************include function in array ******************/
console.log('Does 0 available in the array ?', a.includes(0));

console.log("\n********* For Each ***********")
console.log(`Array= ${a}\n`)
a.forEach((item,index,array) => {
    console.log(`Array = ${array}`)
    console.log(`Item = ${item}`)
    console.log(`Item index = ${index}\n`);
})
