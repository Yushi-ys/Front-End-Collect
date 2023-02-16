let s1 = "abcdrfg";
let s2 = new String('abcdefg');

console.log(typeof(s1)); //string
console.log(typeof(s2)); //object

console.log(s1 instanceof String); //false
console.log(s2 instanceof String); //true

let str = "012345678987654321";
console.log(str.indexOf("7")); //7
console.log(str.lastIndexOf("2")); //16

//手写indexOfAll
function indexOfAll(str, x) {
    let arr = [];
    Array.from(str).forEach((item, index) => {
        if (item == x && !arr.includes(index)) {
            arr.push(index);
        }
    })
    return arr;
}
console.log(indexOfAll(str, 8));

//slice[起始位置, 结束为止) 并返回一个新的字符串, 不会修改原字符串
let p = str.slice(2, 4);
console.log(p);

//substr(起始位置, 截取长度) 返回新字符串, 不会修改原字符串
let q = str.substr(2, 4);
console.log(q);

//类似于slice, 但不接受负的索引
let a = str.substring(2, 4);
console.log(a);