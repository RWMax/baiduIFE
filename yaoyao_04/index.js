var s = {};
s.turnLeftBtn = document.getElementById('turn-left');
s.turnRightBtn = document.getElementById('turn-right');
s.turnBackBtn = document.getElementById('turn-back');
s.MoveBtn = document.getElementById('move');
s.element = document.getElementById('square');
s.site = [0, 0];
s.faceAngle = 0;

s.render = function() {
    s.element.style.transform = `rotate(${s.faceAngle}deg)`;
    var hor = s.site[0] * 50 + 2;
    var ver = s.site[1] * 50 + 2;
    s.element.style.top = ver + 'px';
    s.element.style.left = hor + 'px';
};

s.init = function() {
    s.turnLeftBtn.onclick = function() {
        s.faceAngle -= 90;
        s.render();
    };

    s.turnRightBtn.onclick = function() {
        s.faceAngle += 90;
        s.render();
    };

    s.turnBackBtn.onclick = function() {
        s.faceAngle += 180;
        s.render();
    };

    s.MoveBtn.onclick = function() {
        var angle;
        if (s.faceAngle < 0) {
            angle = 360 - Math.abs(s.faceAngle) % 360;
        } else {
            angle = s.faceAngle;
        }

        if (angle % 360 === 0) {
            // up
            if (s.site[1] > 0) {
                s.site[1] -= 1;
            }
        } else if (angle % 360 === 270) {
            // left
            if (s.site[0] > 0) {
                s.site[0] -= 1;
            }
        } else if (angle % 360 === 180) {
            // down
            if (s.site[1] < 9) {
                s.site[1] += 1;
            }
        } else if (angle % 360 === 90) {
            // right
            if (s.site[0] < 9) {
                s.site[0] += 1;
            }
        }
        s.render();
    };

};

s.init();
s.render();