let toggled = false;

const togglePaint = () => {
  const squares = document.querySelectorAll(".grid-container__square");

  if (toggled) {
    squares.forEach((square) => {
      square.removeEventListener("mouseover", addColor, true)
      square.square = square
    })
  } else {
    squares.forEach((square) => {
      square.addEventListener("mouseover", addColor, true)
      square.square = square
    })
  }

  toggled = !toggled;
}

const paintSquare = (square) => {
  square.style.backgroundColor = 'red';
}

const addColor = (event) => {
  event.currentTarget.square.style.backgroundColor = 'red';
}

export const paintSquares = () => {
  const squares = document.querySelectorAll(".grid-container__square");
  squares.forEach((square) => {
    square.addEventListener("mousedown", () => paintSquare(square), true)
    square.addEventListener("mousedown", togglePaint, true)
    square.addEventListener("mouseup", togglePaint, true)
  })
}

export default paintSquares
