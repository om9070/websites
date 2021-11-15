console.log('this is tut59');
//symbol are unique primite
//symbols
const syml = Symbol('my idetifier');
const syml2 = Symbol('my idetifier');

// console.log(syml);
console.log(syml == syml2);

const a = "this is"
const b = "this is"
console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('indentifeir for k1');
const k2 = Symbol('for k2');

myobj = {};
myobj[k1] = "harry";
myobj[k2] = "rohan";
myobj["name"] = "good boy"

console.log(myobj);
console.log(myobj[k1]);
console.log(myobj[k2]);
console.log(myobj.k2); //can not started this type


//symbols are ingore in for loop
for (key in myobj) {
    console.log(myobj[key]);
}

console.log(JSON.stringify(myobj));