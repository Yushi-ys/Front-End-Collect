```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: red;
      }

      #box1 {
        margin-bottom: 200px;
      }

      #box2 {
        margin-top: 100px;
      }
    </style>
  </head>
  <body>
    <div id="box1" class="box"></div>
    <div id="box2" class="box"></div>
  </body>
</html>
```

- margin 塌陷问题：上面例子中的两个 div 的间隔为 200px，取 margin 重叠部分的最大值（CSS 的外边距合并规则）。如果想要上下间隔为 300px，可以对每个 div 触发 BFC

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: red;
      }

      .overflow-hidden {
        overflow: hidden;
      }

      #box1 {
        margin-bottom: 200px;
      }

      #box2 {
        margin-top: 100px;
      }
    </style>
  </head>
  <body>
    <div class="overflow-hidden">
      <div id="box1" class="box"></div>
    </div>
    <div class="overflow-hidden">
      <div id="box2" class="box"></div>
    </div>
  </body>
</html>
```

- BFC 触发方式

  - float(不为 none)
  - postion 定位(为 absolute 或 fixed 脱离文档流)
  - display: inline-block
  - overflow(不为 visible)

- 为什么出现
  - 外边距塌陷设计初衷是为了解决段落之间垂直之间的空隙，因此只会发生在垂直方向，而不是水平方向，并且是块级元素（因为行内元素不能设置垂直的外边距，注意：行内快元素也不可以 ）

- 计算公式
  - 正数&&正数：取最大的数
  - 负数&&负数：取绝对值最大的数
  - 一正一负：取相加的和