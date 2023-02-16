class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    fn() {
        console.log("我是Student类的方法");
    }
}
let st = new Student();
st.name = "涛涛";
st.age = 17;
console.log(st);
class Obj extends Student {
    constructor(name, age, words) {
        super(name, age);
        this.words = words;
    }
    show() {
        console.log(this.words);
    }
    fn() {
        console.log("我是Obj类的方法");
    }
    static sing() {
        console.log("我是只属于Obj的静态方法");
    }
    set extra(value) {
        console.log(this.words + value);
    }
    get extra() {
        return this.words;
    }
}
let obj = new Obj();
obj.words = "this is words"
obj.extra = "666";
console.log(obj.extra);
obj.show();
Obj.sing();
obj.fn();
//class 和传统的构造函数一样，都是基于原型继承的构造函数模式


// class私有属性的保护
class User {
    // 被保护的属性，名义上的约定，在变量前加下划线，就不要对这个私有属性进行设置
    _name
    set name(val) {
        if (val.length > 3) {
            throw new Error('名字长度超出限制')
        }
        this._name = val;
    }
    get name() {
        return this._name;
    }
}
let st = new User('涛涛');
console.log(st.name = '涛涛子'); // 涛涛子
console.log(st.name = '涛涛子啊'); // Uncaught Error: 名字长度超出限制

const p = new WeakMap();
class User {
    constructor() {
        p.set(this, '涛涛');
    }
    set name(val) {
        if (val < 0 || val > 100) {
            throw new Error('请输入合法的年龄');
        }
        p.set(this, val);
    }
    get name() {
        return p.get(this);
    }
}
let me = new User('涛涛');
p.set(me, 'abc');
console.log(me.name);

// class类与构造函数区别：

// （ 1） class内部定义的方法都是不可枚举的（ non - enumerable）， ES5中prototype的方法是可枚举的

// （ 2） class必须使用new调用， 否则会报错

// （ 3） 继承： class用extends实现继承