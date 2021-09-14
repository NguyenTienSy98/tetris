function drawDown() {
    while (
        // main 3 -> 22
        yDown + 1 + y4[block] <= 22 &&
        (yDown < 0 || checkBlock(xBlock, yDown + 1, block))
    )
        yDown++;
    draw(yDown * 30, 0);
}