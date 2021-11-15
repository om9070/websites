console.log("this is tut28");
let obj={
    name:'harry',
    channel:"code with harry",
    address:"mars",
}
// console.log(obj);



function obj1(givename){
    this.name=givename;
}

obj1.prototype.getname=function(){
    return this.name;
}

obj1.prototype.setname=function(newname){
    this.name=newname;
}

  let obj2=new obj1("pro");
console.log(obj2.setname("harijan"));
console.log(obj2)
// console.log(obj2.getname());
// console.log(obj2.name);

