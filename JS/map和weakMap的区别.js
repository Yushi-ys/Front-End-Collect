const map = new Map([
    ["foo", 1],
    ["bar", 2],
])
for (let item in map) {
    console.log(item);
}
for (let key of map.keys()) {
    console.log(key);
    //foo, bar
}

for (let val of map.values()) {
    console.log(val);
    //1, 2
}

for (let item of map.entries()) {
    console.log(item);
    //['foo', 1], ['bar', 2]
}
// keys()：返回键名的遍历器。
// values()：返回键值的遍历器。
// entries()：返回所有成员的遍历器。
// forEach()：遍历Map的所有成员。
// clear()：清空Map容器

let mp = new WeakMap([
    [{ name: "涛涛" }, 1],
    [{ name: "荣荣" }, 2],
]);
console.log(mp);
//键名必须是对象，键名所引用的对象都是弱引用，不计入垃圾回收机制，一旦不需要，键名和对应的值会自动消失