var myChart = echarts.init(document.getElementById('main'));

function randomArr() {
    dataArr = [];
    for (var i = 0; i < 10; i++){
        var num = Math.random() * (3.5 - 0.5) + 0.5;
        dataArr.push(num);
    }
    return dataArr;   
}

var option = {
    title: {
        top: 30,
        left: 40,
        itemGap: 16,
        text: "what's my credit score?",
        subtext: 'Puerto Rico, % decrease on a year earlier',
        textStyle: {
            fontSize: 30,
            fontWeight: 700,
            color: '#24262A',
        },
        subtextStyle: {
            fontSize: 20,
            color: '#00000A',
        },
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
        textStyle: {
            fontSize: 20,
        },
        data:['Population', 'GDP'],
    },

    xAxis: [{ 
        axisTick: {
            inside: true,
            alignWithLabel: true,
            length: 8,
            lineStyle: {
                width: 2,
            },      
        },
        axisLabel: {
            fontSize: 20,
        },
        axisLine:{
            onZero:false, 
            lineStyle: {
                width: 2,
            },
        },
        data: [2006, 07, 08, 09, 10, 11, 12, 13, 14, 15],
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
        max: 4,
        min: 0,
        inverse: true,
        axisTick: {
            // length: 7,
            // lineStyle: {
            //     width: 1,
            // },  
            // color: '#fff',
            show: false, 
        },
        axisLine: {
            show: false,
        },
        axisLabel:{
            fontSize: 20,
        },
        splitLine: {
            lineStyle: {
                color: '#ffffff',
                width: 2,
            },
        },

    },
    backgroundColor: '#C9DCE6',
    textStyle: {
        //color: '#0eb83a'
    },
    series: [{
        name: 'Population',
        type: 'bar',
        barGap: 0,
        barWidth: 14,
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
        barGap: 0,
        barWidth: 14,
        itemStyle: {
            normal: {
                color: '#009DDA',
            }
        },
        data: randomArr(),
    }]
};
myChart.setOption(option);
