/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 16:05:19
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-13 23:23:02
 * @Description: Pick的实现
 */
interface IProps {
  name: string;
  age: number;
  show: () => void;
}

type _Pick<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]: T[P];
};

type pick = _Pick<IProps, "show" | "name">;

const todo_pick: pick = {
  show: function () {
    console.log("666");
  },
  name: "Tao",
};
