var ground = document.querySelector('.ground');

var Node = function(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
    this.nodeElement = document.createElement('div');
    this.nodeElement.classList.add('treeNode');
    var pEle = document.createElement('p');
    pEle.classList.add('data');
    pEle.textContent = data;
    this.nodeElement.appendChild(pEle);

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
        console.log(currentNode.data);
        var length = currentNode.children.length;
        for (var i = 0; i < length; i++) {
            recurse(currentNode.children[i]);
        }
        callback(currentNode);
    })(this._root);

};

Tree.prototype.contains = function(callback, traversal = tree.traverseDF) {
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
    document.querySelector('.ground').innerHTML = '';
    document.querySelector('.ground').appendChild(tree._root.nodeElement);
    return tree;
}

function init() {
    plantTree();
    document.querySelector('.depthSearch').addEventListener('click', function() {
        var tree = plantTree();
        var queue = [];
        tree.contains(function(node) {
            queue.push(node.nodeElement);
        }, tree.traverseDF);
        visual(queue);
    });

    document.querySelector('.search.btn').addEventListener('click', function() {
        var tree = plantTree();
        var data = document.querySelector('.inputBox').value;
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
                for (var i of find) {
                    i.classList.add('highlight-always');
                }
            }
        }, (queue.length + 1) * 600);

    });
}
init();