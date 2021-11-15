let a=document.links;
Array.from(a).forEach(function(element){
    if(element.textContent.includes('code')){

        console.log(element.textContent);
    }
})