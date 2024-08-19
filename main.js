// Do not use duplicate values because they make it more complicated and result in trees that are much harder to balance. Therefore, be sure to always remove duplicate values or check for an existing value before inserting.

// If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  function arrayprep(array) {
    let nodupes = [array[0]]
  
  for (const entry of array) {
    let dupestatus
    
  
    for (const dupcheck of nodupes) {
      if (entry === dupcheck) {
        dupestatus = true
        break
      }          
    }
  
    if (dupestatus !== true) {
      nodupes.push(entry)
    }
  }
  array = nodupes.sort((a, b) => a - b);  
  return array
  }
  

// Build a Tree class/factory which accepts an array when initialized. The Tree class should have a root attribute, which uses the return value of buildTree which you’ll write next.

class Tree {
  constructor(rootdata) {
    this.root = this.buildTree(rootdata)
  }

  
  // Write a buildTree(array) function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

buildTree(array, depth = 0) {
  if (array.length === 0 || Array.isArray(array) === false) {
    return null;
  } 
  let start = 0
  let mid
  let prepped
  let end 

  if (array.length === 1) {
    mid = 0
    prepped = array

  } else {
    prepped = arrayprep(array)
    end= prepped.length - 1
    mid = Math.floor((start + end) / 2)
  }


    let node
    if (prepped.length <= 1) {
      mid = 0
    } else {
      mid = Math.floor((start + end) / 2)
    }
    

  if (start > end || prepped[start] === undefined)
      {
          return null;
      }
      
      node = new Node(prepped[mid], depth); 
      let leftArray = prepped.slice(0, mid);
      let rightArray = prepped.slice(mid + 1);
   
        node.left = this.buildTree(leftArray, depth+1);
    
        node.right = this.buildTree(rightArray, depth + 1);
  
  return node;
  
  }
  

  // Write insert(value)  and deleteItem(value) functions that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples. You may be tempted to implement these methods using the original input array used to build the tree, but it’s important for the efficiency of these operations that you don’t do this. 
  insert(value, node = this.root, depth = 0) {
// console.log(node)
  //is smaller or larger than root?

  //smaller or larger than the next node?

  //continue that tilhit a leaf and insert it

  //run is balance? If false rebalance

    if (node === null) {
     node = new Node(value, depth)    
    return node
    }

   if (node.value > value) {
  node.left = this.insert(value, node.left, depth + 1)
  }

  if (node.value < value) {
 
  node.right = this.insert(value, node.right, depth + 1)
  }

  //Seems to work fine but running rebalance in console found it returning true even though the longest branch is 2 longer than the shortest instead of 1 so likely need to fix something. They short depth correctly. Actually I didnt change the balance check after I added depth value.
  //also need to figure out how to run isBalanced and rebalance after returning the node. Only thing off top of head right now is to make a new function that will run both of them or that handles the final return then after that "function" finishes it can move onto the the balancing stuff.
  return node
}

