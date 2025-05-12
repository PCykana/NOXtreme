const playerOneSymbol = 'X' // creates a constant to hold the symbol for player 1
const playerTwoSymbol = 'O' // creates a constant to hold the symbol for player 2
let player = '' // creates an empty string placeholder to swap between player identification for player turn output
let stamp = '' // creates an empty string variable placeholder to swap between player symbols when updating the board state
let finalMessage = '' // creates an empty string variable placeholder to update the message shown below the board for each iteration
const board = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']] // not null but it's the empty(space character filled) array of arrays to keep track of the game board
// [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']] <-- this stays for quick copy/paste re-sets if I need to troubleshoot a function

// displayBoard destructures the board array as the gameState parameter, and appends a message at the end of the displayed board, if no message is passed it defaults to a null space.
const displayBoard = ([[p1, p2, p3],[p4, p5, p6],[p7, p8, p9]] = gameState, message = '') => console.log(`\n ${p1} | ${p2} | ${p3}\n — + — + —\n ${p4} | ${p5} | ${p6} \n — + — + —\n ${p7} | ${p8} | ${p9}\n\n${message}`)

// switches player based on modulo operator of current loop iteration passed in as i by changing the global variabls player and stamp.
const playerCheck = (i) => (i % 2 == 0) ? (player = 'Player 1', stamp = playerOneSymbol) : (i % 2 == 1) ? (player = 'Player 2', stamp = playerTwoSymbol) : console.log('Error') 

const winner = (gameBoard, position, symbol) => // makes a function wrangler(i don't know if there's a proper term for this) for going through win states
    rowCheck(gameBoard[position[0]], symbol, position[0]) ? true // checks the row containing the last move to see if there is a win
    : columnCheck(gameBoard, position[1], symbol) ? true // checks the column containing the last move to see if there is a win
    : diagCheck(gameBoard, symbol) ? true // checks both diagonals for a win
    : false // retruns false to continue game

// checks to see if all the characters in a specified row matche the current player character
const rowCheck = (arr, symbol, row) => symbol == arr[0] && arr[0] == arr[1] && arr[1] == arr[2] ? (finalMessage =`${player} wins on row ${row+1}!`, true) : false

// checks to see if all the characters in a specified column match the current player symbol
const columnCheck = (arr, col, symbol) => symbol == arr[0][col] && arr[0][col] == arr[1][col] && arr[1][col] == arr[2][col] ? (finalMessage =`${player} wins on column ${col+1}!`, true) : false

// checks to see if all the characters in a diagonal match the current player character
const diagCheck = (arr, symbol) => symbol == arr[1][1] && ((arr[1][1] == arr[0][0] && arr[0][0] == arr[2][2]) || (arr[1][1] == arr[0][2] && arr[0][2] == arr[2][0])) ? (finalMessage =`${player} wins on a diagonal!`, true) : false 

// the game call it self
displayBoard(board)    
// the main for loop- each iteration is a turn
for (let i = 0; i < 9; i++) {
    let row = 0 // creates an internally scoped variable for row
    let column = 0 // creates an internally scoped variable for column
    let checkPosition = true // creates an assignable condition to regulate the while loop so it knows when to stop generating new numbers
    playerCheck(i)

    console.log(`It's ${player}'s turn (${stamp})\n`) 
    
    while (checkPosition) {
        column = Math.floor(Math.random() * 3)
        row = Math.floor(Math.random() * 3)
        console.log(row,column)  // Re-entered and commented out because I think it's neat for showing people
        // but doesn't need to be on all the time
        board[row][column] == ' ' ? checkPosition = false : checkPosition = true
    }
    
    board[row][column] = stamp
   

    if(winner(board, [row, column], stamp)){
        break
    }  else if(drawCheck(board)){
        break
    } else {   
        displayBoard(board,`${player} chooses row ${row+1}, column ${column+1}.\n`)
    }

 //winner(board,stamp) ? (displayBoard(board, `${player} wins!`), while = break) :
    
 }
displayBoard(board, finalMessage)


function drawCheck(arr){
    let isADraw = true
    for(let d = 0; d <arr.length; d++) {
        if(arr[d].includes(' ')){
        isADraw = false
        break
        }else{
            finalMessage = '*spooky western music* This game ends in a draw pardner.' 
        }
    }
    return isADraw
}

/*!SECTION original ES5 function versions and non-es6 refactors for functions that have been changed to ES6

// displayBoard function creates a visually appealing board by destructuring the game board, passed in as gameState,
// and places the values in a larger arry with character formatting to visually create rows and columns.
// function then displays the inner arrays with the spread operator to remove the array's commas and brackets
/*
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

*/
// displayBoard function creates a visually appealing board by destructuring the game board, passed in as gameState,
// and laces those values in a console logged string to create the illusion of a game board.
/*
function displayBoard(gameState){      
    let [[p1, p2, p3],[p4, p5, p6],[p7, p8, p9]] = gameState
    console.log(`\n ${p1} | ${p2} | ${p3}\n — + — + —\n ${p4} | ${p5} | ${p6} \n — + — + —\n ${p7} | ${p8} | ${p9}\n`)
}
*/

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
/*
function columnCheck(arr,symbol){
    let isAWin = false   
    for (let c = 0; c < arr.length; c++) {
        if(symbol == arr[0][c] && arr[0][c] == arr[1][c] && arr[1][c] == arr[2][c]){
            finalMessage =`${player} wins on column ${c+1}!`
            isAWin = true
            break
        }
    }
    return isAWin
}
*/

/*
function diagCheck(arr, player){
    if(player == arr[1][1] && ((arr[1][1] == arr[0][0] && arr[0][0] == arr[2][2]) || (arr[1][1] == arr[0][2] && arr[0][2] == arr[2][0]))){
        return true
    } else {
        return false
    }
}
*/

const checkRow = (row) => board[row][column] == board[row][column-1] && board[row][column] == board[row][column+1]