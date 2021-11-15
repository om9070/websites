console.log("this is tut25");
/*
you have to create  a div and inject it into the page which contains a heading.
whenever some click on the div ,it should be converted into an editable item.wheneveruser click aways (blur).save into local storage. 
*/
let divelm=document.createElement('div');

let val=localStorage.getItem('text');
let text;
if(val==null)
{
text=document.createTextNode('thisi is my element .click to edit if');
}
else{
    text=document.createTextNode(val);
}

divelm.append(text);

divelm.setAttribute('class','elem');
divelm.setAttribute('id','elem');


divelm.setAttribute('style','border:2px solid red; width: 154; margin: 34px; padding: 23px;');


let container=document.querySelector('.container');
let frist=document.getElementById('myfrist');


//insert the element before element with id frist
container.insertBefore(divelm,frist);
console.log(divelm,container,frist);

//add event lisener to the divelm
divelm.addEventListener('click',function(){
    let notextarea=document.getElementsByClassName('textarea').length;
    if(notextarea==0){
    let html=elem.innerHTML;
    divelm.innerHTML= `<textarea class=" textarea form-control" class="textarea" id="textarea" rows="3">${html}</textarea>`;
    }

    //listen for the blur event on textarea
    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.value;
        localStorage.setItem('text',textarea.value);
    })
})



