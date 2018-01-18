
var myChart = echarts.init(document.getElementById('main'));
baseDate = +new Date('2014.1.1');
oneDay = 24 * 60 * 60 * 1000;

dateArr = [];
for (var i = 1; i <= 20; i++){
    date =  new Date(baseDate + oneDay * i);
    dateStr = [date.getMonth() + 1, date.getDate()].join('/');
    dateArr.push(dateStr);
}

function randomArr() {
    dataArr = [];
    for (var i = 0; i < 10; i++){
        var num = Math.random() * 4;
        dataArr.push(num);
    }
    return dataArr;   
}


var option = {
    title: {
        itemGap: 16,
        top: 30,
        left: 40,
        text: "what's my credit score?",
        subtext: 'Puerto Rico, % decrease on a year earlier',
        textStyle: {
            fontSize: 24,
            fontWeight: 700,
            color: '#24262A',
        }
    },
    grid: {
        y: 165,
    },
    legend: {
        left: 40,
        top: 120,
        itemGap: 20,
        itemWidth: 36,
        itemHeight: 20,
        borderRadius: 0,
        data:['Population', 'GDP'],
        textStyle: {
            fontSize: 20,
        },
    },

    xAxis: [{ 
        
        data: [2006, 07, 08, 09, 10, 11, 12, 13, 14, 15],
        axisTick: {
            inside: true,
            alignWithLabel: true,
        },
        axisLabel: {
            fontSize: 20,
        },
        axisLine:{
            onZero:false, 
            lineStyle: {
                width: 2

            },
        },
    },{
        axisLine:{
            lineStyle:{
                color:'#FA001D',
                width:2,
            }
        },
    }],
    yAxis: {
        type: 'value',
        position: 'right',
        axisTick: {
            // length: 7,
            // lineStyle: {
            //     width: 1,
            // },  
            // color: '#fff',
            show: false, 
        },
        axisLabel:{
            fontSize: 20,
        },
        splitLine: {
            lineStyle: {
                color: '#ffffff',
            },
        },
        max: 4,
        min: 0,
        inverse: true,
        axisLine: {
            show: false,
        },
        //data: [0, 1, 2, 3, 4],
    },
    backgroundColor: '#C9DCE6',
    textStyle: {
        //color: '#0eb83a'
    },
    series: [{
        name: 'Population',
        type: 'bar',
        itemStyle: {  
            normal: {
                color: '#004F6A',
            }
        },
        data: randomArr(),
    },
    {
        name: 'GDP',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#009DDA',
            }
        },
        data: randomArr(),
    }]
};
myChart.setOption(option);
