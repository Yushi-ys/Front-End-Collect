// async/await本质上就是一个语法糖，底层实现是带有执行器的 Generator 函数
// async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await

// await 后的异步操作出错，等同于async函数返回的 Promise 对象被reject，所以最好把await 命令放在 try...catch