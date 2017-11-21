var ContainerEle = document.querySelector('.squre-queue');
var inputBoxEle = document.querySelector('.input-box');
var numQueue = [];


function renderQueue(array = numQueue) {
    ContainerEle.innerHTML = '';

    for (var i = 0; i < array.length; i++) {
        var liEle = document.createElement('li');
        liEle.style.height = array[i] * 4 + 'px';
        liEle.addEventListener('click', (() => {
            var order = i;
            return () => {
                console.log(order);
                numQueue.splice(order, 1);
                renderQueue(numQueue);
            };
        })());

        ContainerEle.appendChild(liEle);
    }
}

function randomArr(num = 100) {
    numQueue = [];
    for (var i = 0; i < num; i++) {
        numQueue.push(Math.floor(Math.random() * 90) + 10);
    }
}

function insertQueue(position) {
    var count = Number(inputBoxEle.value);
    if (count < 10 || count > 100 || isNaN(count)) {
        alert('请输入10-100间的数字');
        return;
    }
    if (numQueue.length >= 100) {
        alert('超过100个元素');
        return;
    }

    if (position == 'left') {
        numQueue.unshift(count);
    } else if (position == 'right') {
        numQueue.push(count);
    }
}

var sortStep = [];

function bubbleSort(array = numQueue) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
            sortStep.push(JSON.parse(JSON.stringify(array)));
        }
    }
}

// function quickSort(array) {
//     if (array.length <= 1) {
//         return array.slice(0);
//     };
//     var mid = [array[0]];
//     var left = [];
//     var right = [];

//     for (var i = 1; i < array.length; i++) {
//         if (array[i] < mid[0]) {
//             left.push(array[i]);
//         } else {
//             right.push(array[i]);
//         }
//     }

//     return quickSort(left).concat(mid.concat(quickSort(right)));
// }

function quickSort(array, start = 0, end = array.length - 1) {
    var midIndex = start;
    for (var i = start + 1; i <= end; i++) {
        if (array[i] < array[midIndex]) {
            var temp = array[i];
            array.splice(i, 1);
            array.splice(start, 0, temp);
            midIndex++;
            sortStep.push(JSON.parse(JSON.stringify(array)));
        }

    }
    if (start < midIndex - 1) {
        quickSort(array, start, midIndex - 1)
    }

    if (end > midIndex - 1) {
        quickSort(array, midIndex + 1, end)
    }

}

function sortVisual(sortFuncName, array) {
    sortFuncName(array);
    var sortAnimation = setInterval(function() {
        if (sortStep.length > 0) {
            renderQueue(sortStep.shift());
        } else if (sortStep.length = 0) {
            clearInterval(sortAnimation);
        }
    }, 30);
}


function initInputBox() {
    inputBoxEle.value = '';
    inputBoxEle.focus();
}

(function init() {
    document.querySelector('.random-add').addEventListener('click', () => {
        randomArr();
        renderQueue();
    });

    document.querySelector('.add-left').addEventListener('click', () => {
        insertQueue('left');
        renderQueue();
        initInputBox();
    });

    document.querySelector('.add-right').addEventListener('click', () => {
        insertQueue('right');
        renderQueue();
        initInputBox();
    });

    document.querySelector('.del-left').addEventListener('click', () => {
        numQueue.shift();
        renderQueue();
    });

    document.querySelector('.del-right').addEventListener('click', () => {
        numQueue.pop();
        renderQueue();
    });

    document.querySelector('.bubble-sort').addEventListener('click', () => {
        sortVisual(bubbleSort, numQueue);
    });

    document.querySelector('.quick-sort').addEventListener('click', () => {
        sortVisual(quickSort, numQueue);
        // quickSort(numQueue);
        // renderQueue();
    });

    randomArr();
    renderQueue();
    initInputBox()
})();