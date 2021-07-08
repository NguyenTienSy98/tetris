function selectBlock(nRandom) {
    x0 = blockDefault[nRandom][0].x0;
    y0 = blockDefault[nRandom][0].y0;
    x1 = blockDefault[nRandom][0].x1;
    x2 = blockDefault[nRandom][0].x2;
    x3 = blockDefault[nRandom][0].x3;
    x4 = blockDefault[nRandom][0].x4;
    y1 = blockDefault[nRandom][0].y1;
    y2 = blockDefault[nRandom][0].y2;
    y3 = blockDefault[nRandom][0].y3;
    y4 = blockDefault[nRandom][0].y4;
    xSize = 30 * blockDefault[nRandom][0].xSize;
    ySize = 30 * blockDefault[nRandom][0].ySize;
    xBlock = Math.floor((10 - xSize / 30) / 2);
    yBlock = 30 * (1 - blockDefault[nRandom][0].ySize);
    firstNameBlock = blockDefault[nRandom][0].firstName;
    lastNameBlock = blockDefault[nRandom][0].lastName;
    next = blockDefault[nRandom][0].next;
    color = blockDefault[nRandom][0].color;
    img.src = firstNameBlock + lastNameBlock;
    xDown = xBlock * 30;
    yDown = 0;
    drawImgDown();
    dropBlock();
    return 0;
}