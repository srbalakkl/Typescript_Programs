const arrived = true;
console.log('asd')
// @ts-ignore
const ride = new Promise<any>(function (resolve,reject) {
  if (arrived){
    resolve("I arrived")
  }else {
    reject("driver is rejected");
  }
});

ride.then(value =>{
  console.log(value)
})

ride.catch(val =>{
  console.log(val)
})

ride.finally(val => {
  console.log(val)
})
