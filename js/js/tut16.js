let element=document.createElement('li');
//1st option (edit text)
let text=document.createTextNode('i am pro');
element.appendChild(text);
element.className='childul';
element.id='created';
element.setAttribute('title','mytital');

//2st option (edit text)
// element.innerText='this is created by op';
// element.innerHTML='<b>this is created by op<b/>';


let ul=document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let nodm=document.createTextNode('this  is a create node for elem2');
elem2.appendChild(nodm);

element.replaceWith(elem2);

let myul =document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));

// let pt=elem2.getAttribute('class');//its provide class 
let pt=elem2.hasAttribute('class');//only cheak candition 
elem2.removeAttribute('id');//remove id from element

console.log(elem2,pt);