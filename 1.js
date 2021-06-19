function magicSquareConstructor(size) {
  let matrix = [];
  let positionX = 0;
  let positionY = (size - 1) / 2;
  for (let iterable1 = 0; iterable1 < size; iterable1++) {
    matrix[iterable1] = [];
    for (let iterable2 = 0; iterable2 < size; iterable2++) {
      matrix[iterable1][iterable2] = 0;
    }
  }
  for (let iterable = 0; iterable < (size ** 2); iterable++) {
    pos(iterable + 1);
  }
  /////////////////////////////////////////
  function pos(value) {
    matrix[positionX][positionY] = value;
    let currentPositionX = positionX;
    let currentPositionY = positionY;
    positionX--;
    if (positionX < 0) {
      positionX += size;
    }
    positionY--;
    if (positionY < 0) {
      positionY += size;
    }

    if (matrix[positionX][positionY] !== 0) {
      positionX = currentPositionX + 1;
      if (positionX === size) {
        positionX = 0;
      }
      positionY = currentPositionY;
    }
  }
  ////////////////////////////////////
  return matrix;
}

function verifycateMagicSquare(matrixForTest) {
  let matrixSizes = matrixForTest.length;
  let diagonalicSummer1 = 0,
  diagonalicSummer2 = 0;
  for (let i = 0; i < matrixSizes; i++) {
    diagonalicSummer1 = diagonalicSummer1 + matrixForTest[i][i];
    diagonalicSummer2 = diagonalicSummer2 + matrixForTest[i][matrixSizes - 1 - i];
  }
  if (diagonalicSummer1 != diagonalicSummer2) return false;

  for (let iterable1 = 0; iterable1 < matrixSizes; iterable1++) {
    let columnSummer = 0;
    let rowSummer = 0;
    for (let iterable2 = 0; iterable2 < matrixSizes; iterable2++) {
      rowSummer += matrixForTest[iterable1][iterable2];
      columnSummer += matrixForTest[iterable2][iterable1];
    }
    if ((rowSummer != columnSummer) || (columnSummer != diagonalicSummer1)) return false;
  }
  return true;
}
//Getting input data
let matrixSize = Number(prompt("Введите размер матрицы"));

//Processing of input data
if((matrixSize == 0) || (isNaN(matrixSize)) ){
  alert("Это не подходящее значение");
}
else{
  alert(magicSquareConstructor(matrixSize));
  //alert(verifycateMagicSquare(magicSquareConstructor(matrixSize)));
}
