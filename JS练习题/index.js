(function() {
    var a = b = 3;
    //b = 3, var a = b
})();
// 结果：a未定义报错，b = 3



var F = function() {}
Object.prototype.a = function() {
    console.log('a()')
}
Function.prototype.b = function() {
    console.log('b()')
}
var f = new F()
F.a()
F.b()
f.a()
f.b()

// a()
// b()
// a()
// Uncaught TypeError:f.b is not a function
// F是一个构造函数， 所以F instanceof Object === true、 F instanceof Function === true
// 所以F既可以访问到a， 也可以访问到b
// 而f是F的一个实例， 本身不是构造函数， 所以只能访问Object的prototype， 因为万物皆对象


function fn1() {
    let fn2 = function() {
        console.log(this); //window
        fn3();
    };
    console.log(this); //window
    fn2();
};

function fn3() {
    console.log(this); //window
};
fn1();
// 代码中无论函数声明在哪，在哪调用，由于函数调用时前面并未指定任何对象，这种情况下this指向全局对象window
// fn1 fn2 fn3被调用时, 都未指定对象, 等于没说被谁调用, 所以this全部指向window

function fn1() {
    let fn2 = function() {
        console.log(this); //window
        fn3();
    };
    console.log(this); //func: ƒ
    fn2();
};

function fn3() {
    console.log(this); //window
};
let obj = {
    func: fn1
}
obj.func();
// obj这个对象调用了func方法, func即为fn1, 所以fn1里的this指向调用它func


var A = { n: 4399 };
var B = function() { this.n = 9999 };
var C = function() { var n = 8888 };
B.prototype = A;
C.prototype = A;
var b = new B();
var c = new C();
A.n++;
console.log(b.n);
console.log(c.n);
// B是构造函数， new出来的b自身携带n属性， 所以就不会往原型链上去找， 所以b.n还是9999
// 但是C的n不能被new出来的c继承，只是在函数中创建了一个私有变量
// new出来的c自身没有任何属性，原型链上有n，所以c.n是4400