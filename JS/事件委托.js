/*
 * @Author: yushi 2540258512@qq.com
 * @Date: 2023-03-02 23:21:47
 * @LastEditors: yushi 2540258512@qq.com
 * @LastEditTime: 2023-03-02 23:33:05
 * @FilePath: /Eight-Part-Essay/JS/事件委托.js
 * @Description: 事件委托: 利用JS事件冒泡机制把原本需要绑定在子元素的响应事件委托给父元素， 子级的事情， 交给父级来处理 
 */
/**
 * 建议在浏览器控制台下运行，方便快捷
 */
const ele = document.createElement("ul");
for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.innerText = `这是第${i}个小li`;
    ele.appendChild(li);
}
document.body.appendChild(ele);

const ul = document.getElementsByTagName("ul");
const li = document.getElementsByTagName("li");

// 常规
// for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener("click", (e) => {
//         console.log(e.target.innerHTML);
//         console.log(e.currentTarget.innerHTML);
//     })
// }

// 事件委托
ul[0].addEventListener("click", (e) => {
    console.log(e.target); //自身
    console.log(e.currentTarget); //父级
})