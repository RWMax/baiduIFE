# note

## xiaowei_mission_l 零基础HTML编码

[a](https://www.w3schools.com/html/html_links.asp)

	<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
	target = "_blank" 在新页打开
             "_self" 在同一页打开

	<div id="a"></div>
	<a href="#a">跳转到id为a的元素</a>
[img](https://www.w3schools.com/html/html_images.asp)

	<img src="" alt= "">
	src 图片链接
	alt 文字,加载失败时显示

[picture](http://www.w3cplus.com/html5/quick-tip-how-to-use-html5-picture-for-responsive-images.html) (html5)

	指定不同条件下,显示不同图像
	<picture>
	<source media="(max-width:100px)" srcset="smaller.jpg">
	<img src="large.jpg">
	</picture>
	当窗口宽度小于100px时,显示 smaller.jpg

[figure figcaption](http://www.w3school.com.cn/tags/tag_figure.asp)

[table thead tbody tfoot tr th td](http://www.w3school.com.cn/tags/tag_table.asp)

table,tr,th,... {border: 0} 边框宽度,为0时无边框

[form cn](https://www.w3schools.com/tags/tag_form.asp)
[form en](https://www.w3schools.com/html/html_forms.asp)

	<form action="地址" method="post"></form>

[input](http://www.w3school.com.cn/tags/tag_input.asp)

	<input type="radio" id="" value="" checked="checked" name="">
	type = "text | radio | password | submit | checkbox | email"
	name input元素名称

[maxlength minlength](http://www.w3school.com.cn/tags/att_input_maxlength.asp)

	允许输入的最大|最小字符个数

[pattern](http://www.w3school.com.cn/tags/att_input_pattern.asp)

	<input type="text" pattern="[0-9]{3,10}">
	允许输入字符格式,接受正则

[placeholder](http://www.w3school.com.cn/tags/att_input_placeholder.asp)

	<input type="text" placeholder="这是一个输入框">
	输入框为空时显示,获得焦点是自动消失

[label](http://www.w3school.com.cn/tags/tag_label.asp)

	<label for="#id"></label>
	<label><input type="" name=""></label>

[for](http://www.w3school.com.cn/tags/att_label_for.asp)

[select 复选框]()

	<select>
		<option selected="selected">1</option>
		<option>2</option>
	</select>
	selected: 相当于input的属性 checked

[路径](https://www.w3schools.com/html/html_filepaths.asp)

	./ 当前目录
	<img src="./img/1.jpg">
	相当于
	<img src="img/1.jpg">

	/ 根目录
	<img src="/img/1.jpg">

	../ 上一目录
	<img src="../img/1.jpg">

html5 标签

	<article>
	<footer>
	<figure>
	<figcaption>

## xiaowei_mission_2 零基础HTML及CSS编码（一）
载入css样式文件

	<link rel="stylesheet" type="text/css" href="css/index.css">

[font-family:](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

	font-family: "Goudy Bookletter 1911", sans-serif;
	"xxx" 具体的字体名,如 微软雅黑
	xxx 一类字体,如 衬线体

position:  | absolute | fixed

	注意: absolute 会导致 margin: 0 auto; 失效

[display: inline-block](http://zh-tw.learnlayout.com/inline-block.html)

[vertical-align: top | bottom | middle](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)

	只能用于"行内(内联)元素和替换元素"(图像|表单)
	不影响"块级元素中内容"的对齐,但可影响"表格中元素"的垂直对齐

	.parent {display:table}
	.element {display: table-cell;vertical-align:middle}

[clear: left |right | both 清除浮动](http://zh-tw.learnlayout.com/clear.html)


	{clear: left} 清除所有拥有属性 float: left 的元素,即不允许元素左侧出现浮动元素

[overflow: auto | visible | scroll | hiddle](http://zh-tw.learnlayout.com/clearfix.html)

[深入理解overflow](http://www.cnblogs.com/xiaohuochai/p/5289653.html)
[absolute属性导致容器overflow失效的解决办法](https://stackoverflow.com/questions/15438828/extending-position-absolute-div-outside-overflow-hidden-div)

overflow-x
overflow-y

	规定子元素内容超出父元素后的处理方式

	auto 显示滚动条
	scroll 显示滚动条
	hiddle 隐藏
	
	overflow: auto可用来清除浮动
	.parent {overflow:auto;}
	.element {flow:left; width:100px; height:100px;}

注意: firefox 在 overflow: scroll | auto 时,缺少 padding-bottom

[text-decoration: none](http://www.w3school.com.cn/cssref/pr_text_text-decoration.asp)

	设置文本装饰
	none 无
	underline 下划线
	overline 上划线
	line-hrough 删除线

[list-style-type: none](http://www.w3school.com.cn/cssref/pr_list-style-type.asp)

	设置列表标记样式
	none 无
	circle 空心圆
	square 方块

[border-collapse: collapse](http://www.w3school.com.cn/cssref/pr_tab_border-collapse.asp)

	合并表格边框

[box-shadow: x轴偏移量 y轴偏移量 模糊像素 颜色](http://www.w3school.com.cn/cssref/pr_box-shadow.asp)
	
	边框阴影
	box-shadow: 2px 2px 2px black;

[text-align: center | justify](http://www.w3school.com.cn/cssref/pr_text_text-align.asp)

	行内元素对齐方式
	justify 两端对齐

## xiaowei_mission_3 任务三：三栏式布局

[position: absolute](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

	注意:在绝对定位中,当top和bottom冲突,优先采用top.
	left和right冲突,优先采用right

	element {height:10;top:0;bottom:0}
	如上,尽管 bottom在 top 后,但依然采用 top

[box-sizing: border-box;](https://www.w3schools.com/cssref/css3_pr_box-sizing.asp)
	定义 width 的计算方式
	border-box 包含 border
	content-box 默认值
	无继承

[清除浮动](https://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use)

	方法一 
	{overflow: auto;}
	方法二 
	.container::after {
		content: "";
		display: table;
		clear: both;
	}

[两栏 三栏布局](http://ife.baidu.com/note/detail/id/666)

## xiaowei_mission_4 任务四：定位和居中问题

opacity: 0.5 控制元素透明度

[z-index: 1 | 2 ...]()
	
	控制元素堆叠顺序,数值大的在上面
	当 position: absolute | relative | fixed 时,z-index生效(top...等也一样)


[清除inline-black元素间的缝隙](https://www.zhihu.com/question/21468450)

	设置容器字体大小为0,在子元素里改回来
	.container {font-size:0;}
	.container * {font-size: medium;}

[white-space: nowrap](http://www.w3school.com.cn/cssref/pr_text_white-space.asp)

	nowrap 禁止换行
[reset: horizontal | vertical | both](http://www.w3school.com.cn/cssref/pr_resize.asp)

	允许用户调整元素大小
	需设置overflow: auto | hidden | scroll 才能生效

[margin: auto | 10 | -10]()

margin-top
margin-bottom
margin-left
margin-right

	margin属性值可以为负

## xiaowei_mission_5 任务五：零基础HTML及CSS编码（二）

默认值
margin:
width | height: auto;
float: none;
overflow: visible;
font-size: medium;

ul | ol 居中

	text-align:center 无法使列表居中
	ul, ol{margin: 0 auto;width:100px;}

@media screen and | not| only (条件){}
	
	当屏幕尺寸小于700px
	@media screen and (max-width:700px){}
	当屏幕尺寸小于1200px大于700px
	@media screen and (mix-width:701px) and (max-width: 1200px){}

## xiaowei_mission_6 任务六：通过HTML及CSS模拟报纸排版

[margin垂直合并]()

font-variant:normal | small-caps 

	small-caps 将"小写字母"转化为"小型大写字母".尺寸与原来相比,变得更小.
	normal 默认值

text-transform:uppercase | capitalize | lowercase | none 

	控制文本字母大小写
	uppercase 全部大写
	capilize 首字母大写
	lowercase 全部小写

:first-letter

	选择器 选择文本的首字符

:after
:before

	伪元素,常用与添加元素,清除浮动

	清除浮动
	:after {
		content: "";
		display: table;
		clear:both
	}

注意:如果不能包含其他元素,那么不能添加伪元素,如 input img iframe,
[解决办法为在外边套一个div](https://www.zhihu.com/question/21296044)

font-style: oblique | italic | normal

	字体倾斜
	italic italic斜体,如果无斜体,应用oblique
	oblique oblique斜体,如果无,将普通字体倾斜

text-overflow: ellipsis | clip 

	文本超出容器的显示方式,搭配 overflow 和 white-space 使用
	ellipsis 显示省略号
	clip 剪切 默认值

letter-spacing: px | % | em
	
	字符间距

background: 背景颜色 背景图片 是否重复 

	定义背景,该属性为以下属性的简写
	background-repeat: repeat | norepeat
	background-image: url(xxx.jpg)
	background-size: 
	background-position: left | right | center | px 
	background-origin: padding-box|border-box|content-box;
	
	例 background: black url(../jpg/1.jpg) no-repeat 10px 10px;
	替换列表标志
	background: url(xxx.jpg) no-repeat 8px 20px;

background-size: % | cover | contain

    控制背景图像大小
    cover 等比放大图像,使其完全覆盖背景
    contain 等比放大/缩小图像,直到无法继续.然后用图像重复填充剩余区域.
    例
    设置图像尺寸为150px长,100px高
    background-size:  150px 100px; 
    设置背景图像
    htm {width:100%,height:100%};
    body{background: url(xxx.jpg) no-repeat center;background-size: cover;}
 
background-origin: padding-box|border-box|content-box;

	定义background-position先对定位原点
	如存在 background-attachment:fixed,该属性无效果
	padding-box 相对内边距定位
	border-box 相对盒边定位
	content-box 相对内容定位

white-space :nowrap | pre | pre-wrap | pre-line | normal

	定义段落文本处理方式
	可搭配 overflow:hidden 使用
	pre 保留文本中的空格和换行符,不会自动换行.当段落文本超出容器宽度时,显示滚动条.相当于<pre>
	pre-wrap 保留空格和换行符,超出容器宽度自动换行
	pre-line 合并空格,保留换行符
	normal 默认值

list-style-image :url(../img/4.jpg)
	
	设置列表标记为图像
	list-style-image :url(../img/4.jpg)
注意:无法调整图像大小,应使用background代替

list-style-position: inside |outside

	控制列表标记显示位置
	inside 在文本内显示,可用于修复overflow:hidden导致标记被隐藏的问题
	outside 默认值,在文本左侧显示
	
[text-align: inter-word](http://www.w3school.com.cn/cssref/pr_text-justify.asp)

	当text-align:justigy时,控制文本显示方式
	用处不明

## xiaowei_mission_7

user-select: none;

    禁止用户选择元素内容
user-drag: none;
webkit-user-drag: none;    

    禁止用户腿拽元素(如图片)

[为什么要设置html高度为100%](https://www.cnblogs.com/youxin/p/3345085.html)

    1 html 元素长度|高度 由浏览器窗口控制
    2 html元素默认overflow:auto,因此会自动显示右侧滚动条
    3 当元素width:100%时,其宽度由父元素决定
    4 未显示声明包含块的高度,其百分数高度会重置为auto
    
[绘制三角形](http://www.cnblogs.com/youhong/p/6530575.html)

## xiaowei_mission_9 任务九：使用HTML/CSS实现一个复杂页面

### width: 100% 中的 100% 是谁?

[对于绝对定位元素,其宽度根据父元素padding box计算](https://css-tricks.com/almanac/properties/w/width/#article-header-id-0)

注意 [padding-box已被废除](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing#compat-desktop)


ele1~ele2 选择器

    选择ele1元素后的所有同级ele2元素
    例
    .container~div {}
    
    <div>选不到</div>
    <div class="container"></div>
    <div>能选到</div>
    <div>能选到</div>
    <p></p>
    <div class="">能选到</div>

transform:scale(倍数)

	元素缩放

	chrome不支持小于12px的字体,可以利用scale突破限制
	设置10px字体(scale括号内值为 字号/12)
	font-size:12px;
	transform:scale(0.8333)
[zoom和scale的区别](http://www.zhangxinxu.com/wordpress/2015/11/zoom-transform-scale-diff/)

[transform对普通元素的影响](http://www.zhangxinxu.com/wordpress/2015/05/css3-transform-affect/)

##xiaowei_mission_10 任务十：Flexbox 布局练习

[Flex](https://segmentfault.com/a/1190000002910324)

##xiaowei_mission_10 任务十一：移动Web页面布局实践

### meta标签

meta标签的作用是"描述元数据"(metadata 描述"数据的"数据被称为"元数据",例如右击img文件>属性>详细信息中的分辨率)

meta标签格式
	
	<meta name="" content="">
注意:如果定义了name |http-equiv,必须定义content属性.反之,不能定义content

	name="viewport" 定义视口
	视口指浏览器窗口大小,由浏览器决定.
	在移动设备中,视口通常比浏览器窗口宽,
	利如 宽度为414pt设备的视口为960,

常用viewport
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">


	width=device-width 视口宽度等于设备实际宽度,可通过document.documentElement.clientWidth获得
	initial-scale=1.0 设置初始缩放值为1
	maximum-scale 允许用户缩放值

其他常用标签

	设置字母串格式为UTF-8
	<meta charset="UTF-8">
	定义关键词
	<meta name="keywords" content="xxx">
	安卓 设置chrome浏览器标签栏颜色
	<meta name="theme-color" content="#81D2D8">
	设置dpr(1个CSS像素中有几个真实像素(设备像素).苹果为2,及每个虚拟像素中有4个真实像素)
	可通过window.devicePixelRatio获取
	<meta name="flexible" content="initial-dpr=2">

参考

[使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)

[元数据 阮一峰](http://www.ruanyifeng.com/blog/2007/03/metadata.html)

### rem

根据html元素font-size计算属性数值

	html{font-size:75px}
	div{width:1rem}
	该div宽度为75px

### 移动布局

	1 使用display:inlin-block或display:table代替float
	2 为<a>添加display:block属性,方便点击
	3 使用自适应布局,如 100% 1rem

