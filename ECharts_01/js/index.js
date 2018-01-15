
var myChart = echarts.init(document.getElementById('main'));
baseDate = +new Date('2014.1.1');
oneDay = 24 * 60 * 60 * 1000;

dateArr = [];
for (var i = 1; i <= 20; i++){
    date =  new Date(baseDate + oneDay * i);
    dateStr = [date.getMonth() + 1, date.getDate()].join('/');
    dateArr.push(dateStr);
};

dataArr = [];
for (var i = 0; i < 20; i++){
    var num = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    dataArr.push(num);
};

var option = {
    title: {
        text: 'Echarts 1',
        left: 'center',
        textStyle: { // 标题字体样式
            fontSize: 32,
            fontWeight: 300,
            color: '#0eb83a',
            fontFamily: 'Helvetica'
        }
    },
    tooltip: {
    },
    legend: { // 标签说明
        data:['bar', 'line'],
        left: 'right',
        textStyle:{
            color: '#0eb83a',
        }
    },
    xAxis: { // 横轴
        //data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        data: dateArr
    },
    
    yAxis: { // 纵轴

    },
    backgroundColor: '#fefefe',
    textStyle: {
        color: '#0eb83a'
    },
    series: [{ // 数据
        name: 'bar',
        type: 'bar', // 图表类型,柱状图
        barWidth: 30, // 柱子宽度
        itemStyle: {  
            normal: {

                color: new echarts.graphic.LinearGradient(
                    0, 1, 1, 0, // 渐变色起始(0)/停止(1)位置,分别对应右/下/左/上
                    [
                        {offset: 0, color: '#96e6a1'}, //offset 渐变位置, 范围为0~1
                        //{offset: 0.5, color: '#888'},
                        {offset: 1, color: '#d4fc79'},
                    ]
                )
            }
        },
        //data: [5, 20, 36, 10, 10, 20]
        data: dataArr
    },
    {
        name: 'line',
        type: 'line', // 图标类型,折线图
        itemStyle: {
            normal: {
                color: '#9ed048'
            }
        },
        //data:[5, 10, 15, 20, 25, 30]
        data: dataArr
    }]
};
myChart.setOption(option);
