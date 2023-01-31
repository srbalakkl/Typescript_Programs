// console.log('this is typescsdfasdfript');

let a:any  = [10,2,20,23,40]
console.log(`Value of A = ${a}`);

let result: number;
result = a.find((value) => {
  return value > 10
  //show 1st result 20 only among other 23,40
  //op:20
});
console.log(`find = ${result}`)



result = a.filter((value) => {
  // console.log(value)
  return value > 10
  //instead of single value it shows every thing
  //  op:[20,23,40]
});
console.log(`filter = ${result}`)



//#map example1
result = a.map((value) => {
  //NOTE: if you don't specify the condition it will return true / false
  return value > 10
  //Used to check the condition

//  op:[20,23,40]
});
console.log(`map = ${result}`)

//#map example2
result = a.map((value) => {
  //NOTE: But if u specify the  condition then it will work according to it.
  return '#'+ value // <--  HERE I'M USING CONCATENATION TO LIST THE RESULT INSTEAD OF BOOLEAN VALUES.
//  op:[20,23,40]
});
console.log(`map ${result}`)

//#map example2 with accumulator
result = a.map((acc,value) => {
  //[10,2,20,23,40]
  //NOTE: But if u specify the  condition then it will work according to it.
  return acc * value
  //instead of single value it shows every thing
  //  op:[20,23,40]
});
console.log(`map with accumulator ${result}`)

//#filter
result = a.reduce((value) => {
  //NOTE: This will reduce all the value ang give 1st value
  //Accumulator is the previous value of the current node js value
  return value
  //instead of single value it shows every thing

//  op:[20,23,40]
});
console.log(`Reduce without accumulator= ${result}`);

//#filter With reduce method
result = a.reduce((Accumulator,value) => {
  //NOTE: This will reduce all the value ang give 1st value
  //Accumulator is the previous value of the current node js value
  return Accumulator + value
  //instead of single value it shows every thing

//  op:[20,23,40]
});
console.log(`Reduce with accumulator= ${result}`);
