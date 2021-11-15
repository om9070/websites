console.log("this is tut43");

async function harry() {
    console.log("inside print")
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json()
    console.log("user resolved")
    return users;
    // return "harry";
}
console.log("before calling pro");
let a = harry();
console.log("after calling noob")
console.log(a);
a.then(data => console.log(data))
console.log("last line print")