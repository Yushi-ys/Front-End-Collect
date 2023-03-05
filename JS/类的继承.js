/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 18:05:19
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 18:16:07
 * @Description: 类的继承方式
 */
function Father(name) {
  // 属性
  this.name = name || "->father";
  // 实例方法
  this.sayName = function () {
    console.log(this.name);
  };
}

// 1.原型链继承
function Sun1() {}
Sun1.prototype = new Father();
const sun1 = new Sun1();
sun1.sayName(); // ->father

// 2.构造继承
function Sun2() {
  Father.call(this);
}
const sun2 = new Sun2();
sun2.sayName(); // ->father

// 3.实例继承
function Sun3() {
  return new Father();
}
const sun3 = new Sun3();
sun3.sayName(); // ->father

// 4.拷贝继承
function Sun4() {
  const f = new Father();
  for (const k in f) {
    Sun4.prototype[k] = f[k];
  }
}
const sun4 = new Sun4();
sun4.sayName(); // ->father

// 5.class继承
class Sun5 extends Father {}
const sun5 = new Sun5();
sun5.sayName(); // ->father
