export const createGrid = (gridSize, containerSize) => {
  const gridContainer = document.getElementById('grid-container');
  
  // create grid squares
  for (let i = 0; i < gridSize*gridSize; i+=1) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('grid-container__square')
    gridContainer.appendChild(newDiv)
  };

  // set grid repetition to = gridSize
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  // set grid container size
  gridContainer.style.width = `${containerSize}px`
  gridContainer.style.height = `${containerSize}px`
}

export default createGrid;