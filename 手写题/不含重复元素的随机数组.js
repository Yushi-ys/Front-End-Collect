/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 14:32:13
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 22:56:01
 * @Description: 生成一个不含重复元素的随机数组
 */

/**
 * @param {number} minn 最小值
 * @param {number} maxn 最大值
 * @param {number} lenght 数组长度
 * @returns {number[]}
 * @description 返回一个最小值为minn，最大值为maxn，长度为len的数组
 */
const randomUniqueArr = (minn = 0, maxn = 20, lenght = 10) => {
  if (maxn - minn < lenght) return null;
  const unique = new Set();
  while(unique.size < lenght) {
    const value = (Math.random() * maxn) >> 0;
    if(value < minn) continue;
    unique.add(value);
  }
  return [...unique];
};


console.log(randomUniqueArr())