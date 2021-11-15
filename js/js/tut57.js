console.log("htis is tut57");
//maps in javascript
const mymap = new Map();

const key1 = 'mystr',
    key2 = {},
    key3 = function() {};

// setting map value
mymap.set(key1, 'this is string');
mymap.set(key2, 'this is blank object');
mymap.set(key3, 'this is empty fuction');

console.log(mymap);

// getting the value from a map
let value1 = mymap.get(key1); //it use key2 and key3
console.log(value1);

//get the size of the map
console.log(mymap.size);

//you can loop using for  of to get keys and value
for (let [key, value] of mymap) {
    console.log(key, value);
}

//get only key
for (let key of mymap.keys()) {
    console.log(key)
}

//get only value
for (let value of mymap.keys()) {
    console.log(value)
}
//you can loop through a map using for each loop
mymap.forEach((value, key) => {
    console.log('key is', key)
    console.log('key is', value)

})

//conver maq to an array
let myarray = Array.from(mymap);
console.log('map to array is', myarray)

//conver maq to an array keys 
let keyarray = Array.from(mymap.keys());
console.log('map to array is', keyarray)

//conver maq to an array value 
let valuearray = Array.from(mymap.values());
console.log('map to array is', valuearray)