console.log("this is tut31");
class employee{
    constructor(givenname,givenexprience,givendivision){
        this.name=givenname;
        this.exprience=givenexprience;
        this.division=givendivision;
    }
    slogan(){
        return `i am ${this.name} and this company is the best`;
    }
    joiningyear(){
        return 2020-this.exprience;
    }
    static add(a,b){
        return a+b;
    }
}


// op=new employee("pro",55,"division")
// console.log(op);
// console.log(op.slogan());
// console.log(op.joiningyear());


//its use for static function
// console.log(employee.add(12,12));




//attach object
class programmer extends employee{
    constructor(givenname,givenexprience,givendivision,langauge,github){
        super(givenname,givenexprience,givendivision);
        this.langauge=langauge;
        this.github=github;
    }
     favoritelangauge(){
        if(this.langauge=='python'){
            return 'python';
        }
        else{
            return 'javascript';
        }
    }
    static multiple(a,b){
        return a*b;
    }
}
rohan=new programmer("mohan",4,"lays","go","rohan20");
console.log(rohan);
console.log(rohan.favoritelangauge());
//its use for static
console.log(programmer.multiple(5,7));

