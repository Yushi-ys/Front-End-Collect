/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 14:21:03
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 22:56:18
 * @Description: Promise的api手写
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolve");
    // reject("p1 reject");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolve");
    // reject("p2 reject");
  }, 1000);
});

Promise._all = function (promise) {
  return new Promise((resolve, reject) => {
    const len = promise.length;
    const results = new Array(len);
    let cnt = 0;
    promise.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          results[index] = res;
          if (++cnt === len) return resolve(results);
        })
        .catch((err) => reject(err));
    });
  });
};

const fn = async () => {
  const ans = await Promise._all([p1, p2]);
  console.log(ans);
};

fn(); // [ 'p1 resolve', 'p2 resolve' ]