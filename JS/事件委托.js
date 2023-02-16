var ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.innerHTML = `这是第${i}个小li`;
    ul.appendChild(li);
}
document.body.appendChild(ul);

var ul = document.getElementsByTagName("ul");
var li = document.getElementsByTagName("li");
console.log(ul);
console.log(li);

// for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener("click", (e) => {
//         console.log(e.target.innerHTML);
//         console.log(e.currentTarget.innerHTML);
//     })
// }

ul[0].addEventListener("click", (e) => {
    console.log(e.target); //自身
    console.log(e.currentTarget); //父级
})

// 事件委托: 利用JS事件冒泡机制把原本需要绑定在子元素的响应事件委托给父元素， 子级的事情， 交给父级来处理