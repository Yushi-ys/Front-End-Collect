/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-06 22:12:44
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-12 15:59:02
 * @Description: 使用ts实现获取数组第一项
 */

type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : null;

type Head1 = First<[1, 2, 3]>;
// type Head1 = 1
type Head2 = First<[{ a: 1 }, { b: 2 }]>;
/*
 type Head2 = {
    a: 1;
}
*/
type Head3 = First<[]>;
// type Head3 = null

// 同理看看用 ts 获取数组的最后一项
type Last<T extends any[]> = T extends [infer F, ...infer Rest]
  ? Rest["length"] extends 0
    ? F
    : Last<Rest>
  : null;

type Tail1 = Last<[1, 2, 3]>;
// type Tail1 = 3

type Tail2 = Last<[{ a: 1 }, { b: 2 }]>;
/*
type Tail2 = {
    b: 2;
}
*/

type Tail3 = First<[]>;
// type Tail3 = null