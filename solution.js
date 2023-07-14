/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    let left = 0;
    let right = n - 1;
    let result = [];

    while (top <= bottom && left <= right) {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom && left <= right) {
            // Traverse bottom row
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;

            // Traverse left column
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}
