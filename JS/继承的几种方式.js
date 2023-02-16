function Father(name) {
    // 属性
    this.name = name || '->father';
    // 实例方法
    this.sayName = function() {
        console.log(this.name);
    }
}

// 1、原型链继承：将父类的实例作为子类的原型
function Sun1() {};
Sun1.prototype = new Father();
let sun1 = new Sun1();
console.log(sun1.name); //'->father'

// 2、构造继承：复制父类的实例属性给子类
function Sun2() {
    Father.call(this);
};
let sun2 = new Sun2();
console.log(sun2.name); //'->father'

// 3、实例继承：为父类实例添加新特征，作为子类实例返回
function Sun3() {
    let f = new Father();
    return f;
};
let sun3 = new Sun3();
console.log(sun3.name); //->father

// 4、拷贝继承：对父类实例中的的方法与属性拷贝给子类的原型
function Sun4() {
    let f = new Father();
    for (let k in f) {
        Sun4.prototype[k] = f[k];
    }
}
let sun4 = new Sun4();
console.log(sun4.name); //->father

// 5、class继承
class Sun5 extends Father {};
let sun5 = new Sun5();
console.log(sun5.name); //->father