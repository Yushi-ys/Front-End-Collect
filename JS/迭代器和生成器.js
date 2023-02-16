// 迭代器实质上是一个接口通过Symbol.iterator来创建迭代器
// 通过迭代器的next() 方法获取迭代之后的结果
let arr = [1, 3, 5, 2, 4];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next()); //{value: 1, done: false}
// 值 和 是否遍历完成

// generator函数， 可以通过yield关键字， 将函数挂起， 为了改变执行流同时为了异步编程
// 带有 yield 关键字的函数叫生成器（generator），可以暂停/恢复一个函数的执行过程
// 分段执行，yield语句可以暂停执行，next()可以恢复执行
function* func(name) {
    yield name;
    yield name + '?';
};
//返回一个遍历器对象
let ans = func('涛涛');
console.log(ans); //func {<suspended>}
console.log(ans.next()); //1 {value: '涛涛', done: false} 
console.log(ans.next()); //2 {value: '涛涛?', done: false} 

function* add() {
    let x = yield 1;
    let y = yield 2;
    return x + y;
}
let fn = add();
console.log(fn.next()); //{value: 1, done: false}
console.log(fn.next(10)); //{value: 2, done: false}
console.log(fn.next(30)); //{value: 40, done: true}
// x 和 y是next()调用，恢复当前yield()执行传入的实参
// 第一个next遇到yield停止，第二个next让yield执行，然后又遇到yield停止，第三个nextragyield继续执行

// 使用场景，为不具备iterator接口的对象提供了遍历操作
const obj = {
    name: '涛涛',
    age: 18
};

function* myObjectEntries(obj) {
    //获取对象所有的key，保存到数组中
    let allKeys = Object.keys(obj);
    for (const k of allKeys) {
        yield [k, obj[k]];
    }
};
obj[Symbol.iterator] = myObjectEntries;
for (const [k, v] of myObjectEntries(obj)) {
    console.log(k, v);
}
// name 涛涛
// age 18

// 事实上也是对Object.entries()方法的重写

function* main() {
    let res = yield request('https://movie.querydata.org/api?id=33410979');
    console.log(res);
    console.log("请求数据完成，可以继续操作");
}
const iterator = main();
iterator.next(); // 走到yield停下

function request(url) {
    axios.get(url).then((res) => {
        iterator.next(res); // 继续执行，返回res给main里的res
    });
};
// 作用：异步操作同步化