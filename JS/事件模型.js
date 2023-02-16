//DOM 0级
{ /* <input type="button" onclick="fun()"></input> */ }
//又称为原始事件模型，事件不会传播(事件冒泡和事件捕获),通常在HTML上直接绑定事件，然后通过JS获取属性值，再绑定函数

let btn = document.getElementById(".btn");
btn.onclick = () => {

}

//DOM 2级
// 2级新增事件冒泡和事件捕获，并且一个元素节点可以绑定多个事件
// DOM2级事件模型有三个阶段
// 1事件捕获：事件从document向下传播到目标元素，依次检查所有节点是否绑定监听事件，有则执行
// 2事件处理阶段：事件到达目标元素，触发监听事件
// 3事件冒泡阶段：事件从目标元素向上传播到document，依次检查所有节点是否绑定监听事件，有则执行
//通过 addEventListener 监听事件，接受三个参数，事件名称、事件回调、事件捕获/事件冒泡


btn.addEventListener("click", () => {}, true);
//true表示事件在事件捕获阶段执行，false表示事件在事件冒泡阶段执行，默认为false