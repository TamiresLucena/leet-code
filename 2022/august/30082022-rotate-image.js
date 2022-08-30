// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]


function rotate(matrix) {
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

let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(matrix)
