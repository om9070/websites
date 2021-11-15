console.log("welcome to my project");
shownotes();
//if user adds a notes it to the localstorage
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){

    let addtxt=document.getElementById("addtxt");
    let addtitle=document.getElementById("addtitle");//tut21
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    let myobj={//tut21
        title: addtitle.value,
        text: addtxt.value,
    }
    notesobj.push(myobj);//tut21
    // notesobj.push(addtxt.value);

    localStorage.setItem("notes",JSON.stringify(notesobj));
    addtxt.value="";
    addtitle.value="";
    // console.log(notesobj);
    shownotes();

})
//function to show element from loctaion 
function shownotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
let html="";
notesobj.forEach(function(element,index){
html+=`


      <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">note ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">delete  node</button>
        </div>
      </div>

`;
});
let noteselm=document.getElementById("notes");
if(notesobj.length != 0){
    noteselm.innerHTML=html;
}
else{
    noteselm.innerHTML=`nothing to show use "add a notes" section above to add notes `;
}
}


//function to delete 

function deletenote(index){
    // console.log("I am delete",index );
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }

notesobj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesobj));
shownotes();
}

let search=document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputval=search.value.toLowerCase();
    // console.log("input even fair",inputval);
 let notecard=document.getElementsByClassName("notecard");
 Array.from(notecard).forEach(function(element){
     let cardtxt=element.getElementsByTagName("p")[0].innerText;
    //  console.log(cardtxt);
    if(cardtxt.includes(inputval)){
        element.style.display="block";

    }
    else{
        element.style.display="none";

    }
 })
})




/*


*/