const playerOneSymbol = 'X'
const playerTwoSymbol = 'O'
let player = ''
const board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
// [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]


displayBoard(board)
for (let i = 0; i < 9; i++) {
    let row = 0
    let column = 0
    let checkPosition = true

    if(i % 2 == 0) {
        player = playerOneSymbol
    } else if(i % 2 == 1) {
        player = playerTwoSymbol
    } else { 
        console.log('error')
    }

    console.log("It's ", player,"'s turn") 
    
    while (checkPosition) {
        column = Math.floor(Math.random() * 3)
        row = Math.floor(Math.random() * 3)    
        if(board[row][column] == ' '){
            checkPosition = false
        } else {
            checkPosition = true
        }
    }

    board[row][column] = player

    if(winner(board,'X')){
        displayBoard(board)
        console.log('Player 1 wins!')
        break
    } else if(winner(board,'O')){
        displayBoard(board)
        console.log('Player 2 wins!')
        break
    } else if(drawCheck(board)){
        displayBoard(board)
        console.log('*spooky western music* This game ends in a draw pardner.')
    } else {   
        displayBoard(board)
    }
}


function displayBoard(gameState){
    let [[p1, p2, p3],[p4, p5, p6],[p7, p8, p9]] = gameState
    const bigBoard = [
        ['\n', p1,'|', p2,'|', p3],
        ['\n', '—','+','—','+','—'],
        ['\n', p4,'|', p5,'|', p6],
        ['\n', '—','+','—','+','—'],
        ['\n', p7,'|', p8,'|', p9,'\n']
    ]
    console.log(...bigBoard[0],...bigBoard[1],...bigBoard[2],...bigBoard[3],...bigBoard[4])
}

function winner(gameBoard, player) {
    if(rowCheck(gameBoard[0], player) || rowCheck(gameBoard[1], player) || rowCheck(gameBoard[2], player)){
        return true
    }else if(columnCheck(gameBoard, player)){
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
    for (let c = 0; c < arr.length; c++) {
        if(player == arr[0][c] && arr[0][c] == arr[1][c] && arr[1][c] == arr[2][c]){
            isAWin = true
            break
        }
    }
    return isAWin
}

function diagCheck(arr, player){
    if(player == arr[1][1] && ((arr[1][1] == arr[0][0] && arr[0][0] == arr[2][2]) || (arr[1][1] == arr[0][2] && arr[0][2] == arr[2][0]))){
        return true
    } else {
        return false
    }
}

function drawCheck(arr){
    let isADraw = true
    for(let d = 0; d <arr.length; d++) {
        if(arr[d].includes(' ')){
        isADraw = false
        break
        }
    }
    return isADraw
}