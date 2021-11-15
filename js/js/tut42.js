console.log("this is tut42 and fetch api");

let mybtn = document.getElementById('mybtn');

let content = document.getElementById('content');

// function getdata() {
//     console.log("stared get data runing");
//     url = "harry.txt";
//     fetch(url).then((response) => {
//         console.log("inside frist then");
//         return response.text();
//     }).then((data) => {
//         console.log("inside second then");
//         console.log(data);
//     })
// }

// console.log("before runing get data");
// getdata();
// console.log("after runing get data");




//url=api.github.com/users for get api
function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = { "name": "test", "salary": "4", "age": "23" }
    params = {
        method: 'post',
        Headers: {
            'content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json()).then(data => console.log(data))
}
postData()