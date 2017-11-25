var ground = document.querySelector('.ground');
var inputBox = document.querySelector('.inputBox');
var insert = document.querySelector('.insert');

var nodeEleRender = function(data) {
    var div = document.createElement('div');
    div.classList.add('treeNode');

    var pEle = document.createElement('p');
    pEle.classList.add('data');
    pEle.textContent = data;
    div.appendChild(pEle);
    return div;
};

var Node = function(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
    this.nodeElement = nodeEleRender(data);
};

var Tree = function(data) {
    var node = new Node(data);
    this._root = node;
};

Tree.prototype.traverseDF = function(callback, currentNode) {
    length = currentNode.children.length;
    for (var i = 0; i < length; i++) {
        tracerseDF(callback, currentNode.children[i]);
    }
    callback(currentNode);
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

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data);
    var parent = null;

    var callback = function(node) {
        if (node.data === toData) {
            parent = node;
        }
    };
    this.contains(callback, traversal);
    if (parent) {
        parent.children.push(child);
        parent.nodeElement.appendChild(child.nodeElement);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

function visual(queue) {
    var i = 0;
    var animation = setInterval(function() {
        if (i < queue.length) {
            queue[i].classList.add('highlight');
            i++;
        } else {
            clearInterval(animation);
        }
    }, 600);
}

function plantTree() {
    var tree = new Tree('0');
    tree.add('1-1', '0', tree.traverseDF);
    tree.add('1-2', '0', tree.traverseDF);
    tree.add('1-3', '0', tree.traverseDF);
    tree.add('2-1', '1-1', tree.traverseDF);
    tree.add('2-2', '1-1', tree.traverseDF);
    tree.add('2-3', '1-1', tree.traverseDF);
    tree.add('2-1', '1-2', tree.traverseDF);
    tree.add('2-2', '1-2', tree.traverseDF);
    tree.add('2-1', '1-3', tree.traverseDF);
    tree.add('2-2', '1-3', tree.traverseDF);
    return tree;
}

function initTree(tree) {
    tree.contains(function(node) {
        node.nodeElement.classList.remove('highlight', 'highlight-always');
    }, tree.traverseDF);
    document.querySelector('.ground').innerHTML = '';
    document.querySelector('.ground').appendChild(tree._root.nodeElement);
}

function init() {
    var tree = plantTree();
    document.querySelector('.ground').innerHTML = '';
    document.querySelector('.ground').appendChild(tree._root.nodeElement);

    tree.contains(function(node) {
        node.nodeElement.addEventListener('click', function(event) {
            event.stopPropagation();
            initTree(tree);
            selectEled = event;
            event.target.classList.add('highlight-always');
        });
    }, tree.traverseDF);

    document.querySelector('.depthSearch').addEventListener('click', function() {
        initTree(tree);
        var queue = [];
        tree.contains(function(node) {
            queue.push(node.nodeElement);
        }, tree.traverseDF);
        visual(queue);
    });

    document.querySelector('.search.btn').addEventListener('click', function() {
        initTree(tree);
        var data = inputBox.value;
        var queue = [];
        var find = [];
        tree.contains(function(node) {
            queue.push(node.nodeElement);
            if (node.data === data) {
                find.push(node.nodeElement);
            }
        }, tree.traverseDF);
        visual(queue);

        setTimeout(function() {
            if (find.length === 0) {
                alert('not find');
            } else {
                for (var i = 0; i < find.length; i++) {
                    find[i].classList.add('highlight-always');
                }
            }
        }, (queue.length + 1) * 600);

    });

    document.querySelector('.insert').addEventListener('click', function() {
        tree.contains(function(node) {
            var isfocus = node.nodeElement.classList.contains('highlight-always');
            if (isfocus) {
                var child = new Node(inputBox.value);
                child.parent = node;
                node.children.push(child);
                node.nodeElement.appendChild(child.nodeElement);
                initTree(tree);
            }
        }, tree.traverseDF);
    });

    document.querySelector('.delete').addEventListener('click', function(event) {
        tree.contains(function(node) {
            var isfocus = node.nodeElement.classList.contains('highlight-always');
            if (isfocus) {
                var parent = node.parent;
                var index;
                for (var i=0; i <parent.children.length; i++) {
                    if (parent.children[i].data === node.data) {
                        index = i;
                    }
                }
                parent.children.splice(index, 1);
                parent.nodeElement.removeChild(node.nodeElement);
                initTree(tree);
            }
        }, tree.traverseDF);

    });
}
init();