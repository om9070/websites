let elememt=document.getElementById('myfrist');
// elememt=elememt.className;
// elememt=elememt.childNodes;
// elememt=elememt.parentNode;
// elememt.style.color='red';
// elememt.innerText="op pro";
// elememt.innerHTML=`<b>"op is the best" </b>`;
// console.log(elememt);


//single seleter

// let sel=document.querySelector('#myfrist');
// let sel=document.querySelector('.child');
// sel=document.querySelector('h1')//single element selecter

// console.log(sel);


//multiple selecter
let mpn=document.getElementsByClassName('child');
mpn=document.getElementsByClassName('container');
// console.log(mpn[0].getElementsByClassName('child'));
mpn=document.getElementsByTagName('div');
console.log(mpn);

Array.from(mpn).forEach(function(elememt){
    console.log(elememt);
    elememt.style.color='red';
});