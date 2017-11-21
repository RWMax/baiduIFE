var ContainerEle = document.querySelector('.squre-queue');
var inputBoxEle = document.querySelector('.input-box');
var numQueue = [];

function renderQueue(array = numQueue) {
    ContainerEle.innerHTML = '';

    for (var i = 0; i < array.length; i++) {
        var liEle = document.createElement('li');
        liEle.textContent = array[i];
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

function insertQueue(position) {
    var inputList = inputBoxEle.value.split(/[,;\s]/);
    if (position == 'left') {
        for (let i of inputList) {
            numQueue.unshift(i);
        }
    } else if (position == 'right') {
        for (let i of inputList) {
            numQueue.push(i);
        }
    }
}

function search(array) {
    var inputList = inputBoxEle.value.split(/[,;\s]/);
    var liQueue = document.getElementsByTagName('li');
    for (let i of inputList) {
        for (let liEle of liQueue) {
            if (liEle.textContent.match(i)) {
                liEle.style.background = 'yellow';
            }
        }
    }
}

function initInputBox() {
    inputBoxEle.value = '';
    inputBoxEle.focus();
}

(function init() {
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

    document.querySelector('.search').addEventListener('click', () => {
        renderQueue();
        search();
        initInputBox();
    });

    initInputBox()
})();