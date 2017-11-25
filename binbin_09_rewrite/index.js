var Node = function(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
    this.element = document.createElement('div');
};

var Tree = function(data) {
    var node = new Node(data);
    this._root = node;
};

Tree.prototype.traverseDF = function(callback) {
    (function recurse(currentNode) {
        var length = currentNode.children.length;
        for (var i = 0; i < length; i++) {
            recurse(currentNode.children[i]);
        }
        callback(currentNode);
    })(this._root);
};

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.addByNode = function(data, toNode, traversal) {
    var node = new Node(data);
    node.parent = toNode;
    toNode.children.push(node);
    toNode.element.appendChild(node.element);
    //this.renderDom.call(this);
};

Tree.prototype.addByData = function(data, toData, traversal) {
    var parent = null;
    var callback = function(node) {
        if (node.data === toData) {
            parent = node;
        }
    };
    this.contains(callback, traversal);

    var child = new Node(data);
    child.data = data;
    child.parent = parent;
    parent.children.push(child);
    parent.element.appendChild(child.element);
};

Tree.prototype.removeByNode = function(node, traversal) {
    var parent = node.parent;

    var index = parent.children.indexOf(node);
    if (index !== -1) {
        parent.element.removeChild(node.element);
        parent.children[i].splice(i, 1);
    }
    // for (var i = 0; i < parent.children.length; i++) {
    //     if (parent.children[i] === node) {
    //         parent.element.removeChild(node.element);
    //         parent.children.splice(i ,1);
    //     }
    // }
};

Tree.prototype.initDom = function(traversal) {
    var callback = function(node) {
        node.element.className = '';
        node.element.classList.add('treeNode');
    };
    this.contains(callback, traversal);
};

Tree.prototype.renderDom = function(traversal) {
    var that = this;
    var callback = function(node) {

        var e = node.element;
        e.classList.add('treeNode');

        var p = document.createElement('p');
        p.classList.add('data');
        p.innerText = node.data;
        e.appendChild(p);
        //chicked highlight
        e.addEventListener('click', function() {
            that.initDom(that.traverseDF);
            event.target.classList.add('highlight-always');
        });
    };
    this.contains(callback, this.traverseDF);
};

var initTree = function() {
    var tree = new Tree('0');
    tree.addByData('1-1', '0', tree.traverseDF);
    tree.addByData('1-2', '0', tree.traverseDF);
    tree.addByData('1-3', '0', tree.traverseDF);
    tree.addByData('2-1', '1-1', tree.traverseDF);
    tree.addByData('2-2', '1-1', tree.traverseDF);
    tree.addByData('2-3', '1-1', tree.traverseDF);
    tree.addByData('2-1', '1-2', tree.traverseDF);
    tree.addByData('2-2', '1-2', tree.traverseDF);
    tree.addByData('2-1', '1-3', tree.traverseDF);
    tree.addByData('2-2', '1-3', tree.traverseDF);
    tree.renderDom(tree.traverseDF);
    document.querySelector('.ground').appendChild(tree._root.element);
    return tree;
};

var init = function() {
    var tree = initTree();
    var inputBox = document.querySelector('.inputBox');

    var insertBtn = document.querySelector('.insert');
    insertBtn.addEventListener('click', function() {
        var toNode = null;
        var callback = function(node) {
            var classList = node.element.classList;
            if (classList.contains('highlight-always')) {
                toNode = node;
            }
        };
        tree.contains(callback, tree.traverseDF);

        if (focus) {
            var data = inputBox.value;
            tree.addByNode(data, toNode, tree.traverseDF);
        }
        tree.renderDom();
    });

    var delBtn = document.querySelector('.delete');
    delBtn.addEventListener('click', function(event) {
        var toNode = null;
        var callback = function(node) {
            var classList = node.element.classList;
            if (classList.contains('highlight-always')) {
                toNode = node;
            }
        };
        tree.contains(callback, tree.traverseDF);
        tree.removeByNode(toNode);
        //tree.renderDom();
    });

    var deSearchBtn = document.querySelector('.depthSearch');
    deSearchBtn.addEventListener('click', function() {
        var queue = [];
        var callback = function(node) {
            queue.push(node.element);
        };
        tree.contains(callback, tree.traverseDF);

        var timer = setInterval(function() {
            if (queue.length > 0) {
                var ele = queue.shift();
                ele.classList.add('highlight');
            } else {
                tree.initDom(tree.traverseDF);
                clearInterval(timer);
            }
        }, 100);
    });

    var searchBtn = document.querySelector('.search');
    searchBtn.addEventListener('click', function() {
        var queue = [];
        var match = [];
        var callback = function(node) {
            queue.push(node.element);
            if (node.data === inputBox.value) {
                match.push(node.element);
            }
        };
        tree.contains(callback, tree.traverseDF);
        var timer = setInterval(function() {
            if (queue.length > 0) {
                var ele = queue.shift();
                ele.classList.add('highlight');
            } else {
                tree.initDom(tree.traverseDF);
                clearInterval(timer);
                for (var i = 0; i < match.length; i++) {
                    match[i].classList.add('highlight-always');
                }
            }
        }, 100);

    });

    var magicBtn = document.querySelector('.magic');
    magicBtn.addEventListener('click', function(){
        var tree = new Tree('0');
        tree.addByData('1', '0', tree.traverseDF);
        tree.addByData('2', '1', tree.traverseDF);
        tree.addByData('3', '2', tree.traverseDF);
        tree.addByData('4', '3', tree.traverseDF);
        tree.addByData('5', '4', tree.traverseDF);
        tree.addByData('6', '5', tree.traverseDF);
        tree.addByData('7', '6', tree.traverseDF);
        tree.addByData('8', '7', tree.traverseDF);
        tree.addByData('9', '8', tree.traverseDF);
        tree.addByData('10', '9', tree.traverseDF);
        tree.addByData('11', '10', tree.traverseDF);
        tree.addByData('12', '11', tree.traverseDF);
        tree.addByData('13', '12', tree.traverseDF);
        tree.addByData('14', '13', tree.traverseDF);
        tree.addByData('15', '14', tree.traverseDF);
        tree.addByData('16', '15', tree.traverseDF);
        tree.addByData('17', '16', tree.traverseDF);
        tree.addByData('18', '17', tree.traverseDF);

        tree.renderDom(tree.traverseDF);
        document.querySelector('.ground').innerHTML = '';
        document.querySelector('.ground').appendChild(tree._root.element);


        var queue = [];
        callback = function(node) {
            queue.push(node.element);
        };
        tree.contains(callback, tree.traverseDF);
        var timer = setInterval(function(){
            if (queue.length > 0) {
                var ele = queue.shift();
                ele.classList.add('rotation');
            } else {
                clearInterval(timer);
            }
        },100);
    });

};

init();