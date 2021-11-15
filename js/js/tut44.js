console.log("this is tut44");
//pretend this is coming from a server as response
let a = "harry bhai";
a = undefined;
if (a != undefined) {
    throw new Error("this is not define");
} else {
    console.log("this is define");
}

try {
    // hkshuibi
    console.log("we are in try block");
    // functionharry();
} catch (error) {
    console.log("are y ok");
    // console.log(error.name);
    // console.log(error.message);

} finally {
    console.log("finally we will  run this");
}