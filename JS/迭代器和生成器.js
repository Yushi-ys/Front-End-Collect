/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-20 22:41:12
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-20 23:42:49
 * @Description:
 */
const arr = [1, 2, 3, 4, 5, 6];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 可见 迭代器实质上是一个接口通过Symbol.iterator来创建迭代器，通过迭代器的next() 方法获取迭代之后的结果
// {value, done} => 值 和 是否遍历完成

