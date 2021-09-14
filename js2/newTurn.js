function newTurn() {
    block = nextBlock;
    xBlock = Math.floor(5 - xSize[block] / 2);
    yBlock = (2 - y4[block]) * 30;
    yFirst = yDown = yBlock / 30;
    myGameArea.setDown();
}