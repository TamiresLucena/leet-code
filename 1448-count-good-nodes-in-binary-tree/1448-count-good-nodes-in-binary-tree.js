/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    if(!root) return 0
    
    let count = 1
   
    function maxNode(node, max){
        if(!node) return
        
        if(node.val >= max){
            count ++
        }
        
        let maxx = node.val >= max ? node.val : max
        
        maxNode(node.left, maxx)
        maxNode(node.right, maxx)
    }
    
    maxNode(root.left, root.val)
    maxNode(root.right, root.val)
    
    return count
      
};

