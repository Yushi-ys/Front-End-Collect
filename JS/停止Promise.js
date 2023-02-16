// Promsie.race
let p1 = new Promise((resolve, reject) => {
    resolve('ok1')
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('ok2') }, 10)
})

Promise.race([p2, p1]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

// 抛出一个错误
Promise.resolve().then(() => {
    console.log('ok1')
    throw 'throw error1'
}).then(() => {
    console.log('ok2')
}, err => {
    // 捕获错误
    console.log('err->', err)
}).then(() => {
    // 该函数将被调用
    console.log('ok3')
    throw 'throw error3'
}).then(() => {
    // 错误捕获前的函数不会被调用
    console.log('ok4')
}).catch(err => {
    console.log('err->', err)
})


// （1）可以很好地解决异步编程，将异步操作以同步操作的流程表达出来

// （2）让回调函数变成更加规范的链式写法，避免了层层嵌套的回调“地域”

// （3）可以处理并行任务，提供统一的对外接口