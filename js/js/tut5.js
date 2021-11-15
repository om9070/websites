//type conversion 


//  let myvar=34;
let myvar=("34");
 console.log(myvar,(typeof myvar));

//1st block 
// let boolean= (true);
 let boolean= ("true");

 console.log(boolean,(typeof boolean));

 //2st block
//  let date = new Date();
 let date = String(new Date());
 console.log(date,(typeof date));

 //3st block
//  let arr = [1,5,8,6,8];
 let arr = [1,5,8,6,8];
 console.log(arr,(typeof arr));
 console.log(arr.length,(typeof arr));

 //4st block
 let i =8;
 console.log(i.toString());
// console.log(i);


//5st block
// let stri ="454";
// stri =Number(true);
stri =Number(false);
console.log(stri,(typeof stri));


// let number=parseInt("48.5");
let number=parseFloat("48.57856");
console.log(number.toFixed(8),(typeof number));
//tofixed function used for seen number of after desimal


//type coercion

// let mystr ="698";
// let mystr =698;
let mystr = Number(698);

let mynum= 35;
console.log(mystr+mynum);