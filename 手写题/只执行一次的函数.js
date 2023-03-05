/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 15:28:01
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 16:01:20
 * @Description: 设计一个只会执行一次的函数
 */

/**
 * 
 * @param {Function} func 
 * @returns {Function} *
 */
const onceFunc = (func) => {
    let time = true;
    return function() {
        if(time) {
            time = !time;
            return func();
        }
    }
}

const sayHi = () => {
    console.log('hello');
}
const fn = onceFunc(sayHi);
fn(); // hello
fn(); // null
fn(); // null