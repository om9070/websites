//genral loop = for,whilw,do-while
// for(let i=1;i<100;i++){
// console.log(i);
// }

// let j=0;
// while(j<10){
//      console.log(j);
//     j++;
// }


// let k=1;
// do{
// if(k===5)
// {
// break;
// }
// console.log(k);
// k +=1;
// }while(k<10);

// console.log("done");


// let k=1;
// do{
// if(k===5)
// {
// k +=1;
// continue;
// }
// console.log(k);
// k +=1;
// }while(k<10); 
// console.log("done");



let arr = [2, 5, 8, 3, 2];
// arr.forEach(function(element){
// console.log(element)
// });


arr.forEach(function(element, index, array) {
    console.log(element, index, array)
});


// let obj={
//     name: "op",
//     age: 55,
//     type: "programmer",
// }
// for(let key in obj)
// {
//     console.log(`the ${key} of the object is ${obj[key]}`);
// }