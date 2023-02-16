function People(name) {
    this.name = name;
    this.show = () => {
        console.log(this.name);
    }
}

function myNew(fn, args) {
    let obj = Object.create(fn.prototype);
    let res = fn.call(obj, args);
    return res instanceof Object ? res : obj;
}

let st = myNew(People, "涛涛");
st.show();

1. 以构造器的prototype属性为原型， 创建新对象
2. 将空对象作为构造函数的上下文（ 改变this指向）
3. 对构造函数有返回值的判断