  deleteItem(value, currentnode = this.root, prevnode = this.root) {
//if deleting a leaf it easy and don't need to change anything beyond previous node no longer pointing at it

//if deleting node with child, same as linked list update the prev node of child with the prev of the deleted node and update the prev with the deleted node's child

//if there two children find the next largest and replace the deleted node with it and delete the leaf where it was. If the one replaced with has a child will need to adjust things for it

//example given is 50 root deleted, to the right is 70, 60, 65. So replace 50 with 60 put 65 as the new next left for 70 instead of 60

  //run is balance? If false rebalance
  // console.log(prevnode.value)

  
  console.log(currentnode)

  if (currentnode.left === null && currentnode.right === null || currentnode === null) {
 
    //Remove childless leaf node, or if there no matching nodes return null.
    if (currentnode.value === value) {
      prevnode.left = null
      prevnode.right = null

      if (this.isBalanced() === false) {
        console.log('false')
      }
            prettyPrint(this.root)

      return prevnode
    }
    return null
  
  }

  if (currentnode.value === value) {
//if deleting node with child, same as linked list update the prev node of child with the prev of the deleted node and update the prev with the deleted node's child
  let direction
  
    if (currentnode.value < prevnode.value) {
      direction = 'left'
    } else {
      direction = 'right'
    }


   if(currentnode.left !== null && currentnode.right === null) {
      prevnode[direction] = currentnode.left
      
    }

    if(currentnode.left === null && currentnode.right !== null) {
      prevnode[direction] = currentnode.right
        
      }

  if(currentnode.left !== null && currentnode.right !== null) {
//if there two children find the next largest and replace the deleted node with it and delete the leaf where it was. If the one replaced with has a child will need to adjust things for it

//example given is 50 root deleted, to the right is 70, 60, 65. So replace 50 with 60 put 65 as the new next left for 70 instead of 60. Or deleted 70, next highest is 75 which is the child of 80. So replace 70 with 75, including changing 75 to 70's children, and set 75.right to 80

// only need to check right subtree since that is the one that is higher
     

    //first iterate through the right branch checking for next highest. Start with simplest of the currentnode.right having no children.

    if (currentnode.right.right === null && currentnode.right.left === null && currentnode.value < currentnode.right.value) 
      console.log('Next highest has no children')
      prevnode.right = currentnode.right
    }

    //Now to figure out how to iterate through all of the remaining right tree. Could this be what the three callback order ones could be used for? I might be able to do it with a while just adding another .right or .left if not null but that seems like would be a mess compared to a simple recursion.

    return prevnode
  }

   if (currentnode.value > value) {
  return  this.deleteItem(value, currentnode.left, currentnode)
  }

  if (currentnode.value < value) {

  return  this.deleteItem(value, currentnode.right, currentnode)
  }


  }

  // Write a find(value) function that returns the node with the given value.
  find(value, currentnode = this.root, i = 0) {
    i++

    if (currentnode.value === value) {

      return currentnode
    }

    if (i >= 1000 || currentnode.left === null && currentnode.right === null) {
      return null
    
    }

     if (currentnode.value > value) {
    return  this.find(value, currentnode.left, i)
    }

    if (currentnode.value < value) {

    return  this.find(value, currentnode.right, i)
    }

    
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

  height(node = this.root) {
  

    if (node == null)
      return 0;
    else {


    if (node.root !== null) {
      node = node.root
    }
      let leftDepth = this.height(node.left);
      let rightDepth = this.height(node.right);

      if (leftDepth > rightDepth)
          return (leftDepth + 1);
       else
          return (rightDepth + 1);
    }
    
  } 


//   // Write a depth(node) function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.


  depth(node, target = node, isFirstCall = true) {
    console.log(node)
    //height node is starting point, for depth node is ending point
    if (isFirstCall === true) {

        if (node === null || node.root === null ) {
            node = this.root;
        }
        
        isFirstCall = false;
       }
         
      if (node === null ) {
      return null
      }
    else {
      if (node === target) {     
        return node.depth;
        } 
      let leftDepth = this.depth(node.left, target, isFirstCall);
      let rightDepth = this.depth(node.right, target, isFirstCall);
          
        if (leftDepth > rightDepth)
          return (leftDepth );
       else
          return (rightDepth);  
  }

}

    
//   Write an isBalanced function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.
  isBalanced(node = this.root, prevdepth = 0) {
    if (node === null)
        return prevdepth;
    else {
        let leftDepth = this.height(this.root.left); // Pass prevdepth without updating it
        let rightDepth = this.height(this.root.right); // Pass prevdepth without updating it
     
        if (Math.abs(leftDepth - rightDepth) <= 1)
            return true;
        else 
            return false;
    }  
}

  // Write a rebalance function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.
  rebalance() {



  }
}


    // Build a Node class/factory. It should have an attribute for the data it stores as well as its left and right children.

class Node extends Tree {
    
  constructor(data, depth) {
    super(data)
    this.value = data;
    this.left = null;
    this.right = null;
    this.depth = depth
  }
}


//Testing

// let testarray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
// let testarray = [1,3,4,5,7,8,9,23,67,324,6345]
let testarray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 23, 67, 6345, 324]
// let testarray = [1,2,3,4,5,6,7]

let bstTree = new Tree(testarray)
// bstTree.insert(6)
// bstTree.insert(10)
// bstTree.insert(11)
// bstTree.insert(12)
prettyPrint(bstTree.root)

bstTree.isBalanced()