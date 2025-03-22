#### 渲染进程 => 主进程
ipcRenderer.send 发送
主进程通过ipcMain.on监听

##### 如果想收到主进程的处理结果
主进程通过 event.sender.send 把结果发送给渲染进程
渲染进程再通过 ipcRenderer.on 监听
（也可以使用invoke和handle）


#### 主进程 => 渲染进程
主进程通过 win.webContents.send 发送消息
渲染进程通过 ipcRenderer.on 监听消息
