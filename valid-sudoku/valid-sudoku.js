/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    // Checks rows and columns
    for (let i=0; i<9; i++) {
        if ( !isValidRow(board[i]) ) {return false;}
        if ( !isValidCol(board, i) ) {return false;}
    }

    // Checks squares
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if ( !isValidSquare(board, i, j) ) {return false;}
        }
    }

    return true;

};

/**
 * @param {character[]}
 * @return {boolean}
*/
function isValidRow(row) {
    if ( noDuplicates(row) ) {
        return true;
    }
    return false;
}

/**
 * @param {character[][]}
 * @param {number}
 * @return {boolean}
*/
function isValidCol(board, colNum) {
    const col = board.map((row) => row[colNum]);

    if ( noDuplicates(col) ) {
        return true;
    }
    return false;
}

/**
 * @param {character[][]}
 * @param {number} row - 3x3 square row index
 * @param {number} col - 3x3 square col index
 * @return {boolean}
*/
function isValidSquare(board, row, col) {
    let square = [];
    const startRow = row*3;
    const endRow = row*3+3;
    const startCol = col*3;
    const endCol = col*3+3;
    for (let i=startRow; i<endRow; i++) {
        for (let j=startCol; j<endCol; j++) {
            if (board[i][j] != "."){
                square.push(board[i][j]);
            }
        }
    }
    if ( noDuplicates(square) ) {
        return true;
    }
    return false;
}

function noDuplicates(arr) {
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] == '.') { continue; }
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] == '.') { continue; }
            if (arr[i] == arr[j]) {return false; }
        }
    }
    return true;
}

module.exports = isValidSudoku;