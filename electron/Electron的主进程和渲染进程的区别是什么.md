主进程特点：
1. 只有一个主进程。
2. 可以访问 Node.js API。
3. 负责与操作系统交互

渲染进程特点：
1. 负责渲染网页内容，类似于浏览器中的标签页，可以有 N 个渲染进程
2. 默认情况下无法直接访问 Node.js API（可通过 contextIsolation 和 preload 脚本间接访问）
3. 通过 ipcRenderer 与主进程通信