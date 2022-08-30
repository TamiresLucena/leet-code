/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
     let n = matrix.length
    let aux = []

    for(let j=0; j< n; j++){
      for(let i=(n-1); i>= 0; i--){
        aux.push(matrix[i][0])
        matrix[i].shift()
      }
      matrix.push(aux)
      aux = []
    }
    for(let m=0; m<n; m++){
      matrix.shift()
    }
};