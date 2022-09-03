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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let aux = []
    let average = []
    if(!root) return average;
    
    aux.push(root);
    
    while(aux.length > 0) {
        let tam = aux.length
        
        let sum = 0;
        let qtd = 0;
        
         for (let i=0; i<tam ; i++) {
            const current = aux.shift()
            sum += current.val;
            qtd ++;

            if(current.left) aux.push(current.left);
            if(current.right) aux.push(current.right); 
         }
        average.push((sum/qtd)) 
    }
    return average;       
};