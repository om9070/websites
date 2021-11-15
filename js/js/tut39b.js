console.log("this iis tut37");


//pretend that this response is coming from the server
const students = [
    { name: "om", subject: "javascript" },
    { name: "rohan", subbject: "machine learning" }
]


function enrollstudent(student) {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            students.push(student);
            console.log("student has been envolve");
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 5000);
    })
}

function getstudent() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`;
        })
        document.getElementById("student").innerHTML = str;
        console.log("student have been fetch");

    }, 1000);
}

let newstudent = { name: "sunny", suject: "python" }
    // enrollstudent(newstudent).then(function() {
    //     getstudent();
    // }).catch(function() {
    //     console.log("some error")
    // })

enrollstudent(newstudent).then(getstudent).catch(function() {
    console.log("some error")
});


//function inside then is run as-resolve();
//function inside catch is run as-reject();