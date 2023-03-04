# 一、webpack

webpack 



-D是--save-dev的简写，会安装在开发环境中development)中的devPendencies中

适用范围：

对于yarn 不适用，比如yarn add express --save-dev会安装在生产环境中(production)中的dependencies中

因为yarn默认就会安装在生产环境中，yarn只对-D安装的才会出现在开发环境中(development)中的devPendencies中。



-S是--save的简写，会安装在生产环境中的dependencies中



老师说 `npm install jquery -S`里面的-S，是明确告诉npm，要把名字和版本号记录在dependencies中

![image-20220415004005121](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415004005121-165015929422511.png)	

弹幕说：dependencies是核心依赖包 在开发期间和项目上线之后都会用到的包都存里面。

SyntaxError：语法错误

dependencies：开发和上线，这个包都需要被用到，这个包需要-S的方式进入到里面。

devpendencies：只在开发阶段用到的包，进入到这个里面，项目上线不需要用。

![image-20220419162346288](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419162346288.png)		

修改一次就要npm run dev。

**mode不同的场景:**

压缩main.js就将文件`webpack.config.js`里面的mode:'development'改成'production'

![image-20220419162622956](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419162622956.png)		

main.js体积变小了。缺点是打包时间变长了。

所以developmrnt打包时间段，main.js体积大。

所以开发的时候，用development。打包速度快。

开发完了。项目要上线的时候，用production，体积小。



## 1.webpack的默认规定

1、默认的打包入口文件为src -> index.js

2、默认的输出文件路径为dist - > main.js

也可以自定义打包的出口和入口

![image-20220419162731546](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419162731546.png)		

​	entry:'指定要处理哪个文件'
  将index.文件改成index1.js
 __dirname表示项目根目录，	


```js
const path = require('path')

entry: path.join(__dirname, './src/index1.js') 

```

 如果不希望生成文件名main.js，想自定义生成名。

dist可以删除，src不可以删除

**遇到的问题:**

每一次修改源代码，都要重行去运行打包命令。

所以要能修改源代码之后，保存，自动生成dist文件。

## 2.webpack插件

![image-20220419162859568](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419162859568.png)		

### 1、webpack-dev-server

下载webpack-dev-server插件

```
npm i webpack-dev-server@3.11.2 -D
```

配置插件

![image-20220419162931609](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419162931609.png)		

![image-20220415110340673](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415110340673-16501592942149.png)	



如果报错了是webpack-cli的版本不兼容，之前下载的是4.7.2重新安装webpack-cli的4.9.0版本

```
npm i webpack-cli@4.9.0 -D
```

安装配置完之后，保存就自动编译成功

![image-20220419161804683](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419161804683.png)		

弹幕说：安装了webpack-dev-server，就不用npm run dev啦，你保存文件自动生成新的bundle.js

**出现问题，打包编译成功，但是页面没有发生改变。**

![image-20220415111953525](F:\Markdown app\Typora 0.11.18\Typora data\images\image-20220415111953525.png)	

![image-20220419163034475](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163034475.png)	

项目是运行在http协议中，	而alt +b 打开浏览器是file协议

装上webpack-dev-server插件，要想看最新的效果，不能像之前那样，用file协议去看。

要用http协议。

发现进入端口之后

![image-20220419163105284](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163105284.png)		



点击src文件夹，直接显示页面

因为浏览器有一个特性，它一进入文件夹，就会自动去展示文件夹里面，名字叫index.html页面

![image-20220415113318727](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415113318727-165015929423721.png)	

插件webpack-dev-server搞的鬼，把我们生成的bundle.js没有放到物理磁盘上。

而是把生成的bundle.js放发哦内存里面。

因为频繁的读写磁盘，是对寿命有影响的，而内存不会。

==在首页里面，访问我们最新的bundle.js,应该访问内存里的bundle==，而不是dist里面的，因为它是在物理磁盘,是之前生成的。

把dist文件夹删除，在保存，也在 自动打包编译。

解决方法：

加载和引用内存里的bundle.js，在index.html文件中

```html
<script src="/bundle.js"></script>
```

`/`是根据，这个提示。

![image-20220415114719068](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415114719068-165015929426035.png)	

 ![image-20220419161912766](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419161912766.png)	

发现成功了。

也可以实时修改源代码变化。

所以要两块屏幕，一遍改源代码，一遍浏览器实时显示。

### 2、html-webpack-plugin

**接着，要解决如何进入端口，不需要点击src，就直接显示页面。**

安装html-webpack-plugin插件

