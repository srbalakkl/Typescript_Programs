const user = {
    id: 12,
    name: 'bala',
    address: {
        street: 'kumarapillai st',
        city: 'kkl',
        geo: {
            latitude: 102.25,
            longitude: 654.655
        }
    },
    age: 29
}

console.log(user.address && user.address.geo && user.address.geo.latitude);//<-Old way to access obj in JS
console.log(user.address.geo?.latitude ?? 0);//<- Optional Chaining Method to access an object

//here, the '?? 0' define if the value is not found, then it will print the 0 instead of undefined.
