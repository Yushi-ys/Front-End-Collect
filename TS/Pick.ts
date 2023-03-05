/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-05 16:05:19
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-05 16:07:04
 * @Description: Pick的实现
 */
interface IProps {
  name: string;
  age: number;
  show: () => void;
}

type _Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type p = _Pick<IProps, "show">;

// type p = {
//     show: () => void;
// }