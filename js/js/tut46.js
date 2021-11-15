console.log("this is toturial 46");
let reg = /harry/; //this is regular expression literal
// let reg = /harry/g; //g is show global index 
// let reg = /harry/i; //i is show case insensitive


// console.log(reg);
// console.log(reg.source);


let s = "this is great code with harry and also harry";
//function to match expression
//1.exec()-this function will return an array for match or null for no match
let result = reg.exec(s);
if (result) {

    // console.log(result);
    // console.log(result.input);
    // console.log(result.index);
}


//its use g 
// let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);


// 2.test()-return true or false
let result2 = reg.test(s);
// console.log(result2);


//3.match()-it will return in array of result or null
// let result3=reg.match(s) --->this is worng
let result3 = s.match(reg);
// console.log(result3);


//4.search()-return of frist match else -1
let result4 = s.search(reg);
// console.log(result4);


//5.replace()-return new replace string with all replacement
let result5 = s.replace(reg, 'pro');
console.log(result5)