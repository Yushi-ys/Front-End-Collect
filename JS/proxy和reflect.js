let obj = {
  name: '涛涛',
  age: '17',
}
let proxy = new Proxy(obj, {
  get(target, propName) {
    if (propName == 'name') {
      return '不告诉你';
    }
    return Reflect.get(target, propName);
  },
  set(target, propName, value) {
    console.log(propName + '属性被修改了');
    Reflect.set(target, propName, value);
  }
});

obj.name = '啊这';
console.log(obj);