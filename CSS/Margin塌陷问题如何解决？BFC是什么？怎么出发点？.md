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
