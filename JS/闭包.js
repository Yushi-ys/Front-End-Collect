/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-06 23:18:56
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-06 23:35:04
 * @Description: 闭包
 */

"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures";

// 闭包让开发者可以从内部函数访问外部函数的作用域
// 在 JavaScript 中，闭包会随着函数的创建而被同时创建

function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  function displayName() {
    // displayName() 是内部函数，一个闭包
    console.log(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();

/*
init() 创建了一个局部变量 name 和一个名为 displayName() 的函数。
displayName() 是定义在 init() 里的内部函数，并且仅在 init() 函数体内可用
displayName() 没有自己的局部变量
然而，因为它可以访问到外部函数的变量，所以 displayName() 可以使用父函数 init() 中声明的变量 name
*/

("======================================================================================================");

function makeFunc() {
  var name = "Mozilla";
  return function displayName() {
    console.log(name);
  };
}

var myFunc = makeFunc();
myFunc();

/*
在 JavaScript 中，闭包是由函数以及声明该函数的词法环境组合而成的，该环境包含了这个闭包创建时作用域内的任何局部变量
在上面例子中，myFunc 是执行 makeFunc 时创建的 displayName 函数实例的引用
*/

("======================================================================================================");

/*
在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。
原因是这将导致每次构造器被调用时，方法都会被重新赋值一次（也就是说，对于每个对象的创建，方法都会被重新赋值）
*/
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
}

// 在上面的代码中，我们并没有利用到闭包的好处，因此可以避免使用闭包。修改成如下：

function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
