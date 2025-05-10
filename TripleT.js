let playerOneSymbol = 'X'
let playerTwoSymbol = 'O'
const board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
// [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]

//function createPosition () {

console.log(displayBoard(board))

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
            break
        } else if(winner(board,'O')){
            console.log(displayBoard(board))
            console.log('Player 2 wins!')
            break
        } else if(drawCheck(board)){
            console.log('*spooky western music* This game ends in a draw pardner.')
        } else {
        console.log(displayBoard(board))
        }
    
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
    return " "
    }


function winner(gameBoard, player) {
    if(rowCheck(gameBoard[0], player) == true || rowCheck(gameBoard[1], player) == true || rowCheck(gameBoard[2], player) == true){
        return true
    }else if(columnCheck(gameBoard, player) == true ){
        return true
    }else if(diagCheck(gameBoard, player)){
        return true
    }else {
        return false
    }
}

function rowCheck(arr, player) {
    if(player == arr[0] && arr[0] == arr[1] && arr[1] == arr[2]){
        return true
    } else {
        return false
    }
}

function columnCheck(arr,player){
    let isAWin = false   
    for (let c = 0; c < 3; c++) {
        if(player == arr[0][c] && arr[0][c] == arr[1][c] && arr[1][c] == arr[2][c]){
            isAWin = true
            break
        }
    }
    return isAWin
}

function diagCheck(arr, player){
    /* console.log(displayBoard(board))
    console.log(player)
    console.log(arr[1][1])
    console.log(arr[0][0])
    console.log(arr[2][2])
    */
    if(player == arr[1][1] && ((arr[1][1] == arr[0][0] && arr[0][0] == arr[2][2]) || (arr[1][1] == arr[0][2] && arr[0][2] == arr[2][0]))){
        return true
    } else {
        return false
    }
}

function drawCheck(arr){
    let isADraw = false
    for(let d = 0; d < array.length; d++) {
        if(arr[d].includes(' ')){
        isADraw = true
        break
        }
    }
    return isADraw
}