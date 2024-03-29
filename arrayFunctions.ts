// console.log('this is typescsdfasdfript');

let a:any  = [10,2,20,23,40]
console.log(`Value of A = ${a}`);

let result: number;
result = a.find((value) => {
  return value > 10
  //show 1st result 20 only among other 23,40
  //op:20
});
console.log(`\nFind = ${result}`)



result = a.filter((value) => {
  // console.log(value)
  return value > 10
  //instead of single value it shows every thing
  //  op:[20,23,40]
});
console.log(`\nFilter = ${result}`)



//#map example1
result = a.map((value) => {
  //NOTE: if you don't specify the condition it will return true / false
  return value > 10
  //Used to check the condition

//  op:[20,23,40]
});
console.log(`\nEx1: map = ${result}`)



//#map example2
result = a.map((value) => {
  //NOTE: But if u specify the  condition then it will work according to it.
  return '#'+ value // <--  HERE I'M USING CONCATENATION TO LIST THE RESULT INSTEAD OF BOOLEAN VALUES.
//  op:[20,23,40]
});
console.log(`\nEx2: map ${result}`)



//#map example2 with accumulator
result = a.map((acc,value) => {
  //[10,2,20,23,40]
  //NOTE: But if u specify the  condition then it will work according to it.
  return acc * value
  //instead of single value it shows every thing
  //  op:[20,23,40]
});
console.log(`\nBef map with accumulator: ${a}`)
console.log(`Aft map with accumulator ${result}`)



//#Reduce
console.log('************* reduce **************');
result = a.reduce((value) => {
  //NOTE: This will reduce all the value and give 1st value
  return value
});
console.log(`\nBef (Reduce without accumulator)= ${a}`)
console.log(`Aft (Reduce without accumulator)= ${result}`);


//#Reduce method with accumulator.
result = a.reduce((Accumulator: number, value: number) => {
  //NOTE: This will reduce all the value ang give 1st value
  //Accumulator is the previous value of the current node js value
  return Accumulator + value
  //instead of single value it shows every thing

//  op:[20,23,40]
});
console.log(`\nBefore Reduce with accumulator= ${a}`);
console.log(`After Reduce with accumulator= ${result}`);

// Reduce is an array method that helps you convert an array into a single value.

// InitialValue is the value you want to start with.
// accumulator is the value returned from the previous iteration. It will be initialValue for the first iteration.
//   currentValue is array item in the current iteration.
const total:Array<number> = [0, 1, 2, 3];
console.log("Bef Reduce: The total is:",total)
let aftReduce = total.reduce(function (a, b) {
  return a + b;
});
console.log("Aft Reduce:The total is : ",aftReduce);

/*******************include function in array ******************/
console.log('Does 0 available in the array ?',a.includes(0));

