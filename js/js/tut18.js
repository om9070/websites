console.log("this is tut18");
// let btn=document.getElementById('btn');

// //single click
// btn.addEventListener('click',func1);
// function func1(e){
//     console.log("thankas",e);
//     e.preventDefault();

// }


// //double click
// btn.addEventListener('dblclick',func2);
// function func2(e){
//     console.log("thankas for double click",e);
//     e.preventDefault();
// }

// //scroll mouse 
// btn.addEventListener('mousedown',func3);
// function func3(e){
//     console.log("thankas for mouse down",e);
//     e.preventDefault();
// }



//hover function worked quaryseleter
// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("you enter no");
// })


// //leave function worked queryselecter
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("you exit no");
// })


//its count mouse movement only work row of class
// document.querySelector('.no').addEventListener('mousemove',function(){
//     console.log("you used mouse move event");
// })



document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},${e.offsetY},153)`;
    console.log("you used mouse move event");
})