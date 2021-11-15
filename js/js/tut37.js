console.log("this iis tut37");


//pretend that this response is coming from the server
const students = [
    { name: "om", subject: "javascript" },
    { name: "rohan", subbject: "machine learning" }
]


function enrollstudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log("student has been envolve");
        callback();
    }, 5000);
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
enrollstudent(newstudent, getstudent);

// getstudent();