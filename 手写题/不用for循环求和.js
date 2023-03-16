/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-12 16:44:10
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-13 22:45:27
 * @Description: 递归
 */
const arr = [2, 5, 4, 0, 2, 5, 8, 5, 1, 2];

let sum = 0;
const getSumWithOutFor = (arr) => {
  if (arr.length == 0) return 0;
  return arr[0] + getSumWithOutFor(arr.slice(1));
};

console.log(getSumWithOutFor(arr));
