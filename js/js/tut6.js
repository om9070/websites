const name =' op';
const greeting = 'good morning';
console.log(greeting+name);

let html;
html = "<h1>this is heading</h1>"+"<p>this is para</p>";

html =html.concat('this',' str2');
console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[5]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('p'));
// console.log(html.charAt(12));
// console.log(html.endsWith('str2'));
// console.log(html.endsWith('str5966'));

// console.log(html.includes('is'));
// console.log(html.includes('is94vhgs'));

// console.log(html.substring(-5));
// console.log(html.substring(1,5));

// console.log(html.slice(-4));
// console.log(html.slice(3,8));

// console.log(html.split(' '));

// console.log(html.replace('this','op'));

let fruits ='orange';
let fruits1='apple';
let myhtml = `hello ${name}
<h1>this is heading</h1>
<p> you like ${fruits} and ${fruits1}
`;
document.body.innerHTML=myhtml;