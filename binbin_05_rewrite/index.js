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
                sortStep.push(JSON.parse(JSON.stringify(array)));
            }
        }
    }
}

function bubbleMarkSort(array = numQueue) {
    var endIndex = array.length - 1;

    while (endIndex > 0) {
        var lastSwapIndex;
        for (var i = 0; i < endIndex; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                lastSwapIndex = i;
                sortStep.push(JSON.parse(JSON.stringify(array)));
            }
        }
        endIndex = lastSwapIndex;
    }
}

function bubbleTwoSideSort(array = numQueue) {
    var start = 0;
    var end = array.length - 1;
    while (start < end) {
        for (var i = start; i < end; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sortStep.push(JSON.parse(JSON.stringify(array)));
            }
        }
        end--;
        for (var i = end; i > start; i--) {
            if (array[i - 1] > array[i]) {
                var temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
                sortStep.push(JSON.parse(JSON.stringify(array)));
            }
        }
        start++;
    }
}

//test
if (false) {
    var l = [2, 1, 4, 5, 6, 7, 8, 1];
    bubbleTwoSideSort(l);
    console.log(l);
}


function selectSort(array) {
    var endIndex = array.length - 1,
        minIndex;

    for (var i = 0; i < endIndex; i++) {
        minIndex = i;
        for (var j = i + 1; j <= endIndex; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }

        }
        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        sortStep.push(JSON.parse(JSON.stringify(array)));
    }
}

function insertSort(array) {
    for (var i = 1; i < array.length; i++) {
        var j = i - 1;
        while (j >= 0 && array[i] < array[j]) {
            j--;
        }
        var temp = array[i];
        array.splice(i, 1);
        array.splice(j + 1, 0, temp);
        sortStep.push(JSON.parse(JSON.stringify(array)));
    }
}

function quickSort(array, start = 0, end = array.length - 1) {
    var midIndex = start;
    for (var i = start + 1; i <= end; i++) {
        if (array[i] < array[midIndex]) {
            var temp = array[i];
            array.splice(i, 1);
            array.splice(start, 0, temp);
            midIndex++;
        }
        sortStep.push(JSON.parse(JSON.stringify(array)));
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
    }, 10);
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

    document.querySelector('.bubble-sort-mark').addEventListener('click', () => {
        sortVisual(bubbleMarkSort, numQueue);
    });

    document.querySelector('.bubble-sort-two').addEventListener('click', () => {
        sortVisual(bubbleTwoSideSort, numQueue);
    });

    document.querySelector('.select-sort ').addEventListener('click', () => {
        sortVisual(selectSort, numQueue);
    });

    document.querySelector('.insert-sort ').addEventListener('click', () => {
        sortVisual(insertSort, numQueue);
    });

    document.querySelector('.quick-sort').addEventListener('click', () => {
        sortVisual(quickSort, numQueue);
    });

    randomArr();
    renderQueue();
    initInputBox();
})();