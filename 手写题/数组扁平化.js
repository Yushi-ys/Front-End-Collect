/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-04 22:50:07
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 22:56:07
 * @Description: 手写flat
 */

Array.prototype._flat = function (deep) {
  const _flat = (arr) => {
    let res = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) res.push(...item);
      else res.push(item);
    });
    return res;
  };
  let ans = this;
  for (let i = 0; i < deep; i++) ans = _flat(ans);
  return ans;
};

const arr = [1, [2, 3], [4, 5, 6, [9, 10]]];

console.log(arr._flat(2));
// [ 1, 2, 3, 4, 5, 6, 9, 10 ]
