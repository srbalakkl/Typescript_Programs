// **** `for in` statement in javascript ****
let objs = {
    0: {code: 'bal', name: 'bala'},
    1: {code: 'vim', name: 'vimal'}
};


for (const key in objs) {
    // console.log(`${key} : ${objs[key].code}`)
    if (objs[key].code === 'vim') {
        console.log(`${objs[key].name}`);
    }
}