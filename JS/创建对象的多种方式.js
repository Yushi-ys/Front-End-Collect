/**
 * 对象字面量模式
 */
const obj = {
  name: "AntGroup",
  show: () => {
    console.log("obj.name:", obj.name);
  },
};
obj.show();
// 适用场景：对象数据内部数据是固定的
// 缺点：创个多个对象时，会产生重复代码

/**
 * 工厂函数
 */
function createFunction(name) {
  const obj = new Object();
  obj.name = name;
  obj.show = () => console.log("obj1.name:", name);
  return obj;
}
const obj1 = createFunction("涛涛");
obj1.show();
// console.log(obj1 instanceof createFunction);
// 为 false, 这是工厂函数的缺点, 工厂函数创造出来的对象没法标识, 不知道对象的出处在哪里

/**
 * 构造函数
 */
class CreateFun2 {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log("obj2.name:", this.name);
  }
}
const obj2 = new CreateFun2("余时");
obj2.show();
// console.log(obj2 instanceof CreateFun2);
// true
