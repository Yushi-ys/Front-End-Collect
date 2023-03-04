/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-04 22:56:46
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-04 23:04:14
 * @Description: parseInt
 */

/**
 * @param {string} str
 * @param {number} radix
 */
// 将 str 看作 radix 进制数，返回 十 进制数

const arr = ["1", "2", "3"];
arr.forEach((item, index) => {
  console.log(parseInt(item, index));
});

//parseInt(1, 0) 十进制 => 1
//parseInt(2, 1) 一进制无效(2 - 36)
//parseInt(3, 2) 3不是二进制数, 为 NaN

console.log(parseInt(101, 2));
// 101 的 2 进制 => 5