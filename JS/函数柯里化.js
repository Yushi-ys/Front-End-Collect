// 实现add(1)(2)(3)(4) = 10, add(1)(1, 2, 3)(2) =
// 概念：接收多个参数的函数变换成接收单一参数的函数,嵌套返回直到所有参数都被使用并返回最终结果

function add() {
    let args = [...arguments];
    let inner = function() {
        args.push(...arguments);
        return inner;
    }

    inner.toString = function() {
        return args.reduce((prev, item) => {
            return prev + item;
        }, 0)
    }

    return inner;
}
let res = add(1)(3)(5);
alert(res);