/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-06 22:04:53
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-14 23:11:22
 * @Description: Includes 判断元组是否存在相应的类型
 */

type Includes<T extends any[], U> = U extends T[number] ? true : false;

type C = Includes<["IProple", "IStudent", "IMan"], "ICat">;
// type C = false

type D = Includes<["IProple", "IStudent", "IMan"], "IMan">;
// type D = true
