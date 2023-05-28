/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-02 00:04:24
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-02 23:35:48
 * @Description: 接收多个参数的函数变换成接收单一参数的函数,嵌套返回直到所有参数都被使用并返回最终结果
 */

// 实现add(1)(2)(3)(4) = 10, add(1)(1, 2, 3)(2) =
const curry = function (fn) {
  const args = [];
  return function curried() {
    args.push(...arguments);
    if (args.length === fn.length) return fn(...args);
    return curried;
  };
};

function sum(a, b, c) {
  return a + b + c;
}
const add = curry(sum);
let res = add(1)(3)(5);

console.log(res); // 9
