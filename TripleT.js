const playerOneSymbol = 'X' // creates a constant to hold the symbol for player 1
const playerTwoSymbol = 'O' // creates a constant to hold the symbol for player 2
let player = '' // creates an empty string placeholder to swap between player identification for player turn output
let stamp = '' // creates an empty string variable placeholder to swap between player symbols when updating the board state
const board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']] // not null but it's the empty(space character filled) array of arrays to keep track of the game board
// [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']] <-- this stays for quick copy/paste re-sets if i need to troubleshoot a function
const playerCheck = (i) => (i % 2 == 0) ? (player = 'Player 1', stamp = playerOneSymbol) : (i % 2 == 1) ? (player = 'Player 2', stamp = playerTwoSymbol) : console.log('Error') // switches player based on modulo operator of current loop iteration passed in as i

const winner = (gameBoard, symbol) => // makes a function for going through win states
    rowCheck(gameBoard[0], symbol) || rowCheck(gameBoard[1], symbol) || rowCheck(gameBoard[2], symbol) ? true // checks each row to see if there is a win
    : columnCheck(gameBoard, symbol)? true // checks each column to see if there is a win
    : diagCheck(gameBoard, symbol) ? true // checks both diagonals for a win returns true 
    : false // retruns false to continue game

const rowCheck = (arr, player) => player == arr[0] && arr[0] == arr[1] && arr[1] == arr[2] ? true : false // checks to see if all the characters in a row match the current player character
const diagCheck = (arr, player) => player == arr[1][1] && ((arr[1][1] == arr[0][0] && arr[0][0] == arr[2][2]) || (arr[1][1] == arr[0][2] && arr[0][2] == arr[2][0])) ? true : false // checks to see if all the characters in a diagonal match the current player character

// the game call it self
displayBoard(board)
for (let i = 0; i < 9; i++) {
    let row = 0
    let column = 0
    let checkPosition = true
    playerCheck(i)

    console.log(`It's ${player}'s turn (${stamp})`) 
    
    while (checkPosition) {
        column = Math.floor(Math.random() * 3)
        row = Math.floor(Math.random() * 3)
        // console.log(row,column)  // Re-entered and commented out because I think it's neat for showing people
        // but doesn't need to be on all the time
        if(board[row][column] == ' '){
            checkPosition = false
        } else {
            checkPosition = true
        }
    }

    board[row][column] = stamp

    if(winner(board, stamp)){
        displayBoard(board)
        console.log(`${player} wins!`)
        break
    }  else if(drawCheck(board)){
        displayBoard(board)
        console.log('*spooky western music* This game ends in a draw pardner.')
    } else {   
        displayBoard(board)
    }
}

// displayBoard function creates a visually appealing board by destructuring the game board, passed in as gameState,
// and places the values in a larger arry with character formatting to visually create rows and columns.
// function then displays the inner arrays with the spread operator to remove the array's commas and brackets
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


/*
function playerCheck(i){
    if(i % 2 == 0) {
        player = 'Player 1'
        stamp = playerOneSymbol
    } else if(i % 2 == 1) {
        player = "Player 2"
        stamp = playerTwoSymbol
    } else { 
        console.log('error')
    }
}
*/

/*
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
    */

/*
function rowCheck(arr, player) {
    if(player == arr[0] && arr[0] == arr[1] && arr[1] == arr[2]){
        return true
    } else {
        return false
    }
}
*/


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
/*
function diagCheck(arr, player){
    if(player == arr[1][1] && ((arr[1][1] == arr[0][0] && arr[0][0] == arr[2][2]) || (arr[1][1] == arr[0][2] && arr[0][2] == arr[2][0]))){
        return true
    } else {
        return false
    }
}
*/

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