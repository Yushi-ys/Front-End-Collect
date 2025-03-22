1. 启用上下文隔离
隔离渲染进程的 JavaScript 环境和 Electron API，防止恶意代码直接访问 Node.js API
```js
new BrowserWindow({
    webPreferences: {
        contextIsolation: true, // 启用上下文隔离
        preload: path.join(__dirname, 'preload.js') // 使用预加载脚本
    }
});
```

2. 使用预加载脚本（Preload Script）
通过预加载脚本暴露有限的 Node.js API 给渲染进程，避免直接暴露全部 API
```js
// preload.js
const { ipcRenderer } = require('electron');

window.electron = {
    sendMessage: (message) => ipcRenderer.send('message', message)
};
```

3. 启用沙箱模式（Sandbox）
限制渲染进程的权限，使其在沙箱环境中运行，无法直接访问系统资源
```js
new BrowserWindow({
    webPreferences: {
        sandbox: true // 启用沙箱模式
    }
});
```

4. 限制调试工具
防止用户通过调试工具访问敏感信息
```js
new BrowserWindow({
    webPreferences: {
        devTools: process.env.NODE_ENV === 'development' // 仅开发环境启用调试工具
    }
});
```