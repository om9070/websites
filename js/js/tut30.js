console.log("this is tut30");
const proto={
    slogan:function(){
        return `this company is the best`;
    },
    changename:function(newname){
        this.name=newname;
    }
}
//this create object
const harry=Object.create(proto);
harry.name="pro";
harry.role="programmer";
harry.changename("pro3.0")
// console.log(harry);

//employee constructor
function employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;
}
//slogan
employee.prototype.slogan=function(){
    return `this company is the best regaerd ${this.name} `;
}

let harryobj= new employee('pro',58625,8);
console.log(harry);
console.log(harryobj.slogan());

//programmer
function programmer(name,salary,experience,langauge){
    employee.call(this,name,salary,experience);
    this.langauge=langauge;
}
//insert prototype
programmer.prototype=Object.create(employee.prototype);


//maunual set the construction
programmer.prototype.constructor=programmer;
let rohan=new programmer("rohan",4,0,"c-langaues");
console.log(rohan);


