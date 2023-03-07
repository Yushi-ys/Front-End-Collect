/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-07 23:06:10
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-07 23:08:54
 * @Description:
 */
const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

sleep(2000).then(() => {
  console.log('6666');
})