/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-07 23:12:00
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-07 23:28:36
 * @Description: Omit 忽略某个类型
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type _Omit<T, K extends keyof T> = {
  [R in keyof T as R extends K ? never : R]: T[R];
};

type omit = _Omit<Todo, "createdAt">;
/*
type omit = {
    title: string;
    description: string;
    completed: boolean;
}
*/

