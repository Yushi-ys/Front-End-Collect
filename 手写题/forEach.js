/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-02 22:43:40
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-03 21:09:49
 * @Description: 手写forEach
 */

/**
 * 手写forEach
 * @param {Function} fn
 * @returns null
 */
Array.prototype._forEach = function (fn) {
  const arr = this;
  const _this = arguments[1] || window;
  if (typeof fn === "function") {
    for (let i = 0; i < arr.length; i++) {
      fn.apply(_this, [arr[i], i, arr]);
    }
  } else {
    throw new Error("入参须为函数");
  }
};

const obj = {
  arr: [2, 5, 4, 0, 8, 9],
  show: function () {
    [0, 0, 0, 0, 0, 0]._forEach(function (item, index) {
      console.log(this[index]);
    }, this.arr);
  },
};

obj.show();

// output:
// 2
// 5
// 4
// 0
// 8
// 9