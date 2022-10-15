const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.left;
        return node;
      } else if (node.right === null) {
        node = node.right;
        return node;
      }
      let aux = this.min(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  min(node = this.root) {
    if (node.left === null) {
      return node;
    } else {
      return this.min(node.left);
    }
  }

  max(node = this.root) {
    if (node.right === null) {
      return node;
    } else {
      return this.max(node.right);
    }
  }

  root() {
    return this.root;
  }

  find(node = this.root, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.find(node.left, data);
    } else if (data > node.data) {
      return this.find(node.right, data);
    } else {
      return node;
    }
  }

  has(data) {
    if (this.find(data) === null) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
