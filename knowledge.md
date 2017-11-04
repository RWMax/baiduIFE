# 知识点

### question

	1 overflow 对兄弟元素间的影响
	2 bfc 设计模式
	3 box-sizing:border-box chrome与其他浏览器的显示区别

## xiaowei_mission_l 零基础HTML编码

[<ul> <ol>](https://www.w3schools.com/html/html_lists.asp)

	无序列表 ul
	有序列表 ol
	格式 
		<ul style="list-style-type:none;">
			<li></li>
		</ul>
		<ol type="A">
			<li></li>
		</ol>
		<dl>
			<dt>名称</dt>
			<dd>描述</dd>
		</dl>
	list-style-type:none | disc ...
	type="1 | a | A" ...
[<a>](https://www.w3schools.com/html/html_links.asp)

	<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
	target = "_blank" 在新页打开
             "_self" 在同一页打开

	<div id="a"></div>
	<a href="#a">跳转到id为a的元素</a>
[<img>](https://www.w3schools.com/html/html_images.asp)

	<img src="" alt= "">
	src 图片链接
	alt 文字,加载失败时显示

[<picture>](http://www.w3cplus.com/html5/quick-tip-how-to-use-html5-picture-for-responsive-images.html) (html5)

	指定不同条件下,显示不同图像
	<picture>
	<source media="(max-width:100px)" srcset="smaller.jpg">
	<img src="large.jpg">
	</picture>
	当窗口宽度小于100px时,显示 smaller.jpg

[<figure> <figcaption>](http://www.w3school.com.cn/tags/tag_figure.asp)

[<span>]()

[<time>]()

[<table> <thead> <tbody> <tfoot> <tr> <th> <td>](http://www.w3school.com.cn/tags/tag_table.asp)

table,tr,th,... {border: 0} 边框宽度,为0时无边框

[<form> cn](https://www.w3schools.com/tags/tag_form.asp)
[<form> en](https://www.w3schools.com/html/html_forms.asp)

	<form action="地址" method="post"></form>

[<input>](http://www.w3school.com.cn/tags/tag_input.asp)

	<input type="radio" id="" value="" checked="checked" name="">
	type = "text | radio | password | submit | checkbox | email"
	name input元素名称

[<maxlength> <minlength>](http://www.w3school.com.cn/tags/att_input_maxlength.asp)

	允许输入的最大|最小字符个数

[<pattern>](http://www.w3school.com.cn/tags/att_input_pattern.asp)

	<input type="text" pattern="[0-9]{3,10}">
	允许输入字符格式,接受正则

[<placeholder>](http://www.w3school.com.cn/tags/att_input_placeholder.asp)

	<input type="text" placeholder="这是一个输入框">
	输入框为空时显示,获得焦点是自动消失

[<label>](http://www.w3school.com.cn/tags/tag_label.asp)

	<label for="#id"></label>
	<label><input type="" name=""></label>

[<for>](http://www.w3school.com.cn/tags/att_label_for.asp)

[<select> 复选框]()

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

## xiaowei_mission_4 任务四：定位和居中问题

opacity: 0.5 透明度

[z-index: 1 | 2 ...]()
	
	控制元素堆叠顺序,数值大的在上面
	当 position: absolute | relative | fixed 时,z-index生效(top...等也一样)

### [居中](https://css-tricks.com/centering-css-complete-guide/)

#### 水平居中

- 行内元素

		text-align: center;
- 块状元素

		margin: 0 auto;

- 多个块状元素

		.parent{display: inline-block;}
		.ele{text-align:center;}	
		
		.parent{
			display: flex;
			justify-content: center;
		}

#### 垂直居中

- 行内元素 单行

		padding-top:30px;
		padding-bottom:30px;

		height:100px;
		line-height:100px;

- 行内元素 多行

		.parent{display:table;vertical-align:middle;}
		.element{display:table-cell;vertical-align:middle;}

		.parent::before {
			content: "";
			display: inline-block;
			height: 100%;
			width: 0;
			vertical-align: middle;
		}
		.element {
			display: inline-block;
			vertical-align: middle;
			width: calc()
		}
注意: inline-block模式 会在元素间产生缝隙,当元素宽度为100%时,会被挤下去(尽管::before宽度设置为0)

- 块状元素 高度已知

		position: absolute;
		top: 50%;
		height: 100px;
		margin-top: -50px;
    
- 块状元素 未知高度

		display:absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
注:absolute会导致 margin: auto 失效,用{left: 50%; transform: translateX(-50%);} 水平居中
	 
- 高度不为auto,无margin 块状元素 
https://www.zhihu.com/question/35113393

		display:absolute;
		top:0;
		bottom:0;
		left:0;
		right:0;
		margin: auto;	

[清除inline-black元素间的缝隙](https://www.zhihu.com/question/21468450)

	设置容器字体大小为0,在子元素里改回来
	.container {font-size:0;}
	.container * {font-size: medium;}
	
BFC 模式
	
	todo

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

[两栏 三栏布局](http://ife.baidu.com/note/detail/id/666)