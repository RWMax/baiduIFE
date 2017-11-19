var squreQueueElement = document.querySelector('.squre-queue');
var inputBox = document.querySelector('.input-box');

function addLeft(side) {
    if (!/^\d+$/.test(inputBox.value)) {
        alert('the input must be number');
        inputBox.value = '';
        inputBox.focus();
        return;
    }
    var liElement = document.createElement('li');
    liElement.addEventListener('click', delself);
    liElement.style.height = inputBox.value + 'px';
    liElement.textContent = inputBox.value;
    if (side === 'left') {
        squreQueueElement.insertBefore(liElement, squreQueueElement.childNodes[0]);
    } else if (side === 'right') {
        squreQueueElement.appendChild(liElement);
    }
}

document.querySelector('.add-left').addEventListener('click', (arg) => {
    return addLeft('left');
});

document.querySelector('.add-right').addEventListener('click', (arg) => {
    return addLeft('right');
});

function delLeft() {
    var ChildEle = squreQueueElement.querySelectorAll('li');
    var firstChildEle = ChildEle[0];
    firstChildEle.parentNode.removeChild(firstChildEle);
}

function delRight() {
    var ChildEle = squreQueueElement.querySelectorAll('li');
    var lastChild = ChildEle[ChildEle.length - 1];
    lastChild.parentNode.removeChild(lastChild);
}

document.querySelector('.del-left').addEventListener('click', delLeft);
document.querySelector('.del-right').addEventListener('click', delRight);

function delself() {
    this.parentNode.removeChild(this);
}
var ChildEle = squreQueueElement.querySelectorAll('li');
for (var i = 0; i < ChildEle.length; i++) {
    ChildEle[i].addEventListener('click', delself);
}

// binbin_05

function randomAddEle() {
    squreQueueElement.innerHTML = '';
    for (var i = 0; i < 50; i++) {
        var liElement = document.createElement('li');
        liElement.addEventListener('click', delself);
        liElement.style.height = Math.floor(Math.random() * 90 + 10) * 2 + 'px';
        squreQueueElement.appendChild(liElement);
    }
}
document.querySelector('.random-add').addEventListener('click', randomAddEle);
randomAddEle();

function bubbleSort() {
    var QueueLength = squreQueueElement.querySelectorAll('li').length;
    for (var i = 0; i < QueueLength - 1; i++) {
        for (var j = 0; j < QueueLength - 1 - i; j++) {
            var ChildEle = squreQueueElement.querySelectorAll('li');
            var divEleHeight = window.getComputedStyle(ChildEle[j])['height'].match(/\d+/)[0];
            var nexteleHeight = window.getComputedStyle(ChildEle[j + 1])['height'].match(/\d+/)[0];
            if (Number(divEleHeight) > Number(nexteleHeight)) {
                squreQueueElement.insertBefore(ChildEle[j + 1], ChildEle[j]);
                ChildEle[j].style.background = 'red';
            }
        }
    }
}

document.querySelector('.bubble-sort').addEventListener('click', bubbleSort);