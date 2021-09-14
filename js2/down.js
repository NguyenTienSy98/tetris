function down() {
    while (checkBlock(xBlock, yDown + 1 - 3, block)) yDown++;
    dropCanvas.clearRect(0, 0, 300, 600);
    drawDrop(yDown * 30, block);
}