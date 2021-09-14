function upDateDown() {
    while (checkBlock(xBlock, yDown + 1, block)) yDown += 1;
    draw(yDown * 30 - 90, block);
    myGameArea.setBlock();
}