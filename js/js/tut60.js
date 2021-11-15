console.log("this is tut60");

//destructuring in j.s

// let a, b;
// [a, b] = [34, 564];
// console.log(a, b);

// [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


({ a, b, c, ...d } = { a: 34, b: 345, c: 6, d: 45, e: 34 })
console.log(a, b, c, d);

const fruits = ['apple', 'banana', 'mango'];
[a, b, c] = fruits;
console.log(a, b, c);

//object detructuring
const laptop = {
    model: "hp pavailion",
    age: "56 day",
    gender: "male",
    net: 123,
    start: function() { console.log('started') },
}

const { model, age, gender, net, start } = laptop;
console.log(model, age, gender, net, start);