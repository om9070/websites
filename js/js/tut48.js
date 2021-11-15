console.log("this is tut48");

// character set
// const regex = /h[a-z]rry/;//can be any character from a to z
// const regex = /h[rby]rry/;//can be an r,b or y
// const regex = /h[^rba]rry/; //can not be r,b or a
// const regex = /h[a-zA-Z]rr[yul0-9]/;


//quantifiers
// const regex = /har{2}y/;//r can occur exactly 2 times
// const regex = /har{0,2}y/; //r can occur exactly 0 to 2(0,1,2) times


//grouping -we use paranthes for grouping
const regex = /(har){2}([0-9]r){3}/; //2(har)(0-9){3} show three bar

// str = "harry bro"
const str = "harhar3r4r7r bro";


let result = regex.exec(str);
console.log("the result from exec is ", result);

if (regex.test(str)) {
    console.log(`the string ${str}matches the  expression ${regex.source}`);
} else {
    console.log(`the string ${str} does not matches the  expression ${regex.source}`);

}