/**
 *
 * The destructuring assignment syntax is a JavaScript expression
 * that makes it possible to unpack values from arrays, or properties from objects,
 * into distinct variables.
 *
 * */

let a,b,rest;
[a,b] = [10,11];
console.log(a);
console.log(b);


/**
 *
 * You can end a destructuring pattern with a rest parameter ...rest.
 * This pattern will store all remaining properties of the object or array into a new object or array.
 *
 * */

[a, b, ...rest] = [10, 20, 30, 40, 50];//Here, ...rest is called as a rest parameter.
console.log(...rest)//Here, ...rest is called as spread operator
