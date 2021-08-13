function selectBlock() {
    x0 = blockDefault[block][0].x0;
    y0 = blockDefault[block][0].y0;
    x1 = blockDefault[block][0].x1;
    x2 = blockDefault[block][0].x2;
    x3 = blockDefault[block][0].x3;
    x4 = blockDefault[block][0].x4;
    y2 = blockDefault[block][0].y2;
    y3 = blockDefault[block][0].y3;
    y4 = blockDefault[block][0].y4;
    xSize = blockDefault[block][0].xSize;
    xBlock = Math.floor((10 - xSize) / 2);
    yBlock = -(1 + y4) * 30;
    next = blockDefault[block][0].next;
    color = blockDefault[block][0].color;
    img.src = blockDefault[block][0].nameBlock;
    yDown = yBlock / 30;
    drawDown();
    dropBlock();
    return 0;
}