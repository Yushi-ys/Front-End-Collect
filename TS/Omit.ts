/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-07 23:12:00
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-13 23:15:11
 * @Description: Omit 忽略某个类型
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type _Omit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type omit = _Omit<Todo, "createdAt">;

const todo_omit: omit = {
  title: "TypeScript",
  description: "666",
  completed: false,
};
