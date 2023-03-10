/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-09 22:48:12
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-09 22:53:25
 * @Description: _instanceof手写
 */

/**
 * _instanceof手写
 * @param {Object} l
 * @param {Function} r
 * @returns {Boolean}
 */
const _instanceof = (l, r) => {
  const left = l.__proto__;
  const right = r.prototype;
  while (true) {
    if (left === null) return false;
    if (left === right) return true;
    left = left.__proto__;
  }
};

console.log(_instanceof([], Array));
