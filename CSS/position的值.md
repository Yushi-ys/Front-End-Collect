- static：

  - 默认值
  - 元素按照文档流正常排列，不受其他定位属性影响

- relative

  - 相对其正常位置定位
  - 不会脱离文档流，元素仍然占据原来的位置

- absolue

  - 相对于最近的已定位元素定位，如果没有，则相对于浏览器窗口
  - 脱离文档流，不再占据原来的位置

- fixed

  - 相对于视口定位，不随页面滚动而移动
  - 脱离文档流，不占据原来的位置

- sticky
  - 元素在特定阈值钱表现为相对定位，之后表现为固定定位
  - 通常用来创建 “粘性”导航栏或侧边栏
