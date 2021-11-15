let marks = [54,68,95,42,50];
const fruit =['orange','apple','pineapple'];
const mixed =['tsr',87,[3,8]];


const arr = new Array(52,123,21,'orange');
// console.log(arr);
// console.log(mixed);
// console.log(fruit[2]);
// console.log(marks);

// console.log(arr.length);
// console.log(Array.isArray('fdgdh'));
// arr[0]='op';
// let arrelement =arr[0];
// console.log('element:',arrelement);
// console.log(arr);


// let value = marks.indexOf(54);
// console.log(value);


//its insert at last position
// marks.push(82);
// console.log(marks);

//its insert at frist position
// marks.unshift(895);
// console.log(marks);

//marks.pop() //delete from last position
//marks.shift() //delete from frist potision
//marks.splice(3,2) //3 digit stay and 2 digit remove from ago 3 digit
// marks.reverse()
let marks2 =[1,2,3]
marks=marks.concat(marks2);
// console.log(marks);

let myobj={
    name: 'op',
    channal: 'code with op',
    isactive: true,
    marks: [1,2,8,5],
}
console.log(myobj);
console.log(myobj.marks)
console.log(myobj['name']);