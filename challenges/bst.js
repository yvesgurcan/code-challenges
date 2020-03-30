/*
BST Successor Search
In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the node with the smallest key greater than the key of the input node (see examples below). Given a node inputNode in a BST, you’re asked to write a function findInOrderSuccessor that returns the Inorder Successor of inputNode. If inputNode has no Inorder Successor, return null.

Explain your solution and analyze its time and space complexities.
*/

/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 ********************************************************/

// 5 -> 9
// 9 -> 11
// 11 -> 12
// 12 -> 14
// 14 -> 20
// 20 -> 25
// 25 -> null

// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
    // inputNode = 14
    const rightNode = inputNode.right; // null
    if (rightNode) {
        if (rightNode.left) {
            let currentNode = rightNode.left;
            while (currentNode) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                }
                return currentNode;
            }
        }

        return rightNode;
    }

    const parent = inputNode.parent; // 12
    if (parent) {
        // false
        if (parent.left === inputNode) {
            return parent;
        }

        let currentNode = parent;
        while (currentNode) {
            if (currentNode.parent) {
                currentNode = currentNode.parent;
            }

            return currentNode.parent;
        }
    }
};

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
    var root = this.root;

    // 1. If the tree is empty, create the root
    if (!root) {
        this.root = new Node(key);
        return;
    }

    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert it
    var currentNode = root;
    var newNode = new Node(key);

    while (currentNode !== null) {
        if (key < currentNode.key) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
};

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function(key) {
    var currentNode = this.root;

    while (currentNode) {
        if (key === currentNode.key) {
            return currentNode;
        }

        if (key < currentNode.key) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }

    return null;
};

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
// bst.insert(4);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(14);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if (succ) {
    console.log('Inorder successor of ' + test.key + ' is ' + succ.key);
} else {
    console.log('Inorder successor does not exist');
}
