/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-21 22:14:39
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-21 22:15:21
 * @Description: 
 */
// defer 页面加载的时候，带有defer标签的脚本也同时加载，等加载完之后，会等待页面加载好之后才执行
// async页面加载的时候，带有async标签的脚本也同时加载，加载完成后会立即执行，如果有一些操作DOM的脚本加载比较慢，这样会造成DOM还没加载完，脚本就进行操作，会出现操作