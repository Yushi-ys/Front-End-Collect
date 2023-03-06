/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 22:58:18
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 23:03:02
 * @Description: 请求N秒未完成则终止
 */
/**
 * 超过 endTime 毫秒，则停止请求
 * @param {Number} endTime
 * @returns *
 */
const end = (endTime = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error");
    }, endTime);
  });
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1");
  }, 10000);
});

const p2 = end();

Promise.race([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
