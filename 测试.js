const obj = {
  name: "徐夕雯",
  age: 25
}

const proxyObj = new Proxy(obj, {
  set(target, propName, value) {
    console.log(`设置${propName}属性为${value}`);
    Reflect.set(target, propName, value);
    return true;
  },

  get(target, propName) {
    console.log(`获取${propName}属性`);
    return Reflect.get(target, propName);
  }

})

console.log(proxyObj.age);

proxyObj.name = '涛涛'

const obj2 = {
  name: "徐夕雯",
  get getValue() {
    return this.name
  }
}

const temp = { name: 123 }

const val1 = obj2.name
const val2 = Reflect.get(obj2, 'getValue', temp)
console.log(val1);
console.log(val2);
