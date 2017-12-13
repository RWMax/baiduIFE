var s = {};
s.turnLeftBtn = document.getElementById('turn-left');
s.turnRightBtn = document.getElementById('turn-right');
s.turnBackBtn = document.getElementById('turn-back');
s.MoveBtn = document.getElementById('move');
s.element = document.getElementById('square');
s.face = 'top';
s.site = [0, 0];
s.faceIndex = '0';
s.faceTab = ['top', 'right', 'down', 'left'];

s.render = function() {
    if (s.face === 'top') {
        s.element.style.transform = 'rotate(0deg)';
    } else if (s.face === 'right') {
        s.element.style.transform = 'rotate(90deg)';
    } else if (s.face === 'down') {
        s.element.style.transform = 'rotate(180deg)';
    } else if (s.face === 'left') {
        s.element.style.transform = 'rotate(-90deg)';
    }
    var hor = s.site[0] * 50 + 2;
    var ver = s.site[1] * 50 + 2;
    s.element.style.top = ver + 'px';
    s.element.style.left = hor + 'px';
};

s.init = function() {
    s.turnLeftBtn.onclick = function() {
        s.face = 'left';
        s.render();
    };

    s.turnRightBtn.onclick = function() {
        s.face = 'right';
        s.render();
    };

    s.turnBackBtn.onclick = function() {
        s.face = 'down';
        s.render();
    };

    s.MoveBtn.onclick = function() {
        if (s.face === 'top') {
            if (s.site[1] > 0) {
                s.site[1] -= 1;
            }
        } else if (s.face === 'right') {
            if (s.site[0] < 9) {
                s.site[0] += 1;
            }
        } else if (s.face === 'down') {
            if (s.site[1] < 9) {
                s.site[1] += 1;
            }
        } else if (s.face === 'left') {
            if (s.site[0] > 0) {
                s.site[0] -= 1;
            }
        }
        s.render();
    };

};

s.init();
s.render();