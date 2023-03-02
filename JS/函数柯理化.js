/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-02 00:04:24
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-02 23:35:48
 * @Description: 接收多个参数的函数变换成接收单一参数的函数,嵌套返回直到所有参数都被使用并返回最终结果
 */

// 实现add(1)(2)(3)(4) = 10, add(1)(1, 2, 3)(2) =
function add() {
  const args = [...arguments];
  const inner = function () {
    args.push(...arguments);
    return inner;
  };

  // 重写 toString 方法
  inner.toString = function () {
    return args.reduce((prev, item) => {
      return prev + item;
    }, 0);
  };

  return inner;
}
let res = add(1)(3)(5);
// console.log(res.toString());
// 或者
alert(res);
