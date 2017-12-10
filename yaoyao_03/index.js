var school = {
    '北京': ['清华大学', '北京大学', '中国人民大学', '北京师范大学'],
    '上海': ['复旦大学', '上海交通大学', '同济大学'],
    '湖北': ['武汉大学', '华中科技大学', '华中师范大学'],
};

var init = function() {
    var studentSel = document.getElementById('student-sel');
    var graduateSel = document.getElementById('graduate-sel');
    var cityNameSel = document.getElementById('city-name');
    var schoolNameSel = document.getElementById('school-name');
    document.getElementById('student').addEventListener('click', function(e) {
        studentSel.style.display = 'block';
        graduateSel.style.display = 'none';
    });

    document.getElementById('graduate').addEventListener('click', function(e) {
        studentSel.style.display = 'none';
        graduateSel.style.display = 'block';
    });

    cityNameSel.addEventListener('change', function(e) {
        var schoolQueue = school[cityNameSel.value];
        schoolNameSel.innerHTML = '';
        for (var i = 0; i < schoolQueue.length; i++) {
            var opaNode = document.createElement("option");
            opaNode.innerText = schoolQueue[i];
            schoolNameSel.appendChild(opaNode);
        }
    });
};

init();