var nameInput = document.querySelector(".name input");
var passwordInput = document.querySelector(".password input");
var pswConfirmInput = document.querySelector(".password-confirm input");
var emailInput = document.querySelector(".email input");
var phoneInput = document.querySelector(".phone input");
var checkBtn = document.querySelector(".check-post");

var nameOnBlur = function() {
    var value = this.value;
    var sidetip = this.nextElementSibling;
    var length = Array.from(value).length;
    if (!value) {
        sidetip.innerText = '名称不能为空';
        sidetip.style.color = 'red';
    } else if (length < 4 || length > 16) {
        sidetip.innerText = "必填,长度为4~16个字符";
        sidetip.style.color = 'red';
    } else {
        sidetip.innerText = '名称格式正确';
        sidetip.style.color = 'green';
    }
};

var passwordOnBlur = function() {
    var value = this.value;
    var sidetip = this.nextElementSibling;
    var length = Array.from(value).length;
    if (!value) {
        sidetip.innerText = '密码不能为空';
        sidetip.style.color = 'red';
    } else if (length < 4 || length > 16) {
        sidetip.innerText = "必填,长度为4~16个字符";
        sidetip.style.color = 'red';
    } else {
        sidetip.innerText = '密码可用';
        sidetip.style.color = 'green';
    }
};

var pswConfirmOnBlur = function() {
    var sidetip = this.nextElementSibling;
    var isEqual = pswConfirmInput.value === passwordInput.value;
    if (isEqual) {
        sidetip.innerText = '密码一致';
        sidetip.style.color = 'green';
    } else {
        sidetip.innerText = '密码不一致';
        sidetip.style.color = 'red';
    }
};

var emailOnBlur = function() {
    var value = this.value;
    var sidetip = this.nextElementSibling;
    var length = Array.from(value).length;
    var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value) {
        sidetip.innerText = '邮箱不能为空';
        sidetip.style.color = 'red';
    } else if (!emailRegExp.test(value)) {
        sidetip.innerText = "邮箱格式错误";
        sidetip.style.color = 'red';
    } else {
        sidetip.innerText = '邮箱格式正确';
        sidetip.style.color = 'green';
    }
};

var phoneOnBlur = function() {
    var value = this.value;
    var sidetip = this.nextElementSibling;
    var regExp = /^[0-9]{13}$/;
    if (!value) {
        sidetip.innerText = '手机号码不能为空';
        sidetip.style.color = 'red';
    } else if (!regExp.test(value)) {
        sidetip.innerText = "手机号码错误";
        sidetip.style.color = 'red';
    } else {
        sidetip.innerText = '手机正确';
        sidetip.style.color = 'green';
    }
};

var checkData = function() {
    var sidetipQueue = document.querySelectorAll(".prompt .sidetip");
    for (var i = 0; i < sidetipQueue.length; i++) {
        var color = sidetipQueue[i].style.color;
        if (color != 'green') {
            alert('输入有误');
            return;
        }
    }
    alert('输入正确');
};

var init = function() {
    nameInput.addEventListener('blur', nameOnBlur);
    passwordInput.addEventListener('blur', passwordOnBlur);
    pswConfirmInput.addEventListener('blur', pswConfirmOnBlur);
    emailInput.addEventListener('blur', emailOnBlur);
    phoneInput.addEventListener('blur', phoneOnBlur);
    checkBtn.addEventListener('click', checkData);

    var inputQueue = document.querySelectorAll(".prompt input");
    for (var i = 0; i < inputQueue.length; i++) {
        var node = inputQueue[i];
        node.addEventListener('focus', (function() {
            var that = node;
            return function() {
                that.nextElementSibling.style.display = 'inline';
            };
        })());
    }
};

init();