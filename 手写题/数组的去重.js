/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-06 23:09:15
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-06 23:11:17
 * @Description: 稍微完整的去重方法
 */
const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

const unique = (arr) => {
    const res = [];
    return arr.filter(item => {
        return res.hasOwnProperty(typeof item + item) ? false : res[typeof item + item] = true;
    })
}

console.log(unique(arr));
/*
[
  1,     'true',
  true,  15,
  false, undefined,
  null,  NaN,
  'NaN', 0,
  'a',   {}
]
*/