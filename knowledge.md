# 知识点

### html_mission_l 零基础HTML编码

[ul ol](https://www.w3schools.com/html/html_lists.asp)

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
[a](https://www.w3schools.com/html/html_links.asp)

	<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
	target = "_blank" 在新页打开
			 "_self" 在同一页打开

	<div id="a"></div>
	<a href="#a">跳到id为a的元素</a>
[img](https://www.w3schools.com/html/html_images.asp)

	<img src="" alt= "">
	src 图片链接
	alt 文字,加载失败时显示

[picture](http://www.w3cplus.com/html5/quick-tip-how-to-use-html5-picture-for-responsive-images.html) html5

	<picture>
	<source media="(max-width:100px)" srcset="smaller.jpg">
	<img src="large.jpg">
	</picture>
	当窗口宽度小于100px时,显示 smaller.jpg

[figure figcaption](http://www.w3school.com.cn/tags/tag_figure.asp)

[span]()

[time]()

[table thead tbody tfoot tr th td](http://www.w3school.com.cn/tags/tag_table.asp)

	border 边框宽度,为0时无边框

[form cn](https://www.w3schools.com/tags/tag_form.asp)

	<form action="地址" method="post"></form>

[form en](https://www.w3schools.com/html/html_forms.asp)

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

## html_mission_2 零基础HTML及CSS编码（一）
载入css样式文件

	<link rel="stylesheet" type="text/css" href="css/index.css">

### css

[font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

	font-family: "Goudy Bookletter 1911", sans-serif;
	"xxx" 具体的字体名,如 微软雅黑
	xxx 一类字体,如 衬线体

position:  | absolute | fixed

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