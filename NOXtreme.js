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
    rowCheck(gameBoard[position[0]], position, symbol) ? true // checks the row containing the last move to see if there is a win
    : columnCheck(gameBoard, position, symbol) ? true // checks the column containing the last move to see if there is a win
    : diagCheck(gameBoard, position, symbol) ? true // checks both diagonals for a win
    : false // retruns false to continue game

// checks to see if all the characters in a specified row matche the current player character
const rowCheck = (arr, pos, symbol) => symbol == arr[0] && arr[0] == arr[1] && arr[1] == arr[2] ? (finalMessage =`${player} chooses row ${pos[0]+1}, column ${pos[1]+1}.\n${player} wins on row ${pos[0]+1}!`, true) : false

// checks to see if all the characters in a specified column match the current player symbol
const columnCheck = (arr, pos, symbol) => symbol == arr[0][pos[1]] && arr[0][pos[1]] == arr[1][pos[1]] && arr[1][pos[1]] == arr[2][pos[1]] ? (finalMessage =`${player} chooses row ${pos[0]+1}, column ${pos[1]+1}.\n${player} wins on column ${pos[1]+1}!`, true) : false

// checks to see if all the characters in a diagonal match the current player character
const diagCheck = (arr, pos, symbol) => symbol == arr[1][1] && ((arr[1][1] == arr[0][0] && arr[0][0] == arr[2][2]) || (arr[1][1] == arr[0][2] && arr[0][2] == arr[2][0])) ? (finalMessage =`${player} chooses row ${pos[0]+1}, column ${pos[1]+1}.\n${player} wins on a diagonal!`, true) : false 

// checks to see if any rows include spaces
const drawCheck = (arr, pos) => (arr[0].includes(' ') || arr[1].includes(' ') || arr[2].includes(' ')) ? false : (finalMessage = `${player} chooses row ${pos[0]+1}, column ${pos[1]+1}.\n*spooky western music* This game ends in a draw pardner.`, true)

displayBoard(board)    // displays the empty board before starting the main loop 
noXtreme()
function noXtreme (){
    for (let i = 0; i < 9; i++) {// the main for loop, each iteration is a turn
        playerCheck(i) // passes the current iteration into the playerCheck function to get the right information into the variables
        console.log(`It's ${player}'s turn (${stamp}).\n`) //outputs the player turn
        
        let [row, column] = getPosition() // destructures the returned row and column identifiers into locally scoped variables
        // row and column varialbes must be destuctured so that the board can be updated by putting the variables in as index calls for the board Array
        board[row][column] = stamp // places the player icon (X or O)

        if(winner(board, [row, column], stamp)){ // calls the win wrangler to check for win conditions
            break // breaks the outer for loop that handles turns to end the game if there is a win condition
        }  else if(drawCheck(board,[row, column])){ // checks the board for a draw if there is no win
            break //breaks the outer for loop that handles turns and ends the game 
        } else {   // if not win or draw display the board
            displayBoard(board,`${player} chooses row ${row+1}, column ${column+1}.\n`) // calls the display board function to display the board and sends a string to display the player's chosen position at the end
        }
    }

displayBoard(board, finalMessage) // the for loop has ended displays the current game state and current value of final message
}

function getPosition(){ // creates the getPosition function which will randomly generate row and column coordinates until it gets an empty space on the board.
    let row = 0 // creates an internally scoped variable for row
    let column = 0 // creates an internally scoped variable for column  
    let checkPosition = true // creates an assignable condition to regulate the while loop so it knows when to stop generating new numbers
    
    while (checkPosition) { // creates a while loop to generate random coordinates for the next move
            column = Math.floor(Math.random() * 3) // generates a column number - generates a random number between 0 and 3 and stores it in the column variable
            row = Math.floor(Math.random() * 3) // generates a row number - generates a random number between 0 and 3 and stores it in the row variable.
            console.log(row,column)  // Re-entered and commented out because I think it's neat for showing people
            // but doesn't need to be on all the time
            board[row][column] == ' ' ? checkPosition = false : checkPosition = true //checks to see that the position generated is not already filled
            //  and ends the while loop by setting the while loop variable to false
        }
//nice
        return [row, column] //returns the row  and column in a temporary array to be destructured into row and column variables outside the funciton
    }
