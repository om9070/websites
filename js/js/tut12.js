console.log("welcome to tut12");
let a=document;
a=document.all;
// a=document.body;
// a=document.forms;
// Array.from(a).forEach(function(element){
// console.log(element);
// });
a=document.links[0].href;
console.log(a);

c=document.getElementById("heading").textContent="pro is the best site";
console.log(c);


c=document.getElementById("heading").textContent;
console.log(c);

let btn=document.getElementById('btn');
btn.addEventListener('blur',function(){
    console.log("you are noob par that is not satisfiere");
})