![image-20220419163208095](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163208095.png)		

```
npm i html-webpack-plugin@5.3.2 -D
```

配置插件

1、导入html插件，得到一个构造函数



2、创建html插件的实例化对象

 ```js
const htmlPlugin = new HtmlPlugin({
  //指定原文件的存放路径
  template: './src/index.html',
  //指定生成的文件的存放路径
  filename: './index.html'
})
 ```



3、通过plugins结点，使htmlPlugin插件生效。

```js
module.export={
    plugins:[htmlPlugin]
}
```

![image-20220419163235523](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163235523.png)		

看到的这个页面，不是src中的index.html，而是内存中的页面。

当把index.html中的`<script src="/bundle.js"></script>`引入注释掉

发现不受影响。查看源代码发现，html-webpack-plugin自动添加的脚本。

![image-20220415172256037](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415172256037-165015929426437.png)	

所以说这个插件，除了能把src里面的页面，复制到根目录以外，

还可以在复制出来的页面里面，自动注入一个脚本，去引用内存里面的bundle.js。

所以不用手动去加入这个script引入。

弹幕说：webpack拿js，webpack-dev-server引入到服务器，html-webpack-plugin拿html



：dev

思考，如何在第一次run打包编译之后，就自动进入端口，打开浏览器。



### 3、devServe节点

![image-20220415174221358](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415174221358-165015929423619.png)	

![image-20220415174208697](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415174208697-165015929426739.png)

```js
devServer: {
    open: true //初次打包完成后，自动打开浏览器

    host: '127.0.0.1', //实时打包所使用的的主机地址(主机地址自定义)

     port: 80 //实时打包所使用的端口号(端口号可自定义)
  }
```

在http协议中，如果端口号是80，则可以被省略。

弹幕说：运行时有报端口被拒绝之类的，修改port端口就行了。



## 3.webpack中的loader

![image-20220415214655258](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415214655258-165015929423723.png)

![image-20220419163504012](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163504012.png)	·	

![image-20220415215418483](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415215418483-165015929423727.png)	弹幕说：入口 都写 index.js。

css文件，模块转化失败

![image-20220419162044027](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419162044027.png)		

提示说：你需要一个合适的loader去处理。

所以，需要配置一个合适的加载器，去处理.css文件结尾的文件类型。

### 1、打包处理css文件

1、安装style-loader和	css-loader，安装处理	css文件的loader。

```
npm i style-loader@3.0.0 css-loader@5.2.6 -D
```

2、在webpack-config.js的module->rules数组中，添加loader如下

```js
 module: {
    //文件后缀名的匹配规则
    rules: [
      {
        //定义了不同模块的loader
        test: /\.css$/,
        //顺序不能乱
        use: ['style-loader', 'css-loader']
      }
    ]
  }
```

![image-20220415221816846](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220415221816846-165015929423731.png)	



![image-20220419162106661](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419162106661.png)		



配置完之后发现修改的css文件，成功了

```css
li{
    list-style:none
}
```

![image-20220419164533372](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419164533372.png)			

1、webpack默认只能打包处理.js文件，处理不了其他后缀的文件

2、由于代码中包含了index.css这个文件，因此webpack默认处理不了。

3、当webpack发现某个文件处理不了的时候，会查找webpack.config.js这个配置文件，

看module.rules数组中，是否配置了对应的loader加载器。

4、webpack把index.css这个文件 先转交给最后一个loader进行处理（先转交给css-loader）

5、当css-loader处理完毕之后，会把处理的结果 ，转交给下一个loader(转交给style-loader)

6、当style-loader处理完毕后，发现没有下一个loader了，于是就把处理的结果转交给webpack

7、webpack把style-loader处理的结果，合并到/dist/bundle.js中，最终生成打包好的文件。

### 2、打包处理less文件

1、下载less-loader和less

```
npm i less-loader@10.0.1 less@4.1.1 -D
```

2、在webpack.config.js的moudle ->rules数组中，添加loader规则如下:

```js
{
        //处理.less文件的loader
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
```

### 3、图片loader加载问题



需求，把src/images/logo1.png，设置给src属性。希望动态得为这个img里的src赋值。值就是图片

将图片渲染到盒子里面。

1、导入图片，得到图片文件

在index1.js文件中

```js
import logo from './images/logo1.png' 
```

logo赋值给img标签下的src

2、给img标签的src动态赋值

```js
$('.box').attr('src', logo)
```

3、安装和配置url-loader 和 file-loader 

