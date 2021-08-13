function drawDown() {
    yDown = Math.ceil(yBlock / 30);
    while (yDown + 1 + y4 <= 19 && checkBlock(xBlock, yDown + 1, x1, x2, y2, x3, y3, x4, y4)) {
        yDown++;
    }
    if (yDown * 30 > yBlock) {
        draw(yDown * 30, 0);
    }
}