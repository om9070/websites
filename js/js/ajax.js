console.log('this is  ajax');

let fetchbtn=document.getElementById('fetchbtn');
fetchbtn.addEventListener('click',buttonclickhander);

function buttonclickhander(){
    console.log("yu have click fetch btn");
    //instatiate an xhr object
    const xhr= new XMLHttpRequest();

    //open the object(it get request)
    xhr.open('GET','harry.txt',true);
    // xhr.open('GET','harry1.txt',true);
     
    //its post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');



    //what to do progress(optional)
    xhr.onprogress=function(){
        console.log("on progress");
    }

    // xhr.onreadystatechange=function(){
    //     console.log('ready state',xhr.readyState)
    // }


//whta to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
// search = HTTP status codes
            console.log(this.responseText)
        }
        else{
            console.log("some error occured");
        }
    }

    //send request
    params = `{"name":"test34sad545","salary":"123"}`;
    xhr.send(params);


    console.log("we are done");
}





let poplate=document.getElementById('backupbtn');
poplate.addEventListener('click',pophander);

function pophander(){

    console.log("yu have click pop btn");
    //instatiate an xhr object
    const xhr= new XMLHttpRequest();

    //open the object(it get request)
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
  



   
//whta to do when response is ready
    xhr.onload=function(){
        if(this.status===200){
// search = HTTP status codes
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            str="";
            for(key in obj){
                str += `<li>${obj[key].employee_name}</li>`;

            }
            list.innerHTML=str;

        }
        else{
            console.log("some error occured");
        }
    }

    //send request
   
    xhr.send();


    console.log("we are done");
}


