let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolve");
        // reject("p1 reject");
    }, 2000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolve");
        // reject("p2 reject");
    }, 1000);
});

//all
//Promise.all 可以将多个 Promise 实例包装成一个新的 Promise 实例
//成功的时候返回一个结果数组，失败的时候返回最先被 reject 失败状态的值
Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let len = promises.length;
        let results = new Array(len);
        let cnt = 0;
        promises.forEach((item, index) => {
            Promise.resolve(item).then((res) => {
                results[index] = res;
                if (++cnt == len) {
                    return resolve(results);
                }
            }).catch((err) => {
                return reject(err);
            })
        })
    })
}
Promise.myAll([p1, p2]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


//allSetted
//Promise.allSettled 会把所有结果按顺序返回回来
Promise.myAllSetted = function(promises) {
    return new Promise((resolve, reject) => {
        let len = promises.length;
        let cnt = 0;
        let results = new Array(len);
        promises.forEach((item, index) => {
            Promise.resolve(item).then((res) => {
                results[index] = res;
                if (++cnt == len) {
                    return resolve(results);
                }
            }).catch((err) => {
                results[index] = err;
                if (++cnt == len) {
                    return reject(results);
                }
            })
        })
    })
}
Promise.myAllSetted([p1, p2]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

//any
//如果传入的实例中，有一处为resolve，那么返回的 promise 实例状态立即变为resolve
//如果所有实例均为reject，那么返回的promise为reject
Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
        let cnt = 0;
        let len = promises.length;
        let results = new Array(len);
        promises.forEach((item, index) => {
            Promise.resolve(item).then((res) => {
                return resolve(res);
            }).catch((err) => {
                results[index] = err;
                if (++cnt == len) {
                    return reject(results);
                }
            })
        })
    })
}
Promise.myAny([p1, p2]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((item) => {
            Promise.resolve(item).then((res) => {
                return resolve(res);
            }).catch((err) => {
                return reject(err);
            })
        })
    })
}
Promise.myRace([p1, p2]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})