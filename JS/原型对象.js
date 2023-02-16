//__proto__ 获取对象上的原型
let people = {
    name: "涛涛",
}
people.__proto__.age = 17;
console.log(people.age); //17


//prototype 获取构造函数上的原型
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.show = function() {
        console.log(this.name, this.age);
    }
}
let xiaoming = new Student();
xiaoming.name = "小明";
xiaoming.age = 18;
console.log(xiaoming); //Student {name: '小明', age: 18, show: ƒ}
xiaoming.show(); //小明 18
Student.prototype.gender = "男";
console.log(xiaoming.gender); //男


//基于原型的继承
function Person() {};
Person.prototype = new Student();
let xiaohong = new Person();
xiaohong.name = "小红";
xiaohong.age = 20;
console.log(xiaohong); //Person {name: '小红', age: 20}
xiaohong.show(); //小红 20


//优先级之分
let obj = {
    show() {
        console.log("我是自身的方法");
    }
}
obj.__proto__.show = () => {
    console.log("我是原型链上的方法");
}
obj.show(); //我是自身的方法