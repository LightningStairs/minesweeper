class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfBombs = numberOfBombs
    this._numberOfTiles = numberOfRows * numberOfColumns
    this._playerBoard = generatePlayerBoard(numberOfRows, numberOfColumns)
    this._bombBoard = generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs)
  }

  get playerBoard() {
    return this.playerBoard
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      'This tile has already been flipped!'
      return
    }else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._numberOfTiles--
      this._playerBoard[rowIndex][columnIndex] = 'B'
    }else {
      this._numberOfTiles--
      this._playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(rowIndex, columnIndex)
    }
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    let neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];

    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach((offset) => {
      const neighborRowIndex = offset[0] + rowIndex;
      const neighborColumnIndex = offset[1] + columnIndex;
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++
        }
      }
    });
    return numberOfBombs;
  }

}


const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = []
  for (var i = 0; i < numberOfRows; i++) {
    var row = []
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(" ")
    }
    board.push(row)
  }
 return board;
}

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = []
  for (var i = 0; i < numberOfRows; i++) {
    let row = []
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(" ")
    }
    board.push(row)
  }
  numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows)
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns)
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B'
      numberOfBombsPlaced++
    }
  }
  return board;
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  let neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach((offset) => {
    const neighborRowIndex = offset[0] + rowIndex;
    const neighborColumnIndex = offset[1] + columnIndex;
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++
      }
    }
  });
  return numberOfBombs;
}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    'This tile has already been flipped!'
    return
  }else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B'
  }else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex)
  }
}


const printBoard = (board) => {
  let display = board.map(row => row.join(' | ')).join('\n')
  return display
}

let playerBoard = generatePlayerBoard(3, 4)
let bombBoard = generateBombBoard(3, 4, 5)

console.log('Player Board:');
console.log(printBoard(playerBoard));

console.log('Bomb Board:');
console.log(printBoard(bombBoard));

flipTile(playerBoard, bombBoard, 0, 0)

console.log('Updated Player Board:');
console.log(printBoard(playerBoard));
