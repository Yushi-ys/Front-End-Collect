/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-10 22:57:31
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-10 23:16:55
 * @Description: 防抖和节流
 */

/**
 * 防抖
 * @param {Function} fn
 * @param {Number} delay
 * @returns *
 */
const debounce = (fn, delay) => {
  let timer;
  return function () {
    const that = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(that, args);
    }, delay);
  };
};

/**
 * 节流
 * @param {Function} fn
 * @param {Number} delay
 * @returns *
 */
const throttle = (fn, delay) => {
  let timer;
  return function () {
    const that = this;
    const args = arguments;
    if (!timer) return;
    timer = setTimeout(() => {
      fn.call(that, args);
      clearTimeout(timer);
    }, delay);
  };
};
