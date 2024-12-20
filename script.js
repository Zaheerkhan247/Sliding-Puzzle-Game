document.addEventListener('DOMContentLoaded', () => {
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const emptyTileIndex = () => tiles.findIndex(tile => tile.textContent === '');

  const isValidMove = (index) => {
    const emptyIndex = emptyTileIndex();
    const rowDifference = Math.abs(Math.floor(index / 4) - Math.floor(emptyIndex / 4));
    const colDifference = Math.abs((index % 4) - (emptyIndex % 4));
    return (rowDifference + colDifference === 1);
  };

  const swapTiles = (index) => {
    const emptyIndex = emptyTileIndex();
    [tiles[index].textContent, tiles[emptyIndex].textContent] = [tiles[emptyIndex].textContent, tiles[index].textContent];
    tiles[index].classList.toggle('empty', tiles[index].textContent === '');
    tiles[emptyIndex].classList.toggle('empty', tiles[emptyIndex].textContent === '');
  };

  tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => {
      if (isValidMove(index)) {
        swapTiles(index);
      }
    });
  });
});
