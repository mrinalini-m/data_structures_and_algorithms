function solveNQueens(n) {
  const result = [],
    board = createBoard(n)

  // [0]
  function placeQueen(r) {
    //  [1]
    if (r === n) {
      result.push(deepCopyBoard(board))
      return
    }

    for (let c = 0; c < n; c++) {
      // [2]
      board[r][c] = 'Q'
      if (isValidCell(board, r, c)) placeQueen(r + 1)
      board[r][c] = '.'
    }
  }

  placeQueen(0)
  return result
}

/*
Notes:
  [0] DFS recursive function recurses on row then column.
  [1] Base case is handled inside loop so don't need to pass column as param.
      So, only completely valid board will reach the end.
  [2] Place queen and go to next move if valid. Otherwise 'backtrack'.
*/

// Helper functions
/* Will check above given row - Diagonal left and right and col. 
TODO: Optimize
*/
function isValidCell(board, row, col) {
  // Vertical column check
  let upCol_row = row - 1
  while (upCol_row > -1) {
    if (board[upCol_row][col] === 'Q') return false
    upCol_row--
  }

  // Top half Diagonal left check
  let upDiaLeft = { col: col - 1, row: row - 1 }
  while (upDiaLeft['row'] > -1 && upDiaLeft['col'] > -1) {
    if (board[upDiaLeft['row']][upDiaLeft['col']] === 'Q') return false
    upDiaLeft['row']--
    upDiaLeft['col']--
  }

  // Top half Diagonal right check
  let upDiaRight = { col: col + 1, row: row - 1 }
  while (upDiaRight['row'] > -1 && upDiaRight['col'] < board.length) {
    if (board[upDiaRight['row']][upDiaRight['col']] === 'Q') return false
    upDiaRight['row']--
    upDiaRight['col']++
  }

  return true
}

function createBoard(n) {
  const board = []
  for (let i = 0; i < n; i++) {
    const elem = new Array(n).fill('.')
    board.push(elem)
  }
  return board
}

/* Copy and format matrix to what leetcode wants. */
function deepCopyBoard(board) {
  const copy = []
  for (const row of board) {
    copy.push(row.slice(0).join(''))
  }
  return copy
}

// Tests
console.log(solveNQueens(4))
/* 
n = 4
[ 
 [".Q..",
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",
  "Q...",
  "...Q",
  ".Q.."]
]
*/
console.log(solveNQueens(5))
/* 
n = 5
[
  ['Q....', '..Q..', '....Q', '.Q...', '...Q.'],
  ['Q....', '...Q.', '.Q...', '....Q', '..Q..'],
  ['.Q...', '...Q.', 'Q....', '..Q..', '....Q'],
  ['.Q...', '....Q', '..Q..', 'Q....', '...Q.'],
  ['..Q..', 'Q....', '...Q.', '.Q...', '....Q'],
  ['..Q..', '....Q', '.Q...', '...Q.', 'Q....'],
  ['...Q.', 'Q....', '..Q..', '....Q', '.Q...'],
  ['...Q.', '.Q...', '....Q', '..Q..', 'Q....'],
  ['....Q', '.Q...', '...Q.', 'Q....', '..Q..'],
  ['....Q', '..Q..', 'Q....', '...Q.', '.Q...']
]
*/

console.log(solveNQueens(0))
