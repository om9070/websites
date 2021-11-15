// Promise:best video
// -resolve
// -reject
// -pending

function fun1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("function: your promise has been resolved");
                resolve();
            } else {
                console.log("function: your promise has not been resolved");
                reject('sorry not fulfilled');
            }
        }, 2000);
    })
}


fun1().then(function() {
    console.log("harry: thanks for resolving")
}).catch(function(error) {
    console.log("op: not bad dud " + error)
})