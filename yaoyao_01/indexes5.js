'use strict';

var inputBox = document.getElementsByClassName('input')[0];
var remindBoard = document.getElementsByClassName('remind')[0];
var isCnAndEnChar = function isCnAndEnChar(string) {
    var regExp = /^[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|[a-zA-Z]$/;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = string[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            if (!regExp.test(i)) {
                return false;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return true;
};
var checkName = function checkName() {
    var name = inputBox.value;
    var isStandard = isCnAndEnChar(name);
    var length = Array.from(name).length;
    if (!name) {
        remindBoard.innerText = '姓名不能为空';
        remindBoard.style.color = 'red';
    } else if (!isStandard || length < 4 || length > 16) {
        remindBoard.innerText = "必填,长度为4~16个字符";
        remindBoard.style.color = 'red';
    } else {
        remindBoard.innerText = '名称格式正确';
        remindBoard.style.color = 'green';
    }
};