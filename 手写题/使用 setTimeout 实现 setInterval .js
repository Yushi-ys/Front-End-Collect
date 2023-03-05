/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 18:48:09
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 18:50:48
 * @Description: 使用 setTimeout 实现 setInterval
 */

/**
 * 使用 setTimeout 实现 setInterval
 * @param {Function} fn 需要被执行的函数
 * @param {Number} delay 间隔时间
 * @returns *
 */
function _setInterval(fn, delay = 1000) {
  let cancel = false;
  const task = () => {
    setTimeout(() => {
      if (!cancel) {
        fn.apply(this, args);
        task();
      }
    }, delay);
  };
  task();
  return () => {
    cancel = true;
  };
}

_setInterval(() => console.log('666'), 1000);
