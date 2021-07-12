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
    xSize = 30 * blockDefault[block][0].xSize;
    ySize = 30 * blockDefault[block][0].ySize;
    xBlock = Math.floor((10 - xSize / 30) / 2);
    yBlock = -(blockDefault[block][0].ySize * 30);
    firstNameBlock = blockDefault[block][0].firstName;
    lastNameBlock = blockDefault[block][0].lastName;
    next = blockDefault[block][0].next;
    color = blockDefault[block][0].color;
    img.src = firstNameBlock + lastNameBlock;
    xDown = xBlock * 30;
    yDown = 0;
    drawImgDown();
    dropBlock();
    return 0;
}