```
npm i url-loader@4.1.1 file-loader@6.2.0 -D
```

![image-20220417010242062](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220417010242062-165015929428741.png)

use里面只有一个loader加载器，就不需要数组形式了，字符串就可以

### 4、webpack 处理样式的过程

```js
import './css/index.css'
import './css/index.less'
```

把在文件里面css样式加载过来。不需要用于接收

如果要接收

```js
import a from './css/index.css'
imort b from './css/index.less'
consoloe.log(a,b)//undefined  undefined
```

如果某个模块中，使用from接收到的成员为undefined	，则没必要接收

 生成的bundle.js里面包含了样式。

一般导入css或者less的时候，都是不是接收的,都是这种样式

```js
import './css/index.css'
import './css/index.less'
```

### 5、url-loader的limit选项

和这个类似

![image-20220417233559079](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220417233559079.png)	

```
'url-loader?limit=22229'，？就代表后面要带参数了。
```

代表为url-loader配置了参数项，参数名字叫limit，等号后面写参数的值(是一个数字)。

通过limit这个参数，就可以告诉url-loader,什么样的文件，就会转成base64，什么样的文件，不需要转。

小图片转成base64。大小界定，比如，体积大于10kb算是大文件，小于的是小文件。有一个临界值。

分割线大小，就由limit来指定。

如limit的222209代表临界值，小于它转成base64，

![image-20220417235701182](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220417235701182.png)	

大于它就是这样，是一个图片的路径地址。

![image-20220417235551393](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220417235551393.png)	

### 6、babel-loader转化处理高级JS语法。

就是需要这个加载器处理webpack无法处理的部分高级js语法。

![image-20220419163607915](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163607915.png)		                         

![image-20220419163640022](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163640022.png)		

@info代表装饰器. 

对于这种webpack处理不了的高级js的代码，就需要babel-loader进行打包处理。

**1、第一步安装babel-loader相关的包.**

```
npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5
```

2、第二补配置相关loader

![image-20220418222021822](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220418222021822.png)	

       ```js
       	//处理webpack处理不了的js高级代码的loader
             //注意：必须使用exclude 指定排除项，因为 node-modules 目录下的第三方包不需要被打包
             { test: /\.js/, use: 'babel-loader,exclude:/node-modules/' }
       ```

exclude:排除项。

在配置babel-loader时，程序员只需要把自己的代码进行转化就可；==一定要排除node_modules目录中的js文件==。因为第三方包中的js文件，不需要程序员关心。

3、在项目根目录中，创建名为babel.config.js的配置文件，定义Babel的配置项如下：

```js
module.exports={
    //声明babel可用的插件
    //将来，webpack在调用babel-loader的时候，会先加载plugins插件来使用
    plugins:[['@babel/plugin-proposal-decorators',{legacy:true}]]
}
```

![image-20220418224951627](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220418224951627.png)	

`@babel/plugin-proposal-decorators`这个插件能够告诉babel怎么去解析转换装饰器。

输入命令npm run dev 

输出Person info

![image-20220418230134754](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220418230134754.png)	

## 4.项目发布上线

###  1、配置built命令

前端把项目生成一份文件夹，然后将生成好的文件夹内容打包。

后端在拿到打包好的结果之后，去部署上线。

**现在继续解决的问题是**：

页面和bundle.js都在内存里面。

所以要把它生成在实际的物理磁盘上。才可以找到你的文件你发给后端。



现在在物理磁盘上没有dist文件夹，所以需要做的事情，就是将文件生成到dist文件夹里面去。

![image-20220419163800338](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163800338.png)	

上面的命令，开发的时候，会用到 npm run dev

下面的命令，项目发布时，会用到。

![image-20220418232446552](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220418232446552.png)			



同时指定--mode和配置文件里面的选项

![image-20220419163853255](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163853255.png)		

--mode优先级比较高，会覆盖掉配置文件里的development变成production

输入npm run build

![image-20220418232622118](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220418232622118.png)	会发现bundle.js文件体积比刚才小很多。

发布好之后，dist发给后端，后端把dist文件上传到服务器上，对外发布，就可以访问了。

前端要做的事情，就是把dist打印压缩包发布就完事了。

开发时：dev，生成的文件是在内存。

发布时：文件是在物理磁盘。

### 2、优化图片和js文件的存放路径

**需求一：生成的js文件统一生成到js目录中。**

找到webpack.config.js配置文件的output选项

![image-20220419163921863](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163921863.png)		

