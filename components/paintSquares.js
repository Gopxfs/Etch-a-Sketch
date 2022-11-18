const addColor = (square) => {
  square.style.backgroundColor = 'red';
}

export const paintSquares = () => {
  const squares = document.querySelectorAll(".grid-container__square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => addColor(square))
  })
}

export default paintSquares
