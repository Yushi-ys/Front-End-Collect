setTimeout(() => {
    new Promise((resolve, reject) => {
        resolve("2");
        console.log("6");
    }).then((res) => {
        console.log(res);
    })
    console.log("5");
}, 1000);

new Promise((resolve) => {
    console.log("3");
    resolve();
}).then(() => {
    console.log("4");
})

console.log("1");
//3 1 4 6 5 2
//同步任务 微任务 宏任务

/*
同步
异步： 宏任务(setTimeout, setInterval, Ajax) 和微任务(Promise, async / await)
微任务 先于 DOM渲染
DOM渲染 先于 宏任务
*/