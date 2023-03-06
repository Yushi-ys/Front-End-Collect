/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 18:48:09
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 22:52:09
 * @Description: 使用 setTimeout 实现 setInterval
 */

/**
 * 使用 setTimeout 实现 setInterval
 * @param {Function} fn 需要被执行的函数
 * @param {Number} delay 间隔时间
 * @returns *
 */
const interval = (fn, delay = 1000) => {
  let flag = true;
  const timer = () => {
    setTimeout(() => {
      if (flag) {
        fn();
        timer();
      }
    }, delay);
  };
  timer();
  return () => (flag = false);
};

interval(() => console.log("666"), 1000);

// 为什么要使用 setTimeout 去实现 setInterval
/*
1.setTimeout 不管上次异步任务是否完成，它都会将当前异步任务推入队列
2.而 setInterval 则会在任务推入异步队列时判断上次异步任务是否被执行。
3.这就导致 setInterval 在做定时轮训时，出现耗时操作，或者调用的异步操作耗时会导致异步任务不按照期待的时间间隔执行。
4.setTimeout 保证调用的时间间隔是一致的，setInterval的设定的间隔时间包括了执行回调的时间。
*/
