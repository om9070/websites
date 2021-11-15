console.log("this is tutorial27");

//object literal for create object 
let car={
    name: 'maruti 800',
    topspeed:89, 
   run:function(){
        console.log("car is runing");
    }
}
console.log(car);

//we have already seen constructors like these
//new date();

//creating a constructor for cars
function generalcar(givename,givespeed){
    this.name=givename;
    this.topspeed=givespeed;
    this.run=function(){
        console.log(`${this.name} is running`);
    }
    this.analyze=function(){
        console.log(`this car is slower by ${200-this.topspeed} km/h than mercedes`);
    }
}
car1=new generalcar('nissan',180);
car2=new generalcar('maruti alto',80);
car3=new generalcar('mercedes',380);

console.log(car1,car2,car3);

// console.log(car2.analyze());
// console.log(car2.run());
// console.log(car2.name);
