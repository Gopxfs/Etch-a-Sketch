import createGrid from "./createGrid.js";
import paintSquares from "./paintSquares.js";

const app = () => {
  createGrid(16, 500);
  paintSquares();
}
app();