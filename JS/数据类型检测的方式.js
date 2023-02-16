//1、 typeof

console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof 'str'); // string
console.log(typeof []); // object    
console.log(typeof(function() {})); // function
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object

//2、instanceof
//可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型
//基础数据类型必须这么写 new Number、new String等等，如果直接let a = 1,a instanceof Number是检测不出来的
//因为instanceof是用来检测左边是不是右边的实例，一定要是个实例，即一定要new出来
//javascript里有规定，所有引用类型值都是Object的实例

console.log(2 instanceof Number); // false
console.log(true instanceof Boolean); // false 
console.log('str'
    instanceof String); // false 

console.log([] instanceof Array); // true
console.log(function() {}
    instanceof Function); // true
console.log({}
    instanceof Object); // true

// 判断一个对象在它的原型链中是否存在一个构造函数 prototype 属性

//3、constructor
//判断数据类型，通过构造函数判断，如果改变了它的原型，那么就不能用来判断了
function Fn() {};

Fn.prototype = new Array();

var f = new Fn();

console.log(f.constructor === Fn); // false
console.log(f.constructor === Array); // true

//改变原型
let person = {
    getGreeting() {
        return "Hello";
    }
};
let dog = {
    getGreeting() {
        return "Wang";
    }
};
// 原型为 person
let friend = Object.create(person);
console.log(friend.getGreeting()); // "Hello"
console.log(Object.getPrototypeOf(friend) === person); // true

// 将原型设置为 dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); // "Wang"
console.log(Object.getPrototypeOf(friend) === dog); // true