表示说，生成的bundle.js文件会自动保存在dist文件夹中的js文件夹目录下。

在bulid之后，生成这个

![image-20220418234116519](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220418234116519.png)	

没有生成图片是因为图片没有超过limit的范围。

**需求二：把生成的图片统一到images目录中去。**

在webpack.config.js配置文件中,加入outputPath=images

```js
 	//如果调用的loader只有一个，用字符串就可以，如果是多个loader，则必须要用数组
      //在配置url-loader的时候，多个参数之间用&连接 
{ test: /\.jpg|png|gif$/, use: 'url-loader?limit=2800&outputPath=images' }
```

dist文件在build之前如果不删，老的文件就会保留。

就会像这样，有两张图片

![image-20220419163949213](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419163949213.png)		

所以为了防止这个问题，每一次重新生成打包之前，都要把dist删除。

### 3、插件clean-webpack-plugin自动清理dist目录的旧文件

1、安装插件：

```
npm install clean-webpack-plugin@3.0.0 -D
```

2、导入一个构造函数

```js
//左侧的{}是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
```

3、把构造函数new出来的结果，放到plugins数组里面

```js
const webpackConfig = {
    plugins: [  new CleanWebpackPlugin(), ],
};
```

方法二：弹幕说：webpack版本5.2以上，output加个clean:true 就行了.

实验方法：在dist文件新建一个1.txt文件，然后重新build，看是否会自动删除。

## 5、SourceMap

### 1、在开发阶段，配置Source Map

SourceMap是一个信息文件，里面存着位置信息。

具体存储的源代码和打包生成dundle.js的行号和信息。 

![image-20220419164030410](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419164030410.png)		

在开发阶段，虽然会提示哪个文件里面报错，以及对应的行号，但是这个行号，==不是源代码里面的行号。==

==是生成文件的行号。==

所以很不方便，不能直接定位到错误信息的位置。

为了方便程序员调试bug，需要配置一下SourceMap

![image-20220419164105229](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419164105229.png)		

```js
	//eval-source-map 仅限在'开发模式'下使用，不建议在'生成模式下'使用
  //此选项生成的Source Map 能够保证运行时报错的行数与源代码一致。
  devtool: 'eval-source-map'
```

在开发调试阶段，建议把devtool的值设置为'eval-source-map'。

### 2、在发布项目的时候，处于安全考虑，建议关闭SourceMap。

在发布的时候，要提示不准确。

因为很难在生成的打包文件中，定位到错误信息。

对安全性好，点击链接的时候，就不会暴露源代码。

因为压缩后的生成代码没有意义。

### 3、SourceMap的最佳实践

**需求：只想定位报错具体行数，不想暴露源代码。**

![image-20220419151306094](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419151306094.png)	

**实际开发中，建议直接关闭source**

```js
//此生成的Source Map只定位报错行数，不暴露源代码
  devtool: 'nosources-source-map'
```

![image-20220419152349380](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419152349380.png)	

会显示报错位置的，但是点击只能访问到打包完的bundle.js里的文件。不能看到源代码里的错误。

这样在发布完之后，既可以定位到错误，也不会暴露源代码。

**当然也可以即定位，也展示源码，但是不能这么干**

```js
devtool:'source-map'
```

总结：

开发环境下：要定位错误，并且定位到源代码

设置`devtool:'eval-source-map'`

生产环境下：定位到错误，但是不定位到源码

设置`devtool:'nosource-source-map'`

![image-20220419152759663](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419152759663.png) 



## 6.webpack中@的好处

```js
import msg from '../../msg'
console.log(msg)
```

建议使用@表示src源代码目录，从外往里查找，不要使用../从里往外查找。

![image-20220419164217421](https://gitee.com/szyyds01/image-bed/raw/master/picgo/image-20220419164217421.png)		

../是从自己文件位置开始往外找。

而直接可以从src开始（从外往里找),@代表src这层目录.

```js
import msg from '@/msg.js'
```

弹幕说：@代表绝对的项目路径，后面输入你要加的路径

但是直接使用会报错，webpack里面需要先配置一下。

要找到webpack配置文件 `webpack.config.js`

```js
resolve: {
    alias: {
      //告诉webpack ,程序员写的代码中，@表示这一层目录
      '@': path.join(__dirname, './src/')
    }
  }
```



## 7.base64图片的优缺点

base64的好处：

是防止一些不必要的网络请求。

优化小图片的加载--精灵图和base64

可以一次性的既拿到标签，又拿到对应的小图片。

base64的缺点： 会让图片体积变大。
