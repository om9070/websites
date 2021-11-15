// cheak localStorage=inspect>application>localStorage>Http...
let imarray=['adrakh','aalu','bindi','pyaz'];


console.log("this is tut20");
//its use in console-(window.localstorage),(window.localstorage)
// localStorage.setItem('name','harry');
// localStorage.setItem('name1','pro');
// localStorage.setItem('sabji',JSON.stringify(imarray)
// );
//localStorage.clear();//clean the local storang

localStorage.removeItem('name');//clear a particular key-value pair

// let name=localStorage.getItem('name');
// console.log(name);

let name=JSON.parse(localStorage.getItem('sabji'));
console.log(name);

/*its provied null*/
// let name=localStorage.getItem('name154516');
// console.log(name);



/**new line */

// sessionStorage.setItem('sessionname1','pro');
// sessionStorage.setItem('sesssionname','harry');
// sessionStorage.setItem('sessionsabji',JSON.stringify(imarray)
// );