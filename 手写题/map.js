/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-04 22:05:06
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-04 22:48:34
 * @Description:
 */
/**
 * 手写map
 * @param {Function} fn
 * @returns {Array} []
 */
Array.prototype._map = function (fn) {
  const arr = this;
  const _this = arguments[1] || window;
  const res = [];
  if (typeof fn === "function") {
    for (let i = 0; i < arr.length; i++) {
      res.push(fn.apply(_this, [arr[i], i, arr]));
    }
  } else {
    throw new Error("入参须为函数");
  }
  return res;
};

const obj = {
  arr: [2, 5, 4, 0, 8, 9],
  show: function () {
    const res = [0, 0, 0, 0, 0, 0]._map(function (item, index) {
      return this[index] + 1;
    }, this.arr);
    console.log(res);
  },
};

obj.show();
// [ 3, 6, 5, 1, 9, 10 ]