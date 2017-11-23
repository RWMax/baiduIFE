var ground = document.querySelector('.ground');

function node(nodeNum) {
    this.left = null;
    this.right = null;
    this.nodeElement = null;
}

function binaryTree(treeHight = 2) {
    var currentNode = new node();

    if (treeHight > 0) {
        treeHight--;
        currentNode.left = binaryTree(treeHight);
        currentNode.right = binaryTree(treeHight);
    };
    return currentNode;
}

function randerTree(treeNode) {
    var divEle = document.createElement('div');
    divEle.classList.add('treeNode');
    if (treeNode.left != null) {
        divEle.appendChild(randerTree(treeNode.left));
    }
    if (treeNode.right != null) {
        divEle.appendChild(randerTree(treeNode.right));
    }

    treeNode.nodeElement = divEle;
    return divEle;
}

function plantTree() {
    ground.innerHTML = '';
    var tree = binaryTree();
    ground.appendChild(randerTree(tree));
    return tree;    
}

var queue;
function highlight(element) {
    queue.push(element);
}

function visual(method, tree){
    queue = [];
    method(tree);
    var i = 0;
    var ani = setInterval(function(){
        if (i > queue.length - 1) {
            clearInterval(ani);
        } else {
            queue[i].classList.add('highlight');
            i++;
        }
    }, 600);
}

function preOrder(tree) {
    if (tree) {
        highlight(tree.nodeElement);
        preOrder(tree.left);
        preOrder(tree.right);
    }
}

function inOrder(tree) {
    if (tree) {
        inOrder(tree.left);
        highlight(tree.nodeElement);
        inOrder(tree.right);
    }    
}

function postOrder(tree) {
    if(tree) {
        postOrder(tree.left);
        postOrder(tree.right);
        highlight(tree.nodeElement);
    }
}

function init() {
    document.querySelector('.preOrder').addEventListener('click', function() {
        visual(preOrder,plantTree());
    });
    document.querySelector('.inOrder').addEventListener('click', function() {
        visual(inOrder,plantTree());
    });
    document.querySelector('.postOrder').addEventListener('click', function() {
        visual(postOrder,plantTree());
    });
    plantTree();
}

init();
