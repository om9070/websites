let arr = "4358348a84543ghjh";
// let str = +arr;
// console.log(arr, (typeof arr));
// console.log(str, (typeof str));
const chars = {};
for (let char of arr) {
    chars[char] = chars[char] + 1 || 1;
}
console.log((chars), typeof chars)