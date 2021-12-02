// function createGrid(cols, rows) {
//     let grid = new Array(rows);
//     for (let i = 0; i < cols; i++) {
//       grid[i] = new Array(cols);
//     }
  
//     return grid;
//   }
  
//   let grid = createGrid(3, 3);
  
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       grid[i][j] = "-";
//     }
//   }
  
//   function printGrid(grid) {
//     let x = "_________________________________________________\n";
//     let y = "|";
//     let str = "";
//     console.log(x);
//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[i].length; j++) {
//         str += y + "\t" + grid[i][j].toString() + "\t";
//       }
//       console.log(str + "|");
//       console.log(x);
  
//       str = "";
//     }
//   }
  
//   printGrid(grid);
  
//   let player1turn = true;
//   function PutNum(index) {
//     let cols = 3;
//     let rows = 3;
//     let x = parseInt(index / cols);
//     let y = index % rows;
//     if (player1turn) {
//       grid[x][y] = "X";
//     } else {
//       grid[x][y] = "O";
//     }
//     printGrid(grid);
//     player1turn = !player1turn;
//   }
  
//   prompt from user in nodejs
//   const readline = require("readline");
  
//   let choice;
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   Determins if the passed in player has three in a row
//   function checkWin(player) {
//     check who wins
//     let win = false;
//     check rows
//     for (let i = 0; i < grid.length; i++) {
//       let row = grid[i];
//       if (row.every((element) => element === player)) {
//         win = true;
//       }
//     }
//     check columns
//     for (let i = 0; i < grid.length; i++) {
//       let col = [];
//       for (let j = 0; j < grid.length; j++) {
//         col.push(grid[j][i]);
//       }
//       if (col.every((element) => element === player)) {
//         win = true;
//       }
//     }
//     check diagonals
//     let diag1 = [];
//     let diag2 = [];
//     for (let i = 0; i < grid.length; i++) {
//       diag1.push(grid[i][i]);
//       diag2.push(grid[i][grid.length - i - 1]);
//     }
//     if (
//       diag1.every((element) => element === player) ||
//       diag2.every((element) => element === player)
//     ) {
//       win = true;
//     }
//     return win;
//   }
  
//   function checkTie() {
//     for (let i = 0; i < grid.length; i++) {
//       for (let j = 0; j < grid[i].length; j++) {
//         if (grid[i][j] === "-") {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
  
//   function takeInput() {
//     rl.question("Enter a number (Chose from 0 to 8): ", function (num) {
//       if (!isNaN(num)) {
//         choice = parseInt(num);
//         let player = player1turn ? "X" : "O";
//         PutNum(choice);
//         if (choice >= 0 && choice <= 8 ) {
//           if (checkWin(player)) {
//             console.log("Player " + player + " has won!");
//             rl.close();
//             return;
//           } else if (checkTie()) {
//             console.log("It's a tie!");
//             rl.close();
//             return;
//           } else {
//           }
//           takeInput();
//         } else {
//           console.log("Invalid Input");
//           rl.close();
//         }
//       }
//     });
//   }
//   takeInput();


const myF = (name) =>{
  console.log(`hello ${name}`)
}

const name ="soma"
console.log(myF('simra'))
//console.log(module.exports)
module.exports = name