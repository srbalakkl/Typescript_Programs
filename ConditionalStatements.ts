// **** `for in` statement in JavaScript ****
// let objs = {
//     0: {code: 'bal', name: 'bala'},
//     1: {code: 'vim', name: 'vimal'}
// };

let objs = [
    {code: 'bal', name: 'bala'},
    {code: 'vim', name: 'vimal'}
];

for (const key in objs) {
    // Not suitable for Arrays, Strings, Maps, Sets.

    console.log(`${key} : ${objs[key].code}`)
    if (objs[key].code === 'vim') {
        console.log(`${objs[key].name}`);
    }
}

for (const obj of objs) {
    // Best suited for iterators
    // Suitable for Arrays, Strings, Maps, Sets.
    console.log(`${obj.name}`);
}

