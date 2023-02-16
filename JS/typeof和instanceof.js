// typeof 用来检测数据类型

console.log(typeof(1));
//number

console.log(typeof(null));
//object

console.log(typeof(undefined));
//undefined

console.log(typeof(false));
//boolean

var x = 3,
    x = Symbol();
console.log(x);
//Symbol()

console.log(typeof("string"));
//string

console.log(typeof(new Object()));
//object



// instanceof用来检测左边的是否是右边的实例，检测构造函数的prototype属性是否出现在某个实例对象的原型链上

a = new Number(10);
console.log(a instanceof Number); //true

b = new String("st");
console.log(b instanceof String); //true

c = new Array(1, 10, 100);
console.log(c instanceof Array); //true

d = new Object();
console.log(d instanceof Object); //true

e = new Boolean();
console.log(e instanceof Boolean); //true