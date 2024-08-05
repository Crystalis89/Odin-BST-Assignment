// Do not use duplicate values because they make it more complicated and result in trees that are much harder to balance. Therefore, be sure to always remove duplicate values or check for an existing value before inserting.

// If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };


// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

class Tree {
  root = null;

  constructor(parameters) {
    
  }


  // Write a buildTree(array) function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

  buildTree(array) {

    if (start > end)
      {
          return null;
      }

      //check array for duplicates


      //sort array lowest to highest
      array.sort((a, b) => a - b);  

//  Get the middle element and make it root



  }


  // Write insert(value)  and deleteItem(value) functions that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples. You may be tempted to implement these methods using the original input array used to build the tree, but it’s important for the efficiency of these operations that you don’t do this. 
  insert(value) {



  }

  deleteItem(value) {



  }

  // Write a find(value) function that returns the node with the given value.
  find(value) {


    
  }

  // Write a levelOrder(callback) function that accepts a callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. levelOrder may be implemented using either iteration or recursion (try implementing both!

  levelOrder(callback) {


    
  }

  //     Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback.


  inOrder(callback) {


    
  } 
  

  preOrder(callback) {


    
  }
  
  
  postOrder(callback) {


    
  }

  //     Write a height(node) function that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.

  height(node) {


    
  } 

  // Write a depth(node) function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.
  depth(node) {


    
  }

  // Write an isBalanced function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
  isBalanced() {


    
  }

  // Write a rebalance function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  rebalance() {



  }
}


    // Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

class Node extends Tree {
   // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
  
  constructor(parameters) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}



















