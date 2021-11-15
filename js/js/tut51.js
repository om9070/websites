console.log("this is tut51");

//iterator
function fruitsinterator(value) {
    let nextinde = 0;
    return {
        next: function() {
            if (nextinde < value.length) {
                return {
                    value: value[nextinde++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }

    }
}
const myarray = ['apple', 'grapes', 'orange', 'bhindi'];
console.log(myarray);


// using the iterator
const fruits = fruitsinterator(myarray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);