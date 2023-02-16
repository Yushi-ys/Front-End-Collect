// 1、工厂函数模式
function createFun1(name, age) {
  let obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.show = () => {
    console.log("我的名字是：" + name + ", 我的年龄是：" + age);
  };
  return obj;
}
let a = createFun1("涛涛", 17);
a.show();
console.log(a instanceof createFun1); // false
//发现没有关联，但是 a 确实是由这个工厂函数创造出来的，所以说工厂函数创造出来的对象没法标识，不知道对象的出处是哪里

// 2、构造函数模式
function CreateFun2(name, age) {
  this.name = name;
  this.age = age;
  this.show = () => {
    console.log("我的名字是：" + name + ", 我的年龄是：" + age);
  };
}
let b = new CreateFun2("涛涛", 18);
b.show();
console.log(b instanceof CreateFun2); // true

// 3、class
class createFun3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.show = () => {
      console.log("我的名字是：" + name + ", 我的年龄是：" + age);
    };
  }
}
let c = new createFun3("涛涛", 19);
c.show();
console.log(c instanceof createFun3); // true

// 4、Object.create
// 使用现有对象来创建新对象的__proto__
let obj = {
  name: "涛涛",
  age: 20,
};
let st = Object.create(obj);
st.name = "施静";
st.age = "29";
console.log(st);
console.log(st instanceof Object);
