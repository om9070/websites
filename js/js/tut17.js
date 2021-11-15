console.log("this is tut17");

// document.getElementById('heading').addEventListener('click',function(){
//     console.log("you have to click the heading");
// // location.href='//google.com';
// });



document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log("you have to click the heading");
    variable = e.target;
    // variable=e.target.className;

    // variable=e.target.classList;
    variable = Array.from(e.target.classList);

    // variable=e.target.id;
variable=e.offsetX; //its show horizontal postion show
variable=e.offsetY;//its show vartical postion show

    console.log(variable);
    // location.href='//google.com';
});



document.getElementById('heading').addEventListener('mouseover', function (e) {
    let variable;
    console.log("you have to click the heading");
    
variable=e.offsetY;//its show vartical postion show

    console.log(variable);
   
});