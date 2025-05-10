let playerOneSymbol = 'X'
let playerTwoSymbol = 'O'
const board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]


//function createPosition () {

for (let i = 0; i < 9; i++) {
    
    let row = 0
    let column = 0
    let checkPosition = true
        while (checkPosition) {
        column = Math.floor(Math.random() * 3)
        row = Math.floor(Math.random() * 3)
        console.log(row,column)
        if(board[row][column] == ' '){
            checkPosition = false
        } else {
            checkPosition = true
        }
        }
        if(i % 2 == 0) {
            board[row][column] = 'X'
        } else if(i % 2 == 1) {
            board[row][column] = 'O'
        } else { console.log('error')}

   setTimeout(displayBoard(board), '3000')
    
}


/* experiments with a big board */
function displayBoard(gameState){
    let [[p1, p2, p3],[p4, p5, p6],[p7, p8, p9]] = gameState
    const bigBoard = [[p1,'|', p2,'|', p3],['—','+','—','+','—'],[p4,'|', p5,'|', p6],['—','+','—','+','—'],[p7,'|', p8,'|', p9]]
    console.log(...bigBoard[0])
    console.log(...bigBoard[1])
    console.log(...bigBoard[2])
    console.log(...bigBoard[3])
    console.log(...bigBoard[4])
    }
    

