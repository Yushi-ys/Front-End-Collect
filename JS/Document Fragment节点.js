/** 
DocumentFragment 代表一个文档的片段，它本身是一个完整的 DOM 树结构，没有父节点，可以插入任意数量的子节点，它不属于当前文档
*/

const docFrag = new DocumentFragment();

const ul = document.createElement("ul");

for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerText = `我是第${i}个`;
  docFrag.appendChild(li);
}
console.log("docFrag", docFrag.childElementCount); // 10

ul.appendChild(docFrag);
console.log("docFrag", docFrag.childElementCount); // 0
document.body.appendChild(ul);
// 注意：一旦 DocumentFragment 节点被添加到当前文档，它自身就变成了空节点。如果想要保存 DocumentFragment 节点内容，可以使用 cloneNode方法
// 例如 ul.appendChild(docFrag.cloneNode(true));

// 统一加到 DocumentFragment 后，在进行DOM操作，避免了大量的回流
