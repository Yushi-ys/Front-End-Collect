const obj = {
  name: "涛涛",
  age: "23",
};

const proxy = new Proxy(obj, {
  get(target, propName) {
    if (propName === "name") return "被拦截了";
    return Reflect.get(target, propName);
  },
  set(target, propName, value) {
    Reflect.set(target, propName, value);
    return true;
  },
});

console.log(proxy.name);

proxy.age = '20';
console.log(proxy);

/*
Proxy相比defineProperty的优势
1.defineProperty对某个属性，执行多次监听，会报错，这对于底层的封装来说很不好，不够健壮
需要把所有有可能出错的地方用try catch去包裹住，否则的话一个地方错了，整个代码都报错了
但是Reflect不会，会以第一次为准。
2.Reflect的拦截有返回值，可以更好的知道了是否拦截处理成功，并且指定this
*/

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
