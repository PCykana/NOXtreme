let playerOneSymbol = 'X'
let playerTwoSymbol = 'O'

const board = [[' ','X',' '],['O',' ',' '],[' ',' ','O']]
let [[p1, p2, p3],[p4, p5, p6],[p7, p8, p9]] = board
console.log(p2)
/* experiments with a big board */
const bigBoard = [[p1,'|', p2,'|', p3],['—','+','—','+','—'],[p4,'|', p5,'|', p6],['—','+','—','+','—'],[p7,'|', p8,'|', p9]]
console.log(...bigBoard[0])
console.log(...bigBoard[1])
console.log(...bigBoard[2])
console.log(...bigBoard[3])
console.log(...bigBoard[4])


