let cons=document.querySelector('.no');
 cons=document.querySelector('.container');
let nodename=cons.childNodes[3].nodeName;
let nodetype=cons.childNodes[1].nodeType;
// console.log(cons);
// console.log(nodename);
// console.log(nodetype);

// console.log(cons.childNodes);//its show nodelist,
// console.log(cons.children); //its show only element, 

//node type
// 1.Element
// 2.attribute
// 3.text node
// 4.comment
// 5.document
// 6.doc type

let container=document.querySelector('div.container');
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount);

console.log(container.firstElementChild);
console.log(container.firstElementChild.parentNode);

console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

