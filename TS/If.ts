/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 23:09:34
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 23:11:57
 * @Description: If 如果是正确就返回第二个，如果错误则返回第三个
 */

type If<T extends Boolean, K extends any, U extends any> = T extends true
  ? K
  : U;

type A = If<true, "a", "b">; // type A = "a"

type B = If<false, "a", "b">; // type B = "b"

