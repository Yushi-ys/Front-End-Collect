/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-04 22:50:07
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-04 22:55:32
 * @Description: 手写flat
 */
Array.prototype._flat = function () {
  const arr = this;
  let res = [];
  const flat = () => {
    arr.forEach((item) => {
      if (Array.isArray(item)) res = res.concat(item);
      else res.push(item);
    });
    return res;
  };
  return flat();
};

const arr = [1, [2, 3], [4, 5, 6]];

console.log(arr._flat());
// [ 1, 2, 3, 4, 5, 6 ]