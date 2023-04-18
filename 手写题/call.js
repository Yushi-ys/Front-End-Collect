Function.prototype._call = function (obj, ...args) {
  obj = obj || window;
  obj.p = this;
  const res = obj.p(...args);
  delete obj.p;
  return res;
};

class Student {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.name);
  }
}
const stu = new Student("涛涛");
stu.show(); // 涛涛

class Demo {
  name = "demo";
}
stu.show._call(Demo); // Demo


// 顺便写一下 apply
Function.prototype._apply = function (obj, args) {
    obj = obj || window;
    obj.p = this;
    const res = obj.p(args);
    delete obj.p;
    return res;
  };