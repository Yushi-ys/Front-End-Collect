// 1、 回调函数
// 假设有两个函数， 后者等待前者的执行结果
f1();
f2();

//如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。
function f1(callback) {
    setTimeout(function() {
        // f1的任务代码
        callback();
    }, 1000);
}

//执行代码就变成下面这样：
f1(f2);


// 2、 Promise
let p = new Promise((resolve, reject) => {
    reject('reject')
    resolve('success') //无效代码不会执行
})
p.then(
    value => {
        console.log(value)
    },
    reason => {
        console.log(reason) //reject
    }
)