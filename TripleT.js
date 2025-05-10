let playerOneSymbol = 'X'
let playerTwoSymbol = 'O'
const board = [[' ',' ',' '],['X','X','X'],[' ',' ',' ']]
//[[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]

//function createPosition () {
console.log(displayBoard(board))
/*
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
        if(winner(board,'X')){
            console.log(displayBoard(board))
            console.log('Player 1 wins!')
        } else if(winner(board,'O')){
            console.log(displayBoard(board))
            console.log('Player 2 wins!')
            break
        } else{
        console.log(displayBoard(board))
        }
    
}
*/
/* experiments with a big board */
function displayBoard(gameState){
    let [[p1, p2, p3],[p4, p5, p6],[p7, p8, p9]] = gameState
    const bigBoard = [[p1,'|', p2,'|', p3],['—','+','—','+','—'],[p4,'|', p5,'|', p6],['—','+','—','+','—'],[p7,'|', p8,'|', p9]]
    console.log(...bigBoard[0])
    console.log(...bigBoard[1])
    console.log(...bigBoard[2])
    console.log(...bigBoard[3])
    console.log(...bigBoard[4])
    return " "
    }
    
function winner(gameBoard,player) {
    console.log(gameBoard)
    console.log(player)
    console.log(gameBoard[0])
    if(rowCheck(gameBoard[0], player) == true || rowCheck(gameBoard[1],player) == true || rowCheck(gameBoard[2], player) == true){
        console.log('Player ',player,' wins!')
        return true
    }
}

function rowCheck(arr,player) {
    console.log(arr)
    console.log(player)
    if(arr == [ 'X', 'X', 'X' ]){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

winner(board,'X')
