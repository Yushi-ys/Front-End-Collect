# 1.说一下CSS的盒模型

```
HTML元素中的元素可以看成一个盒子。
盒子组成：内容(content),内边距(padding)，边框(border），外边距(margin)
盒模型的类型：
   标准盒模型:由margin、border、padding、content 
   
   IE盒模型:margin content(包含了border、padding)
   
控制盒模型的模式：box-sizing: content-box(默认值,标准盒模型)，border-box(默认值，IE盒模型)
```

补充：

“margin:0 auto;”所代表的的意思是**容器**水平居中，其中的margin后面如果只有两个参数的话，第一个表示top和bottom，第二个表示left和right，再因为上下边界为0，左右则根据宽度自适应相同值，所以表达的意思是水平居中。

文字水平居中是==text-align:center==。垂直居中可以将`line-height`行高和`height`设置一样高度。

# 2.css中{margin:0; padding:0;}有什么用以及*{margin: 0; padding: 0}的作用与利弊？

```
作用：是重置Reset浏览器默认样式，对于各种浏览器样式统一有着简单粗暴的效果。

*{margin:0; padding:0;}代表了网页中所有元素，包括body ,ul, li列表标签 ,p,H标题标签,dd,dt 等……都有默认的margin 或padding值的，加上这句就可以删除浏览器这些默认值，方面后面的设置。


优点:
简单方便，一次性重置所有HTML网页元素的浏览器样式，代码少，控制量大
缺点：
效率会低很多，因为有些元素样式不需要重置，比如table还要单独设置默认样式。
而且通配符选择器会将所有的标签都遍历一遍，当网站比较大，标签比较多的时候，这样网站加载时间就更长，加重了网站的负载。

解决方法：大型网站都有分层次的一套初始化样式，比如代替写法：
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td,img {padding:0;margin:0;}
   
```

# 3、CSS选择器的优先级

```
CSS的特性：继承性(一些子标签可能会继承父类的一些样式)、层叠性(样式发生冲突的时候，该怎么选择)、优先级(不同的标签和选择器发生冲突的时候，该怎么解决样式问题)

优先级：在写CSS样式的时候，会给同一个元素添加多个样式，此时谁的权重高就显示谁的样式。

```



