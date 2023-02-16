let fn = () => {
    return this.name;
}
var name = "我是window的变量";
let obj = {
    name: "我是obj的变量"
}

let a = fn();
console.log(a);

let b = fn.call(obj);
console.log(b);
//1、this始终指向函数声明所在作用域


let People = (name, age) => {
    this.name = name;
    this.age = age;
}
let st = new People("涛涛", 21); //People is not a constructor
//2、不能作为构造函数
// 为什么？
// 1、 不支持call() / apply() 函数的特性， call和apply作用是改变this指向， 但是箭头函数没有自己的this， 所以这两函数没法改变箭头函数的指向
// 2、不绑定arguments
// 3、没有prototype属性

let show = () => {
    console.log(arguments);
}
show(1, 2, 3); //arguments is not defined at show
//3、没有自己的arguments

// 它的this、arguments都是在定义函数时绑定外层的this和arguments，而不是在执行过程中绑定的，所以不会因为调用者不同而发生变化