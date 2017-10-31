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
	当窗口宽度小于100px时,显示smaller.jpg
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

### html_mission_2 零基础HTML及CSS编码（一）
载入css
<link rel="stylesheet" type="text/css" href="css/index.css">

html5 标签
	<article>
	<footer>
	<figure>
	<figcaption>
