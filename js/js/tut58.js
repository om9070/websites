console.log("this is tut58");

//set store unique values
const myset = new Set(); //initilize am empty set
console.log('the set looks like', myset);


//adding value to this set
myset.add('this');
myset.add('my name');
myset.add('this');
myset.add(34);
myset.add(true);

console.log('the set looks like this now', myset)

let myset1 = new Set([1, 45, 'this', false, { s: 4, b: 6 }]);
console.log(myset1)

console.log(myset1.size)
console.log(myset1.has(45)) //its provide true and false

console.log('Before myset1 value', myset1)
console.log(myset1.delete(45))
console.log('after myset1 value', myset1)

//iterating  a set
for (let item of myset) {
    console.log('items is:', item);
}

myset.forEach((item) => {
    console.log('items prints in other way', item)
})

//get convert to array 
let array = Array.from(myset);
console.log(array);