/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    // Checks rows and columns
    for (let i=0; i<9; i++) {
        if ( !isValidRow(board[i].slice()) ) {return false;}
        if ( !isValidCol(board.slice(), i) ) {return false;}
    }

    // Checks squares
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if ( !isValidSquare(board.slice(), i, j) ) {return false;}
        }
    }

    return true;

};

/**
 * @param {character[]}
 * @return {boolean}
*/
function isValidRow(row) {
    row.sort();
    for (let i=0; i<8; i++) {
        if (row[i] == '.') { continue; }
        if (row[i] == row[i+1]) {
            return false;
        }
    }
    return true;
}

/**
 * @param {character[][]}
 * @param {number}
 * @return {boolean}
*/
function isValidCol(board, colNum) {
    const col = board.map((row) => row[colNum]);
    col.sort();
    for (let i=0; i<8; i++) {
        if (col[i] == '.') { continue; }
        if (col[i] == col[i+1]) {
            return false;
        }
    }
    return true;
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
            square.push(board[i][j]);
        }
    }
    square.sort();
    for (let i=0; i<8; i++) {
        if (square[i] == '.') { continue; }
        if (square[i] == square[i+1]) {
            return false;
        }
    }
    return true;
}

module.exports = isValidSudoku;