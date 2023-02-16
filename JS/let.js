let a = "123";
let a = 1;
// Identifier 'a' has already been declared

{
    let b = 1;
}
console.log(b);
//st is not defined

console.log(c);
let c = 1;
//Cannot access 'mySon' before initialization


// 1、 变量不能重复声明
// 2、 块级作用域
// 3、不存在变量提升(有争议)

// let同样存在变量提升， 只是形式与var不同
// var定义的变量将会被赋予undefined的初始值
// 而let在被显式赋值之前不会被赋予初始值， 并且在赋值之前读写变量都会导致 ReferenceError 的报错
// 从代码块(block) 起始到变量求值(包括赋值) 以前的这块区域， 称为该变量的暂时性死区

var x = 'parent value';
(function() {
    // let x 此时暂时性死区开始
    console.log(x); // Uncaught ReferenceError: x is not defined
    //暂时性死区结束
    let x = 'child value'
}())