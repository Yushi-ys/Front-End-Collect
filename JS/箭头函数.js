/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-07 22:13:31
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-07 22:41:05
 * @Description: 箭头函数
 */
const obj = {
  show: function () {
    console.log(this);
  },
  print: () => {
    console.log(this);
  },
};

obj.show(); // {show: f, print: f}
obj.print(); // window

// 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。

const fn = () => {
  console.log(arguments);
};

fn([1, 2, 3]); // 报错，箭头函数没有 arguments

function foo(arg1, arg2) {
  const f = (...args) => args[1];
  return f(arg1, arg2);
}
foo(1, 2); //2
// 使用剩余参数是相较使用arguments对象的更好选择


// 因为没有 this ，所以不能作为构造函数

// 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数